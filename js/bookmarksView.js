import View from "./view.js";
import previewView from "./previewView.js";
import icons from "url:../images/icons.svg";

class BookmarksView extends View {
  _parentElement = document.querySelector(".bookmarks__list");
  _errorMessage = `No bookmarks yet. Find a nice recipe and bookmark it.`;
  _message = ``;

  addHandlerRender(handler) {
    window.addEventListener("load", handler);
  }

  _generateMarkup() {
    return this._data
      .map((bookmarks) => previewView.render(bookmarks, false))
      .join("");
  }
}

export default new BookmarksView();
