import { useState } from "react";
import QuizeQuestion from "./QuizeQuestion";

export default function Quiz(){
    const[score, setScore]= useState(0);

    const data=[
        {q: "React is ?", a:"Library"},
        {q: "JSX stand for?", a: "javascript XML" }
    ];

    return(
        <div>
            <h2>Score:{score}</h2>
            {data.map((d,i)=>
            <QuizeQuestion key={i} data={d} add={()=>setScore(s=>s+1)}/>
            )}
        </div>
    )
}