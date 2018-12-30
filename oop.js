const Person = function(firstName, lastName, age, likes = []) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.likes = likes;
};

Person.prototype.getBio = function() {
  let bio = `${this.firstName} is ${this.age}\n`;
  this.likes.forEach((like) => {
    bio += `${this.firstName} likes ${like}\n`;
  });

  return bio;
};

Person.prototype.setName = function(fullName) {
  const names = fullName.split(' ');
  this.firstName = names[0];
  this.lastName = names[1];
};

let me = new Person('Sergey', 'Konovalov', 35, ['Data', 'Reading']);

let some = new Person('Some', 'Name', 42, ['Sleeping', 'Eating']);
some.setName('Mr. Heisenberg');
some.getBio = function() {
  return '42';
};
console.log(me.getBio());
console.log(some.getBio());