let hls;

fetch("canais.json")
.then(r => r.json())
.then(lista => {

const video = document.getElementById("video")
const container = document.getElementById("lista")

lista.forEach(c => {

const btn = document.createElement("button")
btn.innerText = c.nome

btn.onclick = () => {

if(Hls.isSupported()){

if(hls){hls.destroy()}

hls = new Hls()

hls.loadSource("https://listaiptv38.rafael2019rg.workers.dev/?url=" + encodeURIComponent(c.url))
hls.attachMedia(video)

}

}

container.appendChild(btn)

})

})
