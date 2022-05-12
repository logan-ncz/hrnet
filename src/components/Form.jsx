import { states, departments } from "../data/select";
import { useState } from "react";
import { setPushAnEmployee } from "../redux/reducers";
import { useDispatch, useSelector } from "react-redux";
import Dropdown from "react-dropdown";
import DatePicker, { registerLocale } from "react-datepicker";

import 'react-dropdown/style.css';
import "react-datepicker/dist/react-datepicker.css";
import fr from 'date-fns/locale/fr';
import Modal from 'plugin-modal'


export default function Form() {
    registerLocale('fr', fr)

    const dispatch = useDispatch();

    const [ employeeInputs, setEmployeeInputs ] = useState({});
    const [ dateOfBirthValue, dateOfBirthOnChange ] = useState('');
    const [ startDateValue, startDateOnChange ] = useState('');
    const newEmployees = useSelector((state) => state.employees.employees)
    const [ displayModal, setDisplayModal ] = useState(false)

    const statesArray = [];
    const departmentArray = [];

    const convertStates = (items, itemsArray) => {
        items.map(item => {
            return itemsArray.push(item.name)
        })
    };

    convertStates(states, statesArray);
    convertStates(departments, departmentArray);

    const handleInputChange = (e) => {
        const inputName = e.target.id;

        setEmployeeInputs({
            ...employeeInputs,
            [inputName]: e.target.value,
        });

        console.log(employeeInputs)
    };

    const handleDropdownChange = (e, stateName) => {
        const inputName = stateName;

        setEmployeeInputs({
            ...employeeInputs,
            [inputName]: e.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(setPushAnEmployee(employeeInputs))
        setDisplayModal(true)
        console.log(newEmployees)
    };

    return (
        <form onSubmit={handleSubmit} action="#" id="create-employee" className="form">

            <input onChange={handleInputChange} placeholder='First Name' type="text" id="firstName" />

            <input onChange={handleInputChange} placeholder='Last Name' type="text" id="lastName" />

            <DatePicker
                locale='fr'
                onChange={
                    (date) => {
                        const d = new Date(date).toLocaleDateString('fr-FR');
                        setEmployeeInputs({
                            ...employeeInputs,
                            'dateOfBirth': d,
                        });
                        dateOfBirthOnChange(date)
                    }
                } 
                selected={dateOfBirthValue}
                placeholderText={'Date of Birth'}
                dateFormat='P'
            />

            <DatePicker
                locale='fr'
                onChange={
                    (date) => {
                        const d = new Date(date).toLocaleDateString('fr-FR');
                        setEmployeeInputs({
                            ...employeeInputs,
                            'startDate': d,
                        });
                        startDateOnChange(date)
                    }
                } 
                selected={startDateValue}
                placeholderText={'Start Date'}
                dateFormat='P'
            />

            <fieldset className="address">
                <legend>Address</legend>

                <input onChange={handleInputChange} placeholder='Street' id="street" type="text" />

                <input onChange={handleInputChange} placeholder='City' id="city" type="text" />

                <Dropdown className="dropdown" options={statesArray} onChange={(e) => handleDropdownChange(e, 'state')} placeholder='State' />

                <input onChange={handleInputChange} placeholder='Zip Code' id="zipCode" type="number" />
            </fieldset>

            <Dropdown className="dropdown" options={departmentArray} onChange={(e) => handleDropdownChange(e, 'department')} placeholder='Department' />

            <button className="formButton" type="submit">Save</button>
            {displayModal && 
                <Modal setDisplay={setDisplayModal}>
                    Bonjour !
                </Modal>
            }
        </form>
    )
}