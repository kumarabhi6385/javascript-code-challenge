const Person = require("./person");
const ClassRoom = require("./classroom");

let grade1 = new ClassRoom(false, [
  new Person("Rubeus", "Hagrid"),
  new Person("Harry", "Potter"),
  new Person("Ron", "Weasley"),
  new Person("Hermione", "Granger"),
]);

let grade2 = new ClassRoom(true, [
  new Person("Sherlock", "Gnomes"),
  new Person("John", "Watson"),
  new Person("Mankini", "Gnomes"),
  new Person("Salt", "shaker"),
]);

console.log(grade1.getListOfStudent());
console.log(grade2.getListOfStudent());
