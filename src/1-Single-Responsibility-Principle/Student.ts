import StudentRepository from "./StudentRepository";

export default class Student {
  studentId: string;
  studentDOB: Date;
  address: string;

  save(): void {
    new StudentRepository().save(this);
  }

  getStudentId(): string {
    return this.studentId;
  }

  setStudentId(studentId: string): void {
    this.studentId = studentId;
  }
}
