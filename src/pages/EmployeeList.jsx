import { useMemo, useState } from "react";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";

const columns = [
    {
        name: 'First Name',
        selector: row => row.firstName,
        sortable: true
    },
    {
        name: 'Last Name',
        selector: row => row.lastName,
        sortable: true
    },
    {
        name: 'Start Date',
        selector: row => row.startDate,
        sortable: true
    },
    {
        name: 'Department',
        selector: row => row.department,
        sortable: true
    },
    {
        name: 'Date of Birth',
        selector: row => row.dateOfBirth,
        sortable: true
    },
    {
        name: 'Street',
        selector: row => row.street,
        sortable: true
    },
    {
        name: 'City',
        selector: row => row.city,
        sortable: true
    },
    {
        name: 'State',
        selector: row => row.state,
        sortable: true
    },
    {
        name: 'Zip Code',
        selector: row => row.zipCode,
        sortable: true
    },
];

const rowsPerPageOptions = [10, 25, 50, 100]

const TextField = styled.input`
  height: 32px;
  width: 200px;
  border-radius: 3px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border: 1px solid #e5e5e5;
  padding: 0 32px 0 16px;

  &:hover {
    cursor: pointer;
  }
`;

const ClearButton = styled.button`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  height: 34px;
  width: 32px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 32px;
  background-color: #5A6F08;
  border: medium none;
  color: white;
  text-decoration: none;
  font-size: 16px;
`;

const FilterComponent = ({ filterText, onFilter, onClear }) => (
    <>
      <TextField id="search" type="text" placeholder="Filter By Name" aria-label="Search Input" value={filterText} onChange={onFilter} />
      <ClearButton type="button" onClick={onClear}>X</ClearButton>
    </>
);

export default function EmployeeList() {
    const employeesData = useSelector((state) => state.employees.employees);

    const [filterText, setFilterText] = useState('');
	const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
    const filteredItems = employeesData.filter(
		item => item.firstName && item.firstName.toLowerCase().includes(filterText.toLowerCase()),
	);

    const subHeaderComponentMemo = useMemo(() => {
		const handleClear = () => {
			if (filterText) {
				setResetPaginationToggle(!resetPaginationToggle);
				setFilterText('');
			}
		};

		return (
			<FilterComponent onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />
		);
	}, [filterText, resetPaginationToggle]);

    return (
        <div className="employeeList">
            <h1>Current Employees</h1>
            
            <Link to='/' className="homeLink">Home</Link>

            <div id="employeeList-div" className="container">
                <DataTable
                    columns={columns}
                    data={filteredItems}
                    pagination
                    paginationRowsPerPageOptions={rowsPerPageOptions}
                    subHeader
			        subHeaderComponent={subHeaderComponentMemo}
                />
            </div>
        </div>
    )
}