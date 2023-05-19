module.exports = class ClassRoom {
  hasTeacherAssitance;
  people;
  constructor(hasTeacherAssitance, people) {
    this.hasTeacherAssitance = hasTeacherAssitance;
    this.people = people;
  }
  getListOfStudent() {
    let studentList = [];
    let teacher, assistantTeacher, students;
    if (this.hasTeacherAssitance) {
      // Array destructuring
      [teacher, assistantTeacher, ...students] = this.people;
    } else {
      // Array destructuring
      [teacher, ...students] = this.people;
    }
    students.forEach((item) => {
      // Object destructuring
      //let { property1: variable1, property2: variable2 } = object;
      let { firstName: fname, lastName: lname } = item;
      studentList.push(`${fname} ${lname}`);
    });
    return studentList;
  }
};
