import { bytesToMB } from "@/lib/utils";
import * as yup from "yup";


export const homeSchema = yup.object({
    title: yup.string().min(5).max(50).required(),
    country: yup.string().min(5).max(50).required(),
    state: yup.string().min(5).max(50).required(),
    city: yup.string().min(5).max(50).required(),
    price: yup.number().required().typeError("Amount entered should be a number"),
    description: yup.string().min(10).max(20000).required(),
    categories: yup.mixed<Array<string> | []>().test("categories", "Please select atleast one of the categories", (data: any) => {
        const isValid = data?.length >= 1;
        return isValid;
    }),
    image: yup.mixed().test("image", "Only JPEG, JPG, PNG and WEBP are allowed!", (file:any) => {
        const isValid = file?.type === "image/jpeg" || file?.type === "image/jpg" || file?.type === "image/png" || file?.type === "image/webp";
        return isValid;
    }).test("imageSize", "Image should be below 5 MB", (file: any) => {
        const isValid = bytesToMB(file?.size) <= 5;
        return isValid;
    })
}).required();

export type AddHomeType = yup.InferType<typeof homeSchema>;