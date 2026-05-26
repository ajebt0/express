import express from 'express';

import apiRoutes from "./routes/api.js";
import pageRoutes from "./routes/pages.js";

const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", apiRoutes);
app.use("/", pageRoutes);

app.listen(port, () => {
    console.log(`Server started 'http://localhost:3000'`);
});