import logo from './logo.svg'
import './App.css'
import algorand sdk

import NftMinter from './pages/NFTMinter/NftMinter'

function App () {
  const moralisServerUrl = process.env.REACT_APP_MORALIS_SERVER_URL
  const moralisAppId = process.env.REACT_APP_MORALIS_APP_ID
  return (
    
      appId='8fyJUFQbQLY1d2VZcErT3QNYis8eBRI8OILFk7bI'
      serverUrl='https://lrib7uhxuwbs.usemoralis.com:2053/server'
    >
      <div className='App'>
        <main>
          <NftMinter />
          <div className='App-overlay'></div>
        </main>
      </div>
    
  )
}

export default App
