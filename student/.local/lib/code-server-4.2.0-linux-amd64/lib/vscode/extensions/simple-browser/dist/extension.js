(()=>{"use strict";var e={800:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.config=t.loadMessageBundle=t.localize=t.format=t.setPseudo=t.isPseudo=t.isDefined=t.BundleFormat=t.MessageFormat=void 0;var o,r,s,i=n(926);function a(e){return void 0!==e}function l(e,n){return t.isPseudo&&(e="［"+e.replace(/[aouei]/g,"$&$&")+"］"),0===n.length?e:e.replace(/\{(\d+)\}/g,(function(e,t){var o=t[0],r=n[o],s=e;return"string"==typeof r?s=r:"number"!=typeof r&&"boolean"!=typeof r&&null!=r||(s=String(r)),s}))}(s=t.MessageFormat||(t.MessageFormat={})).file="file",s.bundle="bundle",s.both="both",(r=t.BundleFormat||(t.BundleFormat={})).standalone="standalone",r.languagePack="languagePack",function(e){e.is=function(e){var t=e;return t&&a(t.key)&&a(t.comment)}}(o||(o={})),t.isDefined=a,t.isPseudo=!1,t.setPseudo=function(e){t.isPseudo=e},t.format=l,t.localize=function(e,t){for(var n=[],o=2;o<arguments.length;o++)n[o-2]=arguments[o];return l(t,n)},t.loadMessageBundle=function(e){return i.default().loadMessageBundle(e)},t.config=function(e){return i.default().config(e)}},926:(e,t)=>{var n;function o(){if(void 0===n)throw new Error("No runtime abstraction layer installed");return n}Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.install=function(e){if(void 0===e)throw new Error("No runtime abstraction layer provided");n=e}}(o||(o={})),t.default=o},472:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.config=t.loadMessageBundle=void 0;var o=n(622),r=n(747),s=n(926),i=n(800),a=n(800);Object.defineProperty(t,"MessageFormat",{enumerable:!0,get:function(){return a.MessageFormat}}),Object.defineProperty(t,"BundleFormat",{enumerable:!0,get:function(){return a.BundleFormat}});var l,c,u=Object.prototype.toString;function d(e){return"[object Number]"===u.call(e)}function f(e){return"[object String]"===u.call(e)}function g(e){return JSON.parse(r.readFileSync(e,"utf8"))}function p(e){return function(t,n){for(var o=[],r=2;r<arguments.length;r++)o[r-2]=arguments[r];return d(t)?t>=e.length?void console.error("Broken localize call found. Index out of bounds. Stacktrace is\n: "+new Error("").stack):i.format(e[t],o):f(n)?(console.warn("Message "+n+" didn't get externalized correctly."),i.format(n,o)):void console.error("Broken localize call found. Stacktrace is\n: "+new Error("").stack)}}function v(e,t){return l[e]=t,t}function h(e){try{return function(e){var t=g(o.join(e,"nls.metadata.json")),n=Object.create(null);for(var r in t){var s=t[r];n[r]=s.messages}return n}(e)}catch(e){return void console.log("Generating default bundle from meta data failed.",e)}}function m(e,t){var n;if(!0===c.languagePackSupport&&void 0!==c.cacheRoot&&void 0!==c.languagePackId&&void 0!==c.translationsConfigFile&&void 0!==c.translationsConfig)try{n=function(e,t){var n,s,i,a=o.join(c.cacheRoot,e.id+"-"+e.hash+".json"),l=!1,u=!1;try{return n=JSON.parse(r.readFileSync(a,{encoding:"utf8",flag:"r"})),s=a,i=new Date,r.utimes(s,i,i,(function(){})),n}catch(e){if("ENOENT"===e.code)u=!0;else{if(!(e instanceof SyntaxError))throw e;console.log("Syntax error parsing message bundle: "+e.message+"."),r.unlink(a,(function(e){e&&console.error("Deleting corrupted bundle "+a+" failed.")})),l=!0}}if(!(n=function(e,t){var n=c.translationsConfig[e.id];if(n){var r=g(n).contents,s=g(o.join(t,"nls.metadata.json")),i=Object.create(null);for(var a in s){var l=s[a],u=r[e.outDir+"/"+a];if(u){for(var d=[],p=0;p<l.keys.length;p++){var v=l.keys[p],h=u[f(v)?v:v.key];void 0===h&&(h=l.messages[p]),d.push(h)}i[a]=d}else i[a]=l.messages}return i}}(e,t))||l)return n;if(u)try{r.writeFileSync(a,JSON.stringify(n),{encoding:"utf8",flag:"wx"})}catch(e){if("EEXIST"===e.code)return n;throw e}return n}(e,t)}catch(e){console.log("Load or create bundle failed ",e)}if(!n){if(c.languagePackSupport)return h(t);var s=function(e){for(var t=c.language;t;){var n=o.join(e,"nls.bundle."+t+".json");if(r.existsSync(n))return n;var s=t.lastIndexOf("-");t=s>0?t.substring(0,s):void 0}if(void 0===t&&(n=o.join(e,"nls.bundle.json"),r.existsSync(n)))return n}(t);if(s)try{return g(s)}catch(e){console.log("Loading in the box message bundle failed.",e)}n=h(t)}return n}function w(e){if(!e)return i.localize;var t=o.extname(e);if(t&&(e=e.substr(0,e.length-t.length)),c.messageFormat===i.MessageFormat.both||c.messageFormat===i.MessageFormat.bundle){var n=function(e){for(var t,n=o.dirname(e);t=o.join(n,"nls.metadata.header.json"),!r.existsSync(t);){var s=o.dirname(n);if(s===n){t=void 0;break}n=s}return t}(e);if(n){var s=o.dirname(n),a=l[s];if(void 0===a)try{var u=JSON.parse(r.readFileSync(n,"utf8"));try{var d=m(u,s);a=v(s,d?{header:u,nlsBundle:d}:null)}catch(e){console.error("Failed to load nls bundle",e),a=v(s,null)}}catch(e){console.error("Failed to read header file",e),a=v(s,null)}if(a){var f=e.substr(s.length+1).replace(/\\/g,"/"),h=a.nlsBundle[f];return void 0===h?(console.error("Messages for file "+e+" not found. See console for details."),function(){return"Messages not found."}):p(h)}}}if(c.messageFormat===i.MessageFormat.both||c.messageFormat===i.MessageFormat.file)try{var w=g(function(e){var t;if(c.cacheLanguageResolution&&t)t=t;else{if(i.isPseudo||!c.language)t=".nls.json";else for(var n=c.language;n;){var o=".nls."+n+".json";if(r.existsSync(e+o)){t=o;break}var s=n.lastIndexOf("-");s>0?n=n.substring(0,s):(t=".nls.json",n=null)}c.cacheLanguageResolution&&(t=t)}return e+t}(e));return Array.isArray(w)?p(w):i.isDefined(w.messages)&&i.isDefined(w.keys)?p(w.messages):(console.error("String bundle '"+e+"' uses an unsupported format."),function(){return"File bundle has unsupported format. See console for details"})}catch(e){"ENOENT"!==e.code&&console.error("Failed to load single file bundle",e)}return console.error("Failed to load message bundle for file "+e),function(){return"Failed to load message bundle. See console for details."}}function b(e){return e&&(f(e.locale)&&(c.locale=e.locale.toLowerCase(),c.language=c.locale,l=Object.create(null)),void 0!==e.messageFormat&&(c.messageFormat=e.messageFormat),e.bundleFormat===i.BundleFormat.standalone&&!0===c.languagePackSupport&&(c.languagePackSupport=!1)),i.setPseudo("pseudo"===c.locale),w}!function(){if(c={locale:void 0,language:void 0,languagePackSupport:!1,cacheLanguageResolution:!0,messageFormat:i.MessageFormat.bundle},f(process.env.VSCODE_NLS_CONFIG))try{var e=JSON.parse(process.env.VSCODE_NLS_CONFIG),t=void 0;if(e.availableLanguages){var n=e.availableLanguages["*"];f(n)&&(t=n)}if(f(e.locale)&&(c.locale=e.locale.toLowerCase()),void 0===t?c.language=c.locale:"en"!==t&&(c.language=t),function(e){return!0===e||!1===e}(e._languagePackSupport)&&(c.languagePackSupport=e._languagePackSupport),f(e._cacheRoot)&&(c.cacheRoot=e._cacheRoot),f(e._languagePackId)&&(c.languagePackId=e._languagePackId),f(e._translationsConfigFile)){c.translationsConfigFile=e._translationsConfigFile;try{c.translationsConfig=g(c.translationsConfigFile)}catch(t){if(e._corruptedFile){var s=o.dirname(e._corruptedFile);r.exists(s,(function(t){t&&r.writeFile(e._corruptedFile,"corrupted","utf8",(function(e){console.error(e)}))}))}}}}catch(e){}i.setPseudo("pseudo"===c.locale),l=Object.create(null)}(),t.loadMessageBundle=w,t.config=b,s.default.install(Object.freeze({loadMessageBundle:w,config:b}))},363:(e,t)=>{function n(e){for(;e.length;){const t=e.pop();t&&t.dispose()}}Object.defineProperty(t,"__esModule",{value:!0}),t.Disposable=t.disposeAll=void 0,t.disposeAll=n,t.Disposable=class{constructor(){this._isDisposed=!1,this._disposables=[]}dispose(){this._isDisposed||(this._isDisposed=!0,n(this._disposables))}_register(e){return this._isDisposed?e.dispose():this._disposables.push(e),e}get isDisposed(){return this._isDisposed}}},162:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.SimpleBrowserManager=void 0;const o=n(410);t.SimpleBrowserManager=class{constructor(e){this.extensionUri=e}dispose(){this._activeView?.dispose(),this._activeView=void 0}show(e,t){if(this._activeView)this._activeView.show(e,t);else{const n=o.SimpleBrowserView.create(this.extensionUri,e,t);this.registerWebviewListeners(n),this._activeView=n}}restore(e,t){const n=t?.url??"",r=o.SimpleBrowserView.restore(this.extensionUri,n,e);this.registerWebviewListeners(r)}registerWebviewListeners(e){e.onDispose((()=>{this._activeView===e&&(this._activeView=void 0)}))}}},410:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.SimpleBrowserView=void 0;const o=n(549),r=n(472),s=n(363),i=r.loadMessageBundle(n(622).join(__dirname,"simpleBrowserView.ts"));class a extends s.Disposable{constructor(e,t,n){super(),this.extensionUri=e,this._onDidDispose=this._register(new o.EventEmitter),this.onDispose=this._onDidDispose.event,this._webviewPanel=this._register(n),this._register(this._webviewPanel.webview.onDidReceiveMessage((e=>{switch(e.type){case"openExternal":try{const t=o.Uri.parse(e.url);o.env.openExternal(t)}catch{}}}))),this._register(this._webviewPanel.onDidDispose((()=>{this.dispose()}))),this._register(o.workspace.onDidChangeConfiguration((e=>{if(e.affectsConfiguration("simpleBrowser.focusLockIndicator.enabled")){const e=o.workspace.getConfiguration("simpleBrowser");this._webviewPanel.webview.postMessage({type:"didChangeFocusLockIndicatorEnabled",focusLockEnabled:e.get("focusLockIndicator.enabled",!0)})}}))),this.show(t)}static create(e,t,n){const r=o.window.createWebviewPanel(a.viewType,a.title,{viewColumn:n?.viewColumn??o.ViewColumn.Active,preserveFocus:n?.preserveFocus},{enableScripts:!0,enableForms:!0,retainContextWhenHidden:!0,localResourceRoots:[o.Uri.joinPath(e,"media")]});return new a(e,t,r)}static restore(e,t,n){return new a(e,t,n)}dispose(){this._onDidDispose.fire(),super.dispose()}show(e,t){this._webviewPanel.webview.html=this.getHtml(e),this._webviewPanel.reveal(t?.viewColumn,t?.preserveFocus)}getHtml(e){const t=o.workspace.getConfiguration("simpleBrowser"),n=function(){let e="";const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";for(let n=0;n<64;n++)e+=t.charAt(Math.floor(Math.random()*t.length));return e}(),r=this.extensionResourceUrl("media","index.js"),s=this.extensionResourceUrl("media","main.css"),a=this.extensionResourceUrl("media","codicon.css");return`<!DOCTYPE html>\n\t\t\t<html>\n\t\t\t<head>\n\t\t\t\t<meta http-equiv="Content-type" content="text/html;charset=UTF-8">\n\t\t\t\t<meta http-equiv="Content-Security-Policy" content="\n\t\t\t\t\tdefault-src 'none';\n\t\t\t\t\tfont-src ${this._webviewPanel.webview.cspSource};\n\t\t\t\t\tstyle-src ${this._webviewPanel.webview.cspSource};\n\t\t\t\t\tscript-src 'nonce-${n}';\n\t\t\t\t\tframe-src *;\n\t\t\t\t\t">\n\t\t\t\t<meta id="simple-browser-settings" data-settings="${l=JSON.stringify({url:e,focusLockEnabled:t.get("focusLockIndicator.enabled",!0)}),l.toString().replace(/"/g,"&quot;")}">\n\t\t\t\t<link rel="stylesheet" type="text/css" href="${s}">\n\t\t\t\t<link rel="stylesheet" type="text/css" href="${a}">\n\t\t\t</head>\n\t\t\t<body>\n\t\t\t\t<header class="header">\n\t\t\t\t\t<nav class="controls">\n\t\t\t\t\t\t<button\n\t\t\t\t\t\t\ttitle="${i(0,null)}"\n\t\t\t\t\t\t\tclass="back-button icon"><i class="codicon codicon-arrow-left"></i></button>\n\t\t\t\t\t\t<button\n\t\t\t\t\t\t\ttitle="${i(1,null)}"\n\t\t\t\t\t\t\tclass="forward-button icon"><i class="codicon codicon-arrow-right"></i></button>\n\t\t\t\t\t\t<button\n\t\t\t\t\t\t\ttitle="${i(2,null)}"\n\t\t\t\t\t\t\tclass="reload-button icon"><i class="codicon codicon-refresh"></i></button>\n\t\t\t\t\t</nav>\n\t\t\t\t\t<input class="url-input" type="text">\n\t\t\t\t\t<nav class="controls">\n\t\t\t\t\t\t<button\n\t\t\t\t\t\t\ttitle="${i(3,null)}"\n\t\t\t\t\t\t\tclass="open-external-button icon"><i class="codicon codicon-link-external"></i></button>\n\t\t\t\t\t</nav>\n\t\t\t\t</header>\n\t\t\t\t<div class="content">\n\t\t\t\t\t<div class="iframe-focused-alert">${i(4,null)}</div>\n\t\t\t\t\t<iframe sandbox="allow-scripts allow-forms allow-same-origin"></iframe>\n\t\t\t\t</div>\n\t\t\t\t<script src="${r}" nonce="${n}"><\/script>\n\t\t\t</body>\n\t\t\t</html>`;var l}extensionResourceUrl(...e){return this._webviewPanel.webview.asWebviewUri(o.Uri.joinPath(this.extensionUri,...e))}}t.SimpleBrowserView=a,a.viewType="simpleBrowser.view",a.title=i(5,null)},747:e=>{e.exports=require("fs")},622:e=>{e.exports=require("path")},549:e=>{e.exports=require("vscode")}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var s=t[o]={exports:{}};return e[o](s,s.exports,n),s.exports}var o={};(()=>{var e=o;Object.defineProperty(e,"__esModule",{value:!0}),e.activate=void 0;const t=n(549),r=n(472),s=n(162),i=n(410),a=r.loadMessageBundle(n(622).join(__dirname,"extension.ts")),l=new Set(["localhost","127.0.0.1","0:0:0:0:0:0:0:1","::1","0.0.0.0","0:0:0:0:0:0:0:0","::"]);e.activate=function(e){const n=new s.SimpleBrowserManager(e.extensionUri);e.subscriptions.push(n),e.subscriptions.push(t.window.registerWebviewPanelSerializer(i.SimpleBrowserView.viewType,{deserializeWebviewPanel:async(e,t)=>{n.restore(e,t)}})),e.subscriptions.push(t.commands.registerCommand("simpleBrowser.show",(async e=>{e||(e=await t.window.showInputBox({placeHolder:a(0,null),prompt:a(1,null)})),e&&n.show(e)}))),e.subscriptions.push(t.commands.registerCommand("simpleBrowser.api.open",((e,t)=>{n.show(e.toString(),t)}))),e.subscriptions.push(t.window.registerExternalUriOpener("simpleBrowser.open",{canOpenExternalUri(e){const n=new URL(e.toString());return l.has(n.hostname)?"undefined"!=typeof navigator&&t.env.uiKind===t.UIKind.Web?t.ExternalUriOpenerPriority.Default:t.ExternalUriOpenerPriority.Option:t.ExternalUriOpenerPriority.None},openExternalUri:e=>n.show(e.toString(),{viewColumn:t.window.activeTextEditor?t.ViewColumn.Beside:t.ViewColumn.Active})},{schemes:["http","https"],label:a(2,null)}))}})();var r=exports;for(var s in o)r[s]=o[s];o.__esModule&&Object.defineProperty(r,"__esModule",{value:!0})})();
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/undefined/extensions/simple-browser/dist/extension.js.map