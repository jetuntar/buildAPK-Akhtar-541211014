import react from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  Button,
  Linking,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const Me = 'https://www.linkedin.com/in/akhtar-ziyada/';

const packaging =
  'https://www.figma.com/file/TBk45ajnJBHuu7jvTENNpc/Untitled?type=design&node-id=0%3A1&mode=design&t=bgMlcWxXXN0zmbMP-1';
const retow_app =
  'https://www.figma.com/file/JITjQMJSaN8rtJt6fNUST7/ReTow-App?type=design&node-id=0%3A1&mode=design&t=tJ6CGCD6ZnueS3AC-1';
const travel_app =
  'https://www.figma.com/file/Z5QlQQRN6STIQhfVavzkrP/Mobile-Design?type=design&node-id=0%3A1&mode=design&t=FetNlsT0vEe8Mhvy-1';

const App = () => {
  return (
    <ScrollView>
      <View style={{ backgroundColor: 'oldlace', flex: 1 }}>
        <View
          style={{
            padding: 30,
            alignItems: 'center',
          }}>
          <Image
            style={{ width: 200, height: 200, borderRadius: 100 }}
            source={require('./assets/PP.jpg')}></Image>
        </View>
        <Text
          style={{
            fontSize: 24,
            fontWeight: 'bold',
            textAlign: 'center',
            color: 'maroon',
          }}>
          Akhtar Ghaiyyas Ziyada
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'regular',
            textAlign: 'center',
            color: 'maroon',
          }}>
          Saya adalah siswa SMK Telkom Purwokerto jurusan Rekayasa Perangkat
          Lunak
        </Text>
        <View style={{ alignItems: 'center', marginTop: 20, marginBottom: 20 }}>
          <Button
            title="Contact Me"
            color="#2FA0F3" onPress={()=>Linking.openURL(Me)}
          />
        </View>
        <Text
          style={{
            fontSize: 24,
            fontWeight: 'bold',
            textAlign: 'center',
            color: 'maroon'
          }}>
          My Recent Project
        </Text>
        <View
          style={{
            padding: 10,
            alignItems: 'center',
            marginTop: 10,
          }}>
          <Image
            style={{ width: 300, height: 250, borderRadius: 10 }}
            source={require('./assets/packaging.png')}></Image>
        </View>
        <View style={{ alignSelf: 'center', flexDirection: 'row' }}>
          <View style={{ width: 230 }}>
            <Text style={styles.boldFont}>Mock Up Packaging</Text>
            <Text style={styles.normalFont}>Design</Text>
          </View>
          <View>
            <TouchableOpacity
              style={styles.button} onPress={()=>Linking.openURL(packaging)}
            >
              <Image
                style={{ width: 30, height: 30 }}
                source={require('./assets/link_icon.png')}></Image>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            padding: 10,
            alignItems: 'center',
            marginTop: 10,
          }}>
          <Image
            style={{ width: 300, height: 250, borderRadius: 10 }}
            source={require('./assets/retow.png')}></Image>
        </View>
        <View style={{ alignSelf: 'center', flexDirection: 'row' }}>
          <View style={{ width: 230 }}>
            <Text style={styles.boldFont}>Retow App</Text>
            <Text style={styles.normalFont}>UI/UX Design</Text>
          </View>
          <View>
            <TouchableOpacity
              style={styles.button} onPress={()=>Linking.openURL(retow_app)}
            >
              <Image
                style={{ width: 30, height: 30 }}
                source={require('./assets/link_icon.png')}></Image>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            padding: 10,
            alignItems: 'center',
            marginTop: 10,
          }}>
          <Image
            style={{ width: 300, height: 250, borderRadius: 10 }}
            source={require('./assets/travel.png')}></Image>
        </View>
        <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
          <View style={{ width: 230 }}>
            <Text style={styles.boldFont}>Travel App</Text>
            <Text style={styles.normalFont}>UI/UX Design</Text>
          </View>
          <View>
            <TouchableOpacity
              style={styles.button} onPress={()=>Linking.openURL(travel_app)}
            >
              <Image
                style={{ width: 30, height: 30 }}
                source={require('./assets/link_icon.png')}></Image>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  boldFont: {
    fontSize: 19,
    fontWeight: 'bold',
    textAlign: 'left',
    color: 'maroon',
  },
  normalFont: {
    fontSize: 16,
    fontWeight: 'regular',
    textAlign: 'left',
    color: 'black',
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'darksalmon',
    padding: 10,
    borderRadius: 100,
  },
});

export default App;