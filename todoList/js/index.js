let input=document.querySelector(".my-input")
let btn=document.querySelector(".my-btn")
let ul = document.querySelector(".list-group")

btn.addEventListener("click",function () {
    let li = document.createElement("li");
    let span=document.createElement("span")
    li.className="list-group-item";
    span.innerText = input.value;
    li.appendChild(span)
    ul.append(li)
    span.addEventListener("click",function () {
        let  newInput=document.createElement("input")
        newInput.value=span.innerText
        span.style.display="none"
        li.append(newInput)
        })
  
    
 
})
