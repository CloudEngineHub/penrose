import{s as n,r,d as a}from"./ray-tracing.domain-32ec4a04.js";import"./index-941eab72.js";const e=`-- variation: ConclaveFerret7630

Scene S
Light L
Camera C

Point x0
onCamera(x0,C)
Ray r0 := rayFrom(x0)
Point x1 := intersect(r0,S)
Ray r1 := rayFrom(x1)
Point x2 := intersect(r1,S)
Ray r2 := rayFrom(x2)
Point x3 := intersect(r2,S)
Ray r3 := rayFrom(x3)
hitsLight(r3,L)

Label x1 $x_1$
Label x2 $x_2$
Label x3 $x_3$

`,i={substance:e,style:[{contents:n,resolver:r}],domain:a,variation:"RockfallLlama5064",excludeWarnings:[]};export{i as default};