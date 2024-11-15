import * as Yup from "yup";

export const footerSchema= Yup.object({
    location: Yup.string().required("Konum zorunludur."),
    email: Yup.string().required("Email zorunludur.").email("E-posta geçersiz."),
    phoneNumber: Yup.string().required("Telefon Numarası zorunludur.").min(10,"Telefon Numarası 10 haneli olmalıdır.").max(11,"Telefon Numarası 10 haneli olmalıdır."),
    desc: Yup.string().required("Açıklama zorundulur."),
    day: Yup.string().required("Gün bilgisi zorunludur."),
    time: Yup.string().required("Zaman bilgisi zorunludur."),
})