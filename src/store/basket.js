import {createSlice} from "@reduxjs/toolkit";

export const basket = createSlice({
    name: 'basket',
    initialState : {
        value: 0
    },
    reducers: {
        add: (state) => {state.value++},
        remove: (state) => {state.value--}
    }
})

// export const add = basket.actions.add;
export const {add, remove} = basket.actions;
export default basket.reducer;
