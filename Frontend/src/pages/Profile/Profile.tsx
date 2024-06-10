import React, { useState } from 'react';
import "./Profile.scss";
import Navbar from "../../components/Navbar/Navbar.tsx";
import familyProfile from "../../assets/Familyprofile.avif";

const familyMembers = [
    { name: "Rohith", age: 25, role: "Son"},
    { name: "Yashwanth", age: 22, role: "Brother", },
    { name: "Veneela", age: 20, role: "Wife"},
    { name: "Saradhi", age: 18, role: "Father", },
    { name: "Durga", age: 16, role: "Mother"}
];

const Profile = () => {
    const [click, setClick] = useState(false);
    const [burgerClass, setBurgerClass] = useState("Hamburger-icon");
    const [menuState, setMenuState] = useState("disabled");

    function handleClick() {
        setClick(!click);
        if (!click) {
            setBurgerClass("Hamburger-icon clicked");
            setMenuState("active");
        } else {
            setBurgerClass("Hamburger-icon unclicked");
            setMenuState("disabled");
        }
    }

    return (
        <div className='profile-page'>
            <Navbar />
            <div className={`Hamburger-menu ${menuState}`}>
                <a href="">Profile</a>
                <a href="">Edit</a>
                <a href="">Settings</a>
            </div>
            
            <div className={burgerClass} onClick={handleClick}>
                <div className='Hamburger-line1'></div>
                <div className='Hamburger-line2'></div>
                <div className='Hamburger-line3'></div>
            </div>
            
            <div className="Profile-details-container">
                <div className="profile-photo">
                    <h2>Family Photo</h2>
                    <img className='family-profile' src={familyProfile} alt="Family Profile" />
                </div>
                
                <div className="family-members">
                    <h2>Family Members</h2>
                    {familyMembers.map((member, index) => (
                        <div key={index} className="family-member">
                            <h3>{member.name}</h3>
                            <p><strong>Age:</strong> {member.age}</p>
                            <p><strong>Role:</strong> {member.role}</p>
                            <p><strong>Tasks:</strong></p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Profile;
