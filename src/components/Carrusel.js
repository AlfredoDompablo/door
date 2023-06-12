import React from 'react'
import { Carousel, IconButton } from "@material-tailwind/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { Rating } from "@material-tailwind/react";
import { HeartIcon as RatedIcon } from "@heroicons/react/24/solid";
import { HeartIcon as UnratedIcon } from "@heroicons/react/24/outline";
import Navbar from './Navbar';
import Filters from './Filters';
import Footer from './Footer';

const Carrusel = () => {
    return (
        <div>
            <Navbar />
            <Filters />

            <div className='grid grid-cols-2 p-12 bg-red-300'>
                {/* PRIMERA PARTE */}
                <div className='col-span-2
                                sm:col-span-1'>
                    <Carousel
                        className="rounded-xl max-h-96 "
                        prevArrow={({ handlePrev }) => (
                            <IconButton
                                variant="text"
                                color="white"
                                size="lg"
                                onClick={handlePrev}
                                className="!absolute top-2/4 -translate-y-2/4 left-4"
                            >
                                <ArrowLeftIcon strokeWidth={2} className="w-6 h-6" />
                            </IconButton>
                        )}
                        nextArrow={({ handleNext }) => (
                            <IconButton
                                variant="text"
                                color="white"
                                size="lg"
                                onClick={handleNext}
                                className="!absolute top-2/4 -translate-y-2/4 !right-4"
                            >
                                <ArrowRightIcon strokeWidth={2} className="w-6 h-6" />
                            </IconButton>
                        )}
                    >
                        <img
                            src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
                            alt="image 1"
                            className="h-full w-full object-cover"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                            alt="image 2"
                            className="h-full w-full object-cover"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
                            alt="image 3"
                            className="h-full w-full object-cover"
                        />
                    </Carousel>
                </div>


                {/* SEGUNDA PARTE */}

                {/* INICIO VALORES LUGAR */}
                <div className='text-left my-3
                                sm:mx-5
                                sm:my-3'>
                    <div class="">
                        <label
                            for="Descripcion"
                            class="block text-sm font-semibold text-black">
                            DESCRIPCIÓN
                        </label>
                    </div>
                    <div class="">
                        <label
                            for="Descripcion"
                            class="block text-sm font-semibold text-black">
                            PRECIO
                        </label>
                    </div>
                    
                    


                    







                </div> {/* FIN VALORES LUGAR */}

            </div>
            <Footer />
        </div>
    )
}

export default Carrusel