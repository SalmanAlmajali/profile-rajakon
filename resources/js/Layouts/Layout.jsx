import { usePage } from '@inertiajs/react'
import { toast, Toaster } from 'sonner'
import { useCallback, useEffect } from 'react'
import Navbar from '../Components/section/navbar/default';

const Layout = ({ children }) => {
    const { flash } = usePage().props;
    
    return (
        <div className='font-jakarta'>
            <Navbar />
            {children}
            <Toaster />
        </div>
    )
}

export default Layout