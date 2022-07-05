const Discord = require("discord.js") 

const marcus1 = new Discord.Client() 
const marcus2 = new Discord.Client() 
const marcus3 = new Discord.Client() 
const marcus4 = new Discord.Client() 
const axios = require("axios") 

///////////////////////////////////////////////////////////////////

const { url1, url2, url3, url4 } = require("./cfg")
const { token1, token2, token3, token4 } = require("./cfg")
const { guild1, guild2, guild3, guild4 } = require("./cfg")
const { Botdurum } = require("./cfg")

///////////////////////////////////////////////////////////////////
  
///////////////////////////////////////////////////////////////////
  
 marcus1.on("ready", () => { 
     marcus1.user.setActivity(Botdurum); 
     console.log(marcus1.user.tag) 
 }) 
 marcus2.on("ready", () => { 
    marcus2.user.setActivity(Botdurum); 
    console.log(marcus2.user.tag) 
 }) 
 marcus3.on("ready", () => { 
    marcus3.user.setActivity(Botdurum); 
    console.log(marcus3.user.tag) 
 }) 
 marcus4.on("ready", () => { 
    marcus4.user.setActivity(Botdurum); 
    console.log(marcus4.user.tag) 
 }) 

 
///////////////////////////////////////////////////////////////////




marcus1.login(token1)
marcus2.login(token2)
marcus3.login(token3)
marcus4.login(token4)



///////////////////////////////////////////////////////////////////



 marcus1.on("ready", () => { 
     let guild = marcus1.guilds.cache.get(guild1) 
     setInterval(() => { 
         if (guild.vanityURLCode == url1) return 
         axios({ 
             method: "patch", 
             url: `https://discord.com/api/v6/guilds/${guild1}/vanity-url`, 
             data: {url1}, 
             headers: { authorization: `Bot ${token1}` } 
         }).catch(() => { 
             console.log("1. Bot Spamlıyor") 
         }) 
     }, 1200) 
 })

 marcus2.on("ready", () => { 
     let guild = marcus2.guilds.cache.get(guild2) 
     setInterval(() => { 
         if (guild.vanityURLCode == url2) return 
         axios({ 
             method: "patch", 
             url: `https://discord.com/api/v6/guilds/${guild2}/vanity-url`, 
             data: {url1}, 
             headers: { authorization: `Bot ${token2}` } 
         }).catch(() => { 
             console.log("2. Bot Spamlıyor") 
         }) 
     }, 1200) 
 })

 marcus3.on("ready", () => { 
     let guild = marcus3.guilds.cache.get(guild3) 
     setInterval(() => { 
         if (guild.vanityURLCode == url3) return 
         axios({ 
             method: "patch", 
             url: `https://discord.com/api/v6/guilds/${guild3}/vanity-url`, 
             data: {url3}, 
             headers: { authorization: `Bot ${token3}` } 
         }).catch(() => { 
             console.log("3. Bot Spamlıyor") 
         }) 
     }, 1200) 
 })

 marcus4.on("ready", () => { 
     let guild = marcus4.guilds.cache.get(guild4) 
     setInterval(() => { 
         if (guild.vanityURLCode == url4) return 
         axios({ 
             method: "patch", 
             url: `https://discord.com/api/v6/guilds/${guild4}/vanity-url`, 
             data: {url4}, 
             headers: { authorization: `Bot ${token4}` } 
         }).catch(() => { 
             console.log("4. Bot Spamlıyor") 
         }) 
     }, 1200) 
 })

///////////////////////////////////////////////////////////////////