document.addEventListener('DOMContentLoaded', () => {
    const studentForm = document.getElementById('student-form');
    const studentList = document.getElementById('student-list');

    // Load students from local storage
    function loadStudents() {
        const students = JSON.parse(localStorage.getItem('students')) || [];
        studentList.innerHTML = students.map(student => 
            `<li>${student.name} (${student.dob})</li>`
        ).join('');
    }

    studentForm.addEventListener('submit', event => {
        event.preventDefault();

        const student = {
            name: document.getElementById('student-name').value,
            dob: document.getElementById('student-dob').value,
            gender: document.getElementById('student-gender').value,
            address: document.getElementById('student-address').value,
            contact: document.getElementById('student-contact').value
        };

        let students = JSON.parse(localStorage.getItem('students')) || [];
        students.push(student);
        localStorage.setItem('students', JSON.stringify(students));

        loadStudents();
        studentForm.reset();
    });

    loadStudents();
});
