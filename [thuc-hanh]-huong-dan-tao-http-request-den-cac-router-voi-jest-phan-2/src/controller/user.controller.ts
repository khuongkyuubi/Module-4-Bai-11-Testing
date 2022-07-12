import express from "express";
import {userModel} from "../model/user.model";

export const createUser = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const userNew = new userModel(req.body);
        await userNew.save();
        res.status(200).json({username: userNew.username});
    } catch (err) {
        next(err); //Văng ra lỗi và nhảy vào middleware xử lý lỗi
    }
};