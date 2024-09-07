//records and maps are just easier ways or cleaner ways to deal with objects in TYpeScript >>
/*
//normal way >>
type USEr = {
    id : string,
    username : string
}

type Users = {
    [key : string] : USEr;
}


const users : Users = {
    "123" : {
        id : "123",
        username : "srinjoy"
    },
    "321" : {
        id : "321",
        username : "shakir"
    }
}
    */

//records and maps >>

//records helps us to give a cleaner types to objects >>

/*
interface USEr {
    id : string,
    username : string
}

type Users = Record<string,USEr>;

const users = {
    "123" : {
        id:"123",
        username : "srinjoy das"
    },
    "321" : {
        id:"321",
        username : "shakir das"
    }
};

console.log(users["123"]);

*/

//Map >>

type UsEr = {
    name : string,
    age : number
};

const users = new Map<string,UsEr>();

users.set("123" , {name : "srinjoy" , age : 20});
users.set("321" , {name : "shakir" , age : 5});

const useR = users.get("123");
console.log(useR);
