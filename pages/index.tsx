import Head from 'next/head';

import Homepage from '../src/components/Home/Home'
import Script from "next/script";


export default function Home() {
  
  return (
    <div>
      <Head>
        <title>Flio Travels</title>
        <meta name="description" content="Online flight booking available online at affordable prices with top airlines of the country. Visit here for your cheapest flight booking online."/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        <link rel="icon" href="./ftlogo1.jpg" />
        <link    href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous" />
     
    
      

      </Head>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous"/>
      
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-LV873WKRTC" />
        <Script id="google-analytics" strategy="afterInteractive" >
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-LV873WKRTC');
          `}
      </Script>
      
      <Homepage/>
     
    </div>
  )
}