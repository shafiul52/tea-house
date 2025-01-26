const insertButton = document.getElementById("expense-insert-btn")
const expenseField = document.getElementById("expense-field")
const amountField = document.getElementById("amount-field")


const rowContainer = document.getElementById("row-container")
const expenseSpan = document.getElementById("expense-amount")

insertButton.addEventListener("click", function(){

    const expense = expenseField.value
    const amount = Number(amountField.value)

    const row  = `<div class="flex justify-between" data-amount="$(amount)">
          <p>${expense}</p>
          <p>${amount}</p>
        </div> 
        `
        // Using js function
        const rowUsingjs = document.createElement("div")
        const expenseP = document.createElement("p")
        const amountP = document.createElement("p")

        expenseP.append(expense)
        amountP.append(amount)

        rowUsingjs.classList.add("flex","justify-between")
        rowUsingjs.setAttribute("data-amount",amount)

        rowUsingjs.append(expenseP)
        rowUsingjs.append(amountP)

        rowContainer.appendChild(rowUsingjs)
        // using js function 

        let expenseAmount = Number(expenseSpan.innerText)
        expenseAmount += amount
        expenseSpan.innerText = expenseAmount
        rowContainer.innerHTML += row;


})