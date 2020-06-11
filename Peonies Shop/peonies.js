
var valueOfBouquet = document.getElementsByName('price');

// for(i=0; i<valueOfBouquet.length; i++) {
//     // if(valueOfBouquet[i].checked)
//     // console.log(valueOfBouquet[i].value)
//     valueOfBouquet[i].onclick = function() {
//         // alert(this.value);
//         switch(this.value) {
//             case '50 - 100':
//                 alert(1);

//         }
//     }
// }

var productNodes = document.querySelectorAll('.productParent .season .product');

var myProductsPrice =  document.querySelectorAll('.productParent .season .product-description p');

var priceArrays = [];

for (i=0; i<myProductsPrice.length; i++) {
    priceArrays.push(parseInt(myProductsPrice[i].innerHTML.slice(0, -7)));

}

console.log(priceArrays);

