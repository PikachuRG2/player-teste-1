fetch('https://corsproxy.io/?key=6c262b95&url=https://player-teste-1.vercel.app/canais.json')
.then(r => r.json())
.then(lista => {

const video = document.getElementById("video")
const canais = document.getElementById("canais")

lista.forEach(c => {

let btn = document.createElement("button")
btn.innerText = c.name

btn.onclick = () => {

if (Hls.isSupported()) {

let hls = new Hls()

hls.loadSource("https://corsproxy.io/?url=" + c.url)

hls.attachMedia(video)

} else {

video.src = c.url

}

}

canais.appendChild(btn)

})

})
