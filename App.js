import 'react-native-gesture-handler';
import Back from './new';
import {Picker} from '@react-native-community/picker';

import AsyncStorage from '@react-native-community/async-storage';
import DropDownPicker from 'react-native-dropdown-picker';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from 'react-native-splash-screen';

import Icon from 'react-native-vector-icons/FontAwesome';
import React, { Component, version } from 'react';
import {
  TouchableOpacity,
  ScrollView,
  View,
  Text,
  ImageBackground, StyleSheet, TextInput,
  Button,
  SafeAreaView
 
} from 'react-native';
// import { ScrollView } from 'react-native-gesture-handler';

const images = { uri: "https://image.freepik.com/free-photo/ingredients-making-toast-sandwich-white-background_23-2147925937.jpg" };


const image = { uri: "https://cdn.pixabay.com/photo/2014/06/11/17/00/food-366875__340.jpg" }
 const button={uri:"https://lh3.googleusercontent.com/proxy/nDL3abkIflf9JNzaC43yQqR86Shp1Y8E6TTJUYzT3B0f4MPJPfH1voHmYKZ5p44IxX7v8ogOxo20mPAHrjHeDE1RZFfvvRIt1GZDBTab6DNx8busAfmHpXaj42k"}
const HomeScreen = ({ navigation }) => {
  return (
    <>
      <Back />

      <View style={styles.container}>

        <ImageBackground source={image} style={styles.image}>
          <View style={styles.buttonContainer}>
            <View style={styles.buttonContainer}>
             
<TouchableOpacity     onPress={() => navigation.navigate('add')} style={styles.kbutton}>
<Text> ADD FOOD</Text>
</TouchableOpacity>


            </View>
            <View style={styles.buttonContainer}>
             
                          
<TouchableOpacity     onPress={() => navigation.navigate("list")} style={styles.Ibutton}>
<Text>DETAILS</Text>
</TouchableOpacity>

            </View>
          </View>

        </ImageBackground>
      </View>










    </>

  )
}
class ListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      
      myArray: [],
      temp: '',
     
    };
  }
  
    
  async componentDidMount() {

    let myArray = await AsyncStorage.getItem('@MySuperStore:key');
    var d = JSON.parse(myArray);
    // console.log(d)
    this.setState({ myArray: d ,temp:'Sunday'});
    

  };

  




functionCombain(day){
  this.setState({
    temp:day,
  })

    
}

async  onRemoveItem (key) {
  
  let myArray = await AsyncStorage.getItem('@MySuperStore:key');
    var d = JSON.parse(myArray)?JSON.parse(myArray):[]
  d.splice(key, 1);
  this.setState({ myArray: d });

  AsyncStorage.setItem(
    '@MySuperStore:key', JSON.stringify(this.state.myArray));
    alert('remove')


}

  render() {
    
var store=this.state.myArray;

    let data=store.filter((days, key) => days.day === this.state.temp).
    // let itemKey =store.indexOf(data).
  
    map((data, index) => {
      let itemKey =store.indexOf(data)
    
      
      return(
      <View style={{flex:1}}>
        <View >
        <TouchableOpacity onPress={() => this.onRemoveItem(itemKey)}    style={{flexDirection:'row-reverse'}}>
      
        <Text>❌</Text>
        </TouchableOpacity>
       
        <Text>Food :{data.foodname}</Text>
        <Text>Price:{data.price}</Text>
        <Text>DAY:{data.day}</Text>

     

  
        </View>

  </View>
      
      )
    })
 


    return (



      // <SafeAreaView style={{ flex: 1 , backgroundColor: '#C0C0C0', flexDirection:'column'}}>

   
<View style={{ 
      flexWrap:'wrap',height:'100%', width:'100%',padding:5,flexDirection:'row'}}>

  
     
      
        <View  style={{flexDirection:'column' ,height:'80%',width:'20%',marginTop:'10%', marginRight:70,justifyContent:'space-between'}}>
        
          <TouchableOpacity onPress={() => this.functionCombain('Sunday')} 
            style={styles.Bstyle}
          >
           {/* <Text>SUN</Text> */}
              <Text style={{
                        opacity:
                            this.state.temp === "Sunday"
                                ? .1
                                : 1,
  
      
                    }}>SUN
           
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.functionCombain('Monday')} 
          style={styles.Bstyle}

          >
         <Text style={{
                        opacity:
                            this.state.temp === "Monday"
                                ? .1
                                : 1
                    }}>
            <Text>MON</Text>
            </Text>

          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.functionCombain('Tuesday')} 
                      style={styles.Bstyle}

          >
          
          <Text style={{
                        opacity:
                            this.state.temp === "Tuesday"
                                ? .1
                                : 1
                    }}>
            <Text>TUE</Text>
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.functionCombain('Wednesday')} 
                      style={styles.Bstyle}

          >
            <Text style={{
                        opacity:
                            this.state.temp === "Wednesday"
                                ? .1
                                : 1
                    }}>
            <Text>WEN</Text>
            </Text>

          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.functionCombain('Thursday')} 
                      style={styles.Bstyle}

          >
           <Text style={{
                        opacity:
                            this.state.temp === "Thursday"
                                ? .1
                                : 1
                    }}>
            <Text>THU</Text>
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.functionCombain('Friday')} 
                      style={styles.Bstyle}
          >
          <Text style={{
                        opacity:
                            this.state.temp === "Friday"
                                ? .1
                                : 1
                    }}>
            <Text>FRI</Text>
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.functionCombain('Saturday')} 
                      style={styles.Bstyle}

          >
          <Text style={{
                        opacity:
                            this.state.temp === "Saturday"
                                ? .1
                                : 1
                    }}>
            <Text>SAT</Text>
            </Text>
          </TouchableOpacity>
         
</View>

          


      
 <View style={{width:'50%',height:'100%',padding:5,marginTop:'10%',alignContent:'center'}} >
  
      
       <ScrollView  >
        {data}
      
        </ScrollView>       

        

        </View>    
          
       

      
        </View>
       
        
      // </SafeAreaView>
   
  
    );
  }
}


// food list add
class AddScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foodname: '',
      day: '',
      price: '',
      day: '',
      dummy:'kk',
      list: [],
      myArray: ['dummy' ],

    };
  }
  async componentDidMount() {
    let myArray = await AsyncStorage.getItem('@MySuperStore:key');
    var d = JSON.parse(myArray);
    this.setState({ list: d });
  };
  // onSubmit = async () => {
  //   const { foodname, price, day ,dummy} = this.state;
  //   this.state.list.push({
       
  //     foodname: foodname,
  //     price: price,
  //     day: day


  //   });

  //   AsyncStorage.setItem(
  //     '@MySuperStore:key', JSON.stringify(this.state.list));
  //     alert('save')
  //   // this.clear()
  //   this.setState({
  //     foodname: '',
  //     price: '',
  //     day: ''
  //   })
  // };
  onSubmit = async () => {
    let  {foodname, price, day } =this.state;
    var detail = { foodname: foodname, price: price, day: day };
    // const { foodname, price, day} = this.state;
    let myArray = await AsyncStorage.getItem('@MySuperStore:key');
    var d = JSON.parse(myArray)?JSON.parse(myArray):[]
 d.push(detail)
 AsyncStorage.setItem(
  '@MySuperStore:key', JSON.stringify(this.state.list));
    this.setState({
     
      list:d    

    });

    AsyncStorage.setItem(
      '@MySuperStore:key', JSON.stringify(this.state.list));
      alert('save')
    // this.clear()
    this.setState({
      foodname: '',
      price: '',
      day: ''
    })
  };




  render() {


    return (
      <ImageBackground source={images} style={{ flex: 1 }}>
        <View style={{
          flex: 1,
          backgroundColor: "",
          padding: 20,
          margin: 10,
        }}>


          <TextInput
            placeholder="Enter Food name :"
            ref={ref => this.textInputRef = ref}
            style={{
              borderWidth: 2, borderColor: 'skyblue', margin: 20, borderTopLeftRadius: 20,
              borderTopRightRadius: 20, fontWeight: 'bold'
            }}
            onChangeText={(text) => { this.setState({ foodname: text }) }} 
            value={this.state.foodname}
            />          
          {/* <DropDownPicker  placeholder="Day..."
            items={[
             
              { label: 'Sunday', value: 'Sunday', },
              { label: 'Monday', value: 'Monday', },
              { label: 'Tuesday', value: 'Tuesday', },
              { label: 'Wednesday', value: 'Wednesday', },
              { label: 'Thursday', value: 'Thursday', },
              { label: 'Friday', value: 'Friday', },
              { label: 'Saturday', value: 'Saturday', },
            ]}
            defaultValue={this.state.country}
            containerStyle={{ height: 55, width: 260, margin: 20 }}
            style={{ backgroundColor: '', borderColor: 'skyblue', borderWidth: 2 }}
            itemStyle={{
              justifyContent: 'flex-start',
            }}
            dropDownStyle={{ backgroundColor: '#ffff' }}
            onChangeItem={item => this.setState({
              day: item.value
            })}
          /> */}
          <View style={{  fontWeight: 'bold', backgroundColor: '', borderColor: 'skyblue', borderWidth: 2 ,width: 260,marginLeft:20,}}>
          <Picker
          
  selectedValue={this.state.day}
 
  style={{ fontWeight: 'bold'}}
  onValueChange={(itemValue, itemIndex) =>
    this.setState({day: itemValue})
  }
  >
   <Picker.Item  label= 'Select day..'  />

  <Picker.Item  label= 'Sunday' value= 'Sunday' />
 
  <Picker.Item label="Monday" value="Monday" />
 
  <Picker.Item label="Tuesday" value="Tuesday" />
  <Picker.Item label="Wednesday" value="Wednesday" />
 
  <Picker.Item label="Thursday" value="Thursday" />
 
 
  <Picker.Item label="Friday" value="Friday" />
  <Picker.Item label="Saturday" value="Saturday" />

</Picker> 
</View>




          <TextInput placeholder="Enter Price :"
           ref={ref => this.textInputRefs = ref}
            style={{
              borderWidth: 2, borderColor: 'skyblue', margin: 20, fontWeight: 'bold', borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
            }}
            onChangeText={(text) => { this.setState({ price: text }) }} 
            value={this.state.price}
            />

          <View style={styles.buttonContainer}>
              <TouchableOpacity  onPress={this.onSubmit}  style={styles.Tbutton}>
                  <Text>ADD</Text>
              </TouchableOpacity>          
          </View>
          <View style={styles.buttonContainer}>
             <TouchableOpacity    onPress={() => this.props.navigation.navigate('list')} style={styles.Gbutton}>
                  <Text>DETAILS</Text>
              </TouchableOpacity>      
          </View>








        </View>
      </ImageBackground>
    );
  }
}





const Stack = createStackNavigator();



export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentDidMount() {

    SplashScreen.hide();
  }

  render() {
    return (
      <>




        <NavigationContainer style={styles.container} >

          <Stack.Navigator >
            <Stack.Screen name="FOOD CHART" component={HomeScreen}  screenOptions={{
    headerShown: false
  }}/>

            <Stack.Screen name="add" component={AddScreen}  screenOptions={{
    headerShown: false
  }}/>
            <Stack.Screen name="list" component={ListScreen} />


          </Stack.Navigator>

        </NavigationContainer>
      </>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: .8,
    flexDirection: "column",

    borderTopColor: 'white',


    borderLeftColor: 'white',
    borderRightColor: 'white',


  },
  image: {
   
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
    
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000a0"
  },
  buttonContainer: {
    margin: 10,
    justifyContent: 'space-between',

  },
 
    Bstyle:{
      borderWidth: 1,
      borderColor: 'rgba(0,0,0,0.2)',
      alignItems: 'center',
      justifyContent: 'center',
      width: 100,
      height: 70,
 backgroundColor: '#82CAFF',
      borderRadius: 5,
      borderColor:'#FFB6C1',
      marginHorizontal:5,
      borderWidth:1
      
    }
    ,
    Tbutton: {
      alignItems: 'center',
      backgroundColor: '#DDDDDD',
      padding: 10,
      borderRadius: 500 , 
      
    },
    Gbutton: {
      alignItems: 'center',
      backgroundColor: '#90EE90',
      padding: 10,
      borderRadius: 500 , 
      
    },
    Ibutton: {
      alignItems: 'center',
      backgroundColor: '#90EE90',
  
      borderRadius: 500 , 
      justifyContent: 'center',
      width: 250,
      height: 60,
      marginHorizontal:30,
      marginBottom:55,
    },
    kbutton: {
      alignItems: 'center',
      backgroundColor: '#DDDD',
  
      borderRadius: 500 , 
      justifyContent: 'center',
      width: 250,
      height: 60,
      marginHorizontal:30,
      
    },
  
    scrollView: {
     
    
    
   
     
     
    },
    bimage: {
      flex: .2,
      resizeMode: "cover",
      justifyContent: "center"
      
    }
})
