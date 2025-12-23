import logo from '../assets/logo.png' 
import widget from '../assets/Logo-login.png'
import Email from './Email'
import X from '../assets/X.svg'
import Instgram from '../assets/Instagram.svg'
import Linkd from '../assets/Linkd.svg'

import { CheckCheck , Zap ,  Languages, AlarmClockCheck, Scale, StickyNote, GitCommitVertical, ShieldCheck, LockKeyhole, UsersRound, Globe} from 'lucide-react';
function mainp() {
  return (
    <div>
      <div>
        <nav >
         <img src={logo} alt='logo1' className='absolute justify-center h-45 w-45'/>
          <ul className='flex flex-row justify-end gap-3 px-4 py-20 font-extralight'>
            <a href='#notify'><li>Home</li></a>
            <a href='#features'><li>Features</li></a>
            <a href='#notify'><li>Notify Me</li></a>
          </ul>
        </nav>
      </div>


      <div className='flex flex-col items-center justify-center'> 
        <p className='text-3xl font-bold text-shadow-md'>Understand Indian</p>
        <p className='text-3xl font-bold text-shadow-md'>Policies <span className='text-blue-700'>in 60 Seconds</span></p>
        <p className='font-extralight flex flex-row justify-center py-2'>Simple, Clear, Trustworthy Explanations for the<br/> Modern Citizen.</p>
      </div>


      <div className="flex justify-center items-center">


  {/* Outer Card */}
  <div
    className="
      relative
      h-60 w-85
      rounded-3xl
      bg-gradient-to-br
      from-[#eaf3ff]
      via-[#f1f7ff]
      to-[#f6f1ff]
      border border-white/60
      shadow-sm
      flex items-center justify-center
    "
  >
    {/* Center Icon Container */}
    <div
      className="
        h-32 w-32
        rounded-2xl
        flex items-center justify-center
      "
    >
      <img src={widget} alt="icon" className='shadow-xl'/>
    </div>

    {/* Verified Badge */}
    <div
      className="
        absolute
        bottom-2 left-2
        flex items-center gap-2
        bg-white
        px-4 py-2
        rounded-full
        shadow-md
        animate-bounce
      "
    >
      <span><CheckCheck color='green' size={20}/></span>
      <span className="text-green-500 font-medium">Verified</span>
    </div>

    {/* Fast Badge */}
    <div
      className="
        absolute
        top-6 right-3
        flex items-center gap-2
        bg-white
        px-4 py-2
        rounded-full
        shadow-md
        animate-bounce
      "
    >
      <span><Zap color='#ffed24' /></span>
      <span className="text-orange-400 font-medium">Fast</span>
    </div>
    </div>
  </div>




  {/* early access button*/ }
  <div id='notify'>
    <button className='bg-blue-600 text-white px-28 py-3 rounded-full mt-8 hover:bg-blue-700 transition duration-300 flex mx-auto font-semibold shadow-md'>Get Early Access</button>
  </div>
  <div className='flex flex-row justify-center py-5'>
    <Email/>
  </div>

{/*Features*/}
  <div id='features' className='flex justify-center flex-col items-center gap-5 py-2 px-2 '>
    <div className='flex flex-row  w-92 py-'>
      <GitCommitVertical size={28} strokeWidth={3} color='#000e57'/>
      <h2 className='text-2xl font-extrabold'>Key Features</h2>
    </div>
    <div className='h-36 w-92 border-1 rounded-xl border-gray-200 px-2 py-2 '>
      <div className='h-32 w-90 flex flex-col'>
        <div className='h-16 w-90'>
          <div className='flex flex-row px-2 py-2'>
            <div className='h-12 w-12 px-2 py-2 bg-sky-100 rounded-xl'> {/*icon*/} <Languages color='#007ab8' size={30}/> </div>
            <div className='h-16 w-70 font-semibold text-xl py-2 px-6'>{/*title*/}<h2>Jargon-Free Zone</h2></div>
          </div>
        </div>
        <div className='h-16 w-90 font-light text-gray-500'>
          {/*description*/}
          <p>Complex legal text translated into simple, everyday language you can actually understand.</p>
        </div>
      </div>
    </div>
    <div className='h-36 w-92 border-1 rounded-xl border-gray-200 px-2 py-2'>
      <div className='h-32 w-90 flex flex-col'>
        <div className='h-16 w-90'>
          <div className='flex flex-row px-2 py-2'>
            <div className='h-12 w-12 px-2 py-2 bg-pink-100 rounded-xl'> {/*icon*/} <AlarmClockCheck color='#7d04be' size={30}/> </div>
            <div className='h-16 w-70 font-semibold text-xl py-2 px-6'>{/*title*/}<h2>60-Second Summaries</h2></div>
          </div>
        </div>
        <div className='h-16 w-90 font-light text-gray-500'>
          {/*description*/}
          <p>Get the core details of any bill or policy in under a minute. Stay informed effortlessly.</p>
        </div>
      </div>
    </div>
    <div className='h-36 w-92 border-1 rounded-xl border-gray-200 px-2 py-2'>
      <div className='h-32 w-90 flex flex-col'>
        <div className='h-16 w-90'>
          <div className='flex flex-row px-2 py-2'>
            <div className='h-12 w-12 px-2.5 py-2 bg-red-100 rounded-xl'> {/*icon*/} <Scale color='red' size={30}/> </div>
            <div className='h-16 w-70 font-semibold text-xl py-2 px-6'>{/*title*/}<h2>Unbiased Analysis</h2></div>
          </div>
        </div>
        <div className='h-16 w-90 font-light text-gray-500'>
          {/*description*/}
          <p>Just the facts. No political leaning, no hidden agendas. Pure information.</p>
        </div>
      </div>
    </div>
    <div className='h-36 w-92 border-1 rounded-xl border-gray-200 px-2 py-2'>
      <div className='h-32 w-90 flex flex-col'>
        <div className='h-16 w-90'>
          <div className='flex flex-row px-2 py-2'>
            <div className='h-12 w-12 px-2.5 py-2 bg-yellow-50 rounded-xl'> {/*icon*/} <StickyNote color='gold' size={30}/> </div>
            <div className='h-16 w-70 font-semibold text-xl py-2 px-6'>{/*title*/}<h2>Jargon-Free Zone</h2></div>
          </div>
        </div>
        <div className='h-16 w-90 font-light text-gray-500'>
          {/*description*/}
          <p>Complex legal text translated into simple, everyday language you can actually understand.</p>
        </div>
      </div>
    </div>
  </div>


  {/*Slide bar */}
  <div className="w-full px-6 bg-gray-50 border-y-1 border-gray-200 ">
  <div
    className="
      flex flex-row gap-4
      px-4.5 py-4.5
      overflow-x-auto
      snap-x snap-mandatory
      scrollbar-hide
      touch-pan-x
      bg-gray-50
    ">


    <div className="border-1 border-gray-400 rounded-2xl w-40 h-8 flex-shrink-0 snap-start flex flex-row py-0.5 px-2 gap-1.5">
      <ShieldCheck color='white' fill='green' size={24}/>
      <p className='font-medium text-gray-500'>100% Verified</p>
    </div>
    <div className="border-1 border-gray-400 rounded-2xl w-36 h-8 flex-shrink-0 snap-start flex flex-row py-0.5 px-2 gap-1.5">
      <LockKeyhole color='indigo'  size={22}/>
      <p className='font-medium text-gray-500'>Data Private</p>
    </div>
    <div className="border-1 border-gray-400 rounded-2xl w-34 h-8 flex-shrink-0 snap-start flex flex-row py-0.5 px-2 gap-2.5">
      <UsersRound color='gold'  size={22}/>
      <p className='font-medium text-gray-500'>Trusted</p>
    </div>
    <div className="border-1 border-gray-400 rounded-2xl w-34 h-8 flex-shrink-0 snap-start flex flex-row py-0.5 px-2 gap-2.5">
      <Globe color='pink'  size={22}/>
      <p className='font-medium text-gray-500'>Pan-India</p>
    </div>
  </div>
</div>


{/*Footer*/ }
<div>
  <div>
  <div className='flex flex-row gap-5 h-25 justify-center py-15'>
        <a href='https://x.com/Y_G1803'>
        <img src={X} alt='Xlogo' className='h-7 w-7'/>
        </a>
        <a href="">
        <img src={Instgram} alt='Instagramlogo' className='h-7 w-7'/>
        </a>
        <a href='https://www.linkedin.com/in/yatharth-gupta-a075062a4/'>
        <img src={Linkd} alt='Linkedinlogo' className='h-7 w-7'/>
        </a>
      </div>
    <footer className='flex flex-row justify-center py-6 px-6 text-gray-500 font-light h-30'>
      <p>© 2024 PolicyPop. All rights reserved.</p>
    </footer>
  </div>
</div>
</div>
  )
}

export default mainp
