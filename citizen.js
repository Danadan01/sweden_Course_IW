export default class Citizen {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.isRegistered = false;
  }

  register(address) {
    this.address = address;
    this.isRegistered = true;
  }
}

