/* eslint-disable @typescript-eslint/no-explicit-any */
import BaseApi from "../../BaseApi/BaseApi";

const Facilitys = BaseApi.injectEndpoints({
  endpoints: (builder) => ({
    GetFacility: builder.query({
      query: ({ Search }) => {


        console.log(Search)

        let url = 'facility'

        const queryParams : any[] = [];

        if(Search){
            queryParams.push(`search=${Search}`)
        }

        if(queryParams.length > 0){
            url += `?${queryParams.join("&")}` 
        }

        return {
          url: url,
          method: "GET",
        };
      },
      providesTags: ["Facilitys"],
    }),
    AddFacility: builder.mutation({
      query: (FacilityData) => ({
        url: "/facility",
        method: "POST",
        body: FacilityData,
      }),
      invalidatesTags: ["Facilitys"],
    }),
    GetSingleFacility: builder.query({
      query: (id: string) => ({
        url: `/facility/${id}`,
        method: "GET",
      }),
    }),
    DeleteFacility: builder.mutation({
      query: (id: string) => ({
        url: `/facility/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Facilitys"],
    }),
    UpdateFacility: builder.mutation({
      query: ({ id, updateData }) => ({
        url: `/facility/${id}`,
        method: "PUT",
        body: updateData,
      }),
      invalidatesTags: ["Facilitys"],
    }),
  }),
});

export const {
  useGetFacilityQuery,
  useAddFacilityMutation,
  useDeleteFacilityMutation,
  useGetSingleFacilityQuery,
  useUpdateFacilityMutation,
} = Facilitys;
