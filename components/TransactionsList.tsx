import * as React from "react";
import { Category, Transaction } from "../types";
import { View, Text, TouchableOpacity } from "react-native";
import TransactionsListItem from "./TransactionsListItem";

export default function TransactionsList({
  transactions,
  categories,
  deleteTransaction,
}: {
  categories: Category[];
  transactions: Transaction[];
  deleteTransaction: (id: number) => Promise<void>;
}) {
  return (
    <View style={{ gap: 15 }}>
      {transactions.map((transaction) => {
        const categoryForCurrentTransaction = categories.find((category) => category.id === transaction.category_id);
        return (
          <TouchableOpacity
            key={transaction.id}
            activeOpacity={0.7}
            onLongPress={() => deleteTransaction(transaction.id)}
          >
            <TransactionsListItem transaction={transaction} categoryInfo={categoryForCurrentTransaction} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
