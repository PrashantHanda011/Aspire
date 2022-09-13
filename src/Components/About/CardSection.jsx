import React from 'react'
import { Col, Row } from 'react-bootstrap'
import AboutTopImage from "../../Assets/Images/AboutTopImage.png"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "../../Assets/About/About.css"
import aboutUsBottomBakground from "../../Assets/Images/aboutUsBottomBackground.png"

function CardSection() {
    return (
        <>
            <section className='Meetteam row'>
                <article className="Meetteam__head col d-flex justify-content-center align-items-center flex-column">
                    <h3>
                        Meet Our Team
                    </h3>
                    <span ></span>
                    <img src="" alt="" />
                    <p> fugit consequatur enim cum quo vero, dicta quae mollitia eveniet voluptatibus numquam quisquam unde aperiam perspiciatis harum nobis eaque iste sed.</p>
                </article>
                <div className="row d-flex justify-content-center">
                    <div className="col-10 col-lg-8">

                <main className='d-flex Meetteam__cards flex-column flex-lg-row'>
                    
                    <div className='Meetteam__cards__content me-lg-5 mb-lg-0 mb-4'>
                        <img src={aboutUsBottomBakground} alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod facilis maiores laboriosam nostrum consectetur quidem error, non tempore? </p>

                        <div className="row mt-4  Meetteam__cards__content__Social w-100 ">

                            <div className="col Meetteam__cards__content__Social__left d-flex flex-column align-items-center">
                                <LinkedInIcon />
                                <p className="row">Connect with Us</p>
                            </div>
                            <div className="col Meetteam__cards__content__Social__right d-flex flex-column align-items-center">
                                <h5 className="row">Name</h5>
                                <p className="row">Designation</p>
                            </div>
                        </div>
                    </div>

                    <div className='Meetteam__cards__content ms-lg-5'>
                        <img src={aboutUsBottomBakground} alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod facilis maiores laboriosam nostrum consectetur quidem error, non tempore? </p>
                        <div className="row mt-4 Meetteam__cards__content__Social w-100">
                            
                        <div className="col Meetteam__cards__content__Social__left d-flex flex-column align-items-center">
                                <LinkedInIcon />
                                <p className="row">Connect with Us</p>
                            </div>
                            <div className="col Meetteam__cards__content__Social__right d-flex flex-column align-items-center">
                                <h5 className="row">Name</h5>
                                <p className="row">Designation</p>
                            </div>
                        </div>
                    </div>

                </main>
                    </div>
                </div>
            </section>
        </>

    )
}

export default CardSection