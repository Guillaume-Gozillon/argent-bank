import Nav from '../components/Nav'
import Footer from '../components/Footer'

import chat from '../img/icon-chat.png'
import money from '../img/icon-money.png'
import security from '../img/icon-security.png'

import { useEffect, useState } from 'react'
import useFetch from '../useFetch'

const Home = () => {
  {
    /*const useFetch = (url, request) => {

        console.log(request);
      
        useEffect(() => {
         
          const fetchData = async () => {
           
            const response = await fetch(url,{
      
              method: request.method,
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(request.body)
      
            });
            const res = await response.json();
      
            console.log(res);
            
          };
      
          fetchData();
        }, [url,request]);
      
      }

      console.log(useFetch('http://localhost:3001/api/v1/user/signup', GET));
    */
  }

  return (
    <div>
      <Nav />
      <main>
        <div className='slogan-container'>
          <div className='slogan'>
            <p>No fees.</p>
            <p>No minimum deposit.</p>
            <p>High interest rates.</p>
            <p className='lighter'>
              Open a savings account with <br /> Argent Bank today!
            </p>
          </div>
        </div>
        <section className='main-section'>
          <div className='features-item'>
            <div className='circle-icone'>
              <img className='icone' src={chat} alt='chat-icon' />
            </div>
            <h2>You are our #1 priority</h2>
            <p>
              Need to talk to a representative? You can get in touch through our
              24/7 chat or through a phone call in less than 5 minutes.
            </p>
          </div>
          <div className='features-item'>
            <div className='circle-icone'>
              <img className='icone' src={money} alt='money-icon' />
            </div>
            <h2>More savings means higher rates</h2>
            <p>
              The more you save with us, the higher your interest rate will be!
            </p>
          </div>
          <div className='features-item'>
            <div className='circle-icone'>
              <img className='icone' src={security} alt='security-icon' />
            </div>
            <h2>Security you can trust</h2>
            <p>
              We use top of the line encryption to make sure your data and money
              is always safe.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Home
