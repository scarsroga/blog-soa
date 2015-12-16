/*------------------------------------------------------------------------
# Copyright (C) 2005-2012 WebxSolution Ltd. All Rights Reserved.
# @license - GPLv2.0
# Author: WebxSolution Ltd
# Websites:  http://www.webxsolution.com
# Terms of Use: An extension that is derived from the JoomlaCK editor will only be allowed under the following conditions: http://joomlackeditor.com/terms-of-use
# ------------------------------------------------------------------------*/ 
CKEDITOR.plugins.add("html5support",{requires:["styles"],beforeInit:function(a){CKEDITOR.dtd=function(){var a=CKEDITOR.tools.extend,b={isindex:1,fieldset:1},c={input:1,button:1,select:1,textarea:1,label:1},d=a({a:1},c),e=a({iframe:1},d),f={hr:1,ul:1,menu:1,div:1,section:1,header:1,footer:1,nav:1,article:1,aside:1,figure:1,dialog:1,hgroup:1,mark:1,time:1,meter:1,command:1,keygen:1,output:1,progress:1,audio:1,video:1,details:1,datagrid:1,datalist:1,blockquote:1,noscript:1,table:1,center:1,address:1,dir:1,pre:1,h5:1,dl:1,h4:1,noframes:1,h6:1,ol:1,h1:1,h3:1,h2:1},g={ins:1,del:1,script:1,style:1},h=a({b:1,acronym:1,bdo:1,"var":1,"#":1,abbr:1,code:1,br:1,i:1,cite:1,kbd:1,u:1,strike:1,s:1,tt:1,strong:1,q:1,samp:1,em:1,dfn:1,span:1,wbr:1},g),i=a({sub:1,img:1,object:1,sup:1,basefont:1,map:1,applet:1,font:1,big:1,small:1,mark:1},h),j=a({p:1},i),k=a({iframe:1},i,c),l={img:1,noscript:1,br:1,kbd:1,center:1,button:1,basefont:1,h5:1,h4:1,samp:1,h6:1,ol:1,h1:1,h3:1,h2:1,form:1,font:1,"#":1,select:1,menu:1,ins:1,abbr:1,label:1,code:1,table:1,script:1,cite:1,input:1,iframe:1,strong:1,textarea:1,noframes:1,big:1,small:1,span:1,hr:1,sub:1,bdo:1,"var":1,div:1,section:1,header:1,footer:1,nav:1,article:1,aside:1,figure:1,dialog:1,hgroup:1,mark:1,time:1,meter:1,menu:1,command:1,keygen:1,output:1,progress:1,audio:1,video:1,details:1,datagrid:1,datalist:1,object:1,sup:1,strike:1,dir:1,map:1,dl:1,applet:1,del:1,isindex:1,fieldset:1,ul:1,b:1,acronym:1,a:1,blockquote:1,i:1,u:1,s:1,tt:1,address:1,q:1,pre:1,p:1,em:1,dfn:1},m=a({a:1},k),n={tr:1},o={"#":1},p=a({param:1},l),q=a({form:1},b,e,f,j),r={li:1},s={style:1,script:1},t={base:1,link:1,meta:1,title:1},u=a(t,s),v={head:1,body:1},w={html:1};var x={address:1,blockquote:1,center:1,dir:1,div:1,section:1,header:1,footer:1,nav:1,article:1,aside:1,figure:1,dialog:1,hgroup:1,time:1,meter:1,menu:1,command:1,keygen:1,output:1,progress:1,audio:1,video:1,details:1,datagrid:1,datalist:1,dl:1,fieldset:1,form:1,h1:1,h2:1,h3:1,h4:1,h5:1,h6:1,hr:1,isindex:1,noframes:1,ol:1,p:1,pre:1,table:1,ul:1};return{$nonBodyContent:a(w,v,t),$block:x,$blockLimit:{body:1,div:1,section:1,header:1,footer:1,nav:1,article:1,aside:1,figure:1,dialog:1,hgroup:1,time:1,meter:1,menu:1,command:1,keygen:1,output:1,progress:1,audio:1,video:1,details:1,datagrid:1,datalist:1,td:1,th:1,caption:1,form:1},$inline:m,$body:a({script:1,style:1},x),$cdata:{script:1,style:1},$empty:{area:1,base:1,br:1,col:1,hr:1,img:1,input:1,link:1,meta:1,param:1,wbr:1},$listItem:{dd:1,dt:1,li:1},$list:{ul:1,ol:1,dl:1},$nonEditable:{applet:1,button:1,embed:1,iframe:1,map:1,object:1,option:1,script:1,textarea:1,param:1,audio:1,video:1},$captionBlock:{caption:1,legend:1},$removeEmpty:{abbr:1,acronym:1,address:1,b:1,bdo:1,big:1,cite:1,code:1,del:1,dfn:1,em:1,font:1,i:1,ins:1,label:1,kbd:1,q:1,s:1,samp:1,small:1,span:1,strike:1,strong:1,sub:1,sup:1,tt:1,u:1,"var":1,mark:1},$tabIndex:{a:1,area:1,button:1,input:1,object:1,select:1,textarea:1},$tableContent:{caption:1,col:1,colgroup:1,tbody:1,td:1,tfoot:1,th:1,thead:1,tr:1},html:v,head:u,style:o,script:o,body:q,base:{},link:{},meta:{},title:o,col:{},tr:{td:1,th:1},img:{},colgroup:{col:1},noscript:q,td:q,br:{},wbr:{},th:q,center:q,kbd:m,button:a(j,f),basefont:{},h5:m,h4:m,samp:m,h6:m,ol:r,h1:m,h3:m,option:o,h2:m,form:a(b,e,f,j),select:{optgroup:1,option:1},font:m,ins:m,menu:r,abbr:m,label:m,table:{thead:1,col:1,tbody:1,tr:1,colgroup:1,caption:1,tfoot:1},code:m,tfoot:n,cite:m,li:q,input:{},iframe:q,strong:m,textarea:o,noframes:q,big:m,small:m,span:m,hr:{},dt:m,sub:m,optgroup:{option:1},param:{},bdo:m,"var":m,div:q,object:p,sup:m,dd:q,strike:m,area:{},dir:r,map:a({area:1,form:1,p:1},b,g,f),applet:p,dl:{dt:1,dd:1},del:m,isindex:{},fieldset:a({legend:1},l),thead:n,ul:r,acronym:m,b:m,a:k,blockquote:q,caption:m,i:m,u:m,tbody:n,s:m,address:a(e,j),tt:m,legend:m,q:m,pre:a(h,d),p:m,em:m,dfn:m,section:q,header:q,footer:q,nav:q,article:q,aside:q,figure:q,dialog:q,hgroup:q,mark:m,time:m,meter:m,menu:m,command:m,keygen:m,output:m,progress:p,audio:p,video:p,details:p,datagrid:p,datalist:p}}();var b=CKEDITOR.htmlParser.element.prototype;CKEDITOR.htmlParser.element=function(a,b){this.name=a;this.attributes=b||(b={});this.children=[];var c=b._cke_real_element_type||a;var d=CKEDITOR.dtd,e=!!(d.$nonBodyContent[c]||d.$block[c]||d.$listItem[c]||d.$tableContent[c]||d.$nonEditable[c]||c=="br"),f=!!d.$empty[a];this.isEmpty=f;this.isUnknown=!d[a];this._={isBlockLike:e,hasInlineStarted:f||!e}};CKEDITOR.htmlParser.element.prototype=b;var c=function(a,b){a=a[0];b=b[0];return a<b?-1:a>b?1:0};CKEDITOR.htmlParser.element.prototype.writeHtml=function(a,b){var d=this.attributes;var e=this,f=e.name,g,h,i;var j;e.filterChildren=function(){if(!j){var a=new CKEDITOR.htmlParser.basicWriter;CKEDITOR.htmlParser.fragment.prototype.writeChildrenHtml.call(e,a,b);e.children=(new CKEDITOR.htmlParser.fragment.fromHtml(a.getHtml())).children;j=1}};if(b){while(true){if(!(f=b.onElementName(f)))return;e.name=f;if(!(e=b.onElement(e)))return;e.parent=this.parent;if(e.name==f)break;if(e.type!=CKEDITOR.NODE_ELEMENT){e.writeHtml(a,b);return}f=e.name;if(!f){this.writeChildrenHtml.call(e,a,j?null:b);return}}d=e.attributes}a.openTag(f,d);var k=[];for(var l=0;l<2;l++){for(g in d){h=g;i=d[g];if(l==1)k.push([g,i]);else if(b){while(true){if(!(h=b.onAttributeName(g))){delete d[g];break}else if(h!=g){delete d[g];g=h;continue}else break}if(h){if((i=b.onAttribute(e,h,i))===false)delete d[h];else d[h]=i}}}}if(a.sortAttributes)k.sort(c);var m=k.length;for(l=0;l<m;l++){var n=k[l];a.attribute(n[0],n[1])}a.openTagClose(f,e.isEmpty);if(!e.isEmpty){this.writeChildrenHtml.call(e,a,j?null:b);a.closeTag(f)}};var d={colgroup:1,dd:1,dt:1,li:1,option:1,p:1,td:1,tfoot:1,th:1,thead:1,tr:1};var e=CKEDITOR.tools.extend({table:1,ul:1,ol:1,dl:1},CKEDITOR.dtd.table,CKEDITOR.dtd.ul,CKEDITOR.dtd.ol,CKEDITOR.dtd.dl),f=CKEDITOR.dtd.$list,g=CKEDITOR.dtd.$listItem;CKEDITOR.htmlParser.fragment.fromHtml=function(a,b){function o(a){var b;if(j.length>0){for(var c=0;c<j.length;c++){var d=j[c],e=d.name,f=CKEDITOR.dtd[e],g=l.name&&CKEDITOR.dtd[l.name];if((!g||g[e])&&(!a||!f||f[a]||!CKEDITOR.dtd[a])){if(!b){p();b=1}d=d.clone();d.parent=l;l=d;j.splice(c,1);c--}}}}function p(a){while(k.length-(a||0)>0)l.add(k.shift())}function q(a,d,e){d=d||l||i;if(b&&!d.type){var f,g;if(a.attributes&&(g=a.attributes["_cke_real_element_type"]))f=g;else f=a.name;if(f&&!(f in CKEDITOR.dtd.$body)&&!(f in CKEDITOR.dtd.$nonBodyContent)){var h=l;l=d;c.onTagOpen(b,{});d=l;if(e)l=h}}if(a._.isBlockLike&&a.name!="pre"){var j=a.children.length,k=a.children[j-1],m;if(k&&k.type==CKEDITOR.NODE_TEXT){if(!(m=CKEDITOR.tools.rtrim(k.value)))a.children.length=j-1;else k.value=m}}d.add(a);if(a.returnPoint){l=a.returnPoint;delete a.returnPoint}}var c=new CKEDITOR.htmlParser,h=[],i=new CKEDITOR.htmlParser.fragment,j=[],k=[],l=i,m=false,n;c.onTagOpen=function(a,b,h){var i=new CKEDITOR.htmlParser.element(a,b);if(i.isUnknown&&h)i.isEmpty=true;if(CKEDITOR.dtd.$removeEmpty[a]){j.push(i);return}else if(a=="pre")m=true;else if(a=="br"&&m){l.add(new CKEDITOR.htmlParser.text("\n"));return}if(a=="br"){k.push(i);return}var r=l.name;var s=r&&(CKEDITOR.dtd[r]||(l._.isBlockLike?CKEDITOR.dtd.div:CKEDITOR.dtd.span));if(s&&!i.isUnknown&&!l.isUnknown&&!s[a]){var t=false,u;if(a in f&&r in f){var v=l.children,w=v[v.length-1];if(!(w&&w.name in g))q(w=new CKEDITOR.htmlParser.element("li"),l);n=l,u=w}else if(a==r){q(l,l.parent)}else if(a in CKEDITOR.dtd.$listItem){c.onTagOpen("ul",{});u=l;t=true}else{if(e[r]){if(!n)n=l}else{q(l,l.parent,true);if(!d[r]){j.unshift(l)}}t=true}if(u)l=u;else l=l.returnPoint||l.parent;if(t){c.onTagOpen.apply(this,arguments);return}}o(a);p();i.parent=l;i.returnPoint=n;n=0;if(i.isEmpty)q(i);else l=i};c.onTagClose=function(a){for(var c=j.length-1;c>=0;c--){if(a==j[c].name){j.splice(c,1);return}}var d=[],e=[],f=l;while(f.type&&f.name!=a){if(!f._.isBlockLike)e.unshift(f);d.push(f);f=f.parent}if(f.type){for(c=0;c<d.length;c++){var g=d[c];q(g,g.parent)}l=f;if(l.name=="pre")m=false;if(f._.isBlockLike)p();q(f,f.parent);if(f==l)l=l.parent;j=j.concat(e)}if(a=="body")b=false};c.onText=function(a){if(!l._.hasInlineStarted&&!m){a=CKEDITOR.tools.ltrim(a);if(a.length===0)return}p();o();if(b&&(!l.type||l.name=="body")&&CKEDITOR.tools.trim(a)){this.onTagOpen(b,{})}if(!m)a=a.replace(/[\t\r\n ]{2,}|[\t\r\n]/g," ");l.add(new CKEDITOR.htmlParser.text(a))};c.onCDATA=function(a){l.add(new CKEDITOR.htmlParser.cdata(a))};c.onComment=function(a){o();l.add(new CKEDITOR.htmlParser.comment(a))};c.parse(a);p(!CKEDITOR.env.ie&&1);while(l.type){var r=l.parent,s=l;if(b&&(!r.type||r.name=="body")&&!CKEDITOR.dtd.$body[s.name]){l=r;c.onTagOpen(b,{});r=l}r.add(s);l=r}return i}},init:function(a){var b=CKEDITOR.style.prototype;var c=CKEDITOR.style.getStyleText;(function(){function g(a,b){for(var c in a){a[c]=a[c].replace(d,function(a,c){return b[c]})}}var a={address:1,div:1,h1:1,h2:1,h3:1,h4:1,h5:1,h6:1,p:1,pre:1,section:1,header:1,footer:1,nav:1,article:1,aside:1,figure:1,dialog:1,hgroup:1,time:1,meter:1,menu:1,command:1,keygen:1,output:1,progress:1,details:1,datagrid:1,datalist:1},b={a:1,embed:1,hr:1,img:1,li:1,object:1,ol:1,table:1,td:1,tr:1,th:1,ul:1,dl:1,dt:1,dd:1,form:1,audio:1,video:1};var c=/\s*(?:;\s*|$)/,d=/#\((.+?)\)/g;var e=CKEDITOR.dom.walker.bookmark(0,1),f=CKEDITOR.dom.walker.whitespaces(1);var d=/#\((.+?)\)/g;CKEDITOR.style=function(c,d){if(d){c=CKEDITOR.tools.clone(c);g(c.attributes,d);g(c.styles,d)}var e=this.element=c.element?typeof c.element=="string"?c.element.toLowerCase():c.element:"*";this.type=a[e]?CKEDITOR.STYLE_BLOCK:b[e]?CKEDITOR.STYLE_OBJECT:CKEDITOR.STYLE_INLINE;if(typeof this.element=="object")this.type=CKEDITOR.STYLE_OBJECT;this._={definition:c}}})();CKEDITOR.style.prototype=b;CKEDITOR.style.getStyleText=c},afterInit:function(a){CKEDITOR.ui.dialog.file.prototype.reset=function(){function j(){c.$.open();if(CKEDITOR.env.isCustomDomain())c.$.domain=document.domain;var a="";if(d.size)a=d.size-(CKEDITOR.env.ie?7:0);c.$.write(['<html dir="'+h+'" lang="'+i+'"><head><title></title></head><body style="margin: 0; overflow: hidden; background: transparent;">','<form enctype="multipart/form-data" method="POST" dir="'+h+'" lang="'+i+'" action="',CKEDITOR.tools.htmlEncode(d.action),'">','<input type="file" name="',CKEDITOR.tools.htmlEncode(d.name||d.id||"cke_upload"),'" size="',CKEDITOR.tools.htmlEncode(a>0?a:""),d.multiple?'" multiple="':"",'" />',"</form>","</body></html>","<script>window.parent.CKEDITOR.tools.callFunction("+f+");","window.onbeforeunload = function() {window.parent.CKEDITOR.tools.callFunction("+g+")}</script>"].join(""));c.$.close();for(var b=0;b<e.length;b++)e[b].enable()}var a=this._,b=CKEDITOR.document.getById(a.frameId),c=b.getFrameDocument(),d=a.definition,e=a.buttons,f=this.formLoadedNumber,g=this.formUnloadNumber,h=a.dialog._.editor.lang.dir,i=a.dialog._.editor.langCode;if(!f){f=this.formLoadedNumber=CKEDITOR.tools.addFunction(function(){this.fire("formLoaded")},this);g=this.formUnloadNumber=CKEDITOR.tools.addFunction(function(){this.getInputElement().clearCustomData()},this);this.getDialog()._.editor.on("destroy",function(){CKEDITOR.tools.removeFunction(f);CKEDITOR.tools.removeFunction(g)})}if(CKEDITOR.env.gecko)setTimeout(j,500);else j()}}})