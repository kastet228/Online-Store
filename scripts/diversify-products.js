let allProducts = productList.querySelectorAll('.product-card');

let products = 
[
    {
        name: "Туалетная вода Antonio Banderas Blue Seduction",
        image: "product1.jpeg",
        description: "Мужская, 100мл",
        price: '2499.00 ₽'
    },
    {
        name: "Туалетная вода Sex Symbol Energy",
        image: "product2.jpeg",
        description: "Мужская, 100мл",
        price: '699.99 ₽'
    },
    {
        name: "Туалетная вода Bruno banani Pure",
        image: "product3.jpeg",
        description: "Женская, 40мл",
        price: 'Нет в наличии'
    }
];


for(let i = 0; i < allProducts.length; i++) {
    let randomProductNumber = Math.ceil(Math.random() * products.length) - 1;
    
    let p = allProducts[i];
    // изменение картинки
    let img = p.getElementsByTagName('img')[0];
    img.src = 'images/' + products[randomProductNumber].image;
    // изменение названия
    let name = p.getElementsByTagName('h2')[0];
    name.innerText = products[randomProductNumber].name;
    // изменение описания
    let description = p.getElementsByClassName('product-description')[0];
    description.innerText = products[randomProductNumber].description;
    // изменение цены
    let price = p.getElementsByClassName('product-price')[0];
    price.innerText = products[randomProductNumber].price;
}