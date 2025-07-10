import { createSlice } from "@reduxjs/toolkit";
import { ProductParams } from "../../app/models/ProductParams";

const initialState: ProductParams = {
    pageNumber: 1,
    pageSize: 8,
    types: [],
    brands: [],
    orderBy: 'name',
    searchTerm: ''
}

export const catalogSlice = createSlice({
    name: 'catalogSlice',
    initialState,
    reducers: {
        setPageNumber: (state, action) => {
            state.pageNumber = action.payload;
        },
        setPageSize: (state, action) => {
            state.pageSize = action.payload;
        },
        setTypes: (state, action) => {
            state.types = action.payload;
            state.pageNumber = 1;
        },
        setBrands: (state, action) => {
            state.brands = action.payload;
            state.pageNumber = 1;
        },
        setOrderBy: (state, action) => {
            state.orderBy = action.payload
            state.pageNumber = 1; // Reset to first page when order changes

        },
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
            state.pageNumber = 1;
        },
        resetParams() {
            return initialState; // Reset to initial state
        }
    }
})

export const { setPageNumber, setPageSize, setTypes, setBrands, setOrderBy, setSearchTerm, resetParams } = catalogSlice.actions;