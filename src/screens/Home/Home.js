import * as React from 'react';
import { Text, View, StyleSheet, ScrollView ,Image } from 'react-native';

import gym from '../../../assets/images/gym.jpg'
import one from '../../../assets/images/1.jpg'
import two from '../../../assets/images/2.jpg'
import three from '../../../assets/images/3.jpg'




const Home = () => {

    
   

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>

                <Text style={styles.welcome}>
                    Hi ,User!
                </Text>
                <Text style={styles.underWelcome}>Get ready to sweat</Text>
              
<View style={styles.flex1}>

<View style={styles.flex1_1} >
    
     <Text style={styles.flex1_1_1}>61%</Text> 

</View>
<View style={styles.flex1_2}> 
    
    <Text style={styles.flex1_2_1}>Progress</Text>

<Text style={styles.flex1_2_2}>You're doing great!</Text>

 </View>
<View style={styles.flex1_3}> 
    
    <Text style={styles.flex1_3_1}>See charts</Text>
    
     </View>


</View>

<View style={styles.flex2}> 
    
    <Text style={styles.flex2_1}>Start today's workout</Text>
    
     </View>

<View style={[styles.flex3]}>

<Image source={gym} style={[styles.gym]} />
<View style={[styles.flex3_1]}>
<View style={[styles.flex3_1_1]}>
<Text style={[styles.flex3_1_1_1]}>Burpees
 </Text>
<Text style={[styles.flex3_1_1_1]}>45'
</Text>
    
</View>

<View style={[styles.flex3_1_2]}>


</View>

</View>


</View>


<View style={styles.flex2}> 
    
    <Text style={styles.flex2_1}>Select a new workout plan</Text>
    
     </View>
<View style={styles.flex_4}> 
    
    <Text style={styles.flex4_1}>Categories</Text>
    
     </View>


<View style={[styles.flex5]} >
<View style={[styles.flex5_1]}>
<Image source={one} style={[styles.one]} />
<View style={[styles.flex5_1_1]}>
    <Text style={[styles.flex5_1_1_1]}>Strength</Text>
</View>
</View>
<View style={[styles.flex5_2]}>
<Image source={two} style={[styles.one]} />
<View style={[styles.flex5_1_1]}>
    <Text style={[styles.flex5_1_1_1]}>Cardio</Text>
</View>
</View>
<View style={[styles.flex5_3]}>
<Image source={three} style={[styles.one]} />
<View style={[styles.flex5_1_1]}>
    <Text style={[styles.flex5_1_1_1]}>Cycling</Text>
</View>
</View>


</View>



            </View>

       

        </ScrollView >
    );
};
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        padding: 10,
        paddingVertical:30,
    },
    welcome: {
        color: 'black',
        fontSize: 23,
        marginTop: 30,
        fontWeight:"bold",
    },
    underWelcome: {
        color: '#888089',
        fontSize: 18,
        marginTop: 10,
    },
    gym: {
     width:"100%",
height:250,
borderRadius:10
    },
    flex1:{
display:"flex",
justifyContent:"space-around",
alignItems:"center",
flexDirection:'row',
backgroundColor:"#F3F7F8",
marginVertical:20,
marginHorizontal:4,
paddingHorizontal:10,
paddingVertical:10,

    },
    flex1_1:{
  padding:10,
borderColor:'#6C5EDC',
borderWidth:3,
borderStyle:"solid",
// borderLeftColor:"transparent",
borderRadius:300
    },
    flex1_1_1:{
color:"#6C5EDC",
fontWeight:"bold",
fontSize:23,
    },
    flex1_2_1:{
        color:"#3B3B3B",
       
        fontSize:18,
    },
    flex1_2_2:{
        color:"#B8B8B8",
       
        fontSize:15,
    },
    flex1_3:{
        backgroundColor:"#6C5EDC",
        paddingHorizontal:10,
        paddingTop:4,
        height:30,
        borderRadius:5,
        
    },
    flex1_3_1:{
        color:"#ffffff",
       
    },
    flex2:{
        marginVertical:14,
       
    },
    flex2_1:{
        color:"#333333",
        fontSize:21,
        fontWeight:"bold",
       
    },
    flex4:{
       
       
    },
    flex4_1:{
        color:"#ADADAD",
        fontSize:18,
       
       
    },
    flex3:{
      position:"relative"
       
    },
    flex3_1:{
      position:"absolute",
      bottom:5,
      left:0,
      display:"flex",
      flexDirection:"row",
      justifyContent:"space-between",
      paddingHorizontal:15,
       
    },
    flex3_1_1_1:{
        color:"#ffffff",
        fontWeight:"bold",
    },
    flex3_1_1_2:{

        color:"#ffffff",
    },
    flex5:{
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        flexDirection:'row',
   position:"relative",
        marginVertical:20,

        paddingVertical:10,
        
            },
    flex5_1:{
   
   position:"relative",
 height:160,
 width:120,
 backgroundColor:"#FFC561",
padding:10,
borderRadius:5,

        
            },
    flex5_2:{
   
   position:"relative",
   height:160,
 width:120,
 backgroundColor:"#8CF193",
 marginHorizontal:10,
 padding:10,
 borderRadius:5
            },
    flex5_3:{
   
   position:"relative",
   height:160,
 width:120,
 backgroundColor:"#53D4AB",
 marginHorizontal:10,
 padding:10,
 borderRadius:5
        
            },
    flex5_1_1:{
   
   position:"absolute",
   bottom:4
 
        
            },
    flex5_1_1_1:{
   
color:"white",
marginHorizontal:10,
fontWeight:"bold",
 
            },
    one:{
   
width:70,
height:55
 
        
            },
});


export default Home;