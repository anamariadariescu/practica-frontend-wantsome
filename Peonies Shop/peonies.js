
var valueOfBouquet = document.getElementsByName('filter');

for (i = 0; i < valueOfBouquet.length; i++) {
    // console.log(productParentNode);
    valueOfBouquet[i].onclick = function () {
        // console.log(productParentNode);

        productParentNode.innerHTML = '';

        var classSeason = document.createElement('div');
        classSeason.className = 'season';
        // classSeason.innerHTML = 'season';
        productParentNode.appendChild(classSeason);


        // console.log(this.value);

        switch (this.value) {
            case '50 - 99':
                for (i = 0; i < priceArrays.length; i++) {
                    if (priceArrays[i] >= 50 && priceArrays[i] <= 99) {
                        // productParentNode.appendChild(productNodes[i]);
                        // console.log(productNodes[i]);
                        classSeason.appendChild(productNodes[i])
                    }
                }
                break;
            case '100 - 199':
                for (i = 0; i < priceArrays.length; i++) {
                    if (priceArrays[i] >= 100 && priceArrays[i] <= 199) {
                        classSeason.appendChild(productNodes[i])
                    }
                }
                break;
            case '200 - 299':
                for (i = 0; i < priceArrays.length; i++) {
                    if (priceArrays[i] >= 200 && priceArrays[i] <= 299) {
                        classSeason.appendChild(productNodes[i])
                    }
                }
                break;
            case '300 - 399':
                for (i = 0; i < priceArrays.length; i++) {
                    if (priceArrays[i] >= 300 && priceArrays[i] <= 399) {
                        classSeason.appendChild(productNodes[i])
                    }
                }
                break;
            case '400 - 500':
                for (i = 0; i < priceArrays.length; i++) {
                    if (priceArrays[i] >= 400 && priceArrays[i] <= 500) {
                        classSeason.appendChild(productNodes[i])
                    }
                }
                break;
            case 'Spring':
                productParentNode.appendChild(springSeason)
                break;

            case 'Summer':
                productParentNode.appendChild(summerSeason)
                break;

            case 'Autumn':
                productParentNode.appendChild(autumnSeason)
                break;

            case 'Winter':
                productParentNode.appendChild(winterSeason)
                break;
        }
    }
}
var productParentNode = document.querySelector('.productParent');
var productParentSeasonNode = document.querySelectorAll('.productParent .season');

var productNodes = document.querySelectorAll('.productParent .season .product');
var myProductsPrice = document.querySelectorAll('.productParent .season .product .product-description p');
var priceArrays = [];

for (i = 0; i < myProductsPrice.length; i++) {
    priceArrays.push(parseInt(myProductsPrice[i].innerHTML.slice(0, -7)));
}


var seasonParent = document.querySelectorAll('.season');
// console.log(seasonParent);

var springSeason = document.querySelectorAll('.season')[0];
// console.log(springSeason);

var summerSeason = document.querySelectorAll('.season')[1];
// console.log(summerSeason);

var autumnSeason = document.querySelectorAll('.season')[2];
// console.log(autumnSeason);

var winterSeason = document.querySelectorAll('.season')[3];
// console.log(winterSeason);

var whichSeason = document.getElementsByName('season');
// console.log(whichSeason)

// for (i = 0; i < whichSeason.length; i++) {
//     console.log(whichSeason[i]);
//     whichSeason[i].onclick = function () {
//         productParentNode.innerHTML = '';
//         // console.log(this.value);
//         switch (this.value) {
//             case 'Spring':
//                 productParentNode.appendChild(springSeason)
//                 break;

//             case 'Summer':
//                 productParentNode.appendChild(summerSeason)
//                 break;

//             case 'Autumn':
//                 productParentNode.appendChild(autumnSeason)
//                 break;

//             case 'Winter':
//                 productParentNode.appendChild(winterSeason)
//                 break;
//         }
//     }
// }

// document.getElementsByClassName(".add-to-wishlist").addEventListener("onclick", function(){
//     alert ("Hello World!")
//   });

var myWishlist = document.getElementsByClassName("add-to-wishlist");
var wishlistParent = document.getElementById('wishlist')
// console.log(wishlist)

for (i = 0; i < myWishlist.length; i++) {
    myWishlist[i].onclick = function () {

        //create scheleton for wishlist
        var classWishlistProduct = document.createElement('div');
        classWishlistProduct.className = 'wishlist-product';
        wishlistParent.appendChild(classWishlistProduct);

        var classWishlistImg = document.createElement('div');
        classWishlistImg.className = 'wishlist-img';
        classWishlistProduct.appendChild(classWishlistImg);

        var classWishlistDescription = document.createElement('div');
        classWishlistDescription.className = 'wishlist-description';
        classWishlistProduct.appendChild(classWishlistDescription);

        // clone wishlist products
        var product = this.parentNode.parentNode
        var img = product.getElementsByClassName('product-img')[0].getElementsByTagName('img')[0].getAttribute('src');

        var paragraph1 = product.getElementsByClassName('product-description')[0].getElementsByTagName('h3')[0].innerHTML;
        // console.log(paragraph1);

        var paragraph2 = product.getElementsByClassName('product-description')[0].getElementsByTagName('p')[0].innerHTML;
        // console.log(paragraph2);


        //clone image
        var sourceImage = document.createElement('img');
        sourceImage.classList.add('small-img');
        sourceImage.src = img;
        classWishlistImg.appendChild(sourceImage);

        var sourceParagraph1 = document.createElement('p');
        sourceParagraph1.textContent = paragraph1;

        classWishlistDescription.appendChild(sourceParagraph1);
        // classWishlistDescription.appendChild.paragraph1;

        var sourceParagraph2 = document.createElement('p');
        sourceParagraph2.textContent = paragraph2;
        classWishlistDescription.appendChild(sourceParagraph2);
        // classWishlistDescription.appendChild.paragraph2;

    }
}

var myCart = document.getElementsByClassName("add-to-cart");
// console.log(myCart);
var cartParent = document.getElementById("cart");

for (i = 0; i < myCart.length; i++ ) {
    myCart[i].onclick = function() {

        //create scheleton for cart
        var classCartProduct = document.createElement('div');
        // console.log(classCartProduct)
        classCartProduct.className = "cart-product";
        cartParent.appendChild(classCartProduct);

        var classCartImg = document.createElement('div');
        classCartImg.className = "cart-img";
        classCartProduct.appendChild(classCartImg);

        var classCartDescription = document.createElement('div');
        classCartDescription.className = "cart-description";
        classCartProduct.appendChild(classCartDescription);

        var classCartQuantity = document.createElement('div');
        classCartQuantity.className = "cart-quantity";
        classCartProduct.appendChild(classCartQuantity);

        var classCartQuantityInput = document.createElement('input');
        classCartQuantityInput.className = "cart-quantity-input";
        classCartQuantityInput.type = "number";
        classCartQuantityInput.value = 1;
        classCartQuantity.appendChild(classCartQuantityInput);

        var btn = document.createElement('button');
        btn.className = "btn";
        btn.textContent = "REMOVE";
        classCartQuantity.appendChild(btn);

        // clone wishlist products
        var product = this.parentNode.parentNode
        var img = product.getElementsByClassName('product-img')[0].getElementsByTagName('img')[0].getAttribute('src');
        // console.log(img);

        var paragraph1 = product.getElementsByClassName('product-description')[0].getElementsByTagName('h3')[0].innerHTML;
        // console.log(paragraph1)

        var paragraph2 = product.getElementsByClassName('product-description')[0].getElementsByTagName('p')[0].innerHTML;
        // console.log(paragraph2)

        //clone image
        var sourceImage = document.createElement('img');
        sourceImage.classList.add('little-img');
        sourceImage.src = img;
        classCartImg.appendChild(sourceImage);

        var sourceParagraph1 = document.createElement('p');
        sourceParagraph1.textContent = paragraph1;

        classCartDescription.appendChild(sourceParagraph1);
        // classWishlistDescription.appendChild.paragraph1;

        var sourceParagraph2 = document.createElement('p');
        sourceParagraph2.textContent = paragraph2;
        classCartDescription.appendChild(sourceParagraph2);
        // classWishlistDescription.appendChild.paragraph2;   
    }
}

var removeCartItemButtons = document.getElementsByClassName('btn');
// console.log(removeCartItemButtons);

for (i = 0; i < removeCartItemButtons.length; i++) {
    var buttons = removeCartItemButtons[i];
    buttons.addEventListener('click', function(event) {
        // console.log("clicked");
        var buttonClicked = event.target;
        buttonClicked.parentElement.parentElement.remove();
        updateCartTotal()
    })
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0];
    var cartProducts = cartItemContainer.getElementsByClassName('cart-product');
    for (i = 0; i < cartProducts.length; i++) {
        var cartProduct = cartProducts[i];
        var priceBouquet = cartProduct.getElementsByClassName('cart-price')[0];
        var quantityBouquet = cartProduct.getElementsByClassName('cart-quantity-input')[0];
        // console.log(priceBouquet, quantityBouquet)
        var priceElement = parseFloat(priceBouquet.innerText.replace('lei', ''));
        // console.log(priceElement);
        var quantityElement = quantityBouquet.value
        console.log(priceElement * quantityElement)

    }
}