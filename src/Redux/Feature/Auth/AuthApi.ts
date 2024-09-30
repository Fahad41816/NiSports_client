import BaseApi from "../../BaseApi/BaseApi";

const AuthApi = BaseApi.injectEndpoints({
    endpoints: (builder) => ({
        LoginUser : builder.mutation({
            query: (userData) => ({
               url: '/auth/login',
               method:"POST",
               body:  userData
            })
        }),
        RegistrationUser : builder.mutation({
            query: (userData) => ({
               url: '/auth/signup',
               method:"POST",
               body:  userData
            })
        }),
        RegistrationAdmin : builder.mutation({
            query: (AdminData) => ({
               url: '/auth/CreateAdmin',
               method:"POST",
               body:  AdminData
            })
        }),
        FindUser : builder.query({
            query: (UserId) => ({
                url: `/auth/user/${UserId}`,
                method:"GET",
            })
        })
    })
})

export const {useLoginUserMutation, useRegistrationUserMutation, useFindUserQuery, useRegistrationAdminMutation} = AuthApi