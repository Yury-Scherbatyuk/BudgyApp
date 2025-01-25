export class Transaction {
  id: number;
  category_id: number;
  amount: number;
  date: number;
  description: string;
  type: "Expense" | "Income";

  constructor(id: number, category_id: number, amount: number, date: number, description: string, type: "Expense" | "Income") {
    this.id = id;
    this.category_id = category_id;
    this.amount = amount;
    this.date = date;
    this.description = description;
    this.type = type;
  }
}

export class Category {
  id: number;
  name: string;
  type: "Expense" | "Income";

  constructor(id: number, name: string, type: "Expense" | "Income") {
    this.id = id;
    this.name = name;
    this.type = type;
  }
}

export class User {
  id: number;
  name: string;
  email: string;

  constructor(id: number, name: string, email: string) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
}

export interface TransactionsByMonth {
  totalExpenses: number;
  totalIncome: number;
}