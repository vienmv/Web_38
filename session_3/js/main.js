window.onload = init


function add(ths, sno) {
  for (var i = 1; i <= 5; i++) {
    var cur = document.getElementById("star" + i)
    cur.className = "far fa-star"
  }
  for (var i = 1; i <= sno; i++) {
    var cur = document.getElementById("star" + i)
    if (cur.className == "far fa-star") {
      cur.className = "fas fa-star"
    }
  }
}

async function init() {


  // let url = 'http://10.1.9.1:9000/data-product'
  let url = 'https://5ebd45b2ec34e900161920da.mockapi.io/api/v1/data-products?fbclid=IwAR2IZb9rBUB-H3nXwNSx8PS7GpgRSjSA4gOm5o5vKn2E4T1Od_MdmmveK2U'
  let res = await fetch(url)
  let products = await res.json()
  console.log(JSON.stringify(products, null, 2))
  
  let listProduct = document.querySelector('#list-product')

  initSlider(products)
  for (let product of products) {
    let { title, description, price, imageLink } = product
    let html = `
    <div
      class="col-4 product-item"
      data-toggle="tooltip"
      title="${description}">
      <div class="product-image">
        <img src="./img/${imageLink}" alt="Ảnh sản phẩm">
      </div>
      <div class="display-4 pb-3">${title}</div>
      <h4 class="price">Price: <span>${price} VND</span></h4>
      <button type="button" class="btn btn-success">Add to cart</button>
      <button type="button" class="btn btn-primary">Buy</button>
    </div>
    `

    listProduct.innerHTML += html
  }
}