import mysql2 from "mysql2";

export const db = mysql2.createConnection({
  host: "localhost",
  user: "Your User",
  password: "Your Password",
  database: "Your DB Name",
});
