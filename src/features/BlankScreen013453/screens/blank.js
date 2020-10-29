import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export default class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = { TextInput_5: "", DateTimePicker_7: new Date(""), Switch_9: true }

  render = () => (
    <View>
      <Button title="Press me!" onPress={() => alert("Pressed!")} />
      <TextInput
        placeholder="Number Input Placeholder"
        keyboardType="numeric"
        value={this.state.TextInput_5}
        onChangeText={nextValue => this.setState({ TextInput_5: nextValue })}
      />
      <DateTimePicker
        showIcon={false}
        date={this.state.DateTimePicker_7}
        onDateChange={selectedDate =>
          this.setState({ DateTimePicker_7: selectedDate })
        }
      />
      <Switch
        trackColor={{ false: "#C0CCDA", true: "#409EFF" }}
        value={this.state.Switch_9}
        onValueChange={nextChecked => this.setState({ Switch_9: nextChecked })}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16
  },
  View_1: {},
  Button_3: {},
  TextInput_5: {},
  DateTimePicker_7: {},
  Switch_9: {}
})
