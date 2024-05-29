import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const watch = createApi({
  reducerPath: "watch",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/" }),
  endpoints: (builder) => ({
    getWatch: builder.query({
      query: () => "watch",
      method: "GET",
    }),
  }),
});
export const { useGetWatchQuery } = watch;
