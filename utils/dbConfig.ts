// import mongoose from "mongoose";

// export async function connectDB() {
//   try {
//     await mongoose.connect(process.env.MONGODB_URL!);
//     const connection = mongoose.connection;
//     connection.on("connected", () => {
//       console.log("MongoDB Connected");
//     });

//     connection.on("error", (err) => {
//       console.log("MongoDB Error : " + err.message);
//       process.exit();
//     });
//   } catch (err: any) {
//     console.log(err.message);
//   }
// }

import prisma from "../prisma";

export const connectDB = async () => {
    try {
        await prisma.$connect();

    } catch (error: any) {
        return new Error(error.message)
    } finally {
        await prisma.$disconnect()
    }
}
