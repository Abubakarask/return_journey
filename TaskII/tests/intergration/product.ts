import ProductService from '@services/products';
import { expect } from 'chai';
import { describe, it } from 'mocha';
import sinon from 'sinon';
import server from 'server';
import request from 'supertest';

describe("Product API Tests", () => {
    describe("GET /api/products", () => {
        it("should return a list of products", async () => {
            const app = await server();
            const response = await request(app).get("/api/products");

            expect(response.status).to.equal(200);
            expect(Array.isArray(response.body.content)).to.be.true;
        });
    });

    describe('POST /api/products', () => {
        let sandbox: sinon.SinonSandbox;

        beforeEach(() => {
            // Create a sandbox for each test
            sandbox = sinon.createSandbox();
        });

        afterEach(() => {
            // Restore the sandbox after each test
            sandbox.restore();
        });

        it('should create a new product', async () => {
            const app = await server();
            const newProduct = {
                name: 'Sample Product',
                price: 20.99,
            };

            const response = await request(app)
                .post('/api/products')
                .send(newProduct);

            expect(response.status).to.equal(201);
            expect(response.body.content).to.have.property('id');
            expect(response.body.content.name).to.equal(newProduct.name);
            expect(response.body.content.price).to.equal(newProduct.price);
        });

        it('should send error when creating a new product with invalid data (null price)', async () => {
            const app = await server();
            const newProduct = {
                name: 'Invalid Product',
                price: null,
            };

            const response = await request(app)
                .post('/api/products')
                .send(newProduct);

            expect(response.status).to.equal(400);
        });

        it('should send error when creating a new product with invalid data (null name)', async () => {
            const app = await server();
            const newProduct = {
                name: null,
                price: '20',
            };

            const response = await request(app)
                .post('/api/products')
                .send(newProduct);

            expect(response.status).to.equal(400);
        });
    });

    describe('PUT /api/products/:id', () => {
        let sandbox;

        beforeEach(() => {
            sandbox = sinon.createSandbox();
        });

        afterEach(() => {
            sandbox.restore();
        });

        // Assuming data and server functions are properly defined

        it('should update details of a specific product with valid data', async () => {
            const app = await server();

            const productIdToUpdate = 1; // Assuming the ID exists in your data

            const updatedProductDetails = {
                name: 'Updated Product',
                price: 25.99,
            };

            const response = await request(app)
                .put(`/api/products/${productIdToUpdate}`)
                .send(updatedProductDetails);

            expect(response.status).to.equal(200);
            expect(response.body.content).to.have.property('id');
            expect(response.body.content.name).to.equal(updatedProductDetails.name);
            expect(response.body.content.price).to.equal(updatedProductDetails.price);
        });

        it('should update details of a specific product with partial data', async () => {
            const app = await server();

            const productIdToUpdate = 1;

            const updatedProductDetails = {
                name: 'Updated Product Name',
            };

            const response = await request(app)
                .put(`/api/products/${productIdToUpdate}`)
                .send(updatedProductDetails);

            expect(response.status).to.equal(200);
            expect(response.body.content).to.have.property('id');
            expect(response.body.content.name).to.equal(updatedProductDetails.name);
        });

        it('should return an error when updating a non-existing product', async () => {
            const app = await server();

            const nonExistingProductId = 999; // Assuming the ID does not exist in your data

            const updatedProductDetails = {
                name: 'Updated Product',
                price: 25.99,
            };

            const response = await request(app)
                .put(`/api/products/${nonExistingProductId}`)
                .send(updatedProductDetails);

            expect(response.status).to.equal(400);
            expect(response.body.content).to.equal('Product Not Found');
        });
    });

});
