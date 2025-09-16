document.addEventListener("DOMContentLoaded", () => {
  const cartItems = document.getElementById("cart-items");
  const message = document.getElementById("cart-message");

  const buttons = document.querySelectorAll(".add-to-cart-btn");

  buttons.forEach(button => {
    button.addEventListener("click", (e) => {
      const card = e.target.closest(".product-card");
      const nameElem = card.querySelector(".product-name");
      const priceElem = card.querySelector(".price");

      if (!nameElem || !priceElem) {
        console.error("No se encontró nombre o precio en la tarjeta del producto");
        return;
      }

      const name = nameElem.textContent.trim();
      const price = priceElem.textContent.trim();

      const item = document.createElement("li");
      item.textContent = `${name} - ${price}`;
      cartItems.appendChild(item);

      message.textContent = "¡Gracias por su compra!";
      message.classList.add("show");

      setTimeout(() => {
        message.classList.remove("show");
      }, 3000);
    });
  });
});

