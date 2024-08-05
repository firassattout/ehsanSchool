import stream from "stream";
import { google } from "googleapis";

export const deleteFile2 = async (id) => {
  const KEYFILEPATH = "./googleEhsanFile.json";
  const SCOPES = ["https://www.googleapis.com/auth/drive"];

  const auth = new google.auth.GoogleAuth({
    keyFile: KEYFILEPATH,
    scopes: SCOPES,
  });

  const drive = google.drive({ version: "v3", auth }); // Authenticating drive API

  // Deleting the image from Drive
  drive.files.delete({
    fileId: id,
  });
};
