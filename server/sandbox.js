/* eslint-disable no-console, no-process-exit */
const { default: axios } = require('axios');
const dedicatedbrand = require('./sources/dedicatedbrand');





async function sandbox (eshop = 'https://www.dedicatedbrand.com/en/') {
  try {

    const response = await axios(eshop);
    const {data,status} = response;
    const $ =cheerio.load(data);

    const subcategory = $('.mainNavigation-link-subMenu-link.mainNavigation-linksubMenu-link--image').map((i,element) => {
      link='https://www.dedicatedbrand.com' + $(element).find('a').attr('href');
      console.log(`🕵️‍♀️  browsing ${eshop} source`);
      const products = dedicatedbrand.scrape(link);
    });
    
    console.log(`🕵️‍♀️  browsing ${eshop} source`);
    const products = dedicatedbrand.scrape(eshop);
    console.log(products);
    console.log('done');
    process.exit(0);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

const [,, eshop] = process.argv;

sandbox(eshop);
