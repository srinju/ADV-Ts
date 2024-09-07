

//partial -- >  makes all properties of a type optional , creating a type with the same properties , but each marked as optional.
//partial is specifically useful when we want to do Updates 

//if there is a scenario where we have a interface user with name age and email as string and all the fields are required but we want to change all the name , age and email to oprional then we will use partial

interface User {
    id : string,
    name : string,
    age : string,
    email : string,
    password : string
}

type updateProps = Pick<User , 'name' | 'age' | 'email'>;

type updatepropsoptional = Partial<updateProps>; //what it does is that it makes the fields which needs to be updated as optional like the user can only update name or age or name and age .....etc etc..so we make it partial that we pick the updatable fields from the User interface and then with the help of partial we make the updatable fields optional that it depends on the user which they want to update

function updateuser(updatedprops : updatepropsoptional) {
    //hit the db
}

