const categories = document.querySelectorAll(".desktop-item");
categories.forEach((el)=>{
  el.addEventListener("click", ()=>{
    window.location.href = "products.html";
  })
})