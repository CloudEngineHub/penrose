import{s as n,r as e,d as a}from"./walk-on-spheres.domain-34dbc5a2.js";import"./resolver-33472b42.js";import"./iframe-39c020d4.js";const t=`-- Describe a short walk used to estimate the solution to
-- a basic Laplace equation Δu = 0, using off-centered
-- rather than on-centered steps.

Domain U

Point x0
Ball B0 := ballAround( x0 )
Point x1 := sampleBoundary( B0 )
Ball B1 := ballAround( x1 )
Point x2 := sampleBoundary( B1 )
Ball B2 := ballAround( x2 )
Point x3 := sampleBoundary( B2 )
Ball B3 := ballAround( x3 )

isOffCenter( B0 )
isOffCenter( B1 )
isOffCenter( B2 )
isOffCenter( B3 )

Label U $\\Omega$
Label x0 $x_0$
Label x1 $x_1$
Label x2 $\\ldots$
Label x3 $x_k$


`,s={substance:t,style:[{contents:n,resolver:e}],domain:a,variation:"PlumburnPartridge8506",excludeWarnings:[]};export{s as default};
//# sourceMappingURL=offcenter-estimator.trio-9d9cdcd7.js.map