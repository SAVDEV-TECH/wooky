import React from 'react'

function cookies() {
  return (
    <div className='w-[90%] md:w-[70%] mx-auto py-7'>
    <div className="">
      <h3 className='mt-7 bg-[#DBD8FC] w-max rounded-[18px] py-2 px-6'>Cookies Policy for Arc Store</h3>
      .
      <div className="w-[100%] mx-auto">
      <h2 className='font-bold text-[32px]'>Introduction</h2>
      <p className=' pl-0  pr-5'> Arc Store uses cookies and similar technologies to enhance your experience when using our platform. This Cookies Policy explains what cookies are, how we use them, and how you can control them.</p>
      </div>
    

      <div className="w-[100%] mt-5 mx-auto">
      <h2 className='font-bold  text-[32px]'>What Are Cookies?</h2>
      <p className=' pl-0  pr-5'> Cookies are small data files placed on your device (computer, smartphone, or tablet) when you visit a website. These files allow the site to recognize your device and store certain information about your preferences and past actions. .</p>
      </div>
      <div className=" mt-5">
         {/* <ul className='flex flex-col gap-4 list-disc pl-4'>
          <li> <span className='font-bold mr-2'>1</span>
              <span className='font-bold'>Personal information :</span>
              <p>When you create an account, purchase services or use Arc Store we may collect the following types of personal information</p>
               </li>
               <li className='font-bold'>Name</li>
               <li className='font-bold'>Email address</li>
               <li className='font-bold'>Phone Number</li>
               <li className='font-bold'>Payment information example (credit card details ,billing details)</li>
               <li className='font-bold'>Location data (if enable by you)</li>
               <li className='font-bold'>profile picture and an accounting setting</li>
               <li className='font-bold'>Any content you upload to the platform</li>
         </ul> */}
              
         {/* <ul className='flex flex-col mt-10 gap-4 list-disc pl-4'>
          <li> <span className='font-bold mr-2'>2</span>
              <span className='font-bold'>Technical Usage information :</span>
              <p>We also collect technical data to ensure optimal performance to the Services such as</p>
               </li>
               <li className='font-bold'>Ip address</li>
               <li className='font-bold'>Browser type and version </li>
               <li className='font-bold'>Device type and operating system</li>
               <li className='font-bold'> Usage data (e.g page interaction , features used)</li>
               <li className='font-bold'>cookies and similar technologies</li>
 
         </ul> */}
       <div className=' mt-10'>
        <h1 className='font-bold mb-4 text-[32px]'>Types of Cookies We Use</h1>
       <ul className="flex flex-col gap-3">
         <li> 
            <span className='font-bold mr-2'>1.</span>
              <span className='font-bold'>Essential cookies</span>
              <p>  These cookies are necessary for the operation of our platform. They enable basic functions like page navigation and access to secure areas of the website. Without these cookies, certain features cannot be provided.</p>
               </li>

               <li> 
            <span className='font-bold mr-2'>2.</span>
              <span className='font-bold'>Annalytic cookies:</span>
              <p>  We use these cookies to analyze how users interact with Arc Store. This helps us monitor performance and make improvements. The data collected is anonymized and used in aggregate form.</p>
               </li>
               <li> 
            <span className='font-bold mr-2'>3.</span>
              <span className='font-bold'>Functionality Cookies:</span>
              <p> Functionality cookies remember your preferences (such as language settings) and enhance your overall experience on our platform.</p>
               </li>
             
               <li> 
            <span className='font-bold mr-2'>4.</span>
              <span className='font-bold'>Advertising Cookies:</span>
              <p>  Advertising cookies are used to display ads relevant to you based on your browsing habits. We may share this information with third-party advertising networks..</p>
               </li>

               
         </ul>
       </div>
        

       <div className=" mt-10">
          <h1 className='font-bold text-[30px]'>Third-Party Cookies</h1>
          <p className='pl-0'> We may allow third-party service providers (e.g., Google Analytics, social media platforms) to set cookies through our Services. These cookies help deliver content, ads, and features from third-party providers.</p>
        </div> 


        
       <div className='  mt-10'>
        <h1 className='font-bold mb-4 text-[32px]'>How We use Your cookies</h1>
       <ul className="flex flex-col gap-3">
         <li> 
            <span className='font-bold mr-2'>1.</span>
              <span className='font-bold'>  To Personalize Your Experience:</span>
              <p>  Cookies help us remember your preferences and tailor the platform to meet your needs  .</p>
               </li>

               <li> 
            <span className='font-bold mr-2'>2.</span>
              <span className='font-bold'>To Improve Performance :</span>
              <p> We use cookies to monitor website traffic and performance, allowing us to make necessary improvements .</p>
               </li>
               <li> 
            <span className='font-bold mr-2'>3.</span>
              <span className='font-bold'> For Security Purposes :</span>
              <p> Cookies allow us to serve personalized ads and marketing offers based on your browsing behavior. .</p>
               </li>
             
           
         </ul>
       </div>
        
        <div className=" mt-10">
          <h1 className='font-bold text-[30px]'>Managing cookies</h1>
          <p className='pl-0'> You can control how cookies are used by adjusting your browser settings. Most browsers allow you to block or delete cookies, but please note that disabling cookies may affect the functionality of Arc Store.</p>
        </div>
         

        

           <div className=" mt-10">
          <h1 className='font-bold text-[30px]'>Changes to this Policy</h1>
          <p className='pl-0'> We may update this Cookies Policy to reflect changes in how we use cookies. Any significant changes will be communicated through a notice on our website or via email..</p>
        </div>    
        <div className=" mt-10">
          <h1 className='font-bold text-[30px]'>Contact</h1>
          <p className='pl-0'> For any questions regarding our use of cookies, please contact us at    <br/> <span className='font-bold'>cookies@arccreatives</span>.store</p>
        </div>    
      </div>
    </div>
    
  </div>
  )
}

export default cookies