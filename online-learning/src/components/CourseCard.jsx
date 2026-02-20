import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function CourseCard({course}){
  return(
    <motion.div whileHover={{scale:1.05}} className="card">
      <h3>{course.title}</h3>
      <p>{course.lessons} Lessons</p>
      <Link to={`/course/${course.id}`}>Open</Link>
    </motion.div>
  )
}