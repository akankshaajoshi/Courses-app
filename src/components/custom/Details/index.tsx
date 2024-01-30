import { Link } from "react-router-dom";
import Badge from "../Badge";
import Accordion from "../Accordion";
import { Course } from "@/types/Course";

const index = ({ course }: { course: Course }) => {
  const date = new Date(course.created);
  return (
    <div className="bg-white h-[100vh] w-[100vw] p-[20px] flex flex-row mb-[20px] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="pl-3 w-[80%] flex flex-col justify-between">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{course.name}</h5>
        <div>
          <span className="font-bold">Taught by: {course.instructor}</span>
          <br />
          <span>Location: {course.location}</span>
          <br />
          <span>Created on: {date.toUTCString()}</span>
          <br />
          <span>Duration: {course.duration % 10} Months</span>
          <br />
        </div>
        <div>
          <span>Enrollment status: {<Badge data={course.status} />} </span>
          <br />
        </div>
        <p className="font-normal text-gray-700 dark:text-gray-400">{course.desc}</p>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          <span className="font-bold">Pre requisites: </span>
          {course.preRequisites}
        </p>
        <Accordion heading={"Syllabus"} body={course.syllabus} />
        <Link to={`/courses`}>
          <span className="inline-flex items-center px-3 py-2 w-[50%] h-[50px] text-sm font-medium text-center text-white bg-blue rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Go back
          </span>
        </Link>
      </div>
    </div>
  );
};

export default index;
