import { Button, Table, TableColumnsType, TableProps } from "antd";
import { useGetAllSemesterQuery } from "../../../redux/featurs/admin/acdamicManagementApi";
import { TAcademicSemester } from "../../../types/academicManagement.type";
import { useState } from "react";
import { TQueryParams } from "../../../types/global";

export type TTableData = Pick<
  TAcademicSemester,
  '_id' |'name' | 'year' | 'startMonth' | 'endMonth'
>;



const AcademicSemester = () => {
    const [params, setParams] = useState<TQueryParams[] | undefined>(undefined)

    const { data : semesterData,  isLoading } = useGetAllSemesterQuery(params)
    // console.log("academic semester", semesterData)

    const tableData = semesterData?.data?.map(
        ({_id, name, startMonth, endMonth, year}) =>({
            _id, name, startMonth,endMonth, year
        }))

    const columns: TableColumnsType<TTableData> = [
        {
            title: 'Name',
            dataIndex: 'name',
            showSorterTooltip: { target: 'full-header' },
            filters: [
                {
                    text: 'Autumn',
                    value: 'Autumn',
                },
                {
                    text: 'Fall',
                    value: 'Fall',
                },
                {
                    text: 'Summer',
                    value: 'Summer',
                },
            ],
           
        },
        {
            title: 'Year',
            key:'year',
            dataIndex: 'year',
            filters: [
                {
                    text: '2025',
                    value: '2025',
                },
                {
                    text: '2026',
                    value: '2026',
                },
                {
                    text: '2027',
                    value: '2027',
                },
            ],
        },
        {
            title: 'Start Month',
            key:'startMonth',
            dataIndex: 'startMonth',
        },
        {
            title: 'End Month',
            key:'endMonth',
            dataIndex: 'endMonth',
        },
        {
            title:'Action',
            key: 'x',
            render: () =>{
                return (
                    <div>
                        {' '}
                        <Button>Update</Button>
                    </div>
                )
            }
        }
    ];

    const onChange: TableProps<TTableData>['onChange'] = (_pagination, filters, _sorter, extra) => {
        console.log('params',  filters,  extra);
        if(extra.action === 'filter'){
            const queryParams:TQueryParams[] = []

            filters.name?.forEach((item) =>
                queryParams.push({name:'name', value: item})
            )
            filters.year?.forEach((item) =>
                queryParams.push({name:'year', value: item})
            )

            setParams(queryParams);
        }
      };

      if(isLoading){
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
            />
        </div>
    );
};

export default AcademicSemester;