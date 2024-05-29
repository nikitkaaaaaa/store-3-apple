import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const accessories = createApi({
  reducerPath: "accessories",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/" }),
  endpoints: (builder) => ({
    getAccessories: builder.query({
      query: () => "accessories",
      method: "GET",
    }),
  }),
});
export const { useGetAccessoriesQuery } = accessories;
