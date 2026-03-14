fetch("canais.json")
.then(res=>res.json())
.then(lista=>{

const video = document.getElementById("video")
const canais = document.getElementById("lista")

lista.forEach(canal=>{

let btn = document.createElement("button")
btn.innerText = canal.name

btn.onclick = ()=>{

if(Hls.isSupported()){

const hls = new Hls()
hls.loadSource(canal.url)
hls.attachMedia(video)

}else{

video.src = canal.url

}

}

canais.appendChild(btn)

})

})
