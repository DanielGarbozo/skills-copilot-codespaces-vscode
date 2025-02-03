function skillsMember() {
  var member = {
    name: 'Paul',
    age: 29,
    skills: ['HTML', 'CSS', 'JS'],
    greet: function() {
      console.log('Hello, my name is ' + this.name);
    }
  };
  return member;
}