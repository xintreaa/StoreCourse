import { BaseQueryApi, FetchArgs, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { startLoading, stopLoading } from "../layout/uiSlice";
import { toast } from "react-toastify";
import { router } from "../routes/Routes";

const customBaseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:5045/api'
});

type ErrorResponse = | string | { title: string } | {errors:string[]};

const sleep = () => new Promise(resolve => setTimeout(resolve, 1000));

export const baseQueryWithErrorHandling = async (
    args: string | FetchArgs,
    api: BaseQueryApi,
    extraOptions: object) => {
    api.dispatch(startLoading());

    await sleep();

    const result = await customBaseQuery(args, api, extraOptions);

    api.dispatch(stopLoading());

    if (result.error) {
        console.log(result.error);

        const originalStatus = result.error.status === 'PARSING_ERROR' && result.error.originalStatus
            ? result.error.originalStatus : result.error.status;

        const responceData = result.error.data as ErrorResponse;

        switch (originalStatus) {
            case 400:
                if (typeof responceData === 'string') toast.error(responceData);
                else if ('errors' in responceData)
                {
                    throw Object.values(responceData.errors).flat().join('\n');
                }
                else toast.error(responceData.title);
                break;
            case 401:
                if (typeof responceData === 'object' && 'title' in responceData)
                    toast.error(responceData.title);
                break;
            case 404:
                if (typeof responceData === 'object' && 'title' in responceData)
                    toast.error(responceData.title);
                break;
            case 500:
                if (typeof responceData === 'object')
                    router.navigate('/server-error', { state: { error: responceData } });
                break;
            default:
                break;
        }
    }

    return result;
}