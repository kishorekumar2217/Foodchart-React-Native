import React from "react";
  Animated
  import {  Animated,ImageBackground, StyleSheet, Text, View,Image, ScrollView, Dimensions ,} from "react-native";

const {width}=Dimensions.get("window");
const height=width*100 / 0.60;

const image =[ "https://images.unsplash.com/photo-1456418047667-56bcd35b1a88?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" ,
"https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" ,
 "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1035&q=80" ,
 "https://images.unsplash.com/photo-1505935428862-770b6f24f629?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1047&q=80",
 "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80",
 "https://images.unsplash.com/photo-1488900128323-21503983a07e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80",
]
export default class Back extends React.Component{
state ={
  active:0,
  x: new Animated.Value(-100),
} 
change = ({nativeEvent}) =>{

 
 const slide=Math.ceil(nativeEvent.contentOffset.x /nativeEvent.layoutMeasurement.width);
if(slide !== this.state.active){

this.setState({
  active:slide
})

}


}
slide = () => {
  Animated.spring(this.state.x, {
    toValue: 0,
  }).start();
  this.setState({
    active:1,
  });
};
 
 
  render(){
      return(

    <>
    
<View style={style.container}  >

<ScrollView
pagingEnabled 
horizontal 
onScroll={this.change}
showsHorizontalScrollIndicator={false}
style={style.scroll}>
{
  image.map((image,index) => (
    
    <Image
    key={index}
            source={{uri:image} }
            style={style.image} 
            />
           
  ))
}
           
</ScrollView>









<View style={style.page}>
{
  image.map((i,k)=> (
<Text key={k} style={k==this.state.active ? style.pageText : style.pageActiveText}>•</Text>
    
  ))
}

</View>

        </View>

        </>
     
      )
  
  }
}



const style =StyleSheet.create({
  container:{
    marginTop: .0,
    marginBottom:0,
    width,
    height,
    flex:.4,
    borderColor:'#DDDD',
    borderBottomWidth:10
  },

  scroll:{width,height},

  image:{width:360,
     height:250, 
     resizeMode:'cover'},

  page:{flexDirection:'row',
  position:'absolute',
  bottom:0,
  alignSelf:'center'},


pageText:{
  fontSize:(width   / 20),
color:'white',
margin:3,
},
pageActiveText:{
  color:'black',
  margin:3,
  },

}
)



  




  
