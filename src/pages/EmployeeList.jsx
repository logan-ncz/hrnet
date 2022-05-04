import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
import { mockEmployees } from '../data/MOCK_DATA'

const columns = [
    {
        name: 'First Name',
        selector: row => row.firstName,
    },
    {
        name: 'Last Name',
        selector: row => row.lastName,
    },
    {
        name: 'Start Date',
        selector: row => row.startDate,
    },
    {
        name: 'Department',
        selector: row => row.department,
    },
    {
        name: 'Date of Birth',
        selector: row => row.dateOfBirth,
    },
    {
        name: 'Street',
        selector: row => row.street,
    },
    {
        name: 'City',
        selector: row => row.city,
    },
    {
        name: 'State',
        selector: row => row.state,
    },
    {
        name: 'Zip Code',
        selector: row => row.zipCode,
    },
];

const rowsPerPageOptions = [10, 25, 50, 100]

export default function EmployeeList() {
    return (
        <div className="employeeList">
            <h1>Current Employees</h1>

            <div id="employee-div" className="container">
                <Link to='/' className="homeLink">Home</Link>

                <DataTable
                    columns={columns}
                    data={mockEmployees}
                    selectableRows
                    pagination
                    paginationRowsPerPageOptions={rowsPerPageOptions}
                />
            </div>
        </div>
        
    )
}