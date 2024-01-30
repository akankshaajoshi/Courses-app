import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/store/store";
import { Course } from "@/types/Course";

interface CourseWithStatus extends Course {
  completed?: boolean;
  progress: number;
}

interface UserState {
  name: string;
  courses: CourseWithStatus[];
}

const initialState: UserState = {
  name: "user",
  courses: [
    {
      created: "2024-01-29T11:35:47.297Z",
      name: "iterate revolutionary users",
      desc: "Laborum id reprehenderit hic dolore quas repellendus nesciunt. Assumenda autem accusantium rerum nisi. Placeat quo distinctio eius quaerat et corrupti odio autem. Temporibus eius expedita. Blanditiis architecto at.",
      instructor: "Ms. Kellie Harris",
      image: "https://loremflickr.com/640/480/business",
      duration: 35339,
      location: "Alabama",
      preRequisites:
        "Vitae itaque suscipit occaecati facere odit sequi. Ipsum minus laborum omnis quam tempore eum maxime aliquid. Tenetur tenetur officiis. Rerum in quo. Ipsum expedita maxime deleniti qui eligendi neque eum.",
      syllabus:
        "Vero reiciendis quas minus voluptates architecto. Dicta vitae nobis saepe ad. Voluptates possimus ab incidunt atque repudiandae dignissimos laborum.\nHarum consequatur exercitationem illo. Eos provident a maiores asperiores laudantium. Nihil rerum temporibus. Necessitatibus sed culpa dolor vitae temporibus sequi debitis labore. Error provident possimus dignissimos ipsam nisi atque quaerat dolor. Odio inventore cupiditate sed quibusdam.\nEius numquam qui esse nostrum tempora ea velit. Eveniet laborum sapiente itaque quidem vitae. Amet iste inventore optio inventore eligendi sint. Unde soluta quibusdam eligendi. Repellat sapiente reiciendis perspiciatis quod eveniet itaque perferendis impedit. Fugit minima sit id sed fugiat fuga distinctio officia.",
      status: 19,
      progress: 78,
      id: "1",
    },
    {
      created: "2024-01-29T13:18:42.136Z",
      name: "matrix open-source systems",
      desc: "Eaque iure expedita enim repudiandae rerum. Dolor praesentium harum modi omnis impedit minima dolorem officia quam. Veniam accusamus ducimus earum iure vitae. Quas ex dignissimos aspernatur reiciendis. Explicabo provident esse aliquid id velit perferendis numquam molestiae. Dolores quam consequatur voluptates qui quisquam rem cupiditate.",
      instructor: "Stuart Conn",
      image: "https://loremflickr.com/640/480/business",
      duration: 5038,
      location: "Texas",
      preRequisites:
        "Exercitationem nam hic fugit laudantium neque. Dolores sequi fugiat similique culpa. Mollitia expedita vel quod eum quaerat ea. Id nesciunt possimus sapiente laborum iusto. Voluptate ea aliquam accusamus nemo.",
      syllabus:
        "Ea illo voluptatem. Iure dolores impedit itaque. Perferendis earum repudiandae. Itaque quo nihil facilis sed repellendus aspernatur expedita.\nNeque blanditiis temporibus quos quibusdam. In ratione sed eligendi deleniti quis beatae sint quasi maiores. Tempora necessitatibus accusantium eos itaque debitis asperiores quibusdam. Consequatur odio sapiente dignissimos ducimus eveniet ipsa odit quas distinctio. Voluptate necessitatibus minus consequuntur reprehenderit.\nVoluptatum voluptatem corporis esse aperiam. Labore at unde laborum labore recusandae nostrum. Perferendis labore tempora necessitatibus a repellendus aliquam inventore.",
      status: 14,
      progress: 48,
      id: "2",
    },
    {
      created: "2024-01-29T19:37:50.389Z",
      name: "iterate one-to-one applications",
      desc: "Nobis voluptate perspiciatis vel labore doloremque a laborum nostrum. Quo tenetur cum rem nihil ab ab et accusantium at. Aliquid voluptates numquam nulla. Accusamus libero rem ea. Soluta fuga laborum vel rerum fuga minus debitis commodi omnis.",
      instructor: "Dr. Beulah Smitham",
      image: "https://loremflickr.com/640/480/business",
      duration: 60326,
      location: "New Hampshire",
      preRequisites:
        "Eum porro excepturi velit veritatis dolores pariatur tenetur recusandae. Eveniet sint facilis praesentium. Sed consectetur perspiciatis animi voluptate. Illo hic autem totam natus voluptates ratione culpa praesentium. Accusamus voluptatum rem magni quibusdam odio perferendis et. Odit nihil omnis.",
      syllabus:
        "Sit sed nulla eius tempore vero molestias aperiam. Ex tempore maxime. Ratione cum fugiat iusto delectus et vitae a. Dolore voluptate laboriosam quibusdam vel quia ratione ipsa. Est perferendis harum dolorum doloribus repellendus nulla optio provident commodi.\nUnde temporibus dolorum quasi. Ullam minus cupiditate quam nemo maxime incidunt quam quibusdam ea. Facilis minus temporibus eum asperiores sapiente dolore.\nReprehenderit quasi distinctio quidem. Laboriosam repudiandae natus voluptas aut sequi dolores numquam. Tempore dolorem laudantium error adipisci iste. Rem recusandae fuga itaque quam aut ex similique. Rerum necessitatibus similique quo molestiae officia. Sunt nisi perferendis excepturi quisquam atque.",
      status: 56,
      progress: 98,
      id: "3",
    },
    {
      created: "2024-01-29T19:35:19.870Z",
      name: "disintermediate visionary e-business",
      desc: "Ea architecto maiores beatae id ex earum eaque alias labore. At deleniti praesentium laboriosam cum inventore. Aliquid officiis magnam vel eligendi suscipit sunt quibusdam aspernatur quis. Nulla fuga consequatur explicabo blanditiis reprehenderit non quaerat. Soluta cumque maiores doloribus enim dignissimos. Repellat commodi excepturi voluptatum corrupti ex aliquam nemo reprehenderit.",
      instructor: "Verna Hettinger",
      image: "https://loremflickr.com/640/480/business",
      duration: 52919,
      location: "Oklahoma",
      preRequisites:
        "Quos quaerat eius quia illum. Corrupti fugiat sapiente. Nemo quos occaecati asperiores distinctio totam aperiam ex quidem. Vitae eius at. Dolore asperiores maxime assumenda quasi sapiente reiciendis quaerat. Perspiciatis ex molestiae ea.",
      syllabus:
        "Esse nesciunt labore esse. Aperiam quae magnam quia quas. Asperiores magnam saepe qui at provident neque tempora eveniet. Error quis reprehenderit nobis porro et tempora et fuga esse. Qui deleniti ex vero repellendus deleniti vel laboriosam eveniet tenetur.\nRerum porro possimus. Accusamus nemo vero sapiente ullam et a harum. Non minus voluptatem. Tenetur natus voluptate dolor dicta sint itaque et culpa. Ipsum voluptates itaque.\nMagnam harum blanditiis eum perferendis nobis nesciunt neque officia aut. Corporis tempora atque exercitationem dignissimos quae aperiam voluptas doloribus. Repellat iure ratione fugit nulla. Pariatur commodi inventore expedita. Sequi placeat totam temporibus voluptate id dolore tempora dolorum cum. Ea hic unde dignissimos saepe cum.",
      status: 70,
      progress: 23,
      id: "4",
    },
  ],
};

export const userSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    addCourse: (state, action: PayloadAction<CourseWithStatus>) => {
      state.courses.push(action.payload);
    },
    changeName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    editCourse: (state, action: PayloadAction<{ id: string; updatedProperties: Partial<CourseWithStatus> }>) => {
      const { id, updatedProperties } = action.payload;
      const index = state.courses.findIndex((course) => course.id === id);
      if (index !== -1) {
        state.courses[index] = { ...state.courses[index], ...updatedProperties };
        if ("completed" in updatedProperties) {
          state.courses[index].completed = !state.courses[index].completed;
        }
      }
    },
  },
});

export const { addCourse, changeName, editCourse } = userSlice.actions;

export const selectCourses = (state: RootState) => state.users.courses;

export default userSlice.reducer;
