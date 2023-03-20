import { apiSlice } from "../api/apiSlice";
import { userLogedIn } from "./authSlice";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (data) => ({
        url: "/register",
        method: "POST",
        body: data,
      }),
      async onQueryStarted (arg, {queryFulfilled, dispatch}) {
        try {
            const result = await queryFulfilled;

            localStorage.setItem("auth", JSON.stringify({
                accessToken : result.data.accessToken,
                user : result.data.user
            }))

            dispatch(userLogedIn({
                accessToken : result.data.accessToken,
                user : result.data.user
            }))

        } catch (error) {
            // not to write anything.
        }
      }
    }),
    login: builder.mutation({
      query: (data) => ({
        url: "/login",
        method: "POST",
        body: data,
      }),
      async onQueryStarted (arg, {queryFulfilled, dispatch}) {
        try {
            const result = await queryFulfilled;

            localStorage.setItem("auth", JSON.stringify({
                accessToken : result.data.accessToken,
                user : result.data.user
            }))

            dispatch(userLogedIn({
                accessToken : result.data.accessToken,
                user : result.data.user
            }))

        } catch (error) {
            // not to write anything.
        }
      }
    }),
  }),
});


export const {useLoginMutation, useRegisterMutation} = authApi;