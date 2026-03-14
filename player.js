let hls;

const proxy = "https://listaiptv38.rafael2019rg.workers.dev/?url=";

fetch("canais.json")
.then(r => r.json())
.then(lista => {

const video = document.getElementById("video")
const container = document.getElementById("canais")

lista.forEach(canal => {

let btn = document.createElement("button")
btn.innerText = canal.name

btn.onclick = () => {

if(hls){
hls.destroy()
}

if(Hls.isSupported()){

hls = new Hls()
hls.loadSource(proxy + encodeURIComponent(canal.url))
hls.attachMedia(video)

}else{

video.src = proxy + encodeURIComponent(canal.url)

}

}

container.appendChild(btn)

})

})
