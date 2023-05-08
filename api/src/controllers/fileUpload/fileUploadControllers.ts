import { Request, Response } from "express";
import fs from "fs";
import path from "path";

class FileUploadControllers {
  public static async upload(req: Request, res: Response) {
    if (!req.files?.files)
      return res.status(400).json({ message: "File missing..." });
    const file: any = req.files.files;
    const md5 = file.md5;
    const extension = path.extname(file.name);
    if (!fs.existsSync(path.join(__dirname, "../..", "uploads"))) {
      fs.mkdir(path.join(__dirname, "../..", "uploads"), (err) => {
        console.log(err);
        return res.status(500).json({ message: "Fail to upload file" });
      });
    }
    const uploadPath = `${path.join(
      __dirname,
      "../..",
      "uploads"
    )}/${md5}${extension}`;

    file.mv(uploadPath, function (err: any) {
      if (err) return res.status(500).json({ message: "Fail to upload image" });

      return res.json(`${md5}${extension}`);
    });
  }
}

export default FileUploadControllers;
