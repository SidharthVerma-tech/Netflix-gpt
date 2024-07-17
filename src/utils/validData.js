export const validateData = (email,password,name) => {
    const isEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
    const isPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
    const isName = /^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/.test(name)

    if(!isEmail) return "Email is not valid"
    if(!isPassword) return "Password is not valid"
    if(!isName) return "Enter valid name"
    return null
}