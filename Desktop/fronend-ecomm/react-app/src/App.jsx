import { useState } from 'react'
import './App.css'
import Cloth from './Cloth'
import Clothing from './Clothing'
import Home from './Home'
import Navigation from './Navigation'
import { BrowserRouter, Route, Router, Routes } from "react-router"
import AddCart from './AddCart'
import { ClothesContext } from './Context/ClothesContext'
import Login from './Login'
import Contact from './Contact'
import Signup from './Signup'

function App() {

  const [clothData, setClothData] = useState({})
  const [cartProducts, setcartProducts] = useState([])
  const[emailBool, setemailBool] = useState(0)
  const[pwdBool, setpwdBool] = useState(0)
  const [clothes, setClothes] = useState([
    {
      id: 1,
      name: "Jeans",
      price: 250,
      image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSvFZ4JJkajuyBD0WWdblBm-8Co5GAFgyUj95f5ewHZ0dE09hZe12EozokUrCIoZN98ZSM6DAmb_6yOa2IvUdSbEU0MEoeZkJcRPOR3ObFa8VaNF9CsR9A-hA",
      quantity: 0
    },
    {
      id: 2,
      name: "Saree",
      price: 350,
      image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ1rgpfeUdMD0swwnsvAlVghoKtVBCaYGHC8WUvu_LR2hBGE00qNQhu6loYb46fjSd6yChoSksT_5WDnHLEVZuJiAdohFYrIFDOFZBFqWiiY8d9XXbz2DGq",
      quantity: 0
    },
    {
      id: 3,
      name: "T-shirt",
      price: 450,
      image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRmwnuVQRESE1tAyF6hnB5CW6ejwbDZH96EhGts0QoktacLtky65Xk5O6HvbbPYUO5OI_qIAFSGfq7jeSpTd2IrN5SFCvrpbq9KLmT-FU4TmBxc4B5KUK3p",
      quantity: 0
    },
    {
      id: 4,
      name: "Girl-Top",
      price: 550,
      image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTScjhuPIz7vGcX_1zkU4ENIPSxzwV1lDSycRdNURZji6wnHdfecpO-PoIbLxFlWZKLSkQ31BIMe1jyDZ7r_2otKeVcwDkoflSPyd0DNZFBZMUoQUJl1NlPNQ",
      quantity: 0
    },
    {
      id: 5,
      name: "Hoodie",
      price: 799,
      image: "https://m.media-amazon.com/images/I/91gFn5oi5pL._UY1100_.jpg",
      quantity: 0
    },
    {
      id: 6,
      name: "Kurta Set",
      price: 999,
      image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSkIjsSz3yMjsZ00a_1u_ClcCmIuN5XrpYDSQAvR-PTdYqk6ysPB9OiDcEZ9_tgPONZEVoteY6wxaSiDCYz3FWaAXBWaxaGVLSJYuAFJJt11wmH4FnLRYO7zwJ59D7TkkRmXYAgWucspA&usqp=CAc",
      quantity: 0
    },
    {
      id: 7,
      name: "Denim Jacket",
      price: 1199,
      image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTJA-6P9dn64ndXNoMX-6sWq8stHJVWOD8axbZ_-zgreMShYLsWysz012-zA-aW8PEyAkkumlnACsP4jASW2P1XSHZKapY_XThIrIum8VyWeUua_C03g-cFeErSSPkOF82oieJG-w&usqp=CAc",
      quantity: 0
    },
    {
      id: 8,
      name: "Legging",
      price: 1399,
      image: "data:image/jpeg;base64,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",
      quantity: 0
    }
  ])
    
    const[users, setusers] = useState([
      {
        email:"arorarudra65@gmail.com",
        password:"rudra261204"
      },

      {
        email:"arorarudra26@gmail.com",
        password:"arora261204"
      },

      {
        email:"radhikagupta5679@gmail.com",
        password:"radhika081204"
      }
    ])

    


  return (
    <>
    {/* <Login/> */}
    
      {<BrowserRouter>
      <ClothesContext.Provider value={{clothData, setClothData, cartProducts, setcartProducts, clothes, setClothes, users, setusers, emailBool, setemailBool, pwdBool, setpwdBool  } }>
        {<Navigation />}
        <Routes>
            <Route path='/clothing' element={<Clothing/>}/>
            <Route path='/' element={<Home/>} />
            <Route path='/clothing/cloth/:name' element={<Cloth/>}/>
            <Route path='/cart' element={<AddCart/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/signup' element={<Signup/>}/>
        </Routes>
      </ClothesContext.Provider>
      </BrowserRouter>}
      
    </>
  )
}

export default App
