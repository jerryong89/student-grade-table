class App {
  constructor(gradeTable, pageHeader) {
    this.gradeTable = gradeTable;
    this.pageHeader = pageHeader;
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
  }
  handleGetGradesError(error) {
    console.error(error);
  }
  handleGetGradesSuccess(grades) {
    this.gradeTable.updateGrades(grades);
    var total = 0;
    for (var i = 0; i < grades.length; i++) {
      total += grades[i].grade;
    }
    var average = total / grades.length;
    this.pageHeader.updateAverage(average);
  }
  getGrades() {
    $.ajax({
      method: "GET",
      url: "http://sgt.lfzprototypes.com/api/grades",
      headers: { "X-Access-Token": "a16gughr" },
      success: this.handleGetGradesSuccess,
      error: this.handleGetGradesError
    })
  }
  start() {
    this.getGrades()
  }
}