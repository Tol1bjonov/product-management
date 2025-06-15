interface ProductInterfaces{
    id:number,
    name:string,
    price:number,
    category: string,
    description?: string
}

class ProductManager{
    private products: ProductInterfaces[]=[]

    createProduct(product:ProductInterfaces):void{
        this.products.push(product)
    }
    getProductById(id:number):ProductInterfaces | undefined{
        return this.products.find(p=> p.id === id)
    }
    updateProduct(id:number, updateData: Partial<ProductInterfaces>):void{
        const product = this.getProductById(id)
        if(product){
            Object.assign(product, updateData)
        }
    }
    deleteProduct(id:number):void{
        this.products = this.products.filter(p=> p.id !== id)
    }
    getAllProducts():ProductInterfaces[]{
        return this.products
    }
}
const manager =  new ProductManager()
manager.createProduct({id:1, name:"Iphone", price:999, category:"Smartphone"})
console.log(manager.getAllProducts())
console.log(manager.getProductById(1))
manager.updateProduct(1, {price: 444})
console.log(manager.getProductById(1))
manager.deleteProduct(1)
console.log(manager.getAllProducts())