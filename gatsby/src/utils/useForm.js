import { useState } from 'react';

const useForm = (defaults) => {
  const [values, setValues] = useState(defaults);

  const updateValue = (e) => {
    const { value } = e.target;
    if (e.target.type === 'number') {
      parseInt(e.target.value);
    }
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  return { values, updateValue };
};

export default useForm;
