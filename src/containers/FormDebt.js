import React from 'react';

// Components
import Input from '../components/Input';
import Button from '../components/Button';
import Form from '../components/Form'
import CheckIcon from '@material-ui/icons/Check';

const FormDebt = (props) => {

    const [state, setState] = React.useState({
      description: "",
      value: "",
    });

    // Form Functions
    const handleSubmit = (e) => {
        e.preventDefault();
        props.addDebt(state)
        setState({
          description: "",
          value: "",
        });
    };

    const handleChange = (e) => {
        e.preventDefault();
        const value = e.target.value;
        setState({
        ...state,
        [e.target.name]: value,
        });
    };

    return (
      <Form onSubmit={handleSubmit}>
        <Input
          name="description"
          placeholder="Desciption"
          type="text"
          inputSize="300"
          onChange={handleChange}
          value={state.description}
        />
        <Input
          name="value"
          placeholder="Value"
          type="number"
          step="any"
          inputSize="100"
          onChange={handleChange}
          value={state.value}
        />
        <Button type="submit">
          <CheckIcon />
        </Button>
      </Form>
    );
}

export default FormDebt;