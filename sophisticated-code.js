/* sophisticated-code.js - Complex JavaScript Code */

// This code performs a simulation of a virtual city with different types of buildings and citizens

class Building {
  constructor(name, floors, capacity) {
    this.name = name;
    this.floors = floors;
    this.capacity = capacity;
    this.occupants = [];
  }

  checkOccupancy() {
    return this.occupants.length;
  }

  addOccupant(person) {
    if (this.occupants.length < this.capacity) {
      this.occupants.push(person);
      return true;
    } else {
      return false;
    }
  }

  removeOccupant(person) {
    const index = this.occupants.indexOf(person);
    if (index > -1) {
      this.occupants.splice(index, 1);
      return true;
    } else {
      return false;
    }
  }
}

class Person {
  constructor(name, age, profession) {
    this.name = name;
    this.age = age;
    this.profession = profession;
    this.location = null;
  }

  move(building) {
    if (this.location) {
      this.location.removeOccupant(this);
    }
    if (building.addOccupant(this)) {
      this.location = building;
      return true;
    } else {
      return false;
    }
  }
}

// Create buildings and persons

const officeBuilding = new Building("Office Building", 10, 100);
const residentialBuilding = new Building("Residential Building", 20, 200);

const john = new Person("John", 30, "Engineer");
const mary = new Person("Mary", 25, "Doctor");
const simon = new Person("Simon", 40, "Teacher");

// Simulate movement of persons

john.move(officeBuilding);
mary.move(officeBuilding);
simon.move(residentialBuilding);

// Output occupancy information

console.log(officeBuilding.name + " occupancy: " + officeBuilding.checkOccupancy());
console.log(residentialBuilding.name + " occupancy: " + residentialBuilding.checkOccupancy());