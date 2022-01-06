const SHOP_DATA = [
  {
    id: 1,
    title: "Fruits",
    routeName: "fruits",
    items: [
      {
        id: 1,
        name: "Arabian Coffee",
        imageUrl:
          "https://images.unsplash.com/photo-1552346989-e069318e20a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80",
        price: 3.99,
      },
      {
        id: 2,
        name: "Congo Watermelon",
        imageUrl:
          "https://images.unsplash.com/photo-1629265824918-e31061005c85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
        price: 2.49,
      },
      {
        id: 3,
        name: "Triple Crown Blackberry",
        imageUrl:
          "https://images.unsplash.com/photo-1561155707-09619a018c48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
        price: 3.95,
      },
      {
        id: 4,
        name: "Cascade Blueberry",
        imageUrl:
          "https://images.unsplash.com/photo-1584879135892-53935a4b1408?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
        price: 4.99,
      },
      {
        id: 5,
        name: "Crimson Empire Strawberry",
        imageUrl:
          "https://images.unsplash.com/photo-1575808142341-e39853744dbd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=628&q=80",
        price: 2.99,
      },
      {
        id: 6,
        name: "Summer's Ocean Seedless Grape",
        imageUrl:
          "https://images.unsplash.com/photo-1595938688117-8af7b8da9fca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=592&q=80",
        price: 5.99,
      },
      {
        id: 7,
        name: "Imperial Red Currant",
        imageUrl:
          "https://images.unsplash.com/photo-1591085654809-7cdfbd103b8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        price: 9.99,
      },
      {
        id: 8,
        name: "Royal Estate Juneberry",
        imageUrl:
          "https://images.unsplash.com/photo-1528025599284-801e9736cd2e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        price: 10.99,
      },
      {
        id: 9,
        name: "Wylder's Elderberry",
        imageUrl:
          "https://images.unsplash.com/photo-1630526908999-32037ec1c345?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80",
        price: 7.99,
      },
    ],
  },
  {
    id: 2,
    title: "Vegetables",
    routeName: "vegetables",
    items: [
      {
        id: 1,
        name: "Pechay Bak Choi",
        imageUrl:
          "https://images.unsplash.com/photo-1515192558558-17a7c4904ebc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
        price: 1.96,
      },
      {
        id: 2,
        name: "Red Burgundy Onion",
        imageUrl:
          "https://images.unsplash.com/photo-1467019972079-a273e1bc9173?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        price: 1.44,
      },
      {
        id: 3,
        name: "Early Scarlet Radish",
        imageUrl:
          "https://images.unsplash.com/photo-1609668106037-60375e9d1238?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        price: 0.99,
      },
      {
        id: 4,
        name: "Butterbush Winter Squash",
        imageUrl:
          "https://images.unsplash.com/photo-1591578954582-dc4a81447c6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        price: 1.99,
      },
      {
        id: 5,
        name: "Purple Top Gold Rutabaga",
        imageUrl:
          "https://images.unsplash.com/photo-1631909808696-969b7aa7ade9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        price: 2.99,
      },
      {
        id: 6,
        name: "Touchon Carrot",
        imageUrl:
          "https://images.unsplash.com/photo-1582515073490-39981397c445?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",
        price: 1.99,
      },
      {
        id: 7,
        name: "Butterbox Heirloom Lettuce",
        imageUrl:
          "https://images.unsplash.com/photo-1519897831810-a9a01aceccd1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80",
        price: 1.95,
      },
      {
        id: 8,
        name: "Heavenly White Asparagus",
        imageUrl:
          "https://images.unsplash.com/photo-1519590350802-eb212e2ea536?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80",
        price: 5.99,
      },
    ],
  },
  {
    id: 3,
    title: "Gear",
    routeName: "gear",
    items: [
      {
        id: 1,
        name: "Metal Gardening Shovel",
        imageUrl:
          "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        price: 12.99,
      },
      {
        id: 2,
        name: "1 Quart Garden Plastic Pots",
        imageUrl:
          "https://images.unsplash.com/photo-1565701175719-5ef844931183?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1048&q=80",
        price: 1.99,
      },
      {
        id: 3,
        name: "25 Cell Seedling Trays",
        imageUrl:
          "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        price: 5.99,
      },
      {
        id: 4,
        name: "Gardener's Starter Kit",
        imageUrl:
          "https://images.unsplash.com/photo-1601312540057-7234a01baef6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=861&q=80",
        price: 25.99,
      },
      {
        id: 5,
        name: "Produce Basket",
        imageUrl:
          "https://images.unsplash.com/photo-1474440692490-2e83ae13ba29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        price: 5.99,
      },
    ],
  },
  {
    id: 4,
    title: "Ornamentals",
    routeName: "ornamentals",
    items: [
      {
        id: 1,
        name: "Viola Creme Jump-up",
        imageUrl:
          "https://images.unsplash.com/photo-1620554933352-9ce447159b04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        price: 1.25,
      },
      {
        id: 2,
        name: "Morning Glory",
        imageUrl:
          "https://images.unsplash.com/photo-1629574823441-bff47c9133d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        price: 1.78,
      },
      {
        id: 3,
        name: "Golden Sun Calendula",
        imageUrl:
          "https://images.unsplash.com/photo-1631710278764-c659ae0239d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
        price: 2.75,
      },
      {
        id: 4,
        name: "Regal Purple Aster",
        imageUrl:
          "https://images.unsplash.com/photo-1605982466374-9ceda9d25c3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
        price: 1.99,
      },
      {
        id: 5,
        name: "Assorted Poppies",
        imageUrl:
          "https://images.unsplash.com/photo-1623864398649-89bb024a878f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=541&q=80",
        price: 3.75,
      },
      {
        id: 6,
        name: "Great Star Sunflower",
        imageUrl:
          "https://images.unsplash.com/photo-1637991005975-0dca0cff6d55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
        price: 2.99,
      },
      {
        id: 7,
        name: "Pink Blouse Rose",
        imageUrl:
          "https://images.unsplash.com/photo-1625104729684-d52e1483d559?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
        price: 6.99,
      },
    ],
  },
  {
    id: 5,
    title: "Herbs",
    routeName: "herbs",
    items: [
      {
        id: 1,
        name: "Sage",
        imageUrl:
          "https://images.unsplash.com/photo-1600246444216-467a4c83c331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=598&q=80",
        price: 3.99,
      },
      {
        id: 2,
        name: "Oregano",
        imageUrl:
          "https://images.unsplash.com/photo-1570647556977-b77ee6f3fac2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
        price: 1.75,
      },
      {
        id: 3,
        name: "Dill",
        imageUrl:
          "https://images.unsplash.com/photo-1583294909140-23aa2961b7a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
        price: 0.99,
      },
      {
        id: 4,
        name: "Peppermint",
        imageUrl:
          "https://images.unsplash.com/photo-1574209908880-a2d3caa70f84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=557&q=80",
        price: 1.99,
      },
      {
        id: 5,
        name: "Spanish Lavender",
        imageUrl:
          "https://images.unsplash.com/photo-1607020165087-e18289fd571e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
        price: 4.99,
      },
      {
        id: 6,
        name: "Rosemary",
        imageUrl:
          "https://images.unsplash.com/photo-1536033046054-dafb47b9c086?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
        price: 6.95,
      },
    ],
  },
];

export default SHOP_DATA;
