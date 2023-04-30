export function createProductsMarkup(data) {
  return data
    .map(
      ({ title, description, price }) => ` 
         <li>
  <h2>${title}</h2>
  <p>${description}</p>
  <p>${price}</p>
</li>
`
    )
    .join("");
}

export function createProductCard({ title, description, price }) {
  return ` 
  <h2>${title}</h2>
  <p>${description}</p>
  <p>${price}</p>`;
}
