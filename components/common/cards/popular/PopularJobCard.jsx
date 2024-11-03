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

    </TouchableOpacity>
  )
}

export default PopularJobCard