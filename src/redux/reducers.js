import { createSlice } from '@reduxjs/toolkit';

const employeeSlice = createSlice({
    name: 'employees',
    initialState: {
        newEmployee: {},
        confirmation: false,
        employees: {},
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



const { actions, reducer } = employeeSlice

export const { setInfos, setConfirmation } = actions;

export default reducer