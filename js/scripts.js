let cartArray = []
//let prices = []
let totalPrice = 0

let menu = {
    Apple: 10,
    Banana: 11,
    Kiwi: 12,
    Jackfruit: 13,
    Watermelon: 14,
    Mango: 15,
    Grape: 16,
    Berry: 17
}

let cart = document.querySelector("#cartItems")

function addToCart(name, price) {
    if (cartArray.includes(name)) {

    }
    cartArray.push(name)
    totalPrice = totalPrice + price
    //prices.push(price)

    //console.log(cartArray, totalPrice)

    let newItem = document.createElement("li")
    newItem.className = "list-group-item"
    let removeBtn = document.createElement('button')
    removeBtn.textContent = 'Remove from cart'
    removeBtn.className = 'btn btn-danger'
    removeBtn.addEventListener("click", function () {
        //console.log(newItem.textContent)
        let fruitName = newItem.textContent.split(' ')[0]
        //console.log(fruitName)
        totalPrice = totalPrice - menu[fruitName]
        cart.removeChild(newItem)

        price.textContent = totalPrice

    })

    for (x of cartArray) {
        newItem.textContent = x + ' '
    }

    newItem.appendChild(removeBtn)
    cart.appendChild(newItem)



    price = document.querySelector('#Price')
    price.textContent = totalPrice

}

