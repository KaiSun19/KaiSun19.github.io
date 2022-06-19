import { StyledEngineProvider } from '@mui/material';
import React, { useEffect, useState, useRef } from 'react';
import '../Styles/Contact.scss';
import AnimeLetters from './AnimeLetters';
import Background from './Background';
import NavBar from './NavBar';
import emailjs from '@emailjs/browser';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';


function Contact() {

    const [letterClass, setLetterClass] = useState("text-animate")

    const form  = useRef();

    useEffect(() => { // after all characters have loaded the classname of each character is set to the hover style
        setTimeout(() => {
         setLetterClass('text-animate-hover')
       }, 3000)
     }, [])

     const contact_array = [ "C", "o", "n", "t", "a", "c", "t", " " ,"M", "e"]


     const sendEmail = (e) =>{

        e.preventDefault();

        emailjs.sendForm(
            "service_k011s1o",
            "contac-form",
            form.current,
            "ymhmctcJl8uzKsLOk"
        ).then(
            () => {
                alert('Message successfully sent!')
                window.location.reload(false)
            },
        () => {
            alert("Message failed to send")
        }
        )
     }




  return (

    <StyledEngineProvider injectFirst>

        <Background />
        <NavBar />

        <div className='container contact-page'>

            <span className="tags top-tags">&lt;body&gt;</span>

            <div className='text-zone contact-text-zone'>
                
                <h1>
                    <AnimeLetters letterClass = {letterClass} letterArray = {contact_array} idx = {10} ></AnimeLetters>
                </h1>

                <div className="contact-form">
                <form ref={form} onSubmit={sendEmail}>
                <ul>
                    <li className="half">
                    <input placeholder="Name" type="text" name="user_name" required />
                    </li>
                    <li className="half">
                    <input
                        placeholder="Email"
                        type="email"
                        name="email"
                        required
                    />
                    </li>
                    <li>
                    <input
                        placeholder="Subject"
                        type="text"
                        name="subject"
                        required
                    />
                    </li>
                    <li>
                    <textarea
                        placeholder="Message"
                        name="message"
                        required
                    ></textarea>
                    </li>
                    <li>
                    <input type="submit" className="flat-button" value="SEND" />
                    </li>
                </ul>
                </form>
            </div>

          </div>

          <div className="info-map">
            Kai Sun,
            <br />
            United Kingdom
            <br />
             <br />
             27-28 Gordon Square, London <br />
            <br />
            <span>yksun15@gmail.com</span>
            </div>
        
            <div className="map-wrap">
            <MapContainer center={[51.52488928401956, -0.1322312269547322]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[51.52488928401956, -0.1322312269547322]}>
              <Popup>I work here most of the time. Come for a cup of coffee !</Popup>
            </Marker>
          </MapContainer>
            </div>


            <span className="tags bottom-tags">
          &lt;/body&gt;
          <br />
          <span className="bottom-tag-html">&lt;/html&gt;</span>
        </span>

        </div>

    </StyledEngineProvider>

  )
}

export default Contact