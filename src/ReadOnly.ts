
/* we can just update the name of the user provided that user is constant varibale
this shit is possible in Ts >>

const user = {
    name : "srinjoy",
    age : 20
}

user.name = "asdasdasd";
user.age = 32;

note one thing we can only update the internal elements of the array and objects
//we cant update any string
*/

// to enforce that these values cannot be changed we use Readonly >>>

type USER = {
    readonly name : string;
    readonly age : string;
}

const uSer : USER = {
    name : 'john',
    age : "23"
};

//uSer.name = "asdasd" ; //typescript dosent allow it coz we set the argument inside the user object in read only mode 





