window.onload = init

let productsMock = [
  {
    "id": 1,
    "title": "Xà phòng",
    "price": 12000,
    "description": "Xà phòng nhập khẩu Trung Quốc",
    "imageLink": "xa-phong.jpg"
  },
  {
    "id": 2,
    "title": "Xà phòng",
    "price": 12000,
    "description": "Xà phòng nhập khẩu Trung Quốc",
    "imageLink": "xa-phong.jpg"
  },
  {
    "id": 3,
    "title": "Xà phòng",
    "price": 12000,
    "description": "Xà phòng nhập khẩu Trung Quốc",
    "imageLink": "xa-phong.jpg"
  },
  {
    "id": 4,
    "title": "Xà phòng",
    "price": 12000,
    "description": "Xà phòng nhập khẩu Trung Quốc",
    "imageLink": "xa-phong.jpg"
  },
  {
    "id": 5,
    "title": "Xà phòng",
    "price": 12000,
    "description": "Xà phòng nhập khẩu Trung Quốc",
    "imageLink": "xa-phong.jpg"
  }
]
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

  // let response = await fetch(url)
  // let products = await response.json()

  // console.log(JSON.stringify(products, null, 2))

  // get all products from server
  // replace by mock data when develop
  let products = productsMock
  let listProduct = document.querySelector('#list-product')

  for(let product of products) {
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