
var valueOfBouquet = document.getElementsByName('filter');

for (i = 0; i < valueOfBouquet.length; i++) {
    valueOfBouquet[i].onclick = function () {

        productParentNode.innerHTML = '';

        var classSeason = document.createElement('div');
        classSeason.className = 'season';
        productParentNode.appendChild(classSeason);



        switch (this.value) {
            case '50 - 99':
                for (i = 0; i < priceArrays.length; i++) {
                    if (priceArrays[i] >= 50 && priceArrays[i] <= 99) {
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

var springSeason = document.querySelectorAll('.season')[0];

var summerSeason = document.querySelectorAll('.season')[1];

var autumnSeason = document.querySelectorAll('.season')[2];

var winterSeason = document.querySelectorAll('.season')[3];

var whichSeason = document.getElementsByName('season');

    // WISHLIST

    var myWishlist = document.getElementsByClassName("add-to-wishlist");
    var wishlistParent = document.getElementById('wishlist')

    for (i = 0; i < myWishlist.length; i++) {
        myWishlist[i].onclick = function () {
            wishlistScheleton();

            cloneWishlistProduct(this);   
        }
    }

    var classWishlistProduct = document.createElement('div');
    var classWishlistDescription = document.createElement('div');
    var classWishlistImg = document.createElement('div');

    //create scheleton for wishlist
    function wishlistScheleton() {
        classWishlistProduct.className = 'wishlist-product';
        wishlistParent.appendChild(classWishlistProduct);

        classWishlistImg.className = 'wishlist-img';
        classWishlistProduct.appendChild(classWishlistImg);

        classWishlistDescription.className = 'wishlist-description';
        classWishlistProduct.appendChild(classWishlistDescription);
    };

    // clone wishlist products
    function cloneWishlistProduct($this) {
        var product = $this.parentNode.parentNode;
        var img = product.getElementsByClassName('product-img')[0].getElementsByTagName('img')[0].getAttribute('src');

        var paragraph1 = product.getElementsByClassName('product-description')[0].getElementsByTagName('h3')[0].innerHTML;

        var paragraph2 = product.getElementsByClassName('product-description')[0].getElementsByTagName('p')[0].innerHTML;

        cloneWishlistImg(img, paragraph1, paragraph2);
    };

    //clone wishlist images
    function cloneWishlistImg($img, $paragraph1, $paragraph2) {
        var sourceImage = document.createElement('img');
        sourceImage.classList.add('small-img');
        sourceImage.src = $img;
        classWishlistImg.appendChild(sourceImage);

        var sourceParagraph1 = document.createElement('p');
        sourceParagraph1.textContent = $paragraph1;
        classWishlistDescription.appendChild(sourceParagraph1);

        var sourceParagraph2 = document.createElement('p');
        sourceParagraph2.textContent = $paragraph2;
        classWishlistDescription.appendChild(sourceParagraph2);
    }
    
    // CART
    
    var myCart = document.getElementsByClassName("add-to-cart");
    var cartParent = document.getElementById("cart");
    var classCartItems = document.createElement('div');
    classCartItems.className = "cart-items";
    cartParent.appendChild(classCartItems);

    for (i = 0; i < myCart.length; i++ ) {
        myCart[i].onclick = function() {
            var cartId = document.getElementById('cart');
            cartId.setAttribute("style", "display:block");
            var cartId = document.getElementById('totalDisplay');
            cartId.setAttribute("style", "display:block");

            var classCartProduct = document.createElement('div');
            classCartProduct.className = "cart-product";
            classCartItems.appendChild(classCartProduct);

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

            // clone cart products

            var product = this.parentNode.parentNode
            var img = product.getElementsByClassName('product-img')[0].getElementsByTagName('img')[0].getAttribute('src');

            var paragraph1 = product.getElementsByClassName('product-description')[0].getElementsByTagName('h3')[0].innerHTML;

            var paragraph2 = product.getElementsByClassName('product-description')[0].getElementsByTagName('p')[0].innerHTML;

            //clone cart images

            var sourceImage = document.createElement('img');
            sourceImage.classList.add('little-img');
            sourceImage.src = img;
            classCartImg.appendChild(sourceImage);

            var sourceParagraph1 = document.createElement('p');
            sourceParagraph1.className = 'cart-item-title';
            sourceParagraph1.textContent = paragraph1;
            classCartDescription.appendChild(sourceParagraph1);

            var sourceParagraph2 = document.createElement('p');
            sourceParagraph2.className = 'cart-price';
            sourceParagraph2.textContent = paragraph2;
            classCartDescription.appendChild(sourceParagraph2);
            
            //REMOVE

            var removeCartItemButtons = document.getElementsByClassName('btn');

            for (i = 0; i < removeCartItemButtons.length; i++) {
                var buttons = removeCartItemButtons[i];
                buttons.addEventListener('click', function(event) {
                    var buttonClicked = event.target;
                    buttonClicked.parentElement.parentElement.remove();
                    updateCartTotal();
                })
            }

            // QUANTITY

            var quantityInputs = document.getElementsByClassName('cart-quantity-input');

            for (i = 0; i < quantityInputs.length; i++) {
                var input = quantityInputs[i];
                input.addEventListener('change', quantityChanged)
            }

            updateCartTotal();
        }
    }

    function quantityChanged(event) {
        var input = event.target;
        if(isNaN(this.value) || input.value <= 0) {
            input.value = 1
        }
        updateCartTotal();
    }

    function updateCartTotal() {
        var cartProducts = classCartItems.getElementsByClassName('cart-product');
        var total = 0;
        for (i = 0; i < cartProducts.length; i++) {
            var cartProduct = cartProducts[i];
            var priceBouquet = cartProduct.getElementsByClassName('cart-price')[0];
            console.log(priceBouquet);
            var quantityBouquet = cartProduct.getElementsByClassName('cart-quantity-input')[0];
            var priceElement = parseFloat(priceBouquet.innerText.replace('lei', ''));
            var quantityElement = quantityBouquet.value;
            total = total + (priceElement * quantityElement);
        }

        document.getElementsByClassName('cart-total-price')[0].innerText = total + ' lei';
    }

    var buyButton = document.getElementsByClassName('buy-button')[0];

            buyButton.addEventListener('click', displayMessage);

            function displayMessage() {
                document.getElementById('cart').innerHTML = '';
                var totalDisplayNone = document.getElementsByClassName('cart-total')[0];
                totalDisplayNone.setAttribute('style', 'display: none');
                location.reload();
            }

