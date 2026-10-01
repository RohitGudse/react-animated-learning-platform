import { Outlet } from "react-router-dom";
import LessonList from "../components/LessonList";

const COURSE_LESSONS = [
  { id: 1, title: "Intro" },
  { id: 2, title: "Hooks" },
  { id: 3, title: "Routing" },
];

function CourseView() {
  return (
    <main className="course-layout">
      <aside className="course-sidebar">
        <LessonList lessons={COURSE_LESSONS} />
      </aside>

      <section className="course-content">
        <Outlet />
      </section>
    </main>
  );
}

export default CourseView;