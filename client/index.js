// Invoking strict mode https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode#invoking_strict_mode
'use strict';

console.log('🚀 This is it.');

const MY_FAVORITE_BRANDS = [{
  'name': 'Hopaal',
  'url': 'https://hopaal.com/'
}, {
  'name': 'Loom',
  'url': 'https://www.loom.fr'
}, {
  'name': 'ADRESSE',
  'url': 'https://adresse.paris/'
}]

console.table(MY_FAVORITE_BRANDS);
console.log(MY_FAVORITE_BRANDS[0]);





/**
 * 🌱
 * Let's go with a very very simple first todo
 * Keep pushing
 * 🌱
 */

// 🎯 TODO: The cheapest t-shirt
// 0. I have 3 favorite brands stored in MY_FAVORITE_BRANDS variable
// 1. Create a new variable and assign it the link of the cheapest t-shirt
// I can find on these e-shops
// 2. Log the variable

const cheapestShirt = 'https://www.loom.fr/products/le-t-shirt'
console.log(cheapestShirt);



/**
 * 👕
 * Easy 😁?
 * Now we manipulate the variable `marketplace`
 * `marketplace` is a list of products from several brands e-shops
 * The variable is loaded by the file data.js
 * 👕
 */

console.log(marketplace);

// 🎯 TODO: Number of products
// 1. Create a variable and assign it the number of products
// 2. Log the variable

const nbProduct=marketplace.length;
console.log(nbProduct);


// 🎯 TODO: Brands name
// 1. Create a variable and assign it the list of brands name only
// 2. Log the variable
// 3. Log how many brands we have

let listBrands=[];
marketplace.forEach(function(product){
  if(listBrands.includes(product.brand)==false){
    listBrands.push(product.brand);
  }
});

console.log(listBrands);
console.log("The number of brands of " + listBrands.length);

//ou const brandlist=marketplace.map(function(product){return product.brand})
//console.log(brandlist)

// 🎯 TODO: Sort by price
// 1. Create a function to sort the marketplace products by price
// 2. Create a variable and assign it the list of products by price from lowest to highest
// 3. Log the variable

function sortMarketByPrice(a,b){
  if (a.price<b.price){
    return -1;
  }
  if (a.price>b.price){
    return 1;
  }
  return 0;
}

const sortedPrice=marketplace;
sortedPrice.sort(sortMarketByPrice);

console.log("Sorted by price", sortedPrice);
console.log(sortedPrice[0]);

// 🎯 TODO: Sort by date
// 1. Create a function to sort the marketplace objects by products date
// 2. Create a variable and assign it the list of products by date from recent to old
// 3. Log the variable

function sortMarketByDate(a,b){
  if (a.date<b.date){
    return -1;
  }
  if (a.date>b.date){
    return 1;
  }
  return 0;
}

const sortedDate=marketplace;
sortedDate.sort(sortMarketByDate);

console.log("Sorted by date", sortedDate);
console.log(sortedDate[0]);

// 🎯 TODO: Filter a specific price range
// 1. Filter the list of products between 50€ and 100€
// 2. Log the list

const newListe=[];

marketplace.forEach(function(product){
  if (product.price>=50 && product.price<=100){
    newListe.push(product);
  }
});

console.log(newListe);


// 🎯 TODO: Average Basket
// 1. Determine the average basket of the marketplace
// 2. Log the average

function average(liste){
  let sum=0;
  let cpt=0;
  liste.forEach(function(product){
    sum=sum+product.price;
    cpt=cpt+1;

  })

  return sum/cpt;
}

const averagePrice=average(marketplace);
console.log(averagePrice);



/**
 * 🏎
 * We are almost done with the `marketplace` variable
 * Keep pushing
 * 🏎
 */

// 🎯 TODO: Products by brands
// 1. Create an object called `brands` to manipulate products by brand name
// The key is the brand name
// The value is the array of products
//
// Example:
// const brands = {
//   'brand-name-1': [{...}, {...}, ..., {...}],
//   'brand-name-2': [{...}, {...}, ..., {...}],
//   ....
//   'brand-name-n': [{...}, {...}, ..., {...}],
// };

const brands =new Map();  //dictionnary
//we use the liste listBrands created before 
listBrands.forEach(function(element){
  let list=[]
  marketplace.forEach(function(products){
    if (products.brand==element){
      list.push(products);
    }
  })
  brands.set(element,list);
})


//
// 2. Log the variable

console.log(brands);

// 3. Log the number of products by brands

for (const[key,value] of brands){
  let sum=0;
  value.forEach(function(elements){
    sum=sum+1;
  })
  console.log("The brand",key,"has",sum,"products");
}



// 🎯 TODO: Sort by price for each brand
// 1. For each brand, sort the products by price, from highest to lowest
// 2. Log the sort

//we can use the function created to sort a list thanks to the prices 

function sortMarketByPriceDesc(a,b){
  if (a.price>b.price){
    return -1;
  }
  if (a.price<b.price){
    return 1;
  }
  return 0;
}

const sortedPriceDic=brands;

for (const[key,value] of sortedPriceDic){
  value.sort(sortMarketByPriceDesc);
}

console.log(sortedPriceDic);

// 🎯 TODO: Sort by date for each brand
// 1. For each brand, sort the products by date, from old to recent
// 2. Log the sort

function sortMarketByDateDesc(a,b){
  if (a.date>b.date){
    return -1;
  }
  if (a.date<b.date){
    return 1;
  }
  return 0;
}

const sortedDateDic=brands;
for (const[key,value] of brands){
  value.sort(sortMarketByDateDesc);
}

console.log(sortedDateDic);


/**
 * 💶
 * Let's talk about money now
 * Do some Maths
 * 💶
 */

// 🎯 TODO: Compute the p90 price value
// 1. Compute the p90 price value of each brand
// The p90 value (90th percentile) is the lower value expected to be exceeded in 90% of the products





/**
 * 🧥
 * Cool for your effort.
 * It's almost done
 * Now we manipulate the variable `COTELE_PARIS`
 * `COTELE_PARIS` is a list of products from https://coteleparis.com/collections/tous-les-produits-cotele
 * 🧥
 */

const COTELE_PARIS = [
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-baseball-cap-gris',
    price: 45,
    name: 'BASEBALL CAP - TAUPE',
    uuid: 'af07d5a4-778d-56ad-b3f5-7001bf7f2b7d',
    released: '2021-01-11'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-chemise-milleraie-navy',
    price: 85,
    name: 'CHEMISE MILLERAIE MIXTE - NAVY',
    uuid: 'd62e3055-1eb2-5c09-b865-9d0438bcf075',
    released: '2020-12-21'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-veste-fuchsia',
    price: 110,
    name: 'VESTE - FUCHSIA',
    uuid: 'da3858a2-95e3-53da-b92c-7f3d535a753d',
    released: '2020-11-17'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-baseball-cap-camel',
    price: 45,
    name: 'BASEBALL CAP - CAMEL',
    uuid: 'b56c6d88-749a-5b4c-b571-e5b5c6483131',
    released: '2020-10-19'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-chemise-milleraie-beige',
    price: 85,
    name: 'CHEMISE MILLERAIE MIXTE - BEIGE',
    uuid: 'f64727eb-215e-5229-b3f9-063b5354700d',
    released: '2021-01-11'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-veste-rouge-vermeil',
    price: 110,
    name: 'VESTE - ROUGE VERMEIL',
    uuid: '4370637a-9e34-5d0f-9631-04d54a838a6e',
    released: '2020-12-21'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-chemise-milleraie-bordeaux',
    price: 85,
    name: 'CHEMISE MILLERAIE MIXTE - BORDEAUX',
    uuid: '93d80d82-3fc3-55dd-a7ef-09a32053e36c',
    released: '2020-12-21'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/le-bob-dylan-gris',
    price: 45,
    name: 'BOB DYLAN - TAUPE',
    uuid: 'f48810f1-a822-5ee3-b41a-be15e9a97e3f',
    released: '2020-12-21'
  }
]

// 🎯 TODO: New released products
// // 1. Log if we have new products only (true or false)
// // A new product is a product `released` less than 2 weeks.

var newProducts= true;

COTELE_PARIS.forEach(function(product){
  if(product.released<'2020-12-28'){
    newProducts=false;
  }
})

console.log(newProducts);

// 🎯 TODO: Reasonable price
// // 1. Log if coteleparis is a reasonable price shop (true or false)
// // A reasonable price if all the products are less than 100€

var reasonnable= true; 

COTELE_PARIS.forEach(function(product){
  if (product.price>100){
    reasonnable=false;
  }
})

console.log(reasonnable);

// 🎯 TODO: Find a specific product
// 1. Find the product with the uuid `b56c6d88-749a-5b4c-b571-e5b5c6483131`
// 2. Log the product
var linkProduct='';

COTELE_PARIS.forEach(function(product){
  if (product.uuid=='b56c6d88-749a-5b4c-b571-e5b5c6483131'){
    linkProduct=product.link;
  }
})

console.log(linkProduct);

// 🎯 TODO: Delete a specific product
// 1. Delete the product with the uuid `b56c6d88-749a-5b4c-b571-e5b5c6483131`
// 2. Log the new list of product

COTELE_PARIS.forEach(function(product){
  if (product.uuid='b56c6d88-749a-5b4c-b571-e5b5c6483131'){
    delete COTELE_PARIS[product];
  }
})

console.log(COTELE_PARIS);

// 🎯 TODO: Save the favorite product
let blueJacket = {
  'link': 'https://coteleparis.com/collections/tous-les-produits-cotele/products/la-veste-bleu-roi',
  'price': 110,
  'uuid': 'b4b05398-fee0-4b31-90fe-a794d2ccfaaa'
};

// we make a copy of blueJacket to jacket
// and set a new property `favorite` to true
let jacket = blueJacket;
jacket.favorite = true;

// 1. Log `blueJacket` and `jacket` variables
// 2. What do you notice?

blueJacket = {
  'link': 'https://coteleparis.com/collections/tous-les-produits-cotele/products/la-veste-bleu-roi',
  'price': 110,
  'uuid': 'b4b05398-fee0-4b31-90fe-a794d2ccfaaa'
};

console.log(blueJacket);
console.log(jacket);

//blueJacket: {link: "https://coteleparis.com/collections/tous-les-produits-cotele/products/la-veste-bleu-roi", price: 110, uuid: "b4b05398-fee0-4b31-90fe-a794d2ccfaaa"}
//jacket: {link: "https://coteleparis.com/collections/tous-les-produits-cotele/products/la-veste-bleu-roi", price: 110, uuid: "b4b05398-fee0-4b31-90fe-a794d2ccfaaa", favorite: true}

// 3. Update `jacket` property with `favorite` to true WITHOUT changing blueJacket properties

//the property is already changed only for Jacket 



/**
 * 🎬
 * The End
 * 🎬
 */

// 🎯 TODO: Save in localStorage
// 1. Save MY_FAVORITE_BRANDS in the localStorage
// 2. log the localStorage
