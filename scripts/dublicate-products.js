let productList = document.querySelector('.products-list');
let product = productList.querySelector('.product-card');

// заполняем сайт контентом
for(let i = 0; i < 9; i++) {
    let newNode = product.cloneNode(true);
    productList.append(newNode);
}