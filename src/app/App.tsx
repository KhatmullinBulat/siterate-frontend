import { RouterProvider } from 'react-router'
import './App.css'
import '@mantine/core/styles.css'
import { router } from '@/app/router/router'
import { createTheme, MantineProvider } from '@mantine/core'

function App() {

  const theme = createTheme({
    primaryColor: "indigo"
  })

  return (
    <MantineProvider theme={theme}>
      <RouterProvider router={router} />
    </MantineProvider>
  )
}

export default App
