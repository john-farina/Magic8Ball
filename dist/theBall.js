(()=>{var t={249:function(t,e,o){var i,n;n="undefined"!=typeof window?window:this,void 0===(i=function(){return function(t,e){"use strict";function o(o){if(this.hasDeviceMotion="ondevicemotion"in t,this.options={threshold:15,timeout:1e3},"object"==typeof o)for(var i in o)o.hasOwnProperty(i)&&(this.options[i]=o[i]);if(this.lastTime=new Date,this.lastX=null,this.lastY=null,this.lastZ=null,"function"==typeof e.CustomEvent)this.event=new e.CustomEvent("shake",{bubbles:!0,cancelable:!0});else{if("function"!=typeof e.createEvent)return!1;this.event=e.createEvent("Event"),this.event.initEvent("shake",!0,!0)}}return o.prototype.reset=function(){this.lastTime=new Date,this.lastX=null,this.lastY=null,this.lastZ=null},o.prototype.start=function(){this.reset(),this.hasDeviceMotion&&t.addEventListener("devicemotion",this,!1)},o.prototype.stop=function(){this.hasDeviceMotion&&t.removeEventListener("devicemotion",this,!1),this.reset()},o.prototype.devicemotion=function(e){var o,i,n,s=e.accelerationIncludingGravity;if(null===this.lastX&&null===this.lastY&&null===this.lastZ)return this.lastX=s.x,this.lastY=s.y,void(this.lastZ=s.z);o=Math.abs(this.lastX-s.x),i=Math.abs(this.lastY-s.y),n=Math.abs(this.lastZ-s.z),(o>this.options.threshold&&i>this.options.threshold||o>this.options.threshold&&n>this.options.threshold||i>this.options.threshold&&n>this.options.threshold)&&(new Date).getTime()-this.lastTime.getTime()>this.options.timeout&&(t.dispatchEvent(this.event),this.lastTime=new Date),this.lastX=s.x,this.lastY=s.y,this.lastZ=s.z},o.prototype.handleEvent=function(t){if("function"==typeof this[t.type])return this[t.type](t)},o}(n,n.document)}.call(e,o,e,t))||(t.exports=i)}},e={};function o(i){var n=e[i];if(void 0!==n)return n.exports;var s=e[i]={exports:{}};return t[i].call(s.exports,s,s.exports,o),s.exports}(()=>{const t=["As I see it, yes","Ask again later","Better not tell you now","Cannot predict now","Don't count on it","It is certain","It is decidedly so","Most likely","My reply is no","My sources say no","Outlook good","Outlook not so good","Reply hazy try again","Signs point to yes","Very doubtful","Without a doubt","Yes","Yes, definitely","You may rely on it","That's Ridiculous","Ask Me If I Care","Obviously","In Your Dreams","Sky's The Limit","What Do You Think?"];let e=!1,i=!1,n=!0,s=!1;const l=document.querySelector("#ball-container"),a=document.querySelector("#ball_logo"),r=document.querySelector("#ball_inner-circle"),u=document.querySelector("#inner-circle_triangle"),h=document.querySelector("#fortuneText"),c=document.querySelector("#resetButton");function d(t,o,i){e=!0;let n=1e3*i;t.classList.add(o),setTimeout((function(){e=!1,t.classList.remove(o)}),n)}function y(){s=!0,a.style.display="flex",r.style.display="none",d(a,"logoShrink",3),d(l,"ballFadeOut",3),setTimeout((function(){a.style.display="none",r.style.display="flex",d(r,"innerGrow",3),d(l,"ballFadeIn",3),d(u,"triangleGrow",3),d(h,"fortuneGrow",3),setTimeout((function(){s=!1}),3e3)}),2900)}setInterval((function(){!0===n?c.classList.add("resetAnimation"):!1===n&&setTimeout((function(){c.classList.remove("resetAnimation")}),6e3)}),300),c.addEventListener("click",(function(){!0===n&&!1===s?(y(),n=!1):!1===s&&!1===n&&1!=e&&1!=i&&function(){let e=Math.floor(26*Math.random());i=!0,d(l,"shake",2),d(u,"fadeOut",1),setTimeout((function(){h.innerHTML=t[e].toUpperCase(),d(u,"fadeIn",2),setTimeout((function(){i=!1}),1800)}),900)}()})),y(),new(o(249))({threshold:15,timeout:1e3}).start(),window.addEventListener("shake",(function(){alert("shake!")}),!1)})()})();