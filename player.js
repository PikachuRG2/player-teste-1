document.addEventListener("DOMContentLoaded", function () {

const lista = document.getElementById("lista");
const video = document.getElementById("video");

if(!lista){
console.error("DIV lista não encontrada");
return;
}

let hls;

fetch("canais.json")
.then(res => res.json())
.then(canais => {

console.log("Canais carregados:", canais);

canais.forEach(canal => {

const btn = document.createElement("button");
btn.innerText = canal.nome;

btn.onclick = () => {

if(hls){
hls.destroy();
}

const url = canal.url;

if(Hls.isSupported()){

hls = new Hls();
hls.loadSource(url);
hls.attachMedia(video);

}else{

video.src = url;

}

};

lista.appendChild(btn);

});

})
.catch(err => {
console.error("Erro ao carregar canais:", err);
});

});
