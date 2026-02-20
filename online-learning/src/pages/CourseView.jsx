import { Outlet } from "react-router-dom";
import LessonList from "../components/LessonList";

const lessons=[
  {id:1,title:"Intro"},
  {id:2,title:"Hooks"},
  {id:3,title:"Routing"}
];

export default function CourseView(){
  return(
    <div style={{display:"flex",gap:20}}>
      <LessonList lessons={lessons}/>
      <Outlet/>
    </div>
  )
}