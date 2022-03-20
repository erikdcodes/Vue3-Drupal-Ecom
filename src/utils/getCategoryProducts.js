export const getCategoryProducts = async (categoryArg) => {
  // test api on builder.io
  // const api = `https://cdn.builder.io/api/v2/content/product?apiKey=e49ffd6f318c4900b2836c4a3de91291&includeRefs=true`;
  // const res = await fetch(api);
  // const data = await res.json();

  // const filteredProducts = data.results.filter((item) => {
  //   return (
  //     item.data.relatedCategory.value.data.title.toLowerCase() ===
  //     categoryArg.toLowerCase()
  //   );
  // });

  //drupal API
  const api = `https://dev-audiophile-api.pantheonsite.io/api/products`;
  const res = await fetch(api);
  const data = await res.json();

  const filteredProducts = data.filter((item) => {
    return (
      item.field_category[0].value.toLowerCase() === categoryArg.toLowerCase()
    );
  });
  console.log(filteredProducts);
  return filteredProducts;
};
