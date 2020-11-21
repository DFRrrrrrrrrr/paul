const {Client,MessageEmbed} = require("discord.js");
const Discord = require("discord.js");
const client = new Discord.Client();


const ayarlar= require("./ayarlar.json");


var prefix2 = ayarlar.prefix;

client.on("ready",()=>{
  console.log(`Sunucuya ${client.user.tag} Giriş Yaptı.`);
  client.user.setActivity("Deniz Botla Kavgasını",{type:"WATCHING"}).then(presence => console.log(`${presence.activities[0].name}`)).catch(console.error);
});

client.on("message",msg =>{
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

client.on("message",m =>{
if(m.content.toLowerCase()==="nasılsınız"){
    m.author.send("iyi kardeşim sen :heart:");
}
if(m.content==="sa"){
  m.delete();
  m.reply("bu kelimeyi kullanma");
}
if(m.content==="adam"){
  m.react(":thumbsup:");
  m.channel.send("adamsın");
}
});

client.on("message",message2 =>{
if(message2.content === "Kayıt"){
  const kanal = new MessageEmbed()

  .setTitle("Kayıtı Yapan Yetkili")
  .setFooter("Nord Bot ")
  .addField("---------------------")
  .setAuthor("Nord Register Bot") //1.kısım
  .setColor("RANDOM")
  .addField(":heart: dri","Güzel")
  .addField("yapan kişi");

  message2.channel.send(kanal);
}

});


client.on("guildMemberAdd",member =>{
const chat = member.guild.channels.cache.get('778266266796032021');
chat.channel.send(`Arımıza Hoşgeldin ${member}`);
member.send(`${member} Sunucumuza Hoşgeldin`);
});

client.login(ayarlar.token);
