import { useParams } from "react-router-dom";
import VideoPlayer from "../components/VideoPlayer";
import ProgressBar from "../components/ProgressBar";
import Quiz from "../components/Quiz";

export default function LessonView(){
  const {lessonId}=useParams();

  return(
    <div>
      <h2>Lesson {lessonId}</h2>
      <VideoPlayer src="https://www.w3schools.com/html/mov_bbb.mp4"/>
      <ProgressBar value={60}/>
      <Quiz/>
    </div>
  )
}