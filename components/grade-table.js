class GradeTable {
  constructor(tableElement, noGradesElement) {
    this.tableElement = tableElement;
    this.noGradesElement = noGradesElement;
  }
  updateGrades(grades) {
    $("tbody").empty();
    for (var i = 0; i < grades.length; i++) {
      this.renderGradeRow(grades[i], this.deleteGrade)
    //   var row = document.createElement("tr");
    //   var studentName = document.createElement("td");
    //   var course = document.createElement("td");
    //   var grade = document.createElement("td");
    //   studentName.textContent = grades[i].name;
    //   course.textContent = grades[i].course;
    //   grade.textContent = grades[i].grade;
    //   row.append(studentName, course, grade);
    //   document.getElementsByTagName("tbody")[0].appendChild(row);
    }
  }
  onDeleteClick(deleteGrade){
    this.deleteGrade = deleteGrade;
  }
  renderGradeRow(data, deleteGrade){
    function deleteGrade(){};
    var row = document.createElement("tr");
    var studentName = document.createElement("td");
    var course = document.createElement("td");
    var grade = document.createElement("td");
    var delButtonTd = document.createElement("td");
    var deleteButton = document.createElement("button");
    delButtonTd.append(deleteButton);
    studentName.textContent = data.name;
    course.textContent = data.course;
    grade.textContent = data.grade;
    deleteButton.textContent = "DELETE";
    deleteButton.addEventListener("click", function(){deleteGrade(data.id)} )
    row.append(studentName, course, grade, deleteButton);
    // document.getElementsByTagName("tbody")[0].appendChild(row);
    return row;
  }
}
