let hls

fetch("canais.json")
.then(r=>r.json())
.then(canais=>{

const lista = document.getElementById("canais")
const video = document.getElementById("video")

canais.forEach(c=>{

let btn = document.createElement("button")
btn.innerText = c.name

btn.onclick=()=>{

if(hls){
hls.destroy()
}

if(Hls.isSupported()){

hls = new Hls({
liveSyncDurationCount:3
})

hls.loadSource(c.url)
hls.attachMedia(video)

}else{

video.src=c.url

}

}

lista.appendChild(btn)

})

})
