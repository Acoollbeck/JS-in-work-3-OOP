import Slider from "./modules/slider";
import VideoPlayer from "./modules/videoPlayer";

window.addEventListener('DOMContentLoaded', () => {
    const slider = new Slider('.page', '.next')
    const videoPlayer = new VideoPlayer('.play', '.overlay')

    slider.render()
    videoPlayer.render()
})