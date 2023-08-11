import View from './view.js';
import previewView from './previewView.js';

class BookmarksView extends View {
  _parentElement = document.querySelector('.bookmarks__list');
  _numBookmarkEl = document.querySelector('.num-bookmarks');

  _errorMessage = 'No bookmarks yet. Find a nice recipe and bookmark it;)';
  _message = '';

  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }

  _generateMarkup() {
    return this._data
      .map(bookmark => previewView.render(bookmark, false))
      .join('');
  }

  updateNumBookmarks(numBookmarks) {
    this._numBookmarkEl.textContent = numBookmarks;
  }
}

export default new BookmarksView();
