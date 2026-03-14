let hls;

const proxy = "https://player-teste-1.rafael2019rg.workers.dev/?url=";

function play(url){

const video = document.getElementById("video");

if(hls){
hls.destroy();
}

if(Hls.isSupported()){

hls = new Hls();

hls.loadSource(proxy + encodeURIComponent(url));
hls.attachMedia(video);

}else{

video.src = proxy + encodeURIComponent(url);

}

}
