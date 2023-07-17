import{m as Qe}from"./index-2b55a52b.js";/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.31.1(337587859b1c171314b40503171188b6cea6a32a)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/var qe=Object.defineProperty,Ze=Object.getOwnPropertyDescriptor,Ke=Object.getOwnPropertyNames,et=Object.prototype.hasOwnProperty,tt=e=>qe(e,"__esModule",{value:!0}),rt=(e,n,i)=>{if(n&&typeof n=="object"||typeof n=="function")for(let r of Ke(n))!et.call(e,r)&&r!=="default"&&qe(e,r,{get:()=>n[r],enumerable:!(i=Ze(n,r))||i.enumerable});return e},h={};tt(h);rt(h,Qe);var nt=2*60*1e3,it=class{constructor(e){this._defaults=e,this._worker=null,this._client=null,this._idleCheckInterval=window.setInterval(()=>this._checkIfIdle(),30*1e3),this._lastUsedTime=0,this._configChangeListener=this._defaults.onDidChange(()=>this._stopWorker())}_stopWorker(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null}dispose(){clearInterval(this._idleCheckInterval),this._configChangeListener.dispose(),this._stopWorker()}_checkIfIdle(){if(!this._worker)return;Date.now()-this._lastUsedTime>nt&&this._stopWorker()}_getClient(){return this._lastUsedTime=Date.now(),this._client||(this._worker=h.editor.createWebWorker({moduleId:"vs/language/json/jsonWorker",label:this._defaults.languageId,createData:{languageSettings:this._defaults.diagnosticsOptions,languageId:this._defaults.languageId,enableSchemaRequest:this._defaults.diagnosticsOptions.enableSchemaRequest}}),this._client=this._worker.getProxy()),this._client}getLanguageServiceWorker(...e){let n;return this._getClient().then(i=>{n=i}).then(i=>{if(this._worker)return this._worker.withSyncedResources(e)}).then(i=>n)}},ae;(function(e){e.MIN_VALUE=-2147483648,e.MAX_VALUE=2147483647})(ae||(ae={}));var q;(function(e){e.MIN_VALUE=0,e.MAX_VALUE=2147483647})(q||(q={}));var I;(function(e){function n(r,t){return r===Number.MAX_VALUE&&(r=q.MAX_VALUE),t===Number.MAX_VALUE&&(t=q.MAX_VALUE),{line:r,character:t}}e.create=n;function i(r){var t=r;return o.objectLiteral(t)&&o.uinteger(t.line)&&o.uinteger(t.character)}e.is=i})(I||(I={}));var _;(function(e){function n(r,t,a,s){if(o.uinteger(r)&&o.uinteger(t)&&o.uinteger(a)&&o.uinteger(s))return{start:I.create(r,t),end:I.create(a,s)};if(I.is(r)&&I.is(t))return{start:r,end:t};throw new Error("Range#create called with invalid arguments["+r+", "+t+", "+a+", "+s+"]")}e.create=n;function i(r){var t=r;return o.objectLiteral(t)&&I.is(t.start)&&I.is(t.end)}e.is=i})(_||(_={}));var Z;(function(e){function n(r,t){return{uri:r,range:t}}e.create=n;function i(r){var t=r;return o.defined(t)&&_.is(t.range)&&(o.string(t.uri)||o.undefined(t.uri))}e.is=i})(Z||(Z={}));var se;(function(e){function n(r,t,a,s){return{targetUri:r,targetRange:t,targetSelectionRange:a,originSelectionRange:s}}e.create=n;function i(r){var t=r;return o.defined(t)&&_.is(t.targetRange)&&o.string(t.targetUri)&&(_.is(t.targetSelectionRange)||o.undefined(t.targetSelectionRange))&&(_.is(t.originSelectionRange)||o.undefined(t.originSelectionRange))}e.is=i})(se||(se={}));var K;(function(e){function n(r,t,a,s){return{red:r,green:t,blue:a,alpha:s}}e.create=n;function i(r){var t=r;return o.numberRange(t.red,0,1)&&o.numberRange(t.green,0,1)&&o.numberRange(t.blue,0,1)&&o.numberRange(t.alpha,0,1)}e.is=i})(K||(K={}));var oe;(function(e){function n(r,t){return{range:r,color:t}}e.create=n;function i(r){var t=r;return _.is(t.range)&&K.is(t.color)}e.is=i})(oe||(oe={}));var ue;(function(e){function n(r,t,a){return{label:r,textEdit:t,additionalTextEdits:a}}e.create=n;function i(r){var t=r;return o.string(t.label)&&(o.undefined(t.textEdit)||O.is(t))&&(o.undefined(t.additionalTextEdits)||o.typedArray(t.additionalTextEdits,O.is))}e.is=i})(ue||(ue={}));var U;(function(e){e.Comment="comment",e.Imports="imports",e.Region="region"})(U||(U={}));var ce;(function(e){function n(r,t,a,s,u){var c={startLine:r,endLine:t};return o.defined(a)&&(c.startCharacter=a),o.defined(s)&&(c.endCharacter=s),o.defined(u)&&(c.kind=u),c}e.create=n;function i(r){var t=r;return o.uinteger(t.startLine)&&o.uinteger(t.startLine)&&(o.undefined(t.startCharacter)||o.uinteger(t.startCharacter))&&(o.undefined(t.endCharacter)||o.uinteger(t.endCharacter))&&(o.undefined(t.kind)||o.string(t.kind))}e.is=i})(ce||(ce={}));var ee;(function(e){function n(r,t){return{location:r,message:t}}e.create=n;function i(r){var t=r;return o.defined(t)&&Z.is(t.location)&&o.string(t.message)}e.is=i})(ee||(ee={}));var y;(function(e){e.Error=1,e.Warning=2,e.Information=3,e.Hint=4})(y||(y={}));var de;(function(e){e.Unnecessary=1,e.Deprecated=2})(de||(de={}));var fe;(function(e){function n(i){var r=i;return r!=null&&o.string(r.href)}e.is=n})(fe||(fe={}));var X;(function(e){function n(r,t,a,s,u,c){var d={range:r,message:t};return o.defined(a)&&(d.severity=a),o.defined(s)&&(d.code=s),o.defined(u)&&(d.source=u),o.defined(c)&&(d.relatedInformation=c),d}e.create=n;function i(r){var t,a=r;return o.defined(a)&&_.is(a.range)&&o.string(a.message)&&(o.number(a.severity)||o.undefined(a.severity))&&(o.integer(a.code)||o.string(a.code)||o.undefined(a.code))&&(o.undefined(a.codeDescription)||o.string((t=a.codeDescription)===null||t===void 0?void 0:t.href))&&(o.string(a.source)||o.undefined(a.source))&&(o.undefined(a.relatedInformation)||o.typedArray(a.relatedInformation,ee.is))}e.is=i})(X||(X={}));var S;(function(e){function n(r,t){for(var a=[],s=2;s<arguments.length;s++)a[s-2]=arguments[s];var u={title:r,command:t};return o.defined(a)&&a.length>0&&(u.arguments=a),u}e.create=n;function i(r){var t=r;return o.defined(t)&&o.string(t.title)&&o.string(t.command)}e.is=i})(S||(S={}));var O;(function(e){function n(a,s){return{range:a,newText:s}}e.replace=n;function i(a,s){return{range:{start:a,end:a},newText:s}}e.insert=i;function r(a){return{range:a,newText:""}}e.del=r;function t(a){var s=a;return o.objectLiteral(s)&&o.string(s.newText)&&_.is(s.range)}e.is=t})(O||(O={}));var j;(function(e){function n(r,t,a){var s={label:r};return t!==void 0&&(s.needsConfirmation=t),a!==void 0&&(s.description=a),s}e.create=n;function i(r){var t=r;return t!==void 0&&o.objectLiteral(t)&&o.string(t.label)&&(o.boolean(t.needsConfirmation)||t.needsConfirmation===void 0)&&(o.string(t.description)||t.description===void 0)}e.is=i})(j||(j={}));var w;(function(e){function n(i){var r=i;return typeof r=="string"}e.is=n})(w||(w={}));var M;(function(e){function n(a,s,u){return{range:a,newText:s,annotationId:u}}e.replace=n;function i(a,s,u){return{range:{start:a,end:a},newText:s,annotationId:u}}e.insert=i;function r(a,s){return{range:a,newText:"",annotationId:s}}e.del=r;function t(a){var s=a;return O.is(s)&&(j.is(s.annotationId)||w.is(s.annotationId))}e.is=t})(M||(M={}));var Y;(function(e){function n(r,t){return{textDocument:r,edits:t}}e.create=n;function i(r){var t=r;return o.defined(t)&&$.is(t.textDocument)&&Array.isArray(t.edits)}e.is=i})(Y||(Y={}));var W;(function(e){function n(r,t,a){var s={kind:"create",uri:r};return t!==void 0&&(t.overwrite!==void 0||t.ignoreIfExists!==void 0)&&(s.options=t),a!==void 0&&(s.annotationId=a),s}e.create=n;function i(r){var t=r;return t&&t.kind==="create"&&o.string(t.uri)&&(t.options===void 0||(t.options.overwrite===void 0||o.boolean(t.options.overwrite))&&(t.options.ignoreIfExists===void 0||o.boolean(t.options.ignoreIfExists)))&&(t.annotationId===void 0||w.is(t.annotationId))}e.is=i})(W||(W={}));var V;(function(e){function n(r,t,a,s){var u={kind:"rename",oldUri:r,newUri:t};return a!==void 0&&(a.overwrite!==void 0||a.ignoreIfExists!==void 0)&&(u.options=a),s!==void 0&&(u.annotationId=s),u}e.create=n;function i(r){var t=r;return t&&t.kind==="rename"&&o.string(t.oldUri)&&o.string(t.newUri)&&(t.options===void 0||(t.options.overwrite===void 0||o.boolean(t.options.overwrite))&&(t.options.ignoreIfExists===void 0||o.boolean(t.options.ignoreIfExists)))&&(t.annotationId===void 0||w.is(t.annotationId))}e.is=i})(V||(V={}));var B;(function(e){function n(r,t,a){var s={kind:"delete",uri:r};return t!==void 0&&(t.recursive!==void 0||t.ignoreIfNotExists!==void 0)&&(s.options=t),a!==void 0&&(s.annotationId=a),s}e.create=n;function i(r){var t=r;return t&&t.kind==="delete"&&o.string(t.uri)&&(t.options===void 0||(t.options.recursive===void 0||o.boolean(t.options.recursive))&&(t.options.ignoreIfNotExists===void 0||o.boolean(t.options.ignoreIfNotExists)))&&(t.annotationId===void 0||w.is(t.annotationId))}e.is=i})(B||(B={}));var te;(function(e){function n(i){var r=i;return r&&(r.changes!==void 0||r.documentChanges!==void 0)&&(r.documentChanges===void 0||r.documentChanges.every(function(t){return o.string(t.kind)?W.is(t)||V.is(t)||B.is(t):Y.is(t)}))}e.is=n})(te||(te={}));var H=function(){function e(n,i){this.edits=n,this.changeAnnotations=i}return e.prototype.insert=function(n,i,r){var t,a;if(r===void 0?t=O.insert(n,i):w.is(r)?(a=r,t=M.insert(n,i,r)):(this.assertChangeAnnotations(this.changeAnnotations),a=this.changeAnnotations.manage(r),t=M.insert(n,i,a)),this.edits.push(t),a!==void 0)return a},e.prototype.replace=function(n,i,r){var t,a;if(r===void 0?t=O.replace(n,i):w.is(r)?(a=r,t=M.replace(n,i,r)):(this.assertChangeAnnotations(this.changeAnnotations),a=this.changeAnnotations.manage(r),t=M.replace(n,i,a)),this.edits.push(t),a!==void 0)return a},e.prototype.delete=function(n,i){var r,t;if(i===void 0?r=O.del(n):w.is(i)?(t=i,r=M.del(n,i)):(this.assertChangeAnnotations(this.changeAnnotations),t=this.changeAnnotations.manage(i),r=M.del(n,t)),this.edits.push(r),t!==void 0)return t},e.prototype.add=function(n){this.edits.push(n)},e.prototype.all=function(){return this.edits},e.prototype.clear=function(){this.edits.splice(0,this.edits.length)},e.prototype.assertChangeAnnotations=function(n){if(n===void 0)throw new Error("Text edit change is not configured to manage change annotations.")},e}(),le=function(){function e(n){this._annotations=n===void 0?Object.create(null):n,this._counter=0,this._size=0}return e.prototype.all=function(){return this._annotations},Object.defineProperty(e.prototype,"size",{get:function(){return this._size},enumerable:!1,configurable:!0}),e.prototype.manage=function(n,i){var r;if(w.is(n)?r=n:(r=this.nextId(),i=n),this._annotations[r]!==void 0)throw new Error("Id "+r+" is already in use.");if(i===void 0)throw new Error("No annotation provided for id "+r);return this._annotations[r]=i,this._size++,r},e.prototype.nextId=function(){return this._counter++,this._counter.toString()},e}();(function(){function e(n){var i=this;this._textEditChanges=Object.create(null),n!==void 0?(this._workspaceEdit=n,n.documentChanges?(this._changeAnnotations=new le(n.changeAnnotations),n.changeAnnotations=this._changeAnnotations.all(),n.documentChanges.forEach(function(r){if(Y.is(r)){var t=new H(r.edits,i._changeAnnotations);i._textEditChanges[r.textDocument.uri]=t}})):n.changes&&Object.keys(n.changes).forEach(function(r){var t=new H(n.changes[r]);i._textEditChanges[r]=t})):this._workspaceEdit={}}return Object.defineProperty(e.prototype,"edit",{get:function(){return this.initDocumentChanges(),this._changeAnnotations!==void 0&&(this._changeAnnotations.size===0?this._workspaceEdit.changeAnnotations=void 0:this._workspaceEdit.changeAnnotations=this._changeAnnotations.all()),this._workspaceEdit},enumerable:!1,configurable:!0}),e.prototype.getTextEditChange=function(n){if($.is(n)){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");var i={uri:n.uri,version:n.version},r=this._textEditChanges[i.uri];if(!r){var t=[],a={textDocument:i,edits:t};this._workspaceEdit.documentChanges.push(a),r=new H(t,this._changeAnnotations),this._textEditChanges[i.uri]=r}return r}else{if(this.initChanges(),this._workspaceEdit.changes===void 0)throw new Error("Workspace edit is not configured for normal text edit changes.");var r=this._textEditChanges[n];if(!r){var t=[];this._workspaceEdit.changes[n]=t,r=new H(t),this._textEditChanges[n]=r}return r}},e.prototype.initDocumentChanges=function(){this._workspaceEdit.documentChanges===void 0&&this._workspaceEdit.changes===void 0&&(this._changeAnnotations=new le,this._workspaceEdit.documentChanges=[],this._workspaceEdit.changeAnnotations=this._changeAnnotations.all())},e.prototype.initChanges=function(){this._workspaceEdit.documentChanges===void 0&&this._workspaceEdit.changes===void 0&&(this._workspaceEdit.changes=Object.create(null))},e.prototype.createFile=function(n,i,r){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");var t;j.is(i)||w.is(i)?t=i:r=i;var a,s;if(t===void 0?a=W.create(n,r):(s=w.is(t)?t:this._changeAnnotations.manage(t),a=W.create(n,r,s)),this._workspaceEdit.documentChanges.push(a),s!==void 0)return s},e.prototype.renameFile=function(n,i,r,t){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");var a;j.is(r)||w.is(r)?a=r:t=r;var s,u;if(a===void 0?s=V.create(n,i,t):(u=w.is(a)?a:this._changeAnnotations.manage(a),s=V.create(n,i,t,u)),this._workspaceEdit.documentChanges.push(s),u!==void 0)return u},e.prototype.deleteFile=function(n,i,r){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");var t;j.is(i)||w.is(i)?t=i:r=i;var a,s;if(t===void 0?a=B.create(n,r):(s=w.is(t)?t:this._changeAnnotations.manage(t),a=B.create(n,r,s)),this._workspaceEdit.documentChanges.push(a),s!==void 0)return s},e})();var ge;(function(e){function n(r){return{uri:r}}e.create=n;function i(r){var t=r;return o.defined(t)&&o.string(t.uri)}e.is=i})(ge||(ge={}));var he;(function(e){function n(r,t){return{uri:r,version:t}}e.create=n;function i(r){var t=r;return o.defined(t)&&o.string(t.uri)&&o.integer(t.version)}e.is=i})(he||(he={}));var $;(function(e){function n(r,t){return{uri:r,version:t}}e.create=n;function i(r){var t=r;return o.defined(t)&&o.string(t.uri)&&(t.version===null||o.integer(t.version))}e.is=i})($||($={}));var ve;(function(e){function n(r,t,a,s){return{uri:r,languageId:t,version:a,text:s}}e.create=n;function i(r){var t=r;return o.defined(t)&&o.string(t.uri)&&o.string(t.languageId)&&o.integer(t.version)&&o.string(t.text)}e.is=i})(ve||(ve={}));var x;(function(e){e.PlainText="plaintext",e.Markdown="markdown"})(x||(x={}));(function(e){function n(i){var r=i;return r===e.PlainText||r===e.Markdown}e.is=n})(x||(x={}));var re;(function(e){function n(i){var r=i;return o.objectLiteral(i)&&x.is(r.kind)&&o.string(r.value)}e.is=n})(re||(re={}));var p;(function(e){e.Text=1,e.Method=2,e.Function=3,e.Constructor=4,e.Field=5,e.Variable=6,e.Class=7,e.Interface=8,e.Module=9,e.Property=10,e.Unit=11,e.Value=12,e.Enum=13,e.Keyword=14,e.Snippet=15,e.Color=16,e.File=17,e.Reference=18,e.Folder=19,e.EnumMember=20,e.Constant=21,e.Struct=22,e.Event=23,e.Operator=24,e.TypeParameter=25})(p||(p={}));var ne;(function(e){e.PlainText=1,e.Snippet=2})(ne||(ne={}));var pe;(function(e){e.Deprecated=1})(pe||(pe={}));var me;(function(e){function n(r,t,a){return{newText:r,insert:t,replace:a}}e.create=n;function i(r){var t=r;return t&&o.string(t.newText)&&_.is(t.insert)&&_.is(t.replace)}e.is=i})(me||(me={}));var _e;(function(e){e.asIs=1,e.adjustIndentation=2})(_e||(_e={}));var ke;(function(e){function n(i){return{label:i}}e.create=n})(ke||(ke={}));var we;(function(e){function n(i,r){return{items:i||[],isIncomplete:!!r}}e.create=n})(we||(we={}));var G;(function(e){function n(r){return r.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}e.fromPlainText=n;function i(r){var t=r;return o.string(t)||o.objectLiteral(t)&&o.string(t.language)&&o.string(t.value)}e.is=i})(G||(G={}));var Ce;(function(e){function n(i){var r=i;return!!r&&o.objectLiteral(r)&&(re.is(r.contents)||G.is(r.contents)||o.typedArray(r.contents,G.is))&&(i.range===void 0||_.is(i.range))}e.is=n})(Ce||(Ce={}));var be;(function(e){function n(i,r){return r?{label:i,documentation:r}:{label:i}}e.create=n})(be||(be={}));var Ee;(function(e){function n(i,r){for(var t=[],a=2;a<arguments.length;a++)t[a-2]=arguments[a];var s={label:i};return o.defined(r)&&(s.documentation=r),o.defined(t)?s.parameters=t:s.parameters=[],s}e.create=n})(Ee||(Ee={}));var Ae;(function(e){e.Text=1,e.Read=2,e.Write=3})(Ae||(Ae={}));var Te;(function(e){function n(i,r){var t={range:i};return o.number(r)&&(t.kind=r),t}e.create=n})(Te||(Te={}));var m;(function(e){e.File=1,e.Module=2,e.Namespace=3,e.Package=4,e.Class=5,e.Method=6,e.Property=7,e.Field=8,e.Constructor=9,e.Enum=10,e.Interface=11,e.Function=12,e.Variable=13,e.Constant=14,e.String=15,e.Number=16,e.Boolean=17,e.Array=18,e.Object=19,e.Key=20,e.Null=21,e.EnumMember=22,e.Struct=23,e.Event=24,e.Operator=25,e.TypeParameter=26})(m||(m={}));var Ie;(function(e){e.Deprecated=1})(Ie||(Ie={}));var Le;(function(e){function n(i,r,t,a,s){var u={name:i,kind:r,location:{uri:a,range:t}};return s&&(u.containerName=s),u}e.create=n})(Le||(Le={}));var Me;(function(e){function n(r,t,a,s,u,c){var d={name:r,detail:t,kind:a,range:s,selectionRange:u};return c!==void 0&&(d.children=c),d}e.create=n;function i(r){var t=r;return t&&o.string(t.name)&&o.number(t.kind)&&_.is(t.range)&&_.is(t.selectionRange)&&(t.detail===void 0||o.string(t.detail))&&(t.deprecated===void 0||o.boolean(t.deprecated))&&(t.children===void 0||Array.isArray(t.children))&&(t.tags===void 0||Array.isArray(t.tags))}e.is=i})(Me||(Me={}));var Oe;(function(e){e.Empty="",e.QuickFix="quickfix",e.Refactor="refactor",e.RefactorExtract="refactor.extract",e.RefactorInline="refactor.inline",e.RefactorRewrite="refactor.rewrite",e.Source="source",e.SourceOrganizeImports="source.organizeImports",e.SourceFixAll="source.fixAll"})(Oe||(Oe={}));var Pe;(function(e){function n(r,t){var a={diagnostics:r};return t!=null&&(a.only=t),a}e.create=n;function i(r){var t=r;return o.defined(t)&&o.typedArray(t.diagnostics,X.is)&&(t.only===void 0||o.typedArray(t.only,o.string))}e.is=i})(Pe||(Pe={}));var Ne;(function(e){function n(r,t,a){var s={title:r},u=!0;return typeof t=="string"?(u=!1,s.kind=t):S.is(t)?s.command=t:s.edit=t,u&&a!==void 0&&(s.kind=a),s}e.create=n;function i(r){var t=r;return t&&o.string(t.title)&&(t.diagnostics===void 0||o.typedArray(t.diagnostics,X.is))&&(t.kind===void 0||o.string(t.kind))&&(t.edit!==void 0||t.command!==void 0)&&(t.command===void 0||S.is(t.command))&&(t.isPreferred===void 0||o.boolean(t.isPreferred))&&(t.edit===void 0||te.is(t.edit))}e.is=i})(Ne||(Ne={}));var ye;(function(e){function n(r,t){var a={range:r};return o.defined(t)&&(a.data=t),a}e.create=n;function i(r){var t=r;return o.defined(t)&&_.is(t.range)&&(o.undefined(t.command)||S.is(t.command))}e.is=i})(ye||(ye={}));var Re;(function(e){function n(r,t){return{tabSize:r,insertSpaces:t}}e.create=n;function i(r){var t=r;return o.defined(t)&&o.uinteger(t.tabSize)&&o.boolean(t.insertSpaces)}e.is=i})(Re||(Re={}));var je;(function(e){function n(r,t,a){return{range:r,target:t,data:a}}e.create=n;function i(r){var t=r;return o.defined(t)&&_.is(t.range)&&(o.undefined(t.target)||o.string(t.target))}e.is=i})(je||(je={}));var De;(function(e){function n(r,t){return{range:r,parent:t}}e.create=n;function i(r){var t=r;return t!==void 0&&_.is(t.range)&&(t.parent===void 0||e.is(t.parent))}e.is=i})(De||(De={}));var Fe;(function(e){function n(a,s,u,c){return new at(a,s,u,c)}e.create=n;function i(a){var s=a;return!!(o.defined(s)&&o.string(s.uri)&&(o.undefined(s.languageId)||o.string(s.languageId))&&o.uinteger(s.lineCount)&&o.func(s.getText)&&o.func(s.positionAt)&&o.func(s.offsetAt))}e.is=i;function r(a,s){for(var u=a.getText(),c=t(s,function(T,P){var D=T.range.start.line-P.range.start.line;return D===0?T.range.start.character-P.range.start.character:D}),d=u.length,v=c.length-1;v>=0;v--){var l=c[v],C=a.offsetAt(l.range.start),g=a.offsetAt(l.range.end);if(g<=d)u=u.substring(0,C)+l.newText+u.substring(g,u.length);else throw new Error("Overlapping edit");d=C}return u}e.applyEdits=r;function t(a,s){if(a.length<=1)return a;var u=a.length/2|0,c=a.slice(0,u),d=a.slice(u);t(c,s),t(d,s);for(var v=0,l=0,C=0;v<c.length&&l<d.length;){var g=s(c[v],d[l]);g<=0?a[C++]=c[v++]:a[C++]=d[l++]}for(;v<c.length;)a[C++]=c[v++];for(;l<d.length;)a[C++]=d[l++];return a}})(Fe||(Fe={}));var at=function(){function e(n,i,r,t){this._uri=n,this._languageId=i,this._version=r,this._content=t,this._lineOffsets=void 0}return Object.defineProperty(e.prototype,"uri",{get:function(){return this._uri},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"languageId",{get:function(){return this._languageId},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"version",{get:function(){return this._version},enumerable:!1,configurable:!0}),e.prototype.getText=function(n){if(n){var i=this.offsetAt(n.start),r=this.offsetAt(n.end);return this._content.substring(i,r)}return this._content},e.prototype.update=function(n,i){this._content=n.text,this._version=i,this._lineOffsets=void 0},e.prototype.getLineOffsets=function(){if(this._lineOffsets===void 0){for(var n=[],i=this._content,r=!0,t=0;t<i.length;t++){r&&(n.push(t),r=!1);var a=i.charAt(t);r=a==="\r"||a===`
`,a==="\r"&&t+1<i.length&&i.charAt(t+1)===`
`&&t++}r&&i.length>0&&n.push(i.length),this._lineOffsets=n}return this._lineOffsets},e.prototype.positionAt=function(n){n=Math.max(Math.min(n,this._content.length),0);var i=this.getLineOffsets(),r=0,t=i.length;if(t===0)return I.create(0,n);for(;r<t;){var a=Math.floor((r+t)/2);i[a]>n?t=a:r=a+1}var s=r-1;return I.create(s,n-i[s])},e.prototype.offsetAt=function(n){var i=this.getLineOffsets();if(n.line>=i.length)return this._content.length;if(n.line<0)return 0;var r=i[n.line],t=n.line+1<i.length?i[n.line+1]:this._content.length;return Math.max(Math.min(r+n.character,t),r)},Object.defineProperty(e.prototype,"lineCount",{get:function(){return this.getLineOffsets().length},enumerable:!1,configurable:!0}),e}(),o;(function(e){var n=Object.prototype.toString;function i(g){return typeof g<"u"}e.defined=i;function r(g){return typeof g>"u"}e.undefined=r;function t(g){return g===!0||g===!1}e.boolean=t;function a(g){return n.call(g)==="[object String]"}e.string=a;function s(g){return n.call(g)==="[object Number]"}e.number=s;function u(g,T,P){return n.call(g)==="[object Number]"&&T<=g&&g<=P}e.numberRange=u;function c(g){return n.call(g)==="[object Number]"&&-2147483648<=g&&g<=2147483647}e.integer=c;function d(g){return n.call(g)==="[object Number]"&&0<=g&&g<=2147483647}e.uinteger=d;function v(g){return n.call(g)==="[object Function]"}e.func=v;function l(g){return g!==null&&typeof g=="object"}e.objectLiteral=l;function C(g,T){return Array.isArray(g)&&g.every(T)}e.typedArray=C})(o||(o={}));var st=class{constructor(e,n,i){this._languageId=e,this._worker=n,this._disposables=[],this._listener=Object.create(null);const r=a=>{let s=a.getLanguageId();if(s!==this._languageId)return;let u;this._listener[a.uri.toString()]=a.onDidChangeContent(()=>{window.clearTimeout(u),u=window.setTimeout(()=>this._doValidate(a.uri,s),500)}),this._doValidate(a.uri,s)},t=a=>{h.editor.setModelMarkers(a,this._languageId,[]);let s=a.uri.toString(),u=this._listener[s];u&&(u.dispose(),delete this._listener[s])};this._disposables.push(h.editor.onDidCreateModel(r)),this._disposables.push(h.editor.onWillDisposeModel(t)),this._disposables.push(h.editor.onDidChangeModelLanguage(a=>{t(a.model),r(a.model)})),this._disposables.push(i(a=>{h.editor.getModels().forEach(s=>{s.getLanguageId()===this._languageId&&(t(s),r(s))})})),this._disposables.push({dispose:()=>{h.editor.getModels().forEach(t);for(let a in this._listener)this._listener[a].dispose()}}),h.editor.getModels().forEach(r)}dispose(){this._disposables.forEach(e=>e&&e.dispose()),this._disposables.length=0}_doValidate(e,n){this._worker(e).then(i=>i.doValidation(e.toString())).then(i=>{const r=i.map(a=>ut(e,a));let t=h.editor.getModel(e);t&&t.getLanguageId()===n&&h.editor.setModelMarkers(t,n,r)}).then(void 0,i=>{console.error(i)})}};function ot(e){switch(e){case y.Error:return h.MarkerSeverity.Error;case y.Warning:return h.MarkerSeverity.Warning;case y.Information:return h.MarkerSeverity.Info;case y.Hint:return h.MarkerSeverity.Hint;default:return h.MarkerSeverity.Info}}function ut(e,n){let i=typeof n.code=="number"?String(n.code):n.code;return{severity:ot(n.severity),startLineNumber:n.range.start.line+1,startColumn:n.range.start.character+1,endLineNumber:n.range.end.line+1,endColumn:n.range.end.character+1,message:n.message,code:i,source:n.source}}var ct=class{constructor(e,n){this._worker=e,this._triggerCharacters=n}get triggerCharacters(){return this._triggerCharacters}provideCompletionItems(e,n,i,r){const t=e.uri;return this._worker(t).then(a=>a.doComplete(t.toString(),ie(n))).then(a=>{if(!a)return;const s=e.getWordUntilPosition(n),u=new h.Range(n.lineNumber,s.startColumn,n.lineNumber,s.endColumn),c=a.items.map(d=>{const v={label:d.label,insertText:d.insertText||d.label,sortText:d.sortText,filterText:d.filterText,documentation:d.documentation,detail:d.detail,command:lt(d.command),range:u,kind:ft(d.kind)};return d.textEdit&&(dt(d.textEdit)?v.range={insert:L(d.textEdit.insert),replace:L(d.textEdit.replace)}:v.range=L(d.textEdit.range),v.insertText=d.textEdit.newText),d.additionalTextEdits&&(v.additionalTextEdits=d.additionalTextEdits.map(z)),d.insertTextFormat===ne.Snippet&&(v.insertTextRules=h.languages.CompletionItemInsertTextRule.InsertAsSnippet),v});return{isIncomplete:a.isIncomplete,suggestions:c}})}};function ie(e){if(e)return{character:e.column-1,line:e.lineNumber-1}}function Xe(e){if(e)return{start:{line:e.startLineNumber-1,character:e.startColumn-1},end:{line:e.endLineNumber-1,character:e.endColumn-1}}}function L(e){if(e)return new h.Range(e.start.line+1,e.start.character+1,e.end.line+1,e.end.character+1)}function dt(e){return typeof e.insert<"u"&&typeof e.replace<"u"}function ft(e){const n=h.languages.CompletionItemKind;switch(e){case p.Text:return n.Text;case p.Method:return n.Method;case p.Function:return n.Function;case p.Constructor:return n.Constructor;case p.Field:return n.Field;case p.Variable:return n.Variable;case p.Class:return n.Class;case p.Interface:return n.Interface;case p.Module:return n.Module;case p.Property:return n.Property;case p.Unit:return n.Unit;case p.Value:return n.Value;case p.Enum:return n.Enum;case p.Keyword:return n.Keyword;case p.Snippet:return n.Snippet;case p.Color:return n.Color;case p.File:return n.File;case p.Reference:return n.Reference}return n.Property}function z(e){if(e)return{range:L(e.range),text:e.newText}}function lt(e){return e&&e.command==="editor.action.triggerSuggest"?{id:e.command,title:e.title,arguments:e.arguments}:void 0}var gt=class{constructor(e){this._worker=e}provideHover(e,n,i){let r=e.uri;return this._worker(r).then(t=>t.doHover(r.toString(),ie(n))).then(t=>{if(t)return{range:L(t.range),contents:vt(t.contents)}})}};function ht(e){return e&&typeof e=="object"&&typeof e.kind=="string"}function Ue(e){return typeof e=="string"?{value:e}:ht(e)?e.kind==="plaintext"?{value:e.value.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}:{value:e.value}:{value:"```"+e.language+`
`+e.value+"\n```\n"}}function vt(e){if(e)return Array.isArray(e)?e.map(Ue):[Ue(e)]}var pt=class{constructor(e){this._worker=e}provideDocumentSymbols(e,n){const i=e.uri;return this._worker(i).then(r=>r.findDocumentSymbols(i.toString())).then(r=>{if(r)return r.map(t=>({name:t.name,detail:"",containerName:t.containerName,kind:mt(t.kind),range:L(t.location.range),selectionRange:L(t.location.range),tags:[]}))})}};function mt(e){let n=h.languages.SymbolKind;switch(e){case m.File:return n.Array;case m.Module:return n.Module;case m.Namespace:return n.Namespace;case m.Package:return n.Package;case m.Class:return n.Class;case m.Method:return n.Method;case m.Property:return n.Property;case m.Field:return n.Field;case m.Constructor:return n.Constructor;case m.Enum:return n.Enum;case m.Interface:return n.Interface;case m.Function:return n.Function;case m.Variable:return n.Variable;case m.Constant:return n.Constant;case m.String:return n.String;case m.Number:return n.Number;case m.Boolean:return n.Boolean;case m.Array:return n.Array}return n.Function}var _t=class{constructor(e){this._worker=e}provideDocumentFormattingEdits(e,n,i){const r=e.uri;return this._worker(r).then(t=>t.format(r.toString(),null,Ye(n)).then(a=>{if(!(!a||a.length===0))return a.map(z)}))}},kt=class{constructor(e){this._worker=e}provideDocumentRangeFormattingEdits(e,n,i,r){const t=e.uri;return this._worker(t).then(a=>a.format(t.toString(),Xe(n),Ye(i)).then(s=>{if(!(!s||s.length===0))return s.map(z)}))}};function Ye(e){return{tabSize:e.tabSize,insertSpaces:e.insertSpaces}}var wt=class{constructor(e){this._worker=e}provideDocumentColors(e,n){const i=e.uri;return this._worker(i).then(r=>r.findDocumentColors(i.toString())).then(r=>{if(r)return r.map(t=>({color:t.color,range:L(t.range)}))})}provideColorPresentations(e,n,i){const r=e.uri;return this._worker(r).then(t=>t.getColorPresentations(r.toString(),n.color,Xe(n.range))).then(t=>{if(t)return t.map(a=>{let s={label:a.label};return a.textEdit&&(s.textEdit=z(a.textEdit)),a.additionalTextEdits&&(s.additionalTextEdits=a.additionalTextEdits.map(z)),s})})}},Ct=class{constructor(e){this._worker=e}provideFoldingRanges(e,n,i){const r=e.uri;return this._worker(r).then(t=>t.getFoldingRanges(r.toString(),n)).then(t=>{if(t)return t.map(a=>{const s={start:a.startLine+1,end:a.endLine+1};return typeof a.kind<"u"&&(s.kind=bt(a.kind)),s})})}};function bt(e){switch(e){case U.Comment:return h.languages.FoldingRangeKind.Comment;case U.Imports:return h.languages.FoldingRangeKind.Imports;case U.Region:return h.languages.FoldingRangeKind.Region}}var Et=class{constructor(e){this._worker=e}provideSelectionRanges(e,n,i){const r=e.uri;return this._worker(r).then(t=>t.getSelectionRanges(r.toString(),n.map(ie))).then(t=>{if(t)return t.map(a=>{const s=[];for(;a;)s.push({range:L(a.range)}),a=a.parent;return s})})}};function At(e,n){n===void 0&&(n=!1);var i=e.length,r=0,t="",a=0,s=16,u=0,c=0,d=0,v=0,l=0;function C(f,b){for(var A=0,E=0;A<f||!b;){var k=e.charCodeAt(r);if(k>=48&&k<=57)E=E*16+k-48;else if(k>=65&&k<=70)E=E*16+k-65+10;else if(k>=97&&k<=102)E=E*16+k-97+10;else break;r++,A++}return A<f&&(E=-1),E}function g(f){r=f,t="",a=0,s=16,l=0}function T(){var f=r;if(e.charCodeAt(r)===48)r++;else for(r++;r<e.length&&N(e.charCodeAt(r));)r++;if(r<e.length&&e.charCodeAt(r)===46)if(r++,r<e.length&&N(e.charCodeAt(r)))for(r++;r<e.length&&N(e.charCodeAt(r));)r++;else return l=3,e.substring(f,r);var b=r;if(r<e.length&&(e.charCodeAt(r)===69||e.charCodeAt(r)===101))if(r++,(r<e.length&&e.charCodeAt(r)===43||e.charCodeAt(r)===45)&&r++,r<e.length&&N(e.charCodeAt(r))){for(r++;r<e.length&&N(e.charCodeAt(r));)r++;b=r}else l=3;return e.substring(f,b)}function P(){for(var f="",b=r;;){if(r>=i){f+=e.substring(b,r),l=2;break}var A=e.charCodeAt(r);if(A===34){f+=e.substring(b,r),r++;break}if(A===92){if(f+=e.substring(b,r),r++,r>=i){l=2;break}var E=e.charCodeAt(r++);switch(E){case 34:f+='"';break;case 92:f+="\\";break;case 47:f+="/";break;case 98:f+="\b";break;case 102:f+="\f";break;case 110:f+=`
`;break;case 114:f+="\r";break;case 116:f+="	";break;case 117:var k=C(4,!0);k>=0?f+=String.fromCharCode(k):l=4;break;default:l=5}b=r;continue}if(A>=0&&A<=31)if(F(A)){f+=e.substring(b,r),l=2;break}else l=6;r++}return f}function D(){if(t="",l=0,a=r,c=u,v=d,r>=i)return a=i,s=17;var f=e.charCodeAt(r);if(Q(f)){do r++,t+=String.fromCharCode(f),f=e.charCodeAt(r);while(Q(f));return s=15}if(F(f))return r++,t+=String.fromCharCode(f),f===13&&e.charCodeAt(r)===10&&(r++,t+=`
`),u++,d=r,s=14;switch(f){case 123:return r++,s=1;case 125:return r++,s=2;case 91:return r++,s=3;case 93:return r++,s=4;case 58:return r++,s=6;case 44:return r++,s=5;case 34:return r++,t=P(),s=10;case 47:var b=r-1;if(e.charCodeAt(r+1)===47){for(r+=2;r<i&&!F(e.charCodeAt(r));)r++;return t=e.substring(b,r),s=12}if(e.charCodeAt(r+1)===42){r+=2;for(var A=i-1,E=!1;r<A;){var k=e.charCodeAt(r);if(k===42&&e.charCodeAt(r+1)===47){r+=2,E=!0;break}r++,F(k)&&(k===13&&e.charCodeAt(r)===10&&r++,u++,d=r)}return E||(r++,l=1),t=e.substring(b,r),s=13}return t+=String.fromCharCode(f),r++,s=16;case 45:if(t+=String.fromCharCode(f),r++,r===i||!N(e.charCodeAt(r)))return s=16;case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return t+=T(),s=11;default:for(;r<i&&Ge(f);)r++,f=e.charCodeAt(r);if(a!==r){switch(t=e.substring(a,r),t){case"true":return s=8;case"false":return s=9;case"null":return s=7}return s=16}return t+=String.fromCharCode(f),r++,s=16}}function Ge(f){if(Q(f)||F(f))return!1;switch(f){case 125:case 93:case 123:case 91:case 34:case 58:case 44:case 47:return!1}return!0}function Je(){var f;do f=D();while(f>=12&&f<=15);return f}return{setPosition:g,getPosition:function(){return r},scan:n?Je:D,getToken:function(){return s},getTokenValue:function(){return t},getTokenOffset:function(){return a},getTokenLength:function(){return r-a},getTokenStartLine:function(){return c},getTokenStartCharacter:function(){return a-v},getTokenError:function(){return l}}}function Q(e){return e===32||e===9||e===11||e===12||e===160||e===5760||e>=8192&&e<=8203||e===8239||e===8287||e===12288||e===65279}function F(e){return e===10||e===13||e===8232||e===8233}function N(e){return e>=48&&e<=57}var Se;(function(e){e.DEFAULT={allowTrailingComma:!1}})(Se||(Se={}));var Tt=At;function It(e){return{getInitialState:()=>new J(null,null,!1,null),tokenize:(n,i)=>Ft(e,n,i)}}var We="delimiter.bracket.json",Ve="delimiter.array.json",Lt="delimiter.colon.json",Mt="delimiter.comma.json",Ot="keyword.json",Pt="keyword.json",Nt="string.value.json",yt="number.json",Rt="string.key.json",jt="comment.block.json",Dt="comment.line.json",Be;(function(e){e[e.Object=0]="Object",e[e.Array=1]="Array"})(Be||(Be={}));var R=class{constructor(e,n){this.parent=e,this.type=n}static pop(e){return e?e.parent:null}static push(e,n){return new R(e,n)}static equals(e,n){if(!e&&!n)return!0;if(!e||!n)return!1;for(;e&&n;){if(e===n)return!0;if(e.type!==n.type)return!1;e=e.parent,n=n.parent}return!0}},J=class{constructor(e,n,i,r){this._state=e,this.scanError=n,this.lastWasColon=i,this.parents=r}clone(){return new J(this._state,this.scanError,this.lastWasColon,this.parents)}equals(e){return e===this?!0:!e||!(e instanceof J)?!1:this.scanError===e.scanError&&this.lastWasColon===e.lastWasColon&&R.equals(this.parents,e.parents)}getStateData(){return this._state}setStateData(e){this._state=e}},xe;(function(e){e[e.None=0]="None",e[e.UnexpectedEndOfComment=1]="UnexpectedEndOfComment",e[e.UnexpectedEndOfString=2]="UnexpectedEndOfString",e[e.UnexpectedEndOfNumber=3]="UnexpectedEndOfNumber",e[e.InvalidUnicode=4]="InvalidUnicode",e[e.InvalidEscapeCharacter=5]="InvalidEscapeCharacter",e[e.InvalidCharacter=6]="InvalidCharacter"})(xe||(xe={}));var ze;(function(e){e[e.OpenBraceToken=1]="OpenBraceToken",e[e.CloseBraceToken=2]="CloseBraceToken",e[e.OpenBracketToken=3]="OpenBracketToken",e[e.CloseBracketToken=4]="CloseBracketToken",e[e.CommaToken=5]="CommaToken",e[e.ColonToken=6]="ColonToken",e[e.NullKeyword=7]="NullKeyword",e[e.TrueKeyword=8]="TrueKeyword",e[e.FalseKeyword=9]="FalseKeyword",e[e.StringLiteral=10]="StringLiteral",e[e.NumericLiteral=11]="NumericLiteral",e[e.LineCommentTrivia=12]="LineCommentTrivia",e[e.BlockCommentTrivia=13]="BlockCommentTrivia",e[e.LineBreakTrivia=14]="LineBreakTrivia",e[e.Trivia=15]="Trivia",e[e.Unknown=16]="Unknown",e[e.EOF=17]="EOF"})(ze||(ze={}));function Ft(e,n,i,r=0){let t=0,a=!1;switch(i.scanError){case 2:n='"'+n,t=1;break;case 1:n="/*"+n,t=2;break}const s=Tt(n);let u=i.lastWasColon,c=i.parents;const d={tokens:[],endState:i.clone()};for(;;){let v=r+s.getPosition(),l="";const C=s.scan();if(C===17)break;if(v===r+s.getPosition())throw new Error("Scanner did not advance, next 3 characters are: "+n.substr(s.getPosition(),3));switch(a&&(v-=t),a=t>0,C){case 1:c=R.push(c,0),l=We,u=!1;break;case 2:c=R.pop(c),l=We,u=!1;break;case 3:c=R.push(c,1),l=Ve,u=!1;break;case 4:c=R.pop(c),l=Ve,u=!1;break;case 6:l=Lt,u=!0;break;case 5:l=Mt,u=!1;break;case 8:case 9:l=Ot,u=!1;break;case 7:l=Pt,u=!1;break;case 10:const T=(c?c.type:0)===1;l=u||T?Nt:Rt,u=!1;break;case 11:l=yt,u=!1;break}if(e)switch(C){case 12:l=Dt;break;case 13:l=jt;break}d.endState=new J(i.getStateData(),s.getTokenError(),u,c),d.tokens.push({startIndex:v,scopes:l})}return d}var Ut=class extends st{constructor(e,n,i){super(e,n,i.onDidChange),this._disposables.push(h.editor.onWillDisposeModel(r=>{this._resetSchema(r.uri)})),this._disposables.push(h.editor.onDidChangeModelLanguage(r=>{this._resetSchema(r.model.uri)}))}_resetSchema(e){this._worker().then(n=>{n.resetSchema(e.toString())})}};function Vt(e){const n=[],i=[],r=new it(e);n.push(r);const t=(...u)=>r.getLanguageServiceWorker(...u);function a(){const{languageId:u,modeConfiguration:c}=e;$e(i),c.documentFormattingEdits&&i.push(h.languages.registerDocumentFormattingEditProvider(u,new _t(t))),c.documentRangeFormattingEdits&&i.push(h.languages.registerDocumentRangeFormattingEditProvider(u,new kt(t))),c.completionItems&&i.push(h.languages.registerCompletionItemProvider(u,new ct(t,[" ",":",'"']))),c.hovers&&i.push(h.languages.registerHoverProvider(u,new gt(t))),c.documentSymbols&&i.push(h.languages.registerDocumentSymbolProvider(u,new pt(t))),c.tokens&&i.push(h.languages.setTokensProvider(u,It(!0))),c.colors&&i.push(h.languages.registerColorProvider(u,new wt(t))),c.foldingRanges&&i.push(h.languages.registerFoldingRangeProvider(u,new Ct(t))),c.diagnostics&&i.push(new Ut(u,t,e)),c.selectionRanges&&i.push(h.languages.registerSelectionRangeProvider(u,new Et(t)))}a(),n.push(h.languages.setLanguageConfiguration(e.languageId,St));let s=e.modeConfiguration;return e.onDidChange(u=>{u.modeConfiguration!==s&&(s=u.modeConfiguration,a())}),n.push(He(i)),He(n)}function He(e){return{dispose:()=>$e(e)}}function $e(e){for(;e.length;)e.pop().dispose()}var St={wordPattern:/(-?\d*\.\d\w*)|([^\[\{\]\}\:\"\,\s]+)/g,comments:{lineComment:"//",blockComment:["/*","*/"]},brackets:[["{","}"],["[","]"]],autoClosingPairs:[{open:"{",close:"}",notIn:["string"]},{open:"[",close:"]",notIn:["string"]},{open:'"',close:'"',notIn:["string"]}]};export{Vt as setupMode};