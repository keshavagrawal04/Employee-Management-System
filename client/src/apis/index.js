import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api/v1/",
  }),
  tagTypes: ["User"],
  endpoints: (build) => ({
    login: build.mutation({
      query: (body) => ({
        url: `user/login`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["User"],
    }),
    register: build.mutation({
      query: (body) => ({
        url: `user/register`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["User"],
    }),
    verifyInviteToken: build.query({
      query: (token) => `user/verify-invite-token/${token}`,
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useVerifyInviteTokenQuery,
} = api;
