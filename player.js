document.addEventListener("DOMContentLoaded", function(){

let hls;
const proxy = "https://corsproxy.io/?url=";

fetch("canais.json")
.then(r => r.json())
.then(lista => {

const video = document.getElementById("video");
const container = document.getElementById("lista");

lista.forEach(c => {

let btn = document.createElement("button");
btn.innerText = c.nome;

btn.onclick = function(){

if(hls){
hls.destroy();
}

if(Hls.isSupported()){

hls = new Hls();

hls.loadSource(proxy + encodeURIComponent(c.url));
hls.attachMedia(video);

hls.on(Hls.Events.MANIFEST_PARSED,function(){
video.play();
});

}else{

video.src = proxy + encodeURIComponent(c.url);

}

};

container.appendChild(btn);

});

});

});
