/* eslint-disable @typescript-eslint/no-explicit-any */
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react' 

const fetchBasequery = fetchBaseQuery({
    baseUrl: 'https://nisports.vercel.app/api',
    prepareHeaders: (header, {getState} : any) => {

        const Token = getState().Auth.Token
        
        if(Token){
            header.set('authorization', `Bearer ${Token}` )
        }

        return header
    }
})

const BaseApi = createApi({
    reducerPath: "BaseApi",
    tagTypes: ['Facilitys', 'Bookings', 'UserBooking'],
    baseQuery: fetchBasequery,
    endpoints: ()=>({}),
})



export default BaseApi