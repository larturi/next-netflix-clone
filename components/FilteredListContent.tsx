import Head from 'next/head'
import React from 'react'
import InfoModal from './InfoModal'
import Navbar from './Navbar'
import Billboard from './Billboard'
import MovieList from '@/components/MovieList';
import useInfoModalStore from '@/hooks/useInfoModal'

interface FilteredListContentProps {
    title: string;
    contentList: [];
  }

const FilteredListContent: React.FC<FilteredListContentProps> = ({ 
    title,
    contentList 
}) => {

  const { isOpen, closeModal } = useInfoModalStore();

  return (
    <>
      <Head>
        <title>Netflix Clone: {title}</title>
      </Head>
      <InfoModal visible={isOpen} onClose={closeModal} />
      <Navbar />

      <Billboard />

      <div className="pb-48">
        <MovieList title={title} data={contentList} />
      </div>
    </>
  )
}

export default FilteredListContent