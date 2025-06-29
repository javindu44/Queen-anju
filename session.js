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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiME92UHVVSWRLNDN0cjRETEF6a1RsazlXQkZpdDhYUGs5NnQzUzNjZnNrOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNnNKc3NkSFVZYzNUMGd6eWpNdmFoUGV5bG9CVWZFZVJjclRHK1hMMy9XQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzQVBtelc2UDV5MHhsYmErTFZ1NDIwLzFNa1NIN0o1c0Y2SWczelFCN25jPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpT2E4N01UQ2pWcUdsdjQxdml3QjRUeWMwc3hDbUtpUjhDMnhUQThLMHljPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVHOHhId2MvVGROYnpMWmE4WGxCY09VZDdkbTA3UCsyQ2tOU20vUWt2R2s9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjQ3dmlWY3BXQzAvbXpYQUFhRmNIa1JMS29WeE1iNGVrN3ZFVmgyVFlDQUE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUJoeVNYLy9XUHhQVlNVT05aLzY0ZTZtRVJGM2FGUjlkZkhKNm52UHhWQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicjVoS1gxQW1CbSs3L0NmNXdoQm02Z0ZDc0lYYVRXcWVWQVg0SFFLellsQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklJUDgwd2VGaFpLWUQvdjFRUW5pemQ0cnFIVWRESVJvcmtYUTNVZ3loWlpFSGhYaGF2eWFkdm9xelZSUjdmT2I1RzIraEJYRHM4b1hoR1crNzI1VkR3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjE2LCJhZHZTZWNyZXRLZXkiOiJpYVJWcEJJWnllbWNUTGU2L1IwTWRjNWhzNklwQWZCaWtiL1cyQ0xDOHE0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI5YmU4Z2hvd1JLU1RQNnBYWDNGc293IiwicGhvbmVJZCI6ImVlMzZlZDA1LWY4MzctNGI0YS1hN2M0LTRhNjc5ZjczODg1NCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrd3EvZGFvY20wNzRyVTBQMXhTbGhqTEE1RzA9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSkJCbERjSWNYenZlZGlwaFdHV3lKTmpEMmdrPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkpTVjdUN0VIIiwibWUiOnsiaWQiOiI5NDc2MzkwODg1ODo2QHMud2hhdHNhcHAubmV0IiwibGlkIjoiMjY2NTY3NzE1Njg0NDUwOjZAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQK3c3NTRERUlhVmhjTUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiI4aWt2aGJ6ZDlpakRnTlJlY1BsMHhlSDY5ejhBSkY0bGx3emNiWEVLZ1NjPSIsImFjY291bnRTaWduYXR1cmUiOiJNQllxUWtFTitTUG91eDdHV2praUFUWTgrcXkxa3RWd25wTm83RzhjM241WHdSdG9kYzJoNFVVdFpqRWFnam9IYm1Bb1RyR3h0ak1VTitCV2VkQWhEQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoic1lvWmhybW9RbUJwZ2FLbFMzS0RsSHZtV3lWRkpCa1JZWUp2S2RjeFBEZTBDbXlWQVY4b2grWEU1Unk2NG1PNmc4bjM2VU1vUkdpaVMxaVAxYU1UQWc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc2MzkwODg1ODo2QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmZJcEw0VzgzZllvdzREVVhuRDVkTVhoK3ZjL0FDUmVKWmNNM0cxeENvRW4ifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBMElCUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1MTIwNjU0NywibGFzdFByb3BIYXNoIjoiMUs0aEg0IiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFOa2wifQ==",
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
