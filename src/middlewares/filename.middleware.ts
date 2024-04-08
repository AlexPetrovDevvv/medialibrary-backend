import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";
import fs from "fs"

export default function fileValidate(schema: AnyZodObject) {
    return (req: Request, res: Response, next: NextFunction) => {
      const obj = JSON.parse(JSON.stringify(req.body))

      try {
          schema.parse({
            params: req.params,
            body: obj,
            query: req.query,
          });
        next();
      } catch (e) {
        if(req.file){
          fs.unlink(req.file.path, (err) => {
            if (err)
            //@ts-ignore
              (`successfully deleted ${req.file.path}`);
              })
          }
          return next(e);

      }
    };
  }