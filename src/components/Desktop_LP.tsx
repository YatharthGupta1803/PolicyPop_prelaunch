import React from 'react'


import EmailSignup from "../components/Emailsignup";

import Logo from '../assets/logo1.png'

import footer from '../assets/footer-text.svg'
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { BookOpen, FileQuestionMark, Languages, LibraryBig, LightbulbIcon, MessageSquareDot, Scale, Shield, StickyNote, ThumbsUp, Users } from 'lucide-react'
function Desktop_LP() {
  return (
    <div>
        <div>
        <nav className='w-full h-24 bg-white flex items-center justify-between px-12 shadow-2xl border-b-2 border-gray-200'>
          <div>
          <img src={Logo} alt='PolicyPop-Logo' className='h-55 w-auto' />
          </div>
          <div className='flex flex-row justify-end py-9 px-12'>
           <a href='#home'>
          <p className='px-10 text-blue-500'>Home</p>
          </a>
          <a href='#features'>
            <p className='px-10 text-blue-500'>Features</p>
          </a>
          <a href='#contact'>
            <p className='px-10 text-blue-500'>Contact Us</p>
          </a>
          </div>
        </nav>
      </div>


      {/* Main Content Section */}
      <div className='w-full h-195 bg-gradient-to-br from-[#eaf3ff] via-[#f1f7ff] to-[#ffff] py-20'>
        <div className='flex flex-col items-center'>
            <p className='font-extrabold text-6xl'>Understand Indian</p>
            <p className='font-extrabold text-6xl'>Policies</p>
            <p className='font-extrabold text-6xl'>in <span className='text-shadow-lg text-blue-500'>60 Seconds</span></p>
            <div className='flex flex-col items-center py-5 font-light text-xl text-gray-700'>
            <p>Democratizing civic knowledge with simple, clear, and trustworthy</p>
            <p>explanations of complex government bills and regulations.</p>
            </div>
            <div className='py-7'>
            <EmailSignup />
            <div className='flex flex-row py-2'>
            <LightbulbIcon size={18} color='gold'/>
            <p className='px-2 font-light text-gray-700 text-xs'>Be first. Shape what PolicyPop becomes.</p>
            </div>

        </div>

        <div id='home' className='h-68 w-full flex flex-row justify-center items-center gap-20'>
            {/*Features*/}
            <div className='h-60 w-70 rounded-xl bg-sky-50 shadow-md flex flex-col items-center py-6 hover:bg-white  '>
                <Languages size={40} color='#007ab8' className='bg-sky-100 rounded-md'/>
                <p className='font-semibold text-xl py-1 text-shadow-lg'>Jargon-Free Zone</p>
                <p className='font-light py-2 px-7  text-wrap '>Complex legal text translated into simple, everyday language you can actually understand.</p>
            </div>
            <div className='h-60 w-70 rounded-xl bg-red-50 shadow-md flex flex-col items-center py-6 hover:bg-white'>
                <Scale size={40} color='red' className='bg-red-100 rounded-md'/>
                <p className='font-semibold text-xl py-1 text-shadow-lg'>Unbiased Analysis</p>
                <p className='font-light py-2 px-7  text-wrap '>Just the facts. No political leaning, no hidden agendas. Pure information.</p>
            </div>
            <div className='h-60 w-70 rounded-xl bg-yellow-50 shadow-md flex flex-col items-center py-6 hover:bg-white'>
                <StickyNote size={40} color='gold' className='bg-yellow-100 rounded-md'/>
                <p className='font-semibold text-xl py-1 text-shadow-lg'>Instant Alerts</p>
                <p className='font-light py-2 px-7  text-wrap'>Receive real-time notifications for policies that impact your region or industry.</p>
            </div>
        </div>
        </div>
      </div>



      {/* mid */}



      <div id='features'>
      <div className='w-full h-full flex flex-col items-center text-center py-10 border-b-2 border-gray-200'>
          <button className=' text-blue-500 bg-blue-50 w-40 h-8 rounded-full uppercase not-even:font-medium'>Why PolicyPop ?</button>
          <h1 className='py-15 font-extrabold text-6xl' >Making Politics Accessible</h1>
          <p>We break down complex legalese into bite-sized, engaging content <br/> designed for the modern youth</p>

          <div className='flex flex-row py-30 gap-8'>



            <div className='border-2 border-sky-100 h-70 w-70 bg-sky-50 flex flex-col gap-5 px-5 py-2 rounded-xl'>
              <div className= 'border-b-2 border-gray-100'>
              <LibraryBig color='LightBlue' size={64} strokeWidth={1}/>
              </div>
              <h1 className='font-extrabold items-start text-start text-xl ' >7-Part Explainers</h1>
              <p className='font-extralight items-start text-start text-wrap'>No more long PDFs. Get the gist of any bill in a structured, 7-slide swipeable format that covers pros, cons and impact</p>
            </div>




            <div className='border-2 border-yellow-100 h-70 w-70 bg-yellow-50 flex flex-col gap-4 px-5 py-2 rounded-xl'>
              <div className= 'border-b-2 border-gray-100'>
              <FileQuestionMark color='Gold' size={64} strokeWidth={1}/>
              </div>
              <h1 className='font-extrabold items-start text-start text-xl ' >Interactive Explainers</h1>
              <p className='font-extralight items-start text-start text-wrap'>Test you understanding after every explaination. Fun quick quizes ensure you truly get the picture before you from an opinion. </p>
            </div>


            <div className='border-2 border-green-100 h-70 w-70 bg-green-50 flex flex-col gap-5 px-5 py-2 rounded-xl'>
              <div className= 'border-b-2 border-gray-100'>
              <ThumbsUp color='DarkGreen' size={64} strokeWidth={1}/>
              </div>
              <h1 className='font-extrabold items-start text-start text-xl ' >Mock Voting</h1>
              <p className='font-extralight items-start text-start text-wrap'>No more long PDFs. Get the gist of any bill in a structured, 7-slide swipeable format that covers pros, cons and impact</p>
            </div>


            <div className='border-2 border-violet-100 h-70 w-70 bg-violet-50 flex flex-col gap-5 px-5 py-2 rounded-xl'>
              <div className= 'border-b-2 border-gray-100'>
              <MessageSquareDot color='darkviolet' size={64} strokeWidth={1}/>
              </div>
              <h1 className='font-extrabold items-start text-start text-xl ' >Moderated Comments</h1>
              <p className='font-extralight items-start text-start text-wrap'>Engage in healthy, toxic-free discussions. Our community guidelines ensure respectful debate on important topics</p>
            </div>

          </div>
        </div>
      </div>

      {/* Footer */}
      <div id='contact'>
        <div>
        <div className='bg-blue-950 w-full h-full flex flex-col items-center text-center py-2'>
          <div className='text-center py-25'>
            <img src={footer} alt='Footer-Image' className='w-45 h-auto '/>
            <p className='text-gray-50 font-extralight py-5'>Empowering the next generation with clear, unbaised information on Indian Policy and governance</p>

            <div className="flex flex-row gap-4 text-gray-50 font-extralight">
              <a href=''>
              <FaInstagram className="w-5 h-5" />
              </a>
              <a href='https://www.linkedin.com/in/yatharth-gupta-a075062a4/'>
              <FaLinkedin className="w-5 h-5" />
              </a>
              <a href='https://x.com/Y_G1803'>
              <FaTwitter className="w-5 h-5" />
              </a>
            </div>

          </div>

        </div>
        </div>
      </div>
    </div>
  )
}

export default Desktop_LP
