import ProductService from "@services/products";
import express, { Request, Response } from "express";

class ProductController {
    static async create(request: Request, response: Response) {
        const { name, price } = request.body;
        const result = await ProductService.create(name, price);

        if (!result.success) {
            return response.status(400).json(result);
        }

        return response.status(201).json(result);
    }

    static async update(request: Request, response: Response) {
        const productId = parseInt(request.params.id, 10);
        const { name, price } = request.body;
        const result = await ProductService.update(productId, name, price);

        if (!result.success) {
            return response.status(400).json(result);
        }

        return response.json(result);
    }

    static async getAll(request: Request, response: Response) {
        const data = await ProductService.getAll();

        if (!data.success) {
            return response.status(400).json(data);
        }

        return response.json(data);
    }

    static async getSingle(request: Request, response: Response) {
        const data = await ProductService.getSingle(Number(request.params.id));

        if (!data.success) {
            return response.status(400).json(data);
        }

        return response.json(data);
    }

    static async deleteSingle(request: Request, response: Response) {
        const productId = parseInt(request.params.id, 10);
        const data = await ProductService.deleteSingle(productId);

        if (!data.success) {
            return response.status(400).json(data);
        }

        return response.json(data);
    }
}

export default ProductController;
