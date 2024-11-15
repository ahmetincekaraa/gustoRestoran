import * as Yup from "yup";

export const loginSchema= Yup.object({
    email: Yup.string().required("Email zorunludur.").email("Email geçersiz."),
    password: Yup.string().required("Şifre zorunludur.").
    min(8,"Şifre en az 8 karakter olmalıdır.").matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@.#\$%\^&\*])/,

      "Şifre en az bir Büyük Harf, bir Küçük Harf, bir Rakam ve bir Özel Karakter içermelidir. (!-@-.-#-$-%-^-&-*)"),
    
})