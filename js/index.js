import "../css/style.scss";
import List from "./components/List";
import axios from "axios";
import * as basicLightbox from "basiclightbox";

const list = new List(5, document.getElementById("list"));
document.querySelector(".listItem").addEventListener("click", function(e) {
  const video = e.target.nextElementSibling.innerText;
  console.log(video);
  axios
    .get(
      `https://nieuws.vtm.be/feed/articles?format=json&fields=video&ids=${video}`
    )
    .then(function(result) {
      console.log(result);
      var relatedLink = result.data.response.items[0].video.url.default;
      //var imageLink = result.data.response.items[0].image.medium;
      console.log(relatedLink);
      const instance = basicLightbox.create(`
        <video controls>
          <source src="${relatedLink}" type="video/mp4">
      </video>
    `);
      instance.show();
    });
});
