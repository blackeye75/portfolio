import React from 'react'
import Model from './3d model/Model'

const ThreeElem = () => {
  return (
    <div className='w-full h-[100vh] bg-[url("./bg.jpg")] bg-cover' >
      <h1 className='text-7xl font-["Oswald"] uppercase text-center mt-6' >Shaping Ideas into Reality</h1>
      <Model/>
    </div>
  )
}

export default ThreeElem