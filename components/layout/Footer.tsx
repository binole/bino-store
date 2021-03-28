import Container from "../container"

const Footer = ({ className = '' }: { className?: string }) => {
  return (
    <footer className={`py-6 border-t ${className}`}>
      <Container className='text-center text-sm text-gray-800'>
        © 2021 <a href="mailto:hoaianh.bino@gmail.com" className='hover:text-black hover:underline'>BINO</a>. All rights reserved.
      </Container>
    </footer>
  )
}

export default Footer
