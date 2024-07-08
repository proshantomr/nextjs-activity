import React from 'react';
import Image from "next/image";
import lostItem1 from "../../assets/image/lostItem/laptop.jpg"
import lostItem2 from "../../assets/image/lostItem/phone.jpg"
import lostItem3 from "../../assets/image/lostItem/Rottweiler.jpg"
import lostItem4 from "../../assets/image/lostItem/cat.jpg"
import lostItem5 from "../../assets/image/lostItem/golden-retriever.jpg"
import lostItem6 from "../../assets/image/lostItem/bike.webp"


const LostItem = () => {
    return (
        <div className="container mx-auto px-5 my-24">
            <h2 className="text-3xl ml-8">Recent Lost Item Reports</h2>
            <div className=" grid grid-cols-1 md:grid-cols-3 px-5">
                <div className=" my-5">
                    <div className="card glass mx-4 shadow-2xl">
                        <figure>
                            <Image className="h-56" src={lostItem1} alt="money bag"/>
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Laptop</h2>
                            <p>How to park your car at your garage?</p>
                            <div className="card-actions justify-start">
                                <button className="btn btn-primary">Details!</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" my-5">
                    <div className="card glass mx-4 shadow-2xl">
                        <figure>
                            <Image className="h-56" src={lostItem2} alt="money bag"/>
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Phone</h2>
                            <p>How to park your car at your garage?</p>
                            <div className="card-actions justify-start">
                                <button className="btn btn-primary">Details!</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" my-5">
                    <div className="card glass mx-4 shadow-2xl">
                        <figure>
                            <Image className="h-56" src={lostItem3} alt="money bag"/>
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Rottweiler</h2>
                            <p>How to park your car at your garage?</p>
                            <div className="card-actions justify-start">
                                <button className="btn btn-primary">Details!</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" my-5">
                    <div className="card glass mx-4 shadow-2xl">
                        <figure>
                            <Image className="h-56" src={lostItem4} alt="money bag"/>
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Cat</h2>
                            <p>How to park your car at your garage?</p>
                            <div className="card-actions justify-start">
                                <button className="btn btn-primary">Details!</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" my-5">
                    <div className="card glass mx-4 shadow-2xl">
                        <figure>
                            <Image className="h-56" src={lostItem5} alt="money bag"/>
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Golden Retriever</h2>
                            <p>How to park your car at your garage?</p>
                            <div className="card-actions justify-start">
                                <button className="btn btn-primary">Details!</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" my-5">
                    <div className="card glass mx-4 shadow-2xl">
                        <figure>
                            <Image className="h-56" src={lostItem6} alt="money bag"/>
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Bike</h2>
                            <p>How to park your car at your garage?</p>
                            <div className="card-actions justify-start">
                                <button className="btn btn-primary">Learn now!</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
        ;
};

export default LostItem;