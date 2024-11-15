import * as Yup from "yup";

export const profileSchema= Yup.object({
    fullName: Yup.string().required("Adınız ve Soyadınız zorunludur.").min(3, "Adınız en az 3 karakter olmalıdır."),
    phoneNumber: Yup.string().required("Telefon Numarası zorunludur.").min(10,"Telefon Numarası en az 10 karakter olmalıdır."),
    email: Yup.string().required("Email zorunludur.").email("Email geçersiz."),
    address: Yup.string().required("Adres zorunludur.").min(4, "Adres en az 4 karakter olmalıdır."),
    job: Yup.string().required("İş bilgisi zorunludur.").min(3, "En az 3 karakter giriniz."),
    bio: Yup.string().required("Biyografi zorunludur.").min(10, "En az 10 karakter olmalıdır."),
})