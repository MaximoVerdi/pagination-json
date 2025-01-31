const itemsList = document.getElementById('itemContainer');
const paginationContainer = document.querySelector('.pagination');
let items = [];
let currentPage = 1;
const itemsPerPage = 12;


fetch('../items.json')
    .then(response => response.json())
    .then(data => {
        items = data;
        renderPage(currentPage);
        setupPagination();
    })
    .catch(error => console.error('Error al cargar JSON:', error));


function renderPage(page) {
    itemsList.innerHTML = '';
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const paginatedItems = items.slice(start, end);

    paginatedItems.forEach(item => {
        itemsList.innerHTML += `
            <div class="item">
                <div class="item__img"><img src="${item.img}" alt="${item.name}"></div>
                <h2>${item.name}</h2>
                <strong>U$${item.price}</strong>
                <p>${item.año}</p> /
                <p>${item.km} km</p>
                <span>${item.ubicacion}</span>
            </div>`;
    });

    updatePagination();
}


function setupPagination() {
    updatePagination();
}


function updatePagination() {
    const totalPages = Math.ceil(items.length / itemsPerPage);
    paginationContainer.innerHTML = '';


    for (let i = 1; i <= totalPages; i++) {
        const pageLi = document.createElement('li');
        pageLi.classList.add('page-item');
        if (i === currentPage) pageLi.classList.add('active');
        pageLi.innerHTML = `<a class="page-link" href="#">${i}</a>`;
        pageLi.addEventListener('click', (e) => {
            e.preventDefault();
            currentPage = i;
            renderPage(currentPage);
        });
        paginationContainer.appendChild(pageLi);
    }
}
