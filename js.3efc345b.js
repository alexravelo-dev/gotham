parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"QvaY":[function(require,module,exports) {
var e=document.getElementById("batman"),t=document.getElementById("vengeance"),s=0;function n(){(s-=15)>0?e.style.left=s+"px":s=0}function a(){(s+=15)<=675?e.style.left=s+"px":s=675}document.body.onkeyup=function(t){32===t.keyCode?(e.classList.remove("stay-right"),e.classList.add("jump"),setTimeout(function(){e.classList.remove("jump"),e.classList.add("stay-right")},1200)):(e.className="",e.classList.add("stay-right"))},document.body.onkeydown=function(t){39!==t.keyCode&&68!==t.keyCode||(e.className="",e.classList.add("run-right"),a()),37!==t.keyCode&&65!==t.keyCode||(e.className="",e.classList.add("run-left"),n())},e.addEventListener("click",function(){t.play()});
},{}]},{},["QvaY"], null)
//# sourceMappingURL=/gotham/js.3efc345b.js.map