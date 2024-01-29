import React, { useState } from 'react'
import Header from "./Header.js"
import List from "./List.js"
import Add from "./Add.js"
import Edit from "./Edit.js"
import Data from "../Data/Data.js"
import Swal from 'sweetalert2'

const Dashboard = () => {
    const [employees, setEmployees] = useState(Data);
    const [selectedEmployee, setSelectedEmployee] = useState(null)
    const [isAdding, setIsAdding] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    const handleEdit=(id)=>{
        const [employee] = employees.filter(employee => employee.id === id);
        setSelectedEmployee(employee);
        setIsEditing(true);
        
    }
    const handleDelete=(id)=>{
        Swal.fire({
            icon: 'warning',
            title: 'Are you sure?',
            text: 'Make sure you want to delete this details',
            showConfirmButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'Yes, cancel'
          }).then(result => {
            if(result.value){
                const [employee] = employees.filter(employee => employee.id === id);

                Swal.fire({
                    icon: 'success',
                    title: 'Deleted!',
                    text: `${employee.firstName}'s Data has been removed`,
                    showConfirmButton: true,
                    timer:1500,
                  })

                  setEmployees(employees.filter(employee => employee.id !== id));

            }
          });
    
    }
    return (
        <div className='container'>
            {/* List */}
            {!isAdding && !isEditing && (
                <>
                    <Header
                        setIsAdding={setIsAdding}
                    />
                    <List
                    employees={employees}
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                    
                    />
                </>
            )}
            {/* Add */}
            {isAdding &&(
                <Add
                employees={employees}
                setEmployees={setEmployees}
                setIsAdding={setIsAdding}
                />
            )}
            {/* Edit */}
            {isEditing &&(
                <Edit
                employees={employees}
                selectedEmployee={selectedEmployee}
                setEmployees={setEmployees}
                setIsEditing={setIsEditing}
                />
            )}
        </div>
    )
}

export default Dashboard
