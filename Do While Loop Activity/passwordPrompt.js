let correctPassword = "BSCS1A@2025"
let password;
do {
    password = prompt("Enter your password:"); //ask the user for password
    if (password !== correctPassword) {
        console.log("Incorrect, try again.") //tells that the password is wrong
    }
} while (password !== correctPassword) //the program will keep asking until they enter a right password
console.log("Access granted."); //show success message