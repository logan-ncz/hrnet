import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Form from "./components/Form";


export default function Home() {
    const confirmation = useSelector((state) => state.employees.confirmation)

    return (
        <div className="home">
            <div className="title">
                <h1>HRnet</h1>
            </div>

            <div className="container">
                <Link to='/employeeList' >View Current Employees</Link>

                <h2>Create Employee</h2>
                
                <Form />
            </div>

            {confirmation && <div id="confirmation" className="modal">Employee Created!</div>}
        </div>
    )
}