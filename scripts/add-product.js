productList = document.querySelector('.products-list');
let buttonAdd = document.querySelector('#add-product-button');

buttonAdd.onclick = function() {
    let p = document.createElement('div');
    p.classList.add('product-card');    
    
    let imgDiv = document.createElement('div');
    imgDiv.classList.add('product-image');

    let img = document.createElement('img');
    img.src = 'images/product1.jpeg';
    imgDiv.append(img);
    // изменение названия
    let name = document.createElement('h2');
    name.classList.add('product-header');
    name.innerText = document.querySelector('#product-name').value;
    // изменение описания
    let description = document.createElement('div');
    description.classList.add('product-description');
    description.innerText = document.querySelector('#product-description').value;
    // изменение цены
    let price = document.createElement('span');
    price.classList.add('product-price');
    price.innerText = document.querySelector('#product-price').value;

    let b = document.createElement('button');
    b.innerText = 'Купить';
    p.append(name);
    p.append(imgDiv);
    p.append(price);
    p.append(b);
    productList.append(p);
}