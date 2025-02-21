import { Button, Col, Divider, Form, Input, Row } from "antd";
import PHForm from "../../../component/Form/PHForm";
import PHInput from "../../../component/Form/PHInput";
import { Controller, FieldValues, SubmitHandler } from "react-hook-form";
import PHSelect from "../../../component/Form/PHSelect";
import { bloodGroupOptions, genderOptions } from "../../../component/constans/global";
import PHDatePicker from "../../../component/Form/PHDatePicker";
import { useGetAcademicFacultiesQuery, useGetAllSemesterQuery } from "../../../redux/featurs/admin/acdamicManagementApi";
import { useAddStudentMutation } from "../../../redux/featurs/admin/userManagement.api";

const studentDummyData = {
    password: 'student123',
    student: {
        name: {
            firstName: "Munia",
            middleName: "Akter",
            lastName: "Jahan"
        },
        gender: "Female",
        dateOfBirth: "2001-05-15",
        email: "munia@example.com",
        contactNo: "017XXXXXXXX",
        emergencyContactNo: "018XXXXXXXX",
        bloodGroup: "O+",
        presentAddress: "Dhaka, Bangladesh",
        parmanentAddress: "Chattogram, Bangladesh",
        guardian: {
            fatherName: "Md. Rahim",
            fatherOccupation: "Business",
            fatherContactNo: "017XXXXXXXX",
            motherName: "Rokeya Begum",
            motherOccupation: "Teacher",
            motherContactNo: "018XXXXXXXX"
        },
        localGuardian: {
            name: "Aminul Islam",
            occupation: "Engineer",
            contactNo: "019XXXXXXXX",
            address: "Mirpur, Dhaka"
        },
        profileImage: "https://example.com/profile.jpg",
        admissionSemister: "60d0fe4f5311236168a109cb",
        academicDepartment: "60d0fe4f5311236168a109cc",
        academicFaculty: "60d0fe4f5311236168a109cd",
        isDeleted: false
    }


}

//!This is only for development 

const studentDefaultValues = {
        name: {
            "firstName": "Munia",
            "middleName": "Akter",
            "lastName": "Jahan"
        },
        gender: "female",
        email: "munia@example.com",
        contactNo: "01712345678987",
        emergencyContactNo: "01712345678987",
        bloodGroup: "O+",
        presentAddress: "Dhaka, Bangladesh",
        parmanentAddress: "Chattogram, Bangladesh",
        guardian: {
            fatherName: "Md. Rahim",
            fatherOccupation: "Business",
            fatherContactNo: "01712345678987",
            motherName: "Rokeya Begum",
            motherOccupation: "Teacher",
            motherContactNo: "01712345678987"
        },
        localGuardian: {
            name: "Aminul Islam",
            occupation: "Engineer",
            contactNo: "01712345678987",
            address: "Mirpur, Dhaka"
        },
        profileImage: "https://example.com/profile.jpg",
        admissionSemister: "67b42aaa02786c18b4506e34",
        academicDepartment: "67a8bd46881319b248ec68fc",
        academicFaculty: "67a8bca1881319b248ec68f8",
        isDeleted: false

}




const CreateStudent = () => {
    const [addStudent, {data, error}] = useAddStudentMutation()

    console.log({data, error})

    const { data: sData, isLoading: sIsLoading } =
        useGetAllSemesterQuery(undefined);


        const { data: dData, isLoading: dIsLoading } =
        useGetAcademicFacultiesQuery(undefined);

    const semesterOptions = sData?.data?.map((item) => ({
        value: item._id,
        label: `${item.name} ${item.year}`,
    }));

      const departmentOptions = dData?.data?.map((item) => ({
        value: item._id,
        label: item.name,
      }));


    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        console.log(data)

        const studentData = {
            password: 'student123',
            student:data
        }

        const formData =  new FormData()

        formData.append('data', JSON.stringify(studentData))
        formData.append('file', data.image)

        addStudent(formData)

    }


    return (

        // <Row>
        //     <Col span={24}>
        //         <PHForm onSubmit={onSubmit}>
        //             <Row gutter={8}>
        //                 <Col span={24} md={{span:12} } lg={{span:8}}>
        //                     <PHInput type="text" name="name.firstName" label="First Name"></PHInput>
        //                 </Col>
        //                 <Col span={24} md={{span:12} } lg={{span:8}}>
        //                     <PHInput type="text" name="name.middleName" label="Middle Name"></PHInput>
        //                 </Col>
        //                 <Col span={24} md={{span:12} } lg={{span:8}}>
        //                     <PHInput type="text" name="name.lastName" label="Last Name"></PHInput>
        //                 </Col>
        //             </Row>
        //             <Button htmlType="submit">Submit</Button>
        //         </PHForm>
        //     </Col>
        // </Row>


        <Row justify="center">
            <Col span={24}>
                <PHForm onSubmit={onSubmit} defaultValues={studentDefaultValues}>
                    <Divider>Personal Info.</Divider>
                    <Row gutter={8}>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <PHInput type="text" name="name.firstName" label="First Name" />
                        </Col>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <PHInput type="text" name="name.middleName" label="Middle Name" />
                        </Col>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <PHInput type="text" name="name.lastName" label="Last Name" />
                        </Col>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <PHSelect options={genderOptions} name="gender" label="Gender" />
                        </Col>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <PHDatePicker name="dateOfBirth" label="Date of birth" />
                        </Col>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <PHSelect
                                options={bloodGroupOptions}
                                name="bloodGroup"
                                label="Blood group"
                            />
                        </Col>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <Controller
                                name="image"
                                render={({ field: { onChange, value, ...field } }) => (
                                    <Form.Item label="Picture">
                                        <Input
                                            type="file"
                                            value={value?.fileName}
                                            {...field}
                                            onChange={(e) => onChange(e.target.files?.[0])}
                                        />
                                    </Form.Item>
                                )}
                            />
                        </Col>
                    </Row>
                    <Divider>Contact Info.</Divider>
                    <Row gutter={8}>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <PHInput type="text" name="email" label="Email" />
                        </Col>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <PHInput type="text" name="contactNo" label="Contact" />
                        </Col>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <PHInput
                                type="text"
                                name="emergencyContactNo"
                                label="Emergency Contact"
                            />
                        </Col>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <PHInput
                                type="text"
                                name="presentAddress"
                                label="Present Address"
                            />
                        </Col>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <PHInput
                                type="text"
                                name="permanentAddress"
                                label="Permanent Address"
                            />
                        </Col>
                    </Row>
                    <Divider>Guardian</Divider>
                    <Row gutter={8}>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <PHInput
                                type="text"
                                name="guardian.fatherName"
                                label="Father Name"
                            />
                        </Col>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <PHInput
                                type="text"
                                name="guardian.fatherOccupation"
                                label="Father Occupation"
                            />
                        </Col>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <PHInput
                                type="text"
                                name="guardian.fatherContactNo"
                                label="Father ContactNo"
                            />
                        </Col>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <PHInput
                                type="text"
                                name="guardian.motherName"
                                label="Mother Name"
                            />
                        </Col>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <PHInput
                                type="text"
                                name="guardian.motherOccupation"
                                label="Mother Occupation"
                            />
                        </Col>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <PHInput
                                type="text"
                                name="guardian.motherContactNo"
                                label="Mother ContactNo"
                            />
                        </Col>
                    </Row>
                    <Divider>Local Guardian</Divider>
                    <Row gutter={8}>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <PHInput type="text" name="localGuardian.name" label="Name" />
                        </Col>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <PHInput
                                type="text"
                                name="localGuardian.occupation"
                                label="Occupation"
                            />
                        </Col>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <PHInput
                                type="text"
                                name="localGuardian.contactNo"
                                label="Contact No."
                            />
                        </Col>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <PHInput
                                type="text"
                                name="localGuardian.address"
                                label="Address"
                            />
                        </Col>
                    </Row>
                    <Divider>Academic Info.</Divider>
                    <Row gutter={8}>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <PHSelect
                                options={semesterOptions}
                                disabled={sIsLoading}
                                name="admissionSemester"
                                label="Admission Semester"
                            />
                        </Col>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <PHSelect
                                  options={departmentOptions}
                                  disabled={dIsLoading}
                                name="academicDepartment"
                                label="Admission Department"
                            />
                        </Col>
                    </Row>

                    <Button htmlType="submit">Submit</Button>
                </PHForm>
            </Col>
        </Row>
    );
};

export default CreateStudent;