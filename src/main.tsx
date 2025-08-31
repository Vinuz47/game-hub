
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ColorModeProvider } from "@/components/ui/color-mode"
import { ChakraProvider, Theme ,defaultSystem } from "@chakra-ui/react";
import App from './App.tsx'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider value={defaultSystem}>
      <ColorModeProvider>
        <App />
      </ColorModeProvider>
    </ChakraProvider>
  </StrictMode>,
)
