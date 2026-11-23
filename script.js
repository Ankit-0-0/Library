const myLibrary=[];
function book( name,author,pages,readstatus){
    this.name=name
    this.author=author
    this.pages=pages;
    this.readstatus=readstatus
    this.id=crypto.randomUUID
}
function addBookToLibrary(name,author,pages,readstatus){
     let newBook= new book(name,author,pages,readstatus);
     myLibrary.push(newBook);
}
function displayBooks(){
for(let i=0;i<myLibrary.length;i++){
   
    let container=document.querySelector(".library");
    let clone=document.querySelector(".card").cloneNode(true);
    clone.querySelector(".name").textContent=`${myLibrary[i].name}`;
    clone.querySelector(".author").textContent=`Author : ${myLibrary[i].author}`;
    clone.querySelector(".page").textContent=`Total pages : ${myLibrary[i].pages}`;
    clone.querySelector("button").textContent=myLibrary[i].readstatus?"ALREADY READ ":"NOT READ";
    clone.dataset.id=myLibrary[i].id;
     
      container.append(clone);
}
}

const dialog=document.querySelector("#book-dialog");

const addbook=document.querySelector(".addbook");
const cancel=document.querySelector("#cancel-btn")
const form=document.querySelector("#book-form")
const submit=document.querySelector("#submit-btn")
addbook.addEventListener("click",()=>
{
dialog.showModal();
}
)

cancel.addEventListener("click",()=>dialog.close())

form.addEventListener("submit",(event)=>{
    event.preventDefault(); 
    const formdata=new FormData(form);
    const name=formdata.get("name");
    const author=formdata.get("author");
    const pages=formdata.get("pages");
    const read=formdata.get("read")==="on";

    addBookToLibrary(name,author,pages,read);
    displayBooks();
    dialog.close();
    form.reset();

})











