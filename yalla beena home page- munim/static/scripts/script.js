const productContainer = document.getElementById('productContainer');

productData.forEach(data => {
    const prodDiv = document.createElement('div');
    prodDiv.classList.add('col-xl-2', 'col-lg-3', 'col-md-3', 'col-sm-5', 'col-6', 'text-center', 'rounded-4', 'p-4', 'bg-white', 'my-2');

    prodDiv.innerHTML = `
    <img src="${data.ProdImg}" alt="" class="img-fluid mb-2">
    <p class="mb-1 hClr1 fw-medium">${data.ProdName}</p>
    <p class="mb-0 pClr1 fs12">${data.NumofProduct}</p>`;

    productContainer.appendChild(prodDiv);
});

// row 1 
const rowContainer = document.getElementById('row1');
newOffers.forEach(offer => {
    const offerDiv = document.createElement('div');
    offerDiv.classList.add('col-xl-4', 'col-lg-5', 'col-md-5', 'col-sm-7', 'col-12', 'py-3');

    offerDiv.innerHTML = `
        <div class="clr1 list-card-top d-flex align-items-start justify-content-start gap-2 text-center position-relative mb-7 p-3"
        style="background-color: ${offer.bgColor};">
            <p class="ms-2 pt-1">The Remaining time:</p>
            <div class="mb-0">
                <p class="mb-1 blurBlackBg">${offer.timeLeft.split(',')[2]}</p>
                <p class="mb-0 fs-12 fw-semibold">Minute</p>
            </div>

            <div class="mb-0">
                <p class="mb-0 mb-1 blurBlackBg">${offer.timeLeft.split(',')[1]}</p>
                <p class="mb-0 fs-12 fw-semibold">Hour</p>
            </div>
            <div class="mb-0">
                <p class="mb-0 mb-1 blurBlackBg">${offer.timeLeft.split(',')[0]}</p>
                <p class="mb-0 fs-12 fw-semibold">Day</p>
            </div>
            <img src="${offer.prodImg}" class="img-fluid list-card-img position-absolute" alt="">
        </div>

        <div class = "bg-white px-3 mb-4">
        <h3 class="pt-2 fs-5 fw-semibold">${offer.title}</h3>

        <div class="d-flex gap-2 mb-2">
            <div class="traderLogoBg">
                <img src="${offer.traderLogo}" class="img-fluid" alt="">
            </div>
            <div class="">
                <p class="mb-0 text-black">${offer.tradderName}</p>
                <p class="mb-0 ps-1">Seller</p>
            </div>
        </div>

        <div class="d-flex justify-content-between align-items-center mb-2">
            <div class="d-flex justify-content-center align-items-center gap-2">
                <p class="mb-0 fw-semibold">Deal:</p>
                <p class="mb-0 fw-bold">Adaptations(8) </p>
            </div>
            <div class="d-flex justify-content-center align-items-center gap-2">
                <p class="mb-0 fw-semibold">Brand:</p>
                <img src="${offer.brandImg}" class="img-fluid">
            </div>
        </div>

        <div class="">
            <p class="mb-0 fs-12">Offer price: <span class="offer main-txt fw-bold fs-6">${offer.offerPrice}</span> <span class="fw-semibold">(For the device inside the display)</span></p>
            <p class="fs-12">The original price: <span class="text-black fw-semibold">${offer.originalPrice}</span></p>
        </div>

        <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
            <div class="progress-bar overflow-visible custom-progress-bar" style="width: ${offer.bar}">50%</div>
        </div>

        <div class="d-flex align-items-center justify-content-center mt-2 mb-3">
            <img src="static/imgs/grpImg.png" class="img-fluid mb-0" alt="">
            <p class="mb-0 fs-12 fw-semibold" style="line-height: 13px;">Number of devices reserved within the offer (${offer.reservedDevices}) - remaining (${offer.remaining})</p>
        </div>

        <button class="clr1 d-flex align-items-center justify-content-center gap-1 w-100 rounded outline-0 border-0 text-white" style=" height: 40px;">
            <img src="static/imgs/offerBtnImg.png" alt="">
            <p class="mb-0">Offer details</p>
        </button>
        </div>
    `;

    rowContainer.appendChild(offerDiv);
});

const row = document.getElementById('row2');

specialOffer.forEach(offer => {
    const offerDiv = document.createElement('div');
    offerDiv.classList.add('col-xl-5', 'col-lg-5', 'col-md-5', 'col-sm-7', 'col-12', 'px-0', 'mb-4', 'ms-3');
    offerDiv.innerHTML = `
        <div class=" list-card-top d-flex align-items-start justify-content-between gap-3 text-center position-relative mb-14 p-3" style="background-color: ${offer.bgColor};">
            <div class="d-flex align-items-center justify-content-center">
                <button class= "d-flex align-items-center justify-content-center gap-1 featuredBtn"><p class="mb-0">Featured Ad</p>
                <i class="fa-solid fa-star text-white "></i>  </button>
            </div>
            <div class="d-flex align-items-center justify-content-center gap-2">
                <img src="static/imgs/heart.png" alt="" class ="border p-2 border-black border-2 rounded-3">
                <img src="static/imgs/share.png" alt="" class =" p-2 bordermain border-2 rounded-3">
            </div>
            <img src="${offer.prodImg}" class="img-fluid special-card-img position-absolute" alt="">
        </div>


        <div class = "bg-white px-3 mb-4">
        <h3 class="hClr1 fs-5 fw-semibold">${offer.title}</h3>

<div class= "d-flex justify-content-between align-items-center">

        <div class="d-flex gap-2 mb-2 justify-content-start align-items-center">
            <div class="traderLogoBg">
                <img src="${offer.traderLogo}" class="img-fluid" alt="">
            </div>
            <div class="">
                <p class="mb-0 text-black">${offer.tradderName}</p>
            </div>
        </div>

        <div class="d-flex justify-content-between align-items-center">
            <div class="d-flex justify-content-center align-items-center gap-2">
                <p class="mb-0 fw-semibold">Brand:</p>
                <img src="${offer.brandImg}" class="img-fluid">
            </div>
        </div>
        </div>

        <div class="d-flex justify-content-start align-items-center gap-2">
        <p class="mb-0 fw-semibold">Deal:</p>
        <p class="mb-0 fw-bold">Screens (8)</p>
        </div>

        <div class="d-flex justify-content-between align-items-center">
            <div class="">
                <p class="mb-0 fs-12" >Offer price: <span class="offer main-txt fw-bold fs-6">${offer.offerPrice}</span> <span class="">(For the device inside the display)</span></p>
                <p class="fs-12">The original price: <span class="text-black fw-semibold">${offer.originalPrice}</span></p>
            </div>

            <div class="d-flex gap-1">
                <div class="text-black">
                    <p class="mb-0 blurBlackBg">${offer.timeLeft.split(',')[0]}</p>
                    <p class="mb-0 fs-12 ms-1 fw-bold">Day</p>
                </div>
                <div class="text-black">
                    <p class="mb-0 blurBlackBg">${offer.timeLeft.split(',')[1]}</p>
                    <p class="mb-0 fs-12 ms-1 fw-bold">Hour</p>
                </div>
                <div class="text-black">
                    <p class="mb-0 blurBlackBg">${offer.timeLeft.split(',')[2]}</p>
                    <p class="mb-0 fs-12 ms-1 fw-bold">Minute</p>
                </div>
            </div>
        </div>

        <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
        <div class="progress-bar overflow-visible custom-progress-bar" style="width: ${offer.bar}">50%</div>
        </div>

        <div class="d-flex align-items-center justify-content-start mt-2 mb-3">
            <img src="static/imgs/grpImg.png" class="img-fluid mb-0 alt="">
            <p class="mb-0 fs-12 fw-semibold" style="line-height: 13px;">Number of devices reserved within the offer (${offer.reservedDevices}) - remaining (${offer.remaining})</p>
        </div>

        <button class="clr1 d-flex align-items-center justify-content-center gap-1 w-100 rounded outline-0 border-0 text-white" style=" height: 40px;">
            <img src="static/imgs/offerBtnImg.png" alt="">
            <p class="mb-0">Offer details</p>
        </button>
        </div>`;

    row.appendChild(offerDiv);
});


// row 3
const rowContainer3 = document.getElementById('row3');
finishedOffers.forEach(offer => {
    // Create a div element to hold the offer details
    const offerDiv = document.createElement('div');
    offerDiv.classList.add('col-xl-4', 'col-lg-5', 'col-md-5', 'col-sm-7', 'col-12', 'py-5');

    // Construct the HTML content for the offer
    offerDiv.innerHTML = `
        <div class="clr1 list-card-top d-flex align-items-start justify-content-start gap-2 text-center position-relative mb-7 p-3" style="background-color: ${offer.bgColor};">
        <p class="ms-2 pt-1">The Remaining time:</p>
        <div class="mb-0">
            <p class="mb-1 blurRedBg">${offer.timeLeft.split(',')[2]}</p>
            <p class="mb-0 colorRed fs-12 fw-semibold">Minute</p>
        </div>

        <div class="mb-0">
            <p class="mb-0 mb-1 blurRedBg">${offer.timeLeft.split(',')[1]}</p>
            <p class="mb-0 colorRed fs-12 fw-semibold">Hour</p>
        </div>
        <div class="mb-0">
            <p class="mb-0 mb-1 blurRedBg">${offer.timeLeft.split(',')[0]}</p>
            <p class="mb-0 colorRed fs-12 fw-semibold">Day</p>
        </div>
            <img src="${offer.prodImg}" class="img-fluid list-card-img position-absolute" alt="">
        </div>

        <div class = "bg-white px-3 mb-4">
        <h3 class="pt-2 colorRed fs-5 fw-semibold">${offer.title}</h3>

        <div class="d-flex gap-2 mb-2">
            <div class="traderLogoBg">
                <img src="${offer.traderLogo}" class="img-fluid" alt="">
            </div>
            <div class="">
                <p class="mb-0 text-black">${offer.tradderName}</p>
                <p class="mb-0 ps-1">Seller</p>
            </div>
        </div>

        <div class="d-flex justify-content-between align-items-center mb-2">
            <div class="d-flex justify-content-center align-items-center gap-2">
                <p class="mb-0 fw-semibold">Deal:</p>
                <p class="mb-0 fw-bold">Adaptations(8) </p>
            </div>
            <div class="d-flex justify-content-center align-items-center gap-2">
                <p class="mb-0 fw-semibold">Brand:</p>
                <img src="${offer.brandImg}" class="img-fluid">
            </div>
        </div>

        <div class="">
            <p class="mb-0 fs-12">Offer price: <span class="offer main-txt fw-bold fs-6">${offer.offerPrice}</span> <span class="fw-semibold">(For the device inside the display)</span></p>
            <p class="fs-12">The original price: <span class="fw-semibold">${offer.originalPrice}</span></p>
        </div>

        <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
            <div class="progress-bar overflow-visible custom-progress-bar" style="width: ${offer.bar}">50%</div>
        </div>

        <div class="d-flex align-items-center justify-content-center mt-2 mb-3">
            <img src="static/imgs/grpImg.png" class="img-fluid mb-0" alt="">
            <p class="mb-0 fs-12 fw-semibold" style="line-height: 13px;">Number of devices reserved within the offer (${offer.reservedDevices}) - remaining (${offer.remaining})</p>
        </div>

        <button class="clr1 d-flex align-items-center justify-content-center gap-1 w-100 rounded outline-0 border-0 text-white" style=" height: 40px;">
            <img src="static/imgs/offerBtnImg.png" alt="">
            <p class="mb-0">Offer details</p>
        </button>
        </div>
    `;

    rowContainer3.appendChild(offerDiv);
});

// row 4
const rowContainer4 = document.getElementById('row4');
finishedOffers.forEach(offer => {
    const offerDiv = document.createElement('div');
    offerDiv.classList.add('col-xl-4', 'col-lg-5', 'col-md-5', 'col-sm-7', 'col-12', 'py-5');

    offerDiv.innerHTML = `
        <div class="clr1 list-card-top d-flex align-items-start justify-content-start gap-2 text-center position-relative mb-7 p-3"  style="background-color: ${offer.bgColor};">
        <p class="ms-2 pt-1">The Remaining time:</p>
        <div class="mb-0">
            <p class="mb-1 blurBlackBg">${offer.timeLeft.split(',')[2]}</p>
            <p class="mb-0 fs-12 fw-semibold">Minute</p>
        </div>

        <div class="mb-0">
            <p class="mb-0 mb-1 blurBlackBg">${offer.timeLeft.split(',')[1]}</p>
            <p class="mb-0 fs-12 fw-semibold">Hour</p>
        </div>
        <div class="mb-0">
            <p class="mb-0 mb-1 blurBlackBg">${offer.timeLeft.split(',')[0]}</p>
            <p class="mb-0 fs-12 fw-semibold">Day</p>
        </div>
            <img src="${offer.prodImg}" class="img-fluid list-card-img position-absolute" alt="">
        </div>

        <div class = "bg-white px-3 mb-4">
        <h3 class="pt-2 fs-5 fw-semibold">${offer.title}</h3>

        <div class="d-flex gap-2 mb-2">
            <div class="traderLogoBg">
                <img src="${offer.traderLogo}" class="img-fluid" alt="">
            </div>
            <div class="">
                <p class="mb-0">${offer.tradderName}</p>
                <p class="mb-0 ps-1">Seller</p>
            </div>
        </div>

        <div class="d-flex justify-content-between align-items-center mb-2">
            <div class="d-flex justify-content-center align-items-center gap-2">
                <p class="mb-0 fw-semibold">Deal:</p>
                <p class="mb-0 fw-bold">Adaptations(8) </p>
            </div>
            <div class="d-flex justify-content-center align-items-center gap-2">
                <p class="mb-0 fw-semibold">Brand:</p>
                <img src="${offer.brandImg}" class="img-fluid">
            </div>
        </div>

        <div class="">
            <p class="mb-0 fs-12">Offer price: <span class="offer main-txt fw-bold fs-6">${offer.offerPrice}</span> <span class="fw-semibold">(For the device inside the display)</span></p>
            <p class="fs-12">The original price: <span class="fw-semibold">${offer.originalPrice}</span></p>
        </div>

        <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
            <div class="progress-bar overflow-visible custom-progress-bar" style="width: ${offer.bar}">50%</div>
        </div>

        <div class="d-flex align-items-center justify-content-center mt-2 mb-3">
            <img src="static/imgs/grpImg.png" class="img-fluid mb-0" alt="">
            <p class="mb-0 fs-12 fw-semibold" style="line-height: 13px;">Number of devices reserved within the offer (${offer.reservedDevices}) - remaining (${offer.remaining})</p>
        </div>

        <button class="clr1 d-flex align-items-center justify-content-center gap-1 w-100 rounded outline-0 border-0 text-white" style=" height: 40px;">
            <img src="static/imgs/offerBtnImg.png" alt="">
            <p class="mb-0">Offer details</p>
        </button>
        </div>
    `;

    // Append the constructed offer div to the row container
    rowContainer4.appendChild(offerDiv);
});

// custRew
function renderCarouselItems() {
    let carouselInner = document.querySelector('.carousel-inner');
    carouselInner.innerHTML = ''; // Clear previous items

    customerData.forEach((customer, index) => {
        let activeClass = index === 0 ? 'active' : '';
        let item = `
        <div class="carousel-item ${activeClass}">
          <div class="row m-auto" id="custRew">
            <div class="col-xl-3 col-lg-5 col-md-5 col-sm-7 col-12">
              <div class="">
                <img src="${customer.customerImg}" alt="Customer Image">
              </div>
            </div>
            <div class="col-xl-3 col-lg-5 col-md-5 col-sm-7 col-12">
              <div class="rating">
                <img src="${customer.rating}" alt="Rating">
              </div>
              <div class="review">
                <p class="pClr1 fw-semibold mt-4 fs-5">${customer.reviewTitle}</p>
                <p class="fs-12 fw-semibold pClr1" style="line-height: 20px;">${customer.review}</p>
              </div>
              <div class="customer-dets text-end mt-5">
                <p class="mb-0 main-txt fw-semibold">${customer.customerName}</p>
                <p class="pClr1 fs-12 fw-semibold">${customer.address}</p>
              </div>
            </div>

            <div class="col-xl-3 col-lg-5 col-md-5 col-sm-7 col-12">
              <div class="">
                <img src="${customer.customerImg}" alt="Customer Image">
              </div>
            </div>
            <div class="col-xl-3 col-lg-5 col-md-5 col-sm-7 col-12">
              <div class="rating">
                <img src="${customer.rating}" alt="Rating">
              </div>
              <div class="review">
                <p class="pClr1 fw-semibold mt-4 fs-5">${customer.reviewTitle}</p>
                <p class="fs-12 fw-semibold pClr1" style="line-height: 20px;">${customer.review}</p>
              </div>
              <div class="customer-dets text-end mt-5">
                <p class="mb-0 main-txt fw-semibold">${customer.customerName}</p>
                <p class="pClr1 fs-12 fw-semibold">${customer.address}</p>
              </div>
            </div>
          </div>
        </div>
      `;
        carouselInner.innerHTML += item;
    });
}

// Call the function to render carousel items
renderCarouselItems();