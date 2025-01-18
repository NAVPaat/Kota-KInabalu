!function(){var t={5560:function(t){var e;e=ThriveTheme.$,t.exports={isOnScreen:function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["top","right","bottom","left"];t="string"==typeof t?[t]:t;const i=e(window),s={top:i.scrollTop(),left:i.scrollLeft()},o=this.offset();let n=!0;return s.right=s.left+i.width(),s.bottom=s.top+i.height(),o.right=o.left+this.outerWidth(),o.bottom=o.top+this.outerHeight(),t.forEach((t=>{switch(t){case"top":n=n&&o.top<s.bottom&&o.top>s.top;break;case"bottom":n=n&&o.bottom<s.bottom&&o.bottom>s.top;break;case"right":n=n&&o.right<s.right&&o.right>s.left;break;case"left":n=n&&o.left>s.left&&o.left<s.right;break;default:n=!(s.right<o.left||s.left>o.right||s.bottom<o.top||s.top>o.bottom)}})),n}}},551:function(t,e,i){(e=>{const s=i(8999),o=".error-message";class n{constructor(t){this.$form=t,this.addErrorFields(),this.$form.submit((function(t){n.submitAction(t,e(this))}))}addErrorFields(){this.$form.find(":input:visible:not(input[type=radio]),textarea:visible").after('<span class="error-message"></span>')}static submitAction(t,i){const n=JSON.parse(i.closest("#comments").find(".thrive-theme-comments-error-msg").html()),r=i.find(".comment-form-text textarea, .comment-form-item :input");let l=!0;if(i.find(o).hide(),r.each((function(t,i){const r=e(this).next(o);i.required&&!i.value&&(r.text(n.required).show(),l=!1),s.validateField(i.name,i.value,i.required)||(r.text(n[i.name]).show(),l=!1),r.text().length>0&&i.setAttribute("class",((i.getAttribute("class")||"")+" comment-it-error").trim())})),!l)return t.preventDefault(),t.stopPropagation(),!1;r.each(((t,e)=>{e.value=s.escapeHtml(e.value)}))}}t.exports=n})(ThriveTheme.$)},3667:function(t){(e=>{class i{constructor(t){this.$element=t}initAttributes(){return this.$element.find(".tve_audio_container").each(((t,i)=>{e.each(i.attributes,((t,e)=>{!["class","data-css","style"].includes(e.name)&&e.value.length&&this.$element.attr(e.name,e.value)}))})),this}makeAutoplayAudio(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:ThriveTheme.localize.is_editor)||(this.$element.find("audio").each((function(){if(this.hasAttribute("data-autoplay")){const t=this.play();null!==t&&t.catch((()=>{this.play()}))}})),this.$element.find('iframe[data-provider="soundcloud"][data-autoplay="1"]').each((function(){const t=this.getAttribute("src").replace("&auto_play=0","")+"&auto_play=1";this.setAttribute("src",t)}))),this}getData(t){return this.$element.attr(`data-${t}`)}static instance(t){return new i(t)}}t.exports=i})(ThriveTheme.$)},3626:function(t){(e=>{class i{constructor(t){this.$element=t}initAttributes(){return this.$element.find(".tve_responsive_video_container").each(((t,i)=>{e.each(i.attributes,((t,e)=>{!["class","data-css","style"].includes(e.name)&&e.value.length&&this.$element.attr(e.name,e.value)}))})),this}makeAutoplayVideo(){if(arguments.length>0&&void 0!==arguments[0]?arguments[0]:ThriveTheme.localize.is_editor)return;const t=this.$element.find("iframe, video"),e=this.getData("provider")||this.getData("type");let i,s;if("1"===this.getData("autoplay")){switch(e){case"youtube":i="&autoplay=1&mute=1";break;case"vimeo":i="&autoplay=1&muted=1";break;case"wistia":i="&autoPlay=true&muted=true";break;case"bunnynet":i="&autoplay=true"}if("youtube"===e||"vimeo"===e||"wistia"===e)s=this.getData("src"),s&&0!==s.length&&-1===s.indexOf(i)&&("?"===s.charAt(s.length-1)&&(i=i.substr(1)),t.attr("src",s+i));else if("custom"===e||"self"===e){const e=t.get(0);e.muted=!0,e.paused&&e.play()}return this}}getData(t){return this.$element.attr(`data-${t}`)}static instance(t){return new i(t)}}t.exports=i})(ThriveTheme.$)},7436:function(t){(e=>{class i extends TCB_Front.Pagination{constructor(t,e){super(t,e)}addLoadListeners(){e(window).scroll((()=>{this.list.$element.isOnScreen("bottom")&&this.load()}))}load(){if(!this.isLoading()){this.enableLoading("load-bot");const t=this.list.listArgs;if(t.query.paged+=1,"rand"===t.query.orderby){const e=[];this.list.$element.find("article").each(((t,i)=>{e.push(parseInt(i.getAttribute("data-id")))})),t.query.post__not_in=e,t.query.paged=1}this.list.getItems((t=>{this.list.insertItems(t),this.disableLoading()}),t)}}render(){}}t.exports=i})(ThriveTheme.$)},5236:function(t){t.exports=function(t,e){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:window;const s=t(window),o=t(document),n=t("body"),r=t("#thrive-header");class l{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t();this.$countdown=t('span[data-shortcode="thrive_remaining_time"]'),this.$wordCount=t('span[data-shortcode="thrive_word_count"]'),(e.length||this.$countdown.length||this.$wordCount.length)&&(this.$element=e,this.$postContent=t(".tcb-post-content:not(.tcb-post-list .tcb-post-content)"),this.prevScroll=0,this.$postContent.length&&(this.postContentOffsetTop=this.$postContent.offset().top,"undefined"!=typeof ResizeObserver&&new ResizeObserver(this.initialState.bind(this)).observe(this.$postContent[0]),this.init()))}init(){this.initialState(),i.tve_frontend_options.is_editor_page||(this.setPosition(),s.off("scroll.progress").on("scroll.progress",(()=>{this.scrollTop=o.scrollTop(),this.onScroll()})).trigger("scroll.progress"),s.off("ultimatum.form.display").on("ultimatum.form.display",(()=>setTimeout(this.setPosition.bind(this)))))}initialState(){const t=this.$postContent[0].getBoundingClientRect();this.contentTop=t.top-s.height()+o.scrollTop(),this.totalDistance=t.bottom-t.top,this.totalMinutes=ThriveTheme.utils.readingMinutes(this.$postContent),this.wordCount=ThriveTheme.utils.countWords(this.$postContent),this.setCountdown(0),this.setWordCount()}onScroll(){if(this.isPostContentIntoView()){const t=100*(this.scrollTop-this.contentTop)/this.totalDistance;this.setProgress(t),this.setCountdown(t),this.setWordCount(),this.setPosition(),this.scrollDir=this.scrollTop>=this.prevScroll?"Down":"Up",this.prevScroll=this.scrollTop}0===this.scrollTop&&this.setProgress(0),this.toggleBar()}toggleBar(t){if(void 0===t)if("under"===this.$element.attr("data-position")){const e=r.hasClass("tve-scroll-sticky")||r.hasClass("tve-scroll-appear")&&"Up"===this.scrollDir;t=0!==this.scrollTop&&e&&parseInt(r.css("top"))>=n.offset().top}else t=0!==this.scrollTop;this.$element.toggleClass("show",t)}setProgress(t){this.$element.attr("value",t)}setCountdown(t){if(this.$countdown.length){const e=0===t?this.totalMinutes:this.totalMinutes-Math.floor(this.totalMinutes*(t/100)),i=r.find('.thrive-symbol-shortcode-scroll span[data-shortcode="thrive_remaining_time"]');i.length&&(this.$countdown=this.$countdown.add(i)),this.$countdown.html(e<=0?"<1":e)}}setWordCount(){if(this.$wordCount.length){const t=this.wordCount,e=r.find('.thrive-symbol-shortcode-scroll span[data-shortcode="thrive_word_count"]');e.length&&(this.$wordCount=this.$wordCount.add(e)),this.$wordCount.html(t)}}setPosition(){const t=TCB_Front.bodyOffsetTop();let e=0;if("under"===this.$element.attr("data-position")&&r.length){const t=r.find(".thrive-symbol-shortcode-scroll");e=t.length?t[0].getBoundingClientRect().bottom:r[0].getBoundingClientRect().bottom}this.$element.css("top",e||t)}isPostContentIntoView(){return this.postContentOffsetTop<=this.scrollTop+s.height()}}return new l(e)}},9367:function(t,e,i){t.exports=function(t,e,s){let o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:window,n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:document.body;const r=i(5420)(t),l=i(7632)(t,o,n);let h=o.outerWidth;class a{static getDefaultValues(){let t;switch(arguments.length>0&&void 0!==arguments[0]?arguments[0]:""){case"sticky":t=r.defaultSettings;break;case"off-screen":t=l.defaultSettings;break;case"display-type":t={desktop:"normal"};break;default:t={}}return t}static get inEditor(){return!!o.tve_frontend_options.is_editor_page}constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t();this.$element=e,this.$content=e.find(".section-content"),e&&e.length&&(this.init(),a.inEditor?(this.sidebarTypeInit().fixContentHeight(),"undefined"!=typeof ResizeObserver&&new ResizeObserver((()=>{this.fixContentHeight()})).observe(this.$content[0])):(t(o).on("resize",(t=>{t.detail&&t.detail.fromTcb||h===o.outerWidth||(h=o.outerWidth,this.sidebarTypeInit().fixContentHeight())})),t((()=>this.sidebarTypeInit().fixContentHeight()))))}init(){this.$element.data("sticky",new r(this)),this.$element.data("off-screen",new l(this))}sidebarTypeInit(){if(!this.isHidden()){["sticky","off-screen"].forEach((t=>this._get(t)&&this._get(t).destroy()));const t=this.getDisplayType();("sticky"===t&&!a.inEditor||"off-screen"===t)&&this._get(t).init()}return this}_get(t){return this.$element.data(t)}getJsonData(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,s=this.$element.attr(`data-${t}`);try{s=JSON.parse(s)}catch(e){s=a.getDefaultValues(t)}return e&&(s=s[e]),i&&(s=this.getConfigByDevice(s,i)),s}getConfigByDevice(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s.getDisplayType();const i=this.getDisplayType(e),o=[e];for("mobile"===e&&i===this.getDisplayType("tablet")&&o.push("tablet"),o.push("desktop");void 0===t[o[0]]&&o.length;)o.shift();return o[0]?t[o[0]]:null}setJsonData(){let t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",i=arguments.length>1?arguments[1]:void 0,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;"object"==typeof i?t=i:(t=this.getJsonData(e),o?t[i][o]=s:t[i]=s);try{this.$element.attr(`data-${e}`,JSON.stringify(t))}catch(t){this.$element.attr(`data-${e}`,JSON.stringify(this.getJsonData(e)))}return this}isSticky(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s.getDisplayType();return"sticky"===this.getDisplayType(t)}isOffScreen(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s.getDisplayType();return"off-screen"===this.getDisplayType(t)}isHidden(){return this.$element.hasClass("hide-section")}getDisplayType(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s.getDisplayType();const e=this.getJsonData("display-type");let i;return"mobile"!==t&&this.getJsonData("sticky","sticky")?this.getJsonData("sticky","visibleOn").includes(t)&&(i="sticky"):i=e[t],i||(i="mobile"===t&&e.tablet?e.tablet:e.desktop),"sticky"===i&&"mobile"===t&&(i="sticky"===e.tablet?"sticky"===e.desktop?"normal":e.desktop:e.tablet),i}offScreenRefresh(){let t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(this.isOffScreen()){const e=this._get("off-screen"),i=e.isVisible();t&&e.destroy();const s=this.getJsonData("off-screen");e.setConfig(s).init(),(i||a.inEditor&&s.visibleInEditor)&&e.toggle(!0)}}updateConfig(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.getDisplayType();const e=this._get(t);return e&&"function"==typeof e.setConfig&&e.setConfig(this.getJsonData(t)),this}fixContentHeight(){if("normal"!==this.$content.css("justify-content")){this.$content.css("display","block");const e=Array.from(this.$content.children()).reduce(((e,i)=>e+t(i).outerHeight(!0)),0);this.$content.height()>e&&this.$content.css("display","flex")}}}return new a(e)}},7632:function(t){t.exports=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:jQuery,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document.body;class s{static get clickListener(){return"click.off-screen"}static get defaultSettings(){return{display:{desktop:"slide",mobile:"slide"},visibleOnLoad:{desktop:!0,mobile:!1},visibleInEditor:!0,hasOverlay:{desktop:!1},hasDefaultTrigger:{desktop:!0},hasCloseIcon:{desktop:!0},sidebarWidth:null,triggerPosition:{desktop:"center"},collapsedIcon:"icon-menu-left-solid",expandedIcon:"icon-menu-right-solid",closeIcon:"icon-close-solid"}}static get triggerSelector(){return".tve-off-screen-sidebar-trigger"}static get closeIconSelector(){return".tve-sidebar-close-icon"}constructor(t){this.sidebarInstance=t,this.$element=t.$element,this.element=t.$element[0],this.$main=t.$element.parent(),this.inEditor=t.constructor.inEditor&&TVE.Theme&&TVE.Theme.template;const e=t.getJsonData("off-screen");this.setConfig(e)}init(){return this.sidebarSide=e.ThriveTheme.utils.getSidebarPosition(),i.setAttribute("data-off-screen-side",this.sidebarSide),i.setAttribute("data-off-screen-type",this.getConfig("display",this.getDevice())),i.classList.add("theme-has-off-screen-sidebar"),this.updateSidebarWidth(),this.initDefaultTrigger(),this.initCloseIcon(),this.toggleCloseIcon(this.getConfig("hasCloseIcon",this.getDevice())),i.classList.remove("visible-off-screen-sidebar"),i.classList.remove("theme-has-off-screen-overlay"),this.element.classList.remove("theme-has-off-screen-overlay"),this.element.classList.remove(`sidebar-off-screen-on-${this.getDevice()}`),this.element.style.display="block",this.inEditor?this.getConfig("visibleInEditor")&&setTimeout((()=>this.toggle(!0)),24):(this.setSidebarTop(),t(document).off("keyup.off-screen").on("keyup.off-screen",this.onKeyUp.bind(this)),this.getConfig("hasOverlay",this.getDevice())&&this.$element.off(s.clickListener).on(s.clickListener,this.onClick.bind(this)),this.isVisibleOnLoad()&&setTimeout((()=>this.toggle(!0)),24),this.$element.appendTo(t("#wrapper"))),this}isVisibleOnLoad(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.getDevice(),e=null;return!this.inEditor&&"mobile"!==t&&ThriveTheme.localize.is_user_logged_in&&ThriveTheme.localize.sidebar_visibility&&void 0!==ThriveTheme.localize.sidebar_visibility[t]&&(e=!!parseInt(ThriveTheme.localize.sidebar_visibility[t])),null===e&&(e=this.getConfig("visibleOnLoad",t)),e}initDefaultTrigger(){this.$trigger=this.$element.find(s.triggerSelector),this.inEditor?(this.$trigger.data("tcb-elem-type","sidebar-trigger"),this.$trigger.attr("data-selector",s.triggerSelector)):this.$trigger.off(s.clickListener).on(s.clickListener,(()=>{this.toggle(!this.isVisible())})),this.$trigger.css({display:this.getConfig("hasDefaultTrigger",this.getDevice())?"flex":"none"});const t=this.getConfig("triggerPosition",this.getDevice());i.classList.contains("admin-bar")&&"top"===t?this.$trigger.css({top:e.TCB_Front.bodyOffsetTop()}):this.$trigger.css({top:""}),this.element.setAttribute("data-trigger-position",t)}initCloseIcon(){this.inEditor?this.$element.find(s.closeIconSelector).attr("data-selector",s.closeIconSelector).addClass("tve_no_icons tve_no_drag"):t(document).off(s.clickListener).on(s.clickListener,s.closeIconSelector,(()=>this.toggle(!1)))}destroy(){return i.classList.remove("theme-has-off-screen-sidebar"),i.classList.remove("visible-off-screen-sidebar"),this.element.style.removeProperty("top"),this.element.style.removeProperty("height"),this.element.style.removeProperty("display"),this.element.style.removeProperty("min-width"),this.element.classList.remove(`sidebar-off-screen-on-${this.getDevice()}`),this.$trigger&&this.$trigger.hide(),this.toggleCloseIcon(!1),"wrapper"===this.$element.parent().attr("id")&&this.$element.insertBefore(t(".main-columns-separator")),this}toggle(s){void 0===s&&(s=!this.isVisible());const o=this.getDevice();return this.$element.hasClass(`tcb-${o}-hidden`)&&(s=!1),s&&this.getConfig("hasOverlay",o)?(this.element.classList.add("theme-has-off-screen-overlay"),i.classList.add("theme-has-off-screen-overlay"),setTimeout((()=>{i.classList.toggle("visible-off-screen-sidebar",s)}),42)):(i.classList.toggle("visible-off-screen-sidebar",s),setTimeout((()=>{this.element.classList.remove("theme-has-off-screen-overlay")}),420)),!this.sidebarInstance.constructor.inEditor&&ThriveTheme.localize.is_user_logged_in&&"mobile"!==o&&this.updateUserSidebarSettings(s),setTimeout((()=>{e.tve_frontend_options.is_editor_page?(e.TCB_Front.resizePageSection(),TVE.inner_$(".tcb-mp").css("z-index",""),e.TCB_Front.menu.zIndexOrder()):"function"==typeof e.TCB_Front.sticky.resetElementsPosition&&e.TCB_Front.sticky.resetElementsPosition(),t(e).trigger("tcb_off_screen_sidebar_toggle"),e.TCB_Front.handleIframes(this.$element,s)}),500),this}setConfig(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.config=t,this}getConfig(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=this.config;return t&&(i=i[t],e&&(i=this.sidebarInstance.getConfigByDevice(i,e))),i}updateSidebarWidth(s){const o=t(e).width();if(void 0===s){switch(this.getDevice()){case"desktop":const t=getComputedStyle(this.element.parentElement);s="wrap"===t.flexWrap?parseInt(t.width)/2:parseFloat(t.getPropertyValue("--sidebar-size"))*parseInt(t.width)/100-parseFloat(t.getPropertyValue("--separator-size"))/2;break;case"tablet":s=o/2;break;case"mobile":s=o-24}let t=this.$element.css("min-width");t.includes("%")?t=parseInt(t)*o/100:(t=parseInt(t),isNaN(t)&&(t=0)),s=Math.max(t,s)}return s>=o&&(s=o-24),parseInt(this.$element.css("min-width"))&&this.$element.css("min-width",`${s}px`),i.style.setProperty("--off-screen-sidebar-size",`${s}px`),s}toggleCloseIcon(){let t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.$element.find(s.closeIconSelector).toggle(t)}setSidebarTop(){const t=e.TCB_Front.bodyOffsetTop();this.$element.css({top:`${t}px`,height:`calc(100vh - ${t}px)`})}updateUserSidebarSettings(i){("object"!=typeof ThriveTheme.localize.sidebar_visibility||Array.isArray(ThriveTheme.localize.sidebar_visibility))&&(ThriveTheme.localize.sidebar_visibility={}),ThriveTheme.localize.sidebar_visibility[this.getDevice()]=i?1:0,t.ajax({url:`${ThriveTheme.localize.routes.frontend}/user_options`,headers:{"X-WP-Nonce":e.tve_frontend_options.nonce},type:"POST",data:{template:ThriveTheme.localize.ID,option:"sidebar_visibility",value:ThriveTheme.localize.sidebar_visibility}})}onClick(t){t.target.classList.contains("sidebar-section")&&this.toggle(!1)}onKeyUp(t){"Escape"===t.key&&this.toggle(!1)}isVisible(){return i.classList.contains("visible-off-screen-sidebar")}getDevice(){return void 0===e.TCB_Front?TVE.main.device:e.TCB_Front.getDisplayType()}}return s}},5420:function(t){t.exports=t=>{const e=t(window),i=t(document),s=t("body");let o=window.innerHeight,n=e.width(),r=s.offset().top;return class{static get defaultSettings(){return{sticky:!1,delta:0,stickyUntil:"main",element:""}}needsExtraScroll(){return this.elementHeight>o}shouldBeSticky(){let t=n>768;if(t){const e=ThriveTheme.$sections.content.outerHeight(),i=ThriveTheme.$sections.content.offset().top;(this.offset.top>=i+e||this.offset.top+this.$element.outerHeight()<i)&&(t=!1)}return t}setConfig(t){this.config=t}isSticky(){return this.element.classList.contains("tve-is-sticky")}constructor(t){this.$element=t.$element,this.element=t.$element[0],this.$content=this.$element.find(".section-content"),this.$parent=t.$element.parent(),this.setConfig(t.getJsonData("sticky")),t.constructor.inEditor||("undefined"!=typeof ResizeObserver&&(new ResizeObserver(this.onContentResize.bind(this)).observe(s[0]),new ResizeObserver(this.onContentResize.bind(this)).observe(this.element)),e.off("ultimatum.form.display").on("ultimatum.form.display",this.onContentResize.bind(this)))}init(){this.isSticky()&&this.destroy(),o=window.innerHeight,n=e.width(),r=s.offset().top,this.delta=parseInt(this.config.delta),this.offset=this.$element.offset(),this.$sidebarClone.hide(),this.prevScroll=0,this._sentinelTop=null,this.stickySide=ThriveTheme.utils.getSidebarPosition(),this.elementWidth=this.$element.outerWidth(),this.parentTopPadding=parseInt(this.$parent.css("padding-top")),e.off("scroll.sidebar"),this.shouldBeSticky()&&(this.element.classList.add("tve-sticky-sidebar"),this.element.style.alignItems=this.$content.css("justify-content"),this.setElementHeight(),this.$sidebarClone.css("height",`${this.elementHeight}px`),e.on("scroll.sidebar",(()=>{this.scrollTop=i.scrollTop(),this.scrollDir=this.scrollTop>=this.prevScroll?"Down":"Up",this.prevScroll=this.scrollTop,this.elementTop=parseInt(this.element.style.top),this.onScroll(),this[`onScroll${this.scrollDir}`]()})).trigger("scroll.sidebar"))}setElementHeight(){return this.elementHeight=this.$content.outerHeight(),this.elementHeight<o&&(this.elementHeight=this.$element.outerHeight()),this}onScroll(){this.hasReachedSentinel()||this.needsExtraScroll()||(this.offset.top<=this.scrollTop+this.delta+r?(this.isSticky()||this.makeItSticky(),this.element.style.position="fixed",this.element.style.left=`${this.offset.left}px`,this.element.style.top=`${this.delta+r}px`):this.isSticky()&&this.destroy())}onScrollDown(){if(this.hasReachedSentinel()&&this.isSticky()){let t=this.sentinelTop+this.parentTopPadding-this.elementHeight-this.offset.top;this.needsExtraScroll()&&(t-=this.delta),this.element.style.removeProperty("left"),this.element.style.removeProperty("bottom"),this.element.style.removeProperty("position"),this.element.style.top=`${t}px`}else if(this.needsExtraScroll()&&("fixed"!==this.element.style.position||!this.element.style.bottom))if("fixed"===this.element.style.position&&this.element.style.top){const t=this.$element.offset();this.element.style.removeProperty("position"),this.element.style.removeProperty("left"),this.element.style.top=t.top+this.delta-this.offset.top+"px"}else{let t=this.offset.top+this.elementHeight;this.elementTop&&(t+=this.elementTop-this.parentTopPadding),this.scrollTop+o>t+this.delta&&(this.isSticky()||this.makeItSticky(),this.element.style.position="fixed",this.element.style.left=`${this.offset.left}px`,this.element.style.bottom=`${this.delta}px`,this.element.style.removeProperty("top"))}}onScrollUp(){if(this.needsExtraScroll()&&this.isSticky()&&!this.hasReachedSentinel())if("fixed"===this.element.style.position&&this.element.style.bottom){const t=this.$element.offset();this.element.style.removeProperty("position"),this.element.style.removeProperty("left"),this.element.style.removeProperty("bottom"),this.element.style.top=t.top+this.parentTopPadding-this.offset.top+"px"}else"fixed"===this.element.style.position&&this.offset.top>this.scrollTop+this.delta+r?this.destroy():this.$element.offset().top>this.scrollTop+this.delta+r&&(this.element.style.position="fixed",this.element.style.left=`${this.offset.left}px`,this.element.style.top=`${r+this.delta}px`)}hasReachedSentinel(){return this.scrollTop+o>this.sentinelTop}onContentResize(){this._sentinelTop=null,r=s.offset().top,this.offset=(this.isSticky()?this.$sidebarClone:this.$element).offset(),this.setElementHeight()}get sentinelTop(){if(null===this._sentinelTop){switch(this.config.stickyUntil){case"end":this._sentinelTop=Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight);break;case"element":if(this.config.element=this.config.element.replace(/([^a-zA-Z0-9_-])/g,"").trim(),""!==this.config.element){const e=t(`#${this.config.element}`);e.length&&e.offset().top>this.offset.top+this.elementHeight&&(this._sentinelTop=e.offset().top)}}null===this._sentinelTop&&(this._sentinelTop=this.$parent.offset().top+this.$parent.outerHeight())}return this._sentinelTop}get $sidebarClone(){const e=this.$parent.find(".sidebar-empty-clone");return e.length?e:t('<div class="sidebar-section sidebar-empty-clone"></div>').css({height:`${this.elementHeight}px`,display:"none"}).insertAfter(this.$element)}makeItSticky(){this.$sidebarClone.show(),this.element.classList.add("tve-is-sticky"),this.element.style[this.stickySide]=this.$parent.css(`padding-${this.stickySide}`),this.element.style.setProperty("width",`${this.elementWidth}px`,"important"),this.needsExtraScroll()||(this.element.style.minHeight=`calc(100vh - ${r+this.delta}px)`,this.elementHeight=this.$element.outerHeight(),this._sentinelTop=null)}destroy(){this.$sidebarClone.remove(),this.element.classList.remove("tve-is-sticky"),this.element.style.removeProperty(this.stickySide),this.element.style.removeProperty("position"),this.element.style.removeProperty("bottom"),this.element.style.removeProperty("width"),this.element.style.removeProperty("left"),this.element.style.removeProperty("top"),this.needsExtraScroll()||this.element.style.removeProperty("min-height")}}}},2962:function(t){const e=["noscript","img","style","script",".tcb-post-list-dynamic-style",".thrive-colors-palette-config",".thrive-local-colors-config",".thrive-group-edit-config",".tve_custom_style",".thrive-shortcode-config",".tqb-shortcode-wrapper",".thrive-quiz-builder-shortcode",".thrv_lead_generation_code"];t.exports={addHttp:t=>((t=t.trim())&&!/^(?:f|ht)tps?\:\/\//.test(t)&&(t="http://"+t),t),readingMinutes(t){return Math.floor(this.countWords(t)/200)},countWords(t){const i=t.clone();i.find(e.join(", ")).remove();const s=i.text();let o=0;return"string"==typeof s&&(o=s.match(/[a-zA-Z0-9_'\u0392-\u03c9\u0400-\u04FF\u0027]+|[\u4E00-\u9FFF\u3400-\u4dbf\uf900-\ufaff\u3040-\u309f\uac00-\ud7af\u0400-\u04FF]+|[\u00E4\u00C4\u00E5\u00C5\u00F6\u00D6]+|[\u0531-\u0556\u0561-\u0586\u0559\u055A\u055B]+|\w+/g)),o?o.length:0},throttle(t,e){let i=arguments.length>2&&void 0!==arguments[2]&&arguments[2],s=null,o=!0;return function(){const n=i&&o,r=()=>{t.apply(this,arguments),s=null};n&&(o=!1,r()),s||(s=setTimeout(r,e))}},getSidebarPosition(){let t="right";return(ThriveTheme.$sections.mainContainer.hasClass("flip-sections")||1===parseInt(ThriveTheme.$sections.sidebar.css("order")))&&(t="left"),t}}},8999:function(t,e,i){const s=i(2962);class o{static validateField(t,e){if(arguments.length>2&&void 0!==arguments[2]&&!arguments[2]&&0===e.trim().length)return!0;const i="validate_"+t;return"function"!=typeof o[i]||o[i](e)}static validateEmail(t){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(t)}static validateUrl(t){return null!==s.addHttp(t).match(/(http(s)?:\/\/.)(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g)}static escapeHtml(t){const e={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","`":"&#x60;","=":"&#x3D;"};return String(t).replace(/[&<>"'`=\/]/g,(function(t){return e[t]?e[t]:t}))}}t.exports=o}},e={};function i(s){var o=e[s];if(void 0!==o)return o.exports;var n=e[s]={exports:{}};return t[s](n,n.exports,i),n.exports}window.ThriveTheme={$:jQuery.noConflict()},((t,e)=>{const s=i(551),o=i(3626),n=i(3667);e&&e.identifiers&&(e.identifiers.parentStickyParent+=",.theme-section",e.identifiers.pageStickyParent+=",#wrapper,.theme-section",e.identifiers.stickyParentType+=",.theme-section",e.identifiers.parentZindexFix=(e.identifiers.parentZindexFix?e.identifiers.parentZindexFix+",":"")+".theme-section"),t.fn.extend(i(5560)),ThriveTheme.localize=thrive_front_localize,ThriveTheme.utils=i(2962),ThriveTheme.initElements=()=>{ThriveTheme.$sections={sidebar:t("#theme-sidebar-section"),content:t("#theme-content-section"),mainContainer:t(".main-container")},ThriveTheme.hasAdminBar=window.document.body.classList.contains("admin-bar"),ThriveTheme.sidebar=i(9367)(t,ThriveTheme.$sections.sidebar,TCB_Front),ThriveTheme.progressBar=i(5236)(t,t(".thrive-progress-bar"))},t((()=>{ThriveTheme.initElements(),tve_frontend_options.is_editor_page?function(){var t;let e,i;null!==(t=TVE.CONST.theme)&&void 0!==t&&t.is_theme_template?(e=ThriveTheme.localize.tar_post_url,i=".tar-redirect"):(e=ThriveTheme.localize.template_url,i=".theme-template-redirect"),TVE.main.sidebar_extra.$el.find(i).attr("href",e)}():function(){t(".comment-form").each(((e,i)=>{const o=t(i);0===o.closest(".woocommerce-Reviews").length&&new s(o)})),t(".thrv_responsive_video[data-type=dynamic]").each(((e,i)=>{o.instance(t(i)).initAttributes().makeAutoplayVideo()})),t(".thrv_audio[data-type=dynamic]").each(((e,i)=>{n.instance(t(i)).initAttributes().makeAutoplayAudio()}));const i=t(".thrv_contents_table").not("#tve_editor .thrv_contents_table");i.length>0&&i.tableOfContents({target:".tcb-post-content"}).addClass("tve-rendered");const r=t(".tve-dynamic-toc:not(.thrv_symbol *)");r.length>0&&r.tableOfContents({target:".tcb-post-content"}).addClass("tve-rendered"),e.toc&&e.toc.initToc(e.$body)}(),thrive_front_localize.is_singular||t("body").on("tcb_post_list_identifier.tcb","#main",(t=>(t.identifier="#main",t))).on("tcb_pagination_extra_classes.tcb","#main",(t=>{const e=i(7436);return t.paginationClasses={infinite_scroll:e},t})).on("tcb_after_numeric_pagination_render",'.tcb-pagination[data-list="#main"]',((e,i)=>{const s=thrive_front_localize.pagination_url.template,o=function(t,e,i){let s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;t=t.replace("[]",`[${s}]`),i.has(t,e)||i.set(t,e)},n=t=>{const e=window.location.search;let i=1===parseInt(t)?thrive_front_localize.pagination_url.base.replaceAll("&#038;","&"):s.replace("[thrive_page_number]",t);if(e){const t=new URLSearchParams(e),s=new URL(i),n=s.searchParams;for(const e of t.keys()){const i=t.getAll(e);1===i.length?o(e,i[0],n,0):i.forEach(((t,i)=>o(e,t,n,i)))}i=s.toString()}return i};i.$pageNumberContainer.find(".tcb-pagination-link").each(((e,i)=>{t(i).find("a").attr("href",n(i.dataset.page))}));for(const t in i.buttons){const e=i.buttons[t],s=e.hasClass("tcb-disabled-pagination-button");e.find("a").attr("href",s?"":n(e.attr("data-page")))}})),t(window).trigger("theme.frontend.init")}))})(ThriveTheme.$,"undefined"==typeof TCB_Front?{}:TCB_Front)}();