var header = document.querySelector("header");
var pageHeader = new PageHeader(header);

var noGradesElement = document.querySelector("p");
var tbody = document.querySelector("tbody");
var gradeTable = new GradeTable(tbody, noGradesElement);

var form = document.querySelector("form");
var gradeForm = new GradeForm(form);


var app = new App(gradeTable, pageHeader, gradeForm);
app.start();
