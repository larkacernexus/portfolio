'use client';
import { useState } from 'react';
const chapters = [
 { title:'Understand the workflow', tag:'01 / DISCOVERY', detail:'Translate business requirements into clear workflows, data entities and acceptance criteria.', nodes:['Requirements','Workflow','Data model'] },
 { title:'Build the system', tag:'02 / ENGINEERING', detail:'Connect responsive interfaces to application logic and relational data. Choose the stack to fit the problem.', nodes:['React / Flutter','Laravel / APIs','MySQL / SQLite'] },
 { title:'Verify and deliver', tag:'03 / DELIVERY', detail:'Test critical workflows, review AI-assisted code, document the system and prepare it for deployment and support.', nodes:['Testing','Deployment','Support'] },
];
export default function EngineeringStory(){
 const [active,setActive]=useState(0); const c=chapters[active];
 return <section className="jm-engineering" aria-labelledby="engineering-title"><div className="jm-engineering-inner"><div className="jm-engineering-intro"><span className="jm-micro">03 / ENGINEERING PRACTICE</span><h2 id="engineering-title">From idea<br/>to <em>working software.</em></h2><p>Independent delivery, end to end. I care about the workflows behind the interface as much as the interface itself.</p></div><div className="jm-engineering-console"><div className="jm-console-top"><span>WORKFLOW / SYSTEM DESIGN</span><span>ILLUSTRATIVE MODEL</span></div><div className="jm-console-tabs" aria-label="Development stages">{chapters.map((item,i)=><button key={item.tag} type="button" aria-pressed={active===i} onClick={()=>setActive(i)}>{item.tag}</button>)}</div><div className="jm-console-body" key={active}><span className="jm-micro">{c.tag}</span><h3>{c.title}</h3><p>{c.detail}</p><div className="jm-system-nodes">{c.nodes.map((node,i)=><div key={node}><small>0{i+1}</small><strong>{node}</strong></div>)}</div></div><div className="jm-console-bottom"><span>PERSONAL DEVELOPMENT PRACTICE</span><span>0{active+1} / 03</span></div></div></div></section>;
}
