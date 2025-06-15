# Product Management App - TypeScript OOP

This is the final TypeScript project for my Mohirdev course.

## Description

A simple product management system implemented using Object-Oriented Programming (OOP) in TypeScript.  
This app allows you to perform basic **CRUD** operations on a list of products.

## Features

- `createProduct()` – Creates a new product.
- `getProductById(id)` – Returns a product by its ID.
- `updateProduct(id, updatedData)` – Updates a product's information.
- `deleteProduct(id)` – Deletes a product by its ID.
- `getAllProducts()` – Returns all existing products.

## Technologies Used

- TypeScript
- Object-Oriented Programming

## Usage

```ts
const manager = new ProductManager();

manager.createProduct({ id: 1, name: "iPhone 12", price: 999, category: "Smartphone" });
console.log(manager.getAllProducts());
