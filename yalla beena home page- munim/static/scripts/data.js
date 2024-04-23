// product section

let productData = [
  {
    id: 1,
    ProdImg: "static/imgs/product1.png",
    ProdName: "Blenders and juicers",
    NumofProduct: "60 products",
  },
  {
    id: 2,
    ProdImg: "static/imgs/stove.png",
    ProdName: "Ovens",
    NumofProduct: "60 products",
  },
  {
    id: 3,
    ProdImg: "static/imgs/fridge.png",
    ProdName: "Refrigerators",
    NumofProduct: "60 products",
  },
  {
    id: 4,
    ProdImg: "static/imgs/washingMachine.png",
    ProdName: "Washing machines",
    NumofProduct: "60 products",
  },
  {
    id: 5,
    ProdImg: "static/imgs/LCD.png",
    ProdName: "Screens",
    NumofProduct: "60 products",
  },
  {
    id: 6,
    ProdImg: "static/imgs/split.png",
    ProdName: "Air conditioners",
    NumofProduct: "660 products",
  },
]

// row 1, new offers

let newOffers = [
  {
    id: 1,
    timeLeft: "6,16,55",
    prodImg: "static/imgs/oven.png",
    title: "LG double door refrigerator with smart interface...",
    traderLogo: "static/imgs/companylogo.png",
    tradderName: "Al-Rowad Trading Company",
    brandImg: "static/imgs/LG_logo.png",
    offerPrice: "65,000 EGP",
    originalPrice: "65,000 EGP",
    bar: "50%",
    reservedDevices: "4",
    remaining: "4",
    bgColor: "rgba(84, 183, 203, 0.414)"
  },
  {
    id: 2,
    timeLeft: "6,16,55",
    prodImg: "static/imgs/juicer.png",
    title: "LG double door refrigerator with smart interface...",
    traderLogo: "static/imgs/companylogo.png",
    tradderName: "Al-Rowad Trading Company",
    brandImg: "static/imgs/LG_logo.png",
    offerPrice: "65,000 EGP",
    originalPrice: "65,000 EGP",
    bar: "50%",
    reservedDevices: "4",
    remaining: "4",
    bgColor: "rgba(237, 197, 66, 0.202)"
  },
  {
    id: 3,
    timeLeft: "6,16,55",
    prodImg: "static/imgs/splitblack.png",
    title: "LG double door refrigerator with smart interface...",
    traderLogo: "static/imgs/companylogo.png",
    tradderName: "Al-Rowad Trading Company",
    brandImg: "static/imgs/LG_logo.png",
    offerPrice: "65,000 EGP",
    originalPrice: "65,000 EGP",
    bar: "50%",
    reservedDevices: "4",
    remaining: "4",
    bgColor: "rgba(66, 22, 149, 0.288)",
  }
]

// row 2
let specialOffer =
  [
    {
      id: 1,
      prodImg: "static/imgs/led.png",
      title: "Samsung Smart dishwasher with a distinctive screen...",
      traderLogo: "static/imgs/companylogo2.png",
      tradderName: "Al Ansar Trading Company",
      brandImg: "static/imgs/Samsung.png",
      offerPrice: "65,000 EGP",
      timeLeft: "6,16,55",
      originalPrice: "65,000 EGP",
      bar: "50%",
      reservedDevices: "4",
      remaining: "4",
      bgColor: "rgba(237, 197, 66, 0.202)"
    },
    {
      id: 2,
      prodImg: "static/imgs/washer.png",
      title: "Samsung Smart dishwasher with a distinctive screen...",
      traderLogo: "static/imgs/companylogo2.png",
      tradderName: "Al Ansar Trading Company",
      brandImg: "static/imgs/Samsung.png",
      offerPrice: "65,000 EGP",
      timeLeft: "6,16,55",
      originalPrice: "65,000 EGP",
      bar: "50%",
      reservedDevices: "4",
      remaining: "4",
      bgColor: "rgba(66, 22, 149, 0.288)",
    }
  ]

// row 3, offers almost finished

let finishedOffers = [
  {
    id: 1,
    timeLeft: "6,16,55",
    prodImg: "static/imgs/oven.png",
    title: "LG double door refrigerator with smart interface...",
    traderLogo: "static/imgs/companylogo.png",
    tradderName: "Al-Rowad Trading Company",
    brandImg: "static/imgs/LG_logo.png",
    offerPrice: "65,000 EGP",
    originalPrice: "65,000 EGP",
    bar: "50%",
    reservedDevices: "4",
    remaining: "4",
    bgColor: "rgba(84, 183, 203, 0.414)"
  },
  {
    id: 2,
    timeLeft: "6,16,55",
    prodImg: "static/imgs/juicer.png",
    title: "LG double door refrigerator with smart interface...",
    traderLogo: "static/imgs/companylogo.png",
    tradderName: "Al-Rowad Trading Company",
    brandImg: "static/imgs/LG_logo.png",
    offerPrice: "65,000 EGP",
    originalPrice: "65,000 EGP",
    bar: "50%",
    reservedDevices: "4",
    remaining: "4",
    bgColor: "rgba(237, 197, 66, 0.202)"
  },
  {
    id: 3,
    timeLeft: "6,16,55",
    prodImg: "static/imgs/splitblack.png",
    title: "LG double door refrigerator with smart interface...",
    traderLogo: "static/imgs/companylogo.png",
    tradderName: "Al-Rowad Trading Company",
    brandImg: "static/imgs/LG_logo.png",
    offerPrice: "65,000 EGP",
    originalPrice: "65,000 EGP",
    bar: "50%",
    reservedDevices: "4",
    remaining: "4",
    bgColor: "rgba(66, 22, 149, 0.288)",
  }
]
// row 3, offers almost finished

let completeOffers = [
  {
    id: 1,
    timeLeft: "6,16,55",
    prodImg: "static/imgs/oven.png",
    title: "LG double door refrigerator with smart interface...",
    traderLogo: "static/imgs/companylogo.png",
    tradderName: "Al-Rowad Trading Company",
    brandImg: "static/imgs/LG_logo.png",
    offerPrice: "65,000 EGP",
    originalPrice: "65,000 EGP",
    bar: "50%",
    reservedDevices: "4",
    remaining: "4",
    bgColor: "rgba(84, 183, 203, 0.414)"
  },
  {
    id: 2,
    timeLeft: "6,16,55",
    prodImg: "static/imgs/juicer.png",
    title: "LG double door refrigerator with smart interface...",
    traderLogo: "static/imgs/companylogo.png",
    tradderName: "Al-Rowad Trading Company",
    brandImg: "static/imgs/LG_logo.png",
    offerPrice: "65,000 EGP",
    originalPrice: "65,000 EGP",
    bar: "50%",
    reservedDevices: "4",
    remaining: "4",
    bgColor: "rgba(237, 197, 66, 0.202)"
  },
  {
    id: 3,
    timeLeft: "6,16,55",
    prodImg: "static/imgs/oven.png",
    title: "LG double door refrigerator with smart interface...",
    traderLogo: "static/imgs/companylogo.png",
    tradderName: "Al-Rowad Trading Company",
    brandImg: "static/imgs/LG_logo.png",
    offerPrice: "65,000 EGP",
    originalPrice: "65,000 EGP",
    bar: "50%",
    reservedDevices: "4",
    remaining: "4",
    bgColor: "rgba(66, 22, 149, 0.288)",
  }
]

let customerData = [
  {
    id: 1,
    customerImg: "static/imgs/customer1.png",
    rating: "static/imgs/ratingStars.png",
    reviewTitle: "A more than wonderful platform",
    review: "This text is an example of text that can be replaced in the same space. This text was generated from the Arabic text generator",
    customerName: "Mohammed Mustafa",
    address: "Giza, Egypt"
  }, {
    id: 2,
    customerImg: "static/imgs/customer1.png",
    customerImg2: "static/imgs/customer1.png",
    rating: "static/imgs/ratingStars.png",
    reviewTitle: "A more than wonderful platform",
    review: "This text is an example of text that can be replaced in the same space. This text was generated from the Arabic text generator",
    customerName: "Mohammed Mustafa",
    address: "Giza, Egypt"
  },
  {
    id: 3,
    customerImg: "static/imgs/customer2.png",
    rating: "static/imgs/ratingStars.png",
    reviewTitle: "A more than wonderful platform",
    review: "This text is an example of text that can be replaced in the same space. This text was generated from the Arabic text generator",
    customerName: "Mohammed Mustafa",
    address: "Giza, Egypt"
  },
  {
    id: 4,
    customerImg: "static/imgs/customer2.png",
    rating: "static/imgs/ratingStars.png",
    reviewTitle: "A more than wonderful platform",
    review: "This text is an example of text that can be replaced in the same space. This text was generated from the Arabic text generator",
    customerName: "Mohammed Mustafa",
    address: "Giza, Egypt"
  },
  {
    id: 5,
    customerImg: "static/imgs/customer1.png",
    rating: "static/imgs/ratingStars.png",
    reviewTitle: "A more than wonderful platform",
    review: "This text is an example of text that can be replaced in the same space. This text was generated from the Arabic text generator",
    customerName: "Mohammed Mustafa",
    address: "Giza, Egypt"
  },
  {
    id: 6,
    customerImg: "static/imgs/customer2.png",
    rating: "static/imgs/ratingStars.png",
    reviewTitle: "A more than wonderful platform",
    review: "This text is an example of text that can be replaced in the same space. This text was generated from the Arabic text generator",
    customerName: "Mohammed Mustafa",
    address: "Giza, Egypt"
  },
]