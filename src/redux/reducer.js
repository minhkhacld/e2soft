import { createSlice } from "@reduxjs/toolkit";

export const Reducer = createSlice({
    name: "easyenglish",
    initialState: {
        mdSearchVisible: false,
    },

    reducers: {
        setMdSearchVisible: (state, actions) => {
            mdSearchVisible: actions.payload;
        }

    },
})

export const { setMdSearchVisible, } = Reducer.actions;
export default Reducer.reducer