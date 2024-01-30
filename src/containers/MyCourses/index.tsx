import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { editCourse } from "@/store/userSlice";

const Index = () => {
  const courses = useAppSelector((state) => state.users.courses);
  const dispatch = useAppDispatch();

  const handleCheckboxChange = (courseId: string) => {
    const courseToUpdate = courses.find((course) => course.id === courseId);
    if (courseToUpdate && "completed" in courseToUpdate) {
      dispatch(
        editCourse({
          id: courseId,
          updatedProperties: {
            completed: !courseToUpdate.completed,
          },
        })
      );
    }
  };

  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg  mt-2">
        <table className="w-full">
          <thead className="text-xs pt-5 text-white uppercase bg-black dark:bg-black dark:text-white">
            <tr>
              <th scope="col" className="py-6 text-center sr-only">
                Thumbnail
              </th>
              <th scope="col" className=" py-6 text-center">
                Course name
              </th>
              <th scope="col" className="py-6 text-center">
                Instructor
              </th>

              <th scope="col" className="py-6 text-center">
                Due Date
              </th>
              <th scope="col" className="py-6 text-center">
                Progress
              </th>
              <th scope="col" className="py-6">
                <span>Mark completed</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => {
              return (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="text-center">
                    <img src={course.image} className="w-[100%] h-[100px] p-2" alt={course.name} />
                  </td>
                  <th scope="row" className="text-center font-medium text-gray-900 whitespace-nowrap dark:text-black">
                    {course.name}
                  </th>
                  <td className="text-center">{course.instructor}</td>

                  <td className="text-center">{new Date(course.created).toUTCString()}</td>
                  <td className="px-6 py-4 w-[200px]">
                    <div style={{ width: `${course.progress}%` }} className="h-[5px] bg-green"></div>
                    <hr className={`w-[100%] border-[5px] border-black`} />
                  </td>
                  <td className="px-6 py-4 text-right">
                    <input
                      type="checkbox"
                      checked={course.completed}
                      onChange={() => handleCheckboxChange(course.id)}
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    ></input>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Index;
