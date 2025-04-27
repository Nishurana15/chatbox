const mongoose=require("mongoose");
const chat=require("./Models/chat.js");

main()
.then(()=>{
    console.log("connection successful");
})
.catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}
let allchats=[
    {
    from:"priya",
    to:"neha",
    msg:"send me your exam sheets",
    created_at:new Date(),
},
{
    from:"sneha",
    to:"kirti",
    msg:"send me your record",
    created_at:new Date(),
},
{
    from:"nishu",
    to:"garima",
    msg:"send me your poems",
    created_at:new Date(),
},
{
    from:"tannu",
    to:"komal",
    msg:"send me your list",
    created_at:new Date(),
},
];
chat.insertMany(allchats);