export default class Accordion {
    constructor(btns, blocks) {
        this.btns = document.querySelectorAll(btns)
        this.blocks = document.querySelectorAll(blocks)
    }

    bindTriggers() {
        this.btns.forEach(btn => {
            btn.addEventListener('click', () => {
                const block = btn.parentNode.nextElementSibling
                if(block.style.opacity === '0') {
                    this.toggleBlocks(true, block)
                } else {
                    this.toggleBlocks(false, block)
                }
            })
        })
    }

    toggleBlocks(show, block) {
        if(show) {
            block.style.maxHeight = '150px'
            block.style.opacity = 1
            block.style.visibility = 'visible'
        } else {
            block.style.maxHeight = 0
            block.style.opacity = 0
            block.style.visibility = 'hidden'
        }
    }

    changeBlocks() {
        this.blocks.forEach(block => {
            block.style.display = 'block'
            block.style.maxHeight = 0
            block.style.opacity = 0
            block.style.visibility = 'hidden'
            block.style.overflow = 'hidden'
            block.style.transition = 'all .5s ease-in-out'
        })
    }

    render() {
        this.changeBlocks()
        this.bindTriggers()
    }
}