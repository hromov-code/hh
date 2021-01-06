"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F, n: function n() {
                    if (i >= o.length) return {done: true};
                    return {done: false, value: o[i++]};
                }, e: function e(_e) {
                    throw _e;
                }, f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        }, n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        }, e: function e(_e2) {
            didErr = true;
            err = _e2;
        }, f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally {
                if (didErr) throw err;
            }
        }
    };
}

function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) {
        arr2[i] = arr[i];
    }
    return arr2;
}

function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function (sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}

function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
            ownKeys(Object(source), true).forEach(function (key) {
                _defineProperty(target, key, source[key]);
            });
        } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
            ownKeys(Object(source)).forEach(function (key) {
                Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
            });
        }
    }
    return target;
}

function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {value: value, enumerable: true, configurable: true, writable: true});
    } else {
        obj[key] = value;
    }
    return obj;
}

var JSCCommon = {
    CustomInputFile: function CustomInputFile() {
        var file = $(".add-file input[type=file]");
        file.change(function () {
            var name = $(this).closest('.add-file').find(".add-file__filename"),
            filename = '';
            if(this.files.length>0){
                $.each(this.files, function( index, value ) {
                    filename += value.name + '<br>';
                })
                name.html(filename);
            }else{
                 filename = $(this).val().replace(/.*\\/, "");
                name.text(filename);
            }

        });
    },
    // часть вызов скриптов здесь, для использования при AJAX
    btnToggleMenuMobile: [].slice.call(document.querySelectorAll(".toggle-menu-mobile--js")),
    menuMobile: document.querySelector(".menu-mobile--js"),
    menuMobileLink: [].slice.call(document.querySelectorAll(".menu-mobile--js ul li a")),
    modalCall: function modalCall() {
        $(".link-modal").fancybox({
            arrows: false,
            infobar: false,
            touch: false,
            type: 'inline',
            autoFocus: false,
            i18n: {
                en: {
                    CLOSE: "Закрыть",
                    NEXT: "Вперед",
                    PREV: "Назад" // PLAY_START: "Start slideshow",
                    // PLAY_STOP: "Pause slideshow",
                    // FULL_SCREEN: "Full screen",
                    // THUMBS: "Thumbnails",
                    // DOWNLOAD: "Download",
                    // SHARE: "Share",
                    // ZOOM: "Zoom"

                }
            }
        });
        $(".modal-close-js").click(function () {
            $.fancybox.close();
        });
        $.fancybox.defaults.backFocus = false;
        var linkModal = document.querySelectorAll('.link-modal');

        function addData() {
            linkModal.forEach(function (element) {
                element.addEventListener('click', function () {
                    var modal = document.querySelector(element.getAttribute("href"));
                    var data = element.dataset;

                    function setValue(val, elem) {
                        if (elem && val) {
                            var el = modal.querySelector(elem);
                            el.tagName == "INPUT" ? el.value = val : el.innerHTML = val; // console.log(modal.querySelector(elem).tagName)
                        }
                    }

                    setValue(data.title, '.form-wrap__title-h'); // setValue(data.text, '.after-headline');
                    // setValue(data.btn, '.btn');

                    setValue(data.order, '.order');
                });
            });
        }

        if (linkModal) addData();
    },
    // /modalCall
    toggleMenu: function toggleMenu() {
        var _this2 = this;

        if (this.btnToggleMenuMobile) {
            this.btnToggleMenuMobile.forEach(function (element) {
                element.addEventListener('click', function () {
                    _this2.btnToggleMenuMobile.forEach(function (element) {
                        return element.classList.toggle("on");
                    });

                    _this2.menuMobile.classList.toggle("active");

                    document.body.classList.toggle("fixed");
                    return false;
                });
            });
        }
    },
    closeMenu: function closeMenu() {
        if (this.menuMobile) {
            this.btnToggleMenuMobile.forEach(function (element) {
                element.classList.remove("on");
            });
            this.menuMobile.classList.remove("active");
            document.body.classList.remove("fixed");
        }
    },
    mobileMenu: function mobileMenu() {
        var _this3 = this;

        if (this.menuMobileLink) {
            this.toggleMenu();
            document.addEventListener('mouseup', function (event) {
                var container = event.target.closest(".menu-mobile--js.active"); // (1)

                if (!container) {
                    _this3.closeMenu();
                }
            }, {
                passive: true
            });
            window.addEventListener('resize', function () {
                if (window.matchMedia("(min-width: 992px)").matches) {
                    JSCCommon.closeMenu();
                }
            }, {
                passive: true
            });
        }
    },
    // /mobileMenu
    // табы  .
    tabscostume: function tabscostume(tab) {
        var tabs = {
            Btn: [].slice.call(document.querySelectorAll(".".concat(tab, "__btn"))),
            BtnParent: [].slice.call(document.querySelectorAll(".".concat(tab, "__caption"))),
            Content: [].slice.call(document.querySelectorAll(".".concat(tab, "__content")))
        };
        tabs.Btn.forEach(function (element, index) {
            element.addEventListener('click', function () {
                if (!element.classList.contains('active')) {
                    var siblings = element.parentNode.querySelector(".".concat(tab, "__btn.active"));
                    var siblingsContent = tabs.Content[index].parentNode.querySelector(".".concat(tab, "__content.active"));
                    siblings.classList.remove('active');
                    siblingsContent.classList.remove('active');
                    element.classList.add('active');
                    tabs.Content[index].classList.add('active');
                }
            });
        }); // $('.' + tab + '__caption').on('click', '.' + tab + '__btn:not(.active)', function (e) {
        // 	$(this)
        // 		.addClass('active').siblings().removeClass('active')
        // 		.closest('.' + tab).find('.' + tab + '__content').hide().removeClass('active')
        // 		.eq($(this).index()).fadeIn().addClass('active');
        // });
    },
    // /табы
    inputMask: function inputMask() {
        // mask for input
        var InputTel = [].slice.call(document.querySelectorAll('input[type="tel"]'));
        InputTel.forEach(function (element) {
            element.setAttribute("pattern", "[+][0-9]{1}[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}");
        });
        Inputmask("+9(999)999-99-99").mask(InputTel);
    },
    // /inputMask
    ifie: function ifie() {
        var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;

        if (isIE11) {
            $("body").prepend('<p   class="browsehappy container">К сожалению, вы используете устаревший браузер. Пожалуйста, <a href="http://browsehappy.com/" target="_blank">обновите ваш браузер</a>, чтобы улучшить производительность, качество отображаемого материала и повысить безопасность.</p>');
        }
    },
    sendForm: function sendForm() {
        var gets = function () {
            var a = window.location.search;
            var b = new Object();
            var c;
            a = a.substring(1).split("&");

            for (var i = 0; i < a.length; i++) {
                c = a[i].split("=");
                b[c[0]] = c[1];
            }

            return b;
        }(); // form


        function getRecoveryInput($step, $data = {'phone': '', 'code': ''}) {
            var $result = '';
            var phone = '';
            var code = '';
            if ($data.phone !== undefined) {
                phone = $data.phone;
            }
            if ($data.code !== undefined) {
                code = $data.code;
            }
            switch ($step) {
                case 'phone':
                    $result = '<label>\n' +
                        '                    <span class="form-wrap__title">Телефон</span>\n' +
                        '                    <input class="form-wrap__input form-control"\n' +
                        '                           required type="tel" placeholder="" value="' + phone + '" name="login"/>\n' +
                        '                </label>';
                    break;
                case 'code':
                    $result = '<label>\n' +
                        '                    <span class="form-wrap__title">Код из смс</span>\n' +
                        '                    <input class="form-wrap__input form-control"\n' +
                        '                           required type="text" placeholder="" value="' + code + '" name="code"/>\n' +
                        '                </label>' +
                        '<input type="hidden" name="phone" value="' + phone + '">';
                    break;
                case 'password':
                    $result = '<label>\n' +
                        '                    <span class="form-wrap__title">Пароль</span>\n' +
                        '                    <input class="form-wrap__input form-control"\n' +
                        '                           required type="password" placeholder="" name="password"/>\n' +
                        '                </label>' +
                        '<label>\n' +
                        '                    <span class="form-wrap__title">Повторите пароль</span>\n' +
                        '                    <input class="form-wrap__input form-control"\n' +
                        '                           required type="password" placeholder="" name="password_confirmation"/>\n' +
                        '                </label>' +
                        '<input type="hidden" name="phone" value="' + phone + '">' +
                        '<input type="hidden" name="code" value="' + code + '">'
                    ;
                    break;
            }
            return $result;
        }

        $("form").submit(function (e) {
             if(!$(this).hasClass('dontSend')) {
                 e.preventDefault();
                 var $this = $(this);
                 var url = $(this).attr('action');
                 var action = $(this).find('[name="action"]').val();
                 var th = $(this);
                 var formData = new FormData();

                 if (formData) {

                     $this.find('input:not([type=submit]), select, textarea').each(function (i, el) {

                         var name = $(el).attr('name'),
                             val = $(el).val();

                         if ($(el)[0].files && $(el)[0].files.length > 0) {

                             $.each($(el)[0].files, function (i1, file) {
                                 formData.append(name, file);
                             });

                         } else {
                             if($(el).attr('type') == 'radio' || $(el).attr('type') == 'checkbox'){
                                 if($(el).prop('checked') == true){
                                     formData.append(name, val);
                                 }
                             }else{
                                 formData.append(name, val);
                             }

                         }

                     });

                 } else {
                     formData = $('#test-js').serialize(); // На случай, если браузер не поддерживает интерфейс FormData
                 }

                 var data = th.serialize();
                 th.find('.utm_source').val(decodeURIComponent(gets['utm_source'] || ''));
                 th.find('.utm_term').val(decodeURIComponent(gets['utm_term'] || ''));
                 th.find('.utm_medium').val(decodeURIComponent(gets['utm_medium'] || ''));
                 th.find('.utm_campaign').val(decodeURIComponent(gets['utm_campaign'] || ''));
                 $this.find('.tqError').html('');
                 $.ajax({
                     url: url,
                     processData: false,
                     contentType: false,
                     type: 'POST',
                     data: formData,

                 }).done(function (data) {
                     switch (action) {
                         case 'login':
                             location.href = '/personal';
                             break;
                         case 'register':
                             location.href = '/personal';
                             break;
                         case 'logout':
                             location.href = '/';
                             break;
                         case 'recovery_password':
                             var recData = {};
                             data = JSON.parse(data);
                             if (data.status == 'success') {
                                 if (data.step != 'final') {
                                     if (data.phone) {
                                         recData['phone'] = data.phone;
                                     }
                                     if (data.code) {
                                         recData['code'] = data.code;
                                     }
                                     var step = getRecoveryInput(data.step, recData);
                                     $('#modal-recpass .input-recovery').html(step);
                                     $('#modal-recpass [name="step"]').val(data.step);
                                 } else {
                                     $.fancybox.close();
                                     $.fancybox.open({
                                         src: '#modal-signin',
                                         type: 'inline'
                                     });
                                 }
                             } else {
                                 $this.find('.tqError').html(data.message).css('color', 'red');
                             }
                             break;
                         default:
                             $.fancybox.close();
                             $.fancybox.open({
                                 src: '#modal-thanks',
                                 type: 'inline'
                             }); // window.location.replace("/thanks.html");
                             $('.add-file__filename').html('');

                             setTimeout(function () {
                                 // Done Functions
                                 th.trigger("reset"); // $.magnificPopup.close();
                                 // ym(53383120, 'reachGoal', 'zakaz');
                                 // yaCounter55828534.reachGoal('zakaz');
                             }, 4000);
                             break;
                     }

                 }).fail(function (data) {
                     $.each(data.responseJSON, function (i, v) {
                         $this.find('.tqError').append(v + '<br/>');
                     });
                     $this.find('.tqError').css('color', 'red');
                     console.log(data.responseJSON)
                 });

             }
        });
    },
    heightwindow: function heightwindow() {
        // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
        var vh = window.innerHeight * 0.01; // Then we set the value in the --vh custom property to the root of the document

        document.documentElement.style.setProperty('--vh', "".concat(vh, "px")); // We listen to the resize event

        window.addEventListener('resize', function () {
            // We execute the same script as before
            var vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
        }, {
            passive: true
        });
    },
    animateScroll: function animateScroll() {
        // листалка по стр
        $(" .top-nav li a, .scroll-link").click(function () {
            var elementClick = $(this).attr("href");
            var destination = $(elementClick).offset().top;
            $('html, body').animate({
                scrollTop: destination
            }, 1100);
            return false;
        });
    }
};
var $ = jQuery;

function eventHandler() {
    var _defaultSl;

    JSCCommon.modalCall();
    JSCCommon.tabscostume('tabs'); //JSCCommon.mobileMenu();

    JSCCommon.inputMask();
    JSCCommon.ifie();
    JSCCommon.sendForm(); //JSCCommon.heightwindow();

    JSCCommon.animateScroll();
    JSCCommon.CustomInputFile(); // JSCCommon.CustomInputFile();
    // добавляет подложку для pixel perfect

    var screenName;
    screenName = '07.jpg';
    screenName ? $(".main-wrapper").after("<div class=\"pixel-perfect\" style=\"background-image: url(screen/".concat(screenName, ");\"></div>")) : ''; // /добавляет подложку для pixel perfect

    function whenResize() {
        var topH = document.querySelector('header').scrollHeight;
        var stickyElement = document.querySelector('.top-nav');

        window.onscroll = function () {
            if ($(window).scrollTop() > topH) {
                stickyElement.classList.add('fixed');
            } else {
                stickyElement.classList.remove('fixed');
            }
        };
    }

    window.addEventListener('resize', function () {
        whenResize();
    }, {
        passive: true
    });
    whenResize();
    var defaultSl = (_defaultSl = {
        spaceBetween: 0,
        lazy: {
            loadPrevNext: true
        },
        watchOverflow: true
    }, _defineProperty(_defaultSl, "spaceBetween", 0), _defineProperty(_defaultSl, "loop", true), _defineProperty(_defaultSl, "navigation", {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    }), _defineProperty(_defaultSl, "pagination", {
        el: ' .swiper-pagination',
        type: 'bullets',
        clickable: true // renderBullet: function (index, className) {
        // 	return '<span class="' + className + '">' + (index + 1) + '</span>';
        // }

    }), _defaultSl);
    var swiper4 = new Swiper('.sBanners__slider--js', _objectSpread(_objectSpread({}, defaultSl), {}, {
        slidesPerView: 'auto',
        freeMode: true,
        loopFillGroupWithBlank: true,
        touchRatio: 0.2,
        slideToClickedSlide: true,
        freeModeMomentum: true
    })); // modal window
    //luckyone Js
    //svg

    $('img.img-svg-js').each(function () {
        var $img = $(this);
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');
        $.get(imgURL, function (data) {
            // Get the SVG tag, ignore the rest
            var $svg = $(data).find('svg'); // Add replaced image's classes to the new SVG

            if (typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass + ' replaced-svg');
            } // Remove any invalid XML tags as per http://validator.w3.org


            $svg = $svg.removeAttr('xmlns:a'); // Check if the viewport is set, if the viewport is not set the SVG wont't scale.

            if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'));
            } // Replace image with new SVG


            $img.replaceWith($svg);
        }, 'xml');
    }); //stop sidebar before footer

    function fixedStip() {
        var footer = document.querySelector('.footer');
        if (!footer) return;
        var fixedStrip = document.querySelector('.sAside');
        if (!fixedStrip) return;

        window.addEventListener("scroll", toggleFixedStrip.bind(undefined, fixedStrip), {
            passive: true
        });

        window.addEventListener('resize', function () {
            if (window.matchMedia("(max-width: 1280px)").matches) {

                $(fixedStrip).removeClass('absolute');
                fixedStrip.style.top = '';
            }
        });

        window.setTimeout(function () {
            toggleFixedStrip(fixedStrip);
        }, 0);
    }


    fixedStip();

    function toggleFixedStrip(fixedStrip) {
        var footerTop = $('.footer')[0].getBoundingClientRect().top + $(window)['scrollTop']();
        var windowHeight = calcVh(100); //console.log(footerTop);

        if (windowHeight + window.scrollY > footerTop && !window.matchMedia("(max-width: 1280px)").matches) {
            $(fixedStrip).addClass('absolute');
            fixedStrip.style.top = footerTop - fixedStrip.offsetHeight + 'px';
        } else {
            $(fixedStrip).removeClass('absolute');
            fixedStrip.style.top = '';
        }
    }

    function calcVh(v) {
        var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        return v * h / 100;
    } // custom select


    $('.custom-select2').select2({
        minimumResultsForSearch: Infinity,
        dropdownCssClass: "drop-down-full-grey"
    }); //mob menu

    $('.burger-js').click(function () {
        $(this).toggleClass('active');
        $('body').toggleClass('fixed-on-filter-js');
        $('.sAside').toggleClass('active');
    });
    $(window).resize(function () {
        if (window.matchMedia("(min-width: 1280px)").matches) {
            $('.burger-js').removeClass('active');
            $('body').removeClass('fixed-on-filter-js');
            $('.sAside').removeClass('active');
        }
    }); //map

    $('.hide-map-js, .show-map-js').click(function () {
        $('.hide-map-js, .show-map-js, .map-block-js').toggleClass('active');
    }); //catalog item slider

    $(".catalog-row__slider").each(function () {
        var articalsSlider = new Swiper($(this).find(".catalog-item-sl-js"), {
            slidesPerView: 1,
            spaceBetween: 10,
            observer: true,
            observeParents: true,
            loop: true,
            //lazy
            lazy: {
                loadPrevNext: true,
                loadPrevNextAmount: 2
            },
            //nav
            navigation: {
                nextEl: $(this).find('.catalog-item-next'),
                prevEl: $(this).find('.catalog-item-prev')
            },
            //pugination
            pagination: {
                el: $(this).find('.catalog-item-pugin-js'),
                clickable: true
            }
        });
    }); //

    var dayInCompanySlider = new Swiper('.day-in-company-js', {
        effect: 'coverflow',
        spaceBetween: 0,
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        //breakpoints
        breakpoints: {
            //xxl
            1525: {
                coverflowEffect: {
                    rotate: 0,
                    stretch: -364,
                    depth: 1350,
                    modifier: 1,
                    slideShadows: false
                }
            },
            //xl
            1280: {
                coverflowEffect: {
                    rotate: 0,
                    stretch: -344,
                    depth: 1350,
                    modifier: 1,
                    slideShadows: false
                }
            },
            //lg
            992: {
                coverflowEffect: {
                    rotate: 0,
                    stretch: -305,
                    depth: 1350,
                    modifier: 1,
                    slideShadows: false
                }
            }
        },
        loop: true,
        //lazy
        lazy: {
            loadPrevNext: true,
            loadPrevNextAmount: 4
        },
        //nav
        navigation: {
            nextEl: $(this).find('.day-in-company-next'),
            prevEl: $(this).find('.day-in-company-prev')
        },
        //pugination
        pagination: {
            el: $(this).find('.day-in-company-pugin'),
            clickable: true
        }
    }); //

    var employeeSlider = new Swiper('.employee-slider-js', {
        effect: 'coverflow',
        spaceBetween: 0,
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        slideToClickedSlide: true,
        //breakpoints
        breakpoints: {
            //lg
            992: {
                coverflowEffect: {
                    rotate: 0,
                    stretch: -110,
                    depth: 460,
                    modifier: 1,
                    slideShadows: false
                }
            },
            //md
            768: {
                coverflowEffect: {
                    rotate: 0,
                    stretch: -30,
                    depth: 160,
                    modifier: 1,
                    slideShadows: false
                }
            },
            //md
            576: {
                coverflowEffect: {
                    rotate: 0,
                    stretch: -30,
                    depth: 160,
                    modifier: 1,
                    slideShadows: false
                }
            }
        },
        loop: true,
        //lazy
        lazy: {
            loadPrevNext: true,
            loadPrevNextAmount: 4
        },
        //nav
        navigation: {
            nextEl: $(this).find('.employee-next'),
            prevEl: $(this).find('.employee-prev')
        },
        //pugination
        pagination: {
            el: $(this).find('.employee-pugin'),
            clickable: true
        }
    }); //office slider

    var officeSlider = new Swiper('.office-slider-js', {
        slidesPerView: 'auto',
        breakpoints: {
            992: {
                spaceBetween: 30
            },
            320: {
                spaceBetween: 20
            }
        },
        //lazy
        lazy: {
            loadPrevNext: true,
            loadPrevNextAmount: 5
        },
        //pugination
        pagination: {
            el: $(this).find('.office-slider-pugin'),
            clickable: true
        }
    }); //partners slider

    var partners = new Swiper('.partners-slider-js', {
        slidesPerView: 'auto',
        loop: true,
        breakpoints: {
            992: {
                spaceBetween: 30
            },
            320: {
                spaceBetween: 25
            }
        },
        //lazy
        lazy: {
            loadPrevNext: true,
            loadPrevNextAmount: 7
        },
        //nav
        navigation: {
            nextEl: $(this).find('.partners-next'),
            prevEl: $(this).find('.partners-prev')
        },
        //pugination
        pagination: {
            el: $(this).find('.partners-slider-pugin'),
            clickable: true
        }
    });
    var reviewSlider = new Swiper('.review-slider-js', {
        spaceBetween: 30,
        slidesPerView: 1,
        // grabCursor: true,
        // centeredSlides: true,
        //breakpoints
        breakpoints: {
            //lg
            992: {
                slidesPerView: 3
            },
            768: {
                slidesPerView: 2
            }
        },
        loop: true,
        //lazy
        lazy: {
            loadPrevNext: true,
            loadPrevNextAmount: 2
        },
        //nav
        navigation: {
            nextEl: $(this).find('.review-slider-next'),
            prevEl: $(this).find('.review-slider-prev')
        },
        //pugination
        pagination: {
            el: $(this).find('.review-slider-pugin'),
            clickable: true
        }
    }); // rangle sliders for main page

    function currencyFormat(num) {


        var current = 1;


        if((num ^ 0) === num) {
            current = 0;
        }



        return num.toFixed(current).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ');
    }

    $(".range-wrap").each(function () {
        var _this = $(this);

        var $range = _this.find(".slider-js");

        var $inputFrom = _this.find(".input_from");

        var $inputTo = _this.find(".input_to");

        var instance,
            from,
            to,
            min = $range.data('min'),
            max = $range.data('max');



        var step = 1;


        if (min !== parseInt(min, 10)) {
            step = 0.01;
        }

        if (max !== parseInt(max, 10)) {
            step = 0.01;
        }


        $range.ionRangeSlider({
            skin: "round",
            type: "double",
            step: step,
            grid: false,
            grid_snap: false,
            hide_min_max: true,
            hide_from_to: true,
            onStart: updateInputs,
            onChange: updateInputs,
            onFinish: updateInputsSelections
        });


        instance = $range.data("ionRangeSlider");

        function updateInputs(data) {
            from = data.from;
            to = data.to;
            $inputFrom.prop("value", currencyFormat(from));
            $inputTo.prop("value", currencyFormat(to)); // InputFormat();



        }





        function updateInputsSelections(data){
            from = data.from;
            to = data.to;
            $inputFrom.prop("value", currencyFormat(from));
            $inputTo.prop("value", currencyFormat(to)); // InputFormat();
            $inputFrom.change();
        }


        $inputFrom.on("change input ", function () {
            var val = +$(this).prop("value").replace(/\s/g, ''); // validate

            if (val < min) {
                val = min;
            } else if (val > to) {
                val = to;
            }

            instance.update({
                from: val
            });
            $(this).prop("value", currencyFormat(val));
        });


        $inputTo.on("change input ", function () {
            var val = +$(this).prop("value").replace(/\s/g, ''); // validate

            if (val < from) {
                val = from;
            } else if (val > max) {
                val = max;
            }

            instance.update({
                to: val
            });
            $(this).prop("value", currencyFormat(val));
        });


        if($($range).attr('data-min-value') && $($range).attr('data-min-value').length > 0) {

            var fromIn = ($range).attr('data-min-value').trim();
            fromIn = fromIn.replace(/\s/g, '');
            instance.update({
                from: fromIn
            });


            $inputFrom.prop("value", currencyFormat(parseFloat(fromIn)));

        }

        if($($range).attr('data-max-value') && $($range).attr('data-max-value').length > 0) {

            var toIn = ($range).attr('data-max-value').trim();
            toIn = toIn.replace(/\s/g, '');
            instance.update({
                to: toIn
            });

            $inputTo.prop("value", currencyFormat(parseFloat(toIn)));


        }



    }); // widgets custom js


    //  $('.pop-up-header-js').click(function () {
    $(document).on('click', '.pop-up-header-js', function () {
        var self = this;
        document.body.removeEventListener('click', widgetsPopupsMissclick);
        $(this).toggleClass('active');
        $(this.parentElement).find('.pop-up-content-js').fadeToggle(function () {
            $(this).toggleClass('active');
        }); // close everything but this pop up, dont let to be opened 2 popup at the same time

        if (window.matchMedia("(max-width: 992px)").matches) {
            //self
            var allWidgetsPopups = document.querySelectorAll('.pop-up-wrap-js');

            var _iterator = _createForOfIteratorHelper(allWidgetsPopups),
                _step;

            try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    var wrap = _step.value;
                    var header = wrap.querySelector('.pop-up-header-js');
                    var content = wrap.querySelector('.pop-up-content-js');

                    if (self !== header) {
                        $(header).removeClass('active');
                        $(content).slideUp(function () {
                            $(this).removeClass('active');
                        });
                    }
                }
            } catch (err) {
                _iterator.e(err);
            } finally {
                _iterator.f();
            }
        } //


        event.stopPropagation();
        document.body.addEventListener('click', widgetsPopupsMissclick);
    }); //fix



    $(document).on('click', '.sort-btn-js', function () {
    var self = this;
    document.body.removeEventListener('click', widgetsPopupsMissclick);
    $(this).toggleClass('active');
    $(this.parentElement).find('.sort-popup-content-js').fadeToggle(function () {
        $(this).toggleClass('active');
    }); // close everything but this pop up, dont let to be opened 2 popup at the same time

    // if (window.matchMedia("(max-width: 992px)").matches) {
        //self
        var allWidgetsPopups = document.querySelectorAll('.filters-wrap-js');

        var _iterator = _createForOfIteratorHelper(allWidgetsPopups),
            _step;

        try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var wrap = _step.value;
                var header = wrap.querySelector('.sort-btn-js');
                var content = wrap.querySelector('.sort-popup-content-js');

                if (self !== header) {
                    $(header).removeClass('active');
                    $(content).slideUp(function () {
                        $(this).removeClass('active');
                    });
                }
            }
        } catch (err) {
            _iterator.e(err);
        } finally {
            _iterator.f();
        }
    // } 
    //


    event.stopPropagation();
    document.body.addEventListener('click', widgetsPopupsMissclick);
}); //fix


$(document).on('click', '.mob-sort-btn-js', function () {
    var self = this;
    document.body.removeEventListener('click', widgetsPopupsMissclick);
    $(this).toggleClass('active');
    $(this.parentElement).find('.mob-sort-popup-content-js').fadeToggle(function () {
        $(this).toggleClass('active');
    }); // close everything but this pop up, dont let to be opened 2 popup at the same time

    // if (window.matchMedia("(max-width: 992px)").matches) {
        //self
        var allWidgetsPopups = document.querySelectorAll('.mob-filters-wrap-js');

        var _iterator = _createForOfIteratorHelper(allWidgetsPopups),
            _step;

        try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var wrap = _step.value;
                var header = wrap.querySelector('.mob-sort-btn-js');
                var content = wrap.querySelector('.mob-sort-popup-content-js');

                if (self !== header) {
                    $(header).removeClass('active');
                    $(content).slideUp(function () {
                        $(this).removeClass('active');
                    });
                }
            }
        } catch (err) {
            _iterator.e(err);
        } finally {
            _iterator.f();
        }
    // } 
    //


    event.stopPropagation();
    document.body.addEventListener('click', widgetsPopupsMissclick);
}); //fix



    window.addEventListener('resize', function () {
        if (window.matchMedia("(max-width: 768px)").matches) {
            document.body.removeEventListener('click', widgetsPopupsMissclick);
            openWidgetsPopup();
        } else {
            closeWidgetsPopup();
        } //


        // $('.more-filters-btn-js').removeClass('active');
        // $('.more-filters-cont').slideUp();
    });

    function widgetsPopupsMissclick() {
        if (event.target.closest('.pop-up-wrap-js')) return;
        closeWidgetsPopup();
        document.body.removeEventListener('click', widgetsPopupsMissclick);
    }

    function closeWidgetsPopup() {
        //close all popups
        var allWidgetsPopups = document.querySelectorAll('.pop-up-wrap-js');

        var _iterator2 = _createForOfIteratorHelper(allWidgetsPopups),
            _step2;

        try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var wrap = _step2.value;
                var header = wrap.querySelector('.pop-up-header-js');
                var content = wrap.querySelector('.pop-up-content-js');
                $(header).removeClass('active');
                $(content).slideUp(function () {
                    $(this).removeClass('active');
                });
            }
        } catch (err) {
            _iterator2.e(err);
        } finally {
            _iterator2.f();
        }
    }

    function openWidgetsPopup() {
        //close all popups
        var allWidgetsPopups = document.querySelectorAll('.pop-up-wrap-js');

        var _iterator3 = _createForOfIteratorHelper(allWidgetsPopups),
            _step3;

        try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var wrap = _step3.value;
                var header = wrap.querySelector('.pop-up-header-js');
                var content = wrap.querySelector('.pop-up-content-js');
                $(header).addClass('active');
                $(content).slideDown(function () {
                    $(this).addClass('active');
                });
            }
        } catch (err) {
            _iterator3.e(err);
        } finally {
            _iterator3.f();
        }
    } //for more filters btn


    $('.more-filters-btn-js').click(function () {
        event.preventDefault();
        $(this).toggleClass('active');
        $('.more-filters-cont').slideToggle();
    }); //multiple select

    $('.multiple-select-js').select2({
        dropdownCssClass: "checkbox-list"
    }); //prod card slider

    var prodCardThumb = new Swiper('.prod-card-thumb-js', {
        slidesPerView: 'auto',
        spaceBetween: 10,
        lazy: {
            loadPrevNext: true,
            loadPrevNextAmount: 9
        }
    });
    var prodCardSlider = new Swiper('.prod-card-slider-js', {
        slidesPerView: 'auto',
        spaceBetween: 10,
        loop: true,
        //
        navigation: {
            nextEl: '.prod-card-next',
            prevEl: '.prod-card-prev'
        },
        thumbs: {
            swiper: prodCardThumb
        },
        lazy: {
            loadPrevNext: true,
            loadPrevNextAmount: 2
        },
        //pagination
        pagination: {
            el: $(this).find('.prod-card-pugin-js'),
            clickable: true
        }
    }); //popular slider

    var popularSlider = new Swiper('.popular-objects-slider', {
        spaceBetween: 30,
        slidesPerView: 'auto',
        //loop: true,
        //nav
        navigation: {
            nextEl: $(this).find('.popular-slider-next'),
            prevEl: $(this).find('.popular-slider-prev')
        },
        //pugination
        pagination: {
            el: $(this).find('.popular-slider-pugin'),
            clickable: true
        }
    }); //calc credit js

    $('.credit-show-js, .credit-hide-js').click(function () {
        $('.credit-block-js, .credit-show-js').slideToggle(function () {
            $(this).toggleClass('visiable');
        });
    }); //range

    $(".range-slider-single-js").ionRangeSlider({
        skin: "round",
        //type: "double",
        grid: false,
        grid_snap: false,
        hide_min_max: true //hide_from_to: true,
        //onStart: updateInputs,
        //onChange: updateInputs,
        //onFinish: updateInputs

    }); //instance = $range.data("ionRangeSlider");
    //11,12 .examples-slider-js

    var examplesThumb = new Swiper('.examples-thumb-js', {
        slidesPerView: 'auto',
        spaceBetween: 30,
        lazy: {
            loadPrevNext: true,
            loadPrevNextAmount: 9
        }
    });
    var examplesSlider = new Swiper('.examples-slider-js', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        //
        navigation: {
            nextEl: '.examples-next',
            prevEl: '.examples-prev'
        },
        thumbs: {
            swiper: examplesThumb
        },
        lazy: {
            loadPrevNext: true,
            loadPrevNextAmount: 2
        },
        //pagination
        pagination: {
            el: $(this).find('.example-pugin'),
            clickable: true
        }
    }); //scroll-vanilla-js

    function smoothScroll(qSelector) {
        var elements = document.querySelectorAll(qSelector);
        if (elements.length === 0) return;

        var _iterator4 = _createForOfIteratorHelper(elements),
            _step4;

        try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var elem = _step4.value;
                elem.addEventListener('click', function () {
                    event.preventDefault();
                    var destinyID = this.getAttribute('href'); //this.attributes.href.nodeValue

                    var destinyElem = document.querySelector(destinyID);
                    if (!destinyElem) return;
                    var destinyTop = getCoords(destinyElem).top;
                    window.scrollTo({
                        top: destinyTop - 100,
                        //consider top nav height
                        behavior: "smooth"
                    });
                });
            }
        } catch (err) {
            _iterator4.e(err);
        } finally {
            _iterator4.f();
        }
    }

    smoothScroll('.scroll-vanilla-js');

    function getCoords(elem) {
        // crossbrowser version
        var box = elem.getBoundingClientRect();
        var body = document.body;
        var docEl = document.documentElement;
        var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
        var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;
        var clientTop = docEl.clientTop || body.clientTop || 0;
        var clientLeft = docEl.clientLeft || body.clientLeft || 0;
        var top = box.top + scrollTop - clientTop;
        var left = box.left + scrollLeft - clientLeft;
        return {
            top: Math.round(top),
            left: Math.round(left)
        };
    } //prod card description js


    $('.read-more-btn-js').click(function () {
        $(this).fadeOut(function () {
            $('.desctiption-txt-js').addClass('active');
        });
    }); //your city js

    $('.location-link-js').click(function () {
        //prevent multiple listeners
        document.body.removeEventListener('click', locationPupUpMissclick); //regular toggle

        $(this.parentElement).find('.your-city').fadeToggle(function () {
            $(this).toggleClass('active');
        }); //tiny bug fix

        event.stopPropagation(); //close on missclick

        document.body.addEventListener('click', locationPupUpMissclick);
    }); //close on btn clicks

    $('.your-city__yes-btn, .your-city__no-btn').click(function () {
        $(this.closest('.your-city')).fadeOut(function () {
            $(this).removeClass('active');
        });
    }); //close on missclick

    function locationPupUpMissclick() {
        if (!event.target.closest('.your-city')) {
            document.body.removeEventListener('click', locationPupUpMissclick);
            closeAllLocationPopUps();
        }
    } //close on resize, scroll


    window.addEventListener('resize', closeAllLocationPopUps, {
        passive: true
    });
    window.addEventListener('scroll', closeAllLocationPopUps, {
        passive: true
    });

    function closeAllLocationPopUps() {
        $('.your-city').fadeOut(function () {
            $(this).removeClass('active');
        });
    } //end luckyone JS

}

if (document.readyState !== 'loading') {
    eventHandler();
} else {
    document.addEventListener('DOMContentLoaded', eventHandler);
}

function number_format(number, decimals, dec_point, thousands_sep) {
    number = number * 1;//makes sure number is numeric value
    var str = number.toFixed(decimals ? decimals : 0).toString().split('.');
    var parts = [];
    for (var i = str[0].length; i > 0; i -= 3) {
        parts.unshift(str[0].substring(Math.max(0, i - 3), i));
    }
    str[0] = parts.join(thousands_sep ? thousands_sep : ',');
    return str.join(dec_point ? dec_point : '.');
}

function calcCredit() {
    var S = parseFloat($('[name=credit_price]').val() - $('[name=own_funds]').val());
    var r = parseFloat($('[name=percent]').val() / 100 / 12);
    var n = parseFloat($('[name=credit_time]').val());
    var tempPow = parseFloat((1 + r) ** n);
    var tempChislitel = parseFloat(r * tempPow);
    var tempZnamenatel = parseFloat(tempPow - 1);
    var tempDrob = parseFloat(tempChislitel / tempZnamenatel);
    var summCredit = parseFloat(S * tempDrob);
    $('.sProdCard__credit-res-txt').html(number_format(summCredit, '2', ',', ' ') + ' ₽ / мес');
}

$(document).on('change', '.irs-hidden-input', function () {
    calcCredit();
});

$(document).ready(function () {
    calcCredit();
});

$(document).on('change','#modal-review .rating__item input',function () {
   let $this = $(this),
       val = $this.val();
    $this.closest('.rating').attr('data-total-value',val);
});
$(document).on('mouseover','#modal-review .rating__item',function () {
   let $this = $(this),
       val = $this.data('item-value');
    $this.closest('.rating').attr('data-total-value',val);
});
$(document).on('mouseout','#modal-review .rating',function () {
   let $this = $(this),
       val = $this.find('input:checked').val()>0?$this.find('input:checked').val():0;
    $this.attr('data-total-value',val);
});

$(document).ready(function () {
    $("#modal-hello").fancybox({
        'overlayShow': true
    }).trigger('click');
});