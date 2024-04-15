const title = document.getElementById("title");
const author = document.getElementById("author");
const year = document.getElementById("year");
const bookList = document.getElementById("book-list");
const btn = document.querySelector(".btn");

const clearFields = () => {
  title.value = ''
  author.value = ''
  year.value = ''
}

const addBook = () => {
  const newRow = document.createElement("section");
    // Creating new Title
    const newTitle = document.createElement("div");
    newTitle.innerHTML = title.value;
    newRow.appendChild(newTitle);

    // Creating new Author
    const newAuthor = document.createElement("div");
    newAuthor.innerHTML = author.value;
    newRow.append(newAuthor);

    // Creating new Year
    const newYear = document.createElement("div");
    newYear.innerHTML = year.value;
    newRow.appendChild(newYear);

    // delete button
    const newBtn = document.createElement("button");
    newBtn.setAttribute('class', 'btn btn-danger removeBtn')
    newBtn.innerHTML = "X";
    newRow.appendChild(newBtn);

    if(bookList.appendChild(newRow)){
      clearFields()
    }


}

const removeBook = () => {

}

btn.addEventListener("click", function (e) {
  e.preventDefault();

  if (title.value == "" || author.value == "" || year.value == "") {
    alert("Fill The Form");
  } else {
    addBook()
  }
});

document.addEventListener('click', (e) => {
  if(e.target.classList.contains('removeBtn')){
    console.log(e.target.parentElement.parentElement)
    e.target.parentElement.remove()
  }
})
