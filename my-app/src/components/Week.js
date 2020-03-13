import React, { Component } from "react";
import { VictoryBar, VictoryChart, VictoryAxis } from "victory";
import "./../App.css";
import StudentData from "./../container/studentData";

class Week extends Component {
  state = { checked: false };
  handleCheckboxChange = event =>
    this.setState({ checked: event.target.checked });

  render() {
    const name = this.props.name;
    const wNumber = this.props.WNumber;
    let dataStudentRatingDifficulty = [0, 0];
    let dataStudentRatingFun = [0, 0];
    let assignmentStudent = [""];
    const Checkbox = props => <input type="checkbox" {...props} />;

    const studentData = StudentData.filter(item => {
      return item.name === name && item.assignment.startsWith(wNumber);
    });
    // console.log("this data", studentData);

    // console.log("studentdata", studentData);
    const ratingDifficultyData = studentData.map(item => {
      return item.ratingDifficulty;
    });
    // console.log("ratingdiff", ratingDifficultyData);

    const ratingFunData = studentData.map(item => {
      return item.ratingFun;
    });
    const mappedAssignmentStudent = studentData.map(item => {
      return item.assignment;
    });

    dataStudentRatingFun = dataStudentRatingFun.concat(ratingFunData);
    dataStudentRatingDifficulty = dataStudentRatingDifficulty.concat(
      ratingDifficultyData
    );
    assignmentStudent = assignmentStudent.concat(mappedAssignmentStudent);
    // console.log(this.state);
    // console.log(dataStudentRatingFun);
    // console.log(dataStudentRatingDifficulty);
    return (
      <div>
        <div>
          <div>
            <p className="studentFun">Student fun color </p>
            <p className="studentDifficulty">Student difficulty color</p>
            {/* <label>
              Fun data:{" "}
              <Checkbox
                checked={this.state.checked}
                onChange={this.handleCheckboxChange}
              />
            </label>
            <label>
              Difficulty data:{" "}
              <Checkbox
                checked={this.state.checked}
                onChange={this.handleCheckboxChange}
              /> */}
            {/* </label> */}
            <div className="victoryChart">
              <VictoryChart
                height={200}
                // theme={VictoryTheme.material}
                domainPadding={15}
              >
                <VictoryAxis
                  label={"Excercises " + wNumber}
                  tickFormat={assignmentStudent}
                  style={{
                    axisLabel: { padding: 22 },
                    tickLabels: { angle: 45, fontSize: 7, padding: 8 }
                  }}
                />
                <VictoryAxis dependentAxis={true} />
                <VictoryBar
                  categories={{
                    x: assignmentStudent
                  }}
                  barRatio={0.3}
                  style={{ data: { fill: "#060606" } }}
                  alignment="end"
                  data={dataStudentRatingDifficulty}
                />
                <VictoryBar
                  style={{ data: { fill: "#F96D01" } }}
                  alignment="start"
                  data={dataStudentRatingFun}
                  barRatio={0.3}
                />
              </VictoryChart>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Week;
