export default class Slider {
    constructor(page, btns) {
        this.page = document.querySelector(page)
        this.slides = [...this.page.children]
        this.btns = document.querySelectorAll(btns)
        this.slideIndex = 0
    }

    showSlide(index) {

        this.slides.forEach(slide => {
            slide.classList.add('hidden-slide')
            slide.classList.remove('fadeIn')
        })

        this.slides[index].classList.remove('hidden-slide')
        this.slides[index].classList.add('animated', 'fadeIn')

    }

    changeSlide(step) {
        let newIndex = this.slideIndex + step

        if(newIndex >= this.slides.length) {
            newIndex = 0
        } else if (newIndex < 0) {
            newIndex = this.slides.length - 1
        }

        this.slideIndex = newIndex
        this.showSlide(newIndex)
    }

    render() {
        this.showSlide(this.slideIndex)

        this.btns.forEach(btn => {
            btn.addEventListener('click', () => this.changeSlide(1))

            if(btn.parentNode.previousElementSibling) {
                btn.parentNode.previousElementSibling.addEventListener('click', () => {
                    this.showSlide(0)
                })
            }
        })
    }
}