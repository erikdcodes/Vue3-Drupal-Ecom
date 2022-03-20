export const getSingleProduct = async (id) => {
  // test api on builder.io
  // const api = `https://cdn.builder.io/api/v2/content/product?apiKey=e49ffd6f318c4900b2836c4a3de91291&includeRefs=true&query.id=${id}`;
  // const res = await fetch(api);
  // const data = await res.json();
  // const product = data.results[0];

  // return product;

  //DRUPAL API
  const api = `https://dev-audiophile-api.pantheonsite.io/api/products/single?uuid=${id}`;
  const res = await fetch(api);
  const data = await res.json();

  return data;
};
