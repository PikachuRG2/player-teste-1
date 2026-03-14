let hls;
const proxy = "https://listaiptv38.rafael2019rg.workers.dev/?url=";

function play(url){

const video = document.getElementById("video");

if(hls){
hls.destroy();
}

if(Hls.isSupported()){

hls = new Hls();

hls.loadSource(proxy + encodeURIComponent(url));
hls.attachMedia(video);

hls.on(Hls.Events.MANIFEST_PARSED,function(){
video.play();
});

}else{

video.src = proxy + encodeURIComponent(url);

}

}
