import { apiSlice } from "../api/apiSlice";
import { signIn } from "./authSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (credentials) => ({
        url: "/api/login",
        method: "POST",
        body: credentials,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const { data } = (await queryFulfilled) || {};

          const { token, user } = data || {};
          console.log(data);
          localStorage.setItem(
            "auth",
            JSON.stringify({
              user,
              token,
            })
          );

          dispatch(
            signIn({
              user,
              token,
            })
          );
        } catch (err) {}
      },
    }),
    register: builder.mutation({
      query: (data) => ({
        url: "/api/register",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;

          localStorage.setItem(
            "auth",
            JSON.stringify({
              token: result.data.token,
              user: result.data.user,
            })
          );

          dispatch(
            signIn({
              token: result.data.token,
              user: result.data.user,
            })
          );
        } catch (err) {}
      },
    }),
  }),
});

export const { useLoginUserMutation, useRegisterMutation } = authApiSlice;
