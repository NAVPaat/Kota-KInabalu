(()=>{if(window.TVE_Dash=window.TVE_Dash||{},!e||!e.$j){var a=window.$,e={$j:jQuery.noConflict()};a&&(window.$=a)}!function(a){TVE_Dash.ajax_sent=!1;var t={},s={};TVE_Dash.add_load_item=function(e,n,o){var r;if("function"!=typeof o&&(o=a.noop),TVE_Dash.ajax_sent){var i={},_={};return i[e]=n,_[e]=o,this.send_ajax(i,_),!0}return n?(t[e]&&"function"==typeof(null===(r=console)||void 0===r?void 0:r.warn)&&console.warn(e+" ajax action already defined"),t[e]=n,s[e]=o,!0):(console.error&&console.error("missing ajax data"),!1)},TVE_Dash.ajax_load_css=function(e){a.each(e,(function(e,t){a("link#"+(e+="-css")).length||a('<link rel="stylesheet" id="'+e+'" type="text/css" href="'+t+'"/>').appendTo("head")}))},TVE_Dash.ajax_load_js=function(e){var t=document.body;a.each(e,(function(s,n){if(-1!==s.indexOf("_before"))return!0;var o=document.createElement("script");e[s+"_before"]&&a('<script type="text/javascript">'+e[s+"_before"]+"<\/script>").after(t.lastChild),s&&(o.id=s+"-script"),o.src=n,t.appendChild(o)}))},TVE_Dash.send_ajax=function(t,s){a.ajax({url:tve_dash_front.ajaxurl,xhrFields:{withCredentials:!0},data:{post_id:tve_dash_front.post_id,action:"tve_dash_front_ajax",tve_dash_data:t},dataType:"json",type:"post"}).done((function(t){t&&a.isPlainObject(t)&&(t.__resources&&(t.__resources.css&&TVE_Dash.ajax_load_css(t.__resources.css),t.__resources.js&&TVE_Dash.ajax_load_js(t.__resources.js),delete t.__resources),a.each(t,(function(a,e){if("function"!=typeof s[a])return!0;s[a].call(null,e,t)})),e.$j(window).trigger("tve_after_ajax_load"))}))},TVE_Dash.forceImageLoad=function(a){Array.prototype.forEach.call(a.getElementsByTagName("img"),(a=>{a.getAttribute("src").includes("data:image")&&a.setAttribute("src",a.getAttribute("data-opt-src")||a.getAttribute("data-src"))}))},a((function(){window.TVE_Dash=window.TVE_Dash||TVE_Dash,setTimeout((function(){var e=new a.Event("tve-dash.load");return a(document).trigger(e),!a.isEmptyObject(t)&&!(!tve_dash_front.force_ajax_send&&tve_dash_front.is_crawler)&&(TVE_Dash.send_ajax(t,s),void(TVE_Dash.ajax_sent=!0))}))}))}(e.$j)})();