!function(a,i){var o,r,c=0,m=0;function l(n){n=Math.round(n);var e=Math.floor(n/60),t=n%60;return(e=e<10?"0"+e:e)+":"+(t=t<10?"0"+t:t)}function u(n){.999<=n&&(cancelAnimationFrame(r),i.musicPlayer.controlBtns[3].ontouchend());var e=l(n*o);a(".curTime").html(e);var t=100*n+"%";a(".frontBg").css({width:t})}i.pro={renderAllTime:function(n){n=l(o=n),a(".totalTime").html(n)},start:function(n){m=void 0===n?m:n,cancelAnimationFrame(r),c=(new Date).getTime(),function n(){var e=(new Date).getTime(),t=m+(e-c)/(1e3*o);t<=1?u(t):cancelAnimationFrame(r),r=requestAnimationFrame(n)}()},upDate:u,stop:function(){var n=(new Date).getTime();cancelAnimationFrame(r),m+=(n-c)/(1e3*o)}}}(window.Zepto,window.player||window.player);