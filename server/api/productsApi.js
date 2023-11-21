const products = [
  {
    id: "613cGZUZkiL",
    name: "Oversized Shirt - Blue",
    description: "A stylish shirt from Korea",
    price: 29.99,
    category: "MensWear",
    subCategory: "newArrival",
    image: "https://m.media-amazon.com/images/I/613cGZUZkiL._AC_UY1000_.jpg",
  },
  // Add more items as needed
  {
    id: "cloth920930",
    name: "Oversized coat for mens",
    description: "smart casual wear coat",
    price: 59.99,
    category: "MensWear",
    subCategory: "trendcollection",
    image:
      "https://thestreetsofseoul.com/cdn/shop/files/Mid-length-Minimal-Mac-Coat-thestreetsofseoul-korean-street-style-minimal-streetwear-k-style-kstyle-mens-affordable-clothing.jpg?v=1696606392&width=1280",
  },
  {
    id: "557a4be7e3e7",
    name: "Casual Shrug - Multi",
    description: "Printed shrug for mens",
    price: 32.99,
    category: "MensWear",
    subCategory: "newArrivals",
    image:
      "https://i.pinimg.com/originals/55/7a/4b/557a4be7e3e73ae38dbe2a8f1f58b678.jpg",
  },
  {
    id: "1694787464s",
    name: "Leather Jacket",
    description: "Korean mens jacket",
    price: 67.99,
    category: "MensWear",
    subCategory: "newArrivals",
    image:
      "https://thestreetsofseoul.com/cdn/shop/products/Vintage-Inspired-Faux-Leather-Jacket-thestreetsofseoul-korean-street-style-minimal-streetwear-k-style-kstyle-mens-affordable-clothing.jpg?v=1694787464&width=1280",
  },
  {
    id: "s1696957961",
    name: "Tees - Black",
    description: "A stylish shirt from Korea",
    price: 19.99,
    category: "MensWear",
    subCategory: "trendcollection",
    image:
      "https://thestreetsofseoul.com/cdn/shop/products/Hand-Graphic-T-Shirt-thestreetsofseoul-korean-street-style-minimal-streetwear-k-style-kstyle-mens-affordable-clothing.jpg?v=1696957961&width=1280",
  },
  {
    id: "1696606246",
    name: "Slim fit trouser",
    description: "Ankle length smart trouser",
    price: 33.99,
    category: "MensWear",
    subCategory: "trendcollection",
    image:
      "https://thestreetsofseoul.com/cdn/shop/files/Slim-Fit-Ankle-Length-Belted-Smart-Trousers-thestreetsofseoul-korean-street-style-minimal-streetwear-k-style-kstyle-mens-affordable-clothing.jpg?v=1696606246&width=1280",
  },
  {
    id: "42373623Women",
    name: "Womens Dress",
    description: "Korean dress collection",
    price: 24.5,
    category: "WomensWear",
    subCategory: "trendcollection",
    image:
      "https://i.etsystatic.com/42373623/r/il/2c62ae/5000243121/il_600x600.5000243121_7s2v.jpg",
  },
  {
    id: "32413877wome",
    name: "Multicolored Sweater",
    description: "Beautiful multicolored sweater for womens",
    price: 99.2,
    category: "WomensWear",
    subCategory: "newArrival",
    image:
      "https://i.etsystatic.com/32413877/r/il/82b497/5017430207/il_600x600.5017430207_tfk6.jpg",
  },
  {
    id: "11750832wome",
    name: "Womens Sweatshirt - Navy",
    description: "K-drama inspired womens sweatshirt",
    price: 88.3,
    category: "WomensWear",
    subCategory: "trendcollection",
    image:
      "https://i.etsystatic.com/11750832/c/1785/1785/99/0/il/59d54d/5195761294/il_600x600.5195761294_5v33.jpg",
  },
  {
    id: "42815129wome",
    name: "Womens Tees",
    description: "K-drama inspired womens tees",
    price: 23.3,
    category: "WomensWear",
    subCategory: "tees",
    image:
      "https://i.etsystatic.com/42815129/r/il/8708f1/5119347929/il_600x600.5119347929_1se2.jpg",
  },
  {
    id: "35904287wome",
    name: "Womens Casual Pants - Black",
    description: "Comfy yet casual pants for womens",
    price: 90.3,
    category: "WomensWear",
    subCategory: "newArrivals",
    image:
      "https://i.etsystatic.com/35904287/r/il/1b3d41/4830999869/il_600x600.4830999869_5l18.jpg",
  },
  {
    id: "38586253wome",
    name: "Oversized Tees",
    description: "K-drama inspired womens sweatshirt",
    price: 88.3,
    category: "WomensWear",
    subCategory: "tees",
    image:
      "https://i.etsystatic.com/38586253/r/il/9cc1bd/5218017604/il_600x600.5218017604_ril5.jpg",
  },
  {
    id: "42115267wome",
    name: "Oversized Tees",
    description: "K-drama inspired womens sweatshirt",
    price: 0.3,
    category: "WomensWear",
    subCategory: "tees",
    image:
      "https://i.etsystatic.com/42115267/c/800/800/89/0/il/6cc1f8/5054939579/il_600x600.5054939579_kltf.jpg",
  },
  {
    id: "45081416wome",
    name: "Oversized Tees",
    description: "K-drama inspired womens sweatshirt",
    price: 88.3,
    category: "WomensWear",
    subCategory: "trendcollection",
    image:
      "https://i.etsystatic.com/45081416/r/il/230225/5301597687/il_600x600.5301597687_tj6j.jpg",
  },
  {
    id: "11727316wome",
    name: "Oversized Tees",
    description: "K-drama inspired womens sweatshirt",
    price: 88.3,
    category: "WomensWear",
    subCategory: "tees",
    image:
      "https://i.etsystatic.com/11727316/c/1717/1717/352/0/il/12b9b7/3095637173/il_600x600.3095637173_14fq.jpg",
  },
  {
    id: "36342567wome",
    name: "Oversized Tees",
    description: "K-drama inspired womens sweatshirt",
    price: 88.3,
    category: "WomensWear",
    subCategory: "tees",
    image:
      "https://i.etsystatic.com/36342567/c/1297/1297/67/481/il/805593/5481757767/il_600x600.5481757767_6bq6.jpg",
  },
  {
    id: "38442082wome",
    name: "Oversized Tees",
    description: "K-drama inspired womens sweatshirt",
    price: 88.3,
    category: "WomensWear",
    subCategory: "tees",
    image:
      "https://i.etsystatic.com/38442082/r/il/23593b/5206082802/il_600x600.5206082802_alcf.jpg",
  },
];

export default products;
