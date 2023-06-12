import heroImage from '../assets/Hero Image.png'
import featuresLogo1 from '../assets/Assignment Tracking Icon.svg'
import featuresLogo2 from '../assets/Data Driven Dashboard Icon.svg'
import featuresLogo3 from '../assets/Assignment Tracking Icon (1).svg'
import workIcon from '../assets/Manage all your work Icon.svg'
import moonIcon from '../assets/Scale it to the moon Icon.svg'
import sectionImage from '../assets/Section 3_ Image (1).png'
import {Link, useNavigate} from 'react-router-dom'


const Home = () => {
  const navigate = useNavigate()
  return (
    <>
   <section className='flex sm:flex-row flex-col items-center bg-purple px-20 py-5'>
    <div className='px-5 order-2 sm:order-1'>
         <h2 className='font-krona font-normal text-5xl text-white capitalize  leading-tight mb-5 '>Manage and track all your Work Inside one app</h2>
      <p className='font-inter font-medium text-lg text-white leading-6 mb-5'>Conquer your to-do list with Taskify, the ultimate task management app. Stay organized, focused, and in control.</p>
      <button onClick={() => { navigate("/signup")}} className='my-5 align-center font-inter font-medium leading-6 text-xl px-3 py-3 bg-yellow text-black rounded hover:bg-black hover:text-yellow'>Get Started</button>
    </div>
    <div className='order-1 sm:order-2'>
      <img src={heroImage}  alt='hero-image'/>
    </div>
   </section>
   {/* features section */}
   <aside className='px-20' id='features'>
  <div className='flex items-center justify-center mt-5'>
    <h2 className='font-krona font-normal text-xl mx-auto'>FEATURES</h2>

  </div>
    <div className='flex sm:flex-row flex-col py-10 gap-5'>
      <div className=' bg-black text-white p-8 rounded'>
        <img  src={featuresLogo3} className='w-10 h-10' alt='featured-image'/>
        <h4 className='font-krona font-normal my-2 text-xl'>Create Timeliness</h4>
        <p className='font-inter font-normal text-base'>Create Timelines with Ease

Effortlessly visualize your projects timeline with our powerful timeline creation feature. Plan and track tasks, milestones, and deadlines in a clear and intuitive interface. Stay on schedule and drive your projects to success. Try it now and experience the power of seamless timeline management.</p>
      </div>
      <div className='bg-grey text-white p-8 rounded'>
        <img  src={featuresLogo1} alt='featured-image' className='w-10 h-10'/>
        <h4 className='font-krona font-normal my-2 text-xl'>Set Deadline</h4>
        <p className='font-inter font-normal text-base'>Set Deadlines with Confidence

Never miss a beat with our reliable deadline-setting feature. Easily assign due dates to your tasks and projects, ensuring everything stays on track. Stay organized, meet your goals, and achieve success. Take control of your time today and experience the power of effective deadline management.</p>
      </div>
      <div className='bg-grey text-white p-8 rounded'>
        <img src={featuresLogo2} alt='featured-image' className='w-10 h-10'/>
        <h4 className='font-krona font-normal my-2 text-xl'>Deliver Efficiency</h4>
        <p className='font-inter font-normal text-base'>Achieve Optimal Efficiency

Supercharge your productivity with our efficiency-boosting feature. Streamline your workflow, eliminate redundancies, and accomplish more in less time. Experience the transformative power of maximum efficiency. Unlock your full potential today.</p>
      </div>
    </div>
    <div  className='flex items-center justify-center mt-2 mb-5'><Link to='/signup'><button className='bg-yellow align-center py-3 px-3 rounded font-inter font-medium text-black text-lg bg-yellow text-black rounded hover:bg-black hover:text-yellow'>I want to try it</button></Link></div>
   </aside>
   {/* article section */}
   <article className='flex sm:flex-row flex-col items-center px-20 gap-5 pb-10' id='about'>
    <img src={sectionImage} alt='section-image' />
    <div>
      <h2 className='font-krona font-normal text-4xl my-4'>Grow faster than your compititors</h2>
      <p className='font-inter font-normal text-lg mb-5'>Surpass your competition and achieve rapid growth with our game-changing solutions. Stay ahead, seize opportunities, and surge to success. Unleash your potential today.</p>
      <div className='flex gap-3 mb-2'>
        <img src={workIcon} alt='workIcon' className='h-10 w-10' />
        <div>
          <h5 className='font-krona font-normal text-2xl capitalize'>Manage all your work</h5>
          <p className='font-inter font-normal text-lg'>Simplify Work Management, All in One Place

Effortlessly manage tasks, projects, and deadlines with our streamlined solution. Stay organized, boost productivity, and unlock your full potential. Simplify your workload today.</p>
        </div>
      </div>
      <div className='flex gap-3'>
        <img src={moonIcon} alt='moonIcon'  className='w-10 h-10'/>
        <div>
            <h5 className='font-krona font-normal text-2xl capitalize'>Scale it to the moon</h5>
            <p className='font-inter font-normal text-lg'>Unleash Limitless Growth: Scale to New Heights

Experience exponential business growth with our innovative solutions. From expanding your reach to optimizing operations, we empower you to scale beyond limits. Propel your success and unlock unlimited potential. Start scaling today.</p>
        </div>
      </div>
    </div>
   </article>
   </>
  )
}
export default Home