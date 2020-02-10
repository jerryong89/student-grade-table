class PageHeader {
  constructor(headerElement) {
    this.headerElement = headerElement;
  }
  updateAverage(newAverage) {
    $("spans").empty();
    document.querySelector("spans").append(newAverage);
  }
}
