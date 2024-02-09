"use clients"
import React from 'react'
import {Card,CardBody, CardFooter, Image, Button} from "@nextui-org/react";

const Cards = () => {
  const list = [
    {
      title: "Amazon",
      img: "/img1.jpeg",
      
    },
    {
      title: "Shopify",
      img: "/img2.jpeg",
     
    },
    {
      title: "Ajio",
      img: "/img3.jpeg",
     
    },
    {
      title: "Flipkart",
      img: "/img4.jpeg",
    
    },
   
  ];
  return (
    <div className='flex flex-col items-center justify-center mt-10'>
        <h1 className='text-[40px] font-semibold py-20'>
            Choose your shop...
        </h1>
        <div className="gap-12 grid grid-col sm:grid-cols-4 pl-20 pr-20">
      {list.map((item, index) => (
        <Card shadow="sm" key={index}
        isPressable
        radius="lg"
        className="border-none"
       >
        <CardBody className='p-0'>
        <Image
          alt="Woman listing to music"
          className="object-cover"
          height="100%"
          width="100%"
          src={item.img}
         
        />
        </CardBody>
        <CardFooter className="text-small justify-between mt-0 bg-[#f5f5f5]">
          <b>{item.title}</b>
          <p>Track</p>
           </CardFooter>
      </Card>
      ))}
    </div>

    </div>
  )
}

export default Cards