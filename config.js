//#ENJOY BRO😍
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "Kermd237@gmail.com";
global.location = "Douala, Cameroun";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Douala";
global.github = process.env.GITHUB || "https://github.com/Kgtech-cmr/KERM_MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/40ffc2a288542560c887c.jpg";
global.devs = "https://wa.me/237650564445 , https://wa.me/237656520674";
global.sudo = process.env.SUDO || "237659079843";
global.owner = process.env.OWNER_NUMBER || "237690768603";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/40ffc2a288542560c887c.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://kerm-session-2c65.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0NjZDJLb3NMTWJZajVETjl4a0dUMi8xOEs5dGQyNUFhalJHbHI5MDVYMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaWdBK2dhNUQ1U09qTGhzYkxvWnBtcWx5TVFOZ0I3VTJNd3hncHBPelp4Zz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5QkIzWmxqckZBZnhPTzhpcWtoaklsWVc1RWtJazhFNHFmL3IwSmExK2tJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRQ084MTcyUTI2TzZXdHU4UWE0bDN5NmJoakVpYXZvWDZLV254U3pId2hBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9JZ2JOYXVvUjlKdDhHMlBmYUFlQlcrTkg1bGtHSTh5T0RJYWxnNTBCVm89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkhhRnN4MzZZMlhrRmdibUpCelVuSWJPVmVZbTREaEkzL1BDa0FsMDJHR2s9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUVqZ1JFcGIwbXEvU0MvOVd2YWtBNTNVamRoU3F3Q284RkFhUVpIOE5rZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRHRFYWZKYlpCQ3NBenB6NmFiN3Y0VTBWeHo5ZWhML0wvL0kyTnJ4bzZtMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImhEREd3UXVybHUzczVNd0tjUkNjSU1oS0E2aVRPNUthSG0rb3ErQTlvZWJNWEpna0JwK1ZKUnQzQk1LVHRZOXkrWkVxZnpvMDUrZzM5azhuVHc2NUNnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjU1LCJhZHZTZWNyZXRLZXkiOiJCR1o4QlE3WHo1alhGYVVnR3pyeXNMaCt1cE1Bb3BydW1QTENKbkVrWW5RPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ2VGZwRVdvclFIMjB2SGVsakRDVThRIiwicGhvbmVJZCI6ImUwODcwOTM3LTc4MGYtNDUwZC05MTk3LTE2YjJkZWRmNjEzNCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnby94dVAzQkFYM05EMGR3dFMxa0hZOFdNN2M9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiakZiUUJocnYzbzJSTTlMR1JYMkFnazVib1Q4PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjFFQkZEVzhDIiwibWUiOnsiaWQiOiIyMzc2OTA3Njg2MDM6NjJAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiRF9ib3QgOikifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0orSTlKMENFSnE5MkxjR0dCSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkFGWTJuNm9IRmJBVnZOak16V3dXaTR1Z1djQlEwSTR3VFJYWEJsMmJTUjQ9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkV1Ni9JRDJaVjVOd0Y0anpRTCtoU0tmVUYzaHIweW9UZzNFS1JIV2hiZ2JYNXVNaTBlNXRaU3BKVWpNekdpRkw1RHhhaDhJU3BuUy8rU2VNdFMxS0JBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiI2QXlpaXZDUk9FYlliRkh5T0pSOTE5NmFsOEJHTTNCN3JEN2RJaUlXQVNFOU05b1VLS1MvcnJDWUtESFRuMHhSUENmMUpnbmFVc2xXYm9KaVRSN1FDdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNzY5MDc2ODYwMzo2MkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJRQldOcCtxQnhXd0Ziell6TTFzRm91TG9GbkFVTkNPTUUwVjF3WmRtMGtlIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI3NDA1NzM2LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUJ1VCJ9"
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF ☞⌜DIOR⌝☜`",
  author: process.env.PACK_AUTHER || "KG TECH",
  packname: process.env.PACK_NAME || "Kerm-MD-V2",
  botname: process.env.BOT_NAME || "ᵏᵍ┘D-bot",
  ownername: process.env.OWNER_NAME || "☞⌜ KG TECH⌝☜",
  errorChat: process.env.ERROR_CHAT || "DIOR",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "tCxobE1FqJgfbDZgsYQNHBFB",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "DIOR",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "DIOR",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "...d336",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "KERM").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
