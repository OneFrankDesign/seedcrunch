const INTIAL_STATE = {
  sections: [
    {
      title: "fruits",
      imageUrl:
        "https://images.unsplash.com/photo-1608753478723-494e2dc286f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      id: 1,
      linkUrl: "shop/fruits",
    },
    {
      title: "vegetables",
      imageUrl:
        "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      id: 2,
      linkUrl: "shop/vegetables",
    },
    {
      title: "gear",
      imageUrl:
        "https://images.unsplash.com/photo-1523301551780-cd17359a95d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80",
      id: 3,
      linkUrl: "shop/gear",
    },
    {
      title: "ornamentals",
      imageUrl:
        "https://images.unsplash.com/photo-1532211387405-12202cb81d7b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      id: 4,
      size: "large",
      linkUrl: "shop/ornamentals",
    },
    {
      title: "herbs",
      imageUrl:
        "https://images.unsplash.com/photo-1604543648342-6a500ad7b5c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      id: 5,
      size: "large",
      linkUrl: "shop/herbs",
    },
  ],
};

const directoryReducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
