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
            </label>

            <input required={true} onChange={handleInputChange} type="text" id="first-name" />

            <label>
                Last Name
            </label>

            <input required={true} onChange={handleInputChange} type="text" id="last-name" />

            <label>
                Date of Birth
            </label>

            <input required={true} onChange={handleInputChange} id="date-of-birth" type="date" />

            <label>
                Start Date
            </label>

            <input required={true} onChange={handleInputChange} id="start-date" type="date" />

            <fieldset className="address">
                <legend>Address</legend>

                <label>
                    Street
                </label>

                <input required={true} onChange={handleInputChange} id="street" type="text" />

                <label>
                    City
                </label>

                <input required={true} onChange={handleInputChange} id="city" type="text" />

                <label>
                    State
                </label>

                <select required={true} onChange={handleInputChange} name="state" id="state">
                    <SelectItem items={states} />
                </select>

                <label>
                    Zip Code
                </label>

                <input required={true} onChange={handleInputChange} id="zip-code" type="number" />
            </fieldset>

            <label>
                Department
            </label>

            <select required={true} onChange={handleInputChange} name="department" id="department">
                <SelectItem items={departments} />
            </select>

            <button type="submit">Save</button>
        </form>
    )
}