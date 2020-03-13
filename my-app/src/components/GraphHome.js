import React, { Component } from "react";
import { VictoryBar, VictoryChart, VictoryAxis } from "victory";
import "./../App.css";
import StudentData from "./../container/studentData";

class GraphHome extends Component {
  render() {
    let dataStudentRatingDifficulty = [0, 0];
    let dataStudentRatingFun = [0, 0];
    let assignmentStudent = [""];
    //select date "week1"
    const studentData = StudentData.filter(function(item) {
      return item.assignment.startsWith("W1");
    });

    //Assignments
    const assignments = studentData
      .map(item => {
        return item.assignment;
      })
      .reduce(function(a, b) {
        if (a.indexOf(b) < 0) a.push(b);
        return a;
      }, []);

    assignmentStudent = assignmentStudent.concat(assignments);

    const ratingDifficultyData = studentData.map(function(item) {
      return item.ratingDifficulty;
    });
    const ratingFunData = studentData.map(function(item) {
      return item.ratingFun;
    });

    dataStudentRatingFun = dataStudentRatingFun.concat(ratingFunData);

    dataStudentRatingDifficulty = dataStudentRatingDifficulty.concat(
      ratingDifficultyData
    );

    return (
      <div>
        <div className="victoryChart">
          <div>
            <p className="studentFun">Student fun color </p>
            <p className="studentDifficulty">Student difficulty color</p>
            <VictoryChart maxDomain={{ x: 14 }} height={200}>
              <VictoryAxis dependentAxis={true} />
              <VictoryAxis
                label="Excercises"
                tickFormat={assignmentStudent}
                style={{
                  axisLabel: { padding: 22 },
                  tickLabels: { angle: 45, fontSize: 7, padding: 8 }
                }}
              />
              <VictoryBar
                style={{ data: { fill: "#060606" } }}
                alignment="end"
                data={dataStudentRatingDifficulty}
                barWidth={5}
              />
              <VictoryBar
                style={{ data: { fill: "#F96D01" } }}
                alignment="start"
                data={dataStudentRatingFun}
                barWidth={5}
              />
            </VictoryChart>
          </div>
        </div>
      </div>
    );
  }
}

export default GraphHome;
