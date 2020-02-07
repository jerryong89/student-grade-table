var tbody = document.querySelector("tbody");
var gradeTable = new GradeTable(tbody);
var header = document.querySelector("header");
var pageHeader = new PageHeader(header);

// var  = document.querySelector();
var gradeForm = new GradeForm(tbody);

var app = new App(gradeTable, pageHeader, gradeForm);
app.start();
