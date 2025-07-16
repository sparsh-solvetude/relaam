"use client"
import React, { useRef, useEffect, useState } from 'react';
import Head from 'next/head';
import { Showcase } from './_showcase';
import { Info } from './_info';
import { Form } from './_form';

const CareerPage = () => {
    return (
        <div className="bg-white">
            <Head>
                <title>Career | Relaam</title>
                <meta name="description" content="Discover the story behind Relaam" />
            </Head>
            
            <Showcase />
            <Info />
            <Form />
      
      </div>
    );
};

export default CareerPage;