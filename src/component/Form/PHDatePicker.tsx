import { DatePicker, Form, Input } from "antd";
import { Controller } from "react-hook-form";


type TDatePickerProps = {
    name:string;
    label?:string;
}

const PHDatePicker = ({ name, label} : TDatePickerProps) => {

    // const {register} =  useFormContext()

    return (
        <>
            {/* {label ? label : null} */}
            <Controller 
                name={name} 
                render={({field}) => (
                    <Form.Item label={label}>
                       <DatePicker {...field}  style={{width:"100%"}}></DatePicker>
                    </Form.Item>
                )
                
                }
            
            ></Controller>
        </>
    )
};

export default PHDatePicker;