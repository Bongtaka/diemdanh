// models/attendanceSession.ts
import { Student } from './student';

export interface AttendanceRecord {
    studentId: string;
    status: 'Present' | 'Late' | 'Excused' | 'Unexcused';
    note?: string;
}

export class AttendanceSession {
    private records: AttendanceRecord[] = [];
    private className: string;
    private date: Date;
    private time: string;

    constructor(className: string, date: Date, time: string) {
        this.className = className;
        this.date = date;
        this.time = time;
    }

    markAttendance(studentId: string, status: 'Present' | 'Late' | 'Excused' | 'Unexcused', note?: string): void {
        this.records.push({ studentId, status, note });
    }

    getRecords(): AttendanceRecord[] {
        return this.records;
    }

    getClassName(): string {
        return this.className;
    }

    getDate(): Date {
        return this.date;
    }

    getTime(): string {
        return this.time;
    }
}
