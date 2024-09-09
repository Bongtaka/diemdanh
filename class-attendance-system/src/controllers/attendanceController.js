"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttendanceController = void 0;
var AttendanceController = /** @class */ (function () {
    function AttendanceController() {
        this.sessions = [];
    }
    AttendanceController.prototype.createSession = function (className, date, time) {
        this.sessions.push({ className: className, date: date, time: time, attendanceList: [] });
    };
    AttendanceController.prototype.markAttendance = function (className, date, studentId, status, note) {
        var session = this.sessions.find(function (sess) { return sess.className === className && sess.date === date; });
        if (session) {
            session.attendanceList.push({ studentId: studentId, status: status, note: note });
        }
        else {
            console.error('Session not found');
        }
    };
    AttendanceController.prototype.getAttendanceReport = function (className, date) {
        return this.sessions.find(function (sess) { return sess.className === className && sess.date === date; });
    };
    return AttendanceController;
}());
exports.AttendanceController = AttendanceController;
