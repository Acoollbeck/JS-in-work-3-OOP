import Slider from "./slider";

export default class MainSlider extends Slider {
    constructor(btns) {
        super(btns)
    }

    initSlide(index) {
        
        this.slides.forEach(slide => {
            slide.classList.add('hidden-slide')
            slide.classList.remove('fadeIn')
        })
        
        this.slides[index].classList.remove('hidden-slide')
        this.slides[index].classList.add('animated', 'fadeIn')
        
        try {
            this.card = document.querySelector('.hanson')
            if(!this.card) throw new Error('Элемент .hanson не найден!')

            this.card.style.display = 'none'
            if(this.slides[index].classList.contains('fadeIn') && this.slides[index].classList.contains('modules')) {
                setTimeout(() => {
                    this.card.style.display = 'block'
                    this.card.classList.add('animated', 'slideInUp')
                }, 3000)
            } else {
                this.card.classList.remove('slideInUp')
            }

        } catch(error) {
            console.warn(error.message)
        }
    }

    changeSlide(step) {
        let newIndex = this.slideIndex + step

        if(newIndex >= this.slides.length) {
            newIndex = 0
        } else if (newIndex < 0) {
            newIndex = this.slides.length - 1
        }

        this.slideIndex = newIndex
        this.initSlide(newIndex)
    }

    render() {
        if(!this.slides || this.slides.length === 0) return

        this.initSlide(this.slideIndex)

        this.btns.forEach(btn => {
            btn.addEventListener('click', () => {
                this.changeSlide(1)
            })

            if(btn.parentNode.previousElementSibling) {
                btn.parentNode.previousElementSibling.addEventListener('click', () => {
                    this.slideIndex = 0
                    this.initSlide(this.slideIndex)
                })
            }
        })
    }
}