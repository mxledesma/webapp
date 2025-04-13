export interface Expense{

    id?: number;   // make it ? optional becuase it is generated in the backend.
    expenseId?: string;
    name: string;
    note: string;
    amount: number;
    date: string;
    category: string;
}