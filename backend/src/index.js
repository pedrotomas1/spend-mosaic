const express = require("express");
require("dotenv").config();

console.log("Database dialect:", process.env.DB_DIALECT);

const app = express();
const port = 5000;

app.use(express.json());
const sequelize = require("./config/database");
const Expense = require("./models/Expense");

sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("Database synced!");
    // Start your server here
  })
  .catch((err) => {
    console.error("Failed to sync database:", err);
  });

Expense.create({
  name: "Groceries",
  amount: 50.75,
  category: "Food",
  description: "buy food for the week",
  date: new Date(),
})
  .then((expense) => {
    console.log("New expense created:", expense.toJSON());
  })
  .catch((error) => {
    console.error("Error creating expense:", error);
  });

let expenses = [];
let idCounter = 1;

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.get("/expenses", function (req, res) {
  res.status(200).json(expenses);
});

app.get("/expenses/:id", function (req, res) {
  const id = req.params.id;

  if (!id) {
    return res.status(400).json({ error: "Expense id not provided" });
  }
  const expense = expenses.filter((ex) => ex.id == id);

  res.status(200).json(expense);
});

app.post("/expenses", function (req, res) {
  const { name, amount, date } = req.body;

  if (!name || !amount || !date) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const newExpense = { id: idCounter++, name, amount, date };
  expenses.push(newExpense);
  res.status(201).json(newExpense);
});

app.put("/expenses/:id", function (req, res) {
  const { name, amount, date } = req.body;
  const id = req.params.id;

  expenses = expenses.map((ex) => {
    if (ex.id == id) {
      return {
        id,
        name,
        amount,
        date,
      };
    }
    return ex;
  });

  res.status(200).send();
});

app.delete("/expenses/:id", function (req, res) {
  const id = req.params.id;

  if (!id) {
    return res.status(400).json({ error: "Expense id is mandatory" });
  }

  expenses = expenses.filter((ex) => ex.id != id);

  return res.status(200).json({});
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
