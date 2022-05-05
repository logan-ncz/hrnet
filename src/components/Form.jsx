import { states, departments } from "../data/select";
import { useState } from "react";
import { setInfos, setConfirmation } from "../redux/reducers";
import { useDispatch } from "react-redux";
import Dropdown from "react-dropdown";
import DatePicker from "react-datepicker";

import 'react-dropdown/style.css';
import "react-datepicker/dist/react-datepicker.css";

export default function Form() {
    const dispatch = useDispatch();

    const [ employeeInputs, setEmployeeInputs ] = useState({});
    const [dateOfBirthValue, dateOfBirthOnChange] = useState(new Date());
    const [startDateValue, startDateOnChange] = useState(new Date());


    const statesArray = []
    const departmentArray = []

    const convertStates = (items, itemsArray) => {
        items.map(item => {
            return itemsArray.push(item.name)
        })
    }

    convertStates(states, statesArray)
    convertStates(departments, departmentArray)

    const handleInputChange = (e) => {
        const inputName = e.target.id;

        setEmployeeInputs({
            ...employeeInputs,
            [inputName]: e.target.value,
        });

        console.log(employeeInputs)
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(setInfos(employeeInputs))
        dispatch(setConfirmation(true))
    };

    return (
        <form onSubmit={handleSubmit} action="#" id="create-employee">
            <label>
                First Name
            </label>

            <input onChange={handleInputChange} type="text" id="first-name" />

            <label>
                Last Name
            </label>

            <input onChange={handleInputChange} type="text" id="last-name" />

            <label>
                Date of Birth
            </label>

            <DatePicker
                onChange={
                    (date) => {
                        const d = new Date(date).toLocaleDateString('fr-FR');
                        setEmployeeInputs({
                            ...employeeInputs,
                            'date-of-birth': d,
                        });
                        dateOfBirthOnChange(date)
                    }
                } 
                selected={dateOfBirthValue}
            />

            <label>
                Start Date
            </label>

            <DatePicker 
                onChange={
                    (date) => {
                        const d = new Date(date).toLocaleDateString('fr-FR');
                        setEmployeeInputs({
                            ...employeeInputs,
                            'start-date': d,
                        });
                        startDateOnChange(date)
                    }
                } 
                selected={startDateValue}
            />

            <fieldset className="address">
                <legend>Address</legend>

                <label>
                    Street
                </label>

                <input onChange={handleInputChange} id="street" type="text" />

                <label>
                    City
                </label>

                <input onChange={handleInputChange} id="city" type="text" />

                <label>
                    State
                </label>

                <Dropdown options={statesArray} onChange={handleInputChange} value={statesArray[0]} placeholder="Select an option" />

                <label>
                    Zip Code
                </label>

                <input onChange={handleInputChange} id="zip-code" type="number" />
            </fieldset>

            <label>
                Department
            </label>

            <Dropdown options={departmentArray} onChange={handleInputChange} value={departmentArray[0]} placeholder="Select an option" />

            <button type="submit">Save</button>
        </form>
    )
}