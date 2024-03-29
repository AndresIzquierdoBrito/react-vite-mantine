import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import '@mantine/core/styles.css';
import {
  ColorSchemeScript,
  MantineProvider,
} from "@mantine/core";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ColorSchemeScript defaultColorScheme="auto" />
        <MantineProvider defaultColorScheme="auto">
          <App/>
        </MantineProvider>
  </React.StrictMode>,
)
