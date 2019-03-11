import axios from "axios";
import ListItem from "./ListItem";
import Loader from "./Loader";
import Pagination from "./Pagination";
export default class List {
  constructor(nrOfItems, holder) {
    this._nrOfItems = nrOfItems;
    this._pageNr = 0;
    this._holder = holder;
    this.x = new Loader(this._holder);
    this._pagination = new Pagination(this, this._holder);
    this._listHtmlRef = this.generateHtml();
    this.getData();
  }
  generateHtml() {
    this._holder.insertAdjacentHTML(
      "afterbegin",
      `<ul class="listItem">
      </ul>
    `
    );
    return this._holder.querySelector(".listItem");
  }
  getData() {
    this._holder.querySelector(".pagination__pageNumbers").innerHTML = "";
    //this.x.show();
    axios
      .get(
        `https://nieuws.vtm.be/feed/articles&type=video&count= ${
          this._nrOfItems
        }&from=${this._pageNr}`
      )
      .then(response => {
        //console.log(response);
        this.generateItems(response.data.response.items);
        this.numerator(response.data.response);
      });
  }
  generateItems(articles) {
    articles.forEach(article => {
      new ListItem(article, this._listHtmlRef);
    });
    this.x.hide();
    document.querySelector(".loader").style.display = "none";
  }
  numerator(pages) {
    this._holder.querySelector(".pagination__pageNumbers").insertAdjacentHTML(
      "beforeend",
      `
      <span>${this._pageNr + 1}-${this._pageNr + 5}/${pages.total}</span>
      `
    );
  }
}
