let myArray = [10, 20, 30, "string", true, "prosto", 40, 50, 60, 70];
console.log(myArray.length);
for (let i = 1; i <= 10; i++) {
    document.write(`<div style="border: 1px solid #ccc; padding: 10px; margin: 10px;">Блок ${i}</div>`);
}
for (const myArrayElement of myArray) {
    document.write(`<div style="border: 1px solid #ccc; padding: 10px; margin: 10px;">Блок ${myArrayElement}</div>`)
}
let i = 0;
while (i < 20) {
    document.write(`<H1>Блок ${i}</H1>`);
    i++;
}
let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
for (let listOfItem of listOfItems) {

    document.write(`<ul>
<li>${listOfItem}</li>
</ul>`);
}
let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];
for (const product of products) {


    document.write(`
<div className="product-card">
    <h3 className="product-title">${product.title} Price - ${product.price}</h3>
    <img src=${product.image} alt="" className="product-image"/>
</div>`);
}