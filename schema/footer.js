import * as Yup from "yup";

export const footerSchema= Yup.object({
    location: Yup.string().required("Location is required."),
    email: Yup.string().required("Email is required.").email("Email is invalid."),
    phoneNumber: Yup.string().required("Phone Number is required.").min(10,"Phone Number must be at least 10 characters."),
    desc: Yup.string().required("Description is required."),
    day: Yup.string().required("Day is required."),
    time: Yup.string().required("Time is required."),
})