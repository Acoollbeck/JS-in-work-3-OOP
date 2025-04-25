export default class Defference{
    constructor(officerOld, officerNew, officerItems) {
        this.officerOld = document.querySelector(officerOld)
        this.officerNew = document.querySelector(officerNew)
        this.oldItems = this.officerOld.querySelectorAll(officerItems)
        this.newItems = this.officerNew.querySelectorAll(officerItems)
        this.oldCounter = 0
        this.newCounter = 0
    }

    hideItems(items) {
        items.forEach((item, i, array) => {
            if(i !== array.length - 1) {
                item.style.display = 'none'
            }
        })
    }

    bindTriggers(parent, items, counterName) {
        parent.querySelector('.plus').addEventListener('click', () => {
            const counter = this[counterName]

            if(counter !== items.length - 2) {
                this.addAnimation(items, counter)
                items[counter].style.display = 'flex'
                this[counterName]++
            } else {

                items[counter].style.display = 'flex'
                items[items.length - 1].remove()

            }
        })
    }

    addAnimation(items) {
        items.forEach(item => {
            item.classList.add('animated', 'slideInDown')
            item.addEventListener('animationend', () => {
                item.classList.remove('slideInDown')
            })
        })
    }

    render() {
        this.hideItems(this.oldItems)
        this.hideItems(this.newItems)

        this.bindTriggers(this.officerOld, this.oldItems, 'oldCounter')
        this.bindTriggers(this.officerNew, this.newItems, 'newCounter')
    }
}