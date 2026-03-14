fetch("canais.json")
.then(r=>r.json())
.then(canais=>{

let lista = document.getElementById("lista")

canais.forEach(c=>{

let btn = document.createElement("button")
btn.innerText = c.name

btn.onclick = ()=>{

let video = document.getElementById("video")

if(Hls.isSupported()){

let hls = new Hls()
hls.loadSource(c.url)
hls.attachMedia(video)

}else{

video.src = c.url

}

}

lista.appendChild(btn)

})

})