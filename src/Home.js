import React, { useEffect, useState } from 'react';
import './Home.css'; 
import shirt from './shirt.jpeg'; 
import pant from './pant.jpeg'; 
import tshirt from './tshirt.jpeg'; 
import logo from './logo3.png';
import axios from 'axios';

const Home = () => {
  const [productData,setproductData]=useState([]);
    async function getData(){
    await axios.get("https://dummyjson.com/products").then((res)=>{
      console.log(res.data.products);
    });
  }
  useEffect(()=>{
    getData();
  },
[]);
  return ( 
    <div className="main">
      <header>
        <img src={logo} alt='' />
        <h1 className='name'>TRICHY SHoPPing Zone</h1>
      <ul>
          <li>Home</li>
          <li>Service</li>
          <li>Product</li>
          <li>Contact</li>
        </ul>
        <button className="btn">Login</button>
        </header>

        <img src={shirt} alt="Logo" />
        
        <hr></hr><form>
<h1>Product Details</h1>
<h4>Gold-toned solid self design opaque Formal shirt ,has a spread collar, button placket, 1 patch pocket, long regular sleeves, curved hem</h4>
</form>
<hr></hr>
 {/* <ul>
          <li>Home</li>
          <li>Service</li>
          <li>Product</li>
          <li>Contact</li>
        </ul> */}

        {/* <button className="btn">Login</button>
      </header> */}

      <div className="products">
        <div className="product">
          <img src={pant} alt="Shirt" />
          <p>Pant</p>
          <p>SIZE</p>
          
          <div className="sizes">
            <span>36</span>
            <span>38</span>
            <span>40</span>
            <span>42</span>
          </div>
          <p>COLOR</p>
          <div className="colors">
            <div className="color color1"></div>
            <div className="color color2"></div>
            <div className="color color3"></div>
          </div>

          <h3>$15</h3>
        </div>

        <div className="product">
          <img src={tshirt} alt="Shirt" />
          <p>T-Shirt</p>
          <p>SIZE </p>

          <div className="sizes">
            <span>36</span>
            <span>38</span>
            <span>40</span>
            <span>42</span>
          </div>
          <p>COLOR</p>
          <div className="colors">
            <div className="color color1"></div>
            <div className="color color2"></div>
            <div className="color color3"></div>
          </div>

          <h3>$25</h3>
          
        </div>
      </div>
    </div>
  );
};

export default Home;