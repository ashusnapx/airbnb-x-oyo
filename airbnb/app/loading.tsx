import Image from "next/image";
import React from "react";

export default function Loading() {
    return (
        <div className="w-screen h-screen flex justify-center items-center flex-col">
            <Image src="https://raw.githubusercontent.com/TusharVashishth/Airbnb_clone/main/public/images/logo.png" width={300} height={300} alt="logo" />
            <h1 className="mt-3 text-2xl">
                Please wait loading some best homes for you..
            </h1>
        </div>
    );
}