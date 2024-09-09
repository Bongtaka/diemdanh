document.addEventListener('DOMContentLoaded', () => {
    const studentForm = document.getElementById('add-student-form');
    const studentListTable = document.getElementById('student-list').getElementsByTagName('tbody')[0];

    studentForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const dob = document.getElementById('dob').value;
        const gender = document.getElementById('gender').value;
        const address = document.getElementById('address').value;
        const contact = document.getElementById('contact').value;

        addStudentToTable(name, dob, gender, address, contact);
        studentForm.reset();
    });

    function addStudentToTable(name, dob, gender, address, contact) {
        const row = studentListTable.insertRow();
        row.insertCell().textContent = name;
        row.insertCell().textContent = dob;
        row.insertCell().textContent = gender;
        row.insertCell().textContent = address;
        row.insertCell().textContent = contact;
        const actionsCell = row.insertCell();
        actionsCell.innerHTML = `<button class="edit-btn">Edit</button> <button class="delete-btn">Delete</button>`;

        actionsCell.querySelector('.edit-btn').addEventListener('click', () => editStudent(row));
        actionsCell.querySelector('.delete-btn').addEventListener('click', () => deleteStudent(row));
    }

    function editStudent(row) {
        // Implement edit functionality here
    }

    function deleteStudent(row) {
        row.remove();
    }
});
