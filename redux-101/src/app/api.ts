import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export type User = {
  id: string;
  name: string;
};

const API_URL = "http://localhost:3001";

export const usersApi = createApi({
  // Api'ye benzersiz bir id string veriyoruz
  reducerPath: "usersApi",
  // Istek geldiğinde ne yapılıcaksa onu burada yönetiyoruz
  // fetchBaseQuery aslında fetch(API_URL) gibi bir şeyler yapıyo
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  tagTypes: ["Users"],
  // Endpoint listesi veriyoruz
  endpoints: (builder) => ({
    getUsers: builder.query<User[], void>({
      query: () => "/users",
      providesTags: ["Users"]
    }),
    adduser: builder.mutation<User, string>({
        query: (name) => ({
            url:"/users",
            method:"POST",
            body: {name},
        }),
        invalidatesTags:["Users"]
    })
  }),
});

export const { useGetUsersQuery,useAdduserMutation } = usersApi;