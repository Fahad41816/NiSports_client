import BaseApi from "../../BaseApi/BaseApi";

const BookingApi = BaseApi.injectEndpoints({
    endpoints: (builder) => ({
        CheckAvailability : builder.query({
            query: ({date, facility}) => ({
                url: `/check-availability?date=${date}&facility=${facility}`,
                method:"GET",
            })
        }),
        GetAllBookings : builder.query({
            query: () => ({
                url: `/bookings`,
                method:"GET",
            }),
            providesTags:["Bookings"]
        }),
        GetUserBookings : builder.query({
            query: () => ({
                url: `/bookings/user`,
                method:"GET",
            }),
            providesTags:['UserBooking']
        }),
        UpdateUserBookings : builder.mutation({
            query: (id : string) => ({
                url: `/bookings/${id}`,
                method:"PATCH",
            }),
            invalidatesTags: ['UserBooking']
        })
    })
})


export const {useCheckAvailabilityQuery, useGetAllBookingsQuery, useGetUserBookingsQuery, useUpdateUserBookingsMutation} = BookingApi

export default BookingApi