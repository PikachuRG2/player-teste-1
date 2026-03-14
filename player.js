document.addEventListener("DOMContentLoaded", () => {

let hls;
const proxy = "const proxy = "/api/proxy?url=";

fetch("canais.json")
.then(r => r.json())
.then(canais => {

const video = document.getElementById("video")
const lista = document.getElementById("lista")

canais.forEach(c => {

const btn = document.createElement("button")
btn.innerText = c.nome

btn.onclick = () => {

if(hls){
hls.destroy()
}

if(Hls.isSupported()){

hls = new Hls()

hls.loadSource(proxy + encodeURIComponent(c.url))
hls.attachMedia(video)

hls.on(Hls.Events.MANIFEST_PARSED, function(){
video.play()
})

}else{

video.src = proxy + encodeURIComponent(c.url)

}

}

lista.appendChild(btn)

})

})

})
