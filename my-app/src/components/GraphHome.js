import React, { Component } from "react";
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryTheme,
  VictoryGroup
} from "victory";
import "./../App.css";
import DataHandler from "./../container/dataHandler";

class GraphHome extends Component {
  constructor() {
    super();
    this.state = {
      students: [...DataHandler("students")],
      program: [...DataHandler("program")],
      rawData: [...DataHandler("raw")],
      filteredData: [...DataHandler("raw")],
      activeFilter: []
    };
  }

  alterState = newStateItem => {
    this.setState({ filteredData: [...newStateItem] });
  };
  // filterSwitchToState = filtername => {
  //   this.setState({ filter: [...filtername] });
  // };

  showScorePerProgram = type => {
    let program = this.state.program;
    let data = this.state.filteredData;
    const scoreType = program.map(assignment => {
      const scores = data.filter(object => object.assignment === assignment);
      const scoreSom = scores.reduce((acc, object) => {
        switch (type) {
          case "fun":
            return (
              Math.round((acc + object.ratingFun / scores.length) * 100) / 100
            );
          case "tough":
            return (
              Math.round(
                (acc + object.ratingDifficulty / scores.length) * 100
              ) / 100
            );
        }
      }, 0);
      if (type === "fun") {
        return { task: assignment, funscore: scoreSom };
      }
      if (type === "tough") {
        return { task: assignment, difficultyscore: scoreSom };
      }
    });

    return scoreType;
  };

  showScorePerStudent() {
    let students = this.state.students;
    let data = this.state.filteredData;
    const studentScores = students.map(student => {
      const scores = data.filter(object => object.name === student);
      const scoreFun = scores.reduce((acc, object) => {
        return Math.round((acc + object.ratingFun / scores.length) * 100) / 100;
      }, 0);
      const scoreTough = scores.reduce((acc, object) => {
        return (
          Math.round((acc + object.ratingDifficulty / scores.length) * 100) /
          100
        );
      }, 0);

      return {
        name: student,
        funscore: scoreFun,
        difficultyscore: scoreTough
      };
    });

    return studentScores;
  }

  render() {
    const dashboardFunScore = this.showScorePerProgram("fun");
    const dashboardToughScore = this.showScorePerProgram("tough");
    // const dashboardStudentScore = this.showScorePerStudent();

    return (
      <div>
        <div className="victoryChart">
          <div>
            <p className="studentFun">Student fun color </p>
            <p className="studentDifficulty">Student difficulty color</p>
            <VictoryChart
              // theme={VictoryTheme.material}
              width={1000}
              height={200}
              domainPadding={10}
            >
              <VictoryAxis
                label="Overall scores per task"
                theme={VictoryTheme.material}
                fixLabelOverlap={false}
                style={{
                  axisLabel: { fontSize: 10, padding: 40 },
                  ticks: { stroke: "grey", size: 5 },
                  tickLabels: { fontSize: 5, padding: 5, angle: 45 }
                }}
              />
              <VictoryAxis dependentAxis={true} />
              <VictoryGroup offset={10} colorScale={"qualitative"}>
                <VictoryBar
                  animate={{
                    duration: 2000,
                    onLoad: { duration: 1000 }
                  }}
                  barWidth={3}
                  height={3}
                  style={{
                    data: { fill: "#060606" }
                  }}
                  data={dashboardFunScore}
                  x="task"
                  y="funscore"
                />
                <VictoryBar
                  animate={{
                    duration: 2000,
                    onLoad: { duration: 700 }
                  }}
                  barWidth={3}
                  height={3}
                  style={{
                    data: { fill: "#F96D01" }
                  }}
                  data={dashboardToughScore}
                  x="task"
                  y="difficultyscore"
                />
              </VictoryGroup>
            </VictoryChart>
          </div>
        </div>
      </div>
    );
  }
}

export default GraphHome;
