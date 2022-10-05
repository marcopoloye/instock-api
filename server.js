const express = require("express");
const app = express();
const inventoryRoutes = require('./routes/inventory');
const warehouseRoutes = require('./routes/warehouse')
const cors = require('cors');

const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(cors());

app.use('/', inventoryRoutes);
app.use('/', warehouseRoutes);

app.listen(PORT, () => {
    console.log(`app running on port ${PORT}`)
 });