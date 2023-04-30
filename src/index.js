import "./styles/normalize.css";
import "./styles/index.css";
import {
  getAllProducts,
  getProductById,
  addNewProduct,
  deleteProduct,
} from "./requests/products";
import {
  createProductsMarkup,
  createProductCard,
} from "./services/markupService";
import refs from "./refs";

// task 1
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
// renderProducts();

// task 2

refs.singleProductForm.addEventListener("submit", onFormSubmit);

async function onFormSubmit(e) {
  try {
    e.preventDefault();
    const id = e.currentTarget.elements.id.value.trim();
    const resp = await getProductById(id);

    refs.singleProduct.innerHTML = createProductCard(resp);
  } catch (error) {
    console.log(error);
  }
}

// task3

refs.newFormCreateProduct.addEventListener("submit", onCreateProductFormSubmit);

async function onCreateProductFormSubmit(evt) {
  try {
    evt.preventDefault();

    const newProduct = {};

    new FormData(evt.currentTarget).forEach((elem, idx) => {
      newProduct[idx] = elem;
    });

    const newResponse = await addNewProduct(newProduct);
    refs.newProduct.innerHTML = createProductCard(newResponse);
  } catch (error) {
    console.log(error);
  }
}

// task 4

refs.deletionProductForm.addEventListener("submit", onDeleteProductSubmit);

async function onDeleteProductSubmit(e) {
  try {
    e.preventDefault();
    const id = e.currentTarget.elements.deletionId.value.trim();

    const resp = await deleteProduct(id);

    // if (resp.status === 200) {
    //   alert(`SUCCESS! ${resp.data.title}`);
    // }

    if (resp) {
      alert(`SUCCESS! ${resp.data.title}`);
    }
  } catch (error) {
    alert(`ERROR: ${error}`);
  }
}
