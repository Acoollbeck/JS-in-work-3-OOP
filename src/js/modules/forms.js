export default class Forms {
    constructor(forms) {
        this.forms = document.querySelectorAll(forms)
        this.inputs = document.querySelectorAll('input')
        this.message = {
            load: 'Загрузга...',
            success: 'Спасибо! Скоро мы с вами свяжемся!',
            error: 'Что то пошло не так'
        }
    }

    async postData(url, data) {
        const response = await fetch(url, {
            method: 'POST',
            body: data,
        })

        return response
    }

    sendForm() {
        this.forms.forEach(form => {
            form.addEventListener('submit', (e) => {
                e.preventDefault()
                
                const createMessage = document.createElement('div')
                createMessage.style.cssText = `
                    font-size: 35px;
                    padding: 20px;
                    color: grey;
                `

                form.parentNode.appendChild(createMessage)

                createMessage.textContent = this.message.load

                const formData = new FormData(form)

                this.postData('assets/question.php', formData)
                    .then(response => {
                        console.log(response)
                        createMessage.textContent = this.message.success
                    })
                    .catch(error => {
                        createMessage.textContent = `${this.message.error}: ${error.message || error} `
                        console.log('Ошибка отправки формы: ', error)
                    })
                    .finally(() => {
                        this.clearInputs(form)

                        setTimeout(() => {
                            createMessage.remove()
                        }, 5000)
                    })
            })
        })
    }

    clearInputs(form) {
        form.querySelectorAll('input').forEach(input => {
            input.value = ''
        })
    }

    checkMail() {
        document.querySelectorAll('[name=email]').forEach(mail => {
            mail.addEventListener('input', () => {
                if(/[а-яё]/i.test(mail.value)) {
                    mail.value = ''
                    mail.style.border = '1px solid red'
                } else {
                    mail.style.border = ''
                }
            })
        })
    }

    render() {
        this.checkMail()
        this.sendForm()
    }
}