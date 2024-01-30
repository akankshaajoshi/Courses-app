import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Course } from "@/types/Course";

export const courseApi = createApi({
  reducerPath: "courseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://65b7fc9446324d531d55d1b6.mockapi.io/api/v1/courses" }),
  endpoints: (builder) => ({
    getCourses: builder.query({
      query: () => "/courses",
    }),
    getCourseById: builder.query<Course, string>({
      query: (id) => `/courses/${id}`,
    }),
  }),
});

export const { useGetCoursesQuery, useGetCourseByIdQuery } = courseApi;
