const products = [
    { id: 1, name: "Laptop", price: 899.99, image: "https://th.bing.com/th/id/R.b0dd389bc010f9b524c10f4e977bc282?rik=2bXFXchqkwhysA&riu=http%3a%2f%2fpluspng.com%2fimg-png%2flaptop-png-laptop-notebook-png-image-image-6746-1153.png&ehk=6byFAarnH09NpQkcILADyXHoQI1AG%2bVFwkFkGcmpSnQ%3d&risl=&pid=ImgRaw&r=0" },
    { id: 2, name: "Smartphone", price: 699.99, image: "https://img-prd-pim.poorvika.com/product/Oppo-reno-10-5g-ice-blue-256gb-8gb-ram-Front-Back-View.png" },
    { id: 3, name: "Headphones", price: 199.99, image: "https://th.bing.com/th/id/R.74379ebc69f670571055fea9e6233123?rik=WdYAIlWqy7nuwQ&riu=http%3a%2f%2fpngimg.com%2fuploads%2fheadphones%2fheadphones_PNG7638.png&ehk=PiuosP72OiRGaettuIxzhQKpVMXIXYMc7wnQPx84DvY%3d&risl=&pid=ImgRaw&r=0" },
    { id: 4, name: "Smartwatch", price: 149.99, image: "https://www.pngmart.com/files/13/Smartwatch-PNG-File.png" },
    { id: 5, name: "Camera", price: 499.99, image: "https://www.bhphotovideo.com/images/images2500x2500/canon_1263c005_eos_80d_dslr_camera_1225876.jpg" },
    { id: 6, name: "TV", price: 999.99, image: "https://media.istockphoto.com/photos/modern-curved-4k-ultrahd-tv-picture-id638043774?k=6&m=638043774&s=612x612&w=0&h=UKrBA-Q2K1WAzA4usQnQjK-3j4p38n25p8qggXH-9Sw=" },
    { id: 7, name: "Keyboard", price: 79.99, image: "https://th.bing.com/th/id/OIP.7noe3TeKYAKapu2YJZsj_wHaE6?rs=1&pid=ImgDetMain" },
    { id: 8, name: "Mouse", price: 49.99, image: "https://th.bing.com/th/id/R.e6e420d39db4e2c0c9398ad28cf54e77?rik=TMbB9F%2bnjrxqRA&riu=http%3a%2f%2fopenclipart.org%2fimage%2f2400px%2fsvg_to_png%2f170945%2f1340891010.png&ehk=I%2bmkvhOPaq6uhfma3RSuw65wSqcrQDcfwmjtfxlC97M%3d&risl=&pid=ImgRaw&r=0" },
    { id: 9, name: "Tablet", price: 299.99, image: "https://th.bing.com/th/id/OIP.lwd8fiMovqgF9OKMlOZ11wHaJ0?rs=1&pid=ImgDetMain" },
    { id: 10, name: "Speaker", price: 129.99, image: "https://th.bing.com/th/id/OIP.5qgdKVFXPEH5Rt-epcJ_eAHaGd?rs=1&pid=ImgDetMain" },
    { id: 11, name: "Drone", price: 799.99, image: "https://www.bhphotovideo.com/images/images1500x1500/dji_cp_ma_00000610_01_mini_3_rc_n1_remote_1735197.jpg" },
    { id: 12, name: "Gaming Controller", price: 399.99, image: "https://th.bing.com/th/id/OIP.xDp3uql2pDB8bWFMNuC0fwHaHa?rs=1&pid=ImgDetMain" }
  ];
  
  let cart = [];
  
  function displayProducts(productsToDisplay) {
    const productContainer = document.getElementById("products");
    productContainer.innerHTML = '';
  
    productsToDisplay.forEach(product => {
      const div = document.createElement("div");
      div.className = "product";
      div.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>$${product.price.toFixed(2)}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      `;
      productContainer.appendChild(div);
    });
  }
  
  function addToCart(productId) {
    const item = products.find(p => p.id === productId);
    cart.push(item);
    updateCart();
  }
  
  function updateCart() {
    const cartItems = document.getElementById("cart-items");
    const cartCount = document.getElementById("cart-count");
    const total = document.getElementById("total");
  
    cartItems.innerHTML = "";
    let sum = 0;
  
    cart.forEach(item => {
      sum += item.price;
      const li = document.createElement("li");
      li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
      cartItems.appendChild(li);
    });
  
    cartCount.textContent = cart.length;
    total.textContent = sum.toFixed(2);
  }
  
  function toggleCart() {
    const cartSection = document.getElementById("cart");
    cartSection.classList.toggle("hidden");
  }
  
  window.onload = function () {
    displayProducts(products);
  };
  