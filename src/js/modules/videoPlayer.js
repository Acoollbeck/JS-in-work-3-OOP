export default class VideoPlayer {
    constructor(btns, popup) {
        this.btns = document.querySelectorAll(btns)
        this.popup = document.querySelector(popup)
        this.close = this.popup.querySelector('.close')
        this.videoId = ''
        this.player = null
        this.isPlayerReady = false
        this.onPlayerStateChange = this.onPlayerStateChange.bind(this)
    }
    
    initPlayer(url) {
        if(this.player) {
            this.player.loadVideoById(this.videoId)
            return
        }

        var tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        document.head.appendChild(tag);
        
        window.onYouTubeIframeAPIReady = () => {
            this.player = new YT.Player('player', {
              height: '390',
              width: '640',
              videoId: url,
              events: {
                'onready': () => {
                    this.isPlayerReady = true;
                    console.log('Player is ready')
                },
                'onStateChange': this.onPlayerStateChange
              }
            });
          }
    }

    onPlayerStateChange(state) {
        if(state.data === YT.PlayerState.ENDED) {
            this.unlockNextVideo()
        }
    }

    unlockNextVideo() {
        const blockElem = this.activeBtn.closest('.module__video-item').nextElementSibling
        const blockElemText = blockElem.querySelector('.play__text')
        const blockElemBtn = blockElem.querySelector('.play__circle')
        const svg = this.activeBtn.querySelector('svg').cloneNode(true)
        blockElemBtn.parentNode.setAttribute('data-block', 'false')
        blockElemBtn.querySelector('svg').style.display = 'none'
        blockElemBtn.appendChild(svg)
        blockElemText.classList.remove('attention')
        blockElemBtn.classList.remove('closed')
        blockElemText.textContent = 'play video'
        blockElem.style.opacity = '1'
        blockElem.style.filter = 'none'
    }

    playVideo() {
        this.btns.forEach((btn, i) => {
            if(i % 2 !== 0 && btn.closest('.module__video-item')) {
                btn.setAttribute('data-block', 'true')
            }

            btn.addEventListener('click', () => {
                if(btn.getAttribute('data-block') === 'true') return
                this.activeBtn = btn
                this.popup.style.display = 'flex'
                this.videoId = btn.getAttribute('data-url')

                if(this.isPlayerReady) {
                    this.player.loadVideoById({ videoId: this.videoId });
                } else {
                    this.initPlayer(this.videoId)
                }
            })
        })
    }

    closeVideo() {
        this.close.addEventListener('click', () => {
            this.popup.style.display = 'none'
            if(this.player) {
                this.player.stopVideo()
            }

        })
    }

    render() {
        this.playVideo()
        this.closeVideo()
    }
}