import Env from "@/config/Env"
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function generateRandom(): number{
  const min = 20000
  const max = 100000

  return Math.floor(Math.random() * (max-min) + min)
}

export function bytesToMB(bytes: number):number {
  const MB = 1048576;
  return bytes / MB;
}

export function getS3ImageUrl(image: string): string {
  return `${Env.SUPABASE_URL}/storage/v1/object/public/${Env.S3_BUCKET}/${image}`
}
