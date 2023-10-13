import {FunctionComponent, useEffect, useState} from "react";
import {useLazyGetBrandsWithFiltersQuery} from "../../store/brand/brands-api-slice.ts";
import {BrandSortOptions} from "../../models/brand.model.ts";
import Loader from "../../components/Loader/Loader.tsx";

type SortBy = 'nameASC' | 'nameDESC' ;

const sortByMap: Record<SortBy, BrandSortOptions> =  {
    nameASC: {
        sortField: 'name',
        sortOrder: 'ASC'
    },
    nameDESC: {
        sortField: 'name',
        sortOrder: 'DESC'
    }
}

interface BrandItemProps {
    logoUrl: string;
    name: string
}

const BrandItem: FunctionComponent<BrandItemProps> = ({ logoUrl, name}) => {
    return(
    <div className="p-1 m-1 h-28 flex justify-center items-center">
        <img
            className="img"
            alt={name}
            src={logoUrl}
        />
    </div>
    )
}

const Brands: FunctionComponent = () => {
    const [sortBy, setSortBy] = useState<SortBy>('nameASC')
    const [getBrands, { isFetching, data: brandsData }] = useLazyGetBrandsWithFiltersQuery();

    const onGetBrands = (sortBy: SortBy) => {
        const sortDataBy = sortByMap[sortBy];
        getBrands({
            filter: { published: true },
            sort: sortDataBy
        }).catch(error => {
            console.log({error})
        })
    }

    useEffect(()=> {
        onGetBrands(sortBy)
    },[])

    const handleSort = (type: SortBy) => {
        setSortBy(type);
        onGetBrands(type);
    };

    return (
        <div className="mt-10">
        <div className="text-[3rem] text-shades-700 font-subtitle-is-5 px-5 md:px-20 py-10">
            <div>
                <div className="text-[1.25rem] flex flex-row items-center gap-2">
                    <div className="bg-primary-active w-[2.5rem] h-[0.25rem]" />
                    <div className="leading-[150%]">
                        You’ll be in good company
                    </div>

                </div>
                <b className="leading-[140%] flex items-center mt-3 text-[1.8rem] md:text-[2.5rem] lg:text-[3rem]">
                    Trusted by leading brands
                </b>
            </div>

            <div className='mt-10'>
                <div className="">
                    <div className="">
                        <form className="w-full max-w-md">
                            <div className="flex items-center border-b border-teal-800 py-2 gap-2">
                                <div>
                                    <select id="sortBy" value={sortBy} onChange={(e) => handleSort(e.target.value as SortBy)} className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-1.5 w-32 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option value="nameASC">Name Asc</option>
                                        <option value="nameDESC">Name Desc</option>
                                    </select>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>

            </div>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                { isFetching && <Loader /> }
                { !isFetching && brandsData?.map(brandItem => (<BrandItem logoUrl={brandItem.logoUrl} name={brandItem.name} />))}
                { !isFetching && !brandsData && <div className="flex text-center"><div className="text-gray-500 text-[1.5rem]">No Brands Found</div></div> }
            </div>
        </div>
        </div>
    );
};

export default Brands;
