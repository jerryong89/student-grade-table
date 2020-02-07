class GradeForm {
  constructor(formElement){
    this.formElement = formElement;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.formElement.addEventListener("submit", this.handleSubmit);
  }
  onSubmit(createGrade){
    this.onSubmit = onSubmit;
  }
  handleSubmit(event){
    event.preventDefault();
    console.log("hi");
    var formData = new FormData(event.target);
    formData.get(name, course, grade);
    this.createGrade(name, course, grade);
    event.target.reset()
  }
}
