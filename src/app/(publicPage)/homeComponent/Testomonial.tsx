import React from 'react';
import testimonial from "@/app/assets/image/testimonial/testimonial2.png";
import testimonial1 from "@/app/assets/image/testimonial/testimonial.jpg";
import Image from "next/image";


const Testomonial = () => {
    return (


        <div className=" mx-auto px-5 my-24">
            <h2 className="text-3xl ml-8">Testimonials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex my-5 shadow-xl p-4">
                    <Image className="w-40 h-40" src={testimonial} alt="logo"/>
                    <div className="my-5 mx-2">
                        <h3 className="text-xl font-semibold">John Doe</h3>
                        <p>I found my lost dog thanks to this platform! Highly recommend it.</p>
                    </div>
                </div>
                <div className="flex my-5 shadow-xl p-4">
                    <Image className="w-40 h-40" src={testimonial1} alt="logo"/>
                    <div className="my-5 mx-2">
                        <h3 className="text-xl font-semibold">Jane Smith</h3>
                        <p>I was able to return a lost wallet to its owner. Great community effort!</p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Testomonial;