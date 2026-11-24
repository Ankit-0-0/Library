const myLibrary=[];
function book( name,author,pages,readstatus){
    this.name=name
    this.author=author
    this.pages=pages;
    this.readstatus=readstatus
    this.id=crypto.randomUUID();
}
function addBookToLibrary(name,author,pages,readstatus){
     let newBook= new book(name,author,pages,readstatus);
     myLibrary.push(newBook);
}
let container=document.querySelector(".library");
let basecard=document.querySelector(".card");
function displayBooks(){
    container.replaceChildren();

for(let i=0;i<myLibrary.length;i++){

   let clone=basecard.cloneNode(true);

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
container.addEventListener("click",(event)=>
{
    const card=event.target.closest(".card")
    const bookId=card.dataset.id;
    const Index=myLibrary.findIndex((book)=>book.id===bookId)

if(event.target.id=="remo-btn"){
  if(Index !==-1)
        myLibrary.splice(Index,1);
    card.remove();
}
else if(event.target.id =="read-btn"){
myLibrary[Index].readstatus=!(myLibrary[Index].readstatus);
event.target.textContent=myLibrary[Index].readstatus?"ALREADY READ" :"NOT READ"

}

}
     )












