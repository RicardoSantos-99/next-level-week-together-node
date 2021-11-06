import { createConnection } from "typeorm";

(async () => {
  const database = await createConnection();

  if (database.isConnected) {
    console.log("Database connected");
  }
})();