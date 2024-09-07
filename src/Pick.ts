interface User {
    id : string,
    name : string,
    age : string,
    email : string,
    password : string
};

type UpdateProps = Pick<User , 'name' | 'age' | 'email' > //updateprops h ki apna user interface jo define kiye h usse name , age and email pick kar rhe haii to update those ...pick is used coz age can be changed from number to string or vice versa so on the interface we let the age to be in one place that is one type and on the pick generic we can pick what all arguments we need and use it accodingly using the pick property


function updateUser(updatedprops : UpdateProps) {
    //hit the database to update the user and we can update only the name , age and the email only
    console.log(`Name : ${updatedprops.name} , age : `)
}