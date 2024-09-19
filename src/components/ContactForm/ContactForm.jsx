import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from "react";
import { nanoid } from 'nanoid';
import * as Yup from "yup";
import InputMask from "react-input-mask";

import clsx from "clsx";
import css from "./ContactForm.module.css";

const ContactSchema = Yup.object().shape({
    name: Yup.string()
        .matches(/^[A-Za-z\s'-]+$/, "This field must contain only letters and spaces")
        .min(2, "Too short!")
        .max(50, "Too long!")
        .required("This field is required"),
    number: Yup.string()
        .matches(/^\d{3}-\d{2}-\d{2}$/, "The number must be in format XXX-XX-XX")
        .required("This field is required"),
});

const initialValues = {
    name: "",
    number: "",
};

export default function ContactForm({ onAdd }) {
    const nameFieldId = useId();
    const numberFieldId = useId();

    const handleSubmit = (values, actions) => {
        const newContact = {
            id: nanoid(),
            name: values.name,
            number: values.number
        };

        onAdd(newContact);
        actions.resetForm();
    };

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={ContactSchema}
        >
            <Form className={clsx(css.form)}>
                <label htmlFor={nameFieldId} className={clsx(css.text)}>Name</label>
                <Field
                    className={clsx(css.input)}
                    id={nameFieldId}
                    type="text"
                    name="name"
                />
                <ErrorMessage name="name" component="span" className={clsx(css.error)} />

                <label htmlFor={numberFieldId} className={clsx(css.text)}>Number</label>
                <Field
                    className={clsx(css.input)}
                    id={numberFieldId}
                    type="text"
                    name="number"
                    as={InputMask}
                    mask="999-99-99"
                    placeholder="XXX-XX-XX"
                />
                <ErrorMessage name="number" component="span" className={clsx(css.error)} />

                <button type="submit" className={clsx(css.btn)}>Add contact</button>
            </Form>
        </Formik>
    )
}