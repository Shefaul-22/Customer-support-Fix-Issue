import React from 'react';
import vector1Img from '../assets/vector1.png';
import vector2Img from '../assets/image.png'

const Hero = ({ inProgress, resolved }) => {
    return (
        <div className=" bg-[#F5F5F5] py-6 md:py-8 lg:py-10">

            <div className=" max-w-7xl mx-auto flex gap-6">



                <div className=" w-2xl flex bg-gradient-to-r from-[#632EE3] to-[#9F62F2] items-center justify-between relative py-8 md:py-14 lg:py-16 h-24 md:h-48 lg:h-56 rounded-md">


                    <div className=''>
                        <img
                            src={vector1Img}
                            alt="Left vector"
                            className=" h-24 md:h-48  lg:h-56 object-cover opacity-100"
                        />
                    </div>



                    <p className=" text-center space-y-2 text-[16px] md:text-2xl lg:text-3xl text-[#F5F5F5]">
                        Inprogress <br /> <span className='font-semibold text-2xl md:text-4xl lg:text-6xl'>{inProgress}</span>

                    </p>



                    <div>
                        <img
                            src={vector2Img}
                            alt="Right vector"
                            className="  h-24 md:h-48 lg:h-56 opacity-100"
                        />
                    </div>


                </div>

                <div className=" w-2xl flex bg-gradient-to-r from-[#54CF68] to-[#00827A] items-center justify-between relative py-8 md:py-14 lg:py-16 h-24 md:h-48 lg:h-56 rounded-md">


                    <div className=''>
                        <img
                            src={vector1Img}
                            alt="Left vector"
                            className=" h-24 md:h-48 lg:h-56 object-cover opacity-100"
                        />
                    </div>



                    <p className=" text-center space-y-2 text-[16px] md:text-2xl lg:text-3xl text-[#F5F5F5] ">
                        Resolved <br /> <span className='font-semibold text-2xl md:text-4xl lg:text-6xl'>{resolved}</span>

                    </p>



                    <div>
                        <img
                            src={vector2Img}
                            alt="Right vector"
                            className=" h-24 md:h-48 lg:h-56 opacity-100"
                        />
                    </div>


                </div>





            </div>
        </div>
    );
};

export default Hero;