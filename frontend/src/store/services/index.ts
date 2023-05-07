import { apiurl } from '../../common/constatnt';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: apiurl}),
    endpoints: () => ({}),
    tagTypes: ['Posts']
});