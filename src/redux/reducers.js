import { createSlice } from '@reduxjs/toolkit';
import { mockEmployees } from '../data/MOCK_DATA'

const employeeSlice = createSlice({
    name: 'employees',
    initialState: {
        employees: mockEmployees,
    },
    reducers: {
        setPushAnEmployee: (state, action) => {
            state.employees.push(action.payload)
        }
    }
});

const { actions, reducer } = employeeSlice

export const { setEmployees, setPushAnEmployee } = actions;

export default reducer