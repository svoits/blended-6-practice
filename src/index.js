import "./styles/normalize.css";
import "./styles/index.css";
import { getAllProducts } from "./requests/products";
import { createProductsMarkup } from "./services/markupService";
import refs from "./refs";

async function renderProducts() {
  try {
    const data = await getAllProducts();

    refs.allProductsList.insertAdjacentHTML(
      "beforeend",
      createProductsMarkup(data)
    );
  } catch (err) {
    console.log(err);
  }
}
renderProducts();
