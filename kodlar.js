const Discord = require("discord.js");
const client = new Discord.Client();
const ayarlar= require("./ayarlar.json");

var prefix2 = ayarlar.prefix;

client.on("ready",()=>{
  console.log(`Sunucuya ${client.user.tag} Giriş Yaptı.`);
});

client.on("message",msg =>{
  if(msg.content.toLowerCase()==="sa"){
    msg.reply("as");
  }
  if(msg.content.startsWith(prefix2)){

    if(msg.content.toLowerCase()===prefix2+"e"){
      msg.reply("Kayıt başarılı erkek rolu verildi");
    }
    if(msg.content.toLowerCase()===prefix2+"k"){
      msg.reply("Kayıt başarılı kız rolu verildi");
    }
    else{
      msg.channel.send("Kullanmak için Erkek ise x!e Kız ise x!k");
    }
  }
});
client.on("message" ,msg =>{
  if(msg.content.toLowerCase()==="Nasılsınız"){
    msg.channel.send("Bu  Seni Hiç Alakdar Etmez");
  }
})

client.on("message", m => {
  if (m.channel.id !== "778266266796032021") {
    return;
  }
  if (m.author.id === m.guild.ownerID) return;
  if (m.attachments.size < 1) {
    m.delete();
  }
});