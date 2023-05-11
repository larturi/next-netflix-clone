import useSWR from 'swr';
import fetcher from '@/libs/fetcher';

const useMovieList = (type: String = 'movie') => {
    const { data, error, isLoading } = useSWR(`/api/movies?type=${type}`, fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false
    });

    return {
        data, error, isLoading
    }
}

export default useMovieList;