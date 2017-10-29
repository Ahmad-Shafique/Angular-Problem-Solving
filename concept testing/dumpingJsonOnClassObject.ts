let json = {"id":"1","name":"qsb"}
console.log(json);


class A{
}

class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

let greeter = new Greeter("world")
greeter.greet()
/*
//@JsonObject
class NameId{
//@JsonMember
let id: number,
//@Jsonmember
let name: string,

public PrintDetails(){console.log(id +" " + name);
}
}


var nameId = TypedJSON.parse(json,NameId);
nameId.PrintDetails();
*/




