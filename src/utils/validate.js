export const checkValidData = (email, password, fullName) => {

    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)  //returns true or false boolean
    //google regex for email validation and psswd
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)

    const isNameValid = /^[a-zA-Z\\s]*$/.test(fullName)
    
   console.log(fullName)
   console.log(isNameValid)
    if(!isNameValid) return "Please provide your valid full name"
    if(email  === "") return "Please enter a valid email address or phone number."
    if(password === "") return "Your password must contain between 4 and 60 characters."
    if(!isEmailValid) return "Email ID is not valid"
    if(!isPasswordValid) return "Incorrect password. Please try again"

    return null;

}