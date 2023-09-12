// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const postsApi = createApi({
  // reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({
    // baseUrl: "https://jsonplaceholder.typicode.com/",
    baseUrl: "https://649422600da866a953674058.mockapi.io/",
  }),
  //query - get endpoints
  //mutation - post,put,delete endpoints
  endpoints: (builder) => ({
    getAllPosts: builder.query({
      query: () => ({ url: "posts", method: "GET" }),
      transformResponse: (res) => res.sort((a, b) => b.id - a.id),
      providesTags: ["posts"],
    }),
    deletePost: builder.mutation({
      query: (id) => ({ url: `posts/${id}`, method: "DELETE" }),
      invalidatesTags: ["posts"],
    }),
    addPost: builder.mutation({
      query: () => ({
        url: `posts`,
        method: "POST",
        body: {
          createdAt: new Date().toISOString(),
        },
      }),
      invalidatesTags: ["posts"],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetAllPostsQuery,
  useDeletePostMutation,
  useAddPostMutation,
} = postsApi;
