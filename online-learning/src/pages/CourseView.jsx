
import { Outlet } from "react-router-dom";
import LessonList from "../components/LessonList";

const lessons = [
  { id: 1, title: "Introduction" },
  { id: 2, title: "React Hooks" },
  { id: 3, title: "React Routing" },
];

const CourseView = () => {
  const courseLessons = lessons.map((lesson) => ({
    ...lesson,
  }));

  return (
    <div className="course-layout">
      <nav className="course-sidebar">
        <LessonList lessons={courseLessons} />
      </nav>

      <article className="course-content">
        <Outlet />
      </article>
    </div>
  );
};

export default CourseView;

