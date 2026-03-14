let hls;

fetch("canais.json")
.then(r => r.json())
.then(lista => {

const video = document.getElementById("video")
const canais = document.getElementById("lista")

lista.forEach(c => {

let btn = document.createElement("button")
btn.innerText = c.name

btn.onclick = () => {

if(hls){
hls.destroy()
}

if (Hls.isSupported()) {

hls = new Hls()
hls.loadSource("https://listaiptv38.rafael2019rg.workers.dev/?url=" + c.url)
hls.attachMedia(video)

} else {

video.src = c.url

}

}

canais.appendChild(btn)

})

})
