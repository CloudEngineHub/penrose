var i=Object.defineProperty;var n=(o,s)=>i(o,"name",{value:s,configurable:!0});import{S as r}from"./Simple-31268321.js";import{c as p,o as a,e as l}from"./PenrosePrograms-2693f45a.js";import{j as e}from"./jsx-runtime-728b5a79.js";import"./svg-dbb164f9.js";import"./iframe-e9261e69.js";import"./CollectLabels-07e4a1e0.js";import"./vector-wedge.substance-82d6ba43.js";import"./resolver-5520b3c7.js";import"./twoVectorsPerp-unsugared.substance-e42b5c97.js";import"./functions.domain-b289d459.js";const E={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Simple } from "../Simple.js";
import { continuousMap, error, oneSet } from "./PenrosePrograms.js";

// const diagram = await getDiagram();

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Simple Component",
  component: Simple,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof Simple>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Simple> = (args) => (
  <div style={{ width: "50%", height: "50%" }}>
    <Simple {...args} />
  </div>
);

export const ContinuousMap = Template.bind({});
ContinuousMap.args = continuousMap;

export const OneSet = Template.bind({});
OneSet.args = oneSet;

export const Error = Template.bind({});
Error.args = error;
`,locationsMap:{"continuous-map":{startLoc:{col:48,line:18},endLoc:{col:1,line:22},startBody:{col:48,line:18},endBody:{col:1,line:22}},"one-set":{startLoc:{col:48,line:18},endLoc:{col:1,line:22},startBody:{col:48,line:18},endBody:{col:1,line:22}},error:{startLoc:{col:48,line:18},endLoc:{col:1,line:22},startBody:{col:48,line:18},endBody:{col:1,line:22}}}}},title:"Example/Simple Component",component:r},t=n(o=>e("div",{style:{width:"50%",height:"50%"},children:e(r,{...o})}),"Template"),c=t.bind({});c.args=p;const m=t.bind({});m.args=a;const d=t.bind({});d.args=l;const T=["ContinuousMap","OneSet","Error"];export{c as ContinuousMap,d as Error,m as OneSet,T as __namedExportsOrder,E as default};
//# sourceMappingURL=Simple.stories-fbd02b64.js.map