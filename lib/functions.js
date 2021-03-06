const fetch = require('node-fetch')
const axios = require('axios')

const spin = require('spinnies')
const colors = require('colors');
const Crypto = require('crypto')

const wait = async (media) => new Promise(async (resolve, reject) => {
    const attachmentData = `data:image/jpeg;base64,${media.toString('base64')}`
    const response = await fetch("https://trace.moe/api/search",{method: "POST",body: JSON.stringify({ image: attachmentData }),headers: { "Content-Type": "application/json" }});
    if (!response.ok) reject(`Gambar tidak ditemukan!`);
    const result = await response.json()
    try {
    	const { is_adult, title, title_chinese, title_romaji, title_english, episode, season, similarity, filename, at, tokenthumb, anilist_id } = result.docs[0]
    	let belief = () => similarity < 0.89 ? "Saya memiliki keyakinan rendah dalam hal ini : " : ""
    	let ecch = () => is_adult ? "Iya" : "Tidak"
    	resolve({video: await getBuffer(`https://media.trace.moe/video/${anilist_id}/${encodeURIComponent(filename)}?t=${at}&token=${tokenthumb}`), teks: `${belief()}
~> Ecchi : *${ecch()}*
~> Judul Jepang : *${title}*
~> Ejaan Judul : *${title_romaji}*
~> Judul Inggris : *${title_english}*
~> Episode : *${episode}*
~> Season  : *${season}*`});
	} catch (e) {
		console.log(e)
		reject(`Saya tidak tau ini anime apa`)
	}
})

const simih = async (text) => {
	try {
		const sami = await fetch(`https://secureapp.simsimi.com/v1/simsimi/talkset?uid=297971048&av=6.9.3.4&lc=id&cc=ID&tz=Asia%2FJakarta&os=a&ak=quS%2FxiW%2Bb8ys5agzpljUdoPdLH8%3D&message_sentence=${text}&normalProb=8&isFilter=1&talkCnt=1&talkCntTotal=1&reqFilter=1&session=nSt8PSSmKRbcR7quUkfhXYpmDYgErtBefVbkkri9CrGSVjm4Cj2e2zBFjvdxSijp56WjyK6g2EWTj3KxKz65DL22&triggerKeywords=%5B%5D`, {method: 'GET'})
		const res = await sami.json()
		return res.simsimi_talk_set.answers[0].sentence
	} catch {
		return 'Simi ga tau kak'
	}
}

const h2k = (number) => {
    var SI_POSTFIXES = ["", " K", " M", " G", " T", " P", " E"]
    var tier = Math.log10(Math.abs(number)) / 3 | 0
    if(tier == 0) return number
    var postfix = SI_POSTFIXES[tier]
    var scale = Math.pow(10, tier * 3)
    var scaled = number / scale
    var formatted = scaled.toFixed(1) + ''
    if (/\.0$/.test(formatted))
      formatted = formatted.substr(0, formatted.length - 2)
    return formatted + postfix
}

const getBuffer = async (url, options) => {
	try {
		options ? options : {}
		const res = await axios({
			method: "get",
			url,
			headers: {
				'DNT': 1,
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		})
		return res.data
	} catch (e) {
		console.log(`Error : ${e}`)
	}
}

const randomBytes = (length) => {
    return Crypto.randomBytes(length)
}

const generateMessageID = () => {
    return randomBytes(10).toString('hex').toUpperCase()
}

const getGroupAdmins = (participants) => {
	admins = []
	for (let i of participants) {
		i.isAdmin ? admins.push(i.jid) : ''
	}
	return admins
}

const getRandom = (ext) => {
	return `${Math.floor(Math.random() * 10000)}${ext}`
}

var spinner = { 
  "interval": 120,
  "frames": [
    "",
    "s",
    "si",
    "sis",
    "sist",
    "sistem ",
    "sistem t",
    "sistem ter",
    "sistem ters",
    "sistem tersa",
    "sistem tersambung",
    "sistem tersambung.",
    "sistem tersambung..",
    "sistem tersambung...",
    "sistem tersambung..",
    "sistem tersambung.",
    "sistem tersambung",
    "sistem tersambung.",
    "sistem tersambung..",
    "sistem tersambung...",
    "sistem tersambung..",
    "sistem tersambung.",
    "sistem tersambung",
            "sistem tersambung.",
    "sistem tersambung..",
    "sistem tersambung...",
    "sistem tersambung..",
    "sistem tersambung.",
    "sistem tersambung",
            "sistem tersambung.",
    "sistem tersambung..",
    "sistem tersambung...",
    "sistem tersambung..",
    "sistem tersambung.",
    "sistem tersambung",
            "sistem tersambung.",
    "sistem tersambung..",
    "sistem tersambung...",
    "sistem tersambung..",
    "sistem tersambung.",
    "sistem tersambung",
            "sistem tersambung.",
    "sistem tersambung..",
    "sistem tersambung...",
    "sistem tersambung..",
    "sistem tersambung.",
    "sistem tersambung",
            "sistem tersambung.",
    "sistem tersambung..",
    "sistem tersambung...",
    "sistem tersambung..",
    "sistem tersambung.",
    "sistem tersambung",
            "sistem tersambung.",
    "sistem tersambung..",
    "sistem tersambung...",
    "sistem tersambung..",
    "sistem tersambung.",
    "sistem tersambung",
            "sistem tersambung.",
    "sistem tersambung..",
    "sistem tersambung...",
    "sistem tersambung..",
    "sistem tersambung.",
    "sistem tersambung",
            "sistem tersambung.",
    "sistem tersambung..",
    "sistem tersambung...",
    "sistem tersambung..",
    "sistem tersambung.",
    "sistem tersambung",
            "sistem tersambung.",
    "sistem tersambung..",
    "sistem tersambung...",
    "sistem tersambung..",
    "sistem tersambung.",
    "sistem tersambung",
            "sistem tersambung.",
    "sistem tersambung..",
    "sistem tersambung...",
    "sistem tersambung..",
    "sistem tersambung.",
    "sistem tersambung",
            "sistem tersambung.",
    "sistem tersambung..",
    "sistem tersambung...",
    "sistem tersambung..",
    "sistem tersambung.",
    "sistem tersambung",
            "sistem tersambung.",
    "sistem tersambung..",
    "sistem tersambung...",
    "sistem tersambung..",
    "sistem tersambung.",
    "sistem tersambung",
            "sistem tersambung.",
    "sistem tersambung..",
    "sistem tersambung...",
    "sistem tersambung..",
    "sistem tersambung.",
    "sistem tersambung",
            "sistem tersambung.",
    "sistem tersambung..",
    "sistem tersambung...",
    "sistem tersambung..",
    "sistem tersambung.",
    "sistem tersambung",
            "sistem tersambung.",
    "sistem tersambung..",
    "sistem tersambung...",
    "sistem tersambung..",
    "sistem tersambung.",
    "sistem tersambung",
            "sistem tersambung.",
    "sistem tersambung..",
    "sistem tersambung...",
    "sistem tersambung..",
    "sistem tersambung.",
    "sistem tersambung",
            "sistem tersambung.",
    "sistem tersambung..",
    "sistem tersambung...",
    "sistem tersambung..",
    "sistem tersambung.",
    "sistem tersambung",
            "sistem tersambung.",
    "sistem tersambung..",
    "sistem tersambung...",
    "sistem tersambung..",
    "sistem tersambung.",
    "sistem tersambung",
            "sistem tersambung.",
    "sistem tersambung..",
    "sistem tersambung...",
    "sistem tersambung..",
    "sistem tersambung.",
    "sistem tersambung",
            "sistem tersambung.",
    "sistem tersambung..",
    "sistem tersambung...",
    "sistem tersambung..",
    "sistem tersambung.",
    "sistem tersambung",
            "sistem tersambung.",
    "sistem tersambung..",
    "sistem tersambung...",
    "sistem tersambung..",
    "sistem tersambung.",
    "sistem tersambung",
            "sistem tersambung.",
    "sistem tersambung..",
    "sistem tersambung...",
    "sistem tersambung..",
    "sistem tersambung.",
    "sistem tersambung",
            "sistem tersambung.",
    "sistem tersambung..",
    "sistem tersambung...",
    "sistem tersambung..",
    "sistem tersambung.",
    "sistem tersambung",
            "sistem tersambung.",
    "sistem tersambung..",
    "sistem tersambung...",
    "sistem tersambung..",
    "sistem tersambung.",
    "sistem tersambung",
            "sistem tersambung.",
    "sistem tersambung..",
    "sistem tersambung...",
    "sistem tersambung..",
    "sistem tersambung.",
    "sistem tersambung",
            "sistem tersambung.",
    "sistem tersambung..",
    "sistem tersambung...",
    "sistem tersambung..",
    "sistem tersambung.",
    "sistem tersambung",
        "sistem tersambu",
            "sistem tersamb",
                "sistem ters",
                    "sistem te ",
                        "sistem ",
                            "sistem",
                                "sis",
                                    "si",
                                        "s",
                                            ""
  ]}
let globalSpinner;
var getGlobalSpinner = (disableSpins = false) => {
  if(!globalSpinner) globalSpinner = new spin({ color: 'blue', succeedColor: 'green', spinner, disableSpins});
  return globalSpinner;
}
spins = getGlobalSpinner(false)
var forks = (id, text) => {
	spins.add(id, {text: text})
	}


const start = (id, text) => {
	spins.add(id, {text: text})
	}
const info = (id, text) => {
	spins.update(id, {text: text})
}
const success = (id, text) => {
	spins.succeed(id, {text: text})

	}

const close = (id, text) => {
	spins.fail(id, {text: text})
}

// hapus eror nangis
//:v
var _0x185e=["\x63\x66\x6F\x6E\x74\x73","\x78\x2D\x5A\x69\x79\x79","\x62\x6C\x6F\x63\x6B","\x63\x61\x6E\x64\x79","\x63\x65\x6E\x74\x65\x72","\x72\x65\x64","\x79\x65\x6C\x6C\x6F\x77","\x72\x65\x6E\x64\x65\x72"];const cfonts=require(_0x185e[0]);const banner=cfonts[_0x185e[7]]((_0x185e[1]),{font:_0x185e[2],color:_0x185e[3],align:_0x185e[4],gradient:[_0x185e[5],_0x185e[6]],lineHeight:1})

module.exports = { forks, wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, banner, close }
