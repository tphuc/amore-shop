
import { GeistProvider, CssBaseline } from '@geist-ui/react'
import { Themes } from '@geist-ui/react';
import { CookiesProvider } from 'react-cookie';
const myTheme = Themes.createFromLight({
  "type": "Custom",
  "layout": {
    "radius": "0px",
    "border": "none"
  },
  "palette": {
    // "accents_9": '#00070f',
    // "accents_8": '#011a36',
    // "accents_7": '#06315c',
    // "accents_6": '#0f4c81',
    // "accents_5": '#28628f',
    // "accents_4": '#44799c',
    // "accents_3": '#6590a8',
    // "accents_2": '#d3e1e8',
    // "accents_1": '#fafafa',
    // "foreground": '#06315c'
  },
  "font":{
    "sans": "'Source Sans Pro', sans-serif",
    "mono": "'Source Sans Pro', sans-serif"
  }
  
})

function MyApp({ Component, pageProps }) {

  return <CookiesProvider>
    <GeistProvider themes={[myTheme]} themeType='Custom'>
      <CssBaseline />
      <Component {...pageProps} />
    </GeistProvider>
  </CookiesProvider>

}

export default MyApp;
