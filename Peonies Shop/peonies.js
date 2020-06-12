
var valueOfBouquet = document.getElementsByName('price');

for (i = 0; i < valueOfBouquet.length; i++) 
{
    console.log(productParentNode);
    valueOfBouquet[i].onclick = function () {
    console.log(productParentNode);

        productParentNode.innerHTML = '';

        var classSeason = document.createElement('div');
        classSeason.className = 'season';
        // classSeason.innerHTML = 'season';
        productParentNode.appendChild(classSeason);


        // alert(this.value);

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
console.log(seasonParent);

var springSeason = document.querySelectorAll('.season')[0];
console.log(springSeason);

var summerSeason = document.querySelectorAll('.season')[1];
console.log(summerSeason);

var autumnSeason = document.querySelectorAll('.season')[2];
console.log(autumnSeason);

var winterSeason = document.querySelectorAll('.season')[3];
console.log(winterSeason);

var whichSeason = document.getElementsByName('season');
console.log(whichSeason)

for (i = 0; i < whichSeason.length; i++) {
    console.log(whichSeason[i]);
    whichSeason[i].onclick = function () {
        productParentNode.innerHTML = '';
        // console.log(this.value);
        switch(this.value) {
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