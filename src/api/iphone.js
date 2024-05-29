import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const iphone = createApi({
  reducerPath: "iphone",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/" }),
  endpoints: (builder) => ({
    getIphone: builder.query({
      query: () => "iphone",
      method: "GET",
    }),
  }),
});
export const { useGetIphoneQuery } = iphone;
