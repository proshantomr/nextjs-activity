import React from 'react';
import Link from "next/link";
import Image from "next/image";
import banner from "@/app/assets/image/heroSection/hero.png";


const HeroSection = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 px-5">

                <div className="my-5">
                    <p className="text-6xl ">Lost And Found Made Easy</p>
                    <p className="text-2xl mt-6">Found or lost something valuable? Post here to help return it.</p>
                    <div className="flex my-5">
                        <button className="btn btn-info">POST A FIND ITEM</button>
                        <button className="btn btn-info mx-4">CLAIM ITEM</button>
                    </div>
                </div>
            <div className="my-5">
                <Image className=" w-5/6   " src={banner} alt="logo"/>
            </div>

        </div>
    );
};

export default HeroSection;
