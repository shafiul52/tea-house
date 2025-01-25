const ulTag = document.getElementById("nav-container")
const listItems = ulTag.getElementsByTagName("li")

let lastClicked = null

for(let singleListItem of listItems){

    singleListItem.addEventListener("click",function(){
       console.log(lastClicked)
        if(lastClicked == null){
             // style purpose 
             // lal hoita debo 
        // console.log(singleListItem.innerText) ntclr
        singleListItem.style.backgroundColor = "red"
        singleListItem.style.color = "white"
        lastClicked = singleListItem
        }else{
            lastClicked.style.backgroundColor = "transparent"
           lastClicked.style.color = "green"


            singleListItem.style.backgroundColor = "red"
           singleListItem.style.color = "white"
           lastClicked = singleListItem
        }

       

    })
}