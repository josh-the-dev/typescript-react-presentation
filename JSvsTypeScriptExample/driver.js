var Person = /** @class */ (function () {
    function Person(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Person;
}());
function greetDriver(driver) {
    return "Hello, " + driver.firstName + " " + driver.lastName;
}
var driver = new Person("Joe", "H.", "Bloggs");
document.body.textContent = greetDriver(driver);
