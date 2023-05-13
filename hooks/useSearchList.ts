import useSWR from 'swr';
import fetcher from '@/libs/fetcher';

const useSearchList = (search: String) => {
    const { data, error, isLoading } = useSWR(`/api/movies/search?filter=${search}`, fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false
    });

    return {
        data, error, isLoading
    }
}

export default useSearchList;
