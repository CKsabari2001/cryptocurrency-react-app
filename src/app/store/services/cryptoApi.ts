// Import the RTK Query methods from the React-specific entry point
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeader = {
  "X-RapidAPI-Key": "8f5587d92fmshca1f2381c70d13bp14aff7jsn5aee78ca8770",
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
};

const BaseURL = "https://coinranking1.p.rapidapi.com";

const createApiRequest = (url: string) => ({
  url,
  headers: cryptoApiHeader,
});

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl: BaseURL }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: () => createApiRequest("/coins"),
    }),
  }),
});

export const { useGetCryptosQuery } = cryptoApi;
