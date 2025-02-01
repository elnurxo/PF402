export class Product {
  constructor(
    title,
    salePrice,
    costPrice,
    discountPercentage,
    category,
    imageUrl
  ) {
    (this.id = Math.round(Math.random() * 1000 + new Date().getTime())),
      (this.title = title);
    this.salePrice = salePrice > costPrice ? salePrice : costPrice + 1;
    this.costPrice = costPrice;
    this.discountPercentage =
      discountPercentage >= 0 && discountPercentage <= 100
        ? discountPercentage
        : 0;
    this.category = category;
    this.imageUrl = imageUrl;
    // this.createdAt = new Date();
    // this.isInStock = true;
    // this.stockQuantity = 2;
  }

  //methods
  getProfit() {
    if (this.discountPercentage === 0) {
      return this.salePrice - this.costPrice;
    } else {
      return (
        this.salePrice -
        (this.salePrice * this.discountPercentage) / 100 -
        this.costPrice
      );
    }
  }

  getInfo() {
    return `${this.title}, ${this.salePrice} | ${this.category}`;
  }
}

export class BasketItems {
  constructor() {
    if (!JSON.parse(localStorage.getItem("basket"))) {
      localStorage.setItem("basket", JSON.stringify([]));
      this.basketItems = [];
    } else {
      const localBasket = JSON.parse(localStorage.getItem("basket"));
      this.basketItems = [...localBasket];
    }
  }

  //methods
  add(newBasketItem) {
    const found = this.basketItems.find((x) => x.id == newBasketItem.id);
    if (found) {
      found.quantity++;
    } else {
      this.basketItems.push(newBasketItem);
    }

    localStorage.setItem("basket", JSON.stringify([...this.basketItems]));
    return {
      message: found
        ? "basket item quantity increased"
        : "new basket item added",
      data: this.basketItems,
      isNew: found ? false : true,
    };
  }

  removeBasketItem(id) {
    const found = this.basketItems.find((x) => x.id == id);
    if (found) {
      const updatedBasketItems = this.basketItems.filter((x) => x.id != id);
      this.basketItems = [...updatedBasketItems];
      localStorage.setItem("basket", JSON.stringify([...updatedBasketItems]));
      return updatedBasketItems;
    } else {
      return {
        status: 404,
        message: "not found!",
      };
    }
  }

  decreaseBasketItemQuantity(id) {
    const found = this.basketItems.find((x) => x.id == id);
    if (found) {
      if (found.quantity === 1) {
        this.removeBasketItem(id);
      } else {
        found.quantity--;
      }
    }
    localStorage.setItem("basket", JSON.stringify([...this.basketItems]));
  }

  getAll() {
    return this.basketItems;
  }

  getOne(id) {
    const found = this.basketItems.find((x) => x.id == id);
    if (found) {
      return found;
    } else {
      return {
        message: "not found!",
      };
    }
  }

  clear() {
    this.basketItems = [];
    localStorage.setItem("basket", JSON.stringify([]));
  }
}
