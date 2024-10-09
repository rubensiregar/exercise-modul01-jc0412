// 2. Transaction
interface IProduct {}
interface ITransaction {}

class Product {
    name: string;
    price: number;
    constructor(_name: string, _price: number) {
        this.name = _name;
        this.price = _price;
    }
}

class Transaction {
    #total: number;
    products: {
        product: Product;
        qty: number;
    }[];

    constructor() {
        this.#total = 0;
        this.products = [];
    }

    addProduct(product: Product, qty: number) {
        this.#total += product.price * qty;
        this.products.push({ product, qty });
    }

    showTotal() {
        return {
            cart: this.products,
            total: this.#total,
        };
    }

    checkout() {
        const currProduct: { product: Product; qty: number }[] = [
            ...this.products,
        ];
        this.#total = 0;
        this.products = [];

        return currProduct;
    }
}

let lepi: Product = new Product("Laptop", 600);
let hape: Product = new Product("Handphone", 400);
let mous: Product = new Product("Mouse", 100);

console.log(lepi);
console.log(hape);
console.log(mous);

const newTransaction: Transaction = new Transaction();
newTransaction.addProduct(lepi, 1);
newTransaction.addProduct(hape, 2);
newTransaction.addProduct(mous, 4);

console.log(newTransaction.showTotal());
console.log(newTransaction.checkout());
