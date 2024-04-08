import { object, string, any, TypeOf } from "zod";

export const uploadVideosNameSchema = object({
    body: object({
      name: string().trim().min(1, { message: "Заполните имя" }),
    }),
  })



export type UploadVideosNameType = TypeOf<typeof uploadVideosNameSchema>;