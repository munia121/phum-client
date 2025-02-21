import { Button, Pagination, Space, Table, TableColumnsType, TableProps } from "antd";
import { useState } from "react";
import { TQueryParams } from "../../../types/global";
import { useGetAllStudentsQuery } from "../../../redux/featurs/admin/userManagement.api";
import { TStudent } from "../../../types/userManagement.type";
import { Link } from "react-router-dom";

export type TTableData = Pick<
    TStudent, 'id' | 'name' | 'fullName' | 'email' | 'contactNo'
>;



const StudentData = () => {
    const [params, setParams] = useState<TQueryParams[]>([])
    const [page, setPage] = useState(1)


    const { data: studentData, isLoading } = useGetAllStudentsQuery([
        // {name:'limit', value: 4},
        { name: 'page', value: page },
        { name: 'sort', value: 'id' },

        ...params])
    console.log("academic semester", studentData)


    const metaData = studentData?.meta

    const tableData = studentData?.data?.map(
        ({ _id, fullName, id, email, contactNo }) => ({
            _id, fullName, id, email, contactNo
        }))

    console.log(tableData)


    const columns: TableColumnsType<TTableData> = [

        {
            title: 'Name',
            key: 'name',
            dataIndex: 'fullName',

        },
        {
            title: 'RollNo.',
            key: 'id',
            dataIndex: 'id',

        },
        {
            title: 'Email',
            key: 'email',
            dataIndex: 'email',

        },
        {
            title: 'Contact No.',
            key: 'contactNo',
            dataIndex: 'contactNo',

        },
        {
            title: 'Action',
            key: 'x',
            render: (item) => {
                console.log(item)
                return (
                    <Space>
                        <Link to={`/admin/student-data/${item._id}`}>
                            <Button >Details</Button>
                        </Link>
                        <Button>Update</Button>
                        <Button>Block</Button>
                    </Space>
                )
            },
            width: '1%'
        }
    ];

    const onChange: TableProps<TTableData>['onChange'] = (_pagination, filters, _sorter, extra) => {
        console.log('params', filters, extra);
        if (extra.action === 'filter') {
            const queryParams: TQueryParams[] = []

            filters.name?.forEach((item) =>
                queryParams.push({ name: 'name', value: item })
            )
            filters.year?.forEach((item) =>
                queryParams.push({ name: 'year', value: item })
            )

            setParams(queryParams);
        }
    };

    if (isLoading) {
        return <p>Loading...</p>
    }

    return (
        <div>
            this is academic semester page
            <Table<TTableData>
                loading={isLoading}
                columns={columns}
                dataSource={tableData}
                onChange={onChange}
                showSorterTooltip={{ target: 'sorter-icon' }}
                pagination={false}
            />
            <Pagination
                current={page}
                pageSize={metaData?.limit}
                total={metaData?.total}
                onChange={(value) => setPage(value)}
            ></Pagination>
        </div>
    );
};

export default StudentData;