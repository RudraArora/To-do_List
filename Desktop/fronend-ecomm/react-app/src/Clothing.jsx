import React, { createContext, useContext, useState } from 'react'
import './clothings.css'
import { useNavigate } from "react-router"
import Navigation from './Navigation'
import { ClothesContext } from './Context/ClothesContext'

const Clothing = () => {
    const navigate = useNavigate()

    const {clothData, setClothData, cartProducts, setcartProducts, clothes, setClothes} = useContext(ClothesContext)

    const productClicker = (id) => {

        setClothData(clothes[id-1])

        navigate(`/clothing/cloth/${clothes[id-1].name}`)
    }

    // console.log(clothes)


    const addcartHandler = (id) => {
        if (clothes[id-1].quantity===0) {
          setClothes(prev =>
          prev.map(item =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
          )
        );
        const selectedProduct = clothes.find(item => item.id === id);



        setcartProducts(prevCart => {
        const isInCart = prevCart.find(item => item.id === id); 

        if (isInCart) {
          
          return prevCart.map(item =>
            item.id === id
              ? { ...item, quantity: item.quantity + 1 } 
              : item 
          );
          
        } else {
          
          return [...prevCart, { ...selectedProduct, quantity: 1 }];
        }
      });
        }

      
        
    }

    
 return (
    <>
      {/* <Navigation /> */}
      <div className="px-8 py-6 min-h-screen">
        <h1 className="text-4xl font-semibold text-gray-800 mb-8 text-center">Collection</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {clothes.map(({ id, name, price, image, quantity }) => (
            <div
              key={id}
              onClick={() => productClicker(id)}
              className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300"
            >
              <img src={image} alt={name} className="w-full h-64 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-900">{name}</h2>
                <p className="text-sm text-gray-600">ID: {id}</p>
                <p className="text-lg font-bold text-green-700 mt-2">₹{price}</p>
              </div>
              <div className="mt-4 px-2 mb-3">
                    <button onClick={(e) => { 
                        e.stopPropagation()
                        addcartHandler(id)}} className="w-full bg-amber-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-amber-700 transition duration-300">
                    {quantity===0 ? "Add to Cart" : "Added in the Cart" }
                    </button>
                </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Clothing