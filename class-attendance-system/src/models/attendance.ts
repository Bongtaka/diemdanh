export enum AttendanceStatus {
    Present = 'Present',
    Late = 'Late',
    ExcusedAbsence = 'Excused Absence',
    UnexcusedAbsence = 'Unexcused Absence'
  }
  
  export interface Attendance {
    studentId: string;
    status: AttendanceStatus;
    note?: string;
  }
  