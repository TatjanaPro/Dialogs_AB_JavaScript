//objekts ar metodi
const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };

  //mans piemers
  const breed = {
    name: "labrodor",
    active population : "4000",
    id       : 5566,
    fullName : function() {
      return this.name + " " + this.id;
    }
}
