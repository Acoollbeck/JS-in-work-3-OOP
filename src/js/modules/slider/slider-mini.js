import Slider from "./slider";

export default class MiniSlider extends Slider {
    constructor (options) {
        super(options)
    }

    init() {
        
        this.page.style.cssText = `
            display: flex;
            flex-wrap: wrap;
            overflow: hidden;
            align-items: flex-start;
        `   
    }

    bindAutoplay() {
        if(this.config.autoplay) {
            this.page.addEventListener('mouseenter', () => this.stopAutoplay())
            this.page.addEventListener('mouseleave', () => this.startAutoplay())
        }
    }

    startAutoplay() {
        if(this.config.autoplay === true) {
            this.interval = setInterval(() => {
                this.changeSlide('next')
            }, this.config.interval)
        }
    }

    stopAutoplay() {
        clearInterval(this.interval)
    }

    bindTriggers() {
        if(this.next) {
            this.next.addEventListener('click', () =>{
                this.changeSlide('next')
            }) 
        }
        if(this.prev) {
            this.prev.addEventListener('click', () =>{
                this.changeSlide('prev')
            }) 
        }
    }

    changeSlide(dir) {
        this.initAnimations(dir)
        if(this.slides[1].nodeName === 'BUTTON' || this.slides[this.slides.length - 1].nodeName === 'BUTTON') {
            this.initButtonInSlide(dir)
        }

        if(dir === 'next') {
            this.page.appendChild(this.slides[0])
            this.updateSlides()
            this.initActiveSlide()
        } else if (dir === 'prev') {
            let lastSlide = this.slides[this.slides.length - 1]
            this.page.insertBefore(lastSlide, this.slides[0])
            this.updateSlides()
            this.initActiveSlide()
        }
    }

    initAnimations(dir) {

        this.slides.forEach(slide => {
            if(slide.nodeName != 'BUTTON') {
                slide.classList.add('animated')
                slide.classList.remove('slideInLeft', 'slideInRight', 'fadeIn')
            }
        })
        if(dir === 'next') {
            this.slides[1].classList.add('fadeIn')
            this.slides[2].classList.add('slideInLeft')
        }
        if(dir === 'prev') {
            this.slides[this.slides.length - 1].classList.add('slideInRight')
            this.slides[0].classList.add('fadeIn')
        }
    }

    initButtonInSlide(dir) {
        let buttons = [...this.page.querySelectorAll('button')]

        buttons.forEach(btn => {
            if(dir === 'next') {
                this.page.appendChild(btn)
            }
            if(dir === 'prev') {
                this.page.insertBefore(btn, this.slides[0])
            }
        })
        this.updateSlides()
        this.initActiveSlide()
    }

    updateSlides() {
        this.slides = [...this.page.children]
    }

    initActiveSlide() {
        if (!this.page.classList.contains('feed__slider')) {
            this.slides.forEach(slide => {
                [...slide.children].forEach(child => {
                    child.style.opacity = 0.4
                })
            });
    
            [...this.slides[0].children].forEach(child => {
                child.style.opacity = 1
            })

        } else if (this.page.classList.contains('feed__slider')) {
            this.slides.forEach(slide => {
                slide.classList.remove('feed__item-active')
            })

            this.slides[0].classList.add('feed__item-active')
        } 
    }

    render() {
        if(!this.page) return

        this.init()
        this.initActiveSlide()
        this.bindTriggers()
        this.startAutoplay()
        this.bindAutoplay()
    }
}