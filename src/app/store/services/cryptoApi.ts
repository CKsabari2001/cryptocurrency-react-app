// Import the RTK Query methods from the React-specific entry point
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeader = {
  "X-RapidAPI-Key": import.meta.env.VITE_X_RapidAPI_Key,
  "X-RapidAPI-Host": import.meta.env.VITE_X_RapidAPI_HOST,
};

const BaseURL = import.meta.env.VITE_CRYPTO_BASE_URL;

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
