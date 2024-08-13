const liberys = [];
const RENDER_EVENT_BOOK = "render-book";
const RENDER_SAVED_BOOK = "render-save";
const STORAGEKEY = "LibaryApp";

document.addEventListener("DOMContentLoaded", function () {
  const inputBook = document.getElementById("inputBook");
  inputBook.addEventListener("submit", function (event) {
    event.preventDefault();
    addBook();
    const bookTitle = document.getElementById("inputBookTitle");
    bookTitle.value = "";

    const bookAuthor = document.getElementById("inputBookAuthor");
    bookAuthor.value = "";

    const bookYear = document.getElementById("inputBookYear");
    bookYear.value = "";

    const boxChecked = document.getElementById("inputBookIsComplete");
    boxChecked.checked = false;
  });

  function addBook() {
    const bookTitle = document.getElementById("inputBookTitle").value;
    const bookAuthor = document.getElementById("inputBookAuthor").value;
    const bookYear = document.getElementById("inputBookYear").value;
    const boxChecked = document.getElementById("inputBookIsComplete").checked;
    const generatedID = generatedId();
    const bookObject = generateBookObject(
      generatedID,
      bookTitle,
      bookAuthor,
      bookYear,
      boxChecked
    );
    liberys.push(bookObject);
    saveBook();
    document.dispatchEvent(new Event(RENDER_EVENT_BOOK));
  }

  function generatedId() {
    return +new Date();
  }

  function generateBookObject(id, title, author, year, isComplete) {
    return {
      id,
      title,
      author,
      year: parseInt(year),
      isComplete,
    };
  }

  document.addEventListener(RENDER_EVENT_BOOK, function () {
    const completeBookshelfList = document.getElementById(
      "completeBookshelfList"
    );
    completeBookshelfList.innerHTML = "";

    const incompleteBookshelfList = document.getElementById(
      "incompleteBookshelfList"
    );
    incompleteBookshelfList.innerHTML = "";

    for (const bookItem of liberys) {
      const bookElement = makeBook(bookItem);
      if (!bookItem.isComplete) incompleteBookshelfList.append(bookElement);
      else completeBookshelfList.append(bookElement);
    }
  });

  function makeBook(bookObject) {
    const bookTitle = document.createElement("h3");
    bookTitle.innerText = bookObject.title;

    const penulisBook = document.createElement("p");
    penulisBook.innerText = bookObject.author;

    const tahunBook = document.createElement("p");
    tahunBook.innerText = Number(bookObject.year);

    const buttonDiv = document.createElement("div");
    buttonDiv.classList.add("action");

    const btnRed = document.createElement("button");
    btnRed.classList.add("red");
    btnRed.innerText = "Hapus Buku";

    btnRed.addEventListener("click", function () {
      removeBook(bookObject.id);
    });

    const articleBook = document.createElement("article");
    articleBook.classList.add("book_item");
    articleBook.append(bookTitle, penulisBook, tahunBook, buttonDiv);

    if (bookObject.isComplete) {
      const btnGreen = document.createElement("button");
      btnGreen.classList.add("green");
      btnGreen.innerText = "Belum Selesai dibaca";

      btnGreen.addEventListener("click", function () {
        unFinishedBook(bookObject.id);
      });
      buttonDiv.append(btnGreen, btnRed);
    } else {
      const btnGreen = document.createElement("button");
      btnGreen.classList.add("green");
      btnGreen.innerText = "Selesai dibaca";

      btnGreen.addEventListener("click", function () {
        finishedBook(bookObject.id);
      });
      buttonDiv.append(btnGreen, btnRed);
    }

    return articleBook;
  }

  document
    .getElementById("searchBook")
    .addEventListener("click", function (event) {
      event.preventDefault();
      const searchBook = document
        .getElementById("searchBookTitle")
        .value.toLowerCase();
      const bookList = document.querySelectorAll(".book_item > h3");
      for (const buku of bookList) {
        if (buku.innerText.toLowerCase().includes(searchBook)) {
          buku.parentElement.style.display = "block";
        } else if (searchBook !== buku.innerText.toLowerCase()) {
          buku.parentElement.style.display = "none";
        } else {
          buku.parentElement.style.display = "block";
        }
      }
    });

  function finishedBook(bookId) {
    const bookTarget = findBook(bookId);

    if (bookTarget == null) return;

    bookTarget.isComplete = true;
    saveBook();
    document.dispatchEvent(new Event(RENDER_EVENT_BOOK));
  }

  function findBook(bookId) {
    for (const bookItem of liberys) {
      if (bookItem.id === bookId) {
        return bookItem;
      }
    }
    return null;
  }

  function unFinishedBook(bookId) {
    const bookTarget = findBook(bookId);

    if (bookTarget == null) return;

    bookTarget.isComplete = false;
    saveBook();
    document.dispatchEvent(new Event(RENDER_EVENT_BOOK));
  }

  function removeBook(bookId) {
    const bookTarget = findIndexBook(bookId);

    if (bookTarget === -1) return;

    liberys.splice(bookTarget, 1);
    saveBook();
    document.dispatchEvent(new Event(RENDER_EVENT_BOOK));
  }

  function findIndexBook(bookId) {
    for (const index in liberys) {
      if (liberys[index].id === bookId) {
        return index;
      }
    }
    return -1;
  }

  function saveBook() {
    if (isStorageExist) {
      const parsedBook = JSON.stringify(liberys);
      localStorage.setItem(STORAGEKEY, parsedBook);
      document.dispatchEvent(new Event(RENDER_SAVED_BOOK));
    }
  }

  function isStorageExist() {
    if (typeof Storage === undefined) {
      alert("Browser yang digunakan tidak mendukung Web Storage");
      return false;
    }
    return true;
  }

  function loadDataFromStorage() {
    let parseData = JSON.parse(localStorage.getItem(STORAGEKEY));
    if (parseData !== null) {
      for (const userBook of parseData) {
        liberys.push(userBook);
      }
    }
    document.dispatchEvent(new Event(RENDER_EVENT_BOOK));
  }
  document.addEventListener(RENDER_SAVED_BOOK, function () {
    console.log(localStorage.getItem(STORAGEKEY));

    alert("Selamat anda telah menambahkan kegiatan baru untuk dilakukan!");
  });
  if (isStorageExist()) {
    loadDataFromStorage();
  }
});
