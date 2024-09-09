import { Student } from './student';

export class Class {
    private students: Student[] = [];

    addStudent(student: Student): void {
        this.students.push(student);
    }

    removeStudent(studentId: string): void {
        this.students = this.students.filter(student => student.id !== studentId);
    }

    getStudents(): Student[] {
        return this.students;
    }
}