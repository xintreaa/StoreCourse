import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { TypedUseSelectorHook } from "react-redux";
import { catalogApi } from "../../features/catalog/catalogApi";
import { counterSlice } from "../../features/contact/counterReducer";
import { uiSlice } from "../layout/uiSlice";

export const store = configureStore({
    reducer: {
        [catalogApi.reducerPath]: catalogApi.reducer,
        counter: counterSlice.reducer,
        ui: uiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(catalogApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector.withTypes<RootState>();