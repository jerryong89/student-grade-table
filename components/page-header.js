class PageHeader {
  constructor(headerElement){
    this.headerElement = headerElement;
  }
  updateAverage(newAverage){
    var averageNum = document.querySelector("span");
    averageNum.append(newAverage);
  }
}
