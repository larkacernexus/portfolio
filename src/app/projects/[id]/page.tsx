import Link from 'next/link';
import {notFound} from 'next/navigation';
import {projects} from '../../components/projectData';
import ProjectCaseStudy from '../../components/ProjectCaseStudy';
export function generateStaticParams(){return projects.map(p=>({id:p.id}));}
export default function ProjectPage({params}:{params:{id:string}}){const p=projects.find(x=>x.id===params.id);if(!p)notFound();return <main className="case-route"><div className="case-toolbar"><Link href="/">← Portfolio</Link></div><ProjectCaseStudy project={p}/></main>}
