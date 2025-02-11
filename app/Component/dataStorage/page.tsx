import React from 'react'

const dataStorage = () => {
  return (
    <div className='w-[90%] md:w-[70%] mx-auto py-7'>
    <div className="">
      <h3 className='mt-7 bg-[#DBD8FC] w-max rounded-[18px] py-2 px-6'>  Data Storage Policy for Arc Store</h3>
      .
      <div className="w-[100%] mx-auto">
      <h2 className='font-bold text-[32px]'>Introduction</h2>
      <p className=' pl-0  pr-5'> At Arc Store, we take the responsibility of storing and managing your data seriously. This document outlines how we collect, store, protect, and manage your data, ensuring compliance with industry standards and legal obligations. Our goal is to provide a secure environment where your personal, technical, and usage data is safeguarded.</p>
      </div> 
      <div className=" mt-5">
       
       <div className=' mt-10'>
        <h1 className='font-bold mb-4 text-[32px]'>Data Collection & Storage</h1>
        <h3 className='font-semibold'>Overview</h3>
       <p className='pl-0 mb-3'> When you interact with Arc Store, various types of data are collected and stored securely. This includes:</p>
        <ul className='font-semibold list-disc'>
          <li> Personal Data (e.g., your name, email address, payment information)</li>
          <li>Content Data (e.g., your uploaded designs, images, or files)</li>
          <li> Technical Data (e.g., your IP address, device information, and usage analytics)</li>
        </ul>
        <p className='pl-0 mt-3'>Data is collected when you use our Services, sign up for an account, communicate with us, or interact with features like design uploads, payments, and analytics tools.</p>

 
         
 
 
      
       </div>


          
       <div className=' mt-10'>
        <h1 className='font-bold mb-4 text-[32px]'> Cloud-Based Data Storage</h1>
        <p> All user data is stored on third-party cloud service providers that offer robust, scalable, and highly secure infrastructure. We leverage leading cloud storage providers (such as AWS, Google Cloud, or Azure) to store our data, benefiting from their high-level security certifications, compliance, and global data center network.</p>
       <ul className="flex flex-col gap-3">
         <li> 
            <span className='font-bold mr-2'>1.</span>
              <span className='font-bold'> Data Center Locations:</span>
              <p>  Our cloud providers have geographically distributed data centers that allow for redundancy, minimizing the risk of data loss in case of hardware failures or natural disasters.    .</p>
               </li>

               <li> 
            <span className='font-bold mr-2'>2.</span>
              <span className='font-bold'> Physical Security: </span>
              <p>  The physical infrastructure used for storing your data is located in highly secure data centers. These centers are monitored 24/7 with advanced access control systems, intrusion detection systems, and security personnel.</p>
               </li>   

               <li> 
            <span className='font-bold mr-2'>2.</span>
              <span className='font-bold'> Geo-Redundancy: </span>
              <p>   Data is replicated across multiple regions to ensure resilience and availability in case of server downtime or network failures. .</p>
               </li> 
         </ul>
       </div>

       

  
   
   
       <div className=' mt-10'>
        <h1 className='font-bold mb-4 text-[32px]'>Data Encryption</h1>
        <p> We take encryption seriously to ensure that your data is unreadable without the correct decryption keys. We employ the following encryption standards for data protection:</p>
       <ul className="flex flex-col gap-3">
         <li> 
            <span className='font-bold mr-2'>1.</span>
              <span className='font-bold'> Encryption in Transit:</span>
              <p>    When your data is transmitted between your device and Arc Store’s servers, we utilize Transport Layer Security (TLS/SSL) protocols to encrypt the data. This protects your data from being intercepted or tampered with while in transit.</p>
               </li>

               <li> 
            <span className='font-bold mr-2'>2.</span>
              <span className='font-bold'>  Encryption at Rest:  </span>
              <p>Data stored in our cloud environments is encrypted using advanced encryption standards (AES-256). This includes all files, databases, and backups that store user information and content. Even if an unauthorized entity gains access to our storage, they won’t be able to decrypt or understand your data without the proper encryption keys. </p>.
               </li>   
               <li> 
            <span className='font-bold mr-2'>3.</span>
              <span className='font-bold'> Key Management:  </span>
              <p>Encryption keys are securely managed and rotated periodically to maintain the highest level of security. Access to these keys is restricted to authorized personnel only, ensuring that only a few trusted individuals have the ability to decrypt sensitive data. </p>.
               </li>
         </ul>
       </div>

       

 
   
       <div className=' mt-10'>
        <h1 className='font-bold mb-4 text-[32px]'>Data Segregation and Isolation</h1>
        <p> We implement logical data isolation mechanisms to ensure that your data is stored separately from that of other users. Each user’s data is compartmentalized within our cloud storage systems, ensuring that unauthorized access by other users or applications is prevented.</p>
       <ul className="flex flex-col gap-3">
         <li> 
            <span className='font-bold mr-2'>1.</span>
              <span className='font-bold'> Account-Based Data Segregation:</span>
              <p>      Each user's data (files, personal information, and content) is associated with their unique account, making sure that only authorized users or administrators can access it.</p>
               </li>

               <li> 
            <span className='font-bold mr-2'>2.</span>
              <span className='font-bold'> Multi-Tenant Data Isolation:  </span>
              <p >In environments where multiple users or accounts share a system or infrastructure, we use strict access control mechanisms to prevent cross-account access or interference. Your data remains isolated from others within our shared infrastructure. </p>.
               </li>   
                
         </ul>
       </div>



       

  
   
   
       <div className=' mt-10'>
        <h1 className='font-bold mb-4 text-[32px]'>Data Backup and Recovery</h1>
        <p>  To ensure your data is not lost in the event of system failures, data corruption, or accidental deletion, we maintain regular backups of all user data. This backup process is designed to offer:</p>
       <ul className="flex flex-col gap-3">
         <li> 
            <span className='font-bold mr-2'>1.</span>
              <span className='font-bold'>Daily Automated Backups:</span>
              <p>       Our systems automatically perform backups of critical data on a regular basis (daily/weekly) to safeguard against data loss.</p>
               </li>

               <li> 
            <span className='font-bold mr-2'>2.</span>
              <span className='font-bold'>  Data Redundancy:  </span>
              <p > Multiple copies of backups are stored across different geographic regions to protect against localized outages or natural disasters. </p>.
               </li>   
                
               <li> 
            <span className='font-bold mr-2'>2.</span>
              <span className='font-bold'>   Disaster Recovery:</span>
              <p >  In case of a critical system failure, Arc Store has a comprehensive disaster recovery plan. This ensures minimal downtime and rapid restoration of user data from backup storage, so you can resume normal operations with minimal disruption. </p>.
               </li>   
         </ul>
       </div>


       

  
   


       <div className=' mt-10'>
        <h1 className='font-bold mb-4 text-[32px]'>Retention of Data</h1>
        <p>    We implement logical data isolation mechanisms to ensure that your data is stored separately from that of other users. Each user’s data is compartmentalized within our cloud storage systems, ensuring that unauthorized access by other users or applications is prevented.</p>
       <ul className="flex mt-3 flex-col gap-3">
         <li> 
            <span className='font-bold mr-2'>1.</span>
              <span className='font-bold'>Account-Based Data Segregation: </span>
              <p>     Each user's data (files, personal information, and content) is associated with their unique account, making sure that only authorized users or administrators can access it.   .</p>
               </li>

               <li> 
            <span className='font-bold mr-2'>2.</span>
              <span className='font-bold'> Multi-Tenant Data Isolation:  </span>
              <p > In environments where multiple users or accounts share a system or infrastructure, we use strict access control mechanisms to prevent cross-account access or interference. Your data remains isolated from others within our shared infrastructure. </p>.
               </li>   
                
                
         </ul>
       </div>

       

  
  
   
       {/* <div className=' mt-10'>
        <h1 className='font-bold mb-4 text-[32px]'> Data Backup and Recovery</h1>
        <p> To ensure your data is not lost in the event of system failures, data corruption, or accidental deletion, we maintain regular backups of all user data. This backup process is designed to offer:</p>
       <ul className="flex mt-3 flex-col gap-3">
         <li> 
            <span className='font-bold mr-2'>1.</span>
              <span className='font-bold'> Daily Automated Backups: </span>
              <p> Our systems automatically perform backups of critical data on a regular basis (daily/weekly) to safeguard against data loss. </p>
               </li>

               <li> 
            <span className='font-bold mr-2'>2.</span>
              <span className='font-bold'>  Data Redundancy:  </span>
              <p >  Multiple copies of backups are stored across different geographic regions to protect against localized outages or natural disasters.  </p>.
               </li> 
               <li> 
            <span className='font-bold mr-2'>3.</span>
              <span className='font-bold'>  Disaster Recovery:  </span>
              <p > In case of a critical system failure, Arc Store has a comprehensive disaster recovery plan. This ensures minimal downtime and rapid restoration of user data from backup storage, so you can resume normal operations with minimal disruption.  </p>.
               </li>   
                
                
         </ul>
       </div> */}

       
       <div className=' mt-10'>
        <h1 className='font-bold mb-4 text-[32px]'>Third-Party Access and Storage Partners</h1>
        <p> Arc Store partners with trusted third-party services to manage and store data. These partners may include payment processors, content delivery networks, and analytics providers. All third-party partners are thoroughly vetted to ensure they adhere to the same level of data security and privacy practices as Arc Store.

  
   
  
  </p>
       <ul className="flex mt-3 flex-col gap-3">
         <li> 
            <span className='font-bold mr-2'>1.</span>
              <span className='font-bold'> Payment Processors: </span>
              <p>   Payment-related information is processed by third-party payment gateways. We do not store your full payment details (such as credit card numbers) on our servers.  </p>
               </li>

               <li> 
            <span className='font-bold mr-2'>2.</span>
              <span className='font-bold'>  Cloud Providers:   </span>
              <p > As mentioned earlier, your data is stored with industry-leading cloud storage providers, who maintain strict compliance with data protection regulations and industry standards.   </p>.
               </li> 
               <li> 
            <span className='font-bold mr-2'>3.</span>
              <span className='font-bold'>  Analytics Services:  </span>
              <p >   Non-personally identifiable information may be shared with third-party analytics providers to help us understand usage patterns and improve our Services.  </p>.
               </li>   
                
                
         </ul>
       </div>
        
        

         <div className=' mt-10'>
        <h1 className='font-bold mb-4 text-[32px]'>Data Access and Control </h1>
        <p> We ensure that only authorized personnel have access to stored data. Access is granted based on strict principles of least privilege, meaning users and employees can only access the data they need to perform their specific tasks.

  
    

  
  
  
  </p>
       <ul className="flex mt-3 flex-col gap-3">
         <li> 
            <span className='font-bold mr-2'>.</span>
              <span className='font-bold'> Employee Access:   </span>
              <p>   
 Access to user data is restricted to employees who need such access to fulfill operational, technical, or legal obligations. All employees undergo background checks and security training to ensure they understand the importance of safeguarding user data.
  
   </p>
               </li>

               <li> 
            <span className='font-bold mr-2'>.</span>
              <span className='font-bold'>   Employee Access:</span>
              <p >   Access to user data is restricted to employees who need such access to fulfill operational, technical, or legal obligations. All employees undergo background checks and security training to ensure they understand the importance of safeguarding user data.  </p>.
               </li> 
               <li> 
            <span className='font-bold mr-2'>.</span>
              <span className='font-bold'>  Access Control Systems:  </span>
              <p >   We implement multi-factor authentication (MFA), role-based access controls (RBAC), and detailed audit trails to track and monitor access to data. Unauthorized access attempts are flagged and reviewed promptly.    </p>.
               </li>   
                
                
         </ul>
       </div>



        <div className=' mt-10'>
        <h1 className='font-bold mb-4 text-[32px]'>  Data Deletion and Disposal </h1>
        <p> When data is no longer needed or upon your request, we take careful steps to delete or anonymize your personal data. This applies to all copies, including backups. Once your data is scheduled for deletion:

  
  

  
    

  
  
  
  </p>
       <ul className="flex mt-3 flex-col gap-3">
         <li> 
            <span className='font-bold mr-2'>.</span>
              <span className='font-bold'>  Permanent Deletion:   </span>
              <p>   
  Data is permanently deleted from our active systems, ensuring it is irretrievable by any party.
  
   </p>
               </li>

               <li> 
            <span className='font-bold mr-2'>.</span>
              <span className='font-bold'> Backup Purging:</span>
              <p >    Backups containing your deleted data are erased or overwritten within a reasonable time frame in line with our retention policies. </p>.
               </li> 
             
                
                
         </ul>
       </div>


         <div className=' mt-10'>
        <h1 className='font-bold mb-4 text-[32px]'> Data Breach Response </h1>
        <p>  
 Arc Store has a data breach response policy in place to address potential security incidents:
  </p>
       <ul className="flex mt-3 flex-col gap-3">
         

               <li> 
            <span className='font-bold mr-2'>.</span>
              <span className='font-bold'>Detection and Response:  </span>
              <p >  Our systems are continuously monitored for suspicious activities or potential breaches. In the event of a breach, we take immediate action to mitigate the impact, including shutting down affected systems, resetting access credentials, and performing thorough investigations.  </p>.
               </li> 
             
               
               <li> 
            <span className='font-bold mr-2'>.</span>
              <span className='font-bold'>Notification of Breach:   </span>
              <p >   If a breach involving your data occurs, we will notify you within a reasonable time frame, in compliance with applicable data protection laws. We will also provide recommendations on how to minimize potential risks and keep your data safe.  </p>.
               </li>  
                
         </ul>
       </div>
      </div>
      
    </div>
     

  
  </div>
  )
}

export default dataStorage