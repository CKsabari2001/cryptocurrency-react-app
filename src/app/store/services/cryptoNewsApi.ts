// Import the RTK Query methods from the React-specific entry point
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeader = {
  "X-RapidAPI-Key": import.meta.env.VITE_X_RapidAPI_Key,
  "X-RapidAPI-Host": import.meta.env.VITE_X_RapidAPI_HOST_NEWS,
};

const BaseURL = import.meta.env.VITE_CRYPTO_NEWS_BASE_URL;

const createApiRequest = (url: string) => ({
  url,
  headers: cryptoApiHeader,
});

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl: BaseURL }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ params }) => createApiRequest(params.source),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
