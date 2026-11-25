'use client';
import {useEffect,useRef,useState} from 'react';
export default function AmbientSound(){
 const audio=useRef<HTMLAudioElement>(null);
 const wanted=useRef(true);
 const [enabled,setEnabled]=useState(true);
 const [playing,setPlaying]=useState(false);
 const [volume,setVolume]=useState(.12);
 const [error,setError]=useState(false);
 const foreground=()=>document.visibilityState==='visible'&&document.hasFocus();
 const start=()=>{const a=audio.current;if(!a||!wanted.current||!foreground()||!a.paused)return;void a.play().then(()=>{if(!wanted.current||!foreground())a.pause();setError(false)}).catch((e)=>{if(e.name!=='NotAllowedError'&&e.name!=='AbortError')setError(true)})};
 useEffect(()=>{
  wanted.current=true; try{localStorage.removeItem('orbit-sound')}catch{}
  setEnabled(wanted.current);
  if(audio.current)audio.current.volume=.12;
  const retry=(e:Event)=>{if(e.target instanceof Element&&e.target.closest('.atlas-sound'))return;start()};
  const events=['pointerdown','click','touchend','keydown','wheel'];
  events.forEach(name=>window.addEventListener(name,retry,{passive:true}));
  const sync=()=>{if(foreground())start();else audio.current?.pause()};
  const pause=()=>audio.current?.pause();
  const a=audio.current;
  document.addEventListener('visibilitychange',sync);
  window.addEventListener('focus',sync);
  window.addEventListener('blur',pause);
  window.addEventListener('pagehide',pause);
  window.addEventListener('pageshow',sync);
  sync();
  return()=>{events.forEach(name=>window.removeEventListener(name,retry));document.removeEventListener('visibilitychange',sync);window.removeEventListener('focus',sync);window.removeEventListener('blur',pause);window.removeEventListener('pagehide',pause);window.removeEventListener('pageshow',sync);a?.pause()};
 },[]);
 useEffect(()=>{if(audio.current)audio.current.volume=volume},[volume]);
 const toggle=()=>{wanted.current=!wanted.current;setEnabled(wanted.current);if(wanted.current)start();else audio.current?.pause()};
 return <div className="atlas-sound"><audio ref={audio} src="/audio/orbit-soft-chill.ogg" loop preload="auto" onPlay={()=>{if(!wanted.current||!foreground()){audio.current?.pause();return}setPlaying(true)}} onPause={()=>setPlaying(false)} onError={()=>setError(true)}/><button type="button" onClick={toggle} aria-pressed={enabled} aria-label={enabled?'Mute background music':'Enable background music'}><span className={'sound-wave'+(playing?' playing':'')} aria-hidden="true"><i/><i/><i/><i/></span> {enabled?(playing?'Sound on':'Sound on · awaiting interaction'):'Sound off'}</button>{enabled&&<input aria-label="Music volume" type="range" min="0" max="1" step="0.01" value={volume} onChange={e=>setVolume(Number(e.target.value))}/>} {error&&<span role="status">Audio unavailable</span>}</div>
}
