import express, { Request, Response, NextFunction } from "express";
import server from "./server";

const PORT = process.env.PORT
console.log("Port - ", process.env.PORT);

(async () => {
    const app = await server();

    app.listen(PORT, () => {
        console.log(`Server running on PORT : ${PORT}`);
    });
})();