import { useState, useEffect } from "react";

const useForm = (submitHandler, initialValues) => {
    const [values, setValues] = useState(initialValues);

    useEffect(() => {
        setValues(initialValues);
    }, [])

    const onChange = (e) => {
        setValues(state =>({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    const onSubmit = (e) => {
        e.preventDefault();

        submitHandler(values)
    };

    return {
        values,
        onChange,
        onSubmit,
    }
};

export default useForm;
