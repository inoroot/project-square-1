
export type BrandSortOrder = 'asc' | 'desc';
export type BrandSortField = 'name' | 'createdAt' | 'publishedAt';

interface BrandSortOptions {
    sortField: BrandSortField
    sortOrder: BrandSortOrder
}

interface BrandFilterFields {
    published: boolean;
}

export interface BrandFilterOptions {
    sort: BrandSortOptions;
    filter: BrandFilterFields;
}

