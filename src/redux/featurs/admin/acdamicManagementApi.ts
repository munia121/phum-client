import { TAcademicDepartment, TAcademicFaculty, TAcademicSemester } from "../../../types/academicManagement.type";
import { TResponseRedux } from "../../../types/global";
import { baseApi } from "../../api/baseApi";

const academicManagementApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllSemester: builder.query({
            query: (args) => {
                const params = new URLSearchParams()

                
                if(args){
                    args.forEach(item => {
                        params.append(item.name,item.value )
                        
                    });
                }

                return {
                    url: '/academic-semisters',
                    method: "GET",
                    params:params
                }
            },
            transformResponse: (response: TResponseRedux<TAcademicSemester[]>) => {
                // console.log('inside redux', response)
                return {
                    data: response.data,
                    meta: response.meta
                }
            }
        }),
        addAcademicSemester: builder.mutation({
            query: (data) => ({
                url: '/academic-semisters/create-academic-semister',
                method: "POST",
                body: data
            })
        }),
        getAcademicFaculties: builder.query({
            query: () => {
              return { url: '/academic-faculty', method: 'GET' };
            },
            transformResponse: (response: TResponseRedux<TAcademicFaculty[]>) => {
              return {
                data: response.data,
                meta: response.meta,
              };
            },
          }),
          addAcademicFaculty: builder.mutation({
            query: (data) => ({
              url: '/academic-faculty/create-academic-Faculty',
              method: 'POST',
              body: data,
            }),
          }),
          getAcademicDepartments: builder.query({
            query: () => {
              return { url: '/academic-department', method: 'GET' };
            },
            transformResponse: (response: TResponseRedux<TAcademicDepartment[]>) => {
              return {
                data: response.data,
                meta: response.meta,
              };
            },
          }),
          addAcademicDepartment: builder.mutation({
            query: (data) => ({
              url: '/academic-department/create-academic-department',
              method: 'POST',
              body: data,
            }),
          }),
    })
})

export const { useGetAllSemesterQuery, useAddAcademicSemesterMutation, useAddAcademicDepartmentMutation, useAddAcademicFacultyMutation, useGetAcademicDepartmentsQuery, useGetAcademicFacultiesQuery } = academicManagementApi