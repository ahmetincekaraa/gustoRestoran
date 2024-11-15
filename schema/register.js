import * as Yup from "yup";

export const registerSchema = Yup.object({
  fullName: Yup.string()
    .required("Adınız Soyadınız zorunludur.")
    .min(3, "Adınız en az 3 karakter olmalıdır."),
  email: Yup.string().required("Email zorunludur.").email("Email geçersiz."),
  password: Yup.string()
    .required("Şifre zorunludur.")
    .min(8, "Şifre en az 8 karakter olmalıdır.")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@.#\$%\^&\*])/,
      "Şifre en az bir Büyük Harf, Bir Küçük Harf, Bir Rakam ve Bir Özel Karakter içermelidir. (!-@-.-#--$-%-^-&-*)"
    ),
  confirmPassword: Yup.string()
    .required("Şifre Tekrarı zorunludur.")
    .oneOf([Yup.ref("password"), null], "Şifreler aynı olmalıdır."),
});
