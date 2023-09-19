import * as yup from "yup";

export const registerSchema = yup.object({
    name: yup.string().required().min(3).max(50).required(),
    email: yup.string().email().required().matches(/@gmail\.com$/, 'Must be a valid @gmail.com email') ,
    password: yup.string().required().min(6).max(30).required(),
    password_confirmation: yup.string().oneOf([yup.ref("password"), "This confirm password doesn't matches to above enter"]).required()
}).required();

export type RegisterType = yup.InferType<typeof registerSchema>;


export const loginSchema = yup.object({
    email: yup.string().email().required().matches(/@gmail\.com$/, 'Must be a valid @gmail.com email') ,
    password: yup.string().required().min(6).max(30).required(),
}).required();

export type LoginType = yup.InferType<typeof loginSchema>;