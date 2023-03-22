let rateing =document.querySelector(".rating");
let thank =document.querySelector(".thank");
let nselected =document.querySelector(".nselected");
let lis=Array.from(document.querySelectorAll("li"));
let del=Array.from(document.querySelectorAll("li"));

let index;
for(var i=0;i<lis.length;i++){
    
    lis[i].onclick = function(){
        for(var x=0;x<del.length;x++)
            {   del[x].classList.remove('selected');
            }
        this.classList.add('selected');
        index=this.getAttribute("data-index");
    }
    
}


function clicked(){
rateing.style.display = "none";
thank.style.display = "flex";
nselected.innerHTML="";
var txt=document.createTextNode("You Selected  "+index +" out of 5");
nselected.appendChild(txt);
}