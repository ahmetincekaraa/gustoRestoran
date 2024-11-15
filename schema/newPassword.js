import * as Yup from "yup";

export const newPasswordSchema = Yup.object({
  password: Yup.string()
    .required("Şifre zorunludur.")
    .min(8, "Şifre en az 8 karakter olmalıdır.")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@.#\$%\^&\*])/,
      "Şifre en az bir Büyük Harf, bir Küçük Harf, bir Rakam ve bir Özel Karakter içermelidir. (!-@-.-#-$-%-^-&-*)"
    ),
  confirmPassword: Yup.string()
    .required("Şifreyi onaylamanız gerekiyor.")
    .oneOf([Yup.ref("password"), null], "Şifreler aynı olmalıdır."),
});
