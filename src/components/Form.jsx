import SelectItem from "./SelectItem";
import { states, departments } from "../data/select";
import { useState } from "react";
import { setInfos, setConfirmation } from "../redux/reducers";
import { useDispatch } from "react-redux";

export default function Form() {
    const dispatch = useDispatch();

    const [ employeeInputs, setEmployeeInputs ] = useState({});

    const handleInputChange = (e) => {
        const inputName = e.target.id;

        setEmployeeInputs({
            ...employeeInputs,
            [inputName]: e.target.value,
        });
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
                <input required={true} onChange={handleInputChange} type="text" id="first-name" />
            </label>

            <label>
                Last Name
                <input required={true} onChange={handleInputChange} type="text" id="last-name" />
            </label>

            <label>
                Date of Birth
                <input required={true} onChange={handleInputChange} id="date-of-birth" type="date" />
            </label>

            <label>
                Start Date
                <input required={true} onChange={handleInputChange} id="start-date" type="date" />
            </label>

            <fieldset className="address">
                <legend>Address</legend>

                <label>
                    Street
                    <input required={true} onChange={handleInputChange} id="street" type="text" />
                </label>

                <label>
                    City
                    <input required={true} onChange={handleInputChange} id="city" type="text" />
                </label>

                <label>
                    State
                    <select required={true} onChange={handleInputChange} name="state" id="state">
                        <SelectItem items={states} />
                    </select>
                </label>

                <label>
                    Zip Code
                    <input required={true} onChange={handleInputChange} id="zip-code" type="number" />
                </label>
            </fieldset>

            <label>
                Department
                <select required={true} onChange={handleInputChange} name="department" id="department">
                    <SelectItem items={departments} />
                </select>
            </label>

            {/* <button onClick="saveEmployee()">Save</button> */}
            <button type="submit">Save</button>
            
        </form>
    )
}