// let userName = document.getElementById("username");
// let password = document.getElementById("password");
// let loginBtn = document.getElementById("loginButton");

// loginBtn.addEventListener("click", () => {
//   let userValue = userName.value;
//   let parolValue = password.value;

//   if (userValue === "fanzeeadmin" && parolValue === "ROOT VZ") {
//     window.location.href = "admin/admin.html";
//   } else {
//     alert("Parol yoki login xato");
//   }
// });

let addProductBtn = document.getElementById("addProductBtn");

addProductBtn.addEventListener("click", async (event) => {
  event.preventDefault();

  let image = document.getElementById("imageUrl").value;
  let title = document.getElementById("productName").value;
  let description = document.getElementById("productDescription").value;
  let productPrice = document.getElementById("productPrice").value;
  let oldPrice = document.getElementById("oldPrice").value;

  let malumotOb = {
    image,
    title,
    description,
    price: parseFloat(productPrice),
    oldPrice: oldPrice ? parseFloat(oldPrice) : null,
  };

  try {
    let response = await fetch("https://uzum-server-1.onrender.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(malumotOb),
    });

    if (response.ok) {
      let responseData = await response.json();
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
