import * as firebase from 'firebase';

export async function createDebt (state) {
    const debtsRef = await firebase.database().ref('debts');
    
    await debtsRef.push({
        description: state.description,
        value: parseFloat(state.value)
    });
}

export function updateTotal (cant) {
    const totalRef = firebase.database().ref("totals").child("total");
    totalRef.update({
      value: totalRef.value+=cant
    });
}

export function updateIncomes (cant) {
    const incomesRef = firebase.database().ref("totals").child("incomes");
    incomesRef.update({
      value: incomesRef.value+=cant
    });
}

export function updateExpenses (cant) {
    const expensesRef = firebase.database().ref("totals").child("expenses");
    expensesRef.update({
      value: expensesRef.value+=cant
    });
}

export function deleteDebt (id) {
  const debtRef = firebase.database().ref("debts").child(id);
  debtRef.remove();
}
