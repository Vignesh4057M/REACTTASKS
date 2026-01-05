import React from 'react'
import image from '../../../assets/download.png'
import image2 from '../../../assets/mongadb.png'
import image3 from '../../../assets/nodejs.png'
import image4 from '../../../assets/expressjs.png'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons";

import Card from './Card'

const Props = () => {
  return (
    <div className='page-wrapper'>

      <div className='header-bar'>
        <img src="https://img.freepik.com/free-vector/vector-education-logo_779267-2083.jpg?semt=ais_hybrid&w=740&q=80" alt="this is logo" />
        <h3>Online course</h3>

        <div>
          <nav className='nav-links'>
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Contact</a>
            <a href="">Services</a>
          </nav>
        </div>
      </div>

      <div className='card-container'>
        <Card title="React" para="React is a popular JavaScript library used for building user interfaces, especially single-page applications. It allows developers to build UI using reusable components, making development faster and more organized." image={image} />
        <Card title="Mongo DB" para="MongoDB is a popular NoSQL database that stores data in a flexible, JSON-like format called documents. Unlike traditional SQL databases, it does not require tables or fixed schemas, making it great for handling unstructured or rapidly changing data." image={image2} />
        <Card title="Node JS" para="Node.js is a powerful JavaScript runtime environment that allows developers to run JavaScript outside of a web browser. Built on Google’s V8 engine, it is fast, lightweight, and ideal for building server-side applications." image={image3} />
        <Card title="Express JS" para="Express.js is a minimal and flexible Node.js web application framework that provides essential features for building APIs and backend services." image={image4} />
      </div>

      <div className='footer-section'>
        <footer>
          <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faWhatsapp} className='icon-whatsapp' />
            <FontAwesomeIcon icon={faInstagram} className='icon-instagram' />
            <FontAwesomeIcon icon={faTwitter} className='icon-twitter' />
          </a>
        </footer>
      </div>

    </div>
  )
}

export default Props
