import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const mac = createApi({
  reducerPath: "mac",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/" }),
  endpoints: (builder) => ({
    getMac: builder.query({
      query: () => "mac",
      method: "GET",
    }),
  }),
});
export const { useGetMacQuery } = mac;
