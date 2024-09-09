// services/attendanceService.ts
import { AttendanceSession } from '../models/attendanceSession';
import { Student } from '../models/student';

export class AttendanceService {
    private sessions: AttendanceSession[] = [];

    createSession(className: string, date: Date, time: string): void {
        const session = new AttendanceSession(className, date, time);
        this.sessions.push(session);
    }

    markAttendance(className: string, date: Date, time: string, studentId: string, status: 'Present' | 'Late' | 'Excused' | 'Unexcused', note?: string): void {
        const session = this.sessions.find(sess => sess.getClassName() === className && sess.getDate().toDateString() === date.toDateString() && sess.getTime() === time);
        if (session) {
            session.markAttendance(studentId, status, note);
        }
    }

    getSessionReports(): string {
        // Logic to generate reports
        return 'Report generated';
    }
}
