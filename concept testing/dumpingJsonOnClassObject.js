var json = { "id": "1", "name": "qsb" };
console.log(json);
var A = /** @class */ (function () {
    function A() {
    }
    return A;
}());
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greeter;
}());
var greeter = new Greeter("world");
greeter.greet();
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
