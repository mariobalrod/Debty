import React from 'react';
import * as firebase from 'firebase';

// Components
import Column from '../components/Column';
import Row from '../components/Row';
import CardType from '../components/CardType';
import Total from '../components/Total';
import DateComponent from '../components/Date';
import OptionCheck from '../components/OptionCheck';

// Container
import DebtsList from './DebtsList';
import FormDebt from './FormDebt';

// Utils
import { createDebt, deleteDebt } from '../utils/debtsActions';

// Firebase Config
import { firebaseConfig } from '../firebase/config';

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const App = () => {

  const MONTH_NAMES = {
    1: "JANUARY",
    2: "FEBRUARY",
    3: "MARCH",
    4: "APRIL",
    5: "MAY",
    6: "JUNE",
    7: "JULY",
    8: "AUGUST",
    9: "SEPTEMBER",
    10: "OCTOBER",
    11: "NOVEMBER",
    12: "DECEMBER",
  };

  const [ debts, setDebts ] = React.useState([]);
  const [ dateTime, setDateTime ] = React.useState(new Date());
  const [ check, setCheck ] = React.useState(true);
  
  React.useEffect(() => {
    const debtsRef = firebase.database().ref('/debts');
    debtsRef.on('value', (snapshot) => {
      const debts = snapshot.val();
      const debtsList = [];
      for (let id in debts) {
        debtsList.push({ id, ...debts[id] });
      }
      setDebts(debtsList);
    }); 

    const id = setInterval(() => setDateTime(new Date()), 1000);
    return () => {
      clearInterval(id);
    };
  }, []);

  const addDebt = async (state) => {
    if( state.description && state.value ){
      await createDebt(state, check);
    }
  }

  const removeDebt = async (debt) => {
    await deleteDebt(debt);
  }

  const handleChangeCheck = () => {
    setCheck(!check);
  }

  return (
    <Column className="mx-auto">
      <Row>
        <DateComponent>{`${MONTH_NAMES[dateTime.getMonth()]} ${dateTime.getFullYear()}`}</DateComponent>
      </Row>

      <Row>
        <h5>{dateTime.toLocaleTimeString()}</h5>
      </Row>

      <Row>
        <Total>0 $</Total>
      </Row>

      <Row>
        <CardType colorText="478744">Incomes<br/>+ 1000 $</CardType>
        <OptionCheck handleChangeCheck={handleChangeCheck} />
        <CardType colorText="D65555">Expenses<br/>- 1000 $</CardType>
      </Row>

      <Row>
        <FormDebt addDebt={addDebt} />
      </Row>

      <Row>
        <DebtsList debts={debts} removeDebt={removeDebt} />
      </Row>
    </Column>
  );
}

export default App;