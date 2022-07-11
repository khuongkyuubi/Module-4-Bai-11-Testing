import request from "supertest";
import app from "../index";

describe("GET / - Get at root path", () => {
    test("It should response GET method", async () => {
        // Tạo 1 request giả đến thằng app và mong chờ nó sẽ phản hồi về 1 status code là 200
        const response = await request(app).get("/"); // kiểm tra method get tại root path "/" và mong muốn trả về status code là 200
        expect(response.statusCode).toBe(200);
    })
})
