//Product (name, price, id),
//Drinks (ml, isAlcohol)
//Electronics (batter, RAM)

class Product {
  name;
  //private field
  #costPrice = 0;
  salePrice = 0;
  discountPercentage = 0;
  static soldQuantity = 0;

  constructor(name, costPrice, salePrice, stock, discountPercentage = 0) {
    this.id = new Date().getTime();
    this.name = name;
    this.#costPrice = costPrice >= 0 ? costPrice : 0;
    this.salePrice =
      salePrice <= this.#costPrice ? this.#costPrice * 1.2 : salePrice;
    this.discountPercentage =
      discountPercentage >= 0 && discountPercentage <= 100
        ? discountPercentage
        : 0;
    this.stock = stock;
    this.createdAt = new Date();
  }

  set costPrice(newCostPrice) {
    if (newCostPrice <= this.salePrice) {
      this.#costPrice = newCostPrice;
    }
  }
  get costPrice() {
    return this.#costPrice;
  }

  sell(count = 1) {
    if (this.stock >= count) {
      Product.soldQuantity += count;
      this.stock -= count;
      return `${this.name} sold x${count} successfully!`;
    } else {
      return `${this.name} not in stock`;
    }
  }

  getInfo() {
    return `${this.name} | ${this.salePrice}`;
  }

  getProfit() {
    let profit = 0;
    if (this.discountPercentage === 0) {
      profit = this.salePrice - this.#costPrice;
    } else {
      profit =
        this.salePrice -
        (this.salePrice * this.discountPercentage) / 100 -
        this.#costPrice;
    }
    return profit;
  }
}

class Drinks extends Product {
  ml;
  isAlcohol;
  constructor(
    ml,
    isAlcohol,
    name,
    costPrice,
    salePrice,
    stock,
    discountPercentage = 0
  ) {
    super(name, costPrice, salePrice, stock, discountPercentage);
    this.ml = ml > 0 ? ml : 0;
    this.isAlcohol = typeof isAlcohol === "boolean" ? isAlcohol : false;
  }

  //polymorphism
  getInfo() {
    return `${this.name} ${this.ml}, ${this.salePrice}`;
  }
}

class Electronics extends Product {
  battery = 100;
  RAM;
  constructor(
    battery,
    RAM,
    name,
    costPrice,
    salePrice,
    stock,
    discountPercentage = 0
  ) {
    super(name, costPrice, salePrice, stock, discountPercentage);
    this.battery = battery;
    this.RAM = RAM;
  }

  charge() {
    this.battery = 100;
  }
}

const cola = new Drinks(500, false, "coca-cola", 2, 5, 10);
const sirab = new Drinks(300, false, "sirab", 1, 3, 10);
const sierra = new Drinks(750, true, "tequila sierra", 30, 70, 0);
const macBook = new Electronics(90, 16, "MacBook pro", 700, 1700, 5, 0);
const iPhone = new Electronics(70, 8, "IPhone 14", 850, 2400, 25, 4);
const sonyCamera = new Electronics(60, 4, "Sony Pixels", 1200, 1000, 2, 2);

const market = [cola, sirab, sierra, macBook, iPhone, sonyCamera];

const totalProfit = market.reduce((acc, prod) => {
  return (acc += prod.getProfit());
}, 0);

console.log(totalProfit);

// const message1 = cola.sell(2);
// const message2 = macBook.sell();
// const message3 = sonyCamera.sell(2);
// const message4 = sierra.sell(2);

// console.log(message1);
// console.log(message2);
// console.log(message3);
// console.log(message4);

// console.log(Product.soldQuantity);
