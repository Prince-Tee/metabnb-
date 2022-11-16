import React from 'react'
import './Home.css';
import dis1 from '../assets/dis1.png';
import Star from '../assets/Star.png';
import dis2 from '../assets/dis2.png';
import dis3 from '../assets/dis3.png';
import dis4 from '../assets/dis4.png';
import dis5 from '../assets/dis5.png';
import dis6 from '../assets/dis6.png';
import dis7 from '../assets/dis7.png';
import dis8 from '../assets/dis8.png';

import Nftt from '../assets/Nftt.png';
import Meta_footer from '../assets/Meta_footer.png';
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';
import image4 from '../assets/image4.png';
import Meta_header from '../assets/Meta_header.png'

const Home = () => {
  
    return (
    <div className="body">
      <div className="container">
        <div className="navbar">
          <div className="logo">
            <img className="meta_logo" src={Meta_header} alt='logo' />
          </div>
          <nav>
            <ul>
              <li>
                <button>Home</button>
              </li>
              <li>
                <a href="/Aplace">Place to stay</a>
              </li>
              <li>
                <button>NFTs</button>
              </li>
              <li>
                <button>Community</button>
              </li>
            </ul>

          <button  className="connect">Connect wallet</button>
          </nav>
        </div>
        <header>
          <div className="header-content">
            <div className="rent-meta">
              <h1>
                Rent a <span>Place</span> away from <span>Home</span> in the <span>Metaverse</span>
              </h1>
              <p>
                we provide you access to luxury and affordable houses in the
                metaverse, get a chance to turn your imagination to reality at
                your comfort zone
              </p>

              <div class="search">
                <input
                  class="srch"
                  type="search"
                  name="search"
                  placeholder="Search for location"
                />
                
                
                  <button class="btn">Search</button>
                
              
              </div>
            </div>
            
            <div className="header-images">
              <div className="first">
                <img className="image1" src={image1} alt="pic1" />
                <img className="image2" src={image2} alt="pic1" />
              </div>
              <div className="second">
                <img className="image3" src={image3} alt="pic1" />
                <img className="image4" src={image4} alt="pic1" />
              </div>
            </div>
          </div>
        
         
          
          </header>
        <div className="wallets"></div>
   
   
   
   
   
   


   
   
  {/*<div>
  <button onclick="myFunction()">Upload</button>
      <script>
      function myFunction() {
          alert("Your file is being uploaded!")
      }
      </script>
</div>*/}


   
  
    
  
  


   <main>

   <h1>Inspiration for your next adventure</h1>
    
   <div className="places-content">
            <div className="places">

            <div className="places-img">
    <img className="pics" src={dis1} alt="dis"/>
    <div className="resort-details">
    <p className='p1'>Desert king</p>
    <p className='p2'>1MBT per night</p>
    </div>
    
    <div className="resort-details">
       <p className='p1'>2345km away</p>
    <p className='p2'>available for 2weeks stay</p>
    </div>
    
    <div className="stars">
    <img className="star" src={Star} alt="starpic"/>
    <img className="star" src={Star} alt="starpic"/>
    <img className="star" src={Star} alt="starpic"/>
    <img className="star" src={Star} alt="starpic"/>
    <img className="star" src={Star} alt="starpic"/>
    </div>


    </div>


    <div className="places-img">
    <img className="pics" src={dis2} alt="dis"/>
    <div className="resort-details">
    <p className='p1'>Desert king</p>
    <p className='p2'>1MBT per night</p>
    </div>
    
    <div className="resort-details">
       <p className='p1'>2345km away</p>
    <p className='p2'>available for 2weeks stay</p>
    </div>
    
    <div className="stars">
    <img className="star" src={Star} alt="starpic"/>
    <img className="star" src={Star} alt="starpic"/>
    <img className="star" src={Star} alt="starpic"/>
    <img className="star" src={Star} alt="starpic"/>
    <img className="star" src={Star} alt="starpic"/>
    </div>


    </div>

    <div className="places-img">
    <img className="pics" src={dis3} alt="dis"/>
    <div className="resort-details">
    <p className='p1'>Desert king</p>
    <p className='p2'>1MBT per night</p>
    </div>
    
    <div className="resort-details">
       <p className='p1'>2345km away</p>
    <p className='p2'>available for 2weeks stay</p>
    </div>
    
    <div className="stars">
    <img className="star" src={Star} alt="starpic"/>
    <img className="star" src={Star} alt="starpic"/>
    <img className="star" src={Star} alt="starpic"/>
    <img className="star" src={Star} alt="starpic"/>
    <img className="star" src={Star} alt="starpic"/>
    </div>


    </div>

    <div className="places-img">
    <img className="pics" src={dis4} alt="dis"/>
    <div className="resort-details">
    <p className='p1'>Desert king</p>
    <p className='p2'>1MBT per night</p>
    </div>
    
    <div className="resort-details">
       <p className='p1'>2345km away</p>
    <p className='p2'>available for 2weeks stay</p>
    </div>
    
    <div className="stars">
    <img className="star" src={Star} alt="starpic"/>
    <img className="star" src={Star} alt="starpic"/>
    <img className="star" src={Star} alt="starpic"/>
    <img className="star" src={Star} alt="starpic"/>
    <img className="star" src={Star} alt="starpic"/>
    </div>


    </div>

    <div className="places-img">
    <img className="pics" src={dis5} alt="dis"/>
    <div className="resort-details">
    <p className='p1'>Desert king</p>
    <p className='p2'>1MBT per night</p>
    </div>
    
    <div className="resort-details">
       <p className='p1'>2345km away</p>
    <p className='p2'>available for 2weeks stay</p>
    </div>
    
    <div className="stars">
    <img className="star" src={Star} alt="starpic"/>
    <img className="star" src={Star} alt="starpic"/>
    <img className="star" src={Star} alt="starpic"/>
    <img className="star" src={Star} alt="starpic"/>
    <img className="star" src={Star} alt="starpic"/>
    </div>


    </div>

    <div className="places-img">
    <img className="pics" src={dis6} alt="dis"/>
    <div className="resort-details">
    <p className='p1'>Desert king</p>
    <p className='p2'>1MBT per night</p>
    </div>
    
    <div className="resort-details">
       <p className='p1'>2345km away</p>
    <p className='p2'>available for 2weeks stay</p>
    </div>
    
    <div className="stars">
    <img className="star" src={Star} alt="starpic"/>
    <img className="star" src={Star} alt="starpic"/>
    <img className="star" src={Star} alt="starpic"/>
    <img className="star" src={Star} alt="starpic"/>
    <img className="star" src={Star} alt="starpic"/>
    </div>


    </div>

    <div className="places-img">
    <img className="pics" src={dis7} alt="dis"/>
    <div className="resort-details">
    <p className='p1'>Desert king</p>
    <p className='p2'>1MBT per night</p>
    </div>
    
    <div className="resort-details">
       <p className='p1'>2345km away</p>
    <p className='p2'>available for 2weeks stay</p>
    </div>
    
    <div className="stars">
    <img className="star" src={Star} alt="starpic"/>
    <img className="star" src={Star} alt="starpic"/>
    <img className="star" src={Star} alt="starpic"/>
    <img className="star" src={Star} alt="starpic"/>
    <img className="star" src={Star} alt="starpic"/>
    </div>


    </div>
    <div className="places-img">
    <img className="pics" src={dis8} alt="dis"/>
    <div className="resort-details">
    <p className='p1'>Desert king</p>
    <p className='p2'>1MBT per night</p>
    </div>
    
    <div className="resort-details">
       <p className='p1'>2345km away</p>
    <p className='p2'>available for 2weeks stay</p>
    </div>
    
    <div className="stars">
    <img className="star" src={Star} alt="starpic"/>
    <img className="star" src={Star} alt="starpic"/>
    <img className="star" src={Star} alt="starpic"/>
    <img className="star" src={Star} alt="starpic"/>
    <img className="star" src={Star} alt="starpic"/>
    </div>


    </div>
    </div>
   
   </div>


   </main>

   <section>
   <div className='meta-nft'>
    
   
            <h1>Metabnb NFTs</h1>
            <p>
              Discover our NFT gift cards collection. Loyal customers gets
              amazing gift cards which are traded as NFTs. These NFTs gives our
              cutomer access to loads of our exclusive services.
            </p>
            
            <button> Learn more </button>
            </div>


          <div>
            <img className="nftt" src={Nftt} alt="nft-img" />
          </div>
      
   </section>
   
   
   
    <footer>
  
  
  <img className="met" src={Meta_footer} alt="met1"/>
  
  


    </footer>
    </div> 
    </div>
  )
}

export default Home