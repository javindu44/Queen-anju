//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUpVVGdTR3ZDTm1LZ1Z2Y0l6eGJlYzdvSWlMQjBQdjNaOE1DWGF4U29HWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTmZ0cVprcEYxQVFWRzNqbnd5Mit0QnlXZzNHMGQyU1pVVmR0UmQzWTczTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyR0ZLd0JFK0FkSEs3ZjFDL1VpOW5uYTFFMjU2S01icGpNbFNhT2NYZEVnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpWnZ6OEFNZExXNE1FWDdNT2NBTzcyNGhyUHhnM29OSTI2eWNOb01pUFNRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlMMm1pekYra2l0VExldkV5YWJjVDNnVTl3aVI0LzRSTnFIRGRnZHBibTQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imw4aFNjMG90SFRpNXdGa0JMUVBTSUNlWVhieXNWbzZSMkNyazF1VWlnMXc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0NsRW9LZGNOZEZ1Tm1xNzc1YkIwMGlzL2t6cE1MZC9ia3Q0MGgvekVtMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN1V5V05hMGpiSzhsdDYzejF5TEJpSEZ3UUNmZzE4ckUzdWs3OFBGbk5saz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkptYkJEbmI4ejZlTUJySFJkOVJHWjhtRk1HK2V4Q24rSFlvTVVRaDZjSDFnaWpuT2FrMzRydjVuNG8zK2lla3h2a2ZoRVJXTGsrNHZocTdSWC91emhnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjAsImFkdlNlY3JldEtleSI6Ii82RTd3U1JxUnVlTzY0TXg5UDIxeGpQVjN5Q2RMWnJkaVFZZEJoTWxiTkU9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3Njk5NjkyODBAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMkFEMjE3RDEyMjI0NEQ4RTdENEI3NkRFNUVFQTFBN0YifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1MDc2NzU4N31dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiaW8yU2ZydFRSdVNQb214NmdqcDdIUSIsInBob25lSWQiOiI2MjE4MWQ1Yy0yZDUwLTRhYWYtYTY2NC1kMzZjOTI4MjQ1MzUiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTGFVa0hGWUpQNWZ0UmdBOVdpRUhOT2JVbjZ3PSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjF5cjUrTXg1QXBKaStHZEMxTEdWaDBRejJyST0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJCN1BXNzZFWiIsIm1lIjp7ImlkIjoiOTQ3Njk5NjkyODA6M0BzLndoYXRzYXBwLm5ldCIsImxpZCI6IjYzNzM3OTM1NDc0ODc3OjNAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMcVorUHNERU5TdjZzSUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJmZzVrNHRtYmc1RDkvOGVFbms3VnF4Q21BdlZOTkV2V2F5ejlEZ2ZEaEM4PSIsImFjY291bnRTaWduYXR1cmUiOiIrSVdYQXpqOWJjNlpQRCs5MlNBSFdJazVDUEJnbWFTbkQzT2pkMnBSSFFBN05nY3lGdUhrS3ljUVZYNjFsTFNuamxSdWM0eG9mdFp1OHRVTkNEcDJEdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoibitjZ0REZG05NWlqVmV3NUxVNTVCTjNrSERDVENvblYyZHJMUXpDOWp1OCttZWJXczI0MWNsNjNQaE5WeEM3b0JERE9MRkl1SlVoQ0FVSVRHTWM1aXc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc2OTk2OTI4MDozQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlg0T1pPTFptNE9RL2YvSGhKNU8xYXNRcGdMMVRUUkwxbXNzL1E0SHc0UXYifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBSUlDQT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1MDc2NzU4NSwibGFzdFByb3BIYXNoIjoiM1I5WjM5IiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFHU0YifQ==",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "your account crated number",
  PASSWORD: 
    process.env.PASSWORD || "your password",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
