import React from 'react'

const Product = () => {
  return (
    <div>
  
  <div>
        <img src="/images/peproni.png" alt="piz" />
        <div className="text-center">
        <h2 className="text-lg font-bold py-2">Havana special</h2>
        <span className="bg-gray-200 py-1 rounded-full text-sm px-4">Small</span>
        </div>
        

        <div className="flex justify-between items-center mt-4">
       <span>₹ 500</span>
      <button className=" bg-yellow-500 py-1 px-4 rounded-full font-bold">ADD</button>



        </div>
      </div>

</div>
  )
}

export default Product