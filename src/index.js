// Entry
class Entry {
  constructor(date, amount, description) {
    this.date = date;
    this.amount = amount;
    this.description = description;
  }
  getFormattedAmount() {
    return `+${this.amount} €`;
  }
}

// Income
class Income extends Entry {
  constructor(date, amount, description) {
    super(date, amount, description);
    this.type = "income";
  }
}

// Expense
class Expense extends Entry {
  constructor(date, amount, description, paid) {
    super(date, amount, description);
    this.type = "expense";
    this.paid = paid;
  }
  getFormattedAmount() {
    return `-${this.amount} €`;
  }
}

// Budget
class Budget {
  constructor() {
    this.entries = [];
  }
  addEntry(entry) {
    this.entries.push(entry);
  }
  getTotalIncome() {
    let sum = 0;
    this.entries.forEach((element) => {
      if (element.type === "income") {
        sum += element.amount;
      }
    });
    return sum;
  }

  getTotalExpense() {
    let sum = 0;
    this.entries.forEach((element) => {
      if (element.type === "expense") {
        sum += element.amount;
      }
    });
    return sum;
  }

  getCurrentBalance() {
    if (!this.entries.length) {
      return 0;
    }
    return this.getTotalIncome() - this.getTotalExpense();
  }

  getFormattedEntries() {
    let formattedArray = [];
    for (const entry of this.entries) {
      const formattedString = `${entry.date} | ${
        entry.description
      } | ${entry.getFormattedAmount()}`;
      formattedArray.push(formattedString);
    }
    return formattedArray;
  }
}

const myBudget = new Budget();

const lotteryTime = new Income(
  "21-12-2023",
  2_000_000,
  "Won at the lotery",
  15
);

const vintedSales = new Income("24-12-2023", 50, "Sold my tv", 15);

const boughtACar = new Expense(
  "12-12-2023",
  13_000,
  "It's a new car",
  15,
  false
);

myBudget.addEntry(lotteryTime);
myBudget.addEntry(boughtACar);
myBudget.addEntry(vintedSales);

console.log(myBudget.getFormattedEntries());

// Bonus
// getTotal(type) {
//   let sum = 0
//   this.entries.forEach((entry) => {
//     if (entry.type === type) {
//       sum += entry.amount
//     }
//   })
// }
