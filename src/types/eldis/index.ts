// ИД отдела
type DepartmentId = number;

// Отдел
interface Department {
  id: DepartmentId
  name: string
}

// ИД работника
type EmployeeId = number;

// Работник
export interface Employee {
  id?: EmployeeId
  firstName: string
  lastName: string
  position: string // Должность
  employmentDate: Date // Дата приема на работу
  mentorId?: EmployeeId // ИД наставника, если есть
  department: DepartmentId // Отдел
}

export interface EmployeeData {
  data: Employee[],
}