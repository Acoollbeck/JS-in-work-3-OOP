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





window.addEventListener('DOMContentLoaded', () => {
  const slider = new _modules_slider_slider_main__WEBPACK_IMPORTED_MODULE_0__["default"]({
    page: '.page',
    btns: '.next'
  });
  const videoPlayer = new _modules_videoPlayer__WEBPACK_IMPORTED_MODULE_2__["default"]('.play', '.overlay');
  const showUpSlider = new _modules_slider_slider_mini__WEBPACK_IMPORTED_MODULE_1__["default"]({
    page: '.showup__content-slider',
    next: '.showup__next',
    prev: '.showup__prev'
  });
  const modulesSlider = new _modules_slider_slider_mini__WEBPACK_IMPORTED_MODULE_1__["default"]({
    page: '.modules__content-slider',
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
  slider.render();
  videoPlayer.render();
  showUpSlider.render();
  modulesSlider.render();
  feedSlider.render();
  defference.render();
  forms.render();
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
    this.oldItems = this.officerOld.querySelectorAll(officerItems);
    this.newItems = this.officerNew.querySelectorAll(officerItems);
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
    this.hideItems(this.oldItems);
    this.hideItems(this.newItems);
    this.bindTriggers(this.officerOld, this.oldItems, 'oldCounter');
    this.bindTriggers(this.officerNew, this.newItems, 'newCounter');
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
    this.message = {
      load: 'Загрузга...',
      success: 'Спасибо! Скоро мы с вами свяжемся!',
      error: 'Что то пошло не так'
    };
  }
  createMessage(message) {
    const createMessage = document.createElement('div');
    createMessage.style.cssText = `
            width: 200px;
            height: 100px;
            color: red;
        `;
    this.forms.forEach(form => {
      form.parentNode.appendChild(createMessage);
    });
    createMessage.textContent = this.message[message];
    if (message === 'delete') {
      setTimeout(() => {
        createMessage.remove();
      }, 5000);
    }
  }
  async postData(url, data) {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data)
    });
    return response;
  }
  sendForm() {
    this.forms.forEach(form => {
      form.addEventListener('submit', e => {
        e.preventDefault();
        this.createMessage('load');
        const formData = new FormData(form);
        this.postData('/src/assets/question.php', formData).then(response => {
          console.log(response);
          this.createMessage('success');
        }).catch(error => {
          this.createMessage('error');
          console.log(error);
        }).finally(this.createMessage('delete'));
      });
    });
  }
  render() {
    this.sendForm();
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
  render() {
    this.initSlide(this.slideIndex);
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
    this.init();
    this.initActiveSlide();
    this.bindTriggers();
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
    next = null,
    prev = null,
    config = {}
  } = {}) {
    this.page = document.querySelector(page);
    this.slides = [...this.page.children];
    this.btns = document.querySelectorAll(btns);
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
  }
  initPlayer(url) {
    if (this.player) return;
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
            console.log('Player is ready');
          }
        }
      });
    };
  }
  playVideo() {
    this.btns.forEach(btn => {
      btn.addEventListener('click', () => {
        this.videoId = btn.getAttribute('data-url');
        this.popup.style.display = 'flex';
        if (this.isPlayerReady) {
          this.player.loadVideoById(this.videoId);
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