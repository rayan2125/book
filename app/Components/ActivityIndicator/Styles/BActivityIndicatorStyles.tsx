import { StyleSheet } from 'react-native'

// Themes
import { Colors, Normalize } from '@/Themes'

export default StyleSheet.create({
  activityIndicatorWrapper: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    marginTop: Normalize(20),
    color: Colors.white50,
    textAlign: 'center',
    fontSize: Normalize(20)
  }
})
