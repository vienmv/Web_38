let length = 0
let currentIndex = 0

function initSlider(products) {
    //gen html
    initSliderHtml(products)
    initSliderEvent()

}
function initSliderHtml(products) {
    console.log('products', products)
    let sliderItemsContainer =$(".slider-items")
    sliderItemsContainer.html('')
    for(let product of products){
        let {title, imageLink, price, description} = product
        let html= `
        <div class="slider-item">
        <!-- image + name + price + description -->
        <div class="product-image">
          <img src="./img/${imageLink}" alt="Ảnh sản phẩm">
        </div>
        <div class="product-info">
          <h3 class="product-title">${title}</h3>
          <div class="star-rating">
            <i class="fas fa-star" id="star1" onclick="add(this,1)"></i>
            <i class="fas fa-star" id="star2" onclick="add(this,2)"></i>
            <i class="fas fa-star" id="star3" onclick="add(this,3)"></i>
            <i class="far fa-star" id="star4" onclick="add(this,4)"></i>
            <i class="far fa-star" id="star5" onclick="add(this,5)"></i>
          </div>
          <span class="review-no">41 reviews</span>
          <h4 class="price">Price: <span>12.000 VND</span></h4>
          <div class="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce gravida, neque vel
            iaculis tincidunt, mauris sapien consequat lorem, quis sodales massa ipsum ac magna. Nunc ut tellus sed
            sapien dapibus sagittis non vitae nibh. Ut convallis eleifend eros eu lobortis. Donec non nunc mi. Nullam
            eleifend maximus lorem, a tempor felis. Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Curabitur non mi bibendum, pulvinar neque id, ullamcorper elit. Praesent eleifend
            leo eget lacus venenatis, eget lacinia massa bibendum. In at tellus vitae tellus lacinia ullamcorper ac at
            dui.</div>
        </div>
      </div>
        `
        sliderItemsContainer.append(html)
    }
}

function initSliderEvent() {
    let sliderItems = $(".slider-item")
    let btnNext = $(".slider-next-btn");
    let btnPriv = $(".slider-priv-btn")

    length = sliderItems.length
    currentIndex = 0
    showCurrentSlider(sliderItems, currentIndex)
    btnNext.unbind()
    btnNext.click(function () {
        currentIndex++
        if (currentIndex >= length) {
            currentIndex = 0
        }
        showCurrentSlider(sliderItems, currentIndex)
    })
    btnPriv.unbind()
    btnPriv.click(function () {
        currentIndex--
        if (currentIndex < 0) {
            currentIndex = length - 1
        }
        showCurrentSlider(sliderItems, currentIndex)
    })

    setInterval(function () {
        currentIndex++
        if (currentIndex >= length) {
            currentIndex = 0
        }
        showCurrentSlider(sliderItems, currentIndex)
    }, 1000)
}

function showCurrentSlider(sliderItems, currentIndex) {
    for (let i = 0; i < length; i++) {
        if (i == currentIndex) {
            $(sliderItems[i]).show()
        } else {
            $(sliderItems[i]).hide()
        }
    }

}

{/* <div class="slider-item">
        <!-- image + name + price + description -->
        <div class="product-image">
          <img src="./img/xa-phong.jpg" alt="Ảnh sản phẩm">
        </div>
        <div class="product-info">
          <h3 class="product-title">Xà Phòng Giặt 1</h3>
          <div class="star-rating">
            <i class="fas fa-star" id="star1" onclick="add(this,1)"></i>
            <i class="fas fa-star" id="star2" onclick="add(this,2)"></i>
            <i class="fas fa-star" id="star3" onclick="add(this,3)"></i>
            <i class="far fa-star" id="star4" onclick="add(this,4)"></i>
            <i class="far fa-star" id="star5" onclick="add(this,5)"></i>
          </div>
          <span class="review-no">41 reviews</span>
          <h4 class="price">Price: <span>12.000 VND</span></h4>
          <div class="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce gravida, neque vel
            iaculis tincidunt, mauris sapien consequat lorem, quis sodales massa ipsum ac magna. Nunc ut tellus sed
            sapien dapibus sagittis non vitae nibh. Ut convallis eleifend eros eu lobortis. Donec non nunc mi. Nullam
            eleifend maximus lorem, a tempor felis. Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Curabitur non mi bibendum, pulvinar neque id, ullamcorper elit. Praesent eleifend
            leo eget lacus venenatis, eget lacinia massa bibendum. In at tellus vitae tellus lacinia ullamcorper ac at
            dui.</div>
        </div>
      </div> */}