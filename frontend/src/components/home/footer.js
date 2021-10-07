import React from 'react';
import Typewriter from 'typewriter-effect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = (props) => {


    // new Typewriter('#typewriter', {
    //     strings: ['learning together', 'the tech interview'],
    //     autoStart: true,
    //     loop: true
    //   });

    return (
        <section className="hero is-medium has-text-centered">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-centered">
              <div data-aos="zoom-in-up" class="column is-8">
                <h1 className="title titled is-1 mb-6">
                  {props.title} 
                  <span>
                    <Typewriter
                      options={{
                        strings: ['the tech interview', 'learning together'],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </span>
                </h1>
                <h2 className="subtitle subtitled">
                  {props.subtitle}
                </h2>
                <FontAwesomeIcon className="icon is-medium mr-4" icon={faGithub} />
                <FontAwesomeIcon className="icon is-medium mr-4" icon={faEnvelope} />
              </div>
            </div>
    
          </div>
        </div>
      </section>
    )
}

export default Footer;