var gt=Object.defineProperty;var c=(t,r)=>gt(t,"name",{value:r,configurable:!0});import{t as j,b as O,c as C,d as kt,g as q,e as _,f as T,r as P,l as yt,s as Y,h as wt,i as At,j as tt,k as et,m as rt,n as St,o as vt,p as bt,q as xt,u as Mt,w as Ct,x as Et,y as ot}from"./PenrosePrograms-b38a2489.js";import{R as U}from"./index-74c5fbfa.js";import{j as L,a as B}from"./jsx-runtime-9c5bc5e6.js";const H={accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",overlinePosition:"overline-position",overlineThickness:"overline-thickness",panose1:"panose-1",paintOrder:"paint-order",pointerEvents:"pointer-events",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDasharray:"stroke-dasharray",strokeDashoffset:"stroke-dashoffset",strokeLinecap:"stroke-linecap",strokeLinejoin:"stroke-linejoin",strokeMiterlimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode"},x=c(({properties:t},r,o)=>{const e=["strokeStyle","name","ensureOnCanvas"],s=new Set(o.concat(e));for(const i in t){const n=t[i].contents.toString();if(n!==""&&!s.has(i))if(i in H){const a=H[i];r.hasAttribute(a)||r.setAttribute(a,n)}else if(i==="style"&&n!==""){const a=r.getAttribute(i);a===null?r.setAttribute(i,n):r.setAttribute(i,`${a}${n}`)}else r.hasAttribute(i)||r.setAttribute(i,n)}},"attrAutoFillSvg"),E=c(({properties:t},r)=>{const o=t.fillColor,e=j(o.contents);return r.setAttribute("fill",O(o.contents)),o.contents.tag!=="NONE"&&r.setAttribute("fill-opacity",e.toString()),["fillColor"]},"attrFill"),st=c(({properties:t},r,o)=>{const e=t.center,[s,i]=C(e.contents,r);return o.setAttribute("cx",s.toString()),o.setAttribute("cy",i.toString()),["center"]},"attrCenter"),nt=c(({properties:t},r)=>{let o=t.scale.contents;o=o||1;let e=r.getAttribute("transform");return e=e===null?`scale(${o})`:e+`scale{${o}}`,r.setAttribute("transform",e),["scale"]},"attrScale"),it=c(({properties:t},r,o)=>{const e=t.center,[s,i]=C(e.contents,r),n=t.width,a=t.height;let l=o.getAttribute("transform");return l=l===null?`translate(${s-n.contents/2}, ${i-a.contents/2})`:l+`translate(${s-n.contents/2}, ${i-a.contents/2})`,o.setAttribute("transform",l),["center","width","height"]},"attrTransformCoords"),Nt=c(({properties:t},r,o)=>{const e=t.center,[s,i]=C(e.contents,r),n=t.width,a=t.height;return o.setAttribute("x",(s-n.contents/2).toString()),o.setAttribute("y",(i-a.contents/2).toString()),["center","width","height"]},"attrXY"),G=c(({properties:t},r,o)=>{const e=t.width,s=t.height,i=t.center,n=t.rotation.contents,[a,l]=C(i.contents,r);let d=o.getAttribute("transform");return d=d===null?`rotate(${n}, ${a-e.contents/2}, ${l-s.contents/2})`:d+`rotate(${n}, ${a-e.contents/2}, ${l-s.contents/2})`,o.setAttribute("transform",d),["rotation","center","width","height"]},"attrRotation"),I=c(({properties:t},r)=>{const o=t.width,e=t.height;return r.setAttribute("width",o.contents.toString()),r.setAttribute("height",e.contents.toString()),["width","height"]},"attrWH"),Lt=c(({properties:t},r)=>{const o=t.cornerRadius;return r.setAttribute("rx",o.contents.toString()),["cornerRadius"]},"attrCornerRadius"),zt=c(({properties:t},r)=>{const o=t.string,e=document.createTextNode(o.contents.toString());return r.appendChild(e),["string"]},"attrString"),W="7,5",N=c(({properties:t},r)=>{const o=[],e=t.strokeColor,s=j(e.contents),i=t.strokeWidth.contents;return r.setAttribute("stroke",O(e.contents)),o.push("strokeColor","strokeWidth"),e.contents.tag!=="NONE"&&(r.setAttribute("stroke-opacity",s.toString()),r.setAttribute("stroke-width",i.toString()),"strokeDasharray"in t&&t.strokeDasharray.contents!==""?r.setAttribute("stroke-dasharray",t.strokeDasharray.contents):"strokeStyle"in t&&t.strokeStyle.contents==="dashed"&&(r.setAttribute("stroke-dasharray",W.toString()),o.push("strokeDasharray","strokeStyle")),"strokeLinecap"in t&&t.strokeLinecap.contents!==""?r.setAttribute("stroke-linecap",t.strokeLinecap.contents):r.setAttribute("stroke-linecap","butt"),o.push("strokeLinecap")),o},"attrStroke"),M=c(({properties:t},r)=>{const o=t.name,e=document.createElementNS("http://www.w3.org/2000/svg","title");return e.textContent=o.contents,r.appendChild(e),["name"]},"attrTitle"),at=c((t,r)=>{const o=kt(t),e=r.getAttribute("style");return r.setAttribute("style",e?`${e}; font: ${o};`:`font: ${o};`),["fontFamily","fontSize","fontStretch","fontStyle","fontVariant","fontWeight","lineHeigh"]},"attrFont"),ct=c((t,r,o)=>{const s=t.properties.points.contents.map(i=>C(i,r));return o.setAttribute("points",s.toString()),["points"]},"attrPolyPoints"),Rt=c((t,r,o,e)=>{const s=[...t.varyingValues],{constraintSets:i,optStages:n}=t,{inputMask:a,objMask:l,constrMask:d}=i.get(n[0]),h=[...a];for(const g of t.shapes)if(g.properties.name.contents===r)for(const f of jt(g,[o,e],s))h[f]=!1;return Object.assign(Object.assign({},t),{params:q(h,l,d),varyingValues:s})},"dragUpdate"),jt=c((t,r,o)=>{const{shapeType:e,properties:s}=t;switch(e){case"Path":return console.log("Path drag unimplemented",t),[];case"Polygon":return console.log("Polygon drag unimplemented",t),[];case"Polyline":return console.log("Polyline drag unimplemented",t),[];case"Line":return Z(s,["start","end"],r,o);default:return Z(s,["center"],r,o)}},"dragShape"),Z=c((t,r,[o,e],s)=>{const i=[];for(const n of r){const a=t[n];if(a.tag==="VectorV"){const[l,d]=a.contents;typeof l!="number"&&l.tag==="Input"&&(s[l.key]+=o,i.push(l.key)),typeof d!="number"&&d.tag==="Input"&&(s[d.key]+=e,i.push(d.key))}}return i},"moveProperties"),Ot=c(({shape:t,canvasSize:r})=>{const o=document.createElementNS("http://www.w3.org/2000/svg","circle"),e=[];return e.push(...E(t,o)),e.push(...st(t,r,o)),e.push(...N(t,o)),e.push(...M(t,o)),x(t,o,e),o},"Circle"),It=c(({shape:t,canvasSize:r})=>{const o=document.createElementNS("http://www.w3.org/2000/svg","ellipse"),e=[];return e.push(...E(t,o)),e.push(...st(t,r,o)),e.push(...N(t,o)),e.push(...M(t,o)),x(t,o,e),o},"Ellipse"),Tt=c(({shape:t,canvasSize:r,labels:o})=>{const e=document.createElementNS("http://www.w3.org/2000/svg","g"),s=[];s.push(...G(t,r,e)),s.push(...it(t,r,e)),s.push(...M(t,e));let i=!1;const n=o.get(_(t.properties.name));if(n&&n.tag==="EquationData"){const a=n.rendered.cloneNode(!0),l=a.getElementsByTagName("g")[0];s.push(...E(t,l)),s.push(...I(t,a)),l.setAttribute("stroke","none"),l.setAttribute("stroke-width","0");const d=t.properties.fontSize;a.setAttribute("style",`font-size: ${d.contents}`),e.appendChild(a),i=!0}if(!i){const a=document.createElementNS("http://www.w3.org/2000/svg","text");a.textContent=_(t.properties.string),s.push("string"),e.appendChild(a),s.push(...E(t,e)),s.push(...I(t,e)),s.push(...N(t,e)),s.push(...at(t,e))}return x(t,e,s),e},"Equation"),$t=`<?xml version='1.0' encoding='UTF-8' standalone='no'?>
<!-- Created with Inkscape (http://www.inkscape.org/) -->
<!-- https://commons.wikimedia.org/wiki/File:Tox_hallucin.svg -->
<svg
   xmlns:dc='http://purl.org/dc/elements/1.1/'
   xmlns:cc='http://creativecommons.org/ns#'
   xmlns:rdf='http://www.w3.org/1999/02/22-rdf-syntax-ns#'
   xmlns:svg='http://www.w3.org/2000/svg'
   xmlns='http://www.w3.org/2000/svg'
   xmlns:xlink='http://www.w3.org/1999/xlink'
   xmlns:sodipodi='http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd'
   xmlns:inkscape='http://www.inkscape.org/namespaces/inkscape'
   width='100%'
   height='100%'
   id='svg2'
   sodipodi:version='0.32'
 preserveAspectRatio='none'  inkscape:version='0.46'
 viewBox='0 0 300 300'  version='1.0'
   sodipodi:docname='tox hallucin.svg'
   inkscape:output_extension='org.inkscape.output.svg.inkscape'>
  <defs
     id='defs4'>
    <linearGradient
       inkscape:collect='always'
       id='linearGradient3191'>
      <stop
         style='stop-color:#ff8d00;stop-opacity:1;'
         offset='0'
         id='stop3193' />
      <stop
         style='stop-color:#ff8d00;stop-opacity:0;'
         offset='1'
         id='stop3195' />
    </linearGradient>
    <linearGradient
       id='linearGradient3175'>
      <stop
         style='stop-color:#00ccff;stop-opacity:1;'
         offset='0'
         id='stop3177' />
      <stop
         style='stop-color:#ff1300;stop-opacity:0;'
         offset='1'
         id='stop3179' />
    </linearGradient>
    <linearGradient
       id='linearGradient3155'>
      <stop
         style='stop-color:#ffffff;stop-opacity:1;'
         offset='0'
         id='stop3157' />
      <stop
         style='stop-color:#efff00;stop-opacity:1;'
         offset='1'
         id='stop3159' />
    </linearGradient>
    <inkscape:perspective
       sodipodi:type='inkscape:persp3d'
       inkscape:vp_x='0 : 526.18109 : 1'
       inkscape:vp_y='0 : 1000 : 0'
       inkscape:vp_z='744.09448 : 526.18109 : 1'
       inkscape:persp3d-origin='372.04724 : 350.78739 : 1'
       id='perspective10' />
    <radialGradient
       inkscape:collect='always'
       xlink:href='#linearGradient3155'
       id='radialGradient3161'
       cx='88.527176'
       cy='113.77536'
       fx='88.527176'
       fy='113.77536'
       r='138.2794'
       gradientUnits='userSpaceOnUse'
       gradientTransform='matrix(0.999944,-1.9657533,1.153884,0.5869605,-136.45929,210.24015)' />
    <radialGradient
       inkscape:collect='always'
       xlink:href='#linearGradient3155'
       id='radialGradient3227'
       gradientUnits='userSpaceOnUse'
       gradientTransform='matrix(0.999944,-1.9657533,1.153884,0.5869605,-136.45929,210.24015)'
       cx='88.527176'
       cy='113.77536'
       fx='88.527176'
       fy='113.77536'
       r='138.2794' />
    <radialGradient
       inkscape:collect='always'
       xlink:href='#linearGradient3191'
       id='radialGradient3197'
       cx='70.968475'
       cy='160.37096'
       fx='70.968475'
       fy='160.37096'
       r='21.348242'
       gradientTransform='matrix(1,0,0,0.9729729,0,4.3343583)'
       gradientUnits='userSpaceOnUse' />
  </defs>
  <sodipodi:namedview
     id='base'
     pagecolor='#ffffff'
     bordercolor='#666666'
     borderopacity='1.0'
     gridtolerance='10000'
     guidetolerance='10'
     objecttolerance='10'
     inkscape:pageopacity='0.0'
     inkscape:pageshadow='2'
     inkscape:zoom='1.624463'
     inkscape:cx='101.39954'
     inkscape:cy='85.047263'
     inkscape:document-units='px'
     inkscape:current-layer='layer1'
     showgrid='false'
     inkscape:window-width='1073'
     inkscape:window-height='720'
     inkscape:window-x='9'
     inkscape:window-y='37' />
  <metadata
     id='metadata7'>
    <rdf:RDF>
      <cc:Work
         rdf:about=''>
        <dc:format>image/svg+xml</dc:format>
        <dc:type
           rdf:resource='http://purl.org/dc/dcmitype/StillImage' />
      </cc:Work>
    </rdf:RDF>
  </metadata>
  <g
     inkscape:label='Layer 1'
     inkscape:groupmode='layer'
     id='layer1'>
    <path
       sodipodi:type='arc'
       style='opacity:1;fill:#efff00;fill-opacity:1.0;stroke:#000000;stroke-width:10;stroke-linejoin:bevel;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1'
       id='path2383'
       sodipodi:cx='149.64484'
       sodipodi:cy='150.35516'
       sodipodi:rx='138.2794'
       sodipodi:ry='138.2794'
       d='M 287.92424,150.35516 A 138.2794,138.2794 0 1 1 11.365433,150.35516 A 138.2794,138.2794 0 1 1 287.92424,150.35516 z' />
    <path
       sodipodi:type='arc'
       style='opacity:1;fill:#ffffff;fill-opacity:1;stroke:#000000;stroke-width:10;stroke-linejoin:bevel;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1'
       id='path3161'
       sodipodi:cx='103.94469'
       sodipodi:cy='104.13142'
       sodipodi:rx='24.748737'
       sodipodi:ry='37.476658'
       d='M 128.69342,104.13142 A 24.748737,37.476658 0 1 1 79.19595,104.13142 A 24.748737,37.476658 0 1 1 128.69342,104.13142 z'
       transform='matrix(-0.9582289,-0.2860021,-0.2860021,0.9582289,325.97792,44.974994)' />
    <path
       sodipodi:type='arc'
       style='opacity:1;fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:10;stroke-linejoin:bevel;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1'
       id='path3167'
       sodipodi:cx='106.5'
       sodipodi:cy='114'
       sodipodi:rx='9.5'
       sodipodi:ry='10'
       d='M 116,114 A 9.5,10 0 1 1 97,114 A 9.5,10 0 1 1 116,114 z'
       transform='matrix(1.6054105,0,0,1.4584426,27.357721,-51.363012)' />
    <path
       sodipodi:type='arc'
       style='opacity:1;fill:#ffffff;fill-opacity:1;stroke:#000000;stroke-width:10;stroke-linejoin:bevel;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1'
       id='path3168'
       sodipodi:cx='103.94469'
       sodipodi:cy='104.13142'
       sodipodi:rx='24.748737'
       sodipodi:ry='37.476658'
       d='M 128.69342,104.13142 A 24.748737,37.476658 0 1 1 79.19595,104.13142 A 24.748737,37.476658 0 1 1 128.69342,104.13142 z'
       transform='matrix(-0.9532299,0.302246,0.302246,0.9532299,175.23598,-14.157525)' />
    <path
       sodipodi:type='arc'
       style='opacity:1;fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:10;stroke-linejoin:bevel;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1'
       id='path3170'
       sodipodi:cx='106.5'
       sodipodi:cy='114'
       sodipodi:rx='9.5'
       sodipodi:ry='10'
       d='M 116,114 A 9.5,10 0 1 1 97,114 A 9.5,10 0 1 1 116,114 z'
       transform='matrix(1.5359163,0,0,1.6024784,-55.141915,-65.123921)' />
    <path
       sodipodi:type='arc'
       style='opacity:1;fill:#00e3ff;fill-opacity:0.47924528999999999;stroke:#000000;stroke-width:4.92309473;stroke-linejoin:bevel;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1'
       id='path3195'
       sodipodi:cx='45.27861'
       sodipodi:cy='56.802517'
       sodipodi:rx='21.939119'
       sodipodi:ry='22.8727'
       d='M 67.21773,56.802517 A 21.939119,22.8727 0 1 1 23.339491,56.802517 A 21.939119,22.8727 0 1 1 67.21773,56.802517 z'
       transform='matrix(0.8086003,0,0,0.8164126,0.2640954,-11.044101)' />
    <path
       sodipodi:type='arc'
       style='opacity:1;fill:#00e3ff;fill-opacity:0.47924529;stroke:#000000;stroke-width:4.92309475;stroke-linejoin:bevel;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1'
       id='path3197'
       sodipodi:cx='45.27861'
       sodipodi:cy='56.802517'
       sodipodi:rx='21.939119'
       sodipodi:ry='22.8727'
       d='M 67.21773,56.802517 A 21.939119,22.8727 0 1 1 23.339491,56.802517 A 21.939119,22.8727 0 1 1 67.21773,56.802517 z'
       transform='matrix(0.8086003,0,0,0.8164126,152.64503,26.616757)' />
    <path
       sodipodi:type='arc'
       style='opacity:1;fill:#00e3ff;fill-opacity:0.47924528999999999;stroke:#000000;stroke-width:4.92309473;stroke-linejoin:bevel;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1'
       id='path3199'
       sodipodi:cx='45.27861'
       sodipodi:cy='56.802517'
       sodipodi:rx='21.939119'
       sodipodi:ry='22.8727'
       d='M 67.21773,56.802517 A 21.939119,22.8727 0 1 1 23.339491,56.802517 A 21.939119,22.8727 0 1 1 67.21773,56.802517 z'
       transform='matrix(0.8086003,0,0,0.8164126,208.91913,1.5592222)' />
    <path
       sodipodi:type='arc'
       style='opacity:1;fill:#00e3ff;fill-opacity:0.47924529;stroke:#000000;stroke-width:7.66160011;stroke-linejoin:bevel;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1'
       id='path3201'
       sodipodi:cx='45.27861'
       sodipodi:cy='56.802517'
       sodipodi:rx='21.939119'
       sodipodi:ry='22.8727'
       d='M 67.21773,56.802517 A 21.939119,22.8727 0 1 1 23.339491,56.802517 A 21.939119,22.8727 0 1 1 67.21773,56.802517 z'
       transform='matrix(0.5225444,0,0,0.5216243,107.50785,6.167405)' />
    <path
       sodipodi:type='arc'
       style='opacity:1;fill:#00e3ff;fill-opacity:0.47924529;stroke:#000000;stroke-width:7.66160011;stroke-linejoin:bevel;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1'
       id='path3203'
       sodipodi:cx='45.27861'
       sodipodi:cy='56.802517'
       sodipodi:rx='21.939119'
       sodipodi:ry='22.8727'
       d='M 67.21773,56.802517 A 21.939119,22.8727 0 1 1 23.339491,56.802517 A 21.939119,22.8727 0 1 1 67.21773,56.802517 z'
       transform='matrix(0.5225444,0,0,0.5216243,18.350997,91.123147)' />
    <path
       sodipodi:type='arc'
       style='opacity:1;fill:#00e3ff;fill-opacity:0.47924529;stroke:#000000;stroke-width:7.66160011;stroke-linejoin:bevel;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1'
       id='path3205'
       sodipodi:cx='45.27861'
       sodipodi:cy='56.802517'
       sodipodi:rx='21.939119'
       sodipodi:ry='22.8727'
       d='M 67.21773,56.802517 A 21.939119,22.8727 0 1 1 23.339491,56.802517 A 21.939119,22.8727 0 1 1 67.21773,56.802517 z'
       transform='matrix(0.5225444,0,0,0.5216243,241.47652,68.717237)' />
    <path
       sodipodi:type='arc'
       style='opacity:1;fill:#00e3ff;fill-opacity:0.47924529;stroke:#000000;stroke-width:7.66160011;stroke-linejoin:bevel;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1'
       id='path3207'
       sodipodi:cx='45.27861'
       sodipodi:cy='56.802517'
       sodipodi:rx='21.939119'
       sodipodi:ry='22.8727'
       d='M 67.21773,56.802517 A 21.939119,22.8727 0 1 1 23.339491,56.802517 A 21.939119,22.8727 0 1 1 67.21773,56.802517 z'
       transform='matrix(0.5225444,0,0,0.5216243,190.12964,149.00508)' />
    <path
       id='path3209'
       style='fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:2.7166822;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1'
       d='M 61.524095,141.5056 L 61.524095,150.8265 M 61.557643,163.12376 L 61.557643,172.44466 M 75.425271,156.87515 L 66.971345,156.87515 M 56.778194,157.01501 L 48.324268,157.01501 M 71.584095,145.37378 L 65.167078,152.13403 M 56.725303,161.07608 L 50.308286,167.83633 M 71.085092,166.09132 L 64.953634,160.27118 M 57.464465,153.35509 L 51.333007,147.53495' />
    <path
       id='path3221'
       style='fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:2.7166822;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1'
       d='M 86.725071,37.423625 L 86.725071,46.744525 M 86.758619,59.041785 L 86.758619,68.362685 M 100.62625,52.793175 L 92.172321,52.793175 M 81.97917,52.933035 L 73.525244,52.933035 M 96.785071,41.291805 L 90.368054,48.052055 M 81.926279,56.994105 L 75.509262,63.754355 M 96.286068,62.009345 L 90.15461,56.189205 M 82.665441,49.273115 L 76.533983,43.452975' />
    <path
       id='path3223'
       style='fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:2.7166822;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1'
       d='M 253.0319,128.4217 L 253.0319,137.7426 M 253.06544,150.03986 L 253.06544,159.36076 M 266.93307,143.79125 L 258.47915,143.79125 M 248.286,143.93111 L 239.83207,143.93111 M 263.0919,132.28988 L 256.67488,139.05013 M 248.2331,147.99218 L 241.81609,154.75243 M 262.59289,153.00742 L 256.46144,147.18728 M 248.97227,140.27119 L 242.84081,134.45105' />
    <path
       id='path3225'
       style='fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:2.7166822;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1'
       d='M 279.70375,5.2605113 L 279.70375,14.581411 M 279.73729,26.878671 L 279.73729,36.199571 M 293.60492,20.630061 L 285.151,20.630061 M 274.95784,20.769921 L 266.50392,20.769921 M 289.76375,9.1286912 L 283.34673,15.888941 M 274.90495,24.830991 L 268.48794,31.591241 M 289.26474,29.846231 L 283.13328,24.026091 M 275.64412,17.110001 L 269.51266,11.289861'
       inkscape:transform-center-x='-6.2757294'
       inkscape:transform-center-y='-7.0601956' />
    <path
       style='fill:#ffffff;fill-opacity:0.47924529;fill-rule:evenodd;stroke:#000000;stroke-width:1.2715199px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1'
       d='M 99.300775,203.95684 L 55.102321,211.07101 C 63.275993,251.4092 43.33167,297.03463 67.500148,296.25246 C 91.668625,295.4703 75.132299,239.93649 75.132299,227.42183 C 75.132299,214.90716 96.756726,203.17467 99.300775,203.95684 z'
       id='path3227'
       sodipodi:nodetypes='ccssc' />
    <path
       style='fill:#ffffff;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:10;stroke-linecap:butt;stroke-linejoin:bevel;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1'
       d='M 46.678979,210.37636 C 46.678979,210.37636 61.688317,182.90612 101.76017,180.50181 C 148.43916,177.70107 158.61785,218.03349 198.85245,218.77857 C 250.19932,219.71215 256.73439,187.03686 256.73439,187.03686 L 257.66797,186.10329 C 255.4936,218.71891 214.56016,233.58514 186.79701,232.12826 C 154.98692,230.45901 145.34234,210.03157 116.69745,202.90772 C 90.073723,196.28652 46.678979,210.37636 46.678979,210.37636 z'
       id='path3193'
       sodipodi:nodetypes='cssccssc' />
  </g>
</svg>`;let Dt=1;const Gt=c((t,r)=>{const o="--inject-",e={clipPath:["clip-path"],"color-profile":null,cursor:null,filter:null,linearGradient:["fill","stroke"],marker:["marker","marker-end","marker-mid","marker-start"],mask:null,pattern:["fill","stroke"],radialGradient:["fill","stroke"]},s=o+Dt++,i=/url\("?#([a-zA-Z][\w:.-]*)"?\)/g,n=t.querySelectorAll("[id]");let a;const l=r?[]:null;let d;const h={},p=[];let g=!1,f,u;if(n.length){for(f=0;f<n.length;f++)d=n[f].localName,d in e&&(h[d]=1);for(d in h)(e[d]||[d]).forEach(function(S){p.indexOf(S)<0&&p.push(S)});p.length&&p.push("style");const A=t.getElementsByTagName("*");let m=t,b,w,y;for(f=-1;m!==null;){if(m.localName==="style")w=m.textContent,y=w&&w.replace(i,function(S,k){return l&&(l[k]=1),"url(#"+k+s+")"}),y!==w&&(m.textContent=y);else if(m.hasAttributes()){for(u=0;u<p.length;u++)b=p[u],w=m.getAttribute(b),y=w&&w.replace(i,function(S,k){return l&&(l[k]=1),"url(#"+k+s+")"}),y&&y!==w&&m.setAttribute(b,y);for(const S of["xlink:href","href"]){let k=m.getAttribute(S);k&&/^\s*#/.test(k)&&(k=k.trim(),m.setAttribute(S,k+s),l&&(l[k.substring(1)]=1))}}m=A.item(++f)}for(f=0;f<n.length;f++)a=n[f],(!l||l[a.id])&&(a.id+=s,g=!0)}return g},"makeIdsUnique"),Vt=c(async({shape:t,canvasSize:r,pathResolver:o})=>{const e=document.createElementNS("http://www.w3.org/2000/svg","g"),s=[],i=t.properties.href.contents;let n=await o(i);n===void 0&&(console.error(`Could not resolve image path ${i}`),n=$t),s.push("href"),e.innerHTML=n;const a=e.querySelector("svg");return Gt(e,!1),s.push(...I(t,a)),s.push(...G(t,r,e)),s.push(...it(t,r,e)),x(t,e,s),e},"Image"),$=c((t,r,o,e,s,i)=>{const n=document.createElementNS("http://www.w3.org/2000/svg","marker");n.setAttribute("id",t),n.setAttribute("markerUnits","strokeWidth"),n.setAttribute("markerWidth",P(e.width*s).toString()),n.setAttribute("markerHeight",P(e.height*s).toString()),n.setAttribute("viewBox",e.viewbox),n.setAttribute("refX",e.refX.toString()),n.setAttribute("refY",e.refY.toString()),i?n.setAttribute("orient","auto"):n.setAttribute("orient","auto-start-reverse");const a=document.createElementNS("http://www.w3.org/2000/svg","path");return a.setAttribute("d",e.path),e.fillKind==="stroke"?(a.setAttribute("fill","none"),n.setAttribute("stroke",r),n.setAttribute("stroke-opacity",o.toString())):(a.setAttribute("fill",r),a.setAttribute("fill-opacity",o.toString())),e.style&&Object.entries(e.style).forEach(([l,d])=>{a.setAttribute(l,d)}),n.appendChild(a),n},"arrowHead"),Ft=c((t,r,o)=>{const e=[],[s,i]=t.properties.start.contents,[n,a]=t.properties.end.contents,l=t.properties.startArrowheadSize.contents,d=t.properties.endArrowheadSize.contents,h=t.properties.strokeWidth.contents;e.push("start","end","startArrowhead","endArrowhead","startArrowheadSize","endArrowheadSize","strokeWidth");const p=Math.sqrt((s-n)**2+(i-a)**2);let g,f;if(r){const b=(t.properties.flipStartArrowhead.contents?r.refX:r.width-r.refX)*l*h,w=b/p*(s-n),y=b/p*(i-a);[g,f]=[s-w,i-y]}else[g,f]=[s,i];let u,A;if(o){const m=(o.width-o.refX)*d*h;[u,A]=[n-m/p*(n-s),a-m/p*(a-i)]}else[u,A]=[n,a];return[[[g,f],[u,A]],e]},"makeRoomForArrows"),qt=c(({shape:t,canvasSize:r,namespace:o,variation:e})=>{const s=T(t.properties.startArrowhead.contents),i=T(t.properties.endArrowhead.contents),[[[n,a],[l,d]],h]=Ft(t,s,i),[p,g]=C([n,a],r),[f,u]=C([l,d],r),A=`M ${p} ${g} L ${f} ${u}`,m=O(t.properties.strokeColor.contents),b=t.properties.strokeWidth.contents,w=j(t.properties.strokeColor.contents),y=document.createElementNS("http://www.w3.org/2000/svg","g"),S=`${o}-${e}`,k=S+"-startArrowId",z=S+"-endArrowId";if(s){const R=t.properties.startArrowheadSize.contents,V=t.properties.flipStartArrowhead.contents;y.appendChild($(k,m,w,s,R,V))}if(i){const R=t.properties.endArrowheadSize.contents;y.appendChild($(z,m,w,i,R,!1))}h.push("strokeColor","strokeWidth","startArrowhead","flipStartArrowhead","endArrowhead","startArrowheadSize","endArrowheadSize");const v=document.createElementNS("http://www.w3.org/2000/svg","path");return v.setAttribute("d",A),t.properties.strokeColor.contents.tag!=="NONE"&&(v.setAttribute("stroke-opacity",w.toString()),v.setAttribute("stroke-width",b.toString())),v.setAttribute("stroke",m),"strokeDasharray"in t.properties&&t.properties.strokeDasharray.contents!==""?v.setAttribute("stroke-dasharray",t.properties.strokeDasharray.contents):t.properties.strokeStyle.contents==="dashed"&&v.setAttribute("stroke-dasharray",W.toString()),h.push("strokeDasharray","strokeStyle"),"strokeLinecap"in t.properties&&t.properties.strokeLinecap.contents!==""?v.setAttribute("stroke-linecap",t.properties.strokeLinecap.contents):v.setAttribute("stroke-linecap","butt"),h.push("strokeLinecap"),s&&(v.setAttribute("marker-start",`url(#${k})`),h.push("startArrowhead")),i&&(v.setAttribute("marker-end",`url(#${z})`),h.push("endArrowhead")),y.appendChild(v),h.push(...M(t,y)),x(t,y,h),y},"Line"),Wt=c((t,r)=>t.map(o=>{const{cmd:e,contents:s}=o;if(s.length===0&&e!=="Z")return console.error("WARNING: empty path"),"";const i=yt.flatten(s.map(n=>{switch(n.tag){case"CoordV":return C(n.contents,r);case"ValueV":return n.contents}})).join(" ");return`${e} ${i}`}).join(" "),"toPathString"),Xt=c(t=>{const r=document.createElementNS("http://www.w3.org/2000/svg","filter");return r.setAttribute("id",t),r.setAttribute("x","0"),r.setAttribute("y","0"),r.setAttribute("width","200%"),r.setAttribute("height","200%"),r.innerHTML=`
    <feOffset result="offOut" in="SourceAlpha" dx="5" dy="5" />
       <feGaussianBlur result="blurOut" in="offOut" stdDeviation="4" />
       <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
       <feComponentTransfer>
         <feFuncA type="linear" slope="0.5" />
       </feComponentTransfer>
       <feMerge>
         <feMergeNode />
         <feMergeNode in="SourceGraphic" />
       </feMerge>
    `,r},"Shadow"),_t=c(({shape:t,canvasSize:r})=>{const o=t.properties.name.contents+"-startArrowId",e=t.properties.name.contents+"-endArrowId",s=t.properties.name.contents+"-shadow",i=document.createElementNS("http://www.w3.org/2000/svg","g"),n=t.properties.strokeWidth.contents,a=O(t.properties.strokeColor.contents),l=j(t.properties.strokeColor.contents),d=O(t.properties.fillColor.contents),h=j(t.properties.fillColor.contents),p=[],g=T(t.properties.startArrowhead.contents),f=T(t.properties.endArrowhead.contents);if(g){const A=t.properties.name.contents+"-startArrowId",m=t.properties.startArrowheadSize.contents,b=t.properties.flipStartArrowhead.contents;i.appendChild($(A,a,l,g,m,b))}if(f){const A=t.properties.name.contents+"-endArrowId",m=t.properties.endArrowheadSize.contents;i.appendChild($(A,a,l,f,m,!1))}p.push("name","strokeColor","startArrowhead","flipStartArrowhead","endArrowhead"),i.appendChild(Xt(s));const u=document.createElementNS("http://www.w3.org/2000/svg","path");return u.setAttribute("stroke",a),u.setAttribute("fill",d),p.push("fillColor","strokeColor"),t.properties.strokeColor.contents.tag!=="NONE"&&(u.setAttribute("stroke-width",n.toString()),u.setAttribute("stroke-opacity",l.toString()),p.push("strokeColor","strokeWidth")),t.properties.fillColor.contents.tag!=="NONE"&&(u.setAttribute("fill-opacity",h.toString()),p.push("fillColor")),"strokeDasharray"in t.properties&&t.properties.strokeDasharray.contents!==""?u.setAttribute("stroke-dasharray",t.properties.strokeDasharray.contents):t.properties.strokeStyle.contents==="dashed"&&u.setAttribute("stroke-dasharray",W.toString()),p.push("strokeDasharray","strokeStyle"),u.setAttribute("d",Wt(t.properties.d.contents,r)),p.push("d"),g&&(u.setAttribute("marker-start",`url(#${o})`),p.push("startArrowhead")),f&&(u.setAttribute("marker-end",`url(#${e})`),p.push("endArrowhead")),i.appendChild(u),p.push(...M(t,i)),x(t,i,p),i},"Path"),Pt=c(({shape:t,canvasSize:r})=>{const o=document.createElementNS("http://www.w3.org/2000/svg","polygon"),e=[];return e.push(...E(t,o)),e.push(...N(t,o)),e.push(...M(t,o)),e.push(...nt(t,o)),e.push(...ct(t,r,o)),x(t,o,e),o},"Polygon"),Yt=c(({shape:t,canvasSize:r})=>{const o=document.createElementNS("http://www.w3.org/2000/svg","polyline"),e=[];return e.push(...E(t,o)),e.push(...N(t,o)),e.push(...M(t,o)),e.push(...nt(t,o)),e.push(...ct(t,r,o)),x(t,o,e),o},"Polyline"),Ut=c(({shape:t,canvasSize:r})=>{const o=document.createElementNS("http://www.w3.org/2000/svg","rect"),e=[];return e.push(...Nt(t,r,o)),e.push(...I(t,o)),e.push(...E(t,o)),e.push(...N(t,o)),e.push(...M(t,o)),e.push(...Lt(t,o)),e.push(...G(t,r,o)),x(t,o,e),o},"Rectangle"),Bt=c(({shape:t,canvasSize:r,labels:o})=>{const e=document.createElementNS("http://www.w3.org/2000/svg","text"),s=[];s.push("x","y"),s.push(...E(t,e)),s.push(...N(t,e)),s.push(...M(t,e)),s.push(...zt(t,e)),s.push(...G(t,r,e)),s.push(...at(t,e));const i=t.properties.name,n=o.get(i.contents),a=t.properties.center,[l,d]=C(a.contents,r);if(n&&n.tag==="TextData"){const h=n.descent.contents,p=n.height.contents,g=d+(p/2-h);e.setAttribute("x",l.toString()),e.setAttribute("y",g.toString()),s.push(...I(t,e))}else e.setAttribute("x",l.toString()),e.setAttribute("y",d.toString());return x(t,e,s),e},"Text"),Ht={Circle:Ot,Ellipse:It,Rectangle:Ut,Polygon:Pt,Polyline:Yt,Equation:Tt,Path:_t,Line:qt,Image:Vt,Text:Bt},K=c(({clientX:t,clientY:r},o)=>{const e=o.getScreenCTM();return e!==null?{x:(t-e.e)/e.a,y:(r-e.f)/e.d}:{x:0,y:0}},"getPosition"),Zt=c(async(t,r,o,e)=>{const s=document.createElementNS("http://www.w3.org/2000/svg","svg");s.setAttribute("xmlns","http://www.w3.org/2000/svg"),s.setAttribute("width","100%"),s.setAttribute("height","100%"),s.setAttribute("version","1.2"),s.setAttribute("viewBox",`0 0 ${t.canvas.width} ${t.canvas.height}`);const i=c((a,l,d)=>{r(Rt(t,a,l,d))},"onDrag"),n=t.computeShapes(t.varyingValues);return await dt(n,s,{labels:t.labelCache,canvasSize:t.canvas.size,variation:t.variation,namespace:e,pathResolver:o},{updateState:r,onDrag:i,parentSVG:s}),s},"RenderInteractive"),Kt=c(async(t,r,o)=>{const{varyingValues:e,computeShapes:s,labelCache:i,canvas:n,variation:a}=t,l=document.createElementNS("http://www.w3.org/2000/svg","svg");l.setAttribute("version","1.2"),l.setAttribute("xmlns","http://www.w3.org/2000/svg"),l.setAttribute("viewBox",`0 0 ${n.width} ${n.height}`);const d=s(e);return await dt(d,l,{labels:i,canvasSize:n.size,variation:a,namespace:o,pathResolver:r},void 0),l},"RenderStatic"),Jt=c(async(t,r,o)=>{const e=document.createElementNS("http://www.w3.org/2000/svg","g"),s=wt(t.properties.shapes);for(const i of s){const n=await lt(i,r,o);e.appendChild(n)}return x(t,e,[...M(t,e),"shapes"]),e},"RenderGroup"),lt=c(async(t,r,o)=>{if(t.shapeType==="Group")return await Jt(t,r,o);{const e=await Ht[t.shapeType](Object.assign(Object.assign({},r),{shape:t}));if(o){const s=document.createElementNS("http://www.w3.org/2000/svg","g"),{shapeType:i}=t;Y[i].isLinelike?s.setAttribute("pointer-events","visibleStroke"):Y[i].isRectlike?s.setAttribute("pointer-events","bounding-box"):s.setAttribute("pointer-events","auto"),s.appendChild(e);const n=c(a=>{const{clientX:l,clientY:d}=a,{x:h,y:p}=K({clientX:l,clientY:d},o.parentSVG),{width:g,height:f,x:u,y:A}=a.target.getBBox({stroke:!0}),m=h-u,b=r.canvasSize[0]-g+(h-u),w=p-A,y=r.canvasSize[1]-f+(p-A);s.setAttribute("opacity","0.5");let S=0,k=0;const z=c(R=>{const{x:V,y:ht}=K(R,o.parentSVG),ft=J(V,m,b),mt=J(ht,w,y);S=ft-h,k=p-mt,s.setAttribute("transform",`translate(${S},${-k})`)},"onMouseMove"),v=c(()=>{s.setAttribute("opacity","1"),document.removeEventListener("mouseup",v),document.removeEventListener("mousemove",z),o.onDrag(t.properties.name.contents,S,k)},"onMouseUp");document.addEventListener("mouseup",v),document.addEventListener("mousemove",z)},"onMouseDown");return s.addEventListener("mousedown",n),s}else return e}},"RenderShape"),dt=c(async(t,r,o,e)=>{for(const s of t){const i=await lt(s,o,e);r.appendChild(i)}},"RenderShapes"),J=c((t,r,o)=>Math.min(Math.max(t,r),o),"clamp"),Qt=c(t=>{const r=At(t.variation),{constraintSets:o,optStages:e}=t,{inputMask:s,objMask:i,constrMask:n}=tt(o.get(e[0]),"missing first stage");return et(Object.assign(Object.assign({},t),{varyingValues:t.inputs.map(a=>a.init.tag==="Sampled"?a.init.sampler(r):a.init.pending),currentStageIndex:0,params:q(s,i,n)}))},"resample"),pt=c((t,r=1e4)=>{const o=Object.assign(Object.assign({},t),t.gradient.step(t,r));return D(o)&&!X(o)?ut(o):o},"stepState"),ut=c(t=>{if(X(t))return t;{const{constraintSets:r,optStages:o,currentStageIndex:e}=t,s=o[e+1],{inputMask:i,objMask:n,constrMask:a}=tt(r.get(s),"missing next stage");return Object.assign(Object.assign({},t),{currentStageIndex:e+1,params:q(i,n,a)})}},"nextStage"),te=c((t,r=1e4)=>{let o=t;for(;o.params.optStatus!=="Error"&&(!D(o)||!X(o));)D(o)&&(o=ut(o)),o=pt(o,r);return o.params.optStatus==="Error"?rt(Object.assign({errorType:"RuntimeError"},St("",o))):vt(o)},"stepUntilConvergence"),ee=c(async t=>{const r=bt(t.domain),o=xt(s=>Mt(t.substance,s),r);return o.isErr()?rt(o.error):await Ct(t.variation,t.style,...o.value)},"compileTrio"),re=c(async t=>{const r=await Et(t.shapes);if(r.isErr())throw Error(ot(r.error));return et(Object.assign(Object.assign({},t),{labelCache:r.value}))},"prepareState"),D=c(t=>t.params.optStatus==="EPConverged","stateConverged"),X=c(t=>t.currentStageIndex===t.optStages.length-1,"finalStage");async function Q(t){const r=await fetch(t);if(!r.ok){console.error(`could not fetch ${t}`);return}return await r.text()}c(Q,"fetchResolver");class F extends U.Component{canvasRef=U.createRef();penroseState=void 0;timerID=void 0;constructor(r){super(r),this.state={error:void 0}}compile=async()=>{this.penroseState=void 0,this.setState({error:void 0});const r=await ee(this.props);r.isOk()?(this.penroseState=await re(r.value),this.setState({error:void 0})):this.setState({error:r.error})};converge=async()=>{if(this.penroseState){const r=te(this.penroseState);r.isOk()?this.penroseState=r.value:this.setState({error:r.error})}};tick=()=>{this.props.animate&&this.penroseState&&!D(this.penroseState)&&(this.penroseState=pt(this.penroseState,this.props.stepSize??1),this.renderCanvas())};componentDidMount=async()=>{await this.compile(),this.props.animate||await this.converge(),this.renderCanvas(),this.timerID=window.setInterval(()=>this.tick(),1e3/60)};componentDidUpdate=async r=>{if(this.props.domain!==r.domain||this.props.substance!==r.substance||this.props.style!==r.style){await this.compile(),this.props.animate||await this.converge(),this.renderCanvas();return}if(this.penroseState&&!this.state.error){if(this.props.variation!==r.variation||this.props.animate!==r.animate){this.penroseState.variation=this.props.variation,this.penroseState=Qt(this.penroseState),this.props.animate||await this.converge(),this.renderCanvas();return}else if(this.props.interactive!==r.interactive){this.renderCanvas();return}}};componentWillUnmount=()=>{clearInterval(this.timerID)};renderCanvas=async()=>{if(this.canvasRef.current===null)return L("div",{children:"rendering..."});{const r=this.canvasRef.current;if(this.penroseState){const o=await(this.props.interactive===!1?Kt(this.penroseState,this.props.imageResolver??Q,this.props.name??""):Zt(this.penroseState,async e=>{this.penroseState=e,this.props.animate||await this.converge(),this.renderCanvas()},this.props.imageResolver??Q,this.props.name??""));o.setAttribute("height","100%"),o.setAttribute("width","100%"),r.firstChild!==null?r.replaceChild(o,r.firstChild):r.appendChild(o),this.props.onFrame&&this.props.onFrame(this.penroseState)}else return L("div",{children:"rendering..."})}};render=()=>{const{error:r}=this.state;return B("div",{style:{width:"100%",height:"100%"},children:[!r&&L("div",{style:{width:"100%",height:"100%"},ref:this.canvasRef}),r&&B("div",{style:{padding:"1em",height:"100%"},children:[L("div",{style:{fontWeight:700},children:"1 error:"}),L("div",{style:{fontFamily:"monospace"},children:ot(r).toString().split(`
`).map((o,e)=>L("p",{style:{margin:0},children:o},`err-ln-${e}`))})]})]})}}c(F,"Simple");try{F.displayName="Simple",F.__docgenInfo={description:"",displayName:"Simple",props:{domain:{defaultValue:null,description:"",name:"domain",required:!0,type:{name:"string"}},substance:{defaultValue:null,description:"",name:"substance",required:!0,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!0,type:{name:"string"}},variation:{defaultValue:null,description:"",name:"variation",required:!0,type:{name:"string"}},stepSize:{defaultValue:null,description:"",name:"stepSize",required:!1,type:{name:"number"}},interactive:{defaultValue:null,description:"",name:"interactive",required:!1,type:{name:"boolean"}},animate:{defaultValue:null,description:"",name:"animate",required:!1,type:{name:"boolean"}},onFrame:{defaultValue:null,description:"",name:"onFrame",required:!1,type:{name:"((frame: State) => void)"}},imageResolver:{defaultValue:null,description:"",name:"imageResolver",required:!1,type:{name:"PathResolver"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}}}}}catch{}export{F as S};
//# sourceMappingURL=Simple-329c4b6a.js.map