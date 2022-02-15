import fetch from "node-fetch";

const STORE_KEY = "6153077";
const LIMIT = 5;

const getShop = () => {
  const completeShopData = {
    listings: [],
  };
  fetch(
    `https://openapi.etsy.com/v2/shops/${STORE_KEY}?api_key=uiiyfqr2kd5qyxo5wq92qtqt`
  )
    .then((response) => response.json())
    .then(({ results }) => {
      const shop = {
        shopId: results[0].shop_id,
        shopName: results[0].shop_name,
      };
      completeShopData.shopData = shop;
    })
    .then(
      fetch(
        `https://openapi.etsy.com/v2/shops/${STORE_KEY}/listings/active?api_key=uiiyfqr2kd5qyxo5wq92qtqt&limit=${LIMIT}`
      )
        .then((response) => response.json())
        .then(({ results }) => {
          for (let i = 0; i < results.length; i++) {
            const result = results[i];
            const listing = {
              listingId: result.listing_id,
              title: result.title,
              description: result.description,
              price: result.price,
              tags: result.tags,
              materials: result.materials,
              numFavorers: result.num_favorers,
            };
            completeShopData.listings.push(listing);
          }
        })
        .then(async () => {
          for (let i = 0; i < completeShopData.listings.length; i++) {
            let listingId = completeShopData.listings[i].listingId;
            await fetch(
              `https://openapi.etsy.com/v2/listings/${listingId}/images?api_key=uiiyfqr2kd5qyxo5wq92qtqt`
            )
              .then((response) => response.json())
              .then(({ results }) => {
                const images = [];
                for (let i = 0; i < results.length; i++) {
                  const imageData = {
                    url_75x75: results[i].url_75x75,
                    url_170x135: results[i].url_170x135,
                    url_570xN: results[i].url_570xN,
                    url_fullxfull: results[i].url_fullxfull,
                    full_height: results[i].full_height,
                    full_width: results[i].full_width,
                  };
                  images.push(imageData);
                }
                completeShopData.listings[i].images = images;
              });
          }
        })
        .then(() => console.log(completeShopData.listings))
    );
};

getShop();
