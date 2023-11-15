import express from "express";
import bodyParser from "body-parser";

const port = 5000;

const dummyData = [
    {
        id: "1",
        item: "Buch",
        price: "9.99"
    },
    {
        id: "2",
        item: "Tasche",
        price: "200.00"
    },
    {
        id: "3",
        item: "Laptop",
        pirce: "3000.00"
    },
    {
        id: "4",
        item: "Handy",
        price: "1500.00"
    },
    {
        id: "5",
        item: "Heft",
        price: "2.00zhtrzhtjhztjuztujjuztuj"
    },
    {
        f: "GGHGUJJUGUJJUZJUJJUZJZUJJH"
    }
]

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", function (req, res) {
    res.json(dummyData)
})

app.listen(port, function () {
  console.log(`Server started on Port ${port}...`);
});
