// In-memory data store
let data: { id: number; name: string; price: number }[] = [
    { id: 1, name: 'Product 1', price: 19.99 },
    { id: 2, name: 'Product 2', price: 29.99 },
];

class ProductService {
    static async create(name: string, price: number) {
        try {
            if (!name || !price) {
                return { success: false, content: 'Name and price are required' };
            }

            const dataLength = data.length;

            const newProduct = {
                id: data[dataLength - 1].id + 1,
                name,
                price,
            };

            data.push(newProduct);

            return { success: true, content: newProduct };
        }
        catch (error) {
            console.log((error as Error).message)
            return { success: false, content: 'Something went wrong!' };
        }
    }

    static async update(id: number, name: string, price: number) {
        try {
            const index = data.findIndex((p) => p.id === id);

            if (index !== -1) {
                data[index] = {
                    ...data[index],
                    name: name || data[index].name,
                    price: price || data[index].price,
                };
                return { success: true, content: data[index] };
            } else {
                return { success: false, content: 'Product Not Found' };
            }
        }
        catch (error) {
            console.log((error as Error).message)
            return { success: false, content: 'Something went wrong!' };
        }
    }

    static async getAll() {
        try {
            return { success: true, content: data };
        } catch (error) {
            console.log((error as Error).message)
            return { success: false, content: 'Something went wrong!' };
        }
    }

    static async getSingle(id: number) {
        try {
            const details = data.find((item) => item.id === id) ?? null;

            if (!details) {
                return { success: false, content: 'Product Not Found' };
            }

            return { success: true, content: details };
        }
        catch (error) {
            console.log((error as Error).message)
            return { success: false, content: 'Something went wrong!' };
        }
    }

    static async deleteSingle(id: number) {
        try {
            const index = data.findIndex((p) => p.id === id);

            if (index !== -1) {
                const deletedProduct = data.splice(index, 1);
                return { success: true, content: deletedProduct[0] };
            } else {
                return { success: false, content: 'Product Not Found' };
            }
        }
        catch (error) {
            console.log((error as Error).message)
            return { success: false, content: 'Something went wrong!' };
        }
    }
}

export default ProductService;
