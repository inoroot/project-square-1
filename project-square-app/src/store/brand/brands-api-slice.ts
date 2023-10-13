import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {Brand, BrandFilterFields, BrandSortOptions} from "../../models/brand.model.ts";

interface BrandFilterPayload {
    sort: BrandSortOptions;
    filter: BrandFilterFields;
}

// should be in .env
const baseUrl = 'http://localhost:3000'
const brandsBaseUrl = 'brands';

export const brandsApi = createApi({
    reducerPath: 'brandsApi',
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    endpoints: (builder) => ({
        getBrandsWithFilters: builder.query<Brand[], BrandFilterPayload>({
            query: (payload) => `${brandsBaseUrl}?sortOrder=${payload.sort.sortOrder}&sortField=${payload.sort.sortField}&published=${payload.filter.published}`,
        }),
    }),
})

export const { useLazyGetBrandsWithFiltersQuery } = brandsApi