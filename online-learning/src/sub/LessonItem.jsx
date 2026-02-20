import { Link, useParams } from "react-router-dom";

export default function LessonItem({lesson}){
  const {id}=useParams();
  return(
    <Link to={`/course/${id}/lesson/${lesson.id}`}>
      {lesson.title}
    </Link>
  )
}