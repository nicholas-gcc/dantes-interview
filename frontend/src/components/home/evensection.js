import React from 'react';

const EvenSection = (props) => {
    return (
        <>
            <section className="hero is-white is-fullheight">
                <div className="hero-body">
                <div className="container">
                    <div className="columns  is-vcentered">
                    <div data-aos="fade-left" className="column
                    is-10-mobile is-offset-1-mobile
                    is-10-tablet is-offset-1-tablet
                    is-4-desktop is-offset-1-desktop
                    is-4-widescreen is-offset-1-widescreen
                    is-4-fullhd is-offset-1-fullhd">
                        <figure className="image is-square">
                        <img src={props.img} />
                        </figure>
                    </div>
                    <div data-aos="fade-down" className="column
                    is-10-mobile is-offset-1-mobile
                    is-10-tablet is-offset-1-tablet
                    is-5-desktop is-offset-1-desktop
                    is-5-widescreen is-offset-1-widescreen
                    is-5-fullhd is-offset-1-fullhd">
                        <h1 className="titled title is-1 mb-6">
                            {props.title}
                        </h1>
                        <h2 className="subtitled subtitle">
                            {props.subtitle}
                        </h2>
                    </div>

                    </div>
                </div>
                </div>
            </section>

        </>
    )
}

export default EvenSection;