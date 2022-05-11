import { Link } from "react-router-dom";
import Form from "./components/Form";


export default function Home() {
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
        </div>
    )
}