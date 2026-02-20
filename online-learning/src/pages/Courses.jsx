import CourseCard from "../components/CourseCard";

const courses=[
  {id:1,title:"React Mastery",lessons:5},
  {id:2,title:"JavaScript Pro",lessons:4}
];

export default function Courses(){
  return(
    <div>
      {courses.map(c=>
        <CourseCard key={c.id} course={c}/>
      )}
    </div>
  )
}