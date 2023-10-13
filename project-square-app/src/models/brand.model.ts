
export interface Brand {
    name: string
    logoUrl: string
    published?: boolean
    createdAt?: Date
    updatedAt?: Date
}

export interface BrandSortOptions {
    sortField: 'name' | 'createdAt';
    sortOrder: 'ASC' | 'DESC';
}

export interface BrandFilterFields {
    published: boolean;
}
