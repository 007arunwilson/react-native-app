{/* import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


import React, { Component } from 'react';
import { Text } from 'react-native';

export default class HelloWorldApp extends Component {
    render(){
        return(
            <Text>Hello World!</Text>
              );
    }
    
}


import React, { Component } from 'react';
import {AppRegistry, Image } from 'react-native';

export default class Ship extends Component {
    render() {
        let pic={
            uri:'https://s3.amazonaws.com/live.travalour.usermedia/3161e272a0c5481ab042fece0836d00f.jpg'
        };
    return(
    <Image source={pic} style={{width:240, height:180}}/>
    );
    }
}

AppRegistry.registerComponent('AwesomeProject3', () => Ship);


import React, { Component } from 'react';
import { AppRegistry, Text, View} from 'react-native';

class Greeting extends Component {
    render() {
        return (
        <Text>Hello {this.props.name}!</Text>
        );
    }
} 

export default class LotsOfGreetings extends Component {
    render(){
        return(
        <View style={{alignItems: 'center'}}>
            <Greeting name='Nithin' />
            <Greeting name='Arun' />
            <Greeting name='Lijo' />
        </View>
            );
    }
}

AppRegistry.registerComponent('AwesomeProject3', () => LotsOfGreetings);

import React, { Component } from 'react';
import { AppRegistry, Text, View} from 'react-native';

class Blink extends Component{
    constructor (props) {
        super(props);
        this.state= {isShowingText: false};
        
        setInterval(() => {
            this.setState(previousState => {
                return {isShowingText: !previousState.isShowingText };        
            });
        },2000);
    }
    
    render() {
        let display = this.state.isShowingText ? this.props.text : ' ';
        return (
            <Text>{display}</Text>
        );
    }
}

export default class BlinkApp extends Component {
    render() {
        return (
        <View>
        <Blink text='I love to Blink' />
        <Blink text='Yes Blinking is so great' />
        <Blink text= 'Why did they even take this out of HTML' />
        <Blink text = 'Look at me' />
        </View>
        );
    }
}

AppRegistry.registerComponent('AwesomeProject3', () =>BlinkApp);


import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

export default class LotsOfStyles extends Component {
    render() {
        return (
        <View>
        <Text style={styles.red}>Just red</Text>
        <Text style={styles.bigBlue}>Just bigBlue</Text>
        <Text style={[styles.bigBlue, styles.red]}>bigBlue, then red</Text>
        <Text style={[styles.red, styles.bigBlue]}>red, then bigBlue</Text>
        </View>
        );
    }
    
}

const styles = StyleSheet.create({
    bigBlue:{
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    },
    red: {
        color: 'red',
    },
});

AppRegistry.registerComponent('AwesomeProject3', () => LotsOfStyles);




import React, { Component } from 'react';
import React, { Component } from 'react';

import { AppRegistry, View} from 'react-native';
import { AppRegistry, View } from 'react-native';

export default class FixedDimensionsBasics extends Component {
export default class FixedDimensionsBasics extends Component {

    render() {
      render() {

        return (
            return (

        <View>
        <View>
        <View Style={{width:50, height:50, backgroundColor:'powderblue'}} />
        <View style={{width:50, height:50, backgroundColor:'powderblue'}} />
        <View Style={{width:100, height:100, backgroundColor:'skyblue'}} />
        <View style={{width:100, height:100, backgroundColor: 'skyblue'}} />
        <View Style={{width:150, height:150, backgroundColor:'steelblue'}} />
        <View style={{width:150, height:150, backgroundColor:'steelblue'}} />
        </View>
          </View>
        );
        );
    }
    }
}
}

AppRegistry.registerComponent('AwesomeProject3', () =>FixedDimensionsBasics);
AppRegistry.registerComponent('AwesomeProject3', () =>FixedDimensionsBasics);


import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';

export default class FixedDimensionsBasics extends Component {
  render() {
    return (
      <View>
        <View style={{width:50, height:50, backgroundColor:'powderblue'}} />
        <View style={{width:100, height:100, backgroundColor:'skyblue'}} />
        <View style={{width:150, height:150, backgroundColor:'steelblue'}} />
      </View>
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject3', () =>FixedDimensionsBasics);



import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';

export default class FlexDimensionsBasics extends Component {
    render () {
        return (
        <View style={{flex: .5}}>
            <View style={{flex: 2, backgroundColor: 'red'}} />
            <View style={{flex: 2, backgroundColor: 'skyblue'}} />
            <View style={{flex: 3, backgroundColor: 'steelblue'}} />
        </View>
        );
    }
}


AppRegistry.registerComponent ('AwesomeProject3', ()=> FlexDimensionsBasics);


import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';

export default class FlexDirectionsBasics extends Component{
    render(){
        return(
            <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <View style={{width: 100, height: 100, backgroundColor: 'green'}} />
                <View style={{width: 100, height: 100, backgroundColor: 'red'}} />
                <View style={{width: 100, height: 100, backgroundColor: 'blue'}} />
            </View>
        );
    }
}

AppRegistry.registerComponent('AwesomeProject3', () => FlexDirectionsBasics);

import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View } from 'react-native';

export default class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <View style={{padding: 10}}>
        <TextInput style={{height: 40}}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
      </View>
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => PizzaTranslator);




import React, { Component } from 'react';
import { AppRegistry, View, Text, TextInput} from 'react-native';

export default class PizzaTranslator extends Component {
    constructor(props) {
        super(props);
        this.state = {text: ''};
    }
    
    render() {
        return (
            <View style = {{padding: 10}} >
                <TextInput style={{height: 40}}
                    placeholder="Type here to translate to pizza language"
                    onChangeText={(text) => this.setState({text})}
                />
                
                <Text style={{padding: 10, fontSize: 42}} >
                    {this.state.text.split(' ').map((word) => '🍕').join(' ')}
                </Text>
            </View>
        );
    }
}

AppRegistry.registerComponent('AwesomeProject3', () => PizzaTranslator);


import React, { Component } from 'react';
import { AppRegistry, Alert, Button, StyleSheet, View } from 'react-native';

export default class ButtonBasics extends Component {
    _onPressButton() {
        Alert.alert('You tapped the button')
    }
    
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.buttonContainer}>
                    <Button
                        onPress={this._onPressButton}
                        title="Press Me"
                    />
                </View>
                
                <View style={styles.buttonContainer}>
                    <Button
                        onPress={this._onPressButton}
                        title="Press Me"
                        color="#841584"
                    />
                </View>
            
                <View style={styles.alternativeLayoutButtonContainer}>
                    <Button
                        onPress={this._onPressButton}
                        title="This Looks Great"
                    />

                    <Button
                        onPress={this._onPressButton}
                        title="OK"
                        color="#842584"
                    />
                </View>
            
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
    },
    
    buttonContainer:{
        margin:20,
    },
    
    alternativeLayoutButtonContainer:{
        margin:20,
        flexDirection:'row',
        justifyContent:'space-between',
    }
})

AppRegistry.registerComponent('AwesomeProject3', () => ButtonBasics);


import React, { Component } from 'react';
import { AppRegistry, Alert, Platform, StyleSheet, Text, 
       TouchableHighlight, TouchableOpacity, TouchableNativeFeedback,
       TouchableWithoutFeedback, View } from 'react-native';

export default class Touchables extends Component{
    _onPressButton(){
        Alert.alert('You Tapped the Button')
    }
    
    _onLongPressButton(){
        Alert.alert('You long-pressed the Button')
    }
    
    render(){
        return(
            <View style={styles.container}>
                <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>TouchableHighlight</Text>
                    </View>
                </TouchableHighlight>
                
                <TouchableOpacity onPress={this._onPressButton}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>TouchableOpacity</Text>
                    </View>
                </TouchableOpacity>
                        
                <TouchableNativeFeedback onPress={this._onPressButton}
                    background={Platform.OS === 'android' ? 
                               TouchableNativeFeedback.SelectableBackground() : ''}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>TouchableNativeFeedback
                            </Text>
                        </View>
                </TouchableNativeFeedback>
                            
                <TouchableWithoutFeedback onPress={this._onPressButton}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>TouchableWithoutFeedback
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
                        
                <TouchableHighlight onPress={this._onPressButton}                                 onLongPress={this._onLongPressButton}                         underlayColor="white">
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Touchable with long press
                        </Text>
                    </View>
                </TouchableHighlight>
            </View>
                );
        }
    }
const styles= StyleSheet.create({
    container:{
        paddingTop: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    button: {
        marginBottom:30,
        width:260,
        alignItems:'center',
        backgroundColor: '#000000',
    },
    
    buttonText:{
        padding: 20,
        color: 'white',
    },
})


AppRegistry.registerComponent('AwesomeProject3', () =>Touchables);


import React, { Component } from 'react';
import { Alert, AppRegistry, Platform, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View } from 'react-native';

export default class Touchables extends Component {
  _onPressButton() {
    Alert.alert('You tapped the button!')
  }

  _onLongPressButton() {
    Alert.alert('You long-pressed the button!')
  }


  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableHighlight</Text>
          </View>
        </TouchableHighlight>
        <TouchableOpacity onPress={this._onPressButton}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableOpacity</Text>
          </View>
        </TouchableOpacity>
        <TouchableNativeFeedback
            onPress={this._onPressButton}
            background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableNativeFeedback</Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableWithoutFeedback
            onPress={this._onPressButton}
            >
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableWithoutFeedback</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableHighlight onPress={this._onPressButton} onLongPress={this._onLongPressButton} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>Touchable with Long Press</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    alignItems: 'center'
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    padding: 20,
    color: 'white'
  }
})

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => Touchables);

 {/*
            <Image source={reguire('/react-native/img/favicon.png')} />
            <Image source={reguire('/react-native/img/favicon.png')} />
            <Image source={reguire('/react-native/img/favicon.png')} />
            <Image source={reguire('/react-native/img/favicon.png')} />
            <Text style={{fontSize:96}}>If you like</Text>
              <Image source={require('/react-native/img/favicon.png')} />
              <Image source={require('/react-native/img/favicon.png')} />
              <Image source={require('/react-native/img/favicon.png')} />
              <Image source={require('/react-native/img/favicon.png')} />
              <Image source={require('/react-native/img/favicon.png')} />
              <Text style={{fontSize:96}}>Scrolling down</Text>
              <Image source={require('/react-native/img/favicon.png')} />
              <Image source={require('/react-native/img/favicon.png')} />
              <Image source={require('/react-native/img/favicon.png')} />
              <Image source={require('/react-native/img/favicon.png')} />
              <Image source={require('/react-native/img/favicon.png')} />
              <Text style={{fontSize:96}}>What's the best</Text>
              <Image source={require('/react-native/img/favicon.png')} />
              <Image source={require('/react-native/img/favicon.png')} />
              <Image source={require('/react-native/img/favicon.png')} />
              <Image source={require('/react-native/img/favicon.png')} />
              <Image source={require('/react-native/img/favicon.png')} />
              <Text style={{fontSize:96}}>Framework around?</Text>
              <Image source={require('/react-native/img/favicon.png')} />
              <Image source={require('/react-native/img/favicon.png')} />
              <Image source={require('/react-native/img/favicon.png')} />
              <Image source={require('/react-native/img/favicon.png')} />
              <Image source={require('/react-native/img/favicon.png')} />
              <Text style={{fontSize:80}}>React Native</Text>





import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View } from 'react-native';

export default class FlatListBasics extends Component{
    render(){
        return(
            <View style={styles.container}>
                <FlatList
                    data={[
                        {key: 'nithin'},
                        {key: 'arun'},
                        {key: 'lijo'},
                        {key: 'suraj'},
                        {key: 'nithin'},
                        {key: 'arun'},
                        {key: 'lijo'},
                        {key: 'suraj'},
                        {key: 'nithin'},
                        {key: 'arun'},
                        {key: 'lijo'},
                        {key: 'suraj'},
                        {key: 'nithin'},
                        {key: 'arun'},
                        {key: 'lijo'},
                        {key: 'suraj'},
                    ]}
                    renderItem={({item}) => <Text style={styles.item} > {item.key} </Text>}
            
                />
            </View>
                    
        );
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        paddingTop:22,
    },
    
    item:{
        padding:10,
        fontSize:18,
        height:44,
    },
})

AppRegistry.registerComponent('AwesomeProject3', () => FlatListBasics); 

import React, { Component } from 'react';
import { AppRegistry, SectionList, StyleSheet, Text, View} from 'react-native';

export default class SectionListBasics extends Component {
    render(){
        return(
        <View style={styles.container}>
            <SectionList
              sections={[
            {title: 'title', data:['this']}, 
            {title: 'names', data: ['nithin', 'arun','lijo','suraj','albin','nele','jack','jinu']},
            ]}
            renderItem={({item}) => <Text style={styles.item}>{item}</Text
            >}
            renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text
                >}
            keyExtractor={(item, index) => index}
            />
        </View>
              
        );
    }
    
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        paddingTop: 100,
    },
    
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
    },
    
    item:{
        padding:10,
        fontSize: 18,
        height: 44,
        color:'red',
    },
})

AppRegistry.registerComponent('AwesomeProject3', () => SectionListBasics);


import React, { Component } from 'react';
import { FlatList, ActivityIndicator, Text, View } from 'react-native';

export default class FetchExample extends Component {
    constructor(props){
        super(props);
        this.state = { isLoading: true}
    }
    
    componentDidMount(){
        return fetch('https://facebook.github.io/react-native/movies.json')
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({
                isLoading: false,
                dataSource: responseJson.movies,
            }, function() {
                
            });
        })
        
        .catch((error) => {
            console.error(error);
                          });
    }
    
    render(){
        
        if(this.state.isLoading){
            return(
            <View style = {{flex:1, padding:20}}>
                <ActivityIndicator/>
            </View>
            )
        }
        
        return(
        <View style={{flex:1, paddingTop:20}}>
            <FlatList
                data={this.state.dataSource}
                renderItem={({item}) => <Text>{item.title},{item.releaseYear} </Text>}
                keyExtractor={(item, index) => index}
            />
        </View>
        );
    }
} 


import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  FlatList,
  RefreshControl
} from 'react-native';

import DATA from './Data';

export default class App extends Component<{}> {

  constructor(props) {
    super(props);
  
    this.state = {
      data: DATA,
      refreshing: false,
    };
  }

  _keyExtractor(item, index) {
    return index;
  } 

  renderItem(data) {
    let { item, index } = data;

    return (
      <View style={styles.itemBlock}>
        <Image source={{uri: item.picture}} style={styles.itemImage}/>
        <View style={styles.itemMeta}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemLastMessage} ellipsizeMode='tail' numberOfLines={1}>{item.last_message}</Text>
        </View>
      </View>
    ) 
  }

  renderSeparator() {
    return <View style={styles.separator} />
  }

  renderHeader() {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>Conversations</Text>
      </View>
    )
  }

  _onRefresh() {
    this.setState({
      refreshing: true
    })
    setTimeout(function() {
      this.setState({
        refreshing: false
      })
    }.bind(this),1000)
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList 
          keyExtractor={this._keyExtractor}
          data={this.state.data}
          renderItem={this.renderItem.bind(this)}
          ItemSeparatorComponent={this.renderSeparator.bind(this)}
          ListHeaderComponent={this.renderHeader}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh.bind(this)}
            />
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop:2,
    paddingLeft:10,
      paddingRight:10,
    flex: 1,
    marginTop: 20,
  },
  itemBlock: {
    flexDirection: 'row',
    paddingBottom: 10,
      paddingTop:10,
  },
  itemImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
      borderWidth:1,
    borderColor: 'black',
  },
  itemMeta: {
    marginLeft: 10,
    justifyContent: 'center',
  },
  itemName: {
    fontSize: 20,
  },
  itemLastMessage: {
    fontSize: 14,
    color: "#111",
  },
  separator: {
    height: 0.5,
    width: "80%",
    alignSelf: 'center',
    backgroundColor: "#efefef"
  },
  header: {
    padding: 10,
  },
  headerText: {
    fontSize: 30,
    fontWeight: '900'
  }
});



import React from 'react';
import PropTypes from 'prop-types';
import {Button, NavigatorIOS, Text, View} from 'react-native';

export default class NavigatorIOSApp extends React.Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: MyScene,
          title: 'My Initial Scene',
          passProps: {index: 1},
        }}
        style={{flex: 1}}
      />
    );
  }
}

class MyScene extends React.Component {
  static propTypes = {
    route: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }),
    navigator: PropTypes.object.isRequired,
  };

  constructor(props, context) {
    super(props, context);
    this._onForward = this._onForward.bind(this);
  }

  _onForward() {
    let nextIndex = ++this.props.index;
    this.props.navigator.push({
      component: MyScene,
      title: 'Scene ' + nextIndex,
      passProps: {index: nextIndex},
    });
  }

  render() {
    return (
      <View>
        <Text>Current Scene: {this.props.title}</Text>
        <Button
          onPress={this._onForward}
          title="Tap me to load the next scene"
        />
      </View>
    );
  }
} */}

import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  FlatList,
  RefreshControl
} from 'react-native';

import DATA from './Data';

export default class App extends Component<{}> {

  constructor(props) {
    super(props);
  
    this.state = {
      data: DATA,
      refreshing: false,
    };
  }

  _keyExtractor(item, index) {
    return index;
  } 

  renderItem(data) {
    let { item, index } = data;

    return (
      <View style={styles.itemBlock}>
        <Image source={{uri: item.picture}} style={styles.itemImage}/>
        <View style={styles.itemMeta}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemLastMessage} ellipsizeMode='tail' numberOfLines={1}>{item.last_message}</Text>
        </View>
      </View>
    ) 
  }

  renderSeparator() {
    return <View style={styles.separator} />
  }

  renderHeader() {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>Conversations</Text>
      </View>
    )
  }

  _onRefresh() {
    this.setState({
      refreshing: true
    })
    setTimeout(function() {
      this.setState({
        refreshing: false
      })
    }.bind(this),1000)
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList 
          keyExtractor={this._keyExtractor}
          data={this.state.data}
          renderItem={this.renderItem.bind(this)}
          ItemSeparatorComponent={this.renderSeparator.bind(this)}
          ListHeaderComponent={this.renderHeader}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh.bind(this)}
            />
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop:2,
    paddingLeft:10,
      paddingRight:10,
    flex: 1,
    marginTop: 20,
  },
  itemBlock: {
    flexDirection: 'row',
    paddingBottom: 10,
      paddingTop:10,
  },
  itemImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
      borderWidth:1,
    borderColor: 'black',
  },
  itemMeta: {
    marginLeft: 10,
    justifyContent: 'center',
  },
  itemName: {
    fontSize: 20,
  },
  itemLastMessage: {
    fontSize: 14,
    color: "#111",
  },
  separator: {
    height: 0.5,
    width: "80%",
    alignSelf: 'center',
    backgroundColor: "#efefef"
  },
  header: {
    padding: 10,
  },
  headerText: {
    fontSize: 30,
    fontWeight: '900'
  }
});






























