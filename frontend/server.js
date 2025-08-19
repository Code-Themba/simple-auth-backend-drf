const express = require("express");
require("dotenv").config();

const PORT = process.env.PORT || 5100;

const app = express();

app.use(express.json());
app.use("/api/users", require("./routes/user"));

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
