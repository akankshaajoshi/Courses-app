import Details from "@/components/custom/Details";
import Spinner from "@/components/shared/Spinner";
import { useGetCourseByIdQuery } from "@/store/services/courses";

const Index = ({ id }: { id: string }) => {
  const { data, isLoading } = useGetCourseByIdQuery(id);
  return (
    <div className="w-[100vw] h-[100vh]">
      {isLoading && <Spinner />}
      {data && <Details course={data} />}
    </div>
  );
};

export default Index;
