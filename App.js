import { View } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  return (
    <View style={{flex: 1, paddingTop: 30}}>
      <WebView
      
      scrollEnabled={false}
      source={{ uri: 'https://publicfinance.vercel.app/' }}
      style={{flex: 1 }}
    />
    </View>
  );
}

//overscanTop={20}