

const hx = require('hxz-api')
const qrcode = require("qrcode-terminal")
const moment = require("moment-timezone")
const speed = require('performance-now')
const request = require('request');
const imgbb = require('imgbb-uploader')
const { spawn, exec, execSync } = require("child_process")
const fs = require("fs")
const axios = require("axios")
const ffmpeg = require('fluent-ffmpeg')
const { EmojiAPI } = require("emoji-api");
const ig = require('insta-fetcher')
const emoji = new EmojiAPI()
const fetch = require('node-fetch');
const phoneNum = require('awesome-phonenumber')
const gis = require('g-i-s');
const got = require("got");
const imageToBase64 = require('image-to-base64');
const ID3Writer = require('browser-id3-writer');		
const brainly = require('brainly-scraper')
const yts = require( 'yt-search')
const ms = require('parse-ms')
const toMs = require('ms')
const { error } = require("qrcode-terminal")
const { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { color, bgcolor } = require('./lib/color')
const { fetchJson, fetchText, kyun } = require('./lib/fetcher')
const { yta, ytv, igdl, upload, formatDate } = require('./lib/ytdl')
const { webp2mp4File} = require('./lib/webp2mp4')
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const afk = JSON.parse(fs.readFileSync('./lib/off.json'))
const { sleep, isAfk, cekafk, addafk } = require('./lib/offline')
const voting = JSON.parse(fs.readFileSync('./lib/voting.json'))
const { addVote, delVote } = require('./lib/vote')
const { y2mateA, y2mateV } = require('./lib/y2mate')
const { jadibot, stopjadibot, listjadibot } = require('./lib/jadibot')
let _scommand = JSON.parse(fs.readFileSync('./src/scommand.json'))
const Exif = require('./lib/exif');
const exif = new Exif();

//================================================\\
//===========[ BATAS SRC NYA NIH ]=================\\
const welkom = JSON.parse(fs.readFileSync('./src/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./src/nsfw.json'))
const gcdetect = JSON.parse(fs.readFileSync('./src/gcdetect.json'))
const antilink = JSON.parse(fs.readFileSync('./src/.dat/antilink.json'))
const _jasa = JSON.parse(fs.readFileSync('./src/.dat/antijualan.json'))

fakereply = fs.readFileSync('./image/fake.jpeg')
fakeimage = fs.readFileSync('./image/thumb.jpeg')
cewe = fs.readFileSync('./image/cewe.jpeg')
ownerNumber = ["51902679067@s.whatsapp.net"] // yang kosong 0 itu isi pake no kalian guys
fake = 'ALDI FAUZI' // ini fake
namaown = 'WhoIsLaughts' //nama owner
noown = '51902679067' //nomor owner
namabot = 'ENCHUFABOT' // nama bot
namabot2 = 'GANTI'// nama bot ⟨ nama bot ⟩
ytown = 'https yt'
githubown = 'https://github.com/Velkan69/deux'
const
	{
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
	} = require("@adiwajshing/baileys")
numbernye = '0'
waktu = '-'
alasan = '-'
public = false
offline = false
gaya = '```'
shape = '⬡'
bulet = '◯'
G = '*'
//=======≠=[ API KEY ]===========//
ZuxyKey = 'ZiyKey'
const LolKey = 'genbotkey' //9928bc262baa54f422218c9a
const apiAnto = 'hardianto' // tq bang anto

//=================================================//
//============[ BATAS NYA ---------------- ]=====≠===≠==========\\
// fuction STC CMD bang
// sorry di enc
// jika eror
//chat wa.me/6275697725326
function _0x187e(){const _0x5201c3=['354332XZSVKt','stringify','10gXCFmS','writeFileSync','chats','826660vMhFZs','push','831785OvEahb','9YWQYLr','30yImjxS','6342256ZSdPUT','2360940FsKSew','forEach','333777enEhHA','keys','5973359gTLRyl'];_0x187e=function(){return _0x5201c3;};return _0x187e();}function _0x53ad(_0x327943,_0x496650){const _0x187e5a=_0x187e();return _0x53ad=function(_0x53ad6b,_0x638151){_0x53ad6b=_0x53ad6b-0x7b;let _0x56c9cd=_0x187e5a[_0x53ad6b];return _0x56c9cd;},_0x53ad(_0x327943,_0x496650);}(function(_0x5c82b1,_0x583797){const _0x404869=_0x53ad,_0x5daaac=_0x5c82b1();while(!![]){try{const _0x4771ab=-parseInt(_0x404869(0x88))/0x1+parseInt(_0x404869(0x8a))/0x2*(parseInt(_0x404869(0x85))/0x3)+-parseInt(_0x404869(0x83))/0x4+parseInt(_0x404869(0x7f))/0x5*(-parseInt(_0x404869(0x81))/0x6)+parseInt(_0x404869(0x87))/0x7+parseInt(_0x404869(0x82))/0x8+-parseInt(_0x404869(0x80))/0x9*(-parseInt(_0x404869(0x7d))/0xa);if(_0x4771ab===_0x583797)break;else _0x5daaac['push'](_0x5daaac['shift']());}catch(_0x52bd20){_0x5daaac['push'](_0x5daaac['shift']());}}}(_0x187e,0x7c338));const addCmd=(_0x36813b,_0x481a74)=>{const _0x5c67d7=_0x53ad,_0x3aa4ea={'id':_0x36813b,'chats':_0x481a74};_scommand[_0x5c67d7(0x7e)](_0x3aa4ea),fs[_0x5c67d7(0x7b)]('./src/scommand.json',JSON[_0x5c67d7(0x89)](_scommand));},getCommandPosition=_0x467b73=>{const _0xde6c6=_0x53ad;let _0x564579=null;Object[_0xde6c6(0x86)](_scommand)[_0xde6c6(0x84)](_0x12d946=>{_scommand[_0x12d946]['id']===_0x467b73&&(_0x564579=_0x12d946);});if(_0x564579!==null)return _0x564579;},getCmd=_0x2ac48e=>{const _0x252724=_0x53ad;let _0x3b3ee6=null;Object[_0x252724(0x86)](_scommand)[_0x252724(0x84)](_0x2c0eb9=>{_scommand[_0x2c0eb9]['id']===_0x2ac48e&&(_0x3b3ee6=_0x2c0eb9);});if(_0x3b3ee6!==null)return _scommand[_0x3b3ee6][_0x252724(0x7c)];},checkSCommand=_0x214db0=>{const _0x4d3d7e=_0x53ad;let _0x597323=![];return Object[_0x4d3d7e(0x86)](_scommand)['forEach'](_0x2b847a=>{_scommand[_0x2b847a]['id']===_0x214db0&&(_0x597323=!![]);}),_0x597323;};


    module.exports = ALDI = async (ALDI, mek) => {
	try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
		if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		global.blocked
        mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
        const type = Object.keys(mek.message)[0]  
        const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
        const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '-'          	
       // const waktu
        const time = moment.tz('Asia/Jakarta').format('HH:mm')
        const date = new Date().toLocaleDateString()
        const tima = moment.tz('Asia/Jakarta').format('HH:mm')
        const wita = moment.tz('Asia/Makassar').format('HH:mm')
        const wit = moment.tz('Asia/Jayapura').format('HH:mm')         
        body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : (type == 'stickerMessage') && (getCmd(mek.message[type].fileSha256.toString('base64')) !== null && getCmd(mek.message[type].fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message[type].fileSha256.toString('base64')) : ""
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
		chats = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''

		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')
		const botNumber = ALDI.user.jid
		const botNumberss = ALDI.user.jid + '@c.us'
		const isGroup = from.endsWith('@g.us')
		let sender = isGroup ? mek.participant : mek.key.remoteJid
		var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
		var Link = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
		const messagesCC = pes.slice(0).trim().split(/ +/).shift()
		ALDI.updatePresence(from, Presence.recording)
		ALDI.chatRead(from, "read")
//========================\\
		const totalchat = await ALDI.chats.all()
		const groupMetadata = isGroup ? await ALDI.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
		const isOwner = ownerNumber.includes(sender)
        const isVote = isGroup ? voting.includes(from) : false
        const conts = mek.key.fromMe ? ALDI.user.jid : ALDI.contacts[sender] || { notify: jid.replace(/@.+/, '') }

       //====================\\
       const isWelkom = isGroup ? welkom.includes(from) : false

       const isGcdetect = isGroup ? gcdetect.includes(from) : false 
       const pushname = mek.key.fromMe ? ALDI.user.name : conts.notify || conts.vname || conts.name || '-'
       const isAntiLink = isGroup ? antilink.includes(from) : false
       const isjasa = isGroup ? _jasa.includes(from) : false
            mess = {
			prem: `Fitur Ini Kusus Premium\nmau beli premium?\nchat : wa.me/6285697725326`,
			wait: `Tunggu bntr Kak`,
	        success: `succes....`,
     		wrongFormat: `Format salah, coba liat lagi di menu`,

			error: `Error Ngab!!!`,

			lvlon: `Berhasil Mengaktifkan Mode Leveling Di Group Ini️`,

			lvloff: `Berhasil Menonaktifkan Mode Leveling Di Group Ini️`,

			lvlnul: `Level Mu Masih Kosong`,

			baned: `Maaf Kamu Sudah Terbanned!!`,

			group: `Khusus grup ngab...`,
			Iv: ` Linknya error:v`,

			lvlnoon: `Leveling Di Group Belum Diaktifkan`,

			stikga: `Yah Gagal Coba Ulangi Beberapa Saat Lagi`,

			linkga: `Link Tidak Valid`,

			groupo: `Command Ini Khusus Untuk Group`,

			ownerb: `Command Ini Khusus Untuk Owner`,

			ownerg: `Command Ini Khusus Untuk Owner Group`,

			admin: `Command Ini Khusus Untuk Admin`,

			badmin: `BOT Harus Menjadi Admin`,

			}
			
		 // here button function
        selectedButton = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : ''

        responseButton = (type == 'listResponseMessage') ? mek.message.listResponseMessage.title : ''

        
        const listmsg = (from, title, desc, list) => { // Fixx
            let po = ALDI.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "Pilih Disini","footerText": "Jangan Lupa Donasi Ya Kak ☕","listType": "SINGLE_SELECT","sections": list}}, {})
            return ALDI.relayWAMessage(po, {waitForAck: true})
        }
		const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }

        const reply = (teks) => {
        ALDI.sendMessage(from, teks, text,{sendEphemeral : true,quoted : mek, thumbnail : fakereply})
        }
        const textImg = (teks) => {
           return ALDI.sendMessage(from, teks, text, {quoted: mek, thumbnail: fs.readFileSync('./image/fake.jpeg')})
        }
        const sendMess = (hehe, teks) => {
            ALDI.sendMessage(hehe, teks, text)
        }

        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? ALDI.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : ALDI.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
        }
   //FAKEREPLY PRODUCT
            const ftoko = {
            key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: {"productMessage": {"product": {"productImage":{"mimetype": "image/jpeg","jpegThumbnail": fs.readFileSync(`./image/thumb.jpeg`)},"title": `NGEJUDI GAK BROH?\n${pushname}`,"description": "X -ALDI Team", "currencyCode": "IDR","priceAmount1000": "9999999999","retailerId": "X - ALDI Team","productImageCount": 1},"businessOwnerJid": `0@s.whatsapp.net`}}}
            //FAKE KONTAK
            const fkontak = { 
            key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `0@s.whatsapp.net` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./image/thumb.jpeg')}}}
            //FAKE STICKER
            const fsticker = {
            key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},"message": {"stickerMessage": { "url": "https://mmg.whatsapp.net/d/f/Am6FBfNf-E2f1VoGBXkPaNAy7L6Tw_HMavKrHEt48QM4.enc","fileSha256": "Yfj8SW7liSEnDakvyVlXVZQ1LJBC9idn09X7KHe8HTc=","fileEncSha256": "F854aUrzgAkBTOVULpne4oSIi6S04Jo56pjZEo+p+9U=","mediaKey": "Z3nA2asclAAwWHngNO/vJ81qxOE2/0gkEnXak+NxPV4=","mimetype": "image/webp","height": 64,"width": 64,"directPath": "/v/t62.15575-24/12097272_1193895144391295_8973688483514349023_n.enc?ccb=11-4&oh=5a9d7147627a8355569f1a641b9ebee3&oe=60C65E73","fileLength": "7186","mediaKeyTimestamp": "1622815545","isAnimated": false}}}
            //FAKE VN
            const fvn = {
            key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds": "9999999","ptt": "true"}}}
            //FAKE TEXT
            const ftext = {
            key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${fake}`,"title": `Hmm`,'jpegThumbnail': fs.readFileSync('./image/thumb.jpeg')}}}
            //FAKE LIVE ACTION
            const floc2 = {
            key: {"fromMe": false,"participant": `0@s.whatsapp.net`, "remoteJid": "6289530863358-1621036495@g.us" },message: { "liveLocationMessage": { "title":`${fake}`,}}}
            //FAKEREPLY TROLI
            const ftroli = {
            key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: {orderMessage: {itemCount : 2021,status: 1,surface : 1,message: `${fake}`,orderTitle: 'Xyz',thumbnail: fs.readFileSync('./image/thumb.jpeg'), sellerJid: '0@s.whatsapp.net'}}}
const fakevn = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
            },
	 message: { 
		"audioMessage": {
            "mimetype":"audio/ogg; codecs=opus",
            "seconds": "99999999999",
            "ptt": "true"
            }
	            } 
            } 
            //FAKEREPLY VIDEO
            const fvideo = {
            key: {fromMe: false,participant: `62895619083555@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "videoMessage": { "title":"hallo bang","h": `Hmm`,'seconds': '-99999', 'caption': `${fake}`,'jpegThumbnail': fs.readFileSync('./image/thumb.jpeg')}}}
const fvid = {
	 key: { 
	      participant: '0@s.whatsapp.net'
	       },
	 message: { 
            "videoMessage": { 
            "title":"hallo bang",
            "h": `Hmm`, 
            'seconds': '99', 
            'caption': 'ALDO FAUZI',
            'jpegThumbnail': fs.readFileSync('./image/thumb.jpeg')
            }
            }
	            }
            //FAKEREPLY GROUPINVITE
            const fgc = {
            key: {"fromMe": false,"participant": "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "62895619083555-1616169743@g.us","inviteCode": "mememteeeekkeke","groupName": "P", "caption": `${fake}`, 'jpegThumbnail': fs.readFileSync('./image/thumb.jpeg')}}}
            //FAKEREPLY GIF
            const fgif = {
            key: {fromMe: false,participant: `62895619083555@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "videoMessage": { "title":"hallo bang","h": `Hmm`,'seconds': '99999', 'gifPlayback': 'true', 'caption': `${fake}`,'jpegThumbnail': fs.readFileSync('./image/thumb.jpeg')}}} 
            
        const fakestatus = (teks) => {
            ALDI.sendMessage(from, teks, text, {
            quoted: {
            key: {
            fromMe: false,
            participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
            },
            message: {
            "imageMessage": {
            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
            "mimetype": "image/jpeg",
            "caption": fake,
            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
            "fileLength": "28777",
            "height": 1080,
            "width": 1079,
            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
            "mediaKeyTimestamp": "1610993486",
            "jpegThumbnail": fs.readFileSync('./image/thumb.jpeg'),
            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
            }
            }
            }
            })
        }
        const fakethumb = (teks, yes) => {
            ALDI.sendMessage(from, teks, image, {thumbnail:fs.readFileSync('./image/fake.jpeg'),quoted:mek,caption:yes})
            
        }
        const fakegroup = (teks) => {
            ALDI.sendMessage(from, teks, text, {
            quoted: {
            key: {
            fromMe: false,
            participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
            },
            message: {
            "imageMessage": {
            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
            "mimetype": "image/jpeg",
            "caption": fake,
            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
            "fileLength": "28777",
            "height": 1080,
            "width": 1079,
            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
            "mediaKeyTimestamp": "1610993486",
            "jpegThumbnail": fs.readFileSync('./image/thumb.jpeg'),
            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
            }
            }
            }
            })
        }
        const sendMediaURL = async(to, url, text="", mids=[]) =>{	    	
        if(mids.length > 0){		    
        text = normalizeMention(to, text, mids)	    	
        }		    
        const fn = Date.now() / 10000;		    
        const filename = fn.toString()	     	
        let mime = ""		    
        var download = function (uri, filename, callback) {		   
        request.head(uri, function (err, res, body) {			
        mime = res.headers['content-type']			
        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);		   
        });		   
        };		    
        download(url, filename, async function () {		    
        console.log('done');		    
        let media = fs.readFileSync(filename)		    
        let type = mime.split("/")[0]+"Message"		    
        if(mime === "image/gif"){			
        type = MessageType.video			
        mime = Mimetype.gif		    
        }		    
        if(mime.split("/")[0] === "audio"){			
        mime = Mimetype.mp4Audio		    
        }		    
        ALDI.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})		    		    
        fs.unlinkSync(filename)		    
        });	       
        }
      function addMetadata(packname, author) {
      if (!packname) packname = 'WABot';
      if (!author) author = 'Bot';
      author = author.replace(/[^a-zA-Z0-9]/g, '');
      let name = `${author}_${packname}`
      if (fs.existsSync(`./${name}.exif`)) return `./${name}.exif`
      const json = {
      "sticker-pack-name": packname,
      "sticker-pack-publisher": author,
      }
      const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])
      const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]
      let len = JSON.stringify(json).length
      let last
      if (len > 256) {
      len = len - 256
      bytes.unshift(0x01)
      } else {
      bytes.unshift(0x00)
      }
      if (len < 16) {
      last = len.toString(16)
      last = "0" + len
      } else {
      last = len.toString(16)
      }
      const buf2 = Buffer.from(last, "hex")
      const buf3 = Buffer.from(bytes)
      const buf4 = Buffer.from(JSON.stringify(json))
      const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])
      fs.writeFile(`./${name}.exif`, buffer, (err) => {
      return `./${name}.exif`	
	
      })	


      }
			const uploadImages = (buffData, type) => {    
      // eslint-disable-next-line no-async-promise-executor          
      return new Promise(async (resolve, reject) => {        
      const { ext } = await fromBuffer(buffData)       
      const cmd = text.toLowerCase()      
      const filePath = 'utils/tmp.' + ext       
      const _buffData = type ? await resizeImage(buffData, false) : buffData        
      fs.writeFile(filePath, _buffData, { encoding: 'base64' }, (err) => {			
      if (err) return reject(err)
      console.log('Uploading image to telegra.ph server...')			
      const fileData = fs.readFileSync(filePath)			
      const form = new FormData()			
      form.append('file', fileData, 'tmp.' + ext)          
      fetch('https://telegra.ph/upload', {			   
      method: 'POST',           	
      body: form			
      })           	
      .then(res => res.json())           	
      .then(res => {			
      if (res.error) return reject(res.error)			
      resolve('https://telegra.ph' + res[0].src)           	
      })           	
      .then(() => fs.unlinkSync(filePath))			   
      .catch(err => reject(err))			   
      })			 
      })			
      }
           	
      const sendStickerFromUrl = async(to, url) => {           	
      var names = Date.now() / 10000;           	
      var download = function (uri, filename, callback) {			
      request.head(uri, function (err, res, body) {			   
      request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);			
      });           	
      };           	
      download(url, './sticker' + names + '.png', async function () {			
      console.log('selesai');			
      let filess = './sticker' + names + '.png'			
      let asw = './sticker' + names + '.webp'           	   
      exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {			  
      let media = fs.readFileSync(asw)			   
      ALDI.sendMessage(to, media, MessageType.sticker,{quoted:mek})			   
      fs.unlinkSync(filess)			   
      fs.unlinkSync(asw)			
      });           	
      });			
      }

      const sendStickerUrl = async(to, url) => {			
      console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker...'))           	
      var names = getRandom('.webp')           	
      var namea = getRandom('.png')           	
      var download = function (uri, filename, callback) {           	
      request.head(uri, function (err, res, body) {           		
      request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);           	
      });           	
      };           	
      download(url, namea, async function () {           	
      let filess = namea           	
      let asw = names           	
      require('./lib/exif.js')           	
      exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {           	
      exec(`webpmux -set exif ./sticker/data.exif ${asw} -o ${asw}`, async (error) => {           	
      let media = fs.readFileSync(asw)           	
      ALDI.sendMessage(to, media, sticker,{quoted : mek})           	
      console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker...'))
      });           	
      });           	
      });			
      }        
//FUNCTION
            cekafk(afk)
            if (!mek.key.remoteJid.endsWith('@g.us') && offline){
            if (!mek.key.fromMe && !isOwner){
            if (isAfk(mek.key.remoteJid)) return
            addafk(mek.key.remoteJid)
            heheh = ms(Date.now() - waktu) 
            ALDI.sendMessage(mek.key.remoteJid,`@${noowner} Sedang Offline!\n\n*Alasan :* ${alasan}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${noowner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync('./image/thumb.jpeg')}}}})
            }
            }   
        if (mek.key.remoteJid.endsWith('@g.us') && offline) {
        if (!mek.key.fromMe && !isOwner){
        if (mek.message.extendedTextMessage != undefined){
        if (mek.message.extendedTextMessage.contextInfo != undefined){
        if (mek.message.extendedTextMessage.contextInfo.mentionedJid != undefined){
        for (let ment of mek.message.extendedTextMessage.contextInfo.mentionedJid) {
        if (ment === `${noowner}@s.whatsapp.net`){
        if (isAfk(mek.key.remoteJid)) return
        addafk(mek.key.remoteJid)
        heheh = ms(Date.now() - waktu)
        ALDI.sendMessage(mek.key.remoteJid,`@${noowner} Sedang Offline!\n\n *Alasan :* ${alasan}\n *Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${noowner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync('./image/thumb.jpeg')}}}})
          }
        }
            }
          }
        }
      }
    }
        if(isGroup && !isVote) {
        if (budy.toLowerCase() === 'vote'){
        let vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`))
        let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`))  
        let fil = vote.map(v => v.participant)
        let id_vote = sender ? sender : '6285697725326@s.whatsapp.net'
        if(fil.includes(id_vote)) {
        return mentions('@'+sender.split('@')[0]+' Anda sudah vote', fil, true)
        } else {
        vote.push({
            participant: id_vote,
            voting: '✅'
        })
        fs.writeFileSync(`./lib/${from}.json`,JSON.stringify(vote))
        let _p = []
        let _vote = '*Vote* '+ '@'+ _votes[0].votes.split('@')[0] + `\n\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit\n\n` 
        for(let i = 0; i < vote.length; i++) {
        _vote +=  `@${vote[i].participant.split('@')[0]}\n*Vote* : ${vote[i].voting}\n\n`
        _p.push(vote[i].participant)
        }  
        _p.push(_votes[0].votes)
        mentions(_vote,_p,true)   
        }
        } else if (budy.toLowerCase() === 'devote'){
        const vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`))
        let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`))  
        let fil = vote.map(v => v.participant)
        let id_vote = sender ? sender : '6285697725326@s.whatsapp.net'
        if(fil.includes(id_vote)) {
        return mentions('@'+sender.split('@')[0]+' Anda sudah vote', fil, true)
        } else {
        vote.push({
            participant: id_vote,
            voting: '❌'
        })
        fs.writeFileSync(`./lib/${from}.json`,JSON.stringify(vote))
        let _p = []
        let _vote = '*Vote* '+ '@'+ _votes[0].votes.split('@')[0] + `\n\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit\n\n` 
        for(let i = 0; i < vote.length; i++) {
        _vote +=  `@${vote[i].participant.split('@')[0]}\n*Vote* : ${vote[i].voting}\n\n`
        _p.push(vote[i].participant)
        }  
        _p.push(_votes[0].votes)
        mentions(_vote,_p,true)   
        }
    }
}
    
//========================================================================================================================//
        
        //jangan di haous

        //------- console.log by Arifi Razzaq ----------\\
        var _0x7574=["\x73\x74\x69\x63\x6B\x65\x72\x4D\x65\x73\x73\x61\x67\x65","\x76\x69\x64\x65\x6F\x4D\x65\x73\x73\x61\x67\x65","\x61\x75\x64\x69\x6F\x4D\x65\x73\x73\x61\x67\x65","\x63\x6F\x6E\x74\x61\x63\x74\x4D\x65\x73\x73\x61\x67\x65","\x6F\x72\x64\x65\x72\x4D\x65\x73\x73\x61\x67\x65","\x70\x72\x6F\x64\x75\x63\x74\x4D\x65\x73\x73\x61\x67\x65","\x6D\x65\x6E\x74\x69\x6F\x6E\x65\x64\x4A\x69\x64","\x64\x6F\x63\x75\x6D\x65\x6E\x74\x4D\x65\x73\x73\x61\x67\x65","\x6D\x61\x74\x63\x68\x65\x64\x54\x65\x78\x74","\x6C\x69\x76\x65\x4C\x6F\x63\x61\x74\x69\x6F\x6E\x4D\x65\x73\x73\x61\x67\x65","\x65\x78\x74\x65\x6E\x64\x65\x64\x54\x65\x78\x74\x4D\x65\x73\x73\x61\x67\x65","\x74\x65\x78\x74\x4D\x65\x73\x73\x61\x67\x65","\x72\x65\x64","\x77\x68\x69\x74\x65","\x64\x65\x65\x70\x73\x6B\x79\x62\x6C\x75\x65","\x62\x6C\x61\x63\x6B","\x62\x6C\x75\x65","\x6F\x72\x61\x6E\x67\x65\x72\x65\x64","\x79\x65\x6C\x6C\x6F\x77","\x67\x72\x65\x65\x6E","\x6D\x65\x64\x69\x75\x6D\x70\x75\x72\x70\x6C\x65","\x6F\x72\x61\x6E\x67\x65","\x6C\x69\x6D\x65\x67\x72\x65\x65\x6E","\x69\x6D\x61\x67\x65\x4D\x65\x73\x73\x61\x67\x65","\x69\x6E\x63\x6C\x75\x64\x65\x73","\x66\x72\x6F\x6D\x4D\x65","\x6B\x65\x79","\x5B\x20\x43\x4D\x44\x20\x50\x52\x49\x56\x41\x54\x45\x20\x5D","\x48\x48\x3A\x6D\x6D\x3A\x73\x73","\x66\x6F\x72\x6D\x61\x74","\x6D\x65\x73\x73\x61\x67\x65\x54\x69\x6D\x65\x73\x74\x61\x6D\x70","\x6D\x61\x67\x65\x6E\x74\x61","","\x20\x5B","\x6C\x65\x6E\x67\x74\x68","\x5D","\x63\x79\x61\x6E","\x6C\x6F\x67","\x5B\x20\x43\x4D\x44\x20\x47\x52\x4F\x55\x50\x20\x5D","\x66\x72\x6F\x6D","\x70\x69\x6E\x6B","\x69\x6E","\x67\x6F\x6C\x64"];const isSticker=type=== _0x7574[0];const isVideo=type=== _0x7574[1];const isAudio=type=== _0x7574[2];const isContact=type=== _0x7574[3];const isOrder=type=== _0x7574[4];const isProduct=type=== _0x7574[5];const isMentioned=type=== _0x7574[6];const isDocument=type=== _0x7574[7];const isLink=type=== _0x7574[8];const isLiveLocation=type=== _0x7574[9];const isExtendedText=type=== _0x7574[10];const isText=type=== _0x7574[11];colors= [_0x7574[12],_0x7574[13],_0x7574[14],_0x7574[15],_0x7574[16],_0x7574[17],_0x7574[18],_0x7574[19],_0x7574[20],_0x7574[21],_0x7574[22]];const isMedia=(type=== _0x7574[23]|| type=== _0x7574[1]);const isQuotedAudio=type=== _0x7574[10]&& content[_0x7574[24]](_0x7574[2]);const isQuotedImage=type=== _0x7574[10]&& content[_0x7574[24]](_0x7574[23]);const isQuotedVideo=type=== _0x7574[10]&& content[_0x7574[24]](_0x7574[1]);const isQuotedSticker=type=== _0x7574[10]&& content[_0x7574[24]](_0x7574[0]);if(!public){if(!mek[_0x7574[26]][_0x7574[25]]&&  !isOwner){return}};if(isCmd&&  !isGroup){console[_0x7574[37]](color(_0x7574[27]),color(moment(mek[_0x7574[30]]* 1000)[_0x7574[29]](_0x7574[28]),_0x7574[31]),color(`${_0x7574[32]}${command}${_0x7574[33]}${args[_0x7574[34]]}${_0x7574[35]}`,_0x7574[36]))};if(!command){console[_0x7574[37]](mek)};if(isCmd&& isGroup){console[_0x7574[37]](color(_0x7574[38]),color(moment(mek[_0x7574[30]]* 1000)[_0x7574[29]](_0x7574[28]),_0x7574[31]),color(`${_0x7574[32]}${command}${_0x7574[33]}${args[_0x7574[34]]}${_0x7574[35]}`,_0x7574[36]),color(_0x7574[39],_0x7574[40]),color(`${_0x7574[32]}${pushname}${_0x7574[32]}`,_0x7574[18]),color(_0x7574[41],_0x7574[40]),color(`${_0x7574[32]}${groupName}${_0x7574[32]}`,_0x7574[42]))}      var datw = new Date();
      
        var tahun = datw.getFullYear();
        var bulan = datw.getMonth();
        var tanggal = datw.getDate();
        var hari = datw.getDay();
        var jams = datw.getHours();
        var menit = datw.getMinutes();
        var detik = datw.getSeconds();


        switch(hari) {
         case 0: hari = "Minggu"; break;
         case 1: hari = "Senin"; break;
         case 2: hari = "Selasa"; break;
         case 3: hari = "Rabu"; break;
         case 4: hari = "Kamis"; break;
         case 5: hari = "Jum'at"; break;
         case 6: hari = "Sabtu"; break;
        }
        switch(bulan) {
         case 0: bulan = "Januari"; break;
         case 1: bulan = "Februari"; break;
         case 2: bulan = "Maret"; break;
         case 3: bulan = "April"; break;
         case 4: bulan = "Mei"; break;
         case 5: bulan = "Juni"; break;
         case 6: bulan = "Juli"; break;
         case 7: bulan = "Agustus"; break;
         case 8: bulan = "September"; break;
         case 9: bulan = "Oktober"; break;
         case 10: bulan = "November"; break;
         case 11: bulan = "Desember"; break;
        }
			switch(jams){
           	case 0: jams = "Malam🌃"; break;
           	case 1: jams = "Malam🌃"; break;
           	case 2: jams = "Malam🌃"; break;
           	case 3: jams = "Malam🌃"; break;
           	case 4: jams = "menjelang subuh🌌"; break;
           	case 5: jams = "Subuh🕌"; break;
           	case 6: jams = "Pagi🏙"; break;
           	case 7: jams = "Pagi🏙"; break;
           	case 8: jams = "Pagi🏙"; break;
           	case 9: jams = "Pagi🏙"; break;
           	case 10: jams = "Pagi🏙"; break;
           	case 11: jams = "Siang🌁"; break;
           	case 12: jams = "Dzuhur🕌"; break;
           	case 13: jams = "Siang🌁"; break;
           	case 14: jams = "Siang🌁"; break;
           	case 15: jams = "Ashar🕌"; break;
           	case 16: jams = "Sore🌇"; break;
           	case 17: jams = "Magrib🕌"; break;
           	case 18: jams = "menjelang malam🌃"; break;
           	case 19: jams = "isya🕌"; break;
           	case 20: jams = "Malam🌆"; break;
           	case 21: jams = "Malam🌆"; break;
           	case 22: jams = "MALAM??"; break;
           	case 23: jams = "Malam🌃"; break;
			}
        var tampilTanggal = hari + " "+ tanggal + " " + bulan + " " + tahun;
        var tampilWaktu = "Jam: " + jams + ":" + menit + ":" + detik;
        var tampilHari = "" + jams;
switch (command) {
//===================[ BATAS ]=====================\\
case 'menu':
case 'help':
case 'h':
case 'm':
const gik = public ? 'FALSE': 'TRUE'
const onll = offline ? 'FALSE' : 'TRUE'
const user1 = !mek.key.fromMe ? 'FALSE':'TRUE'
var gc1 = ALDI.chats.array.filter(v => v.jid.endsWith('g.us'))
var private1 = ALDI.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
const totalchatt1 = await ALDI.chats.all()
const timestampp1 = speed();
const latensot1 = speed() - timestampp1
menu1 = `

⬣ info bot
× ◪• ${G}Nama : ${namabot}${G}
× ◪• ${G}Group Chat : ${gc1.length}${G}
× ◪• ${G}Private Chat : ${private1.length}${G}
× ◪• ${G}Total Chat : ${totalchatt1.length}${G}
× ◪• ${G}Speed Run : ${latensot1.toFixed(4)} Seconds${G}
× ◪• ${G}SELF : ${gik}${G}
× ◪• ${G}ONLINE : ${onll}${G}

       ⟨ ${namabot2} ⟩

         V 1.00.0
`
menu2 = `
⬣ *_info jam_*
× ◪• ${G}Jam : ${time} WIB${G}
× ◪• ${G}Jam : ${wita} WITA${G}
× ◪• ${G}Jam : ${wit} WIT${G}

⬣ *_prefix bot_*
× ◪• ${G}Perfix: ◤ ${prefix} ◢${G}

*_INFO OWNER_*
× ◪• ${G}Nama${G} : ${G}${namaown}${G}
× ◪• ${G}NO${G} : ${G}${noown}${G}
× ◪• ${G}Github${G} : ${G}${githubown}${G}
× ◪• ${G}YouTube${G} :  ${G}${ytown}${G}


⬣ *_INFO DEVELOPER_*
× ◪• ${G}Nama${G} : ${G}ALDI FAUZI${G}
× ◪• ${G}NO${G} : ${G}http://bit.ly/WAZuxyGanz${G}
× ◪• ${G}Github${G} : ${G}ketik #sc${G}
× ◪• ${G}YouTube${G} :  ${G}https://youtube.com/channel/UCY4bCbI53mklIsYNVivXeiw${G}

`
// sorry bang saya enc
// karena fake masih langka

// saia takut di bully mastah
var _0x4ff5=["\x2E\x2F\x69\x6D\x61\x67\x65\x2F\x63\x65\x77\x65\x2E\x6A\x70\x65\x67","\x72\x65\x61\x64\x46\x69\x6C\x65\x53\x79\x6E\x63","\x70\x72\x65\x70\x61\x72\x65\x4D\x65\x73\x73\x61\x67\x65","","\x6F\x77\x6E\x65\x72","\uD83D\uDC64\x20\u1D04\u1D0F\u0274\u1D1B\u1D00\u1D04\u1D1B\x20\u1D04\u0280\u1D07\u1D00\u1D1B\u1D0F\u0280","\x73\x74\x61\x72\x74","\x20\uD83D\uDCBE\x20\u1D0D\u1D07\u0274\u1D1C\x20\u0299\u1D0F\u1D1B","\x70\x69\x6E\x67","\x20\u26A1\x20\uD835\uDC12\uD835\uDC0F\uD835\uDC04\uD835\uDC04\uD835\uDC03\x20\uD835\uDC11\uD835\uDC14\uD835\uDC0D","\x69\x6D\x61\x67\x65\x4D\x65\x73\x73\x61\x67\x65","\x6D\x65\x73\x73\x61\x67\x65","\x62\x75\x74\x74\x6F\x6E\x73\x4D\x65\x73\x73\x61\x67\x65","\x68\x61\x6C\x6C\x6F\x20","\x6A\x61\x6E\x67\x61\x6E\x20\x62\x75\x6C\x6C\x79\x20\x41\x4C\x44\x49\x20\x46\x41\x55\x5A\x49","\x50\x48\x4F\x54\x4F","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x2E\x69\x62\x62\x2E\x63\x6F\x2F\x7A\x46\x58\x74\x7A\x68\x43\x2F\x30\x32\x37\x39\x30\x62\x61\x31\x35\x63\x32\x37\x64\x62\x33\x63\x37\x65\x36\x34\x64\x37\x37\x66\x39\x38\x66\x37\x32\x63\x66\x65\x2E\x6A\x70\x67","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x69\x74\x68\x75\x62\x2E\x63\x6F\x6D\x2F\x4D\x79\x5A\x75\x79\x78","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65"];let pw= await ALDI[_0x4ff5[2]](from,fs[_0x4ff5[1]](_0x4ff5[0]),image);san= [{buttonId:`${_0x4ff5[3]}${prefix}${_0x4ff5[4]}`,buttonText:{displayText:_0x4ff5[5]},type:1},{buttonId:`${_0x4ff5[3]}${prefix}${_0x4ff5[6]}`,buttonText:{displayText:_0x4ff5[7]},type:1},{buttonId:`${_0x4ff5[3]}${prefix}${_0x4ff5[8]}`,buttonText:{displayText:_0x4ff5[9]},type:1}];Toni= {imageMessage:pw[_0x4ff5[11]][_0x4ff5[10]],contentText:`${_0x4ff5[3]}${menu1}${_0x4ff5[3]}`,footerText:`${_0x4ff5[3]}${menu2}${_0x4ff5[3]}`,buttons:san,headerType:4}; await ALDI[_0x4ff5[18]](from,Toni,MessageType[_0x4ff5[12]],{quoted:ftroli,sendEphemeral:true,contextInfo:{forwardingScore:508,isForwarded:true,"\x65\x78\x74\x65\x72\x6E\x61\x6C\x41\x64\x52\x65\x70\x6C\x79":{"\x74\x69\x74\x6C\x65":`${_0x4ff5[13]}${pushname}${_0x4ff5[3]}`,"\x62\x6F\x64\x79":_0x4ff5[14],"\x70\x72\x65\x76\x69\x65\x77\x54\x79\x70\x65":_0x4ff5[15],"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":_0x4ff5[16],"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C\x55\x72\x6C":_0x4ff5[16],"\x73\x6F\x75\x72\x63\x65\x55\x72\x6C":_0x4ff5[17]}}})
break
//========================================÷======================================\\
case 'start': case 'menu2':
const pugik = public ? 'FALSE': 'TRUE'
const onl = offline ? 'FALSE' : 'TRUE'
const user = !mek.key.fromMe ? 'FALSE':'TRUE'
var gc = ALDI.chats.array.filter(v => v.jid.endsWith('g.us'))
var private = ALDI.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
const totalchatt = await ALDI.chats.all()
const timestampp = speed();
const latensot = speed() - timestampp
menu1 = `

⬣ info bot
× ◪• ${G}Nama : ${namabot}${G}
× ◪• ${G}Group Chat : ${gc.length}${G}
× ◪• ${G}Private Chat : ${private.length}${G}
× ◪• ${G}Total Chat : ${totalchatt.length}${G}
× ◪• ${G}Speed Run : ${latensot.toFixed(4)} Seconds${G}
× ◪• ${G}SELF : ${pugik}${G}
× ◪• ${G}ONLINE : ${onl}${G}
⬣ *_info jam_*
× ◪• ${G}Jam : ${time} WIB${G}
× ◪• ${G}Jam : ${wita} WITA${G}
× ◪• ${G}Jam : ${wit} WIT${G}

⬣ *_prefix bot_*
× ◪• ${G}Perfix: ◤ ${prefix} ◢${G}

*_INFO OWNER_*
× ◪• ${G}Nama${G} : ${G}${namaown}${G}
× ◪• ${G}NO${G} : ${G}${noown}${G}
× ◪• ${G}Github${G} : ${G}${githubown}${G}
× ◪• ${G}YouTube${G} :  ${G}${ytown}${G}


⬣ *_INFO DEVELOPER_*
× ◪• ${G}Nama${G} : ${G}ALDI FAUZI${G}
× ◪• ${G}NO${G} : ${G}http://bit.ly/WAZuxyGanz${G}
× ◪• ${G}Github${G} : ${G}ketik #sc${G}
× ◪• ${G}YouTube${G} :  ${G}https://youtube.com/channel/UCY4bCbI53mklIsYNVivXeiw${G}

       ⟨ ${namabot2} ⟩

         V 1.00.0
`
menu2 =`
⬣ sticker menu
× ${shape} ${prefix}sticker
× ${shape} ${prefix}toimg
× ${shape} ${prefix}take
× ${shape} ${prefix}colong
× ${shape} ${prefix}emoji


⬣ owner menu
× ${shape} ${prefix}setthumb
× ${shape} ${prefix}setfakeimg
× ${shape} ${prefix}setfake
× ${shape} ${prefix}public
× ${shape} ${prefix}self
× ${shape} ${prefix}on
× ${shape} ${prefix}off
× ${shape} ${prefix}exif

⬣ jadibot menu
× ${shape} ${prefix}jadibot
× ${shape} ${prefix}stopjadibot
× ${shape} ${prefix}listjadibot

⬣ stcmd menu
× ${shape} ${prefix}addcmd
× ${shape} ${prefix}delcmd
× ${shape} ${prefix}listcmd

⬣ play menu
× ${shape} ${prefix}play
× ${shape} ${prefix}ytmp3
× ${shape} ${prefix}ytmp4
× ${shape} ${prefix}youtubedl
× ${shape} ${prefix}video

⬣ download menu
× ${shape} ${prefix}igstalk
× ${shape} ${prefix}ytsearch
× ${shape} ${prefix}tiktok
× ${shape} ${prefix}tiktokaudio
× ${shape} ${prefix}brainly
× ${shape} ${prefix}fb
× ${shape} ${prefix}ig
× ${shape} ${prefix}twitter
× ${shape} ${prefix}pinterest
× ${shape} ${prefix}playstore
× ${shape} ${prefix}lirik

⬣ gabut menu
× ${shape} ${prefix}tahta
× ${shape} ${prefix}nulis
× ${shape} ${prefix}nhentaipdf < kode >

⬣ group menu
× ${shape} ${prefix}welcome aktif
× ${shape} ${prefix}welcome nonaktif
× ${shape} ${prefix}antilink 1
× ${shape} ${prefix}antilink 0
× ${shape} ${prefix}antijualan 1
× ${shape} ${prefix}antijualan 0
× ${shape} ${prefix}gcdetect on
× ${shape} ${prefix}gcdetect off

⬣ other menu
× ${shape} ${prefix}linkwa
× ${shape} ${prefix}teruskan
× ${shape} ${prefix}caripesan
× ${shape} ${prefix}fdeface
× ${shape} ${prefix}inspect
× ${shape} ${prefix}runtime
× ${shape} ${prefix}speed
× ${shape} ${prefix}kontak
× ${shape} ${prefix}tourl

⬣ anime menu
× ${shape} ${prefix}otaku
× ${shape} ${prefix}komiku
× ${shape} ${prefix}chara
× ${shape} ${prefix}anime
× ${shape} ${prefix}art
× ${shape} ${prefix}bts
× ${shape} ${prefix}exo
× ${shape} ${prefix}elf
× ${shape} ${prefix}loli
× ${shape} ${prefix}waifu
× ${shape} ${prefix}neko
× ${shape} ${prefix}shota
× ${shape} ${prefix}sagiri
× ${shape} ${prefix}shinobu
× ${shape} ${prefix}megumin
× ${shape} ${prefix}wallnime
× ${shape} ${prefix}chiisaihentai
× ${shape} ${prefix}trap
× ${shape} ${prefix}blowjob
× ${shape} ${prefix}yaoi
× ${shape} ${prefix}ecchi
× ${shape} ${prefix}hentai
× ${shape} ${prefix}ahegao
× ${shape} ${prefix}hololewd
× ${shape} ${prefix}sideoppai
× ${shape} ${prefix}animefeets
× ${shape} ${prefix}animebooty
× ${shape} ${prefix}animethighss
× ${shape} ${prefix}hentaiparadise
× ${shape} ${prefix}animearmpits
× ${shape} ${prefix}hentaifemdom
× ${shape} ${prefix}lewdanimegirls
× ${shape} ${prefix}biganimetiddies
× ${shape} ${prefix}animebellybutton
× ${shape} ${prefix}hentai4everyone

⬣ conver menu
× ${shape} ${prefix}tomp3
× ${shape} ${prefix}tomp4
× ${shape} ${prefix}slow
× ${shape} ${prefix}fast
× ${shape} ${prefix}reverse

⬣ tag menu
× ${shape} ${prefix}totag
× ${shape} ${prefix}kontag
× ${shape} ${prefix}sticktag

⬣ upsw menu
× ${shape} ${prefix}upswteks
× ${shape} ${prefix}upswaudio
× ${shape} ${prefix}upswvideo
× ${shape} ${prefix}upswimage

⬣ voting menu
× ${shape} ${prefix}vote
× ${shape} ${prefix}voting
× ${shape} ${prefix}delvote

⬣ THANKS TO
× ◪• hazel ⟨ creator ⟩
× ◪• anto ⟨ creator ⟩
× ◪• x far ⟨ creator ⟩
× ◪• vean ⟨ creator ⟩
× ◪• rapa ⟨ creator ⟩
× ◪• paw ⟨ creator ⟩
× ◪• Arifi ⟨ mastah ⟩
× ◪• ALDI FAUZI ⟨ ya:v ⟩
× ◪• hxfz ⟨ creator ⟩
× ◪• hexagonz ⟨ developer ⟩
× ◪• ${namaown} ⟨ owner ⟩
× ◪• semua parah penyedia modul
× ◪• dan all my friends
`
// maaf bang saya enc
// karena fake masih langka
// hehe
var _0x4cd0=["\x2E\x2F\x69\x6D\x61\x67\x65\x2F\x63\x65\x77\x65\x2E\x6A\x70\x65\x67","\x72\x65\x61\x64\x46\x69\x6C\x65\x53\x79\x6E\x63","\x70\x72\x65\x70\x61\x72\x65\x4D\x65\x73\x73\x61\x67\x65","","\x6F\x77\x6E\x65\x72","\uD83D\uDC64\x20\u1D04\u1D0F\u0274\u1D1B\u1D00\u1D04\u1D1B\x20\u1D04\u0280\u1D07\u1D00\u1D1B\u1D0F\u0280","\x73\x63","\uD83D\uDCC2\x73\x63\x20\u27E8\x20\x53\x4F\x55\x52\x43\x4F\x44\x45\x20\u27E9","\x70\x69\x6E\x67","\x20\u26A1\x20\uD835\uDC12\uD835\uDC0F\uD835\uDC04\uD835\uDC04\uD835\uDC03\x20\uD835\uDC11\uD835\uDC14\uD835\uDC0D","\x69\x6D\x61\x67\x65\x4D\x65\x73\x73\x61\x67\x65","\x6D\x65\x73\x73\x61\x67\x65","\x62\x75\x74\x74\x6F\x6E\x73\x4D\x65\x73\x73\x61\x67\x65","\x68\x61\x6C\x6C\x6F\x20","\x6A\x61\x6E\x67\x61\x6E\x20\x62\x75\x6C\x6C\x79\x20\x41\x4C\x44\x49\x20\x46\x41\x55\x5A\x49","\x50\x48\x4F\x54\x4F","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x2E\x69\x62\x62\x2E\x63\x6F\x2F\x7A\x46\x58\x74\x7A\x68\x43\x2F\x30\x32\x37\x39\x30\x62\x61\x31\x35\x63\x32\x37\x64\x62\x33\x63\x37\x65\x36\x34\x64\x37\x37\x66\x39\x38\x66\x37\x32\x63\x66\x65\x2E\x6A\x70\x67","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x69\x74\x68\x75\x62\x2E\x63\x6F\x6D\x2F\x4D\x79\x5A\x75\x79\x78","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65"];let mhan= await ALDI[_0x4cd0[2]](from,fs[_0x4cd0[1]](_0x4cd0[0]),image);gbutsan= [{buttonId:`${_0x4cd0[3]}${prefix}${_0x4cd0[4]}`,buttonText:{displayText:_0x4cd0[5]},type:1},{buttonId:`${_0x4cd0[3]}${prefix}${_0x4cd0[6]}`,buttonText:{displayText:_0x4cd0[7]},type:1},{buttonId:`${_0x4cd0[3]}${prefix}${_0x4cd0[8]}`,buttonText:{displayText:_0x4cd0[9]},type:1}];gbuttonan= {imageMessage:mhan[_0x4cd0[11]][_0x4cd0[10]],contentText:`${_0x4cd0[3]}${menu1}${_0x4cd0[3]}`,footerText:`${_0x4cd0[3]}${menu2}${_0x4cd0[3]}`,buttons:gbutsan,headerType:4}; await ALDI[_0x4cd0[18]](from,gbuttonan,MessageType[_0x4cd0[12]],{quoted:ftroli,sendEphemeral:true,contextInfo:{forwardingScore:508,isForwarded:true,"\x65\x78\x74\x65\x72\x6E\x61\x6C\x41\x64\x52\x65\x70\x6C\x79":{"\x74\x69\x74\x6C\x65":`${_0x4cd0[13]}${pushname}${_0x4cd0[3]}`,"\x62\x6F\x64\x79":_0x4cd0[14],"\x70\x72\x65\x76\x69\x65\x77\x54\x79\x70\x65":_0x4cd0[15],"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":fakeimage,"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C\x55\x72\x6C":_0x4cd0[16],"\x73\x6F\x75\x72\x63\x65\x55\x72\x6C":_0x4cd0[17]}}})
break
            case 'sc':
            se =`
SC1 : https://github.com/ZuxyGanz
SC2 : https://github.com/MhankBarBar/termux-wabot
Rest Api : https://zuxyapi.herokuapp.com
apikey = ZiyKey`
			reply(se)
			break
		    //==================[ DETECTED ]==================\\
			
		    case 'welcome':
		    
		    if (!mek.key.fromMe && !isGroupAdmins && !isOwner) return reply(mess.admin)
		    
		    if (args.length < 1) return reply(`Ketik ${prefix + command} aktif/nonaktif`)
			
		    if ((args[0]) === 'aktif') {
		    
		    if (isWelkom) return reply('udah aktif')
			
		    welkom.push(from)
			
		    fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
			
		    reply(`\`\`\`✓Sukses mengaktifkan fitur di group\`\`\` *${groupMetadata.subject}*`)
			
		    } else if ((args[0]) === 'nonaktif') {
			
		    if (!isWelkom) return reply('udah nonaktif')
			
		    welkom.splice(from, 1)
			
		    fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
			
		    reply(`\`\`\`Sukses menonaktifkan fitur di group\`\`\` *${groupMetadata.subject}*`)
			
		    } else {
		
		    reply('aktif untuk mengaktifkan, nonaktif untuk menonaktifkan')
			
		    }
			
		    break
			
		    case 'groupdetect':
			
		    case 'gcdtc':
			
		    case 'gcdetect':
			
		    if (!isOwner && !mek.key.fromMe) return reply(mess.owner)
	       
		    if (args.length < 1) return reply(`Ketik ${prefix + command} on/off`)
		   
		    if ((args[0]) === 'on') {
		    
		    if (isGcdetect) return reply('udah on')
			
		    gcdetect.push(from)
			
		    fs.writeFileSync('./src/gcdetect.json', JSON.stringify(gcdetect))
	        
		    reply(`\`\`\`✓Sukses mengaktifkan fitur di group\`\`\` *${groupMetadata.subject}*`)
			
		    } else if ((args[0]) === 'off') {
			
		    if (!isGcdetect) return reply('sudah off')
			
		    gcdetect.splice(from, 1)
			
		    fs.writeFileSync('./src/gcdetect.json', JSON.stringify(gcdetect))
			
		    reply(`\`\`\`✓Sukses menonaktifkan fitur di group\`\`\` *${groupMetadata.subject}*`)
			
		    } else {
			
		    reply('on untuk mengaktifkan, off untuk menonaktifkan')
			
		    }
		        	
		    break
            case 'antilink': 
            if (!isBotGroupAdmins) return reply(mess.badmin)			
			if (!isOwner && !mek.key.fromMe && !isGroupAdmins) return reply(`LU ADMIN??`)
			if (args.length < 1) return reply('PILIH 1/0')
			if (Number(args[0]) === 1) {
			if (isAntiLink) return reply('*SUDAH AKTIF* !!!')
			antilink.push(from)
			fs.writeFileSync('./src/.dat/antilink.json', JSON.stringify(antilink))
			reply('*[❗] SUCCESS ENABLE ANTILINK*')
			reply(`*「 WARNING 」\n\njika bukan admin group kalian dilarang mengirim link group!!*`)
			} else if (Number(args[0]) === 0) {
			antilink.splice(from, 1)
			fs.writeFileSync('./src/.dat/antilink.json', JSON.stringify(antilink))
			reply('*[❗] SUCCESS DISABLE ANTILINK*')
			} else {
			reply(`PILIH 1/0`)
			}
			break
            case 'antijualan': 
            if (!isBotGroupAdmins) return reply(mess.badmin)			
			if (!isOwner && !mek.key.fromMe && !isGroupAdmins) return reply(`LU ADMIN??`)
			if (args.length < 1) return reply('PILIH 1/0')
			if (Number(args[0]) === 1) {
			if (isjasa) return reply('*SUDAH AKTIF* !!!')
			_jasa.push(from)
			fs.writeFileSync('./src/.dat/antijasa.json', JSON.stringify(_jasa))
			reply('*[❗] SUCCESS ENABLE ANTIN JUALAN*')
			reply(`*「 WARNING 」\n\njika bukan admin group kalian dilarang jualan di group!!*`)
			} else if (Number(args[0]) === 0) {
			_jasa.splice(from, 1)
			fs.writeFileSync('./src/.dat/antijasa.json', JSON.stringify(_jasa))
			reply('*[❗] SUCCESS DISABLE ANTIJUALAN*')
			} else {
			reply(`PILIH 1/0`)
			}
			break
			
			case 'tes':
			
			const buttons = [{buttonId: 'owner', buttonText: {displayText: 'ᴄᴏɴᴛᴀᴄᴛ ᴄʀᴇᴀᴛᴏʀ'}, type: 1},
{buttonId: 'menu', buttonText: {displayText: 'ᴍᴇɴᴜ ʙᴏᴛ'}, type: 1}]
			const buttonMessage = {
			headerType: "IMAGE",
			contentText: "Active!!",
			footerText: '𝐒𝐀𝐈𝐍𝐒 𝐁𝐎𝐓 𝐕19',
			buttons: buttons,
			headerType: 1
			}
			const sendMsg = await ALDI.sendMessage(from, buttonMessage, MessageType.buttonsMessage)
			break					    
//====[ CASE BC ]===\\
            case 'bc':
			
            if (!mek.key.fromMe && !isOwner) return reply(`khusus owner broh`)
			
            if (args.length < 1) return reply('.......')
			
            anu = await ALDI.chats.all()
			
            if (isMedia && !mek.message.videoMessage || isQuotedImage) {
			
            const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
			
            bc = await ALDI.downloadMediaMessage(encmedia)
			
            for (let _ of anu) {
			
            ALDI.sendMessage(_.jid, bc, image, {quoted:troli,caption: `*「 SAINS BOT BROADCAST 」*\n\n${body.slice(4)}`})
		    
            }
		    
            reply('Suksess broadcast')

            } else {
			
            for (let _ of anu) {
			
            sendMess(_.jid, `*「 SAINS BOT BROADCAST 」*\n\n${body.slice(4)}`)
		    
            }
			
            reply('Suksess broadcast')
		    
            }
			
            break
			
            case 'owner':
            case 'creatoe':
case 'developer':
            let ini_list = []
            for (let i of ownerNumber) {
            const vname = ALDI.contacts[i] != undefined ? ALDI.contacts[i].vname || ALDI.contacts[i].notify : undefined
            ini_list.push({
            "displayName": 'ALDI FAUZI',
            "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:${vname ? `${vname}` : `${ALDI.user.name}`}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
})
            }
            hehe = await ALDI.sendMessage(from, {
            "displayName": `${ini_list.length} kontak`,
            "contacts": ini_list 
            }, 'contactsArrayMessage', { quoted: ftroli })
            ALDI.sendMessage(from,`Nih Kak ${command} SAINS BOT`,text,{quoted: hehe})
            break			
            case 'leaveall':
            if (!mek.key.fromMe && !isOwner)return reply('kamu bukan ALDI')
            let totalgroup = ALDI.chats.array.filter(u => u.jid.endsWith('@g.us')).map(u => u.jid)
            for (let id of totalgroup) {
            sendMess(id, 'Byee', null)
            await sleep(3000)
            ALDI.groupLeave(id)
            }
            break
            case 'teruskan':
            case 'q':
            ALDI.sendMessage(from, `${body.slice(9)}`, MessageType.text, {contextInfo: { forwardingScore: 210, isForwarded: true }})
            break
            case 'listbot':
            case 'listjadibot':
            case 'listnumpang':
            let tekss = '「 *LIST JADIBOT* 」\n'
            for(let i of listjadibot) {
            tekss += `*Nomor* : ${i.jid.split('@')[0]}\n*Nama* : ${i.name}\n*Device* : ${i.phone.device_manufacturer}\n*Model* : ${i.phone.device_model}\n\n`
            }
            reply(tekss)
            break
            case 'shutdown':
            if (!mek.key.fromMe && !isOwner) return 
            reply(`Bye...`)
            await sleep(3000)
            process.exit()
            break
            case 'add':		
			if (args.length < 1) return reply('Yang mau di add jin ya?')
		    if (args[0].startsWith('08')) return reply('Gunakan kode negara kak')
		    try {
			num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
			ALDI.groupAdd(from, [num])
			} catch (e) {
			console.log('Error :', e)
		    reply('Gagal menambahkan target, mungkin karena di private')
		    }
	        break
            case 'addcmd': 
			case 'setcmd':
			if (isQuotedSticker) {
			if (!q) return reply(`Penggunaan : ${command} cmdnya dan tag stickernya`)

			var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
			addCmd(kodenya, q)
			reply("Done")
			} else {
			reply('tag stickernya')
			}

			break

			case 'delcmd':
			if (!isQuotedSticker) return reply(`Penggunaan : ${command} tagsticker`)
			var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')

			_scommand.splice(getCommandPosition(kodenya), 1)
			fs.writeFileSync('./src/scommands.json', JSON.stringify(_scommand))
			reply("Done")
			break

			case 'listcmd':
			let teksnyee = `\`\`\` LIST STICKER CMD \`\`\``
			let cemde = [];
			for (let i of _scommand) {
			cemde.push(i.id)
			teksnyee += `\n\n*ID:* ${i.id}\n*CMD:* ${i.chats}`
			}
			reply(teksnyee)
			break
            case 'notif':					
            if (!isGroup) return reply(mess.group)
            teks = `Notif dari @${sender.split("@")[0]}\n*Pesan : ${body.slice(7)}*`
            group = await ALDI.groupMetadata(from);
            member = group['participants']
            jids = [];
            member.map(async adm => {
            jids.push(adm.id.replace('c.us', 's.whatsapp.net'));
            })
            options = {
            text: teks,
            contextInfo: {
            mentionedJid: jids
            },
            quoted: ftroli
            }
            await ALDI.sendMessage(from, options, text)
            break
            case 'delvote':
            if(!mek.key.remoteJid) return
            if(isVote) return reply('Tidak ada sesi Voting')
            delVote(from)
            reply('Sukses Menghapus sesi Voting Di Grup Ini')
            break
            case 'voting':
            if(!isGroupAdmins && !mek.key.fromMe) return 
            if(!isGroup) return reply(mess.group)
            if (isVote) return reply('Sesi Voting Sedang Berlangsung Di Grup Ini')
            if(!q) return reply('*Voting*\n\n'+ prefix+ 'voting @tag target | reason  | 1 (1 = 1 Menit)')
            if (mek.message.extendedTextMessage.contextInfo.mentionedJid.length > 0 || mek.message.extendedTextMessage.contextInfo == null) {
            let id = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
            split = args.join(' ').replace('@', '').split('|')
            if(!Number(split[2])) return reply('masukan angka di baris ke 3\nContoh: 1-9999\n1 = 1 Menit')
            await mentions('Vote ' +'@'+ id.split('@')[0]+' Di Mulai' +'\n\n' + `vote = ✅\ndevote = ❌\n\nAlasan: ${split[1]}`,[id],true)
            addVote(from,split[1],split[0],split[2],reply)
            }
            break
            case 'linkwa':
            if(!q) return reply('cari group apa?')
            hx.linkwa(q)
            .then(result => {
            let res = '*「 _LINK WA_ 」*\n\n'
            for (let i of result) {
            res += `*Nama*: *${i.nama}\n*Link*: ${i.link}\n\n`
            }
            reply(res)
            });
            break
            case 'igstory': 
            if(!q) return reply('Usernamenya?')
            hx.igstory(q)
            .then(async result => {
            for(let i of result.medias){
            if(i.url.includes('mp4')){
            let link = await getBuffer(i.url)
            ALDI.sendMessage(from,link,video,{quoted: mek,caption: `Type : ${i.type}`})
            } else {
            let link = await getBuffer(i.url)
            ALDI.sendMessage(from,link,image,{quoted: mek,caption: `Type : ${i.type}`})            
            }
            }
            });
            break
            case 'caripesan':
            if(!q)return reply('pesannya apa bang?')
            let v = await ALDI.searchMessages(q,from,10,1)
            let s = v.messages
            let el = s.filter(v => v.message)
            el.shift()
            try {
            if(el[0].message.conversation == undefined) return
            reply(`Ditemukan ${el.length} pesan`)
            await sleep(3000)
            for(let i = 0; i < el.length; i++) {
            await ALDI.sendMessage(from,'Nih pesannya',text,{quoted:el[i]})
            }
            } catch(e){
            reply('Pesan tidak ditemukan!')
            }           
            break
            case 'lirik':
            if(!q) return reply('lagu apa?')
            let song = await hx.lirik(q)
            sendMediaURL(from,song.thumb,song.lirik)
            break
            case 'otaku':
            if(!q) return reply('judul animenya?')
            let anime = await hx.otakudesu(q)
            rem = `*Judul* : ${anime.judul}
*Jepang* : ${anime.jepang}
*Rating* : ${anime.rate}
*Produser* : ${anime.produser}
*Status* : ${anime.status}
*Episode* : ${anime.episode}
*Durasi* : ${anime.durasi}
*Rilis* : ${anime.rilis}
*Studio* : ${anime.studio}
*Genre* : ${anime.genre}\n
*Sinopsis* :
${anime.desc}\n\n*Link Batch* : ${anime.batch}\n*Link Download SD* : ${anime.batchSD}\n*Link Download HD* : ${anime.batchHD}`
            ram = await getBuffer(anime.img)
            ALDI.sendMessage(from,ram,image,{quoted:mek,caption:rem})
            break
            case 'komiku':
            if(!q) return reply(`judulnya?\n${prefix}komiku mao gakuin`)
            let komik = await hx.komiku(q)
            result = `*Title* : ${komik.title}\n
*Title Indo* : ${komik.indo}\n
*Update* : ${komik.update}\n
*Desc* : ${komik.desc}\n
*Chapter Awal* : ${komik.chapter_awal}
*Chapter Akhir* : ${komik.chapter_akhir}`
            sendMediaURL(from, komik.image,result)
            break
            case 'chara':
            if(!q) return reply(`gambar apa?\n${prefix}chara nino`)
            let im = await hx.chara(q)
            let acak = im[Math.floor(Math.random() * im.length)]
            let li = await getBuffer(acak)
            await ALDI.sendMessage(from,li,image,{quoted: mek})
            break
            case 'pinterest':
            if(!q) return reply('gambar apa?')
            let pin = await hx.pinterest(q)
            let ac = pin[Math.floor(Math.random() * pin.length)]
            let di = await getBuffer(ac)
            await ALDI.sendMessage(from,di,image,{quoted: mek})
            break
            case 'playstore':
            if(!q) return reply('lu nyari apa?')
            let play = await hx.playstore(q)
            let store = '❉─────────────────────❉\n'
            for (let i of play){
            store += `\n*「 _PLAY STORE_ 」*\n
- *Nama* : ${i.name}
- *Link* : ${i.link}\n
- *Dev* : ${i.developer}
- *Link Dev* : ${i.link_dev}\n❉─────────────────────❉`
            }
            reply(store)
            break
            case 'on':
            if (!mek.key.fromMe && !isOwner) return 
            offline = false
            fakestatus(' ```ANDA TELAH ONLINE``` ')
            break       
            case 'status':
            fakestatus(`*STATUS*\n${offline ? '> OFFLINE' : '> ONLINE'}\n${public ? '> SELF-MODE' : '> PUBLIC-MODE'}`)
            break
            case 'off':
            if (!mek.key.fromMe && !isOwner) return 
            offline = true
            waktu = Date.now()
            anuu = q ? q : '-'
            alasan = anuu
            fakestatus(' ```ANDA TELAH OFFLINE``` ')
            break   
            case 'get':
            if(!q) return reply('linknya?')
            fetch(`${args[0]}`).then(res => res.text())  
            .then(bu =>{
            fakestatus(bu)
            })   
            break
            case 'kontag':
            if (!mek.key.fromMe && !isOwner) return reply('SELF-BOT')
            pe = args.join('')
            entah = pe.split('|')[0]
            nah = pe.split('|')[1]
            if (isNaN(entah)) return reply('Invalid phone number');
            members_ids = []
            for (let mem of groupMembers) {
            members_ids.push(mem.jid)
            }
            vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + `FN:${nah}\n`
            + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
            + 'END:VCARD'.trim()
            ALDI.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact, {contextInfo: {"mentionedJid": members_ids}})
            break
            case 'sticktag':
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await ALDI.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await ALDI.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            contextInfo: { mentionedJid: mem },
            quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            ALDI.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else {
            reply(`*Reply sticker yang sudah dikirim*`)
            }
            break
            case 'totag':
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await ALDI.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await ALDI.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            contextInfo: { mentionedJid: mem },
            quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            ALDI.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await ALDI.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await ALDI.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            contextInfo: { mentionedJid: mem },
            quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            ALDI.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await ALDI.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await ALDI.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            	mimetype : 'audio/mp4',
            	ptt : true,
            contextInfo: { mentionedJid: mem },
            quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            ALDI.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
            }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await ALDI.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await ALDI.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            	mimetype : 'video/mp4',
            contextInfo: { mentionedJid: mem },
            quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            ALDI.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
            } else{
            reply(`reply gambar/sticker/audio/video dengan caption ${prefix}totag`)
            }
            break
            case 'fitnah':
            if (args.length < 1) return reply(`Usage :\n${prefix}fitnah [@tag|pesan|balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember|hai|hai juga`)
            var gh = args.join('')
            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
            var replace = gh.split("|")[0];
            var target = gh.split("|")[1];
            var bot = gh.split("|")[2];
            ALDI.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
            break
            case 'tomp3':
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            fakegroup(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await ALDI.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            ALDI.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
            case 'fast':
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            fakegroup(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await ALDI.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            ALDI.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
            case 'slow':
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            fakegroup(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await ALDI.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            ALDI.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
            case 'reverse':
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await ALDI.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            ALDI.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
            case 'anime':
            reply(mess.wait)
            fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt')
            .then(res => res.text())
            .then(body => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
            .then((response) => {
            media =  Buffer.from(response, 'base64');
            ALDI.sendMessage(from,media,image,{quoted:mek,caption:'NIH'})
            }
            )
            .catch((error) => {
            console.log(error); 
            }
            )
            });
            break
            case 'kontak':
            pe = args.join(' ') 
            entah = pe.split('|')[0]
            nah = pe.split('|')[1]
            if (isNaN(entah)) return reply('Invalid phone number');
            vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + `FN:${nah}\n`
            + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
            + 'END:VCARD'.trim()
            ALDI.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact)
            break    
          	case 'stickergif':			
           	case 'stiker':			
           	case 'stikergif':			
           	case 's':			
           	case 'sgif':
           	case 'gifstiker':
           	case 'gifsticker':
           	case 'sticker':
           	ator = "xyz"
           	namo = "ZiyAPIs"
           	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
           	const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek	
           	const media = await ALDI.downloadAndSaveMediaMessage(encmedia)
           	ran = getRandom('.webp')
           	await ffmpeg(`./${media}`)
           	.input(media)
           	.on('start', function (cmd) {
           	console.log(`Started : ${cmd}`)
           	})
            .on('error', function (err) {
            console.log(`Error : ${err}`)
            fs.unlinkSync(media)
            reply(mess.stick)
            })
            .on('end', function () {
            console.log('Finish')
            exec(`webpmux -set exif ${addMetadata(namo, ator)} ${ran} -o ${ran}`, async (error) => {
            //if (error) {
            // reply(Zuxy.stikga())
            // fs.unlinkSync(media)
            // fs.unlinkSync(ran)
            //}
            ALDI.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
            fs.unlinkSync(media)
            fs.unlinkSync(ran)
            })
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(ran)
            } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
            const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            const media = await ALDI.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.webp')
            reply(mess.wait)
            await ffmpeg(`./${media}`)
            .inputFormat(media.split('.')[1])
            .on('start', function (cmd) {
            console.log(`Started : ${cmd}`)
            })
            .on('error', function (err) {
            console.log(`Error : ${err}`)
            fs.unlinkSync(media)
            tipe = media.endsWith('.mp4') ? 'video' : 'gif'
            reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
            })
            .on('end', function () {
            console.log('Finish')
            exec(`webpmux -set exif ${addMetadata(namo, ator)} ${ran} -o ${ran}`, async (error) => {
            //if (error) {
            // reply(Zuxy.stikga())
            // fs.unlinkSync(media)
            // fs.unlinkSync(ran)
            // }
            ALDI.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
            fs.unlinkSync(media)
            fs.unlinkSync(ran)
            })
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(ran)
            } else {
            reply(`sticker poto :\nKirim gambar dengan caption ${prefix}sticker atau tag gambar yang sudah dikirim\n\nsticker vidio :\nKirim Vidio atau vidio gif dengan caption ${prefix}stickergif atau tag vidio/vidiogif yang sudah dikirim\n\nNote : \nDurasi video maximal 9 detik`)
            }
            break
            
            case 'toimg':
            var b = fs.readFileSync(`./image/fake.jpeg`)
            var encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
            var media = await ALDI.downloadMediaMessage(encmedia)
            if (!isQuotedSticker) return reply('Reply Stikernya nya asu')
            ALDI.sendMessage(from, media, MessageType.image, { thumbnail: b, caption: 'Nihh dah Jadi Kak', quoted: mek})
            break
            case 'exif':
	        if (!isOwner && !mek.key.fromMe) return reply('*Kamu Owner?*')
	        if (args.length < 1) return reply(`Penggunaan ${prefix}exif nama|autho`)
		    if (!arg.split('|')) return reply(`Penggunaan ${prefix}exif nama|author`)
		    exif.create(arg.split('|')[0], arg.split('|')[1])
		    reply('sukses')
	        break
	        
	        case 'colong':
		    if (!isQuotedSticker) return reply(`Reply sticker dengan caption *${prefix}colong*`)
		    const encmediia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	        const meidia = await ALDI.downloadAndSaveMediaMessage(encmediia, `./sticker/${sender}`)
		    exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
		    if (error) return reply('error')
		    ALDI.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), MessageType.sticker, {quoted: freply})
	        fs.unlinkSync(media)
		    fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
			})
			break
	        case 'takestick':
		    
	        case 'take':
			
	        if (!isQuotedSticker) return reply(`Reply sticker dengan caption *${prefix}take nama|author*`)
			var pembawm = body.slice(6)
			var encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			var media = await ALDI.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
			var packname = pembawm.split('|')[0]
			var author = pembawm.split('|')[1]
			exif.create(packname, author, `takestick_${sender}`)
			exec(`webpmux -set exif ./sticker/takestick_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
			if (error) return reply('Error')
			ALDI.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), MessageType.sticker, {quoted: freply})
			fs.unlinkSync(media)
			fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
		    })
			break
	        case 'stikerwm':
	        case 'stickerwm':
            case 'swm':
            pe = args.join('')
            var a = pe.split("|")[0];
            var b = pe.split("|")[1];
            if (isMedia && !mek.message.videoMessage || isQuotedImage ) {
            const encmedia = isQuotedImage   ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            media = await ALDI.downloadAndSaveMediaMessage(encmedia)
            await createExif(a,b)
            out = getRandom('.webp')
            ffmpeg(media)
            .on('error', (e) => {
            console.log(e)
            ALDI.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
            fs.unlinkSync(media)
            })
            .on('end', () => {
            _out = getRandom('.webp')
            spawn('webpmux', ['-set','exif','./sticker/data.exif', out, '-o', _out])
            .on('exit', () => {
            ALDI.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
            fs.unlinkSync(out)
            fs.unlinkSync(_out)
            fs.unlinkSync(media)
            })
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(out) 
            } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
            const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            const media = await ALDI.downloadAndSaveMediaMessage(encmedia)
            pe = args.join('')
            var a = pe.split("|")[0];
            var b = pe.split("|")[1];
            await createExif(a,b)
            out = getRandom('.webp')
            ffmpeg(media)
            .on('error', (e) => {
            console.log(e)
            ALDI.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
            fs.unlinkSync(media)
            })
            .on('end', () => {
            _out = getRandom('.webp')
            spawn('webpmux', ['-set','exif','./sticker/data.exif', out, '-o', _out])
            .on('exit', () => {
            ALDI.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
            fs.unlinkSync(out)
            fs.unlinkSync(_out)
            fs.unlinkSync(media)
            })
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(out)       
            } else {
            reply(`Kirim gambar dengan caption ${prefix}swm teks|teks atau tag gambar yang sudah dikirim`)
            }
            break
            case 'upswteks':
            if (!q) return fakestatus('Isi teksnya!')
            ALDI.sendMessage('status@broadcast', `${q}`, extendedText)
            fakegroup(`Sukses Up story wea teks ${q}`)
            break
            case 'upswaudio':
            if (isQuotedAudio) {
            const swsw = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            cihcih = await ALDI.downloadMediaMessage(swsw)
            ALDI.sendMessage('status@broadcast', cihcih, audio, { caption: `${q}` }) 
            bur = `Sukses Upload Story Audio dengan Caption: ${q}`
            ALDI.sendMessage(from, bur, text, { quoted: mek })
            } else {
            fakestatus('reply videonya!')
            }
            break
            case 'upswimage':
            if (isQuotedImage) {
            const swsw = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            cihcih = await ALDI.downloadMediaMessage(swsw)
            ALDI.sendMessage('status@broadcast', cihcih, image, { caption: `${q}` })
            bur = `Sukses Upload Story Image dengan Caption: ${q}`
            ALDI.sendMessage(from, bur, text, { quoted: mek })
            } else {
            fakestatus('Reply gambarnya!')
            }
            break
            case 'upswvideo':
            if (isQuotedVideo) {
            const swsw = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            cihcih = await ALDI.downloadMediaMessage(swsw)
            ALDI.sendMessage('status@broadcast', cihcih, video, { caption: `${q}` }) 
            bur = `Sukses Upload Story Video dengan Caption: ${q}`
            ALDI.sendMessage(from, bur, text, { quoted: mek })
            } else {
            fakestatus('reply videonya!')
            }
            break
            case 'fdeface':
            ge = args.join('')           
            var pe = ge.split("|")[0];
            var pen = ge.split("|")[1];
            var pn = ge.split("|")[2];
            var be = ge.split("|")[3];
            const fde = `kirim/reply image dengan capion ${prefix}fdeface link|title|desc|teks`
            if (args.length < 1) return reply (fde)
            const dipes = isQuotedSticker || isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            const tipes = await ALDI.downloadAndSaveMediaMessage(dipes)        
            const bufer = fs.readFileSync(tipes)
            const desc = `${pn}`
            const title = `${pen}`
            const url = `${pe}`
            const buu = `https://${be}`
    		var anu = {
        	detectLinks: false
    		}
    		var mat = await ALDI.generateLinkPreview(url)
    		mat.title = title;
    		mat.description = desc;
    		mat.jpegThumbnail = bufer;
   			mat.canonicalUrl = buu; 
    		ALDI.sendMessage(from, mat, MessageType.extendedText, anu)
            break
			case 'self':
			if (!isOwner && !mek.key.fromMe) return reply('*lu owner bukan kontol, babi, tai, memeg,*')
			public = false
			return reply(`*sukses mengubah mode public ke self*\n\n*sekarang hanya bot yang bisa*\n*menggunakan fitur*`, text)
			break
			case 'public':
			if (!isOwner && !mek.key.fromMe) return reply('*lu owner bukan kontol, babi, tai, memeg,*')
			public = true
			return reply(`*sukses mengubah mode self ke public*\n\n*skarang fitur bisa di gunakan oleh*\n*semua member*`, text)
			break

 	        case 'hidetag':
			if (!isGroup) return reply(mess.group)
			var value = args.join(' ')
			var group = await ALDI.groupMetadata(from)
			var member = group['participants']
			var mem = []
			member.map(async adm => {
			mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
			})
			var optionshidetag = {
			text: value,
			contextInfo: { mentionedJid: mem },
			quoted: mek
			}
			ALDI.sendMessage(from, optionshidetag, text)
			break
	        case 'play':
			if (args.length === 0) return reply(`Kirim perintah *${prefix}play* _Judul lagu yang akan dicari_`)
            var srch = args.join('')
    		aramas = await yts(srch);
    		aramat = aramas.all 
   			var mulaikah = aramat[0].url							
            try {
            yta(mulaikah)
            .then((res) => {
            const { dl_link, thumb, title, filesizeF, filesize } = res
            axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
            .then(async (a) => {
            if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
            const captions = `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
            sendMediaURL(from, thumb, captions)
            await sendMediaURL(from, dl_link).catch(() => reply('error'))
            })            
            })
            } catch (err) {
            reply(mess.api)
            }
            break  
            case 'video':
            if (args.length === 0) return reply(`Kirim perintah *${prefix}video* _Judul lagu yang akan dicari_`)
            var srch = args.join('')
            aramas = await yts(srch);
            aramat = aramas.all 
            var mulaikah = aramat[0].url            
            try {
            ytv(mulaikah)
            .then((res) => {
            const { dl_link, thumb, title, filesizeF, filesize } = res
            axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
            .then(async (a) => {
            if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
            const captions = `*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
            sendMediaURL(from, thumb, captions)
            await sendMediaURL(from, dl_link).catch(() => reply('error'))
            })            
            })
            } catch (err) {
            reply(mess.api)
            }
            break
	        case 'ytsearch':
			if (args.length < 1) return reply('Tolong masukan query!')
			var srch = args.join('');
			try {
        	var aramas = await yts(srch);
   			} catch {
        	return await ALDI.sendMessage(from, 'Error!', MessageType.text, dload)
    		}
    		aramat = aramas.all 
    		var tbuff = await getBuffer(aramat[0].image)
    		var ytresult = '';
    		ytresult += '「 *YOUTUBE SEARCH* 」'
    		ytresult += '\n________________________\n\n'
   			aramas.all.map((video) => {
        	ytresult += '❏ Title: ' + video.title + '\n'
            ytresult += '❏ Link: ' + video.url + '\n'
            ytresult += '❏ Durasi: ' + video.timestamp + '\n'
            ytresult += '❏ Upload: ' + video.ago + '\n________________________\n\n'
    		});
    		ytresult += '◩ *SELF-BOT*'
    		await fakethumb(tbuff,ytresult)
			break
	        case 'setreply':
	        case 'setfake':
			if (!q) return fakegroup(mess.wrongFormat)
			fake = q
			fakegroup(`Succes Mengganti Conversation Fake : ${q}`)
			break
            case 'youtubedl':
            if (args.length < 1) return reply('Link Nya Mana?')
            if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.Iv)
            teks = args.join(' ')
            res = await y2mateA(teks).catch(e => {
            reply('_[ ! ] Error Gagal Dalam Memasuki Web Y2mate_')
            })
            result = `*Youtube Downloader*
            
💾 Title : ${res[0].judul}
🎥 Type : mp3/mp4
⏳ Durasi : ${res[0].size}`
            buttons = [{buttonId: `${prefix}buttons2 ${q}`,buttonText:{displayText: `▶️ Video`},type:1},{buttonId:`${prefix}buttons1 ${q}`,buttonText:{displayText:'🎵 Audio'},type:1}]
            fs.writeFileSync(`./ytmp.jpeg`, await getBuffer(res[0].thumb))
            imageMsg = ( await ALDI.prepareMessage(from, fs.readFileSync(`./ytmp.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
            buttonsMessage = {footerText:'Pilih satu format di bawah ini', imageMessage: imageMsg,
            contentText:`${result}`,buttons,headerType:4}
            prep = await ALDI.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
            ALDI.relayWAMessage(prep)
            fs.unlinkSync(`./ytmp.jpeg`)
            break
	        case 'setfakeimg':
            if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
		    delb = await ALDI.downloadMediaMessage(boij)
		    fs.writeFileSync(`./image/fake.jpeg`, delb)
			fakestatus('Sukses')
            } else {
            reply(`Kirim gambar dengan caption ${prefix}sethumb`)
          	}
			break	
	         case 'setthumb':
	         if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
            boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
			 delb = await ALDI.downloadMediaMessage(boij)
			 fs.writeFileSync(`./image/thumb.jpeg`, delb)
			 fakestatus('Sukses')
        	 } else {
            reply(`Kirim gambar dengan caption ${prefix}sethumb`)
          	 }
			 break	
	         case 'ytmp4':     
			 if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp4 [linkYt]*`)
			 let isLinks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
			 if (!isLinks2) return reply(mess.Iv)
			 try {
			 reply(mess.wait)
			 ytv(args[0])
		     .then((res) => {
			 const { dl_link, thumb, title, filesizeF, filesize } = res
			 axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
			 .then((a) => {
			 if (Number(filesize) >= 40000) return sendMediaURL(from, thumb, `*YTMP 4!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
			 const captionsYtmp4 = `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
			 sendMediaURL(from, thumb, captionsYtmp4)
			 sendMediaURL(from, dl_link).catch(() => reply(mess.api))
			 })		
			 })
			 } catch (err) {
			 reply(mess.api)
			 }
			 break
	         case 'emoji':
		  	 if (!q) return fakegroup('emojinya?')
			 qes = args.join(' ')
			 emoji.get(`${qes}`).then(emoji => {
			 teks = `${emoji.images[4].url}`
    		 sendStickerFromUrl(from,`${teks}`)	
    		 console.log(teks)
   			 })
    		 break
	         case 'ytmp3':
			 if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp3 [linkYt]*`)
			 let isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
			 if (!isLinks) return reply(mess.Iv)
		     try {
			 reply(mess.wait)
			 yta(args[0])
			 .then((res) => {
			 const { dl_link, thumb, title, filesizeF, filesize } = res
			 axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
			 .then((a) => {
		     if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
			 const captions = `*YTMP3*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
			 sendMediaURL(from, thumb, captions)
			 sendMediaURL(from, dl_link).catch(() => reply(mess.api))
			 })
			 })
			 } catch (err) {
			 reply(mess.api)
			 }
			 break
             case 'image':
             if (args.length < 1) return reply('Masukan teks!')
             const gimg = args.join('');
             reply(mess.wait)
             gis(gimg, async (error, result) => {
             n = result
             images = n[Math.floor(Math.random() * n.length)].url
             ALDI.sendMessage(from,{url:images},image,{quoted:mek})
             });
             break
 	         case 'tiktok':
 		     if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.Iv)
 		     if (!q) return fakegroup('Linknya?')
 		     reply(mess.wait)
		     hx.ttdownloader(`${args[0]}`)
    		 .then(result => {
    		 const { wm, nowm, audio } = result
    		 axios.get(`https://tinyurl.com/api-create.php?url=${nowm}`)
    		 .then(async (a) => {
    		 me = `*Link* : ${a.data}`
		     ALDI.sendMessage(from,{url:`${nowm}`},video,{mimetype:'video/mp4',quoted:mek,caption:me})
		     })
		     })
     		 .catch(e => console.log(e))
     	 	 break
             case 'tiktokaudio':
            
 		     if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.Iv)
 		     if (!q) return fakegroup('Linknya?')
 		     reply(mess.wait)
 		     hx.ttdownloader(`${args[0]}`)
    		 .then(result => {
    		 const { audio} = result
            sendMediaURL(from,audio,'')
    		 })
     		 .catch(e => console.log(e))
     		 break
            case 'brainly':
			 if (args.length < 1) return reply('Pertanyaan apa')
            brien = args.join(' ')
			 brainly(`${brien}`).then(res => {
			 teks = '❉───────────────────────❉\n'
			 for (let Y of res.data) {
			 teks += `\n*「 _SAINS BOT MENJAWAB_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉──────────────────❉\n`
			 }
			 ALDI.sendMessage(from, teks, text,{quoted:mek,detectLinks: false})            
            })            
			 break
            case 'ig':
            if (!isUrl(args[0]) && !args[0].includes('instagram.com')) return reply(mess.Iv)
            if (!q) return fakegroup('Linknya?')
            reply(mess.wait)
	         hx.igdl(args[0])
	         .then(async(result) => {
            for(let i of result.medias){
            if(i.url.includes('mp4')){
            let link = await getBuffer(i.url)
            ALDI.sendMessage(from,link,video,{quoted: mek,caption: `Type : ${i.type}`})
            } else {
            let link = await getBuffer(i.url)
            ALDI.sendMessage(from,link,image,{quoted: mek,caption: `Type : ${i.type}`})            
            }
            }
            });
	         break
            case 'igstalk':
            if (!q) return fakegroup('Usernamenya?')
            ig.fetchUser(`${args.join(' ')}`).then(Y => {
            console.log(`${args.join(' ')}`)
            ten = `${Y.profile_pic_url_hd}`
            teks = `*ID* : ${Y.profile_id}\n*Username* : ${args.join('')}\n*Full Name* : ${Y.full_name}\n*Bio* : ${Y.biography}\n*Followers* : ${Y.followers}\n*Following* : ${Y.following}\n*Private* : ${Y.is_private}\n*Verified* : ${Y.is_verified}\n\n*Link* : https://instagram.com/${args.join('')}`
            sendMediaURL(from,ten,teks) 
            })      
            break    
            case 'fb':
            if (!q) return reply('Linknya?')
            if (!isUrl(args[0]) && !args[0].includes('facebook.com')) return reply(mess.Iv)
            reply(mess.wait)
            te = args.join(' ')
            hx.fbdown(`${te}`)
            .then(G => {
            ten = `${G.HD}`
            sendMediaURL(from,ten,`*Link video_normal* : ${G.Normal_video}`)
            })
            break    
	         case 'term':
	         if (!isOwmer) return reply('hanya owner')
			 if (!q) return fakegroup(mess.wrongFormat)
			 exec(q, (err, stdout) => {
			 if (err) return fakegroup(`SELF-BOT:~ ${err}`)
			 if (stdout) {
			 fakegroup(stdout)
			 }
			 })
		     break 
            case 'join':
            try {
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
            hen = args[0]
            if (!q) return fakestatus('Masukan link group')
            var codeInvite = hen.split('https://chat.whatsapp.com/')[1]
            if (!codeInvite) return fakegroup ('pastikan link sudah benar!')
            var response = await ALDI.acceptInvite(codeInvite)
            fakestatus('SUKSES')
            } catch {
            fakegroup('LINK ERROR!')
            }
            break
            case 'twitter':
            if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return reply(mess.Iv)
            if (!q) return fakegroup('Linknya?')
            ten = args[0]
            var res = await hx.twitter(`${ten}`)
            ren = `${g.HD}`
            sendMediaURL(from,ren,'DONE')
            break
            case 'runtime':
            run = process.uptime() 
            teks = `${kyun(run)}`
            fakegroup(teks)
            break  
	         case 'speed':
	         case 'ping':
			 const timestamp = speed();
			 const latensi = speed() - timestamp
			 exec(`neofetch --stdout`, (error, stdout, stderr) => {
			 const child = stdout.toString('utf-8')
			 const teks = child.replace(/Memory:/, "Ram:")
			 const pingnya = `*${teks}Speed: ${latensi.toFixed(4)} Second*`
			 fakegroup(pingnya)
			 })
			 break  
            case 'totag':
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await ALDI.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await ALDI.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            contextInfo: { mentionedJid: mem },
            quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            ALDI.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await ALDI.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await ALDI.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            contextInfo: { mentionedJid: mem },
            quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            ALDI.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await ALDI.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await ALDI.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            mimetype : 'audio/mp4',
            ptt : true,
            contextInfo: { mentionedJid: mem },
            quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            ALDI.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
            }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await ALDI.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await ALDI.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            mimetype : 'video/mp4',
            contextInfo: { mentionedJid: mem },
            quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            ALDI.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
            } else{
            reply(`reply gambar/sticker/audio/video dengan caption ${prefix}totag`)
            }
            break
            case 'tomp4':
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            ger = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            owgi = await ALDI.downloadAndSaveMediaMessage(ger)
            webp2mp4File(owgi).then(res=>{
            sendMediaURL(from,res.result,'Done')
            })
            }else {
            reply('reply stiker')
            }
            fs.unlinkSync(owgi)
            break
            case 'tourl':
            if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
            boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            owgi = await ALDI.downloadMediaMessage(boij)
            res = await upload(owgi)
            reply(res)
            } else {
            reply('kirim/reply gambar/video')
            }
            break
//====================[ MAKER MENU ]===========================\\
            case 'imgtourl':
            reply(mess.wait)
            var encmedia  = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            var jnckk = await  ALDI.downloadAndSaveMediaMessage(encmedia)
            var imgbb = require('imgbb-uploader')
            imgbb('3b8594f4cb11895f4084291bc655e510', jnckk)
            .then(data => {
            var caps = `
╭─「 IMGBB TO URL 」
│
├• ID : ${data.id}
├• MimeType : ${data.image.mime}
├• Extension : ${data.image.extension}
│
├• URL : ${data.display_url}
╰─────────────────────`
            ibb = fs.readFileSync(jnckk)
            ALDI.sendMessage(from, ibb, image, { quoted: freply, caption: caps })
            })
            .catch(err => {
            throw err 
            })
            break
            case 'inspect':
            try {
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
            if (!q) return reply('masukan link wa')
            cos = args[0]
            var net = cos.split('https://chat.whatsapp.com/')[1]
            if (!net) return reply('pastikan itu link https://whatsapp.com/')
            jids = []
            let { id, owner, subject, subjectOwner, desc, descId, participants, size, descOwner, descTime, creation} = await ALDI.query({ 
            json: ["query", "invite",net],
            expect200:true })
            let par = `*Id* : ${id}
${owner ? `*Owner* : @${owner.split('@')[0]}` : '*Owner* : -'}
*Nama Gc* : ${subject}
*Gc dibuat Tanggal* : ${formatDate(creation * 1000)}
*Jumlah Member* : ${size}
${desc ? `*Desc* : ${desc}` : '*Desc* : tidak ada'}
*Id desc* : ${descId}
${descOwner ? `*Desc diubah oleh* : @${descOwner.split('@')[0]}` : '*Desc diubah oleh* : -'}\n*Tanggal* : ${descTime ? `${formatDate(descTime * 1000)}` : '-'}\n\n*Kontak yang tersimpan*\n`
           for ( let y of participants) {
            par += `> @${y.id.split('@')[0]}\n*Admin* : ${y.isAdmin ? 'Ya' : 'Tidak'}\n`
            jids.push(`${y.id.replace(/@c.us/g,'@s.whatsapp.net')}`)
            }
            jids.push(`${owner ? `${owner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
            jids.push(`${descOwner ? `${descOwner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
            ALDI.sendMessage(from,par,text,{quoted:mek,contextInfo:{mentionedJid:jids}})
            } catch {
            reply('Link error')
            }
            break
			break
			case 'nhentaipdf':
		    
			if (args.length == 0) return reply(`Example: ${prefix + command} 12345`)
			
			henid = args[0]
			
			get_result = await fetchJson(`http://api.lolhuman.xyz/api/nhentaipdf/${henid}?apikey=${LolKey}`)
			
			get_result = get_result.result
			
			ini_buffer = await getBuffer(get_result)
			
			ALDI.sendMessage(from, ini_buffer, document, { quoted: mek, mimetype: Mimetype.pdf, filename: `${henid}.pdf` })
			
			break
            
			case 'nhentaisearch':
           
		    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
			
		    query = args.join(" ")
			
		    get_result = await fetchJson(`http://api.lolhuman.xyz/api/nhentaisearch?apikey=${LolKey}&query=${query}`)
			
		    get_result = get_result.result
			
		    ini_txt = "Result : \n"
			
		    for (var x of get_result) {
			
		    ini_txt += `Id : ${x.id}\n`
			
		    ini_txt += `Title English : ${x.title_english}\n`
			
		    ini_txt += `Title Japanese : ${x.title_japanese}\n`
			
		    ini_txt += `Native : ${x.title_native}\n`
			
		    ini_txt += `Upload : ${x.date_upload}\n`
			
		    ini_txt += `Page : ${x.page}\n`
			
		    ini_txt += `Favourite : ${x.favourite}\n\n`
			
		    }
			
		    reply(ini_txt)
			
		    break
			// Random Image //

			case 'art':

			case 'bts':
			
			case 'exo':
			
			case 'elf':
		
			case 'loli':
			case 'waifu':
			
			case 'neko':
					
			case 'shota':
					
			case 'sagiri':
			
			case 'shinobu':
			
			case 'megumin':
			
			case 'wallnime':		
			buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/${command}?apikey=${LolKey}`)
			//ALDI.sendMessage(from, buffer, image, { quoted: mek})
			ALDI.sendMessage(from, buffer, image, { thumbnail: cewe, caption: `*nih kak*`, quoted: ftroli})
			break

			case 'chiisaihentai':
			case 'trap':
			case 'blowjob':
			case 'yaoi':
			case 'ecchi':
			case 'hentai':

			case 'ahegao':

			case 'hololewd':
			case 'sideoppai':
			case 'animefeets':

			case 'animebooty':

			case 'animethighss':
			case 'hentaiparadise':

			case 'animearmpits':
			case 'hentaifemdom':
			case 'lewdanimegirls':
			case 'biganimetiddies':
			case 'animebellybutton':
			case 'hentai4everyone':
			ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=${LolKey}`)
			ALDI.sendMessage(from, ini_buffer, image, { thumbnail: cewe, caption: `*nih kak*`, quoted: ftroli})
			break
			case 'tahta': case 'hartatahta':
			if (args.length == 0) return reply(`contoh: ${prefix + command} NAY`)
            teks = args.join(" ")
            ini_buf = await getBuffer(`https://zuxyapi.herokuapp.com/api/maker/harta-tahta?apikey=${ZuxyKey}&text=${teks}`)
            ALDI.sendMessage(from, ini_buf, image, { thumbnail: cewe, caption: `*nih kak jangan lupa follow ig @zuxyganz_*`, quoted: ftroli})
            break
            
            case 'nulis': case 'nulisbuku':
            
            if (args.length == 0) return reply(`contoh: ${prefix + command} NAY`)
            teks = args.join(" ")
            ini_buf = await getBuffer(`https://zuxyapi.herokuapp.com/api/maker/nulis?apikey=${ZuxyKey}&text=${teks}`)
            
            ALDI.sendMessage(from, ini_buf, image, { thumbnail: cewe, caption: `*nih kak jangan lupa follow ig @zuxyganz_*`, quoted: ftroli})
            break
           
           
           

default:
	    if (messagesCC.match('https://chat.whatsapp.com')) {
        if (!isGroup) return
	    if (!isAntiLink) return
		if (isGroupAdmins) return reply('*_Kerana Kamu Admin bot Tidak Akan Di Kick*')
		ALDI.updatePresence(from, Presence.composing)
		if (messagesCC.includes("#izinmin")) return reply("izin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`*「 Link Group Terdeteksi 」${sender.split("@")[0]} Bot Akan Kick Kamu Bye Bye*`)
		setTimeout( () => {
		ALDI.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 3000)
		console.log(color('LINKGROUP TERDETEKSI'))
		}
	    if (messagesCC.match('jasa','sewa','akun','harga','jual','open')) {
        if (!isGroup) return
	    if (!isjasa) return
		if (isGroupAdmins) return reply('*_Kerana Kamu Admin bot Tidak Akan Di Kick*')
		ALDI.updatePresence(from, Presence.composing)
		if (messagesCC.includes("#izinmin")) return reply("izin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`*「 jualan:v 」${sender.split("@")[0]} Bot Akan Kick Kamu Bye Bye*`)
		setTimeout( () => {
		ALDI.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 3000)
		console.log(color('jualam terdeteksi'))
		}		

if (chats.startsWith('>')){
			
if(!mek.key.fromMe && !isOwner) return
				
console.log(color('[EVAL]'), color(moment(mek.messageTimestamp * 1000).format('HH:mm:ss'), 'yellow'), color(`Eval V2 brooo`))
				
try{
reply(require('util').format(await eval(`;(async () => { ${chats.slice(2)} })()`)))
}catch(err){
	e = String(err)
reply(e)
	
}

}

if (budy.startsWith('x')){

try {
if (!mek.key.fromMe && !isOwner) return reply('```khusus owner bro```')

return ALDI.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})

} 
catch(err) {
e = String(err)

reply(e)

}

}  

        
if (budy.startsWith("$ ")){
if (!mek.key.fromMe && !isOwner) return reply('```khusus owner bro```')
           	console.log(color('[EXEC]'), color(moment(mek.messageTimestamp * 1000).format('HH:mm:ss'), 'yellow'), color(`Dari owner ni`))
           	exec(chats.slice(2), (err, stdout) => {
           	if (err) return reply(`${err}`)
           	if (stdout) reply(`${stdout}`)
           	})
            }
if (budy.startsWith('=>')){
if (!isOwner && !mek.key.fromMe) return reply('khusus owner bro')
var konsol = budy.slice(3)
Return = (sul) => {
var sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined){
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(util.format(eval(`;(async () => { ${konsol} })()`)))
console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', time, color(">", "green"), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
} catch(e){
  reply(String(e))
}
}  

	}
if (isGroup && budy != undefined) {
	} else {
	console.log(color('[TEXT]', 'red'), 'SELF-MODE', color(sender.split('@')[0]))
	}		
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero") && !e.includes("jid")) {
	console.log('Message : %s', color(e, 'green'))
        }
	// console.log(e)
	}
}


	
    
