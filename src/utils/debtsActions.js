import * as firebase from 'firebase';

export async function createDebt (state, check) {
    const debtsRef = await firebase.database().ref('debts');
    const value = parseFloat(state.value);
    // if ==> income
    if (check) {
      await debtsRef.push({
          description: state.description,
          value: + value,
          type: check
      });
      updateIncomes(+ value);
    } else {
      // ==> expense
      await debtsRef.push({
          description: state.description,
          value: - value,
          type: check
      });
      updateExpenses(- value);
    }
    
}

export function updateTotal (cant) {
    const totalRef = firebase.database().ref("totals").child("total");
    totalRef.update({
      value: totalRef.value+=cant
    });
}

export async function getIncomes () {
  const valueRef = firebase.database().ref("totals").child("incomes").child("value");
  await valueRef.on('value', (snapshot) => {
    const value = snapshot.val();
    return value;
  });
}

export async function updateIncomes (cant) {
    const incomesRef = firebase.database().ref("totals").child("incomes");
    const actualValue = getIncomes();
    console.log(await getIncomes());
    incomesRef.update({
      value: actualValue + cant
    });
}

export function updateExpenses (cant) {
    const expensesRef = firebase.database().ref("totals").child("expenses");
    expensesRef.update({
      value: cant
    });
}

export function deleteDebt (debt) {
  const debtRef = firebase.database().ref("debts").child(debt.id);
  debtRef.remove();
}
