import request from "supertest";
import app from "../index";
import {Request, Response, NextFunction} from "express";
import {bookModel} from "../src/schemas/book.model";
import controller from "../src/controller/create.controller";
import {Schema} from "mongoose";
import {keywordsSchema} from "../src/schemas/keyword.model";

describe("Test the root path", () => {
    // Test model
    it("test done", async () => {

        jest.spyOn(bookModel.prototype, 'save').mockImplementationOnce(() => Promise.resolve());
        const mockRequest: any = {
            body: {
                title: "String",
                author: "String"
            }
        };

        const mockResponse: any = {
            status: jest.fn(),
            json: jest.fn(),
        };

        const mockNext: NextFunction = jest.fn();
        await controller.createBook(mockRequest, mockResponse, mockNext);
        expect(mockResponse.status).toHaveBeenCalledWith(200);

    })

    test("It should response the GET method", async () => {
        const response = await request(app).get("/book/list");
        expect(response.statusCode).toBe(200);
    });
});