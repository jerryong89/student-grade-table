class GradeTable {
  constructor(tableElement, noGradesElement) {
    this.tableElement = tableElement;
    this.noGradesElement = noGradesElement;
    this.deleteGrade = null;
    this.renderGradeRow = this.renderGradeRow.bind(this);

  }
  updateGrades(grades) {
    console.log(grades)
    $("tbody").empty();
    for (var i = 0; i < grades.length; i++) {
      this.renderGradeRow(grades[i], this.deleteGrade);
    }
    if (grades.length === 0) {
      this.noGradesElement.classList.remove("d-none");
    } else {
      this.noGradesElement.classList.add("d-none");
    }
  }
  onDeleteClick(deleteGrade) {
    this.deleteGrade = deleteGrade;
  }
  renderGradeRow(data, deleteGrade) {
    var row = document.createElement("tr");
    var studentName = document.createElement("td");
    var course = document.createElement("td");
    var grade = document.createElement("td");
    var delButtonTd = document.createElement("td");
    var deleteButton = document.createElement("button");
    deleteButton.className = "btn btn-danger";
    deleteButton.setAttribute("type", "button");
    studentName.textContent = data.name;
    course.textContent = data.course;
    grade.textContent = data.grade;
    deleteButton.textContent = "DELETE";
    deleteButton.addEventListener("click", function () {
      deleteGrade(data.id);
    });
    delButtonTd.appendChild(deleteButton);
    row.append(studentName, course, grade, delButtonTd);
    var workPlease = document.getElementsByTagName("tbody")[0].appendChild(row);
    return workPlease;
  }
}
