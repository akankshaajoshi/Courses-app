import { Course } from "@/types/Course";
import { Link } from "react-router-dom";

const index = ({ course }: { course: Course }) => {
  const date = new Date(course.created);
  return (
    <div className="bg-white h-auto w-[100%] p-[20px] flex flex-row mb-[20px] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img className="rounded-t-lg w-[60%]" src={course.image} alt="" />
      <div className="pl-3 w-[80%] flex flex-col justify-between">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{course.name}</h5>
        </a>
        <div>
          <span>Taught by: {course.instructor}</span>
          <br />
          <span>Created on: {date.toUTCString()}</span>
          <br />
        </div>
        <p className="font-normal text-gray-700 dark:text-gray-400">{course.desc}</p>
        <Link to={`/courses/${course.id}`}>
          <span className="inline-flex items-center px-3 py-2 w-[50%] h-[50px] text-sm font-medium text-center text-white bg-blue rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Know more
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default index;
