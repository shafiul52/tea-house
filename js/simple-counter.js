
const count  = document.getElementById("count")
const counter = document.getElementById("counter")

const increaseBtn = document.getElementsByClassName("increase-button")[0]
const decreaseBtn = document.getElementsByClassName("decrease-button")[0]

counter.addEventListener("click",function(){

 if(increaseBtn.getAttribute("disabled") == null){

   console.log("counter")
   increaseBtn.setAttribute("disabled",true)
   decreaseBtn.setAttribute("disabled",true)
   console.log(increaseBtn.getAttribute("disabled"))
   counter.classList.add("bg-red-500")

   
 }else{
   
   increaseBtn.removeAttribute("disabled")
   decreaseBtn.removeAttribute("disabled")
   counter.classList.remove("bg-red-500")

 }


})


   increaseBtn.addEventListener("click",function(event){
      let currentCount = Number(count.innerText)
      currentCount++
      count.innerText = currentCount
      event.stopPropagation()
   })


   decreaseBtn.addEventListener("click",function(event){
      let currentCount = Number(count.innerText)
      currentCount--
      count.innerText = currentCount
      event.stopPropagation()
   })



















