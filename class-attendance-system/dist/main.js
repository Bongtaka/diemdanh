"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const attendanceController_1 = require("./controllers/attendanceController"); // Import AttendanceController
const attendanceStatus_1 = require("./models/attendanceStatus"); // Import AttendanceStatus
const attendanceController = new attendanceController_1.AttendanceController();
// Tạo phiên điểm danh
attendanceController.createSession('Class A', '2024-09-01', '08:00 AM');
// Điểm danh với trạng thái được truyền bằng enum AttendanceStatus
attendanceController.markAttendance('Class A', '2024-09-01', '1', attendanceStatus_1.AttendanceStatus.Present);
attendanceController.markAttendance('Class A', '2024-09-01', '2', attendanceStatus_1.AttendanceStatus.Late, 'Traffic delay');
// Hiển thị báo cáo điểm danh
const report = attendanceController.getAttendanceReport('Class A', '2024-09-01');
if (report) {
    console.log(JSON.stringify(report, null, 2));
}
//# sourceMappingURL=main.js.map