import { TResponseRedux } from "../../../types/global";
import { TStudent } from "../../../types/userManagement.type";
import { baseApi } from "../../api/baseApi";

const userManagementApi = baseApi.injectEndpoints({
     endpoints: (builder) => ({
            getAllStudents: builder.query({

                query: (args) => {
                    const params = new URLSearchParams()
    
                    
                    if(args){
                        args.forEach((item: { name: string; value: string; }) => {
                            params.append(item.name,item.value )
                            
                        });
                    }
    
                    return {
                        url: '/students',
                        method: "GET",
                        params:params
                    }
                },
                transformResponse: (response: TResponseRedux<TStudent[]>) => {
                    // console.log('inside redux', response)
                    return {
                        data: response.data,
                        meta: response.meta
                    }
                }
            }),


            addStudent: builder.mutation({
                query: (data) => ({
                    url: '/users/create-student',
                    method: "POST",
                    body: data
                })
            })
        })
})

export const {useAddStudentMutation, useGetAllStudentsQuery} = userManagementApi