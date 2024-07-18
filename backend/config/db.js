import mongoose from "mongoose";
export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://artinap:a1r3t8i6n@user.pwjqlaf.mongodb.net/?retryWrites=true&w=majority&appName=user"
    )
    .then(() => console.log("database connected"))
    .catch((err) => console.log("database not connected", err));
};
