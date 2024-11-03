import { useState } from "react";
import { View,Text,ScrollView,SafeAreaView } from "react-native";

import { Stack,useRouter } from "expo-router";
import {COLORS,icons,images,SIZES} from '../constants'
import {Nearbyjobs, Nearbytjobs,Popularjobs,PopularJobs,ScreenHeaderBtn, Welcome} from '../components'

const Home=()=>{

      const router =useRouter();

      return(
            <SafeAreaView style={{flex:1,backgroundColor:COLORS.lightWhite}}>
                  <Stack.Screen options={{headerStyle:{background:COLORS.lightWhite},headerShadowVisible:false,
                  headerLeft:()=>(<ScreenHeaderBtn inconUrl={icons.menu} dimension='40%'/>),
                  headerRight:()=>(<ScreenHeaderBtn inconUrl={images.profile} dimension='100%'/>),
                  headerTitle:"",
                   }}/>
                  <ScrollView>
                        <View
                        style={{flex:1 ,padding:SIZES.medium}}>
                          <Welcome/>
                          <Popularjobs/>
                          <Nearbyjobs/>

                        </View>
                  </ScrollView>
            </SafeAreaView>
      )
}
export default Home;