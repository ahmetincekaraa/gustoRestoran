import * as Yup from "yup";

export const adminSchema= Yup.object({
    username: Yup.string().required("Kullanıcı adı zorunludur.").min(3, "Kullanıcı adınız en az 3 karakter olmalıdır."),
    password: Yup.string().required("Şifre zorunludur.").
    min(5,"Şifre en az 5 karakter uzunluğunda olmalıdır.")
    // .matches(
    //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@.#\$%\^&\*])/,

    //   "Password must contain at least One Uppercase, One Lowercase, One Number and One Special Case Character"),
    
})