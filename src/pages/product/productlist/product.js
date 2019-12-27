import uuid from "uuid/v1";

export default [
  {
    id: uuid(),
    imageUrl: "/image/image1",
    name: "Levi's Jeans",
    details: "",
    gender: "female",
    imagesUrl: {},
    demography: {
        age: '18 - 25',
    },
    size: 12,
    price: 19,
    discount: {
        student: 10,
        others: 5
    },
    material: {
        main: 'jeans',
    },
    care: {
        wash: "machine wash in warm water only",
        iron: "below 10 degrees"
    },
    measurement: {

    },
    weight: 12,
    shippingDetails: {},
    color: {
        primary: "blue",
        secondary: "",
        last: ""
    },
    year: "2018",
    stock: 40,
    refundPolicy: "",
    deliveryInfo: "",
    isAvailableLessStock: true,
    createdAt: 1522702800000,
    tags: {
        // name: "", 
        // color,
        // year,
        // demography,
        // size,
        // price 
    },
    status: "saved"
  },
  {
    id: uuid(),
    imageUrl: "/image/image1",
    name: "Gap",
    details: "",
    gender: "male",
    demography: {
        age: '18 - 25',
    },
    size: 12,
    price: 19,
    discount: {
        student: 10,
        others: 5
    },
    material: {
        main: 'jeans',
    },
    care: {
        wash: "machine wash in warm water only",
        iron: "below 10 degrees"
    },
    measurement: {

    },
    weight: 12,
    shippingDetails: {},
    color: {
        primary: "blue",
        secondary: "",
        last: ""
    },
    year: "2018",
    stock: 27,
    refundPolicy: "",
    deliveryInfo: "",
    isAvailableLessStock: true,
    createdAt: 1522702800000,
    tags: {
        // name, 
        // color,
        // year,
        // demography,
        // size,
        // price 
    },
    status: "published"
  }
];
