import React, { FC, useState } from 'react';
import { useFormik } from 'formik';
import {
  TextField, Typography, Button,
} from '@material-ui/core';
import { format } from 'date-fns';
import { Employee } from '../../types';


type Props = {
  selectedEmployee: Employee,
  editEmployee: (employee: Employee) => void,
  addEmloyee: (employee: Employee) => void,
  setModalOpen: (isModalOpen: boolean) => void,
  isEditMode: boolean,
};

const EmployeeForm: FC<Props> = ({ 
  selectedEmployee, editEmployee, addEmloyee, setModalOpen, isEditMode }) => {


  const initialFormState = selectedEmployee;
  
  const [date, setDate] = useState(new Date());
  const formik = useFormik({
    initialValues: initialFormState,
    validateOnBlur: false,
    validateOnChange: false,

    onSubmit: (e) => {
      const updatedEmployeeData = {...e, employmentDate: date};
      if (isEditMode) {
        editEmployee(updatedEmployeeData);
      } else {
        addEmloyee(updatedEmployeeData);
      }
      setModalOpen(false);
    },
  });

  const { values } = formik;


  return (
    <form onSubmit={formik.handleSubmit}>
    <Typography variant="h4" gutterBottom>
        {isEditMode ? 'Edit employee' : 'Add new employee'}
      </Typography>
      <Typography variant="h5" gutterBottom>
        Id
      </Typography>
      <Typography variant="h5" gutterBottom>
        {values.id}
      </Typography>
      <Typography variant="h5" gutterBottom>
        First Name
      </Typography>
      <TextField
        required
        value={values.firstName}
        name="firstName"
        onChange={formik.handleChange}
      />
      <Typography variant="h5" gutterBottom>
        Last Name
      </Typography>
      <TextField
        required
        value={values.lastName}
        name="lastName"
        onChange={formik.handleChange}
      />
      <Typography variant="h5" gutterBottom>
        Position
      </Typography>
      <TextField
        required
        value={values.position}
        onChange={formik.handleChange}
        name="position"
      />
      <Typography variant="h5" gutterBottom>
        Employment Date
      </Typography>
      <TextField
        required
        id="date"
        type="date"
        defaultValue={format(date, 'yyyy-MM-dd')}
        onChange={(e) => {
          const newDate = new Date(e.target.value);
          setDate(newDate);
        }}
      />
      <Typography variant="h5" gutterBottom>
        Mentor id
      </Typography>
      <TextField
        value={values.mentorId}
        name="mentorId"
        onChange={formik.handleChange}
      />
      <Typography variant="h5" gutterBottom>
        Department
      </Typography>
      <TextField
        required
        value={values.department}
        name="department"
        onChange={formik.handleChange}
      />
      <div>
        <Button
          type="submit"
          variant="contained"
          >
          Confirm
        </Button>
      </div>
    </form>
  );
};

export default EmployeeForm;
