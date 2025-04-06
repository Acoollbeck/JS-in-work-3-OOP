
import MainSlider from "./modules/slider/slider-main";
import VideoPlayer from "./modules/videoPlayer";

window.addEventListener('DOMContentLoaded', () => {
    const slider = new MainSlider({
        page: '.page', 
        btns: '.next'
    })
    const videoPlayer = new VideoPlayer('.play', '.overlay')

    slider.render()
    videoPlayer.render()
})