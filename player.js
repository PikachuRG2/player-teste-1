document.addEventListener("DOMContentLoaded", () => {

const video = document.getElementById("video")
const lista = document.getElementById("lista")

let hls

fetch("canais.json")
.then(r => r.json())
.then(canais => {

canais.forEach(c => {

const btn = document.createElement("button")
btn.innerText = c.nome

btn.onclick = () => {

if(hls){
hls.destroy()
}

if(Hls.isSupported()){

hls = new Hls()
hls.loadSource(c.url)
hls.attachMedia(video)

hls.on(Hls.Events.MANIFEST_PARSED, () => {
video.play()
})

}else{

video.src = c.url

}

}

lista.appendChild(btn)

})

})

})
