/* eslint-disable @typescript-eslint/no-unused-vars */
import { FieldValues, SubmitHandler } from "react-hook-form";

import { Button, Col, Flex } from "antd";

import { monthOptions } from "../../../component/constans/global";
import { zodResolver } from "@hookform/resolvers/zod";
import {z} from 'zod'
import { toast } from "sonner";
import { useAddAcademicSemesterMutation } from "../../../redux/featurs/admin/acdamicManagementApi";
import PHForm from "../../../component/form/PHForm";
import PHSelect from "../../../component/form/PHSelect";
import { TResponse } from "../../../types/global";


const academicSemesterSchema = z.object({
    name: z.string( {required_error:"Semester name is required"}),
    year: z.string( {required_error:"Year is required"}),
    startMonth: z.string( {required_error:"Start month is required"}),
    endMonth: z.string( {required_error:"End month is required"}),
})

const CreateAcademicSemester = () => {

    const [addAcademicSemester] = useAddAcademicSemesterMutation()

    const nameOptions = [
        {
            value:'01',
            label:"Autumn"
        },
        {
            value:'02',
            label:"Summer"
        },
        {
            value:'03',
            label:"Fall"
        },
    ]


    const currentYear = new Date().getFullYear();
    const yearOptions = [0,1, 2, 3, 4].map((number) =>({
        value: String(currentYear + number),
        label: String(currentYear + number)
    }))

    console.log(yearOptions)

    const onSubmit: SubmitHandler<FieldValues> =async (data) => {

        const toastId = toast.loading('Creating...')

        const name = nameOptions[Number(data?.name) -1]?.label

        const semesterData ={
            name,
            code: data.name,
            year:data.year,
            startMonth: data.startMonth,
            endMonth: data.endMonth
        }
        
        
        console.log (semesterData)
        try {
            const res = await addAcademicSemester(semesterData) as TResponse
            console.log(res)

            if(res.error){
                toast.error(res.error.data.message,{id:toastId})
            }
            else{
                toast.success('Semester created',{id:toastId})
            }
            
        } catch (error) {
            toast.error('Something went wrong',{id:toastId})
        }

    }


    return (
        <Flex justify="center" align="center">
            <Col span={6}>
                <PHForm  onSubmit={onSubmit} resolver={zodResolver(academicSemesterSchema)}>
                    <PHSelect 
                    label='name' 
                    name='name' 
                    options={nameOptions}
                    ></PHSelect>
                    <PHSelect label="Year" name="year" options={yearOptions}></PHSelect>
                    <PHSelect label="Start Month" name="startMonth" options={monthOptions}></PHSelect>
                    <PHSelect label="End Month" name="endMonth" options={monthOptions}></PHSelect>
                    <Button htmlType="submit">Submit</Button>
                </PHForm>
            </Col>
        </Flex>
    );
};

export default CreateAcademicSemester;