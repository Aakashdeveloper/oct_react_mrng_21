import React,{useState} from 'react';
import { StyleSheet, Text, View,Button,Alert,Switch } from 'react-native';
import ImageComp from './component/ImageComponent'

function App() {
  var [uname,setUname] = useState('Test Name')
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const updateName = () => {
    setUname('Test App Name')
  }
  return (
    <View style={styles.container}>
      <ImageComp/>
      <Text>My Native App</Text>
      <Text>{uname}</Text>
      <Button
        title="Press me"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
       <Button
        title="Update Name"
        onPress={() => {setUname("Native Name")}}
      />
      <Button
        title="Back"
        onPress={updateName}
      />
       <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;