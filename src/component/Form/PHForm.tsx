import { Form } from "antd";
import { ReactNode } from "react";
import { FieldValues, FormProvider, SubmitHandler, useForm, UseFormProps } from "react-hook-form";

type TFormProps = {
    onSubmit: SubmitHandler<FieldValues>;
    children: ReactNode;
    resolver?: UseFormProps<FieldValues>["resolver"]; // Ensuring correct type
    defaultValues?: UseFormProps<FieldValues>["defaultValues"]
};

const PHForm = ({ onSubmit, children, resolver,defaultValues}: TFormProps) => {
    const methods = useForm<FieldValues>({ resolver, defaultValues }); // Fixed resolver usage

    const submit = (data: FieldValues) =>{
        onSubmit(data)
        methods.reset()
    }

    return (
        <FormProvider {...methods}>
            <Form layout="vertical" onFinish={methods.handleSubmit(submit)}>
                {children}
            </Form>
        </FormProvider>
    );
};

export default PHForm;
