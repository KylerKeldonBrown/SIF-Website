document.addEventListener("DOMContentLoaded", function () {
    const videoContainer = document.querySelector(".video-container");
    const videoElement = document.querySelector(".back-video");
    const prevButton = document.querySelector(".prev-video");
    const nextButton = document.querySelector(".next-video");


    const videos = [
        "../videos/video1.mp4",
        "../videos/video2.mp4",
        "../videos/video3.mp4"
    ];
    
    let currentIndex = 0;
    let videoInterval;

    function playVideo(index) {
        videoElement.style.opacity = 0;

        setTimeout(() => {
            videoElement.src = videos[index];
            videoElement.play();
            videoElement.style.opacity = 1;
        }, 400);
    }

    function nextVideo() {
        currentIndex = (currentIndex + 1) % videos.length;
        playVideo(currentIndex);
        resetTimer();
    }

    function prevVideo() {
        currentIndex = (currentIndex - 1 + videos.length) % videos.length;
        playVideo(currentIndex);
        resetTimer();
    }

    function resetTimer() {
        clearInterval(videoInterval);
        videoInterval = setInterval(nextVideo, 10000); 
    }

    
    videoElement.src = videos[currentIndex];
    videoElement.play();
    videoElement.style.opacity = 1;
    resetTimer();

   
    nextButton.addEventListener("click", nextVideo);
    prevButton.addEventListener("click", prevVideo);
});


const galleryImages = [
    "../images/images.jpg",
    "../images/hq720.jpg",
    "../images/adsc.jpg",
    "../gallery/img4.jpg",
    "../gallery/img5.jpg",
    "../gallery/img5.jpg","../gallery/img5.jpg",
    "../gallery/img5.jpg",
    "../gallery/img5.jpg",
    "../gallery/img5.jpg"
   
];

const galleryContainer = document.getElementById("gallery");

galleryImages.forEach(imageSrc => {
    const div = document.createElement("div");
    div.classList.add("gallery-item");

    const img = document.createElement("img");
    img.src = imageSrc;
    img.alt = "Gallery Image";

    div.appendChild(img);
    galleryContainer.appendChild(div);
});


