import { useEffect, useState } from "react";

export default function ScrollProgress(){
  const [w,setW]=useState(0);

  useEffect(()=>{
    const f=()=>{
      const h=document.documentElement;
      setW((h.scrollTop/(h.scrollHeight-h.clientHeight))*100);
    };
    window.addEventListener("scroll",f);
    return()=>window.removeEventListener("scroll",f);
  },[]);

  return <div style={{width:w+"%",height:4,background:"blue",position:"fixed",top:0}}/>
}