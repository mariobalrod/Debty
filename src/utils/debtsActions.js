import * as firebase from 'firebase';

export async function createDebt (state) {
    const newDebtKey = await firebase.database().ref().child('/debts').push().key;
    
    await firebase.database().ref('/debts/' + newDebtKey).set({
        description: state.description,
        value: parseFloat(state.value)
    });
}

export async function fetchAllDebts () {
    const debts = await firebase.database().ref('/debts');
    const res = await debts.once('value');
    // Exist any value
    if (res.val()) {
        // Pass Object Prototype to Array
        const data =  Object.values(res.val());
        return data;   
    } else {
        return [];
    }
}
