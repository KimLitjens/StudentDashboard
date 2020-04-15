import RawStudentData from "./studentData";

function DataHandler(requested) {
  const data = RawStudentData;
  switch (requested) {
    case "raw":
      return data;

    case "students":
      return [...new Set(data.map(student => student.name))];

    case "program":
      return [...new Set(data.map(program => program.assignment))];

    default:
      return null;
  }
}

export default DataHandler;
