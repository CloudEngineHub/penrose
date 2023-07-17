import{s as n,r as t,d as a}from"./walk-on-spheres.domain-a397cf8e.js";import"./index-6a5636ac.js";const o=`-- A short walk used to estimate the solution to
-- a Laplace equation Δu = 0 with both Dirichlet
-- and Neumann boundary conditions, via WoSt.
Domain U
hasMixedBoundaryConditions( U )

Point x0
Star St0 := starAround( x0 )
Point x1 := sampleBoundary( St0 )
Star St1 := starAround( x1 )
Point x2 := sampleBoundary( St1 )
Star St2 := starAround( x2 )
Point x3 := sampleBoundary( St2 )
Star St3 := starAround( x3 )
Point x4 := sampleBoundary( St3 )

Label U $\\Omega$
Label x0 $x_0$
Label x1 $x_1$
Label x2 $x_2$
Label x3 $\\cdot\\!\\cdot\\!\\cdot$
Label x4 $x_k$

`,s={substance:o,style:[{contents:n,resolver:t}],domain:a,variation:"FlaxseedSnake5823"};export{s as default};