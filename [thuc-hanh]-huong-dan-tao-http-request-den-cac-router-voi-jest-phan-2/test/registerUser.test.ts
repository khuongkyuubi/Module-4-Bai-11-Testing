import { userModel } from '../src/model/user.model';
import  { createUser }  from "../src/controller/user.controller"
import { NextFunction } from "express";
import app from "../index";
import request from 'supertest';


describe("Test create user", () => {
    it("test done", async () => {
        jest.spyOn(userModel.prototype, 'save').mockImplementationOnce(()=>Promise.resolve());
        const mockRequest: any = {
            body: {
                username: "test",
                password: "123456"
            }
        };

        const mockResponse: any = {
            status: jest.fn(),
            json: jest.fn(),
        };

        const mockNext: NextFunction = jest.fn();
        await createUser(mockRequest, mockResponse, mockNext);
        expect(mockResponse.status).toHaveBeenCalledWith(200);
    })
})

describe('User Endpoints', () => {
    it('should create a new user', async () => {
        const res = await request(app)
            .post('/api/v1/register')
            .send({
                username: 'hungnv2',
                password: '123456',
            })
        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('username')
    })
})