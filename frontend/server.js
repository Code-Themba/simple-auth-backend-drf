const express = require("express");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const PORT = process.env.PORT || 5100;

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use("/api/users", require("./routes/user"));

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
