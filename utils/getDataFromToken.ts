import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export const getDataFromToken = async (request: NextRequest) => {
  try {
    const token = request.cookies.get("token")?.value || "";
    const decodedToken: any = jwt.verify(token, process.env.SECRET_TOKEN!);
    return decodedToken.id;
  } catch (err: any) {
    throw new Error(err.message);
  }
};
