import{m as n}from"./resolver-5520b3c7.js";import"./iframe-e9261e69.js";const e=`Object o 
AutoLabel All`,t=n("animation"),r=`canvas {
    width = 400
    height = 400
}

layout = [centerX, centerY, shrink]

forall Object o {
    x = ? 
    y = ?
    r = ?
    o.shape = Circle {
      center: (x, y)
      r: r
    }
    o.text = Equation {
        string: o.label
    }
    ensure contains(o.shape, o.text)
    ensure equal(x, 0)
    ensure equal(y, 0) except centerX
    ensure equal(r, 30) in shrink
}`,o="type Object",c={substance:e,style:[{contents:r,resolver:t}],domain:o,variation:""};export{c as default};
//# sourceMappingURL=center-shrink-circle.trio-6bbd7de7.js.map