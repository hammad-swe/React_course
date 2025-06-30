import { useState , useCallback , useEffect ,useRef} from 'react'

import './App.css'

function App() {
  const [length , setlenght] = useState(8)
  const [numallow , setnumallow] = useState(false)
  const [charallow , setcharallow] = useState(false)
  const [Password, setPassword] = useState('')
  const passwordref = useRef(null)

  const generatePassword = useCallback(() => {
    let pass = ""
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if(numallow) str += "0123456789"
    if(charallow) str += "!@#$%^&*()_+[]{}|;':,./<>?`~"
    for(let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * str.length)
      pass += str[randomIndex]
    }
    setPassword(pass)
  },[length, numallow, charallow,setPassword])
  const copyPasswordtoClipboard = useCallback(() => {
    passwordref.current.select();
    passwordref.current.setSelectionRange(0, 99999); 
    window.navigator.clipboard.writeText(Password)
  }, [Password])

  useEffect(() => {
    generatePassword()
  } ,[length, numallow, charallow, generatePassword])

  return (
    <> 
    <div className='flex justify-center items-center h-screen bg-gray-600'>
       <div className='w-full max-w-md mx-auto shadow-md rounded-2xl px-4 py-3 my8 text-orange-500 bg-gray-700 m-15 '>
        <h1 className='text-2xl font-bold mb-4 text-white text-center my-3 font-size-4xl'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4 bg-white text-center'>
    <input 
       type="text"
       value={Password}
       className='outline-none w-full px-3 py-1 text-center'
       placeholder='Generated Password'
       readOnly
        ref={passwordref}

       />
     <button  onClick={copyPasswordtoClipboard}
     className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0  hover:bg-red-500'>
     Copy</button>
        </div>
        <div className='flex text-sm gap-x-2 mb-4'>
          <div className='flex items-center gap-x-1'>
          <input 
          type="range"
         min={4}
          max={30}
          value={length}
          className='cursor-pointer'
          onChange={(e) => setlenght(e.target.value)}

          />
          <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox"
          defaultChecked={numallow}
          id="numberInput"
          onChange={(e) => {
            setnumallow((prev) => !prev)
          }}
          />
          <label htmlFor="numberInput" >Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox"
          defaultChecked={numallow}
          id="charInput"
          onChange={(e) => {
            setcharallow((prev) => !prev)
          }}
          />
          <label htmlFor="charInput" >Characters</label>
          </div>
        </div>
      </div>
    </div>
      <div className='w-full max-w-md mx-auto shadow-md rounded-2xl px-4 py-3 my8 text-orange-500 bg-gray-700 m-15 '>
        <h1 className='text-2xl font-bold mb-4 text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4 bg-white text-center'>
    <input 
       type="text"
       value={Password}
       className='outline-none w-full px-3 py-1 text-center'
       placeholder='Generated Password'
       readOnly

       />
     <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>
     Copy</button>
        </div>
        <div className='flex text-sm gap-x-2 mb-4'>
          <div className='flex items-center gap-x-1'>
          <input 
          type="range"
         min={4}
          max={30}
          value={length}
          className='cursor-pointer'
          onChange={(e) => setlenght(e.target.value)}

          />
          <label className='text-white'>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox"
          defaultChecked={numallow}
          id="numberInput"
          onChange={(e) => {
            setnumallow((prev) => !prev)
          }}
          />
          <label htmlFor="numberInput" >Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox"
          defaultChecked={numallow}
          id="charInput"
          onChange={(e) => {
            setcharallow((prev) => !prev)
          }}
          />
          <label htmlFor="charInput" >Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
