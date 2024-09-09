"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassController = void 0;
class ClassController {
    constructor() {
        this.classes = [];
    }
    addClass(className) {
        this.classes.push({ className, students: [] });
    }
    addStudentToClass(className, student) {
        const classData = this.classes.find(cls => cls.className === className);
        if (classData) {
            classData.students.push(student);
        }
        else {
            console.error('Class not found');
        }
    }
    getClass(className) {
        return this.classes.find(cls => cls.className === className);
    }
    listClasses() {
        return this.classes;
    }
}
exports.ClassController = ClassController;
//# sourceMappingURL=classController.js.map