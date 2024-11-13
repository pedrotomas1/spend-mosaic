const express = require("express");
require("dotenv").config();
const sequelize = require("./config/database");
const Expense = require("./models/Expense");

const app = express();
const port = 5000;

sequelize
  .sync(/*{ alter: true }*/)
  .then(() => {
    console.log("Database synced!");
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("Failed to sync database:", err);
  });

app.use(express.json());

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.get("/expenses", async function (req, res) {
  try {
    const expenses = await Expense.findAll();
    res.status(200).json(expenses);
  } catch (error) {
    console.error("Error retrieving expenses:", error);
    res
      .status(500)
      .json({ error: "An error occurred while retrieving expenses" });
  }
});

app.get("/expenses/:id", async function (req, res) {
  const id = req.params.id;

  if (!id) {
    return res.status(400).json({ error: "Expense id not provided" });
  }

  try {
    const expense = await Expense.findByPk(id);
    res.status(200).json(expense);
  } catch (error) {
    console.error("Error retrieving expenses:", error);
    res
      .status(500)
      .json({ error: "An error occurred while retrieving expenses" });
  }
});

app.post("/expenses", function (req, res) {
  const { date, amount, category, memo } = req.body;

  if (!date || !amount || !category) {
    return res.status(400).json({ error: "All fields are required" });
  }

  Expense.create({
    date,
    amount,
    category,
    memo,
  })
    .then((expense) => res.status(201).json(expense))
    .catch((err) => res.status(500).json({ err }));
});

app.put("/expenses/:id", async function (req, res) {
  const { date, amount, category, memo } = req.body;
  const id = req.params.id;

  const expense = await Expense.findByPk(id);

  if (!expense) {
    return res.status(404).json({ error: "Expense not found" });
  }

  await expense
    .update({
      date: date || expense.date,
      amount: amount || expense.amount,
      category: category || expense.category,
      memo: memo || expense.memo,
    })
    .then((expense) => {
      res
        .status(200)
        .json({ message: "Expense updated successfully", expense });
    })
    .catch((error) => {
      console.error("Error updating expense:", error);
      res
        .status(500)
        .json({ error: "An error occurred while retrieving expenses" });
    });
});

app.delete("/expenses/:id", async function (req, res) {
  const expenseId = req.params.id;

  if (!expenseId) {
    return res.status(400).json({ error: "Expense id is mandatory" });
  }

  try {
    const deleteCount = await Expense.destroy({
      where: { id: expenseId },
    });

    if (deleteCount === 0) {
      res.status(404).json({ error: "Expense not found" });
    }

    res.status(200).json({ message: "Expense deleted successfully" });
  } catch (error) {
    console.error("Error deleting expense:", error);
    res
      .status(500)
      .json({ error: "An error occurred while deleting the expense" });
  }
});
