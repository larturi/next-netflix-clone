/* eslint-disable react-hooks/exhaustive-deps */

'use client';

import qs from 'query-string';
import dynamic from 'next/dynamic';
import { useCallback, useMemo, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import useSearchModal from '@/hooks/useSearchModal';

import Modal from './Modal';
import Input from '../Input';

const SearchModal = () => {
   const router = useRouter();
   const searchModal = useSearchModal();
   const params = useSearchParams();

   const [filter, setFilter] = useState('')

   const onSubmit = useCallback(async (filter: string) => {

      const query: any = {
         filter     
      };

      const url = qs.stringifyUrl(
         {
            url: '/search',
            query: query,
         },
         { skipNull: true }
      );

      searchModal.onClose();
      router.push(url);
   }, [
      searchModal,
      router,
      params,
   ]);

   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setFilter(event.target.value);
   };

   let bodyContent = (
      <div className='flex flex-col gap-8'>
         <Input 
            id='search' 
            label='Search' 
            onChange={handleChange}
            value={filter}
         />
      </div>
   );

   return (
      <Modal
         isOpen={searchModal.isOpen}
         title='Search Series & Movies'
         actionLabel='Search'
         onSubmit={() => onSubmit(filter)}
         onClose={searchModal.onClose}
         body={bodyContent}
      />
   );
};

export default SearchModal;
