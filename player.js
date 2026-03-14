let hls;

function play(url){
  const video = document.getElementById("video");
  const proxy = "https://listaiptv38.rafael2019rg.workers.dev/?url=";

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
