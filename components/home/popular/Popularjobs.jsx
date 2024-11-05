import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';

import styles from './popularjobs.style';
import { useRouter } from 'expo-router';
import { COLORS, SIZES } from '../../../constants';
import PopularJobCard from '../../common/cards/popular/PopularJobCard';
import useFetch from '../../../hook/useFetch';

const Popularjobs = () => {
  const router = useRouter();

  const { data, isLoading, error } = useFetch('search',{
    query: 'React developer',
    num_pages:'1'
  });
    console.log(data)
    
  const handleCardPress=(item)=>{
    router.push(`job-details/${item.job_id}`)
    setSelectedJob(item.job_id)
  }
 
   const [selectedJob,setSelectedJob]=useState()
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Top Popular Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text>Oops! Something went wrong</Text>
        ) : (
          <FlatList
            data={data}
            renderItem={({ item }) =>( 
            <PopularJobCard 
            item={item}
            selectedJob={selectedJob}
            handleCardPress={handleCardPress}
             />)}
            keyExtractor={(item) => item?.job_id?.toString()}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          />
        )}
      </View>
    </View>
  );
};

export default Popularjobs;
