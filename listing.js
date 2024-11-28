
const items = [
    { name: "Notebook Dell", price: 4500.00, link: "https://loja1.com/notebook-dell" },
    { name: "Smartphone Samsung", price: 1500.00, link: "https://loja2.com/smartphone-samsung" },
    { name: "TV LG 55''", price: 3200.00, link: "https://loja3.com/tv-lg" },
    { name: "Fone Bluetooth JBL", price: 350.00, link: "https://loja4.com/fone-jbl" }
];

// Renderiza os itens na lista
const itemList = document.getElementById('item-list');

items.forEach(item => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
        <h3>${item.name}</h3>
        <p>Preço: R$ ${item.price.toFixed(2)}</p>
        <a href="${item.link}" target="_blank">Ver na loja</a>
    `;
    itemList.appendChild(listItem);
});
