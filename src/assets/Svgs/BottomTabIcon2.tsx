import React, { PureComponent } from 'react'
import Svg, {
  Path
} from 'react-native-svg';
import { View } from 'react-native';

class App extends PureComponent {
  constructor(props:any) {
    super(props)
  }

  render() {
    let image = <View>
<Svg width="24" height="24" viewBox="0 0 24 24" fill="none" >
<Path opacity="0.4" d="M15.7161 16.2236H8.49609" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<Path opacity="0.4" d="M15.7161 12.0371H8.49609" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<Path opacity="0.4" d="M11.2511 7.86035H8.49609" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<Path fill-rule="evenodd" clip-rule="evenodd" d="M15.9085 2.75C15.9085 2.75 8.23149 2.754 8.21949 2.754C5.45949 2.771 3.75049 4.587 3.75049 7.357V16.553C3.75049 19.337 5.47249 21.16 8.25649 21.16C8.25649 21.16 15.9325 21.157 15.9455 21.157C18.7055 21.14 20.4155 19.323 20.4155 16.553V7.357C20.4155 4.573 18.6925 2.75 15.9085 2.75Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</Svg>


    </View>
    return (
      <>
        {image}
      </>
    );
  }
}
export default App;




