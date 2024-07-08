import React from 'react';
import Image from "next/image";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { MdContactMail } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { BiSolidBellRing } from "react-icons/bi";
import { IoDocument } from "react-icons/io5";
import { MdOutlineAccessTime } from "react-icons/md";
import { IoMdInformationCircle } from "react-icons/io";






const TipsSection = () => {
    return (
        <div className="container mx-auto px-5 my-24">
            <h2 className="text-3xl ml-8">Tips</h2>
            <div className="box-content p-4 border-4 mt-4">
                <h3 className="font-bold">Tips for Reporting Lost or Found Items</h3>
                <div className=" grid grid-cols-1 md:grid-cols-2 mt-6 ">
                    <div>
                        <div className="flex">
                            <div className="h-10 w-12 rounded-full bg-indigo-500 flex items-center justify-center">
                                <AiOutlineExclamationCircle className="h-6 w-6 text-white"/>
                            </div>
                            <p className="ml-4">Immediately report any lost or found items.</p>
                        </div>
                        <div className="flex mt-4">
                            <div className="h-10 w-12 rounded-full bg-indigo-500 flex items-center justify-center">
                                <MdContactMail  className="h-6 w-6 text-white"/>
                            </div>
                            <p className="ml-4">Include contact information for quick resolution.</p>
                        </div>
                        <div className="flex mt-4">
                            <div className="h-10 w-12 rounded-full bg-indigo-500 flex items-center justify-center">
                                <IoSearch className="h-6 w-6 text-white"/>
                            </div>
                            <p className="ml-4">Search the platform regularly for any new information.</p>
                        </div>
                        <div className="flex mt-4">
                            <div className="h-10 w-12 rounded-full bg-indigo-500 flex items-center justify-center">
                                <BiSolidBellRing className="h-6 w-6 text-white"/>
                            </div>
                            <p className="ml-4">Set up notifications for any updates on your report.</p>
                        </div>
                    </div>


                    <div>
                        <div className="flex">
                            <div className="h-10 w-12 rounded-full bg-indigo-500 flex items-center justify-center">
                                <IoDocument className="h-6 w-6 text-white"/>
                            </div>
                            <p className="ml-4">Provide clear and detailed descriptions.</p>
                        </div>
                        <div className="flex mt-4">
                            <div className="h-10 w-12 rounded-full bg-indigo-500 flex items-center justify-center">
                                <MdOutlineAccessTime className="h-6 w-6 text-white"/>
                            </div>
                            <p className="ml-4">Keep checking the platform for updates.</p>
                        </div>
                        <div className="flex mt-4">
                            <div className="h-10 w-12 rounded-full bg-indigo-500 flex items-center justify-center">
                                <AiOutlineExclamationCircle className="h-6 w-6 text-white"/>
                            </div>
                            <p className="ml-4">Verify the identity of the person before returning items.</p>
                        </div>
                        <div className="flex mt-4">
                            <div className="h-10 w-12 rounded-full bg-indigo-500 flex items-center justify-center">
                                <IoMdInformationCircle className="h-6 w-6 text-white"/>
                            </div>
                            <p className="ml-4">Stay in touch with community members for better coordination.</p>
                        </div>
                    </div>

                </div>

            </div>


        </div>
    );
};

export default TipsSection;