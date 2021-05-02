import * as yup from 'yup'

const loginSchema = yup.object().shape({
    password: yup
    .string()
    .min(5, "Password must be at least 5 characters")
    .required("Password is required"),

    username: yup
    .string()
    .min(2, "Username must be at least 2 characters")
    .required("Username is required")
}) 
export default loginSchema