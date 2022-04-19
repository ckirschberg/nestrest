import { Injectable } from "@nestjs/common";
import { Teacher } from "./teacher.entity";

@Injectable()
export class TeacherService {
    public static teachers: Teacher[] = [];

    findAll() {
        return TeacherService.teachers;
    }
    create(teacher) {
        teacher.id = Math.random();
        TeacherService.teachers.push(teacher);
        return teacher;
    }
    delete(id) {
        TeacherService.teachers = TeacherService.teachers.filter(t => t.id != id)
    }
    update(id, teacher) {
        const index = TeacherService.teachers.findIndex(t => t.id === id)
        teacher.id = +id;
        TeacherService.teachers.splice(index, 1, teacher);
        return teacher;
    }
}