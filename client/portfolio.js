// Invoking strict mode https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode#invoking_strict_mode
'use strict';

// current products on the page
let currentProducts = [];
let currentPagination = {};
let currentFilter = [];

// inititiqte selectors
const selectShow = document.querySelector('#show-select'); //pour modifier le nombre de produits affichés
const selectPage = document.querySelector('#page-select'); //pour modifier la page 
const sectionProducts = document.querySelector('#products');
const spanNbProducts = document.querySelector('#nbProducts');

/**
 * Set global value
 * @param {Array} result - products to display
 * @param {Object} meta - pagination meta info
 */
const setCurrentProducts = ({result, meta}) => {
  currentProducts = result;
  currentPagination = meta;
};

/**
 * Fetch products from api
 * @param  {Number}  [page=1] - current page to fetch
 * @param  {Number}  [size=12] - size of the page
 * @return {Object}
 */
const fetchProducts = async (page = 1, size = 12) => {
  try {
    const response = await fetch(
      `https://clear-fashion-api.vercel.app?page=${page}&size=${size}`
    );
    const body = await response.json();

    if (body.success !== true) {
      console.error(body);
      return {currentProducts, currentPagination};
    }

    return body.data;
  } catch (error) {
    console.error(error);
    return {currentProducts, currentPagination};
  }
};

/**
 * Render list of products
 * @param  {Array} products
 */
const renderProducts = products => {
  const fragment = document.createDocumentFragment();
  const div = document.createElement('div');
  const template = products
    .map(product => {
      return `
      <div class="product" id=${product.uuid}>
        <span>${product.brand}</span>
        <a href="${product.link}">${product.name}</a>
        <span>${product.price}</span>
      </div>
    `;
    })
    .join('');

  div.innerHTML = template;
  fragment.appendChild(div);
  sectionProducts.innerHTML = '<h2>Products</h2>';
  sectionProducts.appendChild(fragment);
};

/**
 * Render page selector
 * @param  {Object} pagination
 */
const renderPagination = pagination => {
  const {currentPage, pageCount} = pagination;
  const options = Array.from(
    {'length': pageCount},
    (value, index) => `<option value="${index + 1}">${index + 1}</option>`
  ).join('');

  selectPage.innerHTML = options;
  selectPage.selectedIndex = currentPage - 1;
};

/**
 * Render page selector
 * @param  {Object} pagination
 */
const renderIndicators = pagination => {
  const {count} = pagination;

  spanNbProducts.innerHTML = count;
};

const render = (products, pagination) => {
  renderProducts(products);
  renderPagination(pagination);
  renderIndicators(pagination);
};

/**
 * Declaration of all Listeners
 */

/**
 * Select the number of products to display
 * @type {[type]}
 */
selectShow.addEventListener('change', event => {
  fetchProducts(currentPagination.currentPage, parseInt(event.target.value))
    .then(setCurrentProducts)
    .then(() => render(currentProducts, currentPagination));
});

document.addEventListener('DOMContentLoaded', () =>
  fetchProducts()
    .then(setCurrentProducts)
    .then(() => render(currentProducts, currentPagination))
);


/////////////////////////////////////////////////////////////////////////////////////////////////////
//feature 0: show more products
selectShow.addEventListener('change', event => { //according to the selector show choosen
 fetchProducts(currentPagination.currentPage, parseInt(event.target.value))
 .then(setCurrentProducts)
 .then(() => render(currentProducts, currentPagination));
});
selectPage.addEventListener('change', event => { //according to the selector show choosen
 fetchProducts(parseInt(event.target.value), currentProducts.length)
 .then(setCurrentProducts)
 .then(() => render(currentProducts, currentPagination));
});
selectBrand.addEventListener('change',event=>{
 sortbrand(currentProducts,event.target.value)
});
document.addEventListener('DOMContentLoaded', () =>
 fetchProducts()
 .then(setCurrentProducts)
 .then(() => render(currentProducts, currentPagination))
);

//feature 1: browse pages 
function renderPagination (pagination) { //ajoute les pages de 1 à 12 dans le selector go to page
 const nbPage=pagination.pageCount; //nombre de page donné par la variable pagination
 const currentPage=pagination.currentPage;
 let options='';
 for(var index=0; index<nbPage; index ++) {
  options += '<option value="'+ (index+1) + '">' + (index+1) + '</option>';
 }

 selectPage.innerHTML=options; //ajout a l'interieur du selectPage du html
 selectPage.selectedIndex=currentPage-1;
}


//feature 2: Filter by brands 
function ListBrands(products) {
 let brandsname= [];
 for (var i=0;i<products.length;i++){
 if(brandsname.includes(products[i]["brand"])==false){
 brandsname.push(products[i]["brand"])
 }
 }
 return brandsname;
}
function renderBrands(brand) {
 let options='';
 for (var i=0;i<brand.length;i++){
 options+='<option value="'+ (brand[i]) + '">' + (brand[i]) + '</option>'
 }
 selectBrand.innerHTML=options;
}
/**
 * Render page selector
 * @param {Object} pagination
 */
const renderIndicators = pagination => { //nombre de produit affiché en fonction du nre de produit à afficher
 const {count} = pagination;
 spanNbProducts.innerHTML = count;
};
const render = (products, pagination) => {
 renderProducts(products);
 renderPagination(pagination);
 renderIndicators(pagination);
 const brand=ListBrands(currentProducts);
 renderBrands(brand);
};
function sortbrand(products,brand){
 const sortedproduct=[];
 for(var i=0; i<products.length;i++){
 if(products[i]["brand"]==brand){
 sortedproduct.push(products[i]);
 }
 }
 renderProducts(sortedproduct);
}


//feature 3: Filter by recently released 

function listDate(product){
  let date=[];
  for (var i=0;i<products.length;i++){
 if(date.includes(products[i]["date"])==false){
  date.push(products[i]["date"]);
  }}
  return date;
}

function sortMarketByDateLess2Weeks(a,b,date){ //a and b represent two products 
  if (a["date"]<date && b["date"]<date){ //les than 2 weeks 
    if (a["date"]<b["date"]){
    return -1;
  }
  if (a["date"]>b["date"]){
    return 1;
  }
  return 0;
  }
  
}

function sortReleased(products,date){
  const recentReleased=products;
  recentReleased.sort(sortMarketByDateLess2Weeks);
  renderProducts(recentReleased);
}

//feature 4: filter by reasonable price 

function listPrice(products){
  let prices=[];
  for (var i=0;i<products.length;i++){
    if (price.includes(products[i]["price"])==false){
      price.push(products[i]["price"]);
    }
  }
  return prices;
}

function sortedBYreasonablePrice(a,b){
  if (a["price"]<50 && b["price"]<50){
    if (a.price<b.price){
    return -1;
  }
  if (a.price>b.price){
    return 1;
  }
  return 0;
  }
  
}

function sortedReasonablePrice(products){
  const final=products;
  final.sort(sortedReasonablePrice);
  renderProducts(final);
}


//feature 5: sort by price 
function sortMarketByPrice(a,b){
  if (a.price<b.price){
    return -1;
  }
  if (a.price>b.price){
    return 1;
  }
  return 0;
}

function renderSortByPrice(products){
  const final=products;
  final.sort(sortMarketByPrice);
  renderProducts(final);
}

//feature 6: sort by date 

function sortMarketByDate(a,b){
  if (a.date<b.date){
    return -1;
  }
  if (a.date>b.date){
    return 1;
  }
  return 0;
}

function renderSortByDate(products){
  const sortedDate=products;
  sortedDate.sort(sortMarketByDate);
  renderProducts(sortedDate);
}
