import { createSlice } from '@reduxjs/toolkit';
import { mockEmployees } from '../data/MOCK_DATA'

const employeeSlice = createSlice({
    name: 'employees',
    initialState: {
        employees: mockEmployees,
    },
    reducers: {
        setEmployees: (state, action) => {
            state.employees = action.payload
        },
        setPushAnEmployee: (state, action) => {
            state.employees.push(action.payload)
        }
    }
});

const { actions, reducer } = employeeSlice

export const { setEmployees, setPushAnEmployee } = actions;

export default reducer