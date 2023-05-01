import React from 'react'
import { Link } from 'react-router-dom'
import MainLayout from '../layout/MainLayout'

function HomePage() {
    return (
        <MainLayout>
            <div className='bg-light p-5 mt-4 rounded-3'>
                            <h1>Welcome to the simple POS for small business</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta nemo nesciunt et corrupti hic qui nostrum tempore mollitia, minima eveniet at modi porro provident veritatis eum animi ex vero rerum?</p>
                            <p>If you have an issue, call 344-123</p>
                            <Link to='/pos' className='btn btn-primary'>Click here to sell products </Link>
                    </div>
        </MainLayout>
    )
}

export default HomePage