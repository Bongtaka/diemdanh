document.addEventListener('DOMContentLoaded', () => {
    const saveBtn = document.getElementById('save-btn');
    const exitBtn = document.getElementById('exit-btn');

    saveBtn.addEventListener('click', () => {
        alert('Data saved successfully!');
        // Here, you could implement additional logic to save data to a server if needed.
    });

    exitBtn.addEventListener('click', () => {
        if (confirm('Are you sure you want to exit? Unsaved changes will be lost.')) {
            window.location.href = 'index.html'; // Redirect to the main page or perform other exit actions
        }
    });
});
