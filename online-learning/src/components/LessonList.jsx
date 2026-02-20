import LessonItem from "../sub/LessonItem";

export default function LessonList({lessons}){
  return(
    <div>
      {lessons.map(l=>
        <LessonItem key={l.id} lesson={l}/>
      )}
    </div>
  )
}