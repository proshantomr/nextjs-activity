import React from 'react';
import Navbar from "@/app/components/common/navbar/Navbar";
import team1 from "../../assets/image/testimonial/testimonial.jpg";
import team2 from "../../assets/image/testimonial/testimonial2.png";
import team3 from "../../assets/image/testimonial/testumonial3.jpg";
import Image from "next/image";


const Page = () => {
    return (
        <div>
            <Navbar/>
            <main className="container mx-auto px-50">
                <div className="py-10 ml-4">
                    <h2 className="text-4xl">Our Mission</h2>
                    <p className="mt-5">Our mission is to provide a reliable platform for helping people find their lost items.
                        We strive to create a community where everyone can feel safe and supported in their time of need.</p>
                </div>
                <div className="py-10 ml-4">
                    <h2 className="text-4xl">Found and Lost System</h2>
                    <p className="mt-5">The "Found and Lost System" is a platform where individuals can help each other by reporting and finding lost items.
                        Whether it's a misplaced phone, a lost pet, or any other valuable possession, our platform connects people to aid in the recovery process.
                        Together, we strive to reunite lost items with their rightful owners and foster a sense of community support.</p>
                </div>
                <div>
                    <h2 className="text-4xl ml-4">Meet Our Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-3">
                        <div className="card glass mx-10 my-10 bg-slate-100 shadow-2xl">
                            <figure>
                                <Image className=" w-36 h-32 mt-2" src={team1} alt="teamMember"/>
                            </figure>
                            <div className="card-body text-center">
                                <h2 className="font-bold text-center ">Daniel Marko</h2>
                                <p>CEO</p>
                            </div>
                        </div>
                    <div className="card glass mx-10 my-10 bg-slate-100 shadow-2xl">
                            <figure>
                                <Image className=" w-36 h-32 mt-2" src={team2} alt="teamMember"/>
                            </figure>
                            <div className="card-body text-center">
                                <h2 className="font-bold text-center ">Arshi Doby</h2>
                                <p>CTO</p>
                            </div>
                        </div>
                    <div className="card glass mx-10 my-10 bg-slate-100 shadow-2xl">
                            <figure>
                                <Image className=" w-36 h-32 mt-2" src={team3} alt="teamMember"/>
                            </figure>
                            <div className="card-body text-center">
                                <h2 className="font-bold text-center ">Willium Makro</h2>
                                <p>CFO</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" bg-slate-100" >
                    <div className="  text-center py-10">
                        <h2 className="text-4xl" >Contact Us</h2>
                        <p className="mt-4">If you have any questions or need assistance, feel free to reach out to us.</p>
                        <p className="mt-4">Address: 1234 Lost & Found Lane, Somewhere City, Country</p>
                    </div>

                </div>
            </main>


        </div>
    );
};

export default Page;