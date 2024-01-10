const mongoose=require("mongoose");
const nodemailer=require("nodemailer")
const fileSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    imageUrl:{
        type:String,
    },
    tags:{
        type:String,
    },
    email:{
        type:String,
    }
});

//post middleware
// fileSchema.post("save",async function(doc){
//     try{
//         console.log("Doc",doc);

//         //transpoter
//         //shift all configuration to config folder
//         let transpoter=nodemailer.createTransport({
//             host:process.env.MAIL_HOST,
//             auth:{
//                 user:process.env.MAIL_USER,
//                 pass:process.env.MAIL_PASS,
//             }
//         });

//         //send mail
//         let info=await transpoter.sendMail({
//             from: 'Chandan-Software Developer',
//             to:doc.email,
//             subject:"New file Uploaded",
//             html:`<h2>Hello jii</h2><p>Five uploaded:<a href="${doc.imageUrl}"></a> </p>`
//          })
//     }catch(error){
//       console.log(error)
//     }
// })

const File=mongoose.model("File",fileSchema);
module.exports=File;