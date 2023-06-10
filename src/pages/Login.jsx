import { account } from '../config'
import { userContext } from '../context/userContext';
import { useContext, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import loginImage from '../assets/loginImage.jpg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Login = () => {
  const navigate = useNavigate()

  const {email, password,setPassword, setEmail, login, setLogin,} = useContext(userContext)
  const [error, setError] = useState('')
  const handleSubmit = async (e) => {
    e.preventDefault()

    if(email != '' && password !=''){
      account.createEmailSession(
        email,
        password
      ).then(response => {
        setEmail("")
        setPassword("")
        setLogin(true)
        navigate('/tasks')
        console.log(response);
        localStorage.setItem('isLogin', JSON.stringify(!login));
        toast.success("Successfully logged in")
  
      }, error => {
        toast.error(error.message)
        setError(error.message)
        console.log(error);

      });
    } else if (email === '') {
        setError('Email cannot be empty')
    } else if (password === '') {
      setError('Password cannot be empty')
  }
    

  }

  return (
    <>
      <section className='w-full flex flex-col sm:flex-row item-center  gap-5 bg-white px-10'>
        <div className='sm:w-1/2'>
          <img src={loginImage} alt="" className='rounded w-full'/>
        </div>
        <div className='sm:w-1/2 ml-5 w-full py-4'>
          <h3 
          className='font-krona text-black font-normal text-4xl mt-10 text-capitalize mb-3'>Login</h3>
          <p 
          className='font-inter font-normal text-sm mb-5'>
            Welcome back to our secure login page for the task manager app!
             Log in now and conquer your tasks with ease. 
            Experience streamlined productivity at your fingertips.
            </p>
            <p className='mb-4 italic'>{`I dont't have an account?`}<Link to='/signup' className='underline'>Sign up</Link></p>

          <form noValidate className='flex  flex-col'>
            <label htmlFor="email" className='text-lg font-medium font-krona mb-3'> Email</label>
            <input 
              type="email" 
              name={email}
              value={email} 
              className='p-3 rounded bg-grey mb-5 outline-none' 
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Enter email address'
            />
            <label 
              htmlFor="password" 
              className='text-lg font-medium font-krona mb-3'>
                Password
              </label>
            <input 
              type="password" 
              name={password} 
              className='p-3 rounded bg-grey mb-5 outline-none' 
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Enter password'
              />
              <p className='font-krona font-medium mb-6 text-error' >{error}</p>
            <button onClick={handleSubmit} className='bg-yellow px-3 rounded align-center font-krona py-3'>Login</button>
          </form>
        </div>
      </section>
      <ToastContainer />
    </>
  )
}
export default Login