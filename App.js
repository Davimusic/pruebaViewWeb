import { View } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  return (
    <View style={{flex: 1, paddingTop: 30}}>
      <WebView
      overscanTop={20}
      scrollEnabled={false}
      source={{ uri: 'https://relax-project.vercel.app' }}
      style={{flex: 1 }}
    />
    </View>
  );
}