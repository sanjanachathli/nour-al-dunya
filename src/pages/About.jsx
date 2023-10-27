import React from 'react'
import logo from '../assets/images/logo.png'
const About = () => {
  return (
    <div>
      <header
        style={{
          backgroundColor: '#333',
          color: '#fff',
          textAlign: 'center',
          padding: '20px 0'
        }}
      >
        <h1>Nour Al Dunya</h1>
        <p>Its Time To Travel</p>
        <img
          src={logo}
          alt='Wanderlust Adventures Logo'
          style={{ maxWidth: '150px' }}
        />
      </header>

      <div
        className='container'
        style={{
          width: '80%',
          margin: '0 auto',
          padding: '20px',
          backgroundColor: '#fff'
        }}
      >
        <div className='social-links' style={{ margin: '20px 0' }}>
          <a
            href='insert-instagram-link-here'
            style={{ textDecoration: 'none', color: '#333' }}
          >
            Follow us on Instagram
          </a>
          <br />
          <a
            href='insert-facebook-link-here'
            style={{ textDecoration: 'none', color: '#333' }}
          >
            Like us on Facebook
          </a>
        </div>

        <div className='contact-info'>
          <p>
            <strong>Name:</strong> Shamir Soofi Saheb
            <br />
            <strong>Mobile:</strong> +971 50 8687325
            <br />
            <strong>Website:</strong>{' '}
            <a target='_blank' href='https://www.nouraldunya.com'>www.nouraldunya.com</a>
            <br />
            <strong>Address:</strong> Office #M75, Al Mamzar Bldg. Hor Al Anz,
            Deira - Dubai, U.A.E
          </p>
        </div>

        <div className='additional-info' style={{ marginTop: '20px' }}>
          <p>
            At Nour Al Dunya, we take pride in crafting custom itineraries that
            match your interests, budget, and travel style. Whether you're
            dreaming of a relaxing beach vacation, an adrenaline-packed trek, or
            a cultural immersion, we've got you covered.
          </p>
          <p>
            Our team of experienced travel experts is always just a phone call
            or an email away, ready to assist you with planning your next
            adventure.
          </p>
          <p>
            We value sustainable and responsible tourism, striving to leave a
            positive impact on the destinations we visit.
          </p>
          <p>
            Join our community of fellow travelers, and let's make your next
            journey a remarkable one!
          </p>
        </div>

        <div style={{ display: 'flex' }}>
          <img
            src='/assets/images/gallery-03.webp'
            alt='A Beautiful Travel Destination'
            className='destination-image'
            style={{ width: '50%', marginTop: '20px' }}
          />
          <img
            src='/assets/images/gallery-01.jpg'
            alt='A Beautiful Travel Destination'
            className='destination-image'
            style={{ width: '50%', marginTop: '20px' }}
          />
        </div>
      </div>
    </div>
    )
}


export default About
