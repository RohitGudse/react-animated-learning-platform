import { Link, useParams } from "react-router-dom";

const LessonItem = ({ lesson }) => {
  const { id: courseId } = useParams();

  const lessonPath = `/course/${courseId}/lesson/${lesson.id}`;

  return (
    <Link to={lessonPath}>
      {lesson.title}
    </Link>
  );
};

export default LessonItem;