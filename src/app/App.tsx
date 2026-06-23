import { RouterProvider } from 'react-router'
import './App.css'
import '@mantine/core/styles.css'
import { router } from '@/app/router/router'
import { createTheme, MantineProvider } from '@mantine/core'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

function App() {

  const theme = createTheme({
    primaryColor: "indigo"
  })

  const queryClient = new QueryClient()

  return (
    <MantineProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </MantineProvider>
  )
}

export default App
