import mongoose from "mongoose";

const urlDb = "mongodb+srv://jesica86:19861986@e-commerce.lxmyuxa.mongodb.net/ecommerce";

export const connectMongoDB = async () =>{
    try {
      //Conexion cn la base de datos
    mongoose.connect(urlDb);
    console.log("Mongo DB conectado");
} catch (error) {
    console.log(error);
}
 };
    
