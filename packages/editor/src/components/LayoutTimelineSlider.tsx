// a slider that shows the history of the diagram layout optimization, requesting shapes from the worker and rendering them on demand

import { penroseBlue } from "@penrose/components";
import { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { diagramState, diagramWorkerState, optimizer } from "../state/atoms.js";
import SegmentedSlider from "./SegmentedSlider.js";

export const LayoutTimelineSlider: React.FC<{}> = (props) => {
  const [diagram, setDiagram] = useRecoilState(diagramState);
  const { optimizing } = useRecoilValue(diagramWorkerState);
  const [waiting, setWaiting] = useState(false);

  const onChange = (i: number) => {
    // request shapes from worker
    async function requestShapes() {
      setWaiting(true);
      const state = await optimizer.computeShapesAtIndex(i);
      setDiagram((diagram) => ({
        ...diagram,
        state: state,
      }));
      setWaiting(false);
    }

    if (!waiting) {
      // may not be able to request shapes if recompiled, resampled, etc between
      // call and receive
      requestShapes().catch(() => {
        setWaiting(false);
      });
    }
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <SegmentedSlider
        disabled={optimizing}
        segments={
          optimizer.getStats().map((stat, i) => ({
            label: stat.name,
            steps: stat.steps,
            color: penroseBlue.primary,
          })) ?? []
        }
        onChange={onChange}
      ></SegmentedSlider>
    </div>
  );
};