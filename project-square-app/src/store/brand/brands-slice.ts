import { createSlice } from '@reduxjs/toolkit'

export interface BrandsState {
    data: []
}

const initialState: BrandsState = {
    data: [],
}

export const brandSlice = createSlice({
    name: 'brand',
    initialState,
    reducers: {
        clearBrandsData: (state) => {
            state.data = []
        },

    },
})

// Action creators are generated for each case reducer function
export const { clearBrandsData } = brandSlice.actions
export default brandSlice.reducer