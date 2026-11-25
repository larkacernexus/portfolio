import '../../globals.css';
import './styles/experience.css';
import './styles/case-study.css';
import type { Metadata } from 'next';
export const metadata: Metadata = {title:'Janndhelle Marth Zulueta | Independent Full-Stack Developer',description:'Independent full-stack developer working under Larkacer-Nexus IT Solutions. Web, desktop and mobile engineering.'};
export default function RootLayout({children}:{children:React.ReactNode}) {return <html lang="en" className="dark"><body>{children}</body></html>}
