// Import the RTK Query methods from the React-specific entry point
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BaseURL = import.meta.env.VITE_CRYPTO_NEWS_BASE_URL;
interface createApiRequest {
  url: string;
  params?: object;
}
const createApiRequest = ({ url, params }: createApiRequest) => ({
  url,
  params,
});

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl: BaseURL }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ params }: { params: object }) =>
        createApiRequest({
          url: "/everything",
          params,
        }),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
