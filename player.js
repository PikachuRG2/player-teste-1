document.addEventListener("DOMContentLoaded", () => {

let hls;
const proxy = "/api/proxy?url=";

const video = document.getElementById("video");
const lista = document.getElementById("lista");

fetch("canais.json")
.then(r => r.json())
.then(canais => {

canais.forEach(c => {

const btn = document.createElement("button");
btn.innerText = c.nome;

btn.onclick = () => {

if(hls){
hls.destroy();
}

if(Hls.isSupported()){

hls = new Hls();
hls.loadSource(proxy + encodeURIComponent(c.url));
hls.attachMedia(video);

hls.on(Hls.Events.MANIFEST_PARSED, () => {
video.play();
});

}else{

video.src = proxy + encodeURIComponent(c.url);

}

};

lista.appendChild(btn);

});

})
.catch(err => console.log("Erro canais:", err));

});
