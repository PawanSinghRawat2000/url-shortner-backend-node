const mongoose=require('mongoose');

const connectDB=async()=>{
    const conn=await mongoose.connect(process.env.MONGO_URI);
    console.log(`Server started at PORT:${conn.connection.host}`)
}

module.exports=connectDB