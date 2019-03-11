export default class Pagination {
  constructor(list, holder) {
    this._list = list;
    this._holder = holder;
    this._loaderHtml = this.generateHtml();
    this.setUpEvents();
  }
  generateHtml() {
    this._list._holder.insertAdjacentHTML(
      "beforeend",
      `
      <div class="pagination">
      <a href="#"><p class="pagination__prev">Prev</p></a>
        <p class="pagination__pageNumbers"></p>
      <a href="#"><p class="pagination__next">Next</p></a>
      </div>
      `
    );
    return this._list._holder.querySelector(".pagination");
  }
  updateNext() {
    this._list._pageNr += 5;
    this._list._holder.children[0].innerHTML = "";
    this._list.getData();
    this.firstNo = this.firstNo + 5;
    this.secondNo = this.secondNo + 5;
  }
  updatePrev() {
    this._list._pageNr -= 5;
    this._list._holder.children[0].innerHTML = "";
    this._list.getData();
  }
  setUpEvents() {
    this._loaderHtml
      .querySelector(".pagination__next")
      .addEventListener("click", this.updateNext.bind(this));
    this._loaderHtml
      .querySelector(".pagination__prev")
      .addEventListener("click", this.updatePrev.bind(this));
  }
}
