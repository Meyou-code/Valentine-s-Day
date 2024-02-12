document.addEventListener("DOMContentLoaded", function() {
    var yesButton = document.querySelector(".yes");
    var noButton = document.querySelector(".no");
    var chipiVideo = document.getElementById("chippi-video");
    var happyVideo = document.getElementById("happy-video");
    var susImage = document.getElementById("image");
    var mortImage = document.getElementById("mort");
    var image1 = document.getElementById("image1");
    var shockedSound = document.getElementById("Shocked-sound");
    var onlyloveSound = document.getElementById("onlylove");
    var centerButtons = document.querySelector(".center-buttons");
    var centerContent = document.querySelector(".center-content");
    var hiddenText = document.getElementById("hidden-text");

    yesButton.addEventListener("click", function() {
        chipiVideo.style.display = "block";
        happyVideo.style.display = "block";
        chipiVideo.controls = false;
        happyVideo.controls = false;
        chipiVideo.play();
        happyVideo.play();

        setTimeout(function() {
            chipiVideo.style.display = "none";
            happyVideo.style.display = "none";
            chipiVideo.pause();
            happyVideo.pause();
            image1.style.display = "block";
            onlyloveSound.play();

            setTimeout(function() {
                chipiVideo.style.display = "none";
                happyVideo.style.display = "none";
                susImage.style.display = "none";
                image1.style.display = "none";
                centerButtons.style.display = "none";
                centerContent.style.display = "none";
                mortImage.style.display = "block";
                
            }, 14000);
        }, 3000);
    });

    noButton.addEventListener("click", function() {
        shockedSound.play();
        susImage.style.display = "block";

        setTimeout(function() {
            susImage.style.display = "none";
        }, 2000);
    });
});
