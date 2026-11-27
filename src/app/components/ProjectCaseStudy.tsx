'use client';
import {useState} from 'react';
import {projects} from './projectData';
type Project = (typeof projects)[number];
export default function ProjectCaseStudy({project:p,onPrevious,onNext}:{project:Project;onPrevious?:()=>void;onNext?:()=>void}){
 const images=Array.from(new Set([p.image,...p.images]));
 const [selected,setSelected]=useState(0);
 const index=projects.findIndex(x=>x.id===p.id);
 return <article className="case-study">
 <header className="case-heading"><div className="case-eyebrow">SELECTED WORK / {String(index+1).padStart(2,'0')}</div><div className="case-status">{p.category} <span>·</span> {p.statusLabel}</div><h1 id="case-title">{p.title}</h1><p>{p.description}</p>{p.githubUrl&&<a className="case-action" href={p.githubUrl} target="_blank" rel="noopener noreferrer">View source on GitHub ↗</a>}{p.liveUrl&&<a className="case-action" href={p.liveUrl} target="_blank" rel="noopener noreferrer">Visit live project ↗</a>}</header>
 <div className="case-meta">{[['Client / context',p.client],['Platform',p.category],['Deployment',p.deployment],['Status',p.statusLabel]].map(([label,value])=><div key={label}><span>{label}</span><strong>{value}</strong></div>)}</div>
 <section className="case-gallery" aria-label="Project gallery"><div className="case-gallery-bar"><span>PROJECT VISUALS</span><span>{String(selected+1).padStart(2,'0')} / {String(images.length).padStart(2,'0')}</span></div><div className="case-image"><img src={images[selected]} alt={`${p.title} — ${images[selected].endsWith('.svg')?'cover artwork':`screenshot ${selected+1}`}`} /></div>{images.length>1&&<div className="case-thumbs" aria-label="Choose project screenshot">{images.map((src,i)=><button type="button" key={src} aria-label={`View image ${i+1}`} aria-pressed={i===selected} onClick={()=>setSelected(i)}><img src={src} alt="" loading="lazy"/></button>)}</div>}</section>
 <div className="case-body"><section><div className="case-eyebrow">01 / OVERVIEW</div><h2>About the project</h2><p>{p.fullDescription}</p></section><section><div className="case-eyebrow">02 / ENGINEERING</div><h2>Technology stack</h2><div className="case-tech">{p.tech.map(t=><span key={t}>{t}</span>)}</div></section><section><div className="case-eyebrow">03 / CAPABILITIES</div><h2>Key features</h2><ul className="case-features">{p.features.map((f,i)=><li key={f}><span>{String(i+1).padStart(2,'0')}</span>{f}</li>)}</ul></section><section><div className="case-eyebrow">04 / DEVELOPMENT</div><h2>Challenges</h2><p>{p.challenges}</p><h2>Outcome</h2><p>{p.outcome}</p></section></div>
 {(onPrevious||onNext)&&<footer className="case-pagination"><button onClick={onPrevious} disabled={!onPrevious}>← Previous project</button><button onClick={onNext} disabled={!onNext}>Next project →</button></footer>}
 </article>
}
