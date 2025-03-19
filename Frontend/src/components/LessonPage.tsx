import Sidebar from "./Sidebar";
import LessonContent from "./LessonContent";
import Checkpoint from "./Checkpoint";

const LessonPage = () => {
  return (
    <div className="lesson-container">
      <Sidebar />
      <div className="lesson-main">
        <LessonContent />
        <Checkpoint />
      </div>
    </div>
  );
};

export default LessonPage;
