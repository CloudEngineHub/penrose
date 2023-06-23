import{s as n,r as o}from"./lewis.style-1599f3da.js";import{d as e}from"./molecules.domain-55131764.js";import"./resolver-5520b3c7.js";import"./iframe-e9261e69.js";const r=`Hydrogen h
Nitrogen n
Oxygen o1, o2, o3
-- bonds
Bond b1 := MakeSingleBond(h, o1)
Bond b2 := MakeSingleBond(o1, n)
Bond b3 := MakeDoubleBond(n, o2)
Bond b4 := MakeSingleBond(o3, n)
-- electrons
ZeroValenceElectrons(h)
ZeroValenceElectrons(n)
FourValenceElectrons(o1)
FourValenceElectrons(o2)
SixValenceElectrons(o3)
-- layout
-- Collinear(n, o1, h)
-- VerticalAlign(o2, n)
-- HorizontalAlign(o1, o3)
`,s={substance:r,style:[{contents:n,resolver:o}],domain:e,variation:"DeadlockWren0150"};export{s as default};
//# sourceMappingURL=nitricacid-lewis.trio-80361233.js.map