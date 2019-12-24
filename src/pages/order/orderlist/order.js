import uuid from "uuid/v1";

export default [
  {
    id: uuid(),
    reference: "70d4d7d0",
    subtotal: "39.97",
    tax: "77.44",
    discount: "-10.17",
    total: "73.31",
    date: 1555016400000,
    status: "paid",
    customer: {
      id: 1,
      firstName: "Dollie",
      lastName: "Bullock",
      avatar: "assets/images/avatars/Abbott.jpg",
      jobTitle: "Digital Archivist",
      email: "abbott@withinpixels.com",
      phone: "+1-202-555-0175",
      billingAddress: {
        number: 704,
        street: "6th Ave",
        city: "New York",
        postalCode: "NY 10010",
        country: "USA"
      },
      shippingAddress: {
        number: 704,
        street: "6th Ave",
        city: "New York",
        postalCode: "NY 10010",
        country: "USA"
      }
    },
    products: [
      {
        id: 1,
        name: "Canvas Print",
        size: 12,
        price: "10.24",
        quantity: 17,
        total: "10.24",
        image: "/images/ecommerce/a-walk-amongst-friends.jpg",
        images: {},
        company: "Indetex",
        brand: "Zara"
      }
    ],
    payment: {
      transactionId: "2a894b9e",
      amount: "73.31",
      method: "Credit Card",
      date: "2016/02/23 15:50:23"
    },
    shippingDetails: [
      {
        tracking: "",
        carrier: "TNT",
        weight: "10.44",
        fee: "7.00",
        date: "2015/04/10 07:03:52"
      }
    ]
  },
  {
    id: uuid(),
    reference: "70d4d7d0",
    subtotal: "39.97",
    tax: "77.44",
    discount: "-10.17",
    total: "73.31",
    date: 1555016400000,
    status: "shipped",
    customer: {
      id: 1,
      firstName: "Dollie",
      lastName: "Bullock",
      avatar: "/images/avatars/Abbott.jpg",
      jobTitle: "Digital Archivist",
      email: "abbott@withinpixels.com",
      phone: "+1-202-555-0175",
      billingAddress: {
        number: 704,
        street: "6th Ave",
        city: "New York",
        postalCode: "NY 10010",
        country: "USA"
      },
      shippingAddress: {
        number: 704,
        street: "6th Ave",
        city: "New York",
        postalCode: "NY 10010",
        country: "USA"
      }
    },
    products: [
      {
        id: 1,
        name: "Brown Jacket",
        size: 10,
        price: "10.24",
        quantity: 30,
        total: "10.24",
        image: "/images/ecommerce/a-walk-amongst-friends.jpg",
        images: {},
        company: "Indetex",
        brand: "Zara"
      }
    ],
    payment: {
      transactionId: "2a894b9e",
      amount: "73.31",
      method: "Credit Card",
      date: "2016/02/23 15:50:23"
    },
    shippingDetails: [
      {
        tracking: "",
        carrier: "TNT",
        weight: "10.44",
        fee: "7.00",
        date: "2015/04/10 07:03:52"
      }
    ]
  },
  {
    id: uuid(),
    reference: "70d4d7d0",
    subtotal: "39.97",
    tax: "77.44",
    discount: "-10.17",
    total: "73.31",
    date: 1555016400000,
    status: "refunded",
    customer: {
      id: 1,
      firstName: "Dollie",
      lastName: "Bullock",
      avatar: "/images/avatars/Abbott.jpg",
      jobTitle: "Digital Archivist",
      email: "abbott@withinpixels.com",
      phone: "+1-202-555-0175",
      billingAddress: {
        number: 704,
        street: "6th Ave",
        city: "New York",
        postalCode: "NY 10010",
        country: "USA"
      },
      shippingAddress: {
        number: 704,
        street: "6th Ave",
        city: "New York",
        postalCode: "NY 10010",
        country: "USA"
      }
    },
    products: [
      {
        id: 1,
        name: "Dark Denim Jeans",
        size: 8,
        price: "10.24",
        quantity: 12,
        total: "10.24",
        image: "/images/ecommerce/a-walk-amongst-friends.jpg",
        images: {},
        company: "Indetex",
        brand: "Zara"
      }
    ],
    payment: {
      transactionId: "2a894b9e",
      amount: "73.31",
      method: "Credit Card",
      date: "2016/02/23 15:50:23"
    },
    shippingDetails: [
      {
        tracking: "",
        carrier: "TNT",
        weight: "10.44",
        fee: "7.00",
        date: "2015/04/10 07:03:52"
      }
    ]
  }
];
