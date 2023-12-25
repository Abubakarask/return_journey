import express, { Request, Response } from "express";
import FrameworkLoader from "./loaders/v1/framework";
import Env from "./loaders/v1/env";
import ProductRouter from "@api/v1/products";
import SnowFlake from "loaders/v1/snowflake";
import loggerMiddleware from "middlewares/v1/logger";

const server = async (): Promise<express.Application> => {
    const app = express();

    //Loaders
    Env.Loader();
    SnowFlake.Loader();
    FrameworkLoader(app);

    //Middlewares
    app.use(loggerMiddleware);

    //Routes
    app.use("/api/products", ProductRouter);

    return app;
};

export default server;
