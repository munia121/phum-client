import { TSemester } from "../../../types/courseManagement.type";
import { TResponseRedux } from "../../../types/global";
import { baseApi } from "../../api/baseApi";

const courseManagementApi = baseApi.injectEndpoints({
     endpoints: (builder) => ({
            getAllRegisteredSemester: builder.query({
                query: (args) => {
                    const params = new URLSearchParams()
    
                    
                    if(args){
                        args.forEach((item: { name: string; value: string; }) => {
                            params.append(item.name,item.value )
                            
                        });
                    }
    
                    return {
                        url: '/semisterRegistration',
                        method: "GET",
                        params:params
                    }
                },
                transformResponse: (response: TResponseRedux<TSemester[]>) => {
                    // console.log('inside redux', response)
                    return {
                        data: response.data,
                        meta: response.meta
                    }
                }
            }),
            
            
            addRegisteredSemester: builder.mutation({
                query: (data) => ({
                    url: '/semisterRegistration/semister-register',
                    method: "POST",
                    body: data
                })
            }),
            updateRegisteredSemester: builder.mutation({
                query: (args) => (console.log(args),{
                  url: `/semisterRegistration/${args.id}`,
                  method: 'PATCH',
                  body: args.data,
                }),
               
              }),
            
        })
})


export const {useAddRegisteredSemesterMutation, useGetAllRegisteredSemesterQuery, useUpdateRegisteredSemesterMutation} = courseManagementApi