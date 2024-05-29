import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ipad = createApi({
  reducerPath: "ipad",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/" }),
  endpoints: (builder) => ({
    getIpad: builder.query({
      query: () => "ipad",
      method: "GET",
    }),
  }),
});
export const { useGetIpadQuery } = ipad;
