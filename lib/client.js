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
