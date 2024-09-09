document.addEventListener('DOMContentLoaded', () => {
    const sessionForm = document.getElementById('create-session-form');

    sessionForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const className = document.getElementById('className').value;
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;

        // Call function to handle session creation
        createSession(className, date, time);
        sessionForm.reset();
    });

    function createSession(className, date, time) {
        // Implement session creation logic here
        console.log(`Session created: ${className}, ${date}, ${time}`);
    }
});
