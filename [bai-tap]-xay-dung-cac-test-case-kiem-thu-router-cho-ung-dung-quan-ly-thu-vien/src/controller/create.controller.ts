import {publisherModel} from "../schemas/publisher.model";
import {categoryModel} from "../schemas/category.model";
import {keywordsModel} from "../schemas/keyword.model";
import {bookModel} from "../schemas/book.model";

 const controller = {
    createBook: undefined
};

export default controller;

controller.createBook = async (req, res) => {
    try {
        // tạo 1 model publisher mới
        const publisher = new publisherModel({
            name: req.body.publisher
        });

        // tạo 1 model category mới
        const category = new categoryModel({
            type: req.body.category
        });

        // tạo mới một model keyword
        const keyword = new keywordsModel({
            keyword: req.body.keyword
        })

        console.log(keyword)
        const newBook = new bookModel({
            title: req.body.title,
            author: req.body.author,
            category: category._id,
            publisher: publisher._id,
            keywords: [keyword]
        })
        // lưu lần lượt các model
        const p1 = publisher.save();
        const p2 = category.save();
        const p3 = newBook.save();
        // sử dụng Promise.all() để khiến tất cả cùng thực thi, chỉ cần 1 cái lỗi sẽ báo lỗi ngay
        const [publisherReturn, categoryReturn, book] = await Promise.all([p1, p2, p3])
        if (book) {
            res.render("success");
        } else {
            res.render("error");
        }
    } catch (err) {
        console.log(err.message);
        res.render("error");
    }
}
