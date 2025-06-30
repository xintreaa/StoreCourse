import { BaseQueryApi, FetchArgs, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { startLoading, stopLoading } from "../layout/uiSlice";

const customBaseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:5045/api'
});

const sleep = () => new Promise(resolve => setTimeout(resolve, 1000));

export const baseQueryWithErrorHandling = async (args: string | FetchArgs, api: BaseQueryApi, extraOptions: object) => {
    api.dispatch(startLoading()); // Dispatch an action to indicate loading state)
    try {
        await sleep(); // Simulate network delay
        return customBaseQuery(args, api, extraOptions);
    } catch (error) {
        console.error('Error in base query:', error);
        return { error: { status: 'FETCH_ERROR', data: 'An error occurred while fetching data.' } };
    }
    finally {
        api.dispatch(stopLoading()); // Завжди виконується
    }
}