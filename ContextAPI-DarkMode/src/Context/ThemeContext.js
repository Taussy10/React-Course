
// In api part-1 we were making two files but this time wrote everything in one file so that we don't have export two files again and again

// imported react method and hook
import {createContext, useContext} from "react"

// export: we set to export 
//  We put a object in createContext
export const ThemeContext = createContext({
  themeMode:"light",
  darkTheme: () =>{},
  lightTheme: () =>{}

})
// Asked for provider it is built in method to provide data everywhere
export const ThemeProvider= ThemeContext.Provider 

// put everything in function so that we can use anywehter ThemeContext(cause it contains those things that we want)
export default function useTheme() {
  return useContext(ThemeContext)
}


