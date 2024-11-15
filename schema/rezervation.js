import * as Yup from "yup";

export const rezervationSchema= Yup.object({
    fullName: Yup.string().required("Adınız Soyadınız zorunludur.").min(3, "Adınız en az 3 karakter olmalıdır."),
    phoneNumber: Yup.string().required("Telefon Numarası zorunludur.").min(10,"Telefon Numarası en az 10 karakter olmalıdır."),
    email: Yup.string().required("Email zorunludur.").email("Email geçersiz."),
    persons: Yup.string().required("Kişi Sayısı zorunludur."),
    date: Yup.string().required("Tarih ve Saat zorunludur."),
})