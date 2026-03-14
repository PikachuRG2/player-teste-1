document.addEventListener("DOMContentLoaded", () => {

const player = videojs("video")
const lista = document.getElementById("lista")

fetch("canais.json")
.then(r => r.json())
.then(canais => {

canais.forEach(c => {

const btn = document.createElement("button")
btn.innerText = c.nome

btn.onclick = () => {

player.src({
src: c.url,
type: "application/x-mpegURL"
})

player.play()

}

lista.appendChild(btn)

})

})

})
