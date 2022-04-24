import { createSlice } from '@reduxjs/toolkit';

const newEmployeeSlice = createSlice({
    name: 'employee',
    initialState: {
        infos: {},
        confirmation: false
    },
    reducers: {
        setInfos: (state, action) => {
            state.infos = action.payload
        },
        setConfirmation: (state, action) => {
            state.confirmation = action.payload
        },
    },
});



const { actions, reducer } = newEmployeeSlice

export const { setInfos, setConfirmation } = actions;

export default reducer