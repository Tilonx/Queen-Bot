const fs = require('fs');
const dotenv = require('dotenv');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env')) {
  dotenv.config({
    path: './config.env'
  });
}

const API = "https://api-aswin-sparky.koyeb.app";
const ALIVE = process.env.ALIVE || "I am Alive";
const HANDLERS = process.env.HANDLER || "^";
const SESSION_ID = process.env.SESSION_ID || "A-S-W-I-N-S-P-A-R-K-Y:d4b1f135bc089efb71649ee1b95a3265";
const SUDO = process.env.SUDO || '233598275873';
const AUTO_STATUS_VIEW = process.env.AUTO_STATUS_VIEW || "true";
const ALWAYS_ONLINE = process.env.ALWAYS_ONLINE || "false";
const DISABLE_PM = process.env.DISABLE_PM  || "false";
const PM_BLOCK = process.env.PM_BLOCK || "false";
const PMB = process.env.PMB || "Sorry, I can't help you in private chat.";
const READ_MESSAGES = process.env.READ_MESSAGES || "false";
const BOT_INFO = process.env.BOT_INFO || "Queen-BOT-MD; Giddy Tennor;https://imgur.com/a/TdYodvC";
const URL = process.env.URL || "https://www.instagram.com/giddy_tennor_?igsh=YzZ0NDRoaXFxM2Zk";
const AUDIO_DATA = process.env.AUDIO_DATA || "Queen BOT MD; Giddy Tennor;https://imgur.com/a/TdYodvC";
const STICKER_DATA = process.env.STICKER_DATA || "Queen BOT MD; Giddy Tennor";
const WORK_TYPE = process.env.WORK_TYPE || 'public';
const DATABASE_URL = process.env.DATABASE_URL || "./lib/database.db";
const HEROKU_APP_NAME = process.env.HEROKU_APP_NAME || "";
const HEROKU_API_KEY = process.env.HEROKU_API_KEY || "";
const KOYEB_API_KEY = process.env.KOYEB_API_KEY || "";












module.exports = {
  API,
  ALIVE,
  HANDLERS,
  SUDO,
  WORK_TYPE,
  SESSION_ID,
  STICKER_DATA,
  BOT_INFO,
  AUDIO_DATA,
  AUTO_STATUS_VIEW,
  ALWAYS_ONLINE,
  PM_BLOCK,
  PMB,
  READ_MESSAGES,
  DISABLE_PM,
  URL,
  VERSION:"1.0.0",
  HEROKU_API_KEY,
  HEROKU_APP_NAME,
  KOYEB_API_KEY,
  DATABASE_URL: DATABASE_URL,
  DATABASE:
    DATABASE_URL === "./lib/database.db"
      ? new Sequelize({
          dialect: "sqlite",
          storage: DATABASE_URL,
          logging: false,
        })
      : new Sequelize(DATABASE_URL, {
          dialect: "postgres",
          ssl: true,
          protocol: "postgres",
          dialectOptions: {
            native: true,
            ssl: { require: true, rejectUnauthorized: false },
          },
          logging: false,
        }),
};
