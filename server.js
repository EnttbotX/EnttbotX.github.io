const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;
const filePath = path.join(__dirname, "commentaries.txt");

app.use(express.json());

app.post("/save-comment", (req, res) => {
    const { comments } = req.body;

    if (!Array.isArray(comments)) {
        return res.status(400).json({ error: "Invalid data format. Expected an array of comments." });
    }

    fs.writeFile(filePath, JSON.stringify(comments, null, 2), (err) => {
        if (err) {
            console.error("Error writing to file:", err);
            return res.status(500).json({ error: "Failed to save comments." });
        }
        res.status(200).json({ message: "Comments saved successfully." });
    });
});

app.get("/comments", (req, res) => {
    if (fs.existsSync(filePath)) {
        res.sendFile(filePath);
    } else {
        res.status(404).json({ error: "No comments found." });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
