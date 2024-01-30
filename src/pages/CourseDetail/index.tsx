import CourseDetails from "@/containers/CourseDetails";
import { useParams } from "react-router-dom";

const Index = () => {
  const { id } = useParams();
  return <CourseDetails id={id as string} />;
};

export default Index;
