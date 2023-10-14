import GlobalStyles from './styles/GlobalStyles';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import toast, { Toaster } from 'react-hot-toast';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'
import Dashboard from './pages/Dashboard'
import Bookings from './pages/Bookings'
import Cabins from './pages/Cabins'
import Users from './pages/Users'
import Account from './pages/Account'
import Login from './pages/Login'
import PageNotFound from './pages/PageNotFound'
import AppLayout from './ui/AppLayout';
import Settings from './pages/Settings';

// QY0BHqVq0o9Ji5Qw 

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 10 * 1000
    }
  }
})

const App = () => {
  return (
   <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools initialOpen={true} />
   
    <GlobalStyles />
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />} >
          <Route index element={<Navigate replace to='dashboard' />} />
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='bookings' element={<Bookings />} />
          <Route path='cabins' element={<Cabins />} />
          <Route path='users' element={<Users />} />
          <Route path='settings' element={<Settings />} />
        </Route>
          <Route path='login' element={<Login />} />
          <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>

    <Toaster 
    position="top-center" 
    gutter={12} 
    containerStyle={{margin: '8px'}}
    toastOptions={{
      success: {
        duration: 4000
      },
      error:{
        duration: 4000
      },
      style: {
        fontSize: '16px',
        maxWidth: '500px',
        padding: '16px 24px',
        backgroundColor: 'var(--color-grey-0)',
        color: 'var(--color-grey-700)',
      }
    }}
    />
   </QueryClientProvider>
  )
}

export default App