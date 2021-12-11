const fs = require("fs");
const pdf = require("html-pdf");

const htmlFile = fs.readFileSync("./index.html", "utf8");
const pdfOptions = { format: "Letter" };

pdf.create(htmlFile, pdfOptions).toFile("./test.pdf", function (err, res) {
    if (err) return console.log("error:", err);

    console.log("HTML TO PDF:", res);
});
