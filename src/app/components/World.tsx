'use client';
import {useEffect,useLayoutEffect,useRef,useState} from 'react';
import dynamic from 'next/dynamic';
import {projects} from './projectData';
import AmbientSound from './AmbientSound';
import ProfileContent from './ProfileContent';
import ProjectCaseStudy from './ProjectCaseStudy';
const Space=dynamic(()=>import('./Space'),{ssr:false});
export default function World(){
 const screenBounds=useRef(new Map<number,DOMRect>()), origin=useRef<DOMRect|null>(null);
 const motion=useRef(0),stage=useRef<HTMLDivElement>(null),dialog=useRef<HTMLDialogElement>(null);const [active,setActive]=useState(0),[panel,setPanel]=useState<'profile'|'archive'|null>(null),[detail,setDetail]=useState<number|null>(null),[available,setAvailable]=useState(true);const [expanded,setExpanded]=useState(false),[closing,setClosing]=useState(false);const p=detail===null?null:projects[detail];
 useEffect(()=>{const e=stage.current!;const update=()=>{motion.current=e.scrollTop/Math.max(1,e.clientHeight);};e.addEventListener('scroll',update,{passive:true});update();return()=>e.removeEventListener('scroll',update)},[]);
 useLayoutEffect(()=>{
  const d=dialog.current!;
  if(panel||p){if(!d.open)d.showModal()}else if(d.open)d.close();
  if(!p||expanded)return;
  const from=origin.current;origin.current=null;
  const to=d.getBoundingClientRect();
  const dx=from?from.left+from.width/2-to.left-to.width/2:0;
  const dy=from?from.top+from.height/2-to.top-to.height/2:0;
  d.style.setProperty('--preview-x',`${dx}px`);
  d.style.setProperty('--preview-y',`${dy}px`);

 },[panel,p,expanded]);
 useEffect(()=>{if(dialog.current)dialog.current.scrollTop=0},[detail,panel]);
 const go=(v:number)=>stage.current?.scrollTo({top:v*(stage.current?.clientHeight||1),behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});const step=(direction:number)=>{const current=motion.current;if(current<.9){go(direction>0?1.2:0);return}if(direction<0&&active===0){go(0);return}go(1.2+Math.max(0,Math.min(projects.length-1,active+direction))/2)};const close=()=>{if(closing)return;setClosing(true);window.setTimeout(()=>{setPanel(null);setDetail(null);setExpanded(false);setClosing(false)},matchMedia('(prefers-reduced-motion: reduce)').matches?0:280)};const select=(i:number)=>{
  if(closing)return;
  const finish=()=>{setExpanded(false);setDetail(i)};
  if(dialog.current?.open){finish();return;}
  const w=window.innerWidth,h=window.innerHeight;
  origin.current=screenBounds.current.get(i)??new DOMRect(w*.57,h*.34,w*.23,w*.13);
  finish();
 };
 return <main className="atlas"><Space screenBounds={screenBounds} motion={motion} onSelect={select} onActive={setActive} onFailure={()=>setAvailable(false)}/><div ref={stage} className="atlas-scroll" aria-label="Scroll to explore projects" tabIndex={0}><div style={{height:`${(2.2+(projects.length-1)/2)*100}vh`}}/></div><header className="atlas-nav"><button onClick={()=>go(0)} className="atlas-logo">JMZ<span> / NEXUS</span></button><nav><button onClick={()=>available?go(1.2):setPanel('archive')}>Work</button><button onClick={()=>setPanel('archive')}>Index</button><button onClick={()=>setPanel('profile')}>About / Contact</button></nav></header><img className="atlas-portrait" src="/images/profile/FORMAL2X.png" alt=""/><div className="atlas-intro" style={{opacity: undefined}} ref={el=>{if(el)el.dataset.intro='true'}}><p>INDEPENDENT FULL-STACK DEVELOPER</p><h1>Building systems.<br/>Creating experiences.</h1><h2>Janndhelle Marth Zulueta</h2><p className="atlas-summary">Full-stack developer · Web, desktop & mobile<br/>Available for long-term remote roles.</p><button onClick={()=>available?go(1.2):setPanel('archive')}>Explore work ↘</button></div><aside className="atlas-caption" data-work="true"><div className="atlas-project-kicker"><span>SELECTED WORK</span><span>{String(active+1).padStart(2,'0')} / {projects.length}</span></div><button onClick={()=>select(active)}>{projects[active].title} ↗</button><div className="atlas-tech">{projects[active].tech.map(t=><span key={t}>{t}</span>)}</div><p className="atlas-description">{projects[active].description}</p><button className="atlas-case-link" onClick={()=>select(active)}>Preview project <span>↗</span></button></aside><AmbientSound/><div className="atlas-progress" aria-hidden="true"><i/></div><footer className="atlas-bottom"><button onClick={()=>step(-1)}>↑ Previous</button><span>SCROLL / EXPLORE</span><button onClick={()=>step(1)}>Next ↓</button></footer>{!available&&<button className="atlas-fallback" onClick={()=>setPanel('archive')}>Open accessible project index</button>}<dialog ref={dialog} className={`atlas-dialog${p?(expanded?' atlas-case-dialog atlas-expanded':' atlas-preview-dialog'):''}${closing?' atlas-dialog-closing':''}`} aria-label={p?p.title:panel==='profile'?'About and contact':'Project index'} onCancel={e=>{e.preventDefault();close()}} onClick={e=>{if(e.target===e.currentTarget){const r=e.currentTarget.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)close()}}}><div className={p?'case-toolbar':'atlas-dialog-toolbar'}>{p&&expanded&&<button onClick={()=>{setExpanded(false);if(dialog.current)dialog.current.scrollTop=0}}>← Back to preview</button>}{p&&!expanded&&<button onClick={()=>{setExpanded(false);setDetail(null);setPanel('archive')}}>← Project index</button>}<button className="atlas-close" onClick={close}>Close ×</button></div>{p?(expanded?<ProjectCaseStudy key={p.id} project={p} onPrevious={detail!==null&&detail>0?()=>setDetail(detail-1):undefined} onNext={detail!==null&&detail<projects.length-1?()=>setDetail(detail+1):undefined}/>:<article className="atlas-preview" key={p.id}><div className="preview-visual"><img src={p.image} alt={`${p.title} preview`}/></div><div className="preview-copy"><div className="preview-kicker">PROJECT PREVIEW / {String((detail??0)+1).padStart(2,'0')} · {p.category}</div><h1>{p.title}</h1><p>{p.description}</p><div className="case-tech">{p.tech.map(t=><span key={t}>{t}</span>)}</div><div className="preview-actions"><button onClick={()=>{setExpanded(true);if(dialog.current)dialog.current.scrollTop=0}}>Explore full case study ↗</button>{p.githubUrl&&<a href={p.githubUrl} target="_blank" rel="noopener noreferrer">View source on GitHub ↗</a>}{p.liveUrl&&<a href={p.liveUrl} target="_blank" rel="noopener noreferrer">Visit live project ↗</a>}</div></div></article>):panel==='profile'?<ProfileContent/>:<><h1>Project index</h1><div className="atlas-index">{projects.map((x,i)=><button key={x.id} onClick={()=>select(i)}><span>{String(i+1).padStart(2,'0')}</span><img src={x.image} alt=""/><div><h2>{x.title}</h2><p>{x.description}</p><p>{x.tech.join(' · ')}</p></div></button>)}</div></>}</dialog></main>
}
