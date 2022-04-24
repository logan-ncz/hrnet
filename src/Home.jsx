import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div>
            <div className="title">
                <h1>HRnet</h1>
            </div>

            <div className="container">
                <Link to='/employee.list' >View Current Employees</Link>

                <h2>Create Employee</h2>
                
                <form action="#" id="create-employee">
                    <label>
                        First Name
                        <input type="text" id="first-name" />
                    </label>

                    <label>
                        Last Name
                        <input type="text" id="last-name" />
                    </label>

                    <label>
                        Date of Birth
                        <input id="date-of-birth" type="text" />
                    </label>

                    <label>
                        Start Date
                        <input id="start-date" type="text" />
                    </label>

                    <fieldset className="address">
                        <legend>Address</legend>

                        <label>
                            Street
                            <input id="street" type="text" />
                        </label>

                        <label>
                            City
                            <input id="city" type="text" />
                        </label>

                        <label>
                            State
                            <select name="state" id="state"></select>
                        </label>

                        <label>
                            Zip Code
                            <input id="zip-code" type="number" />
                        </label>
                    </fieldset>

                    <label>
                        Department
                        <select name="department" id="department">
                            <option>Sales</option>
                            <option>Marketing</option>
                            <option>Engineering</option>
                            <option>Human Resources</option>
                            <option>Legal</option>
                        </select>
                    </label>
                    
                </form>

                {/* <button onClick="saveEmployee()">Save</button> */}
                <button>Save</button>
            </div>
            
            <div id="confirmation" className="modal">Employee Created!</div>
        </div>
    )
}