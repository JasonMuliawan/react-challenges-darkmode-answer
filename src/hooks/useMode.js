import { createContext, useContext, useState } from "react";

const ModeContext = createContext({
    mode:'light-mode'
})
const ModeProvider = (props) => {
    const [mode, setMode] = useState('light-mode')
    return(
        <ModeContext.Provider 
            value={{
                mode,setMode
            }}
            {...props}
        />
    )
}
const useMode = () => useContext(ModeContext);
export { ModeProvider, useMode };