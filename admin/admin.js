document.addEventListener("DOMContentLoaded", () => {
  const addProductBtn = document.getElementById("addProductBtn");

  addProductBtn.addEventListener("click", async (event) => {
    event.preventDefault();

    const image = document.getElementById("imageUrl").value;
    const title = document.getElementById("productName").value;
    const description = document.getElementById("productDescription").value;
    const productPrice = document.getElementById("productPrice").value;
    const rate = document.getElementById("oldPrice").value;

    const malumotOb = {
      image,
      title,
      description,
      price: parseFloat(productPrice),
      rate: rate ? parseFloat(oldPrice) : null,
    };

    try {
      const response = await fetch("https://your-api-endpoint.com/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(malumotOb),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log("Mahsulot muvaffaqiyatli qo'shildi:", responseData);
        alert("Mahsulot muvaffaqiyatli qo'shildi!");

        document.getElementById("imageUrl").value = "";
        document.getElementById("productName").value = "";
        document.getElementById("productDescription").value = "";
        document.getElementById("productPrice").value = "";
        document.getElementById("oldPrice").value = "";
      } else {
        console.error("Xato:", response.statusText);
        alert("Mahsulot qo'shishda xato yuz berdi.");
      }
    } catch (error) {
      console.error("Tarmoq xatosi:", error);
      alert("Tarmoq xatosi yuz berdi.");
    }
  });
});
