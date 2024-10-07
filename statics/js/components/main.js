document.querySelector(".watch-btn").addEventListener("click", ()=> {
 

    const videoElement = document.getElementById("video");

   
    videoElement.classList.add("fullscreen-video");

    videoElement.addEventListener("click", function() {
        videoElement.classList.remove("fullscreen-video");
    });
});
