class Person {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}


interface Driver {
    firstName: string;
    lastName: string;
}


function greetDriver(driver: Driver) {
    return "Hello, " + driver.firstName + " " + driver.lastName;
}

let driver = new Person("Joe", "H.", "Bloggs");

document.body.textContent = greetDriver(driver);



