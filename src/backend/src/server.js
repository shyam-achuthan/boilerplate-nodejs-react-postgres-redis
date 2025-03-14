require("dotenv").config();
const app = require("./app");
const db = require("./models");

const PORT = process.env.PORT || 3000;

// Database connection and server startup
const startServer = async () => {
  try {
    // Sync database (in production, you may want to remove force: true)
    await db.sequelize.sync({ force: false });
    console.log("Database connected successfully");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Unable to start server:", error);
    process.exit(1);
  }
};

startServer();
