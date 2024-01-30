import { useState } from "react";
import { useGetCoursesQuery } from "@/store/services/courses";
import CourseCard from "@/components/custom/CourseCard";
import Search from "@/components/custom/Search";
import Spinner from "@/components/shared/Spinner";
import { Course } from "@/types/Course";

const Index = () => {
  const { data, isLoading } = useGetCoursesQuery("");
  const [searchParams, setSearchParams] = useState<string>("");
  const [filteredData, setFilteredData] = useState<Course[]>([]);

  const filterByNameOrInstructor = (searchKey: string) => {
    return data.filter(
      (course: Course) =>
        course.name.toLowerCase().includes(searchKey.toLowerCase()) ||
        course.instructor.toLowerCase().includes(searchKey.toLowerCase())
    );
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParams(e.target.value);
  };

  const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const filtered = filterByNameOrInstructor(searchParams);
    setFilteredData(filtered);
  };

  return (
    <div className="flex flex-row flex-wrap items-center w-[100vw]">
      {isLoading && <Spinner />}
      {data && (
        <Search
          value={searchParams}
          handleOnChange={(e) => handleOnChange(e)}
          handleOnClick={(e) => handleOnClick(e)}
        />
      )}
      {data &&
        (filteredData.length > 0 ? filteredData : data).map((course: Course) => (
          <CourseCard key={course.id} course={course} />
        ))}
    </div>
  );
};

export default Index;
