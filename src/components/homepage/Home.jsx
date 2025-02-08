import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'


function Home() {

  const [showAll, setShowAll] = useState(false);

  const product_container = (<div className="product-container">

    <Link to="/" className='picprocon1'>
      <div className="product-item">
        <img src="/src/assets/Pic/โอบกอดความไม่สมบูรณ์แบบของเธอ 1.png" alt="โอบกอดความไม่สมบูรณ์แบบของเธอ" />
        <h3 className='title-pro'>โอบกอดความไม่สมบูรณ์แบบของเธอ</h3>
      </div>
    </Link>

    <Link to="/" className='picprocon2'>
      <div className="product-item">
        <img src="/src/assets/Pic/จากนี้ไปฉันจะใจดีกับตัวเอง 1.png" alt="แด่คุณที่กลัวการเปลี่ยนแปลงมาตลอดชีวิต" />
        <h3 className='title-pro'>จากนี้ไปฉันจะใจดีกับตัวเอง</h3>
      </div>
    </Link>

    <Link to="/" className='picprocon3'>
      <div className="product-item">
        <img src="/src/assets/Pic/ชีวิตมีเรื่องให้ขอบคุณมากกว่าเสียใจ 1.png" alt="ถ้ามันหวานฉันจะอม ถ้ามันขมฉันจะคาย" />
        <h3 className='title-pro'>ชีวิตมีเรื่องให้ขอบคุณมากกว่าเสียใจ</h3>
      </div>
    </Link>
</div>)

  return (

    <div className="Allhomepage">

              {/* PRE-ORDER NOW */}

      <div className='Home-section'>

        <div className="title">
          <h2>PRE-ORDER NOW</h2>
        </div>
        {product_container}


        {/* <div className="product-container">

              <Link to="/" className='picprocon1'>
                <div className="product-item">
                  <img src="/src/assets/Pic/โอบกอดความไม่สมบูรณ์แบบของเธอ 1.png" alt="โอบกอดความไม่สมบูรณ์แบบของเธอ" />
                  <h3 className='title-pro'>โอบกอดความไม่สมบูรณ์แบบของเธอ</h3>
                </div>
              </Link>

              <Link to="/" className='picprocon2'>
                <div className="product-item">
                  <img src="/src/assets/Pic/จากนี้ไปฉันจะใจดีกับตัวเอง 1.png" alt="แด่คุณที่กลัวการเปลี่ยนแปลงมาตลอดชีวิต" />
                  <h3 className='title-pro'>จากนี้ไปฉันจะใจดีกับตัวเอง</h3>
                </div>
              </Link>

              <Link to="/" className='picprocon3'>
                <div className="product-item">
                  <img src="/src/assets/Pic/ชีวิตมีเรื่องให้ขอบคุณมากกว่าเสียใจ 1.png" alt="ถ้ามันหวานฉันจะอม ถ้ามันขมฉันจะคาย" />
                  <h3 className='title-pro'>ชีวิตมีเรื่องให้ขอบคุณมากกว่าเสียใจ</h3>
                </div>
              </Link>
        </div> */}
      </div>

              {/* PR NEW   */}

        <div className="Home-section-PR">

          <div className="titlePR">
            <h2>PR NEW</h2>  
          </div>

          <div className='product-container-PR'>

            <Link to="/" className='picproPRcon1'>
                <div className="product-PR-item">
                  <img src="/src/assets/Pic/โอบกอดความไม่สมบูรณ์แบบของเธอ 1.png" alt="โอบกอดความไม่สมบูรณ์แบบของเธอ" />
                  <h5 className='title-proPR'>โอบกอดความไม่สมบูรณ์แบบของเธอ</h5>
                </div>
            </Link>

            <Link to="/" className='picproPRcon2'>
                <div className="product-PR-item">
                  <img src="/src/assets/Pic/จากนี้ไปฉันจะใจดีกับตัวเอง 1.png" alt="จากนี้ไปฉันจะใจดีกับตัวเอง" />
                  <h5 className='title-proPR'>จากนี้ไปฉันจะใจดีกับตัวเอง</h5>
                </div>
            </Link>

            <Link to="/" className='picproPRcon3'>
                <div className="product-PR-item">
                  <img src="/src/assets/Pic/ชีวิตมีเรื่องให้ขอบคุณมากกว่าเสียใจ 1.png" alt="ชีวิตมีเรื่องให้ขอบคุณมากกว่าเสียใจ" />
                  <h5 className='title-proPR'>ชีวิตมีเรื่องให้ขอบคุณมากกว่าเสียใจ</h5>
                </div>
            </Link>

            <Link to="/" className='picproPRcon4'>
                <div className="product-PR-item">
                  <img src="/src/assets/Pic/ถ้ามันหวานฉันจะอม ถ้ามันขมฉันจะคาย 1.png" alt="ถ้ามันหวานฉันจะอม ถ้ามันขมฉันจะคาย" />
                  <h5 className='title-proPR'>ถ้ามันหวานฉันจะอม ถ้ามันขมฉันจะคาย</h5>
                </div>
            </Link>

            <Link to="/" className='picproPRcon5'>
                <div className="product-PR-item">
                  <img src="/src/assets/Pic/ทุกคนมีจังหวะชีวิตเป็นของตัวเอง 1.png" alt="ทุกคนมีจังหวะชีวิตเป็นของตัวเอง" />
                  <h5 className='title-proPR'>ทุกคนมีจังหวะชีวิตเป็นของตัวเอง</h5>
                </div>
            </Link>

            <Link to="/" className='picproPRcon6'>
                <div className="product-PR-item">
                  <img src="/src/assets/Pic/ทุกวันคือของขวัญจากตัวเอง 1.png" alt="ทุกวันคือของขวัญจากตัวเอง" />
                  <h5 className='title-proPR'>ทุกวันคือของขวัญจากตัวเอง</h5>
                </div>
            </Link>

            <Link to="/" className='picproPRcon7'>
                <div className="product-PR-item">
                  <img src="/src/assets/Pic/ระหว่างเราสูญหาย 1.png" alt="ระหว่างเราสูญหาย" />
                  <h5 className='title-proPR'>ระหว่างเราสูญหาย</h5>
                </div>
            </Link>

            <Link to="/" className='picproPRcon8'>
                <div className="product-PR-item">
                  <img src="/src/assets/Pic/เราต่างเคยทิ้งบางสิ่งไว้และมันไม่เป็นไรเลย 1.png" alt="เราต่างเคยทิ้งบางสิ่งไว้และมันไม่เป็นไรเลย" />
                  <h5 className='title-proPR'>เราต่างเคยทิ้งบางสิ่งไว้และมันไม่เป็นไรเลย</h5>
                </div>
            </Link>

            <Link to="/" className='picproPRcon9'>
                <div className="product-PR-item">
                  <img src="/src/assets/Pic/เรื่องที่แบกไว้เธอจะวางก็ได้นะ 1.png" alt="เรื่องที่แบกไว้เธอจะวางก็ได้นะ" />
                  <h5 className='title-proPR'>เรื่องที่แบกไว้เธอจะวางก็ได้นะ</h5>
                </div>
            </Link>

            <Link to="/" className='picproPRcon10'>
                <div className="product-PR-item">
                  <img src="/src/assets/Pic/แด่คุณที่กลัวการเปลี่ยนแปลงมาตลอดชีวิต 1.png" alt="แด่คุณที่กลัวการเปลี่ยนแปลงมาตลอดชีวิต" />
                  <h5 className='title-proPR'>แด่คุณที่กลัวการเปลี่ยนแปลงมาตลอดชีวิต</h5>
                </div>
            </Link>

          </div>

          {/* <button className='seeallButtom'>See All</button>
          <button className='hiddenButtom'>Hidden</button> */}
          
        </div>      
    </div>
    
  )
}

export default Home