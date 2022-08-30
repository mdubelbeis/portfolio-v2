import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="text-white flex gap-4 items-center justify-center py-4">
      <small>&copy; 2022</small>
      <small className="hover:cursor-pointer"><a href="https://mason.dubelbeis.com">Mason J. Dubelbeis</a></small>
    </footer>
  )
}

export default Footer