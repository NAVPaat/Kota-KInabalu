(()=>{var e={74208:e=>{void 0===TCB_Front.js_modules.menu&&TCB_Front.setModuleLoadedStatus("menu",!1),function(t,n){if(TCB_Front.isModuleLoaded("menu"))return;const o=e=>["auto","scroll","hidden"].includes(e.css("overflow"));let i;function s(e){return t(e).closest(".thrv_widget_menu")}const a={init(){tve_frontend_options.is_editor_page||a.frontendInit(),a.customMenuSwitchIcon(),i||(i=a.customMenuSwitchIcon.bind(this,!1),n.addResizeCallback(i)),a.zIndexOrder(),t(".thrv_widget_menu").each(((e,t)=>{a.addMutationListener(t)})),a.handleHiddenItems()},handleHiddenItems(){t(".thrv_widget_menu ul").each(((e,n)=>{const o=t(n),i=o.closest("li").find("> a .tve-item-dropdown-trigger"),s=this.hasVisibleItems(o);s||n.style.setProperty("display","none","important"),i.toggle(s)})),t("#tve_mobile_menu_hide").remove()},hasVisibleItems(e){let t=!1;return e.find("> li").each(((e,n)=>{getComputedStyle(n).getPropertyValue("display").includes("none")||(t=!0)})),t},zIndexOrder(){const e=t("ul.tve_w_menu");n.highestZIndex=e.length+6;let o=n.highestZIndex;e.each((function(){this.style.zIndex=o+5;const e=t(this),n=e.closest("#content");e.find("ul").css("z-index",o+6).parent().addClass("menu-item-has-children"),e.parentsUntil("body,#wrapper,#tve_editor").each((function(){const e=t(this);let n=parseInt(e.css("z-index"));isNaN(n)&&(n=0),n=800===n?o+7:Math.max(n,o+7),"static"!==e.css("position")&&(this.style.setProperty("z-index",n,"important"),this.classList.add("tcb-mp"))})),n.length&&"static"!==n.css("position")&&n.css("z-index",o+7).addClass("tcb-mp"),o--}))},frontendInit(e){const i=this;function s(e,o){const i=e.attr("href"),s=e[0]?e[0].hash:"",a=e.attr("target");if(s){let o;try{o=t(s)}catch(e){}o&&o.length&&n.jumpScrollTo(o,e[0])}a||o.ctrlKey||o.metaKey?window.open(i,a||"_blank"):location.href=i}(e=e||n.$document).off("click.menu-disable-links").on("click.menu-disable-links",".tve-active-disabled .tve_w_menu .tve-state-active",(function(e){const n=t(this).closest("li");if(!a.isHamburger(this)||!n.hasClass("menu-item-has-children"))return e.tvePreventNavigation=!0,!1})),e.off("menu_item_anchor_clicked").on("menu_item_anchor_clicked",".tve_w_menu li",(function(){const e=t(this);a.isHamburger(e)&&requestAnimationFrame((()=>{a.toggleState(e,!1)}))})),e.off("click.menu_item_click").on("click.menu_item_click",".tve_w_menu li:not(.tve-regular .tcb-mega-drop li)",(function(e){if(e.tvePreventNavigation)return!0;if(e.stopPropagation(),t(e.target).closest(".tve-regular .tcb-mega-drop").length)return!0;const n=t(this),r=n.children("a").first(),l=r[0],c=!!n.find("ul").length,d=t(e.target).closest(".tve-item-dropdown-trigger").length||t(e.clickedTarget).closest(".tve-item-dropdown-trigger").length,u=n.closest(".thrv_widget_menu").attr("class").includes("tve-custom-menu-switch-icon-"),m=n.closest(".tve_w_menu").hasClass("tve_vertical");if((u||m)&&c){if(!d&&n.hasClass("expand-children")&&function(e){const t=e.attr("href");return t&&"#"!==t&&0!==t.indexOf("javascript:")}(r))return r.hasClass("tve-jump-scroll")?r.trigger("click"):s(r,e),!1;n.toggleClass("expand-children");const t=n.find("ul").first(),a=n.hasClass("expand-children");i.hasVisibleItems(t)&&t[a?"slideDown":"slideUp"](100);const l=t.closest(".section-content,.tve-cb");if(o(l)){let e={top:"",left:"",width:""};if(a){const{top:n,left:o,width:i}=t[0].getBoundingClientRect();e={top:n,left:o,width:i},t.data("fixed-position",{top:n,scrollTop:l.scrollTop()})}t.toggleClass("fixed-menu-item",a).css(e)}return!1}if(c&&d)return!1;const h=n.children(".tve_et_click");return h.length>0?(h.trigger("click"),!0):!!r.attr("href")&&(r.hasClass("tve-jump-scroll")?(r.trigger("click"),!0):(s(r,e),void(a.isHamburger(n)&&l.pathname===window.location.pathname&&l.host===window.location.host&&l.protocol===window.location.protocol&&requestAnimationFrame((()=>{a.toggleState(n,!1)})))))})),e.off("click.prevent_navigation").on("click.prevent_navigation",".tve_w_menu li a:not(.thrv_text_element a):not(.tve-regular .tcb-mega-drop a)",(function(e){e.preventDefault()})),e.off("click.custom_menu").on("click.custom_menu",".tve-m-trigger",(function(){return a.toggleState(this),!1})),e.off("mousedown.close_menu").on("mousedown.close_menu",(e=>{t(e.target).closest(".thrv_widget_menu").length||a.closeAll()})),n.addResizeCallback(a.customMenuResponsive),n.addResizeCallback(a.mobileResponsiveToggle),a.customMenuResponsive(),a.refreshActiveStates(e),TCB_Front.$window.off("hashchange.tcb").on("hashchange.tcb",a.refreshActiveStates.bind(a,TCB_Front.$body)),a.positionLogo(e),a.mobileResponsiveToggle(),e.find(".section-content,.tve-cb").each(((e,n)=>{const i=t(n);o(i)&&i.off("scroll.menu").on("scroll.menu",(e=>{i.find(".fixed-menu-item").each(((n,o)=>{const i=t(o),s=i.data("fixed-position"),a=parseInt(s.top)+(s.scrollTop-e.currentTarget.scrollTop);i.css("top",`${a}px`)}))}))}))},mobileResponsiveToggle(){"mobile"===n.getDisplayType()?(n.$body.find(".vmd-right").attr("data-toggle-dir","vmd-right").removeClass("vmd-right").addClass("vmd-toggle"),n.$body.find(".vmd-left").attr("data-toggle-dir","vmd-left").removeClass("vmd-left").addClass("vmd-toggle")):n.$body.find(".vmd-toggle").each(((e,t)=>{const n=t.getAttribute("data-toggle-dir");n&&(t.classList.remove("vmd-toggle"),t.classList.add(n))}))},refreshActiveStates(e=TCB_Front.$body){e.find(".tve-custom-menu-type li > a").each((function(){if(!this.getAttribute("href")||"#"===this.getAttribute("href")||0===this.getAttribute("href").indexOf("javascript"))return;const e=t(this),n=location.protocol===this.protocol&&location.hostname===this.hostname&&location.pathname===this.pathname&&location.hash===this.hash;e.toggleClass("tve-state-active",n),e.parent().toggleClass("tve-state-active",n)}))},customMenuResponsive(){t(".tve-m-trigger:visible").length?t(".tve-m-trigger").each((function(){const e=t(this).parent().find("> ul");if(!e.data("tve-colors-added")&&e.find("ul a").attr("data-tve-custom-colour")){const n=e.find("ul a").attr("data-tve-custom-colour");e.find("> li > a").each((function(){const e=t(this);e.attr("data-tve-custom-colour")&&(e.attr("data-o-color",e.attr("data-tve-custom-colour")),e.attr("data-tve-custom-colour",n))}))}e.data("tve-colors-added",!0)})):(t(".tve-m-expanded").removeClass("tve-m-expanded"),t(".tve-m-trigger").each((function(){const e=t(this).parent().find("> ul");if(!e.data("tve-colors-added")&&e.find("> li > a").attr("data-o-color")){const t=e.find("> li > a"),n=t.attr("data-o-color");t.attr("data-tve-custom-colour",n).removeAttr("data-o-color")}e.data("tve-colors-added",!1)})))},customMenuSwitchIcon(e=!0){const o=n.getDisplayType();t(".thrv_widget_menu").each((function(){const n=t(this),i=n.attr("data-tve-allhoriz");let s=n.attr("data-tve-switch-icon"),r=!1;const l=n.data("tve-frontend-init");n.data("tve-frontend-init",!0),s||i||(s="tablet,mobile");const c=s.split(","),d=n.hasClass("tve-regular")||!l&&!n.find(".tve-m-trigger").is(":visible");if(n.removeClass("tve-custom-menu-switch-icon-desktop tve-custom-menu-switch-icon-tablet tve-custom-menu-switch-icon-mobile"),e&&n.find("ul:not(.tcb-masonry.masonry)").removeAttr("style"),c.includes(o)?n.addClass(`tve-custom-menu-switch-icon-${o}`):r=!0,n.toggleClass("tve-regular",r),n.toggleClass("tve-dropdown",!r),n.find("li.menu-item").toggleClass("tcb-menu-img-hamburger",!r),l&&r&&d)return void a.ensureOnScreenDropdown(n);n.toggleClass("tve-regular",r),n.toggleClass("tve-dropdown",!r);const u=n.find(":not(.tve-ham-wrap) > ul.tve_w_menu, .tve-ham-wrap");if(r)a.ensureRegularLogoSplit(n),n.find("ul").removeAttr("style"),n.find("li").removeClass("expand-children"),n.find(".tve-m-expanded").removeClass("tve-m-expanded"),u.removeAttr("style"),setTimeout((()=>n.find(".tcb-masonry").masonry()),1e3);else{if(a.ensureHamburgerLogoSplit(n),n.find(".tcb-masonry").each((function(){const e=t(this);e.data("masonry")&&e.masonry("destroy")})),!n.data("calc-dimensions")){n.find(".sub-menu").slideDown(0).slideUp(0).removeAttr("style"),n.data("calc-dimensions",!0);const e=u.attr("style","height: auto !important;max-height:none !important").outerHeight();u.removeAttr("style"),n.data("calc-height",e)}e?a.toggleState(n,!1):a.reposition(n)}a.ensureOnScreenDropdown(n)}))},isHamburger(e){const t=s(e);return t.length>0&&t.attr("class").includes("tve-custom-menu-switch-icon-")},isVertical(e){const t=s(e);return t.length>0&&t.find(".tve_vertical").length>0},toggleState(e,t,o=100){const i=s(e),r=i.find("ul").first();let l=i.find(".tve-ham-wrap");0===l.length&&(l=r);const c=l.hasClass("tve-m-expanded");let d=!c;if(!this.hasVisibleItems(r))return i;if(void 0!==t&&(d=t),d===c)return i;if(i.hasClass("tve-mobile-side-fullscreen")&&n.$body.toggleClass("tve-fullscreen-menu",d),i.find(".tve-m-trigger").toggleClass("tve-triggered-icon",t),d?i.parents(".tcb-mp").addBack().css("z-index",800):setTimeout((()=>{a.zIndexOrder()}),100),!i.hasClass("tve-mobile-dropdown")){if(d&&tve_frontend_options.is_editor_page){const e=i.find(".tve-m-trigger");e.hasClass("close-offscreen-icon-available")||e.append(e.find(".tcb-icon-close").clone().removeClass("tcb-icon-close").addClass("tcb-icon-close-offscreen")).addClass("close-offscreen-icon-available ")}return l.toggleClass("tve-m-expanded",t).removeAttr("style"),i}if(d){l.css("display","flex");const e=this.getMenuPositionalParent(i),t=parseInt(i.data("calc-height")||"500")+"px",n=e.outerWidth(),s=this.getMenuDropdownPosition(i,l,n);l.attr("style",`visibility: visible;display: flex;margin-left: 0 !important;${s}width:${n}px !important;max-height:${t}px`),l.addClass("tve-m-expanded"),setTimeout((()=>{l.css("max-height","none")}),o)}else i.data("calc-height",l.outerHeight()),l.stop().slideUp(o,(()=>{l.removeClass("tve-m-expanded").removeAttr("style"),l.css("visibility","hidden")}));return i},getMenuDropdownPosition(e,t,o){const i=n.getDisplayType();let s=n.getMediaAttr(e,"data-dropdown-position",i);const a=e.find(".tve-m-trigger .tcb-icon-close"),r=a.offset(),l=e.offset();let c="";switch(t.is("ul")&&(t=this.getMenuPositionalParent(e),s="full"),"mobile"===i&&(s="full"),s){case"left":c=`right: ${parseInt(l.left+e.outerWidth()-r.left-a.outerWidth())}px;left: unset;`;break;case"right":c=`left: ${parseInt(r.left-l.left)}px;right:unset;`;break;case"full":c=`left:${this.getMenuPositionalParent(e).offset().left-l.left}px;`;break;default:if(void 0!==s&&1===parseInt(e.attr("data-offscreen-width-setup"))){let e=t.css("max-width");(e.includes("%")||"none"===e)&&(e=t.outerWidth()),o=Math.min(o,parseInt(e))}c=`left: ${parseInt(r.left-l.left-o/2+a.outerWidth()/2)}px;right:unset;`}return c},getMenuPositionalParent:e=>e.closest(".tve-page-section-in, #tve_editor, #wrapper, .section-content"),reposition(e){const t=s(e),n=t.find(".tve-m-expanded").first(),o=n.length>0;if(t.find(".tve-m-trigger").toggleClass("tve-triggered-icon",o&&t.attr("class").includes("tve-mobile-")),o&&t.hasClass("tve-mobile-dropdown")){const e=this.getMenuPositionalParent(t),o=parseInt(t.data("calc-height")||"500")+"px",i=e.outerWidth(),s=this.getMenuDropdownPosition(t,n,i);let a=n.css("display");"none"===a&&(a="flex"),n.attr("style",`visibility: visible;margin-left: 0 !important;${s}width:${i}px !important;max-height:${o}px;display:${a}`),setTimeout((()=>{n.css("max-height","none")}),100)}return t},closeAll(){t(".thrv_widget_menu").each(((e,t)=>{a.toggleState(t,!1)}))},positionLogo(e){(e||n.$body).find(".tcb-menu-logo-wrap").each(((e,n)=>{const o=t(n),i=o.siblings(),s=Math.floor(i.length/2);i.eq(s).before(o)}))},ensureLogoSplit(e){const t=s(e);t.hasClass("tcb-logo-split")&&(a.isHamburger(t)?a.ensureHamburgerLogoSplit(e):a.ensureRegularLogoSplit(e))},ensureHamburgerLogoSplit(e,n=s(e).find("li.tcb-menu-logo-wrap")){const o=s(e);if(n.children().length){o.find(".tcb-hamburger-logo").remove();const e=t('<div class="tcb-hamburger-logo"></div>');e.append(n.children()),o.find(".thrive-shortcode-html").prepend(e)}},ensureRegularLogoSplit(e){const t=s(e),n=t.find(".tcb-hamburger-logo .tcb-logo"),o=t.find("li.tcb-menu-logo-wrap");n.length&&o.length&&o.empty().append(n),a.handleLogoOverflow(t)},handleLogoOverflow(e){const t=e.find("li.tcb-menu-logo-wrap");if(t.length)if(a.menuOverflows(e)){const e=t.outerHeight(!0),n=t.outerWidth();t.closest(".thrive-shortcode-html").css("padding-top",e+"px"),t.css({top:`-${e}px`,left:`calc(50% - ${Math.round(n/2)}px)`,position:"absolute"})}else t.removeAttr("style"),t.closest(".thrive-shortcode-html").css("padding-top","");else e.find(".thrive-shortcode-html").css("padding-top","")},menuOverflows(e){let n=0;return e.find(".tve_w_menu > li").each((function(){n+=t(this).outerWidth(!0)})),n>e.parent().width()-5},addMutationListener(e){const t=s(e);let o;const i=()=>{cancelAnimationFrame(o),o=requestAnimationFrame(a.handleLogoOverflow.bind(this,t))};if(window.ResizeObserver){const e=t.find("ul.tve_w_menu")[0];if(!e)return;const o=new ResizeObserver(i);if(!t.data("resize-observer")){o.observe(e),t.data("resize-observer",o);const n=new MutationObserver((e=>{Array.from(e).forEach((e=>{e.target.classList.contains("tcb-menu-logo-wrap")||"UL"===e.target.tagName&&"childList"===e.type&&e.addedNodes.length&&Array.from(e.addedNodes).forEach((e=>n.observe(e,{attributes:!0})))})),t.hasClass("tve-regular")&&i()}));t.find(".tve_w_menu > li:not(.tcb-menu-logo-wrap)").each(((e,t)=>{n.observe(t,{attributes:!0})}))}const s=t.find("li.tcb-menu-logo-wrap");if(s.length&&!s.data("resize-observer")&&(s.data("resize-observer",o),o.observe(s[0])),t.hasClass("tcb-mega-std")&&!t.data("mega-resize-observer")){let e;const o=new ResizeObserver((()=>{cancelAnimationFrame(e),e=requestAnimationFrame(a.handleMegaMenuPosition.bind(this,t))}));t.find(".tcb-mega-drop").each(((e,t)=>{n.inlineCssVariable(t,"top","var(--mega-menu-top,100%)")})),o.observe(t[0]),t.data("mega-resize-observer",o)}}},handleMegaMenuPosition(e){const t=e.find(".tve_w_menu");if(t.length){const o=e[0].getBoundingClientRect().bottom,i=getComputedStyle(t[0]),s=parseInt(i.getPropertyValue("border-bottom-width"));e.find(".menu-item.menu-item-has-children.lvl-0").each(((e,t)=>{const i=t.getBoundingClientRect().bottom,a=o-i-s;a>0?n.inlineCssVariable(t,"--mega-menu-top",`calc(100% - ${a}px)`):n.inlineCssVariable(t,"--mega-menu-top","")}))}},ensureOnScreenDropdown(e){const o=s(e),i=o.hasClass("tve-regular"),a=o.hasClass("tve-vertical-menu"),r=o.offset().left+o.outerWidth();o.find("li:last-child > ul").each(((e,n)=>{const o=t(n),s=o.offset().left+o.outerWidth();Math.ceil(s-r)>=0&&i&&s<o.outerWidth()?o.css({left:"auto",right:"0px"}):o.css({left:"",right:""})})),i||a?o.find(".tve_w_menu > li li").each(((e,t)=>{let o;a&&(o=t.parentNode.closest("li"),o&&o.classList.add("expand-children"));const s=t.getBoundingClientRect();let r=parseFloat(t.getAttribute("data-init-width"));if(r||(r=s.width,t.setAttribute("data-init-width",r)),r+s.left>document.body.offsetWidth){const e=document.body.offsetWidth-s.left,o=r-e;i&&r>e&&n.inlineCssVariable(t.parentNode,{left:`calc(100% - ${o}px)`})}else n.inlineCssVariable(t,{"max-width":"","min-width":""});o&&o.classList.remove("expand-children")})):o.find(".tve_w_menu > li li").each(((e,t)=>{n.inlineCssVariable(t,{"max-width":"","min-width":""})}))}};t(window).on("tcb_after_dom_ready",(()=>a.init())),window.addEventListener("load",(()=>a.init())),window.TCB_Front.menu=a,e.exports=a,TCB_Front.setModuleLoadedStatus("menu",!0)}(ThriveGlobal.$j,TCB_Front)}},t={};!function n(o){var i=t[o];if(void 0!==i)return i.exports;var s=t[o]={exports:{}};return e[o](s,s.exports,n),s.exports}(74208)})();