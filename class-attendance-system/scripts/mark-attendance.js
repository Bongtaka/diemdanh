document.addEventListener('DOMContentLoaded', () => {
    const attendanceForm = document.getElementById('attendance-form');
    const studentSelect = document.getElementById('student-select');
    const sessionSelect = document.getElementById('session-select');
    const attendanceStatus = document.getElementById('attendance-status');
    const attendanceNote = document.getElementById('attendance-note');

    // Load students and sessions for selection
    function loadSelectors() {
        const students = JSON.parse(localStorage.getItem('students')) || [];
        const sessions = JSON.parse(localStorage.getItem('sessions')) || [];
        
        studentSelect.innerHTML = students.map((student, index) => 
            `<option value="${index}">${student.name}</option>`
        ).join('');

        sessionSelect.innerHTML = sessions.map((session, index) => 
            `<option value="${index}">${session.className} (${session.date} ${session.time})</option>`
        ).join('');
    }

    attendanceForm.addEventListener('submit', event => {
        event.preventDefault();

        const studentIndex = studentSelect.value;
        const sessionIndex = sessionSelect.value;
        const status = attendanceStatus.value;
        const note = attendanceNote.value;

        let sessions = JSON.parse(localStorage.getItem('sessions')) || [];
        let session = sessions[sessionIndex];

        if (!session.attendanceList) {
            session.attendanceList = [];
        }

        const studentId = studentIndex; // Using index as student ID for simplicity
        const attendance = {
            studentId,
            status,
            note
        };

        session.attendanceList.push(attendance);
        sessions[sessionIndex] = session;
        localStorage.setItem('sessions', JSON.stringify(sessions));

        loadSelectors();
        attendanceForm.reset();
    });

    loadSelectors();
});
