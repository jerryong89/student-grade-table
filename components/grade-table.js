class GradeTable {
  constructor(tableElement) {
    this.tableElement = tableElement;
  }
  updateGrades(grades) {
    $("tbody").empty();
    for (var i = 0; i < grades.length; i++) {
      var row = document.createElement("tr");
      var studentName = document.createElement("td");
      var course = document.createElement("td");
      var grade = document.createElement("td");
      studentName.textContent = grades[i].name;
      course.textContent = grades[i].course;
      grade.textContent = grades[i].grade;
      row.append(studentName, course, grade);
      document.getElementsByTagName("tbody")[0].appendChild(row);
    }
  }
}
