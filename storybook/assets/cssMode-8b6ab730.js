var Le=Object.defineProperty;var s=(e,n)=>Le(e,"name",{value:n,configurable:!0});import{m as Se}from"./Listing.stories-134421dc.js";import"./jsx-runtime-36919d79.js";import"./iframe-1bf65717.js";import"./index-13162957.js";import"./svg-5fca9131.js";import"./PenrosePrograms-51cde857.js";import"./vector-wedge.substance-7c0b2516.js";/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.31.1(337587859b1c171314b40503171188b6cea6a32a)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/var Pe=Object.defineProperty,je=Object.getOwnPropertyDescriptor,Fe=Object.getOwnPropertyNames,Ne=Object.prototype.hasOwnProperty,We=s(e=>Pe(e,"__esModule",{value:!0}),"__markAsModule"),Ue=s((e,n,i)=>{if(n&&typeof n=="object"||typeof n=="function")for(let r of Fe(n))!Ne.call(e,r)&&r!=="default"&&Pe(e,r,{get:()=>n[r],enumerable:!(i=je(n,r))||i.enumerable});return e},"__reExport"),d={};We(d);Ue(d,Se);var Ve=2*60*1e3,Oe=s(class{constructor(e){this._defaults=e,this._worker=null,this._client=null,this._idleCheckInterval=window.setInterval(()=>this._checkIfIdle(),30*1e3),this._lastUsedTime=0,this._configChangeListener=this._defaults.onDidChange(()=>this._stopWorker())}_stopWorker(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null}dispose(){clearInterval(this._idleCheckInterval),this._configChangeListener.dispose(),this._stopWorker()}_checkIfIdle(){if(!this._worker)return;Date.now()-this._lastUsedTime>Ve&&this._stopWorker()}_getClient(){return this._lastUsedTime=Date.now(),this._client||(this._worker=d.editor.createWebWorker({moduleId:"vs/language/css/cssWorker",label:this._defaults.languageId,createData:{options:this._defaults.options,languageId:this._defaults.languageId}}),this._client=this._worker.getProxy()),this._client}getLanguageServiceWorker(...e){let n;return this._getClient().then(i=>{n=i}).then(i=>{if(this._worker)return this._worker.withSyncedResources(e)}).then(i=>n)}},"WorkerManager"),Y;(function(e){e.MIN_VALUE=-2147483648,e.MAX_VALUE=2147483647})(Y||(Y={}));var W;(function(e){e.MIN_VALUE=0,e.MAX_VALUE=2147483647})(W||(W={}));var b;(function(e){function n(r,t){return r===Number.MAX_VALUE&&(r=W.MAX_VALUE),t===Number.MAX_VALUE&&(t=W.MAX_VALUE),{line:r,character:t}}s(n,"create"),e.create=n;function i(r){var t=r;return u.objectLiteral(t)&&u.uinteger(t.line)&&u.uinteger(t.character)}s(i,"is"),e.is=i})(b||(b={}));var _;(function(e){function n(r,t,a,o){if(u.uinteger(r)&&u.uinteger(t)&&u.uinteger(a)&&u.uinteger(o))return{start:b.create(r,t),end:b.create(a,o)};if(b.is(r)&&b.is(t))return{start:r,end:t};throw new Error("Range#create called with invalid arguments["+r+", "+t+", "+a+", "+o+"]")}s(n,"create"),e.create=n;function i(r){var t=r;return u.objectLiteral(t)&&b.is(t.start)&&b.is(t.end)}s(i,"is"),e.is=i})(_||(_={}));var z;(function(e){function n(r,t){return{uri:r,range:t}}s(n,"create"),e.create=n;function i(r){var t=r;return u.defined(t)&&_.is(t.range)&&(u.string(t.uri)||u.undefined(t.uri))}s(i,"is"),e.is=i})(z||(z={}));var Z;(function(e){function n(r,t,a,o){return{targetUri:r,targetRange:t,targetSelectionRange:a,originSelectionRange:o}}s(n,"create"),e.create=n;function i(r){var t=r;return u.defined(t)&&_.is(t.targetRange)&&u.string(t.targetUri)&&(_.is(t.targetSelectionRange)||u.undefined(t.targetSelectionRange))&&(_.is(t.originSelectionRange)||u.undefined(t.originSelectionRange))}s(i,"is"),e.is=i})(Z||(Z={}));var X;(function(e){function n(r,t,a,o){return{red:r,green:t,blue:a,alpha:o}}s(n,"create"),e.create=n;function i(r){var t=r;return u.numberRange(t.red,0,1)&&u.numberRange(t.green,0,1)&&u.numberRange(t.blue,0,1)&&u.numberRange(t.alpha,0,1)}s(i,"is"),e.is=i})(X||(X={}));var K;(function(e){function n(r,t){return{range:r,color:t}}s(n,"create"),e.create=n;function i(r){var t=r;return _.is(t.range)&&X.is(t.color)}s(i,"is"),e.is=i})(K||(K={}));var ee;(function(e){function n(r,t,a){return{label:r,textEdit:t,additionalTextEdits:a}}s(n,"create"),e.create=n;function i(r){var t=r;return u.string(t.label)&&(u.undefined(t.textEdit)||C.is(t))&&(u.undefined(t.additionalTextEdits)||u.typedArray(t.additionalTextEdits,C.is))}s(i,"is"),e.is=i})(ee||(ee={}));var M;(function(e){e.Comment="comment",e.Imports="imports",e.Region="region"})(M||(M={}));var te;(function(e){function n(r,t,a,o,c){var l={startLine:r,endLine:t};return u.defined(a)&&(l.startCharacter=a),u.defined(o)&&(l.endCharacter=o),u.defined(c)&&(l.kind=c),l}s(n,"create"),e.create=n;function i(r){var t=r;return u.uinteger(t.startLine)&&u.uinteger(t.startLine)&&(u.undefined(t.startCharacter)||u.uinteger(t.startCharacter))&&(u.undefined(t.endCharacter)||u.uinteger(t.endCharacter))&&(u.undefined(t.kind)||u.string(t.kind))}s(i,"is"),e.is=i})(te||(te={}));var B;(function(e){function n(r,t){return{location:r,message:t}}s(n,"create"),e.create=n;function i(r){var t=r;return u.defined(t)&&z.is(t.location)&&u.string(t.message)}s(i,"is"),e.is=i})(B||(B={}));var I;(function(e){e.Error=1,e.Warning=2,e.Information=3,e.Hint=4})(I||(I={}));var re;(function(e){e.Unnecessary=1,e.Deprecated=2})(re||(re={}));var ne;(function(e){function n(i){var r=i;return r!=null&&u.string(r.href)}s(n,"is"),e.is=n})(ne||(ne={}));var U;(function(e){function n(r,t,a,o,c,l){var f={range:r,message:t};return u.defined(a)&&(f.severity=a),u.defined(o)&&(f.code=o),u.defined(c)&&(f.source=c),u.defined(l)&&(f.relatedInformation=l),f}s(n,"create"),e.create=n;function i(r){var t,a=r;return u.defined(a)&&_.is(a.range)&&u.string(a.message)&&(u.number(a.severity)||u.undefined(a.severity))&&(u.integer(a.code)||u.string(a.code)||u.undefined(a.code))&&(u.undefined(a.codeDescription)||u.string((t=a.codeDescription)===null||t===void 0?void 0:t.href))&&(u.string(a.source)||u.undefined(a.source))&&(u.undefined(a.relatedInformation)||u.typedArray(a.relatedInformation,B.is))}s(i,"is"),e.is=i})(U||(U={}));var T;(function(e){function n(r,t){for(var a=[],o=2;o<arguments.length;o++)a[o-2]=arguments[o];var c={title:r,command:t};return u.defined(a)&&a.length>0&&(c.arguments=a),c}s(n,"create"),e.create=n;function i(r){var t=r;return u.defined(t)&&u.string(t.title)&&u.string(t.command)}s(i,"is"),e.is=i})(T||(T={}));var C;(function(e){function n(a,o){return{range:a,newText:o}}s(n,"replace"),e.replace=n;function i(a,o){return{range:{start:a,end:a},newText:o}}s(i,"insert"),e.insert=i;function r(a){return{range:a,newText:""}}s(r,"del"),e.del=r;function t(a){var o=a;return u.objectLiteral(o)&&u.string(o.newText)&&_.is(o.range)}s(t,"is"),e.is=t})(C||(C={}));var R;(function(e){function n(r,t,a){var o={label:r};return t!==void 0&&(o.needsConfirmation=t),a!==void 0&&(o.description=a),o}s(n,"create"),e.create=n;function i(r){var t=r;return t!==void 0&&u.objectLiteral(t)&&u.string(t.label)&&(u.boolean(t.needsConfirmation)||t.needsConfirmation===void 0)&&(u.string(t.description)||t.description===void 0)}s(i,"is"),e.is=i})(R||(R={}));var m;(function(e){function n(i){var r=i;return typeof r=="string"}s(n,"is"),e.is=n})(m||(m={}));var x;(function(e){function n(a,o,c){return{range:a,newText:o,annotationId:c}}s(n,"replace"),e.replace=n;function i(a,o,c){return{range:{start:a,end:a},newText:o,annotationId:c}}s(i,"insert"),e.insert=i;function r(a,o){return{range:a,newText:"",annotationId:o}}s(r,"del"),e.del=r;function t(a){var o=a;return C.is(o)&&(R.is(o.annotationId)||m.is(o.annotationId))}s(t,"is"),e.is=t})(x||(x={}));var V;(function(e){function n(r,t){return{textDocument:r,edits:t}}s(n,"create"),e.create=n;function i(r){var t=r;return u.defined(t)&&O.is(t.textDocument)&&Array.isArray(t.edits)}s(i,"is"),e.is=i})(V||(V={}));var D;(function(e){function n(r,t,a){var o={kind:"create",uri:r};return t!==void 0&&(t.overwrite!==void 0||t.ignoreIfExists!==void 0)&&(o.options=t),a!==void 0&&(o.annotationId=a),o}s(n,"create"),e.create=n;function i(r){var t=r;return t&&t.kind==="create"&&u.string(t.uri)&&(t.options===void 0||(t.options.overwrite===void 0||u.boolean(t.options.overwrite))&&(t.options.ignoreIfExists===void 0||u.boolean(t.options.ignoreIfExists)))&&(t.annotationId===void 0||m.is(t.annotationId))}s(i,"is"),e.is=i})(D||(D={}));var L;(function(e){function n(r,t,a,o){var c={kind:"rename",oldUri:r,newUri:t};return a!==void 0&&(a.overwrite!==void 0||a.ignoreIfExists!==void 0)&&(c.options=a),o!==void 0&&(c.annotationId=o),c}s(n,"create"),e.create=n;function i(r){var t=r;return t&&t.kind==="rename"&&u.string(t.oldUri)&&u.string(t.newUri)&&(t.options===void 0||(t.options.overwrite===void 0||u.boolean(t.options.overwrite))&&(t.options.ignoreIfExists===void 0||u.boolean(t.options.ignoreIfExists)))&&(t.annotationId===void 0||m.is(t.annotationId))}s(i,"is"),e.is=i})(L||(L={}));var S;(function(e){function n(r,t,a){var o={kind:"delete",uri:r};return t!==void 0&&(t.recursive!==void 0||t.ignoreIfNotExists!==void 0)&&(o.options=t),a!==void 0&&(o.annotationId=a),o}s(n,"create"),e.create=n;function i(r){var t=r;return t&&t.kind==="delete"&&u.string(t.uri)&&(t.options===void 0||(t.options.recursive===void 0||u.boolean(t.options.recursive))&&(t.options.ignoreIfNotExists===void 0||u.boolean(t.options.ignoreIfNotExists)))&&(t.annotationId===void 0||m.is(t.annotationId))}s(i,"is"),e.is=i})(S||(S={}));var $;(function(e){function n(i){var r=i;return r&&(r.changes!==void 0||r.documentChanges!==void 0)&&(r.documentChanges===void 0||r.documentChanges.every(function(t){return u.string(t.kind)?D.is(t)||L.is(t)||S.is(t):V.is(t)}))}s(n,"is"),e.is=n})($||($={}));var N=function(){function e(n,i){this.edits=n,this.changeAnnotations=i}return s(e,"TextEditChangeImpl2"),e.prototype.insert=function(n,i,r){var t,a;if(r===void 0?t=C.insert(n,i):m.is(r)?(a=r,t=x.insert(n,i,r)):(this.assertChangeAnnotations(this.changeAnnotations),a=this.changeAnnotations.manage(r),t=x.insert(n,i,a)),this.edits.push(t),a!==void 0)return a},e.prototype.replace=function(n,i,r){var t,a;if(r===void 0?t=C.replace(n,i):m.is(r)?(a=r,t=x.replace(n,i,r)):(this.assertChangeAnnotations(this.changeAnnotations),a=this.changeAnnotations.manage(r),t=x.replace(n,i,a)),this.edits.push(t),a!==void 0)return a},e.prototype.delete=function(n,i){var r,t;if(i===void 0?r=C.del(n):m.is(i)?(t=i,r=x.del(n,i)):(this.assertChangeAnnotations(this.changeAnnotations),t=this.changeAnnotations.manage(i),r=x.del(n,t)),this.edits.push(r),t!==void 0)return t},e.prototype.add=function(n){this.edits.push(n)},e.prototype.all=function(){return this.edits},e.prototype.clear=function(){this.edits.splice(0,this.edits.length)},e.prototype.assertChangeAnnotations=function(n){if(n===void 0)throw new Error("Text edit change is not configured to manage change annotations.")},e}(),ie=function(){function e(n){this._annotations=n===void 0?Object.create(null):n,this._counter=0,this._size=0}return s(e,"ChangeAnnotations2"),e.prototype.all=function(){return this._annotations},Object.defineProperty(e.prototype,"size",{get:function(){return this._size},enumerable:!1,configurable:!0}),e.prototype.manage=function(n,i){var r;if(m.is(n)?r=n:(r=this.nextId(),i=n),this._annotations[r]!==void 0)throw new Error("Id "+r+" is already in use.");if(i===void 0)throw new Error("No annotation provided for id "+r);return this._annotations[r]=i,this._size++,r},e.prototype.nextId=function(){return this._counter++,this._counter.toString()},e}();(function(){function e(n){var i=this;this._textEditChanges=Object.create(null),n!==void 0?(this._workspaceEdit=n,n.documentChanges?(this._changeAnnotations=new ie(n.changeAnnotations),n.changeAnnotations=this._changeAnnotations.all(),n.documentChanges.forEach(function(r){if(V.is(r)){var t=new N(r.edits,i._changeAnnotations);i._textEditChanges[r.textDocument.uri]=t}})):n.changes&&Object.keys(n.changes).forEach(function(r){var t=new N(n.changes[r]);i._textEditChanges[r]=t})):this._workspaceEdit={}}return s(e,"WorkspaceChange2"),Object.defineProperty(e.prototype,"edit",{get:function(){return this.initDocumentChanges(),this._changeAnnotations!==void 0&&(this._changeAnnotations.size===0?this._workspaceEdit.changeAnnotations=void 0:this._workspaceEdit.changeAnnotations=this._changeAnnotations.all()),this._workspaceEdit},enumerable:!1,configurable:!0}),e.prototype.getTextEditChange=function(n){if(O.is(n)){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");var i={uri:n.uri,version:n.version},r=this._textEditChanges[i.uri];if(!r){var t=[],a={textDocument:i,edits:t};this._workspaceEdit.documentChanges.push(a),r=new N(t,this._changeAnnotations),this._textEditChanges[i.uri]=r}return r}else{if(this.initChanges(),this._workspaceEdit.changes===void 0)throw new Error("Workspace edit is not configured for normal text edit changes.");var r=this._textEditChanges[n];if(!r){var t=[];this._workspaceEdit.changes[n]=t,r=new N(t),this._textEditChanges[n]=r}return r}},e.prototype.initDocumentChanges=function(){this._workspaceEdit.documentChanges===void 0&&this._workspaceEdit.changes===void 0&&(this._changeAnnotations=new ie,this._workspaceEdit.documentChanges=[],this._workspaceEdit.changeAnnotations=this._changeAnnotations.all())},e.prototype.initChanges=function(){this._workspaceEdit.documentChanges===void 0&&this._workspaceEdit.changes===void 0&&(this._workspaceEdit.changes=Object.create(null))},e.prototype.createFile=function(n,i,r){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");var t;R.is(i)||m.is(i)?t=i:r=i;var a,o;if(t===void 0?a=D.create(n,r):(o=m.is(t)?t:this._changeAnnotations.manage(t),a=D.create(n,r,o)),this._workspaceEdit.documentChanges.push(a),o!==void 0)return o},e.prototype.renameFile=function(n,i,r,t){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");var a;R.is(r)||m.is(r)?a=r:t=r;var o,c;if(a===void 0?o=L.create(n,i,t):(c=m.is(a)?a:this._changeAnnotations.manage(a),o=L.create(n,i,t,c)),this._workspaceEdit.documentChanges.push(o),c!==void 0)return c},e.prototype.deleteFile=function(n,i,r){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");var t;R.is(i)||m.is(i)?t=i:r=i;var a,o;if(t===void 0?a=S.create(n,r):(o=m.is(t)?t:this._changeAnnotations.manage(t),a=S.create(n,r,o)),this._workspaceEdit.documentChanges.push(a),o!==void 0)return o},e})();var ae;(function(e){function n(r){return{uri:r}}s(n,"create"),e.create=n;function i(r){var t=r;return u.defined(t)&&u.string(t.uri)}s(i,"is"),e.is=i})(ae||(ae={}));var oe;(function(e){function n(r,t){return{uri:r,version:t}}s(n,"create"),e.create=n;function i(r){var t=r;return u.defined(t)&&u.string(t.uri)&&u.integer(t.version)}s(i,"is"),e.is=i})(oe||(oe={}));var O;(function(e){function n(r,t){return{uri:r,version:t}}s(n,"create"),e.create=n;function i(r){var t=r;return u.defined(t)&&u.string(t.uri)&&(t.version===null||u.integer(t.version))}s(i,"is"),e.is=i})(O||(O={}));var se;(function(e){function n(r,t,a,o){return{uri:r,languageId:t,version:a,text:o}}s(n,"create"),e.create=n;function i(r){var t=r;return u.defined(t)&&u.string(t.uri)&&u.string(t.languageId)&&u.integer(t.version)&&u.string(t.text)}s(i,"is"),e.is=i})(se||(se={}));var j;(function(e){e.PlainText="plaintext",e.Markdown="markdown"})(j||(j={}));(function(e){function n(i){var r=i;return r===e.PlainText||r===e.Markdown}s(n,"is"),e.is=n})(j||(j={}));var q;(function(e){function n(i){var r=i;return u.objectLiteral(i)&&j.is(r.kind)&&u.string(r.value)}s(n,"is"),e.is=n})(q||(q={}));var h;(function(e){e.Text=1,e.Method=2,e.Function=3,e.Constructor=4,e.Field=5,e.Variable=6,e.Class=7,e.Interface=8,e.Module=9,e.Property=10,e.Unit=11,e.Value=12,e.Enum=13,e.Keyword=14,e.Snippet=15,e.Color=16,e.File=17,e.Reference=18,e.Folder=19,e.EnumMember=20,e.Constant=21,e.Struct=22,e.Event=23,e.Operator=24,e.TypeParameter=25})(h||(h={}));var Q;(function(e){e.PlainText=1,e.Snippet=2})(Q||(Q={}));var ue;(function(e){e.Deprecated=1})(ue||(ue={}));var ce;(function(e){function n(r,t,a){return{newText:r,insert:t,replace:a}}s(n,"create"),e.create=n;function i(r){var t=r;return t&&u.string(t.newText)&&_.is(t.insert)&&_.is(t.replace)}s(i,"is"),e.is=i})(ce||(ce={}));var de;(function(e){e.asIs=1,e.adjustIndentation=2})(de||(de={}));var fe;(function(e){function n(i){return{label:i}}s(n,"create"),e.create=n})(fe||(fe={}));var ge;(function(e){function n(i,r){return{items:i||[],isIncomplete:!!r}}s(n,"create"),e.create=n})(ge||(ge={}));var H;(function(e){function n(r){return r.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}s(n,"fromPlainText"),e.fromPlainText=n;function i(r){var t=r;return u.string(t)||u.objectLiteral(t)&&u.string(t.language)&&u.string(t.value)}s(i,"is"),e.is=i})(H||(H={}));var le;(function(e){function n(i){var r=i;return!!r&&u.objectLiteral(r)&&(q.is(r.contents)||H.is(r.contents)||u.typedArray(r.contents,H.is))&&(i.range===void 0||_.is(i.range))}s(n,"is"),e.is=n})(le||(le={}));var he;(function(e){function n(i,r){return r?{label:i,documentation:r}:{label:i}}s(n,"create"),e.create=n})(he||(he={}));var ve;(function(e){function n(i,r){for(var t=[],a=2;a<arguments.length;a++)t[a-2]=arguments[a];var o={label:i};return u.defined(r)&&(o.documentation=r),u.defined(t)?o.parameters=t:o.parameters=[],o}s(n,"create"),e.create=n})(ve||(ve={}));var P;(function(e){e.Text=1,e.Read=2,e.Write=3})(P||(P={}));var pe;(function(e){function n(i,r){var t={range:i};return u.number(r)&&(t.kind=r),t}s(n,"create"),e.create=n})(pe||(pe={}));var v;(function(e){e.File=1,e.Module=2,e.Namespace=3,e.Package=4,e.Class=5,e.Method=6,e.Property=7,e.Field=8,e.Constructor=9,e.Enum=10,e.Interface=11,e.Function=12,e.Variable=13,e.Constant=14,e.String=15,e.Number=16,e.Boolean=17,e.Array=18,e.Object=19,e.Key=20,e.Null=21,e.EnumMember=22,e.Struct=23,e.Event=24,e.Operator=25,e.TypeParameter=26})(v||(v={}));var _e;(function(e){e.Deprecated=1})(_e||(_e={}));var me;(function(e){function n(i,r,t,a,o){var c={name:i,kind:r,location:{uri:a,range:t}};return o&&(c.containerName=o),c}s(n,"create"),e.create=n})(me||(me={}));var we;(function(e){function n(r,t,a,o,c,l){var f={name:r,detail:t,kind:a,range:o,selectionRange:c};return l!==void 0&&(f.children=l),f}s(n,"create"),e.create=n;function i(r){var t=r;return t&&u.string(t.name)&&u.number(t.kind)&&_.is(t.range)&&_.is(t.selectionRange)&&(t.detail===void 0||u.string(t.detail))&&(t.deprecated===void 0||u.boolean(t.deprecated))&&(t.children===void 0||Array.isArray(t.children))&&(t.tags===void 0||Array.isArray(t.tags))}s(i,"is"),e.is=i})(we||(we={}));var ke;(function(e){e.Empty="",e.QuickFix="quickfix",e.Refactor="refactor",e.RefactorExtract="refactor.extract",e.RefactorInline="refactor.inline",e.RefactorRewrite="refactor.rewrite",e.Source="source",e.SourceOrganizeImports="source.organizeImports",e.SourceFixAll="source.fixAll"})(ke||(ke={}));var be;(function(e){function n(r,t){var a={diagnostics:r};return t!=null&&(a.only=t),a}s(n,"create"),e.create=n;function i(r){var t=r;return u.defined(t)&&u.typedArray(t.diagnostics,U.is)&&(t.only===void 0||u.typedArray(t.only,u.string))}s(i,"is"),e.is=i})(be||(be={}));var Ee;(function(e){function n(r,t,a){var o={title:r},c=!0;return typeof t=="string"?(c=!1,o.kind=t):T.is(t)?o.command=t:o.edit=t,c&&a!==void 0&&(o.kind=a),o}s(n,"create"),e.create=n;function i(r){var t=r;return t&&u.string(t.title)&&(t.diagnostics===void 0||u.typedArray(t.diagnostics,U.is))&&(t.kind===void 0||u.string(t.kind))&&(t.edit!==void 0||t.command!==void 0)&&(t.command===void 0||T.is(t.command))&&(t.isPreferred===void 0||u.boolean(t.isPreferred))&&(t.edit===void 0||$.is(t.edit))}s(i,"is"),e.is=i})(Ee||(Ee={}));var xe;(function(e){function n(r,t){var a={range:r};return u.defined(t)&&(a.data=t),a}s(n,"create"),e.create=n;function i(r){var t=r;return u.defined(t)&&_.is(t.range)&&(u.undefined(t.command)||T.is(t.command))}s(i,"is"),e.is=i})(xe||(xe={}));var Ce;(function(e){function n(r,t){return{tabSize:r,insertSpaces:t}}s(n,"create"),e.create=n;function i(r){var t=r;return u.defined(t)&&u.uinteger(t.tabSize)&&u.boolean(t.insertSpaces)}s(i,"is"),e.is=i})(Ce||(Ce={}));var Ae;(function(e){function n(r,t,a){return{range:r,target:t,data:a}}s(n,"create"),e.create=n;function i(r){var t=r;return u.defined(t)&&_.is(t.range)&&(u.undefined(t.target)||u.string(t.target))}s(i,"is"),e.is=i})(Ae||(Ae={}));var ye;(function(e){function n(r,t){return{range:r,parent:t}}s(n,"create"),e.create=n;function i(r){var t=r;return t!==void 0&&_.is(t.range)&&(t.parent===void 0||e.is(t.parent))}s(i,"is"),e.is=i})(ye||(ye={}));var Ie;(function(e){function n(a,o,c,l){return new He(a,o,c,l)}s(n,"create"),e.create=n;function i(a){var o=a;return!!(u.defined(o)&&u.string(o.uri)&&(u.undefined(o.languageId)||u.string(o.languageId))&&u.uinteger(o.lineCount)&&u.func(o.getText)&&u.func(o.positionAt)&&u.func(o.offsetAt))}s(i,"is"),e.is=i;function r(a,o){for(var c=a.getText(),l=t(o,function(y,F){var J=y.range.start.line-F.range.start.line;return J===0?y.range.start.character-F.range.start.character:J}),f=c.length,p=l.length-1;p>=0;p--){var k=l[p],E=a.offsetAt(k.range.start),g=a.offsetAt(k.range.end);if(g<=f)c=c.substring(0,E)+k.newText+c.substring(g,c.length);else throw new Error("Overlapping edit");f=E}return c}s(r,"applyEdits"),e.applyEdits=r;function t(a,o){if(a.length<=1)return a;var c=a.length/2|0,l=a.slice(0,c),f=a.slice(c);t(l,o),t(f,o);for(var p=0,k=0,E=0;p<l.length&&k<f.length;){var g=o(l[p],f[k]);g<=0?a[E++]=l[p++]:a[E++]=f[k++]}for(;p<l.length;)a[E++]=l[p++];for(;k<f.length;)a[E++]=f[k++];return a}s(t,"mergeSort")})(Ie||(Ie={}));var He=function(){function e(n,i,r,t){this._uri=n,this._languageId=i,this._version=r,this._content=t,this._lineOffsets=void 0}return s(e,"FullTextDocument2"),Object.defineProperty(e.prototype,"uri",{get:function(){return this._uri},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"languageId",{get:function(){return this._languageId},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"version",{get:function(){return this._version},enumerable:!1,configurable:!0}),e.prototype.getText=function(n){if(n){var i=this.offsetAt(n.start),r=this.offsetAt(n.end);return this._content.substring(i,r)}return this._content},e.prototype.update=function(n,i){this._content=n.text,this._version=i,this._lineOffsets=void 0},e.prototype.getLineOffsets=function(){if(this._lineOffsets===void 0){for(var n=[],i=this._content,r=!0,t=0;t<i.length;t++){r&&(n.push(t),r=!1);var a=i.charAt(t);r=a==="\r"||a===`
`,a==="\r"&&t+1<i.length&&i.charAt(t+1)===`
`&&t++}r&&i.length>0&&n.push(i.length),this._lineOffsets=n}return this._lineOffsets},e.prototype.positionAt=function(n){n=Math.max(Math.min(n,this._content.length),0);var i=this.getLineOffsets(),r=0,t=i.length;if(t===0)return b.create(0,n);for(;r<t;){var a=Math.floor((r+t)/2);i[a]>n?t=a:r=a+1}var o=r-1;return b.create(o,n-i[o])},e.prototype.offsetAt=function(n){var i=this.getLineOffsets();if(n.line>=i.length)return this._content.length;if(n.line<0)return 0;var r=i[n.line],t=n.line+1<i.length?i[n.line+1]:this._content.length;return Math.max(Math.min(r+n.character,t),r)},Object.defineProperty(e.prototype,"lineCount",{get:function(){return this.getLineOffsets().length},enumerable:!1,configurable:!0}),e}(),u;(function(e){var n=Object.prototype.toString;function i(g){return typeof g<"u"}s(i,"defined"),e.defined=i;function r(g){return typeof g>"u"}s(r,"undefined2"),e.undefined=r;function t(g){return g===!0||g===!1}s(t,"boolean"),e.boolean=t;function a(g){return n.call(g)==="[object String]"}s(a,"string"),e.string=a;function o(g){return n.call(g)==="[object Number]"}s(o,"number"),e.number=o;function c(g,y,F){return n.call(g)==="[object Number]"&&y<=g&&g<=F}s(c,"numberRange"),e.numberRange=c;function l(g){return n.call(g)==="[object Number]"&&-2147483648<=g&&g<=2147483647}s(l,"integer2"),e.integer=l;function f(g){return n.call(g)==="[object Number]"&&0<=g&&g<=2147483647}s(f,"uinteger2"),e.uinteger=f;function p(g){return n.call(g)==="[object Function]"}s(p,"func"),e.func=p;function k(g){return g!==null&&typeof g=="object"}s(k,"objectLiteral"),e.objectLiteral=k;function E(g,y){return Array.isArray(g)&&g.every(y)}s(E,"typedArray"),e.typedArray=E})(u||(u={}));var ze=s(class{constructor(e,n,i){this._languageId=e,this._worker=n,this._disposables=[],this._listener=Object.create(null);const r=s(a=>{let o=a.getLanguageId();if(o!==this._languageId)return;let c;this._listener[a.uri.toString()]=a.onDidChangeContent(()=>{window.clearTimeout(c),c=window.setTimeout(()=>this._doValidate(a.uri,o),500)}),this._doValidate(a.uri,o)},"onModelAdd"),t=s(a=>{d.editor.setModelMarkers(a,this._languageId,[]);let o=a.uri.toString(),c=this._listener[o];c&&(c.dispose(),delete this._listener[o])},"onModelRemoved");this._disposables.push(d.editor.onDidCreateModel(r)),this._disposables.push(d.editor.onWillDisposeModel(t)),this._disposables.push(d.editor.onDidChangeModelLanguage(a=>{t(a.model),r(a.model)})),this._disposables.push(i(a=>{d.editor.getModels().forEach(o=>{o.getLanguageId()===this._languageId&&(t(o),r(o))})})),this._disposables.push({dispose:()=>{d.editor.getModels().forEach(t);for(let a in this._listener)this._listener[a].dispose()}}),d.editor.getModels().forEach(r)}dispose(){this._disposables.forEach(e=>e&&e.dispose()),this._disposables.length=0}_doValidate(e,n){this._worker(e).then(i=>i.doValidation(e.toString())).then(i=>{const r=i.map(a=>Be(e,a));let t=d.editor.getModel(e);t&&t.getLanguageId()===n&&d.editor.setModelMarkers(t,n,r)}).then(void 0,i=>{console.error(i)})}},"DiagnosticsAdapter");function Xe(e){switch(e){case I.Error:return d.MarkerSeverity.Error;case I.Warning:return d.MarkerSeverity.Warning;case I.Information:return d.MarkerSeverity.Info;case I.Hint:return d.MarkerSeverity.Hint;default:return d.MarkerSeverity.Info}}s(Xe,"toSeverity");function Be(e,n){let i=typeof n.code=="number"?String(n.code):n.code;return{severity:Xe(n.severity),startLineNumber:n.range.start.line+1,startColumn:n.range.start.character+1,endLineNumber:n.range.end.line+1,endColumn:n.range.end.character+1,message:n.message,code:i,source:n.source}}s(Be,"toDiagnostics");var $e=s(class{constructor(e,n){this._worker=e,this._triggerCharacters=n}get triggerCharacters(){return this._triggerCharacters}provideCompletionItems(e,n,i,r){const t=e.uri;return this._worker(t).then(a=>a.doComplete(t.toString(),A(n))).then(a=>{if(!a)return;const o=e.getWordUntilPosition(n),c=new d.Range(n.lineNumber,o.startColumn,n.lineNumber,o.endColumn),l=a.items.map(f=>{const p={label:f.label,insertText:f.insertText||f.label,sortText:f.sortText,filterText:f.filterText,documentation:f.documentation,detail:f.detail,command:Je(f.command),range:c,kind:Ge(f.kind)};return f.textEdit&&(Qe(f.textEdit)?p.range={insert:w(f.textEdit.insert),replace:w(f.textEdit.replace)}:p.range=w(f.textEdit.range),p.insertText=f.textEdit.newText),f.additionalTextEdits&&(p.additionalTextEdits=f.additionalTextEdits.map(G)),f.insertTextFormat===Q.Snippet&&(p.insertTextRules=d.languages.CompletionItemInsertTextRule.InsertAsSnippet),p});return{isIncomplete:a.isIncomplete,suggestions:l}})}},"CompletionAdapter");function A(e){if(e)return{character:e.column-1,line:e.lineNumber-1}}s(A,"fromPosition");function qe(e){if(e)return{start:{line:e.startLineNumber-1,character:e.startColumn-1},end:{line:e.endLineNumber-1,character:e.endColumn-1}}}s(qe,"fromRange");function w(e){if(e)return new d.Range(e.start.line+1,e.start.character+1,e.end.line+1,e.end.character+1)}s(w,"toRange");function Qe(e){return typeof e.insert<"u"&&typeof e.replace<"u"}s(Qe,"isInsertReplaceEdit");function Ge(e){const n=d.languages.CompletionItemKind;switch(e){case h.Text:return n.Text;case h.Method:return n.Method;case h.Function:return n.Function;case h.Constructor:return n.Constructor;case h.Field:return n.Field;case h.Variable:return n.Variable;case h.Class:return n.Class;case h.Interface:return n.Interface;case h.Module:return n.Module;case h.Property:return n.Property;case h.Unit:return n.Unit;case h.Value:return n.Value;case h.Enum:return n.Enum;case h.Keyword:return n.Keyword;case h.Snippet:return n.Snippet;case h.Color:return n.Color;case h.File:return n.File;case h.Reference:return n.Reference}return n.Property}s(Ge,"toCompletionItemKind");function G(e){if(e)return{range:w(e.range),text:e.newText}}s(G,"toTextEdit");function Je(e){return e&&e.command==="editor.action.triggerSuggest"?{id:e.command,title:e.title,arguments:e.arguments}:void 0}s(Je,"toCommand");var Ye=s(class{constructor(e){this._worker=e}provideHover(e,n,i){let r=e.uri;return this._worker(r).then(t=>t.doHover(r.toString(),A(n))).then(t=>{if(t)return{range:w(t.range),contents:Ke(t.contents)}})}},"HoverAdapter");function Ze(e){return e&&typeof e=="object"&&typeof e.kind=="string"}s(Ze,"isMarkupContent");function Re(e){return typeof e=="string"?{value:e}:Ze(e)?e.kind==="plaintext"?{value:e.value.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}:{value:e.value}:{value:"```"+e.language+`
`+e.value+"\n```\n"}}s(Re,"toMarkdownString");function Ke(e){if(e)return Array.isArray(e)?e.map(Re):[Re(e)]}s(Ke,"toMarkedStringArray");var et=s(class{constructor(e){this._worker=e}provideDocumentHighlights(e,n,i){const r=e.uri;return this._worker(r).then(t=>t.findDocumentHighlights(r.toString(),A(n))).then(t=>{if(t)return t.map(a=>({range:w(a.range),kind:tt(a.kind)}))})}},"DocumentHighlightAdapter");function tt(e){switch(e){case P.Read:return d.languages.DocumentHighlightKind.Read;case P.Write:return d.languages.DocumentHighlightKind.Write;case P.Text:return d.languages.DocumentHighlightKind.Text}return d.languages.DocumentHighlightKind.Text}s(tt,"toDocumentHighlightKind");var rt=s(class{constructor(e){this._worker=e}provideDefinition(e,n,i){const r=e.uri;return this._worker(r).then(t=>t.findDefinition(r.toString(),A(n))).then(t=>{if(t)return[Te(t)]})}},"DefinitionAdapter");function Te(e){return{uri:d.Uri.parse(e.uri),range:w(e.range)}}s(Te,"toLocation");var nt=s(class{constructor(e){this._worker=e}provideReferences(e,n,i,r){const t=e.uri;return this._worker(t).then(a=>a.findReferences(t.toString(),A(n))).then(a=>{if(a)return a.map(Te)})}},"ReferenceAdapter"),it=s(class{constructor(e){this._worker=e}provideRenameEdits(e,n,i,r){const t=e.uri;return this._worker(t).then(a=>a.doRename(t.toString(),A(n),i)).then(a=>at(a))}},"RenameAdapter");function at(e){if(!e||!e.changes)return;let n=[];for(let i in e.changes){const r=d.Uri.parse(i);for(let t of e.changes[i])n.push({resource:r,edit:{range:w(t.range),text:t.newText}})}return{edits:n}}s(at,"toWorkspaceEdit");var ot=s(class{constructor(e){this._worker=e}provideDocumentSymbols(e,n){const i=e.uri;return this._worker(i).then(r=>r.findDocumentSymbols(i.toString())).then(r=>{if(r)return r.map(t=>({name:t.name,detail:"",containerName:t.containerName,kind:st(t.kind),range:w(t.location.range),selectionRange:w(t.location.range),tags:[]}))})}},"DocumentSymbolAdapter");function st(e){let n=d.languages.SymbolKind;switch(e){case v.File:return n.Array;case v.Module:return n.Module;case v.Namespace:return n.Namespace;case v.Package:return n.Package;case v.Class:return n.Class;case v.Method:return n.Method;case v.Property:return n.Property;case v.Field:return n.Field;case v.Constructor:return n.Constructor;case v.Enum:return n.Enum;case v.Interface:return n.Interface;case v.Function:return n.Function;case v.Variable:return n.Variable;case v.Constant:return n.Constant;case v.String:return n.String;case v.Number:return n.Number;case v.Boolean:return n.Boolean;case v.Array:return n.Array}return n.Function}s(st,"toSymbolKind");var ut=s(class{constructor(e){this._worker=e}provideDocumentColors(e,n){const i=e.uri;return this._worker(i).then(r=>r.findDocumentColors(i.toString())).then(r=>{if(r)return r.map(t=>({color:t.color,range:w(t.range)}))})}provideColorPresentations(e,n,i){const r=e.uri;return this._worker(r).then(t=>t.getColorPresentations(r.toString(),n.color,qe(n.range))).then(t=>{if(t)return t.map(a=>{let o={label:a.label};return a.textEdit&&(o.textEdit=G(a.textEdit)),a.additionalTextEdits&&(o.additionalTextEdits=a.additionalTextEdits.map(G)),o})})}},"DocumentColorAdapter"),ct=s(class{constructor(e){this._worker=e}provideFoldingRanges(e,n,i){const r=e.uri;return this._worker(r).then(t=>t.getFoldingRanges(r.toString(),n)).then(t=>{if(t)return t.map(a=>{const o={start:a.startLine+1,end:a.endLine+1};return typeof a.kind<"u"&&(o.kind=dt(a.kind)),o})})}},"FoldingRangeAdapter");function dt(e){switch(e){case M.Comment:return d.languages.FoldingRangeKind.Comment;case M.Imports:return d.languages.FoldingRangeKind.Imports;case M.Region:return d.languages.FoldingRangeKind.Region}}s(dt,"toFoldingRangeKind");var ft=s(class{constructor(e){this._worker=e}provideSelectionRanges(e,n,i){const r=e.uri;return this._worker(r).then(t=>t.getSelectionRanges(r.toString(),n.map(A))).then(t=>{if(t)return t.map(a=>{const o=[];for(;a;)o.push({range:w(a.range)}),a=a.parent;return o})})}},"SelectionRangeAdapter");function kt(e){const n=[],i=[],r=new Oe(e);n.push(r);const t=s((...o)=>r.getLanguageServiceWorker(...o),"worker");function a(){const{languageId:o,modeConfiguration:c}=e;De(i),c.completionItems&&i.push(d.languages.registerCompletionItemProvider(o,new $e(t,["/","-",":"]))),c.hovers&&i.push(d.languages.registerHoverProvider(o,new Ye(t))),c.documentHighlights&&i.push(d.languages.registerDocumentHighlightProvider(o,new et(t))),c.definitions&&i.push(d.languages.registerDefinitionProvider(o,new rt(t))),c.references&&i.push(d.languages.registerReferenceProvider(o,new nt(t))),c.documentSymbols&&i.push(d.languages.registerDocumentSymbolProvider(o,new ot(t))),c.rename&&i.push(d.languages.registerRenameProvider(o,new it(t))),c.colors&&i.push(d.languages.registerColorProvider(o,new ut(t))),c.foldingRanges&&i.push(d.languages.registerFoldingRangeProvider(o,new ct(t))),c.diagnostics&&i.push(new ze(o,t,e.onDidChange)),c.selectionRanges&&i.push(d.languages.registerSelectionRangeProvider(o,new ft(t)))}return s(a,"registerProviders"),a(),n.push(Me(i)),Me(n)}s(kt,"setupMode");function Me(e){return{dispose:()=>De(e)}}s(Me,"asDisposable");function De(e){for(;e.length;)e.pop().dispose()}s(De,"disposeAll");export{kt as setupMode};
//# sourceMappingURL=cssMode-8b6ab730.js.map