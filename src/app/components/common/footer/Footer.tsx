import React from 'react';
import Image from "next/image";
import logo from "../../../assets/image/img.png"
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import Link from "next/link";




const Footer = () => {
    return (
        <div>
            {/*<div className="box-border h-60 w-full  ">*/}

                <footer className="grid grid-cols-1 md:grid-cols-3 px-5 py-5 bg-slate-200">
                    <div className="my-10 ml-20">
                        <Image className=" w-20 h-12 ml-12 " src={logo} alt="Logo"/>
                        <p>Help by finding lost items</p>
                        <div className=" flex text-blue-800 mx-10 ">
                            <FaFacebookSquare className="h-12"/>
                            <FaTwitter className="h-12 ml-6"/>
                            <FaInstagramSquare className="h-12 ml-6"/>
                        </div>
                        <p className="mt-2 mx-6">lost.found@mail.com</p>
                        <p className=''>123 Sample St, City, Country</p>
                    </div>
                    <div className="my-10 ml-20 mt-20">
                        <h2 className="text-xl">About Lost & Found</h2>
                        <Link className=" mx-10" href="#">About us</Link>
                        <div><Link href="#" className="mx-10">Our Team</Link></div>

                    </div>
                    <div className="my-10 ml-20 mt-20">
                        <h2 className="text-xl">Terms & Condition </h2>
                        <Link className=" mx-2" href="#">Terms of Service</Link>
                        <div><Link href="#" className="mx-4">Privacy Policy</Link></div>

                    </div>

                </footer>
                <div className="py-5 w-full bg-black">
                    <p className="text-center text-white">© 2024 Found and Lost System, Inc. All rights reserved.</p>

                </div>
            {/*</div>*/}


        </div>
    );
};

export default Footer;