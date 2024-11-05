import React from 'react'
import { View, Text, Image } from 'react-native'

import styles from './popularjobcard.style'
import { TouchableOpacity } from 'react-native'

const PopularJobCard = ({item,selectedJob,handleCardPress}) => {
  return (
    <TouchableOpacity style={styles.container(selectedJob,item)}
    onPress={()=>handleCardPress}>
    <TouchableOpacity style={styles.logoContainer(selectedJob,item)}>
       <Image source={{url:item.employer_logo}}
        resizeMode='contain'
        style={styles.logoImage}
       />
    </TouchableOpacity>
    <Text style={styles.companyName} numberOfLines={1}> 
      {item.employer_name}
    </Text>
    <View>
      <Text>
        {item.job_title}
      </Text>
      <View>
        <Text>
          {item?.job_publisher}
        </Text>
        <Text> {item.job_location}</Text>
      </View>
    </View>

    </TouchableOpacity>
  )
}

export default PopularJobCard