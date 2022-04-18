import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import gym from '../../../images/gym/gym-7.jpg';
import gym1 from '../../../images/gym/gym-8.jpg';
import gym2 from '../../../images/gym/gym-3.jpg';

const Banner = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (

        <div >

            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"

                        src={gym}
                        alt="First slide"
                    />
                    <Carousel.Caption >
                        <h3>Get the latest expert fitness advice</h3>
                        <p>Research has shown that it's important to get all four types of exercise.</p>
                    </Carousel.Caption>
                </Carousel.Item >
                <Carousel.Item>
                    <img

                        className="d-block w-100 "
                        src={gym1}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>What fitness means?</h3>
                        <p>
                            Image result for fitness
                            Fitness means the condition of being physically and mentally fit with good health.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-50"
                        src={gym2}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>What is called health?
                        </h3>
                        <p>
                            It is the ability to carry out daily tasks with vigor and alertness, without undue fatigue.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;