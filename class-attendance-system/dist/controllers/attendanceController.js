"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttendanceController = void 0;
class AttendanceController {
    constructor() {
        this.sessions = [];
    }
    createSession(className, date, time) {
        this.sessions.push({ className, date, time, attendanceList: [] });
    }
    markAttendance(className, date, studentId, status, note) {
        const session = this.sessions.find(sess => sess.className === className && sess.date === date);
        if (session) {
            session.attendanceList.push({ studentId, status, note });
        }
        else {
            console.error('Session not found');
        }
    }
    getAttendanceReport(className, date) {
        return this.sessions.find(sess => sess.className === className && sess.date === date);
    }
}
exports.AttendanceController = AttendanceController;
//# sourceMappingURL=attendanceController.js.map