import React from "react";
import styles from "./styles.module.scss";
import { VictoryLine, VictoryChart, VictoryCursorContainer } from "victory";

const LearningGraph = () => {
  return (
    <div className={styles.learningGraph}>
      <h2>Learning Graph</h2>

      <div className={styles.graphBody}>
        <h3>Time (Hrs)</h3>

        <VictoryChart
          height={200}
          width={450}
          domainPadding={30}
          padding={{ left: 30, bottom: 30, top: 10 }}
          containerComponent={
            <VictoryCursorContainer
              // cursorLabel={({ datum }) =>
              //   `${round(datum.x, 2)}, ${round(datum.y, 2)}`
              // }
              cursorDimension="x"
            />
          }
        >
          <VictoryLine
            style={{
              data: { stroke: "#5D55FF" },
            }}
            interpolation="natural"
            animate={{
              duration: 4000,
              onExit: {
                before: () => ({ _x: 0 }),
              },
              onEnter: {
                before: () => ({ _x: 0 }),
                after: (datum) => ({ _x: datum._x }),
              },
            }}
            data={[
              { x: "Mon", y: 0 },
              { x: "Tue", y: 5 },
              { x: "Wed", y: 16 },
              { x: "Thu", y: 8 },
              { x: "Fri", y: 12 },
              { x: "Sat", y: 18 },
              { x: "Sun", y: 4 },
            ]}
          />
        </VictoryChart>
      </div>
    </div>
  );
};

export default LearningGraph;
