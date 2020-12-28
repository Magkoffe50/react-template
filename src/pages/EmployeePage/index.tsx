import React, { useState, useCallback } from 'react';
import { IconButton, Typography } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { Modal } from '../../components';
import { EmployeeTable, EmployeeForm } from '../../containers';
import styles from './styles.module.scss';
import type { Employee } from '../../types';

const EmployeePage = () => {
  const date: Date = new Date();
  const [idCounter, setIdCounter] = useState<number>(2);
  const initialEmployee = {
    id: 2,
    firstName: '',
    lastName: '',
    position: '',
    employmentDate: new Date(),
    mentorId: 0,
    department: 0,
  };

  const initialData = [
    {
      id: 1,
      firstName: 'V',
      lastName: 'K',
      position: 'janitor',
      employmentDate: date,
      mentorId: 999,
      department: 1,
    },
    {
      id: 2,
      firstName: 'Va',
      lastName: 'K',
      position: 'janitor',
      employmentDate: date,
      mentorId: 999,
      department: 1,
    },
    {
      id: 3,
      firstName: 'Vb',
      lastName: 'K',
      position: 'janitor',
      employmentDate: date,
      mentorId: 999,
      department: 1,
    },
    {
      id: 4,
      firstName: 'Vc',
      lastName: 'K',
      position: 'janitor',
      employmentDate: date,
      mentorId: 999,
      department: 1,
    },
    {
      id: 5,
      firstName: 'Ve',
      lastName: 'K',
      position: 'janitor',
      employmentDate: date,
      mentorId: 999,
      department: 1,
    },
  ];

  const [employees, setEmployees] = useState<Employee[]>(initialData);
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedEmployee, setSelectedEmployee] = useState<Employee>(initialEmployee);
  const [isEditMode, setEditMode] = useState<boolean>(false);

  const deleteEmployee = (id: number) => {
    const newEmployeesData = employees.filter((employee) => employee.id !== id);
    setEmployees(newEmployeesData);
  };

  const preeditEmployee = useCallback((employee: Employee) => {
    setSelectedEmployee(employee);
    setModalOpen(true);
  }, []);

  const editEmployee = (employee: Employee) => {
    setEmployees(
      employees.map(el => (
        el.lastName === employee.lastName) ? { ...employee } : el),
    );
  };

  const preaddEmployee = () => {
    setSelectedEmployee({
      ...initialEmployee,
      id: idCounter,
    });
    setModalOpen(true);
  };

  const addEmloyee = (employee: Employee) => {
    const newEmployees = [...employees, {...employee, employmentDate: employee.employmentDate}];
    setEmployees(newEmployees);
    setIdCounter(idCounter + 1);
  };

  const addButtonHandler = () => {
    setEditMode(false);
    preaddEmployee();
  };
  return (
    <>
      <Modal className={styles.modal} isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <EmployeeForm
          selectedEmployee={selectedEmployee}
          editEmployee={editEmployee}
          addEmloyee={addEmloyee}
          setModalOpen={setModalOpen}
          isEditMode={isEditMode}
        />
      </Modal>
      <EmployeeTable
        data={employees}
        deleteEmployee={deleteEmployee}
        preeditEmployee={preeditEmployee}
        setEditMode={setEditMode}
      />
      <div className={styles.addNewEmployee}>
        <IconButton onClick={() => addButtonHandler()} aria-label="add">
          <AddCircleIcon />
        </IconButton>
        <Typography variant="h6" gutterBottom>
          Add new employee
        </Typography>
      </div>
    </>
  );
};

export default EmployeePage;