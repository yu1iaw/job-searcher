import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import App from './components/App'
import { BookmarksContextProvider } from './contexts/BookmarksContextProvider'
import { SearchContextProvider } from './contexts/SearchContextProvider'
import { ActiveHashContextProvider } from './contexts/ActiveHashContextProvider'
import { JobItemsContextProvider } from './contexts/JobItemsContextProvider'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import './index.css'


const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BookmarksContextProvider>
        <ActiveHashContextProvider>
          <SearchContextProvider>
            <JobItemsContextProvider>
              <App /> 
            </JobItemsContextProvider>
          </SearchContextProvider>
        </ActiveHashContextProvider>
      </BookmarksContextProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>,
)
