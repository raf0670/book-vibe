import React from 'react';
import bannerImg from "../../assets/pngwing 1.png";

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-[70vh] rounded-2xl w-11/12 sm:w-10/12 mx-auto mb-10">
            <div className="hero-content flex-col lg:flex-row-reverse w-full justify-between">
                <img
                    src={bannerImg}
                    className="max-w-sm rounded-lg"
                />
                <div className='space-y-10'>
                    <h1 className="text-7xl font-bold">Books to freshen up<br></br>your bookshelf</h1>
                    <button className="btn btn-success text-white">View The List</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;