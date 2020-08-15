import React from 'react';

// Components
import { Container } from 'react-bootstrap';
import Debt from '../components/Debt';

export default function DebtsList ( props ) {

    return (
        <Container className="mx-auto mt-3 mb-5" fluid="md">
            {
                props.debts.map( (debt, i) => {
                    console.log(debt)
                    return (<Debt key={i} debt={debt} removeDebt={props.removeDebt} />)
                })
            }
        </Container>
    );
}