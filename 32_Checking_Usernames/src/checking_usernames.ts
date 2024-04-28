
let current_user: string[] = ['Ashraf','Hamza','Ahmed Ali','Arshad','Amir'];

let new_users: string[] = ['Arham','Ahmed Ali','Hamza','Hussain','Hassan'];

new_users.forEach(newUsername => {
let lowerCase: string = newUsername.toLowerCase();

if(current_user.map(c_user => c_user.toLowerCase()).includes(lowerCase)){
    console.log(`The username ${newUsername}is not availble. Please write a diffrent username`);
}
else{
    console.log(`The username ${newUsername} is available`);

}
})

