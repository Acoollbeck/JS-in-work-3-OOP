export default class Slider {
    constructor({
        page = null, 
        btns = null, 
        next = null, 
        prev = null,
        config = {}
    } = {}) {
        this.page = document.querySelector(page)
        this.slides = this.page ? [...this.page.children] : []
        this.btns = document.querySelectorAll(btns)
        this.next = document.querySelector(next)
        this.prev = document.querySelector(prev)
        this.slideIndex = 0
        this.interval = null

        this.config = {
            autoplay: false,
            interval: 5000,
            ...config
        }
    }
}