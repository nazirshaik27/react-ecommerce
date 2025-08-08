import React from 'react';
import { FaHeadset, FaLock, FaShippingFast, FaMoneyBillWave, FaTag } from 'react-icons/fa';

const InfoSection = () => {
    const infoItems = [
        {
            icon: <FaShippingFast className='text-3xl text-red-600' />,
            title: 'Free Shipping',
            description: 'Free delivery on all orders'
        },
        {
            icon: <FaHeadset className='text-3xl text-red-600' />,
            title: 'Support 24/7',
            description: 'Round-the-clock customer service'
        },
        {
            icon: <FaMoneyBillWave className='text-3xl text-red-600' />,
            title: 'Money Back Guarantee',
            description: '30-day money back guarantee'
        },
        {
            icon: <FaLock className='text-3xl text-red-600' />,
            title: 'Secure Payment',
            description: 'All payments are secure and encrypted'
        },
        {
            icon: <FaTag className='text-3xl text-red-600' />,
            title: 'Special Discounts',
            description: 'Exclusive deals for members'
        }
    ];

    return (
        <div className='bg-white py-12'>
            <div className='container mx-auto px-4'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6'>
                    {infoItems.map((item, index) => (
                        <div 
                            key={index} 
                            className='flex flex-col items-center text-center p-6 border rounded-lg shadow-md hover:shadow-lg transition-shadow transform transition-transform duration-300 hover:scale-105'
                        >
                            {item.icon}
                            <h3 className='mt-4 text-lg font-semibold'>{item.title}</h3>
                            <p className='mt-2 text-gray-600'>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default InfoSection;