export const checkValidData = (email, password, fullName) => {

    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)  //returns true or false boolean
    //google regex for email validation and psswd
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)

    const isNameValid = /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/.test(fullName)

    if(!isNameValid) return "Please provide your valid full name"
    if(!isEmailValid) return "Email ID is not valid"
    if(!isPasswordValid) return "Incorrect password. Please try again"

    return null;

}