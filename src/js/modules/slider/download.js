export default class Download {
    constructor(triggers) {
        this.btns = document.querySelectorAll(triggers)
        this.path = 'assets/img/mainbg.jpg'
    }

    bindTriggers() {
        this.btns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault()
                e.stopPropagation()
                this.download(this.path)
                //Все равно проиходит переход к первому слайду, при клике по области вокург кнопки
                // Почему?К сожалению, не представляется возможным понять
            })
        })
    }

    download(path) {
        const link = document.createElement('a')
        
        link.setAttribute('href', path)
        link.setAttribute('download', 'Good Picture')
        
        document.body.appendChild(link)

        link.click()

        document.body.removeChild(link)
    }

    render() {
        this.bindTriggers()
    }
}