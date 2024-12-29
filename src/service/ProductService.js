export const ProductService = {
  getProductsData() {
    return [
      {
        id: "1000",
        image: "src/assets/games/Forza.png",
        background: "src/assets/backgrounds/Forza.png",
        name: "Forza",
      },
      {
        id: "1001",
        image: "src/assets/games/Naraka.png",
        background: "src/assets/backgrounds/Naraka.png",
        name: "Naraka",
      },
      {
        id: "1002",
        image: "src/assets/games/Overwatch.png",
        background: "src/assets/backgrounds/Overwatch.png",
        name: "Overwatch",
      },
      {
        id: "1003",
        image: "src/assets/games/PlanetOfLana.png",
        background: "src/assets/backgrounds/PlanetOfLana.png",
        name: "PlanetOfLana",
      },
    ];
  },
  getProducts() {
    return Promise.resolve(this.getProductsData());
  },
};
