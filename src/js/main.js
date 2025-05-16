
import MainSlider from "./modules/slider/slider-main";
import MiniSlider from "./modules/slider/slider-mini";
import VideoPlayer from "./modules/videoPlayer";
import Defference from "./modules/defference";
import Forms from "./modules/forms";

window.addEventListener('DOMContentLoaded', () => {
    const slider = new MainSlider({
        page: '.page', 
        btns: '.next',
    })
    
    const secondSlider = new MainSlider({
        page: '.moduleapp',
        btns: '.next',
        btnsPrev: '.prevmodule'
    })

    const videoPlayer = new VideoPlayer('.page .play', '.overlay')

    const secondVideoPlayer = new VideoPlayer('.moduleapp .play', '.overlay')

    const showUpSlider = new MiniSlider({
        page: '.showup__content-slider',
        next: '.showup__next',
        prev: '.showup__prev',
    })

    const modulesSlider = new MiniSlider({
        page: '.modules__content-slider',
        config: {
            autoplay: true,
            interval: 5000
        }
    })

    const feedSlider = new MiniSlider({
        page: '.feed__slider',
        next: '.feed__slider .slick-next',
        prev: '.feed__slider .slick-prev'
    })

    const defference = new Defference('.officerold', '.officernew', '.officer__card-item')

    const forms = new Forms('.form')


    slider.render()
    secondSlider.render()
    videoPlayer.render()
    secondVideoPlayer.render()
    showUpSlider.render()
    modulesSlider.render()
    feedSlider.render()
    defference.render()
    forms.render()
})