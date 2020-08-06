import React from 'react';

// Components
import { Container } from 'react-bootstrap';
import Debt from '../components/Debt';

export default function DebtsList ( props ) {

    return (
        <Container className="mx-auto mt-3" fluid="md">
            {
                props.debts.map( (debt, i) => {
                    return (<Debt key={i} debt={debt} className="panel" />)
                })
            }
        </Container>
    );
}