import Student from "./Student";

export default class StudentRepository {
  save(student: Student): void {
    try {
      // Connection and query
    } catch (err) {
      console.log(err.message);
    } 
  }
}
