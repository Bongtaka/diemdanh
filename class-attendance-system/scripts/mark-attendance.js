document.addEventListener('DOMContentLoaded', () => {
    const attendanceForm = document.getElementById('mark-attendance-form');

    // Populate session and student options here (fetch from server or static data)

    attendanceForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const session = document.getElementById('session').value;
        const student = document.getElementById('student').value;
        const status = document.getElementById('status').value;
        const note = document.getElementById('note').value;

        // Call function to handle attendance marking
        markAttendance(session, student, status, note);
        attendanceForm.reset();
    });

    function markAttendance(session, student, status, note) {
        // Implement attendance marking logic here
        console.log(`Attendance marked: ${session}, ${student}, ${status}, ${note}`);
    }
});
