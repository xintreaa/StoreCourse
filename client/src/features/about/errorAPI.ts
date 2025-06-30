import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithErrorHandling } from "../../app/api/baseApi";

export const errorApi = createApi({

    reducerPath: "errorApi",
    baseQuery: baseQueryWithErrorHandling,
    endpoints: (builder) => ({
        get400error: builder.query<void, void>({
            query: () => ({ url: 'buggy/bad-request' }),
        }),
        get404error: builder.query<void, void>({
            query: () => ({ url: 'buggy/not-found' }),
        }),
        get500error: builder.query<void, void>({
            query: () => ({ url: 'buggy/server-error' }),
        }),
        getValidationError: builder.query<void, void>({
            query: () => ({ url: 'buggy/validation-error' }),
        }),
        get401error: builder.query<void, void>({
            query: () => ({ url: 'buggy/unauthorized' }),
        })
    })
});

export const {
    useLazyGet400errorQuery,
    useLazyGet404errorQuery,
    useLazyGet500errorQuery,
    useLazyGetValidationErrorQuery,
    useLazyGet401errorQuery,
} = errorApi;