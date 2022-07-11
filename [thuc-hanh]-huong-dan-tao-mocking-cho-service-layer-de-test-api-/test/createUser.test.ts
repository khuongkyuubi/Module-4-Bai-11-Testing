import {userModel} from "../src/model/user.model";
import {createUser} from "../src/controller/user.controller";
import {NextFunction} from "express";

describe("Test create user", () => {
    it("test done", async () => {
        jest.spyOn(userModel.prototype, 'save').mockImplementationOnce(() => Promise.resolve());
        const mockRequest: any = {
            body: {
                username: "test",
                password: "123456"
            }
        };
        const mockResponse: any = {
            status: jest.fn(),
            json: jest.fn()
        };
        const mockNext: NextFunction = jest.fn();
        await createUser(mockRequest, mockResponse, mockNext);
        expect(mockResponse.status).toHaveBeenCalledWith(200)
    })
});