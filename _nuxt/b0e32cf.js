(window.webpackJsonp=window.webpackJsonp||[]).push([[22,6,9],{287:function(t,e,n){"use strict";n.r(e);var l={props:{wrapperClass:{type:String,default:"text-center mb-6 md:mb-12"},smallTitle:{type:String,default:""},mainTitle:{type:String,default:""},subtitle:{type:String,default:""},subtitleClass:{type:String,default:"md:w-8/12 xl:w-5/12"}}},r=n(10),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"block",class:t.wrapperClass},[n("p",{staticClass:"text-12 md:text-16 uppercase font-bold text-primary tracking-widest"},[t._v("\n    "+t._s(t.smallTitle)+"\n  ")]),t._v(" "),n("h2",{staticClass:"text-20 md:text-28 font-bold"},[t._v("\n    "+t._s(t.mainTitle)+"\n  ")]),t._v(" "),t.subtitle?n("p",{staticClass:"w-full block mx-auto mt-2 text-14",class:t.subtitleClass},[t._v("\n    "+t._s(t.subtitle)+"\n  ")]):t._e()])}),[],!1,null,null,null);e.default=component.exports},288:function(t,e,n){"use strict";n.r(e);var l={props:{bgUrl:{type:String,default:""},lists:{type:Array,required:!0,default:function(){return[]}},title:{type:String,default:""},desc:{type:String,default:""}},data:function(){return{screenWidth:0}},mounted:function(){var t=this;window.addEventListener("resize",(function(e){t.screenWidth=document.body.clientWidth})),this.screenWidth=screen.width}},r=n(10),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:t.bgUrl,expression:"bgUrl",arg:"background-image"}],staticClass:"relative banner banner-parallax"},[n("div",{staticClass:"banner--overlay"}),t._v(" "),n("div",{staticClass:"w-full h-full relative flex items-center"},[n("div",{staticClass:"container container-lg md:px-12 xl:px-8 banner-text text-white"},[n("ul",{staticClass:"breadcrumb list-none flex mb-2 md:mb-4"},t._l(t.lists,(function(e,i){return n("li",{key:"breadcrumb-"+i},[n("nuxt-link",{class:{"font-bold":e.activeLink},attrs:{to:e.link}},[t._v("\n            "+t._s(e.text)+"\n          ")])],1)})),0),t._v(" "),n("h1",{staticClass:"font-bold text-28 md:text-3xl lg:text-42"},[t._v("\n        "+t._s(t.title)+"\n      ")]),t._v(" "),n("p",{staticClass:"hidden md:block xl:text-16 -mt-4",staticStyle:{"max-width":"536px","white-space":"pre-line"}},[t._v("\n        "+t._s(t.desc)+"\n      ")])])])])}),[],!1,null,null,null);e.default=component.exports},289:function(t,e,n){"use strict";var l=n(15),r=n(6),o=n(71),c=n(18),d=n(14),m=n(39),f=n(135),h=n(87),k=n(7),v=n(70),y=n(134).f,_=n(50).f,w=n(21).f,x=n(295).trim,C=r.Number,S=C.prototype,I="Number"==m(v(S)),N=function(t){var e,n,l,r,o,c,d,code,m=h(t,!1);if("string"==typeof m&&m.length>2)if(43===(e=(m=x(m)).charCodeAt(0))||45===e){if(88===(n=m.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(m.charCodeAt(1)){case 66:case 98:l=2,r=49;break;case 79:case 111:l=8,r=55;break;default:return+m}for(c=(o=m.slice(2)).length,d=0;d<c;d++)if((code=o.charCodeAt(d))<48||code>r)return NaN;return parseInt(o,l)}return+m};if(o("Number",!C(" 0o1")||!C("0b1")||C("+0x1"))){for(var j,z=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof z&&(I?k((function(){S.valueOf.call(n)})):"Number"!=m(n))?f(new C(N(e)),n,z):N(e)},A=l?y(C):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),E=0;A.length>E;E++)d(C,j=A[E])&&!d(z,j)&&w(z,j,_(C,j));z.prototype=S,S.constructor=z,c(r,"Number",z)}},290:function(t,e,n){var content=n(301);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(69).default)("072066f8",content,!0,{sourceMap:!1})},291:function(t,e,n){"use strict";n.r(e);n(289),n(23),n(48);var l=n(292),r=n.n(l),o=(n(293),n(294),{components:{"v-slick-carousel":r.a},props:{show:{type:Boolean,default:!1},currentSlide:{type:Number,default:0},datas:{type:Array,default:function(){return[]}}},data:function(){return{settings:{lazyLoad:"ondemand",arrows:!1,dots:!1,infinite:!1,fade:!0,speed:800,slidesToShow:1,slidesToScroll:1,initialSlide:0,autoplay:!1,centerMode:!1,adaptiveHeight:!0,responsive:[{breakpoint:1024,settings:{fade:!1}}]},currentSlideNo:0,zoomScale:1}},watch:{show:function(t){!0===t?0!==this.datas.length&&(this.currentSlideNo=this.currentSlide,this.goToCurrentSlide(this.currentSlide)):this.currentSlideNo=0}},mounted:function(){var t=this;0!==this.datas.length&&(this.currentSlideNo=this.currentSlide,this.goToCurrentSlide(this.currentSlide)),window.addEventListener("resize",(function(e){t.screenWidth=document.body.clientWidth})),this.screenWidth=screen.width,this.screenWidth>=768&&(this.zoomScale=1)},methods:{showPrev:function(){this.$refs.sliderGallery.prev()},showNext:function(){this.$refs.sliderGallery.next()},goToCurrentSlide:function(t){this.$refs.sliderGallery.goTo(t)},changeIndex:function(t,e){this.currentSlideNo=e},zoomIn:function(){var t=document.getElementById("gallery-slide-image-".concat(this.currentSlideNo)),e=t.style.transform;if(this.zoomScale<2.5){var n=e.replace(/scale\([0-9|.]*\)/,"scale(".concat(this.zoomScale+=.5,")"));t.style.transform=n}},zoomOut:function(){var t=document.getElementById("gallery-slide-image-".concat(this.currentSlideNo)),e=t.style.transform;if(this.zoomScale>1){var n=e.replace(/scale\([0-9|.]*\)/,"scale(".concat(this.zoomScale-=.5,")"));t.style.transform=n}}}}),c=(n(300),n(10)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("transition-group",{attrs:{name:"fade",target:"div",appear:""}},[l("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],key:"popup-gallery",staticClass:"fixed flex items-center justify-center h-screen z-50 top-0 w-full left-0 overflow-auto",staticStyle:{"background-color":"rgb(0 0 0 / 63%)"}},[l("div",{staticClass:"flex items-center lg:items-start justify-center w-full md:max-h-dialog"},[l("div",{staticClass:"w-full h-screen md:h-full p-2 md:p-4 lg:p-5 my-0 md:my-32 lg:mt-0 md:w-10/12 shadow-2xl bg-white"},[l("div",{staticClass:"flex justify-between md:justify-end items-center px-4 py-3 md:p-0 -mx-2 mb-2 md:mb-0"},[l("p",{staticClass:"md:hidden text-accent80 font-semibold mx-2"},[l("span",{staticClass:"font-bold text-primary"},[t._v("\n              "+t._s(t.currentSlideNo+1)+"\n            ")]),t._v(" / "+t._s(t.datas.length)+"\n          ")]),t._v(" "),l("div",{staticClass:"flex items-center"},[l("button",{staticClass:"md:hidden mx-3",class:{"cursor-not-allowed opacity-50":2.5===t.zoomScale},attrs:{disabled:2.5===t.zoomScale}},[l("img",{directives:[{name:"lazy",rawName:"v-lazy",value:n(298),expression:"require('~/static/icons/ic-zoom-in.svg')"}],staticClass:"w-6 h-6",attrs:{alt:"Zoom in"},on:{click:t.zoomIn}})]),t._v(" "),l("button",{staticClass:"md:hidden mx-3",class:{"cursor-not-allowed opacity-50":1===t.zoomScale},attrs:{disabled:1===t.zoomScale}},[l("img",{directives:[{name:"lazy",rawName:"v-lazy",value:n(299),expression:"require('~/static/icons/ic-zoom-out.svg')"}],staticClass:"w-6 h-6",attrs:{alt:"Zoom out"},on:{click:t.zoomOut}})]),t._v(" "),l("div",{staticClass:"relative z-2 md:w-40px md:h-40px flex justify-end md:justify-center items-center md:bg-white md:rounded-lg cursor-pointer ml-2 lg:mr-4 lg:-mb-8",on:{click:function(e){return t.$emit("close")}}},[l("svg",{attrs:{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[l("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M7.77822 8.17149C7.16454 8.78517 7.16454 9.78014 7.77822 10.3938L13.334 15.9496L7.77813 21.5055C7.16445 22.1192 7.16445 23.1142 7.77813 23.7278C8.39181 24.3415 9.38679 24.3415 10.0005 23.7278L15.5563 18.172L21.1122 23.7278C21.7259 24.3415 22.7209 24.3415 23.3346 23.7278C23.9482 23.1142 23.9482 22.1192 23.3346 21.5055L17.7787 15.9496L23.3345 10.3938C23.9482 9.78014 23.9482 8.78517 23.3345 8.17149C22.7208 7.55781 21.7258 7.55781 21.1121 8.17149L15.5563 13.7273L10.0006 8.17149C9.38687 7.55781 8.3919 7.55781 7.77822 8.17149Z",fill:"#417AC9","fill-opacity":"1"}})])])])]),t._v(" "),l("v-slick-carousel",t._b({ref:"sliderGallery",staticClass:"slick--default",on:{beforeChange:t.changeIndex}},"v-slick-carousel",t.settings,!1),t._l(t.datas,(function(e,i){return l("div",{key:"gallery-slide-"+i},[l("div",{staticClass:"w-full h-500px md:h-320px lg:h-500px"},[l("img",{staticClass:"popup__gallery__image w-full h-full object-contain transition-default",style:"transform: scale("+t.zoomScale+")",attrs:{id:"gallery-slide-image-"+i,src:e.image,alt:"gallery-image-"+i}})]),t._v(" "),e.caption?l("p",{staticClass:"italic text-center mt-4"},[t._v("\n              "+t._s(e.caption)+"\n            ")]):t._e()])})),0),t._v(" "),l("div",{staticClass:"hidden md:flex md:justify-between md:items-center px-5 mt-3"},[l("p",{staticClass:"text-accent80 font-semibold mx-2"},[l("span",{staticClass:"font-bold text-primary"},[t._v("\n              "+t._s(t.currentSlideNo+1)+"\n            ")]),t._v(" / "+t._s(t.datas.length)+"\n          ")]),t._v(" "),l("div",{staticClass:"md:flex -mx-3"},[l("button",{staticClass:"btn btn__nav btn__nav-prev mx-3",attrs:{type:"button"},on:{click:t.showPrev}}),t._v(" "),l("button",{staticClass:"btn btn__nav btn__nav-next mx-3",attrs:{type:"button"},on:{click:t.showNext}})])])],1)])])])}),[],!1,null,null,null);e.default=component.exports},295:function(t,e,n){var l=n(19),r="["+n(296)+"]",o=RegExp("^"+r+r+"*"),c=RegExp(r+r+"*$"),d=function(t){return function(e){var n=String(l(e));return 1&t&&(n=n.replace(o,"")),2&t&&(n=n.replace(c,"")),n}};t.exports={start:d(1),end:d(2),trim:d(3)}},296:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},298:function(t,e,n){t.exports=n.p+"img/ic-zoom-in.2f155de.svg"},299:function(t,e,n){t.exports=n.p+"img/ic-zoom-out.405f462.svg"},300:function(t,e,n){"use strict";n(290)},301:function(t,e,n){(e=n(68)(!1)).push([t.i,".slick--default .slick-dots,.slick--white .slick-dots{bottom:-40px;margin-top:1.5rem}.slick--default .slick-dots li,.slick--white .slick-dots li{width:1rem;height:1rem}.slick--default .slick-dots .slick-dots-item,.slick--white .slick-dots .slick-dots-item{width:100%;height:100%;border-width:2px;--border-opacity:1;border-radius:9999px}.slick--default .slick-dots .slick-dots-item{--border-opacity:1;border-color:#417ac9;border-color:rgba(65,122,201,var(--border-opacity))}.slick--white .slick-dots .slick-dots-item{--border-opacity:1;border-color:#fff;border-color:rgba(255,255,255,var(--border-opacity))}.slick--default .slick-dots .slick-active .slick-dots-item{--bg-opacity:1;background-color:#417ac9;background-color:rgba(65,122,201,var(--bg-opacity))}.slick--white .slick-dots .slick-active .slick-dots-item{--bg-opacity:1;background-color:#fff;background-color:rgba(255,255,255,var(--bg-opacity))}.slick--home .slick-dots{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;bottom:24px;margin-left:1.5rem;text-align:left}.slick--testimonial .slick-track{display:flex!important;align-items:stretch!important}.slick--testimonial .slick-slide{height:auto!important}.slick--testimonial .slick-slide div{min-height:100%!important}@media (min-width:768px){.slick--default .slick-dots,.slick--white .slick-dots{bottom:-48px;margin-top:2rem}.slick--default .slick-dots li,.slick--white .slick-dots li{width:14px;height:14px;margin-left:.5rem;margin-right:.5rem}.slick--home .slick-dots{bottom:40px;margin-left:4rem}}@media (min-width:1280px){.slick--home .slick-dots{margin-left:7.5rem}}.popup__gallery__image{transition-property:all;transition-duration:.5s;transition-timing-function:cubic-bezier(.4,0,.2,1);transform:scale(1)}",""]),t.exports=e},345:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"id":{"pacs_ecosystem":{"section_title":{"sm_title":"Ekosistem","title":"Ekosistem pada PACS"},"lists":[{"title":"Stuktur Sistem","points":[{"desc":"Ekstensibilitas tinggi, mudah beradaptasi dengan skala sistem"},{"desc":"Ketersediaan Tinggi, struktur redundan"},{"desc":"Server dan hard disk dapat ditambahkan setelah penerapan sistem"}]},{"title":"Penyimpanan Gambar","points":[{"desc":"Kecepatan kompresi yang berbeda dapat diatur untuk setiap modalitas"},{"desc":"Perutean otomatis berdasarkan informasi tag DICOM"},{"desc":"Konfigurasi lanjutan. Simpan hanya potongan tebal gambar CT"}]},{"title":"Managemen Sistem Untuk Web","points":[{"desc":"Konfigurasi, log, statistik, penggunaan disk tersedia dari browser web komputer mana pun di jaringan yang sama."}]},{"title":"Kerjasama Medis Regional / Telemedicine","points":[{"desc":"Ini memungkinkan pengelolaan gambar beberapa rumah sakit dalam 1 gambar server dari setiap rumah sakit dibuka / ditutup tergantung pada konfigurasi hak istimewa. Keamanan terjaga."},{"desc":"Integrasi sistem"},{"desc":"Daftar studi penampil gambar dapat diakses menggunakan URL. Ini memungkinkan integrasi yang mulus dari sistem lain seperti EMR"}]}]}},"en":{"pacs_ecosystem":{"section_title":{"sm_title":"Ecosystem","title":"Ecosystems of PACS"},"lists":[{"title":"System Structure","points":[{"desc":"High extensibility, adaptable to scales of system"},{"desc":"High Availability, redundant structure"},{"desc":"Server and hard disk can be added after system deployment"}]},{"title":"Image Storage","points":[{"desc":"Different compression rate can be set for each modality"},{"desc":"Auto routing based on DICOM tag information"},{"desc":"Advanced configuration “Kepp only thick slices of CT images"}]},{"title":"System Management from WEB","points":[{"desc":"Configuration, logs, statistics, disk usage are available from web browser of any computers on the same network"}]},{"title":"Regional Medical Cooperation / Telemedicine","points":[{"desc":"It enables managing images of multiple hospitals in 1 server images of each hospital is opened /closed depending on the configuration of previledges. Security is maintained."},{"desc":"System Integration"},{"desc":"Image viewer study list are accessible using URL. It enables smooth integration from other system like EMR"}]}]}}}'),delete t.options._Ctor}},346:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"id":{"pacs_overview":{"section_title":{"sm_title":"OVERVIEW","title":"Sekilas PACS teraMedik-IRAD"},"desc":"Dengan kemajuan teknologi maka terjadi digitalisasi perangkat pencitraan medis sehingga membuat banyak gambar medis diproduksi dalam proses kerja Rumah Sakit. Peran PACS / server gambar tidak hanya sebagai penyimpanan gambar medis saja tetapi sekarang diperlukan untuk menyediakan pengelolaan dan berbagi gambar medis yang mudah, dan dapat beradaptasi dengan berbagai persyaratan sistem.<br><br>PACS (Picture Archiving Communication System) / Server Gambar teraMedik-iRad® terus berkembang untuk mendukung pengurangan biaya untuk manajemen gambar medis yang kompleks serta mempercepat alur pelayanan untuk distribusi gambar medis di Rumah Sakit. Untuk dapat melakukan efisiensi maksimal dengan mengganti proses dari film menjadi gambar medis maka akan membuat akses cepat dan mudah ke gambar medis, dan memungkinkan pembangunan sistem distribusi gambar medis sehingga memenuhi berbagai kebutuhan di rumah sakit.<br><br>Dengan menggunakan standar DICOM dan teknologi jepang serta didukung pengalaman teraMedik dalam bisnis operasional di Rumah Sakit maka diharapkan penggunaan PACS teraMedik-IRAD diharapkan dapat menjawab kebutuhan digitalisasi pencitraan medis di Rumah/sakit atau institusi anda."}},"en":{"pacs_overview":{"section_title":{"sm_title":"OVERVIEW","title":"Overview of PACS teraMedik-IRAD"},"desc":"PACS teraMedik-IRAD at glance. <br><br>With the progress of digitalization of medical imaging devices, a large number of medical images are produced in daily workflow. The role of image server is not only a storage for images as in the past, but now it is required to provide easy management and sharing of images, and to be easily adaptable to a wide range of system requirements. <br><br>Infocom\'s Medical Image Server iRad®-IA keeps evolving to support reducing the cost for complex management of medical images. To accomplish enterprise filmless environment, it provides fast and easy access to images, and enables constructing a system that is highly extensible, and a system that meets various demands in entire hospital."}}}'),delete t.options._Ctor}},347:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"id":{"pacs_banner":{"banner":{"title":"teraMedik PACS","subtitle":"Solusi teknologi pengarsipan gambar hasil Radiologi\\nTerintegrasi dengan SIM-RS teraMedik"},"breadcrumbs":[{"text":"Beranda"},{"text":"Produk"},{"text":"PACS"}]}},"en":{"pacs_banner":{"banner":{"title":"teraMedik PACS","subtitle":"Radiology image archiving technology solutions \\nIntegrated with the teraMedik SIM-RS"},"breadcrumbs":[{"text":"Home"},{"text":"Product"},{"text":"PACS"}]}}}'),delete t.options._Ctor}},367:function(t,e,n){var content=n(477);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(69).default)("2b2caf52",content,!0,{sourceMap:!1})},386:function(t,e,n){"use strict";n.r(e);var l={components:{sectionTitle:n(287).default},data:function(){return{lists:[{number:"01",title:this.$t("pacs_ecosystem.lists[0].title"),points:this.$t("pacs_ecosystem.lists[0].points")},{number:"02",title:this.$t("pacs_ecosystem.lists[1].title"),points:this.$t("pacs_ecosystem.lists[1].points")},{number:"03",title:this.$t("pacs_ecosystem.lists[2].title"),points:this.$t("pacs_ecosystem.lists[2].points")},{number:"04",title:this.$t("pacs_ecosystem.lists[3].title"),points:this.$t("pacs_ecosystem.lists[3].points")}]}}},r=n(10),o=n(475),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-full pb-12 md:pb-16 lg:pb-72px"},[n("div",{staticClass:"container md:w-10/12 lg:w-8/12 xl:w-1/2"},[n("section-title",{attrs:{"small-title":t.$t("pacs_ecosystem.section_title.sm_title"),"main-title":t.$t("pacs_ecosystem.section_title.title")}}),t._v(" "),n("div",{staticClass:"flex flex-wrap flex-row justify-center -mx-4 md:-mx-5"},t._l(t.lists,(function(e,i){return n("div",{key:"pacs-ecosystem-"+i,staticClass:"w-full px-4 md:px-5 mb-4 lg:mb-8"},[n("div",{staticClass:"flex items-center ml-4 md:mb-4 md:ml-0"},[n("div",{staticClass:"italic text-primary70 text-48 md:text-72 font-bold mr-5 md:mr-6"},[t._v("\n            "+t._s(e.number)+"\n          ")]),t._v(" "),n("h4",{staticClass:"font-bold text-16 md:text-20"},[t._v("\n            "+t._s(e.title)+"\n          ")])]),t._v(" "),n("ul",{staticClass:"list__check"},t._l(e.points,(function(e,l){return n("li",{key:"pacs-ecosystem-"+i+"-desc-"+l},[t._v("\n            "+t._s(e.desc)+"\n          ")])})),0)])})),0)],1)])}),[],!1,null,null,null);"function"==typeof o.default&&Object(o.default)(component);e.default=component.exports;installComponents(component,{SectionTitle:n(287).default})},387:function(t,e,n){"use strict";n.r(e);var l=n(292),r=n.n(l),o=(n(293),n(294),n(287)),c=n(291),d={components:{sectionTitle:o.default,"v-slick-carousel":r.a,popupGallery:c.default},data:function(){return{currentSlideNo:0,showPopupShowcase:!1,settings:{lazyLoad:"ondemand",arrows:!1,dots:!1,infinite:!0,speed:800,slidesToShow:1,slidesToScroll:1,initialSlide:0,autoplay:!0,autoplaySpeed:8e3,pauseOnDotsHover:!0,pauseOnFocus:!0,pauseOnHover:!0},showcases:[{image:"/images/product/pacs/img-pacs-showcase-1.jpg"},{image:"/images/product/pacs/img-pacs-showcase-2.jpg"},{image:"/images/product/pacs/img-pacs-showcase-3.jpg"},{image:"/images/product/pacs/img-pacs-showcase-4.jpg"},{image:"/images/product/pacs/img-pacs-showcase-5.jpg"},{image:"/images/product/pacs/img-pacs-showcase-6.jpg"}]}},methods:{changeIndex:function(t){this.currentSlideNo=t},showPrev:function(){this.$refs.sliderPACSOverview.prev()},showNext:function(){this.$refs.sliderPACSOverview.next()}}},m=(n(476),n(10)),f=n(478),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"container py-12 md:py-16 lg:py-72px"},[n("section-title",{attrs:{"small-title":t.$t("pacs_overview.section_title.sm_title"),"main-title":t.$t("pacs_overview.section_title.title")}}),t._v(" "),n("div",{staticClass:"flex flex-wrap flex-column justify-center lg:flex-row -mx-4 md:-mx-6"},[n("div",{staticClass:"w-full md:w-10/12 lg:w-8/12 px-4 md:px-6 order-2"},[n("p",{staticClass:"text-14 xl:mr-6",domProps:{innerHTML:t._s(t.$t("pacs_overview.desc"))}})]),t._v(" "),n("div",{staticClass:"w-full md:w-10/12 lg:w-8/12 px-4 md:px-6 mb-10 order-1"},[n("div",{staticClass:"relative w-full h-full"},[n("v-slick-carousel",t._b({ref:"sliderPACSOverview",staticClass:"slick--default",on:{afterChange:t.changeIndex}},"v-slick-carousel",t.settings,!1),t._l(t.showcases,(function(t,i){return n("div",{key:"overview-slide-"+i,staticClass:"w-full h-220px md:h-320px lg:h-360px rounded-lg"},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.image,expression:"item.image"}],staticClass:"w-full h-full object-cover rounded-lg",attrs:{alt:"overview-image-"+i}})])})),0),t._v(" "),n("div",{staticClass:"relative z-2 flex justify-center items-center",staticStyle:{"margin-top":"-3.5rem"}},[n("div",{staticClass:"w-20 px-3 text-center bg-white90 text-primary"},[n("span",{staticClass:"font-bold"},[t._v("\n                "+t._s(t.currentSlideNo+1)+"\n              ")]),t._v(" "),n("span",[t._v("\n                 / \n              ")]),t._v(" "),n("span",[t._v(t._s(t.showcases.length))])])]),t._v(" "),n("div",{staticClass:"absolute z-20 inset-y-1/2 w-full flex justify-between"},[n("button",{staticClass:"btn btn__nav btn__nav-prev bg-white90 mx-4",attrs:{type:"button"},on:{click:t.showPrev}}),t._v(" "),n("button",{staticClass:"btn btn__nav btn__nav-next bg-white90 mx-4",attrs:{type:"button"},on:{click:t.showNext}})]),t._v(" "),n("button",{staticClass:"absolute z-20 right-0 top-0 mt-4 mr-4 btn btn__nav btn__nav-view bg-white90",on:{click:function(e){t.showPopupShowcase=!0}}})],1)])])],1),t._v(" "),n("popup-gallery",{attrs:{show:t.showPopupShowcase,datas:t.showcases,"current-slide":t.currentSlideNo},on:{close:function(e){t.showPopupShowcase=!1}}})],1)}),[],!1,null,null,null);"function"==typeof f.default&&Object(f.default)(component);e.default=component.exports;installComponents(component,{SectionTitle:n(287).default,PopupGallery:n(291).default})},475:function(t,e,n){"use strict";var l=n(345),r=n.n(l);e.default=r.a},476:function(t,e,n){"use strict";n(367)},477:function(t,e,n){(e=n(68)(!1)).push([t.i,".slick--default .slick-dots,.slick--white .slick-dots{bottom:-40px;margin-top:1.5rem}.slick--default .slick-dots li,.slick--white .slick-dots li{width:1rem;height:1rem}.slick--default .slick-dots .slick-dots-item,.slick--white .slick-dots .slick-dots-item{width:100%;height:100%;border-width:2px;--border-opacity:1;border-radius:9999px}.slick--default .slick-dots .slick-dots-item{--border-opacity:1;border-color:#417ac9;border-color:rgba(65,122,201,var(--border-opacity))}.slick--white .slick-dots .slick-dots-item{--border-opacity:1;border-color:#fff;border-color:rgba(255,255,255,var(--border-opacity))}.slick--default .slick-dots .slick-active .slick-dots-item{--bg-opacity:1;background-color:#417ac9;background-color:rgba(65,122,201,var(--bg-opacity))}.slick--white .slick-dots .slick-active .slick-dots-item{--bg-opacity:1;background-color:#fff;background-color:rgba(255,255,255,var(--bg-opacity))}.slick--home .slick-dots{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;bottom:24px;margin-left:1.5rem;text-align:left}.slick--testimonial .slick-track{display:flex!important;align-items:stretch!important}.slick--testimonial .slick-slide{height:auto!important}.slick--testimonial .slick-slide div{min-height:100%!important}@media (min-width:768px){.slick--default .slick-dots,.slick--white .slick-dots{bottom:-48px;margin-top:2rem}.slick--default .slick-dots li,.slick--white .slick-dots li{width:14px;height:14px;margin-left:.5rem;margin-right:.5rem}.slick--home .slick-dots{bottom:40px;margin-left:4rem}}@media (min-width:1280px){.slick--home .slick-dots{margin-left:7.5rem}}",""]),t.exports=e},478:function(t,e,n){"use strict";var l=n(346),r=n.n(l);e.default=r.a},479:function(t,e,n){"use strict";var l=n(347),r=n.n(l);e.default=r.a},509:function(t,e,n){"use strict";n.r(e);var l=n(288),r=n(386),o=n(387),c={components:{banner:l.default,"pacs-overview":o.default,"pacs-ecosystem":r.default},meta:{linkContact:!0},data:function(){return{breadcrumbData:[{link:"/",text:this.$t("pacs_banner.breadcrumbs[0].text")},{link:"/product/pacs",text:this.$t("pacs_banner.breadcrumbs[1].text")},{link:"#",text:this.$t("pacs_banner.breadcrumbs[2].text"),activeLink:!0}]}}},d=n(10),m=n(479),component=Object(d.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("banner",{attrs:{"bg-url":"/images/banner/img-banner-pacs.jpg",lists:this.breadcrumbData,title:this.$t("pacs_banner.banner.title"),desc:this.$t("pacs_banner.banner.subtitle")}}),this._v(" "),e("pacs-overview"),this._v(" "),e("pacs-ecosystem")],1)}),[],!1,null,null,null);"function"==typeof m.default&&Object(m.default)(component);e.default=component.exports;installComponents(component,{Banner:n(288).default,PacsOverview:n(387).default,PacsEcosystem:n(386).default})}}]);