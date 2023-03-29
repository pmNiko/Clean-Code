type Size = "" | "S" | "M" | "XL";

/**
 *
 */
class Product {
  constructor(
    public name: string = "",
    public price: number = 0,
    public size: Size = ""
  ) {}

  isProductReady(): boolean {
    // if (this.name.length <= 0) throw Error("Name is empty.");
    // if (this.price <= 0) throw Error("price is empty.");
    // if (this.size === "") throw Error("size is empty.");
    for (const key in this) {
      switch (typeof this[key]) {
        case "string":
          if (this[key] === "") throw new Error(`${key} is empty`);
          break;
        case "number":
          if (this[key] <= 0) throw new Error(`${key} is zero`);
          break;
        default:
          throw new Error(`${typeof key} is not supported`);
      }
    }

    return true;
  }

  toString() {
    if (!this.isProductReady()) return;
    return `${this.name} (${this.price}), ${this.size} `;
  }
}

/**
 *
 */
(() => {
  const bluePants = new Product("Blue large pants", 10, "XL");
  console.log(bluePants.toString());
})();
