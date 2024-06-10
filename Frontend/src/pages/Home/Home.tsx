import * as React from 'react';
import Navbar from "../../components/Navbar/Navbar.tsx";
import "./Home.scss";
import Slider from "react-slick";
import ReviewCard from "../../components/reviewCard/ReviewCard.tsx";
import { Link } from 'react-router-dom';

export interface HomeProps {}

export default function Home(props: HomeProps) {
    function Arrow(props: any) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "black" }}
                onClick={onClick}
            />
        );
    }

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <Arrow />,
        prevArrow: <Arrow />
    };

    return (
        <div className='home'>
            <Navbar />
            <div className="home-welcome-container">
                <h1>Welcome to our Family Task Management System</h1>
                <p>We help you manage tasks and events efficiently within your family</p>
            </div>
            <div className="home-login-container">
                <p>Login to prioritize your tasks and collaborate with each other in your family!</p>
                <Link to={"/login"}>
                <button>Login here</button>
                </Link>
            </div>
            <div className="home-features-container">
                <h2>Key Features</h2>
                <ul>
                    <li>Task Management</li>
                    <li>Event Scheduling</li>
                    <li>Collaboration Tools</li>
                    <li>Priority Settings</li>
                    <li>Customizable Categories</li>
                </ul>
            </div>
            <div className="home-benefits-container">
                <h2>Benefits</h2>
                <ul>
                    <li>Improved Organization</li>
                    <li>Enhanced Communication</li>
                    <li>Increased Productivity</li>
                    <li>Less Stress</li>
                    <li>More Quality Family Time</li>
                </ul>
            </div>
            <div className="home-task-container">
                <h2>Your Tasks</h2>
                <p>View and manage tasks specific to your family</p>
                {/* Render tasks here */}
            </div>
            <Slider {...settings}>
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
            </Slider>
            <div className="Footer-home">
                <p>Developed By Rohith</p>
                <div className="contact-details">
                    <div className="each-contact">
                        <img src="" alt="LinkedIn-icon" />
                        <p>Linked In</p>
                    </div>
                    <div className="each-contact">
                        <img src="" alt="Email-icon" />
                        <p>Email</p>
                    </div>
                    <div className="each-contact">
                        <img src="" alt="Github-icon" />
                        <p>Github</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
