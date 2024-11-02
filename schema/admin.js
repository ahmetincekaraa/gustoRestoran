import * as Yup from "yup";

export const adminSchema= Yup.object({
    username: Yup.string().required("Username is required.").min(3, "Username must be at least 3 characters."),
    password: Yup.string().required("Password is required.").
    min(5,"Password must be at least 5 characters.")
    // .matches(
    //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@.#\$%\^&\*])/,

    //   "Password must contain at least One Uppercase, One Lowercase, One Number and One Special Case Character"),
    
})