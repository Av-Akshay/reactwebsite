import React from 'react'

const Footer = () => {
    const date = new Date().getFullYear();
    return (
        <>
            <footer className='mb-0 text-center bg-dark text-light'>
                <p>© {date} Akshay Chauhan. All Right Reserved | Term and conditions </p>
            </footer>

        </>
    )
}

export default Footer;