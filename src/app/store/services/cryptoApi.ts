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

interface Params {
  params: {
    id: string;
    timePeriod: string;
  };
}
export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl: BaseURL }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: () => createApiRequest(`/coins`),
    }),
    getLimitedCryptos: builder.query({
      query: ({ limit }: { limit: number }) =>
        createApiRequest(`/coins?limit=${limit}`),
    }),
    getCryptoCoin: builder.query({
      query: ({ id }: { id: string }) => createApiRequest(`/coin/${id}`),
    }),

    getCryptoPriceHistory: builder.query({
      query: ({ params }: Params) =>
        createApiRequest(
          `/coin/${params.id}/history?timePeriod=${params.timePeriod}`
        ),
    }),
  }),
});

export const {
  useGetCryptosQuery,
  useGetLimitedCryptosQuery,
  useGetCryptoCoinQuery,
  useGetCryptoPriceHistoryQuery,
} = cryptoApi;
