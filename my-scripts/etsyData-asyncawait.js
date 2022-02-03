// import fetch from "node-fetch";

// const STORE_KEY = "6153077";
// const LIMIT = 5;

// const completeShopData = {
//   shop: null,
//   listings: null,
// };

// const getShop = async () => {
//   try {
//     const response = await fetch(
//       `https://openapi.etsy.com/v2/shops/${STORE_KEY}?api_key=uiiyfqr2kd5qyxo5wq92qtqt`
//     );
//     const data = await response.json();

//     const shop = {
//       shopId: data.results[0].shop_id,
//       shopName: data.results[0].shop_name,
//     };
//     completeShopData.shop = shop;
//   } catch (error) {
//     console.log(error);
//   }
// };

// const getActiveListings = async () => {
//   try {
//     const response = await fetch(
//       `https://openapi.etsy.com/v2/shops/${STORE_KEY}/listings/active?api_key=uiiyfqr2kd5qyxo5wq92qtqt&limit=${LIMIT}`
//     );
//     const data = await response.json();
//     const listings = [];
//     for (let i = 0; i < data.results.length; i++) {
//       const result = data.results[i];
//       const listing = {
//         listingId: result.listing_id,
//         title: result.title,
//         description: result.description,
//         price: result.price,
//         tags: result.tags,
//         materials: result.materials,
//         numFavorers: result.num_favorers,
//       };
//       listings.push(listing);
//     }
//     completeShopData.listings = listings;
//   } catch (error) {
//     console.log("HERE IS THE ERROR", error);
//   }
// };
// const getListingImages = async () => {
//   try {
//     for (let i = 0; i < completeShopData.listings.length; i++) {
//       let listingId = completeShopData.listings[i].listingId;
//       const response = await fetch(
//         `https://openapi.etsy.com/v2/listings/${listingId}/images?api_key=uiiyfqr2kd5qyxo5wq92qtqtZ`
//       );
//       const data = await response.json();
//       const images = [];
//       for (let i = 0; i < data.results.length; i++) {
//         const imageData = {
//           url_75x75: data.results[i].url_75x75,
//           url_170x135: data.results[i].url_170x135,
//           url_570xN: data.results[i].url_570xN,
//           url_fullxfull: data.results[i].url_fullxfull,
//           full_height: data.results[i].full_height,
//           full_width: data.results[i].full_width,
//         };
//         images.push(imageData);
//       }
//       completeShopData.listings[i].images = images;
//     }
//   } catch (error) {
//     console.log("-------> HERE IS THE ERROR", error);
//     throw error;
//   }
// };

// const getAllShopData = async () => {
//   await getShop();
//   await getActiveListings();
//   await getListingImages();
//   console.log(completeShopData);
//   return completeShopData;
// };

// getAllShopData();

import fetch from "node-fetch";

const STORE_KEY = "6153077";
const LIMIT = 5;

const completeShopData = {
  shop: null,
  listings: null,
};

const getShop = async () => {
  const response = await fetch(
    `https://openapi.etsy.com/v2/shops/${STORE_KEY}?api_key=uiiyfqr2kd5qyxo5wq92qtqt`
  );
  const data = await response.json();

  const shop = {
    shopId: data.results[0].shop_id,
    shopName: data.results[0].shop_name,
  };
  completeShopData.shop = shop;
};

const getActiveListings = async () => {
  const response = await fetch(
    `https://openapi.etsy.com/v2/shops/${STORE_KEY}/listings/active?api_key=uiiyfqr2kd5qyxo5wq92qtqt&limit=${LIMIT}`
  );
  const data = await response.json();
  const listings = [];
  for (let i = 0; i < data.results.length; i++) {
    const result = data.results[i];
    const listing = {
      listingId: result.listing_id,
      title: result.title,
      description: result.description,
      price: result.price,
      tags: result.tags,
      materials: result.materials,
      numFavorers: result.num_favorers,
    };
    listings.push(listing);
  }
  completeShopData.listings = listings;
};
const getListingImages = async () => {
  for (let i = 0; i < completeShopData.listings.length; i++) {
    let listingId = completeShopData.listings[i].listingId;
    const response = await fetch(
      `https://openapi.etsy.com/v2/listings/${listingId}/images?api_key=uiiyfqr2kd5qyxo5wq92qtqt`
    );
    const data = await response.json();
    const images = [];
    for (let i = 0; i < data.results.length; i++) {
      const imageData = {
        url_75x75: data.results[i].url_75x75,
        url_170x135: data.results[i].url_170x135,
        url_570xN: data.results[i].url_570xN,
        url_fullxfull: data.results[i].url_fullxfull,
        full_height: data.results[i].full_height,
        full_width: data.results[i].full_width,
      };
      images.push(imageData);
    }
    completeShopData.listings[i].images = images;
  }
};

const getAllShopData = async () => {
  try {
    await getShop();
    await getActiveListings();
    await getListingImages();
    console.log(completeShopData);
  } catch (error) {
    console.error(error);
  }

  return completeShopData;
};

getAllShopData();
