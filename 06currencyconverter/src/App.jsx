import { useState } from 'react'

import './App.css'
import useCurrencyInfo from './hooks/useCurrencyInfo.jsx'
import { Inputbox } from './components/index.js'

function App() {
  const [amount, setAmount]=useState(0)
  const [from, setFrom] = useState('eur')
  const [to, setTo] = useState('inr')
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo=useCurrencyInfo(from)
  const options=Object.keys(currencyInfo)
  console.log(from)

  const swap=()=>{
    setAmount(convertedAmount)
    setConvertedAmount(amount)
    setFrom(to)
    setTo(from)
  }

  const convert=()=>{
    setConvertedAmount(amount*currencyInfo[to])
  }


  return (
    <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
    style={{backgroundImage:`url(https://media.istockphoto.com/id/1287625670/photo/double-exposure-of-city-with-row-of-coin-stack-with-growth-stock-chart-and-graph-progress.jpg?s=612x612&w=0&k=20&c=e6GUCWHJvjF38Q3WyiORwNNtCXh5kbWcChiN1-vk-vU=)`}}
    >

      <div className='w-full'>
        <div className='w-full max-w-md mx-auto border border-gray-50 rounded-lg p-5  backdrop-blur-sm bg-white/30'>
         <form onSubmit={(e)=>{
           e.preventDefault()
           convert()
         }}>
          <div className='w-full mb-1'>
            <Inputbox
            label='from'
            amount={amount}
            currencyOptions={options}
            onCurrencyChange={(currency)=>setFrom(currency)}
            onAmountChange={(amount)=>setAmount(amount)}
            selectedCurrency={from}
           

            />
          </div>
          <div>
            <button className='absolute left-1/2 -translate-x-1/2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5' onClick={swap}>
              Swap
            </button>
          </div>

          <div className='w-full mb-1'>
            <Inputbox
            label='to'
            amount={convertedAmount}
            currencyOptions={options}
            amountDisablled
            onCurrencyChange={(currency)=>setTo(currency)}
            onAmountChange={(amount)=>setAmount(amount)}
            selectedCurrency={to}

            />
         
          </div>
          <div className='w-full mb-1'>
            <button className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg' type='submit'>
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </div>
         </form>
        </div>
      </div>

    </div>

    
  
  )
}

export default App
