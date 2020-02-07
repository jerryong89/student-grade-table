class GradeForm {
  constructor(formElement){
    this.formElement = formElement;
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  onSubmit(createGrade){
    this.onSubmit = onSubmit;
  }
  handleSubmit(event){
    preventDefault(event);
    console.log("hi");
  }
}
