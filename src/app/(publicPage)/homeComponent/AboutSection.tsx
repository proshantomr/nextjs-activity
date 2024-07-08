import React from 'react';
import Image from "next/image";
import banner from "@/app/assets/image/heroSection/hero.png";

const AboutSection = () => {
    return (
        <div className="container mx-auto px-5 my-24">
            <h2 className="text-3xl ml-8">About US</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 px-5 mt-4">


                <div className="my-5 mt-4">
                    <h2 className="text-xl ">Purpose And Mission</h2>
                    <p className="text-sm mt-2">Our website is dedicated to helping people reconnect with their lost belongings.
                        Whether you have found something valuable or lost an item, our platform provides a space for you
                        to post and claim items,
                        facilitating their return to their rightful owners.
                        Our mission is to make the process of reuniting lost items with their owners as easy and
                        efficient as possible.</p>

                </div>
                <div className="my-5 mt-4">
                    <h2 className=" text-xl ">Team Information</h2>
                    <p className="text-sm mt-2">Meet the dedicated individuals behind our platform who work tirelessly to ensure its smooth operation and success.
                        (Optional: Provide brief information about team members, their roles, and their contributions.)</p>

                </div>

            </div>
        </div>
    );
};

export default AboutSection;