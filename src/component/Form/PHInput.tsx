import { Form, Input } from "antd";
import { Controller } from "react-hook-form";


type InputProps = {
    type:string;
    name:string;
    label?:string;
}

const PHInput = ({type, name, label} : InputProps) => {

    // const {register} =  useFormContext()

    return (
        <>
            {/* {label ? label : null} */}
            <Controller 
                name={name} 
                render={({field}) => (
                    <Form.Item label={label}>
                        <Input {...field} type={type} id={name}  />
                    </Form.Item>
                )
                
                }
            
            ></Controller>
        </>
    )
};

export default PHInput;