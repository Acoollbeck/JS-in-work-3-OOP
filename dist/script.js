/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_slider_slider_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/slider/slider-main */ "./src/js/modules/slider/slider-main.js");
/* harmony import */ var _modules_slider_slider_mini__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/slider/slider-mini */ "./src/js/modules/slider/slider-mini.js");
/* harmony import */ var _modules_videoPlayer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/videoPlayer */ "./src/js/modules/videoPlayer.js");
/* harmony import */ var _modules_defference__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/defference */ "./src/js/modules/defference.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/forms */ "./src/js/modules/forms.js");
/* harmony import */ var _modules_slider_accordion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/slider/accordion */ "./src/js/modules/slider/accordion.js");
/* harmony import */ var _modules_slider_download__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/slider/download */ "./src/js/modules/slider/download.js");







window.addEventListener('DOMContentLoaded', () => {
  const slider = new _modules_slider_slider_main__WEBPACK_IMPORTED_MODULE_0__["default"]({
    page: '.page',
    btns: '.next'
  });
  const secondSlider = new _modules_slider_slider_main__WEBPACK_IMPORTED_MODULE_0__["default"]({
    page: '.moduleapp',
    btns: '.next',
    btnsPrev: '.prevmodule'
  });
  const videoPlayer = new _modules_videoPlayer__WEBPACK_IMPORTED_MODULE_2__["default"]('.page .play', '.overlay');
  const secondVideoPlayer = new _modules_videoPlayer__WEBPACK_IMPORTED_MODULE_2__["default"]('.moduleapp .play', '.overlay');
  const showUpSlider = new _modules_slider_slider_mini__WEBPACK_IMPORTED_MODULE_1__["default"]({
    page: '.showup__content-slider',
    next: '.showup__next',
    prev: '.showup__prev'
  });
  const modulesSlider = new _modules_slider_slider_mini__WEBPACK_IMPORTED_MODULE_1__["default"]({
    page: '.modules__content-slider',
    next: '.slick-next',
    prev: '.slick-prev',
    config: {
      autoplay: true,
      interval: 5000
    }
  });
  const feedSlider = new _modules_slider_slider_mini__WEBPACK_IMPORTED_MODULE_1__["default"]({
    page: '.feed__slider',
    next: '.feed__slider .slick-next',
    prev: '.feed__slider .slick-prev'
  });
  const defference = new _modules_defference__WEBPACK_IMPORTED_MODULE_3__["default"]('.officerold', '.officernew', '.officer__card-item');
  const forms = new _modules_forms__WEBPACK_IMPORTED_MODULE_4__["default"]('.form');
  const accordion = new _modules_slider_accordion__WEBPACK_IMPORTED_MODULE_5__["default"]('.module__info-show .plus', '.msg');
  const download = new _modules_slider_download__WEBPACK_IMPORTED_MODULE_6__["default"]('.download');
  slider.render();
  secondSlider.render();
  videoPlayer.render();
  secondVideoPlayer.render();
  showUpSlider.render();
  modulesSlider.render();
  feedSlider.render();
  defference.render();
  forms.render();
  accordion.render();
  download.render();
});

/***/ }),

/***/ "./src/js/modules/defference.js":
/*!**************************************!*\
  !*** ./src/js/modules/defference.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Defference; });
class Defference {
  constructor(officerOld, officerNew, officerItems) {
    this.officerOld = document.querySelector(officerOld);
    this.officerNew = document.querySelector(officerNew);
    if (this.officerOld && this.officerNew) {
      this.oldItems = this.officerOld.querySelectorAll(officerItems);
      this.newItems = this.officerNew.querySelectorAll(officerItems);
    }
    this.oldCounter = 0;
    this.newCounter = 0;
  }
  hideItems(items) {
    items.forEach((item, i, array) => {
      if (i !== array.length - 1) {
        item.style.display = 'none';
      }
    });
  }
  bindTriggers(parent, items, counterName) {
    parent.querySelector('.plus').addEventListener('click', () => {
      const counter = this[counterName];
      if (counter !== items.length - 2) {
        this.addAnimation(items, counter);
        items[counter].style.display = 'flex';
        this[counterName]++;
      } else {
        items[counter].style.display = 'flex';
        items[items.length - 1].remove();
      }
    });
  }
  addAnimation(items) {
    items.forEach(item => {
      item.classList.add('animated', 'slideInDown');
      item.addEventListener('animationend', () => {
        item.classList.remove('slideInDown');
      });
    });
  }
  render() {
    if (this.oldItems && this.newItems) {
      this.hideItems(this.oldItems);
      this.hideItems(this.newItems);
      this.bindTriggers(this.officerOld, this.oldItems, 'oldCounter');
      this.bindTriggers(this.officerNew, this.newItems, 'newCounter');
    }
  }
}

/***/ }),

/***/ "./src/js/modules/forms.js":
/*!*********************************!*\
  !*** ./src/js/modules/forms.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Forms; });
class Forms {
  constructor(forms) {
    this.forms = document.querySelectorAll(forms);
    this.inputs = document.querySelectorAll('input');
    this.message = {
      load: 'Загрузга...',
      success: 'Спасибо! Скоро мы с вами свяжемся!',
      error: 'Что то пошло не так'
    };
  }
  async postData(url, data) {
    const response = await fetch(url, {
      method: 'POST',
      body: data
    });
    return response;
  }
  sendForm() {
    this.forms.forEach(form => {
      form.addEventListener('submit', e => {
        e.preventDefault();
        const createMessage = document.createElement('div');
        createMessage.style.cssText = `
                    font-size: 35px;
                    padding: 20px;
                    color: grey;
                `;
        form.parentNode.appendChild(createMessage);
        createMessage.textContent = this.message.load;
        const formData = new FormData(form);
        this.postData('assets/question.php', formData).then(response => {
          console.log(response);
          createMessage.textContent = this.message.success;
        }).catch(error => {
          createMessage.textContent = `${this.message.error}: ${error.message || error} `;
          console.log('Ошибка отправки формы: ', error);
        }).finally(() => {
          this.clearInputs(form);
          setTimeout(() => {
            createMessage.remove();
          }, 5000);
        });
      });
    });
  }
  clearInputs(form) {
    form.querySelectorAll('input').forEach(input => {
      input.value = '';
    });
  }
  checkMail() {
    document.querySelectorAll('[name=email]').forEach(mail => {
      mail.addEventListener('input', () => {
        if (/[а-яё]/i.test(mail.value)) {
          mail.value = '';
          mail.style.border = '1px solid red';
        } else {
          mail.style.border = '';
        }
      });
    });
  }
  render() {
    this.checkMail();
    this.sendForm();
  }
}

/***/ }),

/***/ "./src/js/modules/slider/accordion.js":
/*!********************************************!*\
  !*** ./src/js/modules/slider/accordion.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Accordion; });
class Accordion {
  constructor(btns, blocks) {
    this.btns = document.querySelectorAll(btns);
    this.blocks = document.querySelectorAll(blocks);
  }
  bindTriggers() {
    this.btns.forEach(btn => {
      btn.addEventListener('click', () => {
        const block = btn.parentNode.nextElementSibling;
        if (block.style.opacity === '0') {
          this.toggleBlocks(true, block);
        } else {
          this.toggleBlocks(false, block);
        }
      });
    });
  }
  toggleBlocks(show, block) {
    if (show) {
      block.style.maxHeight = '150px';
      block.style.opacity = 1;
      block.style.visibility = 'visible';
    } else {
      block.style.maxHeight = 0;
      block.style.opacity = 0;
      block.style.visibility = 'hidden';
    }
  }
  changeBlocks() {
    this.blocks.forEach(block => {
      block.style.display = 'block';
      block.style.maxHeight = 0;
      block.style.opacity = 0;
      block.style.visibility = 'hidden';
      block.style.overflow = 'hidden';
      block.style.transition = 'all .5s ease-in-out';
    });
  }
  render() {
    this.changeBlocks();
    this.bindTriggers();
  }
}

/***/ }),

/***/ "./src/js/modules/slider/download.js":
/*!*******************************************!*\
  !*** ./src/js/modules/slider/download.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Download; });
class Download {
  constructor(triggers) {
    this.btns = document.querySelectorAll(triggers);
    this.path = 'assets/img/mainbg.jpg';
  }
  bindTriggers() {
    this.btns.forEach(btn => {
      btn.addEventListener('click', e => {
        e.preventDefault();
        e.stopPropagation();
        this.download(this.path);
        //Все равно проиходит переход к первому слайду, при клике по области вокург кнопки
        // Почему?К сожалению, не представляется возможным понять
      });
    });
  }
  download(path) {
    const link = document.createElement('a');
    link.setAttribute('href', path);
    link.setAttribute('download', 'Good Picture');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  render() {
    this.bindTriggers();
  }
}

/***/ }),

/***/ "./src/js/modules/slider/slider-main.js":
/*!**********************************************!*\
  !*** ./src/js/modules/slider/slider-main.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainSlider; });
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider */ "./src/js/modules/slider/slider.js");

class MainSlider extends _slider__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(btns) {
    super(btns);
  }
  initSlide(index) {
    this.slides.forEach(slide => {
      slide.classList.add('hidden-slide');
      slide.classList.remove('fadeIn');
    });
    this.slides[index].classList.remove('hidden-slide');
    this.slides[index].classList.add('animated', 'fadeIn');
    try {
      this.card = document.querySelector('.hanson');
      if (!this.card) throw new Error('Элемент .hanson не найден!');
      this.card.style.display = 'none';
      if (this.slides[index].classList.contains('fadeIn') && this.slides[index].classList.contains('modules')) {
        setTimeout(() => {
          this.card.style.display = 'block';
          this.card.classList.add('animated', 'slideInUp');
        }, 3000);
      } else {
        this.card.classList.remove('slideInUp');
      }
    } catch (error) {
      console.warn(error.message);
    }
  }
  changeSlide(step) {
    let newIndex = this.slideIndex + step;
    if (newIndex >= this.slides.length) {
      newIndex = 0;
    } else if (newIndex < 0) {
      newIndex = this.slides.length - 1;
    }
    this.slideIndex = newIndex;
    this.initSlide(newIndex);
  }
  bindTriggers() {
    this.btns.forEach(btn => {
      btn.addEventListener('click', () => {
        this.changeSlide(1);
      });
      if (btn.parentNode.previousElementSibling) {
        btn.parentNode.previousElementSibling.addEventListener('click', () => {
          this.slideIndex = 0;
          this.initSlide(this.slideIndex);
        });
      }
    });
    this.btnsPrev.forEach(btn => {
      btn.addEventListener('click', () => {
        this.changeSlide(-1);
      });
    });
  }
  render() {
    if (!this.slides || this.slides.length === 0) return;
    this.initSlide(this.slideIndex);
    this.bindTriggers();
  }
}

/***/ }),

/***/ "./src/js/modules/slider/slider-mini.js":
/*!**********************************************!*\
  !*** ./src/js/modules/slider/slider-mini.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MiniSlider; });
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider */ "./src/js/modules/slider/slider.js");

class MiniSlider extends _slider__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(options) {
    super(options);
  }
  init() {
    this.page.style.cssText = `
            display: flex;
            flex-wrap: wrap;
            overflow: hidden;
            align-items: flex-start;
        `;
  }
  bindAutoplay() {
    if (this.config.autoplay) {
      this.page.addEventListener('mouseenter', () => this.stopAutoplay());
      this.page.addEventListener('mouseleave', () => this.startAutoplay());
    }
  }
  startAutoplay() {
    if (this.config.autoplay === true) {
      this.interval = setInterval(() => {
        this.changeSlide('next');
      }, this.config.interval);
    }
  }
  stopAutoplay() {
    clearInterval(this.interval);
  }
  bindTriggers() {
    if (this.next) {
      this.next.addEventListener('click', () => {
        this.changeSlide('next');
      });
    }
    if (this.prev) {
      this.prev.addEventListener('click', () => {
        this.changeSlide('prev');
      });
    }
  }
  changeSlide(dir) {
    this.initAnimations(dir);
    if (this.slides[1].nodeName === 'BUTTON' || this.slides[this.slides.length - 1].nodeName === 'BUTTON') {
      this.initButtonInSlide(dir);
    }
    if (dir === 'next') {
      this.page.appendChild(this.slides[0]);
      this.updateSlides();
      this.initActiveSlide();
    } else if (dir === 'prev') {
      let lastSlide = this.slides[this.slides.length - 1];
      this.page.insertBefore(lastSlide, this.slides[0]);
      this.updateSlides();
      this.initActiveSlide();
    }
  }
  initAnimations(dir) {
    this.slides.forEach(slide => {
      if (slide.nodeName != 'BUTTON') {
        slide.classList.add('animated');
        slide.classList.remove('slideInLeft', 'slideInRight', 'fadeIn');
      }
    });
    if (dir === 'next') {
      this.slides[1].classList.add('fadeIn');
      this.slides[2].classList.add('slideInLeft');
    }
    if (dir === 'prev') {
      this.slides[this.slides.length - 1].classList.add('slideInRight');
      this.slides[0].classList.add('fadeIn');
    }
  }
  initButtonInSlide(dir) {
    let buttons = [...this.page.querySelectorAll('button')];
    buttons.forEach(btn => {
      if (dir === 'next') {
        this.page.appendChild(btn);
      }
      if (dir === 'prev') {
        this.page.insertBefore(btn, this.slides[0]);
      }
    });
    this.updateSlides();
    this.initActiveSlide();
  }
  updateSlides() {
    this.slides = [...this.page.children];
  }
  initActiveSlide() {
    if (!this.page.classList.contains('feed__slider')) {
      this.slides.forEach(slide => {
        [...slide.children].forEach(child => {
          child.style.opacity = 0.4;
        });
      });
      [...this.slides[0].children].forEach(child => {
        child.style.opacity = 1;
      });
    } else if (this.page.classList.contains('feed__slider')) {
      this.slides.forEach(slide => {
        slide.classList.remove('feed__item-active');
      });
      this.slides[0].classList.add('feed__item-active');
    }
  }
  render() {
    if (!this.page) return;
    this.init();
    this.initActiveSlide();
    this.bindTriggers();
    this.startAutoplay();
    this.bindAutoplay();
  }
}

/***/ }),

/***/ "./src/js/modules/slider/slider.js":
/*!*****************************************!*\
  !*** ./src/js/modules/slider/slider.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Slider; });
class Slider {
  constructor({
    page = null,
    btns = null,
    btnsPrev = null,
    next = null,
    prev = null,
    config = {}
  } = {}) {
    this.page = document.querySelector(page);
    this.slides = this.page ? [...this.page.children] : [];
    this.btns = document.querySelectorAll(btns);
    this.btnsPrev = document.querySelectorAll(btnsPrev);
    this.next = document.querySelector(next);
    this.prev = document.querySelector(prev);
    this.slideIndex = 0;
    this.interval = null;
    this.config = {
      autoplay: false,
      interval: 5000,
      ...config
    };
  }
}

/***/ }),

/***/ "./src/js/modules/videoPlayer.js":
/*!***************************************!*\
  !*** ./src/js/modules/videoPlayer.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VideoPlayer; });
class VideoPlayer {
  constructor(btns, popup) {
    this.btns = document.querySelectorAll(btns);
    this.popup = document.querySelector(popup);
    this.close = this.popup.querySelector('.close');
    this.videoId = '';
    this.player = null;
    this.isPlayerReady = false;
    this.onPlayerStateChange = this.onPlayerStateChange.bind(this);
  }
  initPlayer(url) {
    if (this.player) {
      this.player.loadVideoById(this.videoId);
      return;
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
            console.log('Player is ready');
          },
          'onStateChange': this.onPlayerStateChange
        }
      });
    };
  }
  onPlayerStateChange(state) {
    if (state.data === YT.PlayerState.ENDED) {
      this.unlockNextVideo();
    }
  }
  unlockNextVideo() {
    const blockElem = this.activeBtn.closest('.module__video-item').nextElementSibling;
    const blockElemText = blockElem.querySelector('.play__text');
    const blockElemBtn = blockElem.querySelector('.play__circle');
    const svg = this.activeBtn.querySelector('svg').cloneNode(true);
    blockElemBtn.parentNode.setAttribute('data-block', 'false');
    blockElemBtn.querySelector('svg').style.display = 'none';
    blockElemBtn.appendChild(svg);
    blockElemText.classList.remove('attention');
    blockElemBtn.classList.remove('closed');
    blockElemText.textContent = 'play video';
    blockElem.style.opacity = '1';
    blockElem.style.filter = 'none';
  }
  playVideo() {
    this.btns.forEach((btn, i) => {
      if (i % 2 !== 0 && btn.closest('.module__video-item')) {
        btn.setAttribute('data-block', 'true');
      }
      btn.addEventListener('click', () => {
        if (btn.getAttribute('data-block') === 'true') return;
        this.activeBtn = btn;
        this.popup.style.display = 'flex';
        this.videoId = btn.getAttribute('data-url');
        if (this.isPlayerReady) {
          this.player.loadVideoById({
            videoId: this.videoId
          });
        } else {
          this.initPlayer(this.videoId);
        }
      });
    });
  }
  closeVideo() {
    this.close.addEventListener('click', () => {
      this.popup.style.display = 'none';
      if (this.player) {
        this.player.stopVideo();
      }
    });
  }
  render() {
    this.playVideo();
    this.closeVideo();
  }
}

/***/ })

/******/ });
//# sourceMappingURL=script.js.map