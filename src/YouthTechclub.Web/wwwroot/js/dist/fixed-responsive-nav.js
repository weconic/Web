!function(){"use strict";if("querySelector"in document&&"addEventListener"in window){var e=function(e,t,n){for(var o=0;o<e.length;o++)t.call(n,o,e[o])};FastClick.attach(document.body),smoothScroll.init();var t=responsiveNav(".nav-collapse",{closeOnNavClick:!0}),n=document.createElement("div");n.className="mask",document.body.appendChild(n),null!==navigator.userAgent.match(/Android/i)&&(document.documentElement.className+=" android");var o,i=document.querySelector(".nav-collapse ul"),a=i.querySelectorAll("a"),c=function(){o=[],e(a,function(e,t){var n=a[e].getAttribute("href").replace("#","");o.push(document.getElementById(n).offsetTop+200)})};c(),window.addEventListener("resize",function(){c()},!1);var r=function(t){e(a,function(e,t){a[e].parentNode.className=a[e].parentNode.className.replace(/[\s]{0,}active/,"")}),a[t].parentNode.className+=a[t].parentNode.className?" active":"active"},l=!1;window.addEventListener("scroll",function(){var t=window.pageYOffset,n=document.body,i=document.documentElement,a=window.innerHeight,c=Math.max(n.scrollHeight,n.offsetHeight,i.clientHeight,i.scrollHeight,i.offsetHeight);l||e(o,function(e,n){n>t&&(t+300>n||t+a>=c)&&r(e)})},!1),n.addEventListener("click",function(e){e.preventDefault(),t.close()},!1);var s=function(){setTimeout(function(){l=!1},500)};document.querySelector(".logo").addEventListener("click",function(e){e.preventDefault(),l=!0,r(0),t.close(),history.pushState&&history.pushState("",document.title,window.location.pathname),s()},!1),e(a,function(e,t){a[e].addEventListener("click",function(t){t.preventDefault(),l=!0,r(e);var n=this.getAttribute("href").replace("#",""),o=document.getElementById(n);"home"!==n?(o.removeAttribute("id"),location.hash="#"+n,o.setAttribute("id",n)):history.pushState&&history.pushState("",document.title,window.location.pathname),s()},!1)})}}();