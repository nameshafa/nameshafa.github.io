(window.webpackJsonp=window.webpackJsonp||[]).push([[18,6],{288:function(t,e,n){"use strict";n.r(e);var l={props:{bgUrl:{type:String,default:""},lists:{type:Array,required:!0,default:function(){return[]}},title:{type:String,default:""},desc:{type:String,default:""}},data:function(){return{screenWidth:0}},mounted:function(){var t=this;window.addEventListener("resize",(function(e){t.screenWidth=document.body.clientWidth})),this.screenWidth=screen.width}},r=n(10),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:t.bgUrl,expression:"bgUrl",arg:"background-image"}],staticClass:"relative banner banner-parallax"},[n("div",{staticClass:"banner--overlay"}),t._v(" "),n("div",{staticClass:"w-full h-full relative flex items-center"},[n("div",{staticClass:"container container-lg md:px-12 xl:px-8 banner-text text-white"},[n("ul",{staticClass:"breadcrumb list-none flex mb-2 md:mb-4"},t._l(t.lists,(function(e,i){return n("li",{key:"breadcrumb-"+i},[n("nuxt-link",{class:{"font-bold":e.activeLink},attrs:{to:e.link}},[t._v("\n            "+t._s(e.text)+"\n          ")])],1)})),0),t._v(" "),n("h1",{staticClass:"font-bold text-28 md:text-3xl lg:text-42"},[t._v("\n        "+t._s(t.title)+"\n      ")]),t._v(" "),n("p",{staticClass:"hidden md:block xl:text-16 -mt-4",staticStyle:{"max-width":"536px","white-space":"pre-line"}},[t._v("\n        "+t._s(t.desc)+"\n      ")])])])])}),[],!1,null,null,null);e.default=component.exports},297:function(t,e,n){"use strict";(function(t){function l(t){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function o(t){return function(t){if(Array.isArray(t)){for(var i=0,e=new Array(t.length);i<t.length;i++)e[i]=t[i];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.d(e,"a",(function(){return v}));var c=function(){function t(e,n,l){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.el=e,this.observer=null,this.frozen=!1,this.createObserver(n,l)}var e,n,l;return e=t,(n=[{key:"createObserver",value:function(t,e){var n=this;if(this.observer&&this.destroyObserver(),!this.frozen){var l;if(this.options="function"==typeof(l=t)?{callback:l}:l,this.callback=function(t,e){n.options.callback(t,e),t&&n.options.once&&(n.frozen=!0,n.destroyObserver())},this.callback&&this.options.throttle){var r=(this.options.throttleOptions||{}).leading;this.callback=function(t,e){var n,l,r,c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},d=function(d){for(var m=arguments.length,v=new Array(m>1?m-1:0),f=1;f<m;f++)v[f-1]=arguments[f];if(r=v,!n||d!==l){var x=c.leading;"function"==typeof x&&(x=x(d,l)),n&&d===l||!x||t.apply(void 0,[d].concat(o(r))),l=d,clearTimeout(n),n=setTimeout((function(){t.apply(void 0,[d].concat(o(r))),n=0}),e)}};return d._clear=function(){clearTimeout(n),n=null},d}(this.callback,this.options.throttle,{leading:function(t){return"both"===r||"visible"===r&&t||"hidden"===r&&!t}})}this.oldResult=void 0,this.observer=new IntersectionObserver((function(t){var e=t[0];if(t.length>1){var l=t.find((function(t){return t.isIntersecting}));l&&(e=l)}if(n.callback){var r=e.isIntersecting&&e.intersectionRatio>=n.threshold;if(r===n.oldResult)return;n.oldResult=r,n.callback(r,e)}}),this.options.intersection),e.context.$nextTick((function(){n.observer&&n.observer.observe(n.el)}))}}},{key:"destroyObserver",value:function(){this.observer&&(this.observer.disconnect(),this.observer=null),this.callback&&this.callback._clear&&(this.callback._clear(),this.callback=null)}},{key:"threshold",get:function(){return this.options.intersection&&this.options.intersection.threshold||0}}])&&r(e.prototype,n),l&&r(e,l),t}();function d(t,e,n){var l=e.value;if(l)if("undefined"==typeof IntersectionObserver)console.warn("[vue-observe-visibility] IntersectionObserver API is not available in your browser. Please install this polyfill: https://github.com/w3c/IntersectionObserver/tree/master/polyfill");else{var r=new c(t,l,n);t._vue_visibilityState=r}}function m(t){var e=t._vue_visibilityState;e&&(e.destroyObserver(),delete t._vue_visibilityState)}var v={bind:d,update:function(t,e,n){var r=e.value;if(!function t(e,n){if(e===n)return!0;if("object"===l(e)){for(var r in e)if(!t(e[r],n[r]))return!1;return!0}return!1}(r,e.oldValue)){var o=t._vue_visibilityState;r?o?o.createObserver(r,n):d(t,{value:r},n):m(t)}},unbind:m};var f={version:"0.4.6",install:function(t){t.directive("observe-visibility",v)}},x=null;"undefined"!=typeof window?x=window.Vue:void 0!==t&&(x=t.Vue),x&&x.use(f)}).call(this,n(31))},302:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAzNiAzNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxjaXJjbGUgY3g9IjE4IiBjeT0iMTgiIHI9IjE3IiBzdHJva2U9IiNGRjY0ODkiIHN0cm9rZS13aWR0aD0iMiIvPg0KPHBhdGggZD0iTTE1LjAxMjMgMTEuOTAyNEwxNi4zMTQzIDIwLjUyMDNDMTYuNDc3IDIxLjQ5NTkgMTcuMjkwNiAyMi4zMDg5IDE4LjQyOTggMjIuMzA4OUMxOS40MDYyIDIyLjMwODkgMjAuMzgyNyAyMS40OTU5IDIwLjU0NTQgMjAuNTIwM0wyMS44NDc0IDExLjkwMjRDMjIuMTcyOCA5Ljc4ODU3IDIwLjU0NTQgOCAxOC40Mjk4IDhDMTYuMzE0MSA3Ljk5OTg5IDE0Ljg0OTUgOS43ODg1NyAxNS4wMTIzIDExLjkwMjRaIiBmaWxsPSIjRkY2NDg5Ii8+DQo8cGF0aCBkPSJNMTguNDI5OSAyOC4wMDAyQzE5LjUwODUgMjguMDAwMiAyMC4zODI4IDI3LjEyNjYgMjAuMzgyOCAyNi4wNDg5QzIwLjM4MjggMjQuOTcxMyAxOS41MDg1IDI0LjA5NzcgMTguNDI5OSAyNC4wOTc3QzE3LjM1MTQgMjQuMDk3NyAxNi40NzcxIDI0Ljk3MTMgMTYuNDc3MSAyNi4wNDg5QzE2LjQ3NzEgMjcuMTI2NiAxNy4zNTE0IDI4LjAwMDIgMTguNDI5OSAyOC4wMDAyWiIgZmlsbD0iI0ZGNjQ4OSIvPg0KPC9zdmc+DQo="},334:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"id":{"news_banner":{"banner":{"title":"Berita & Event","subtitle":"Pengumuman dan informasi seputar teraMedik."},"breadcrumbs":[{"text":"Beranda"},{"text":"Berita"}]},"news_lists":{"title":"Info Terbaru","loading":"Sedang memuat ...","no_data":"Ups, tidak ada berita yang tampil","all_loaded":"Semua berita sudah ditampilkan"}},"en":{"news_banner":{"banner":{"title":"News & Event","subtitle":"Announcements and information about teraMedik."},"breadcrumbs":[{"text":"Home"},{"text":"News"}]},"news_lists":{"title":"Latest Info","loading":"Loading more ...","no_data":"Oops, the news do not exist","all_loaded":"All news has been displayed"}}}'),delete t.options._Ctor}},453:function(t,e,n){"use strict";var l=n(334),r=n.n(l);e.default=r.a},499:function(t,e,n){"use strict";n.r(e);n(26),n(51),n(23),n(48),n(52),n(49),n(24);var l=n(3),r=n(297),o=n(288),c={directives:{ObserveVisibility:r.a},components:{banner:o.default},asyncData:function(){return{latestNews:[]}},data:function(){return{loading:!1,breadcrumbData:[{link:"/",text:this.$t("news_banner.breadcrumbs[0].text")},{link:"#",text:this.$t("news_banner.breadcrumbs[1].text"),activeLink:!0}],pagination_from:0}},mounted:function(){this.getNews(this.pagination_from)},methods:{openNewsDetail:function(t,e,title){null!==e||""!==e?this.$router.push("/".concat(this.$i18n.locale,"/news/").concat(t,"?slug=").concat(e)):this.$router.push("/".concat(this.$i18n.locale,"/news/").concat(t,"?slug=").concat(this.convertSlug(title)))},convertSlug:function(t){return t=t.toLowerCase().replace(/ /gi,"-")},lazyLoadNews:function(t){t&&(this.loading=!0,this.pagination_from+=10,this.getNews(this.pagination_from))},getNews:function(t){var e=this;return Object(l.a)(regeneratorRuntime.mark((function n(){var l;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,e.$news.getNews(t);case 3:l=n.sent,setTimeout((function(){l.forEach((function(t){e.latestNews.push(t)})),e.loading=!1}),500),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),alert(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))()}}},d=n(10),m=n(453),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("banner",{attrs:{"bg-url":"/images/banner/img-banner-news.webp",lists:t.breadcrumbData,title:t.$t("news_banner.banner.title"),desc:t.$t("news_banner.banner.subtitle")}}),t._v(" "),l("div",{staticClass:"w-full py-12 md:py-16 lg:py-72px"},[l("div",{staticClass:"container"},[l("div",{staticClass:"w-full md:w-9/12 mx-auto lg:w-full mb-4"},[l("h3",{staticClass:"mb-3 md:mb-5 text-18 md:text-24 font-bold"},[t._v("\n          "+t._s(t.$t("news_lists.title"))+"\n        ")]),t._v(" "),l("div",{staticClass:"flex flex-wrap -mx-3 md:-mx-4"},[t._l(t.latestNews.slice(0,1),(function(e,i){return l("a",{key:"home-headline-first-news-"+i,staticClass:"w-full lg:w-1/2 block px-3 md:px-4 mb-5 md:mb-8 cursor-pointer",on:{click:function(n){return t.openNewsDetail(e.id,e.slug,e.title)}}},[l("div",{staticClass:"w-full h-auto lg:h-full bg-white p-4 border border-border1 rounded-xl shadow-none transition-default hover:border-transparent hover:shadow-common-hover"},[l("img",{directives:[{name:"lazy",rawName:"v-lazy",value:void 0!==e.image?t.$checkImageFormats(e.image,!0):"",expression:"item.image !== undefined ? $checkImageFormats(item.image, true) : ''"}],staticClass:"w-full h-180px lg:h-320px xl:h-340px object-cover mb-4 md:mb-5 bg-secondary rounded-lg",attrs:{alt:"img-news"}}),t._v(" "),l("div",{staticClass:"px-3 mx:px-4 mb-3"},[l("div",{staticClass:"flex items-center text-12 lg:text-14"},[l("span",{staticClass:"font-semibold text-primary"},[t._v(t._s(e.tag))]),t._v(" "),l("span",{staticClass:"w-1 h-1 xl:w-2 xl:h-2 mx-2 md:mx-3 bg-border2 rounded-full"}),t._v(" "),l("span",{staticClass:"text-accent80"},[t._v(t._s(t.$convertDate(e.published_at)))])]),t._v(" "),l("div",[l("h5",{staticClass:"mb-3 md:mb-4 text-18 lg:text-24 font-bold line-clamp line-clamp-2"},[t._v("\n                    "+t._s(e.title)+"\n                  ")]),t._v(" "),l("p",{staticClass:"text-accent80 text-12 md:text-14 lg:text-15 line-clamp line-clamp-2"},[t._v("\n                    "+t._s(e.description)+"\n                  ")])])])])])})),t._v(" "),t.latestNews.length>1?l("div",{staticClass:"w-full lg:w-1/2 flex flex-wrap"},t._l(t.latestNews.slice(1,5),(function(e,i){return l("a",{key:"home-headline-news-"+i,staticClass:"w-1/2 block px-3 md:px-4 mb-5 md:mb-8 cursor-pointer",on:{click:function(n){return t.openNewsDetail(e.id,e.slug,e.title)}}},[l("div",{staticClass:"w-full h-auto flex flex-wrap items-start bg-white p-3 border border-border1 rounded-xl shadow-none transition-default hover:border-transparent hover:shadow-common-hover"},[l("img",{directives:[{name:"lazy",rawName:"v-lazy",value:void 0!==e.image?t.$checkImageFormats(e.image):"",expression:"item.image !== undefined ? $checkImageFormats(item.image) : ''"}],staticClass:"w-full h-80px md:h-100px xl:h-140px object-cover mb-2 bg-secondary rounded-lg",attrs:{alt:"img-news"}}),t._v(" "),l("div",{staticClass:"flex flex-column flex-wrap lg:px-2"},[l("div",{staticClass:"flex items-center text-10 xl:text-12 order-1"},[l("span",{staticClass:"font-semibold text-primary"},[t._v(t._s(e.tag))]),t._v(" "),l("span",{staticClass:"w-1 h-1 mx-2 md:mx-3 bg-border2 rounded-full"}),t._v(" "),l("span",{staticClass:"text-accent80"},[t._v(t._s(t.$convertDate(e.published_at)))])]),t._v(" "),l("h5",{staticClass:"mb-0 text-12 md:text-14 xl:text-15 font-bold order-2 line-clamp line-clamp-3"},[t._v("\n                    "+t._s(e.title)+"\n                  ")])])])])})),0):t._e()],2)]),t._v(" "),l("div",{staticClass:"md:-mx-12 lg:mx-0"},[t.latestNews.length>5?l("div",{staticClass:"flex flex-wrap lg:justify-center -mx-3 lg:-mx-4"},t._l(t.latestNews.slice(5),(function(e,i){return l("a",{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:i===t.latestNews.length-1&&t.lazyLoadNews,expression:" i === latestNews.length - 1 ? lazyLoadNews : false"}],key:"home-latest-news-"+i,staticClass:"w-full sm:w-1/2 lg:w-5/12 xl:w-1/3 block px-3 lg:px-4 mb-5 md:mb-8 cursor-pointer",on:{click:function(n){return t.openNewsDetail(e.id,e.slug,e.title)}}},[l("div",{staticClass:"w-full h-auto flex flex-row lg:flex-wrap bg-white p-3 lg:p-4 border border-border1 rounded-xl shadow-none transition-default hover:border-transparent hover:shadow-common-hover"},[l("img",{directives:[{name:"lazy",rawName:"v-lazy",value:void 0!==e.image?t.$checkImageFormats(e.image):"",expression:"item.image !== undefined ? $checkImageFormats(item.image) : ''"}],staticClass:"w-100px h-80px lg:w-full lg:h-180px object-cover lg:mb-5 bg-secondary rounded-lg",attrs:{alt:"img-news"}}),t._v(" "),l("div",{staticClass:"flex flex-column flex-wrap px-3 mx:px-4 ml-2 md:ml-0 lg:mb-3"},[l("div",{staticClass:"w-full flex items-center text-12 order-2 lg:order-1"},[l("span",{staticClass:"font-semibold text-primary"},[t._v(t._s(e.tag))]),t._v(" "),l("span",{staticClass:"w-1 h-1 mx-2 md:mx-3 bg-border2 rounded-full"}),t._v(" "),l("span",{staticClass:"text-accent80"},[t._v(t._s(t.$convertDate(e.published_at)))])]),t._v(" "),l("div",{staticClass:"w-full order-1 lg:order-2"},[l("h5",{staticClass:"mb-0 lg:mb-4 text-14 lg:text-18 font-bold leading-9 line-clamp line-clamp-2-to-3-lg"},[t._v("\n                    "+t._s(e.title)+"\n                  ")]),t._v(" "),l("p",{staticClass:"text-accent80 text-12 md:text-14 hide-to-box-lg line-clamp-3"},[t._v("\n                    "+t._s(e.description)+"\n                  ")])])])])])})),0):t._e(),t._v(" "),t.loading?l("div",{staticClass:"flex justify-center mt-4 md:mt-8"},[l("bounce-loader",{staticClass:"w-10 h-10 mr-4",attrs:{loading:t.loading,size:"32px",color:"#417AC9"}}),t._v(" "),l("p",{staticClass:"font-semibold text-accent80 text-14 md:text-18 mt-1 md:mt-0"},[t._v("\n            "+t._s(t.$t("news_lists.loading"))+"\n          ")])],1):!1===t.loading&&0===t.latestNews.length?l("div",{staticClass:"flex justify-center items-center mt-4 md:mt-8"},[l("img",{staticClass:"w-8 h-8 md:w-10 md:h-10 mr-6 md:mr-8",attrs:{src:n(302),alt:"datas have been loaded"}}),t._v(" "),l("p",{staticClass:"font-semibold text-accent80 text-14 md:text-18"},[t._v("\n            "+t._s(t.$t("news_lists.no_data"))+"\n          ")])]):l("div",{staticClass:"flex justify-center items-center mt-4 md:mt-8"},[l("img",{staticClass:"w-8 h-8 md:w-10 md:h-10 mr-6 md:mr-8",attrs:{src:n(191),alt:"datas have been loaded"}}),t._v(" "),l("p",{staticClass:"font-semibold text-accent80 text-14 md:text-18"},[t._v("\n            "+t._s(t.$t("news_lists.all_loaded"))+"\n          ")])])])])])],1)}),[],!1,null,null,null);"function"==typeof m.default&&Object(m.default)(component);e.default=component.exports;installComponents(component,{Banner:n(288).default})}}]);