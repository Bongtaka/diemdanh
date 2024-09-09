document.addEventListener('DOMContentLoaded', () => {
    const sessionForm = document.getElementById('session-form');
    const sessionSelect = document.getElementById('session-select');

    // Load sessions from local storage
    function loadSessions() {
        const sessions = JSON.parse(localStorage.getItem('sessions')) || [];
        sessionSelect.innerHTML = sessions.map((session, index) => 
            `<option value="${index}">${session.className} (${session.date} ${session.time})</option>`
        ).join('');
    }

    sessionForm.addEventListener('submit', event => {
        event.preventDefault();

        const session = {
            className: document.getElementById('class-name').value,
            date: document.getElementById('session-date').value,
            time: document.getElementById('session-time').value
        };

        let sessions = JSON.parse(localStorage.getItem('sessions')) || [];
        sessions.push(session);
        localStorage.setItem('sessions', JSON.stringify(sessions));

        loadSessions();
        sessionForm.reset();
    });

    loadSessions();
});
