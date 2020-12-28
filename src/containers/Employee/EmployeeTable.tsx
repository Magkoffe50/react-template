import React, { FC } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow, Paper,
  IconButton,
} from '@material-ui/core';
import { format } from 'date-fns';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import EditIcon from '@material-ui/icons/Edit';
import type { Employee } from '../../types';


const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

interface Props {
  data: Employee[],
  deleteEmployee: (id: number) => void,
  preeditEmployee: (employee: Employee) => void,
  setEditMode: (isEditMode: boolean) => void,
}

const EmployeeTable: FC<Props> = ({
  data, deleteEmployee, preeditEmployee, setEditMode,
}) => {
  const classes = useStyles();

  const editButtonHandler = (row: Employee) => {
    preeditEmployee(row || 0);
    setEditMode(true);
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="right">id</StyledTableCell>
            <StyledTableCell align="right">First Name</StyledTableCell>
            <StyledTableCell align="right">Last Name</StyledTableCell>
            <StyledTableCell align="right">Position</StyledTableCell>
            <StyledTableCell align="right">Employment Date</StyledTableCell>
            <StyledTableCell align="right">Mentor id</StyledTableCell>
            <StyledTableCell align="right">Department</StyledTableCell>
            <StyledTableCell align="right">Controls</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row: Employee) => (
            <StyledTableRow key={row.firstName}>
              <StyledTableCell align="right">{row.id}</StyledTableCell>
              <StyledTableCell align="right">{row.firstName}</StyledTableCell>
              <StyledTableCell align="right">{row.lastName}</StyledTableCell>
              <StyledTableCell align="right">{row.position}</StyledTableCell>
              <StyledTableCell align="right">{format(row.employmentDate, 'MM/dd/yyyy')}</StyledTableCell>
              <StyledTableCell align="right">{row.mentorId}</StyledTableCell>
              <StyledTableCell align="right">{row.department}</StyledTableCell>
              <StyledTableCell align="right">
                <IconButton onClick={() => editButtonHandler(row)} aria-label="update">
                  <EditIcon />
                </IconButton>
                <IconButton onClick={() => deleteEmployee(row.id || 0)}  aria-label="delete">
                  <DeleteOutlinedIcon/>
                </IconButton>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default EmployeeTable;
