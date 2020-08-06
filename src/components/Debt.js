import React from 'react';

// Components
import { Row, Col } from 'react-bootstrap';
import ClearIcon from '@material-ui/icons/Clear';

export default function Debt (props) {

    const { description, value } = props.debt;

    return (
        <Row className="mt-5" style={{textAlign: "center"}}>
            <Col>{description}</Col>
            <Col>
                <h6 id="value">{value}</h6>
                <ClearIcon className="closeIcon" />
            </Col>
        </Row>
    );
}