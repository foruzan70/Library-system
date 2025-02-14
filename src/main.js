const books = [];
const bookNameEle = document.getElementById("book-name");
const resultTable = document.getElementById("result-body");

function addBook() {
    if (bookNameEle.value != "") {
        books.push(bookNameEle.value);
        bookNameEle.value = "";
        refreshResult();
    }
}

function deleteBook(index) {
    if (confirm("آیا قصد حذف کتاب را دارید؟")) {
        if (index != undefined) {
            books[index] = undefined;
        } else {
            let code = bookNameEle.value;
            if (code != "") {
                books[code - 1] = undefined;
            }
        }
        refreshResult();
    }
}

function refreshResult() {
    let result = "";
    for (let index = 0; index < books.length; index++) {
        if (books[index] == undefined) continue;
        result += "<tr><td>" +
            (index + 1) +
            "</td><td>" +
            books[index] +
            "</td><td>" +
            "<a onclick='deleteBook(" + index + ")' class='remove-book'>X</a>" +
            "</td></tr>";
    }
    resultTable.innerHTML = result;
}