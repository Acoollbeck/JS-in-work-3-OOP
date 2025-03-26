export default class VideoPlayer {
    constructor(btns, popup) {
        this.btns = document.querySelectorAll(btns)
        this.popup = document.querySelector(popup)
        this.close = this.popup.querySelector('.close')
        this.videoId = ''
        this.player = null
        this.isPlayerReady = false
    }
    
    initPlayer(url) {
        if(this.player) return

        var tag = document.createElement('script');
        var firstScriptTag = document.getElementsByTagName('script')[0];
        
        tag.src = "https://www.youtube.com/iframe_api";
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        
        window.onYouTubeIframeAPIReady = () => {
            this.player = new YT.Player('player', {
              height: '390',
              width: '640',
              videoId: url,
              events: {
                'onready': () => {
                    this.isPlayerReady = true;
                    console.log('Player is ready')
                }
              }
            });
          }
    }

    playVideo() {
        this.btns.forEach(btn => {
            btn.addEventListener('click', () => {
                this.videoId = btn.getAttribute('data-url')
                this.popup.style.display = 'flex'

                if(this.isPlayerReady) {
                    this.player.loadVideoById(this.videoId)
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