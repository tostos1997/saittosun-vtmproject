export default class ListItem {
  constructor(article, holder) {
    this._article = article;
    this._holder = holder;
    this._listItemRefHtml = this.generateHtml();
  }
  generateHtml() {
    this._holder.insertAdjacentHTML(
      "beforeend",
      `<li class="listItem__listItems">
        <img src="${this._article.image.thumb}"/>
        <p class="listItem__listItems__video">${this._article.id}</p>
        <span><p class="listItem__listItems__title">${this._article.title}</p>
        <p class="listItem__listItems__date">${
          this._article.created.formatted
        }</p>
        </span>
      </li>`
    );
    return this._holder.querySelectorAll(".listItems");
  }
}
