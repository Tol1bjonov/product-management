"use strict";
class ProductManager {
    constructor() {
        this.products = [];
    }
    createProduct(product) {
        this.products.push(product);
    }
    getProductById(id) {
        return this.products.find(p => p.id === id);
    }
    updateProduct(id, updateData) {
        const product = this.getProductById(id);
        if (product) {
            Object.assign(product, updateData);
        }
    }
    deleteProduct(id) {
        this.products = this.products.filter(p => p.id !== id);
    }
    getAllProducts() {
        return this.products;
    }
}
const manager = new ProductManager();
manager.createProduct({ id: 1, name: "Iphone", price: 999, category: "Smartphone" });
console.log(manager.getAllProducts());
console.log(manager.getProductById(1));
manager.updateProduct(1, { price: 444 });
console.log(manager.getProductById(1));
manager.deleteProduct(1);
console.log(manager.getAllProducts());
