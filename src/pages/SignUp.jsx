import {account } from  '../config'
import { userContext } from '../context/userContext';
import {useContext, useState} from 'react'
import {useNavigate, Link} from 'react-router-dom'
import signUpImage from '../assets/signUpImage.jpg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {
    const navigate = useNavigate()
    const {username, email, password, setUsername, setPassword, setEmail} = useContext(userContext)
    const [confirmpassword, setConfirmedPassword] = useState('')
    const [error, setError] = useState('')
    const  validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const handleSubmit = async (e) => {
        e.preventDefault()
        if(password === confirmpassword && password != "" && confirmpassword != " "&& username != '' && email != "" && email.match(validRegex) && password.length >= 9 ) {
            account.create(
                username,
                email,
                password,
                username
            ).then(response => {
                // console.log(response);
                setEmail("")
                setPassword("")
                navigate('/login')
                setError('')
                toast.success("Successfully sign up")
            }, error => {
                setError(error.message)
                // console.log(error);
                toast.error(error.message)
            });
        } else if ( username === "" && password === "" && email === "") {
            setError('Fields cannot be empty')
        } else if(password != confirmpassword){
            setError('Password do not match')
        } else if (!email.match(validRegex)){
            setError('Enter a valid email')
        }
        else if (password.length < 9){
            setError('Password must have 9 characters')
        }
        
    }
    return (
        <>
        <section className='w-full flex flex-col sm:flex-row item-center justify-center px-10 gap-10'>
            <div className='sm:w-1/2 w-full mt-8 order-2 self-center py-7'>
                <h3
                    className='font-krona text-black font-normal text-4xl mt-3 text-capitalize mb-3'
                >Signup for early access offer!</h3>
                <p className='font-inter font-normal text-sm mb-5'>
                Welcome to our sign-up page for the ultimate task manager app! Streamline your workflow, boost efficiency, and achieve your goals effortlessly. Sign up now and unlock the full potential of your productivity journey. Get started today and prioritize your time effectively.
                </p>
                <p className='mb-4 italic text-lg'>{`Already have an account?`}<Link to='/login' className='underline'>Login</Link></p>
                <form action="/login" noValidate className='flex  flex-col'>
                    <label 
                        htmlFor="Username"
                        className='text-lg font-medium font-krona mb-3'
                     >Username</label>
                    <input 
                        className='p-3 rounded bg-grey mb-5 outline-none' 
                        name={username}
                        type="text" 
                        onChange={(e) => setUsername(e.target.value)}
                     />
                    <label htmlFor="email" className='text-lg font-medium font-krona mb-3'> Email</label>
                    <input
                     type="email"
                      name={setEmail}
                      onChange={(e) => setEmail(e.target.value)} 
                      className='p-3 rounded bg-grey mb-5 outline-none' 
                      />
                    <label htmlFor="password" className='text-lg font-medium font-krona mb-3'>Password</label>
                    <input 
                        type="password" 
                        name={password}
                        className='p-3 rounded bg-grey mb-5 outline-none' 
                        onChange={(e) => setPassword(e.target.value) }
                        />
                    <label htmlFor="confirmpassword" className='text-lg font-medium font-krona mb-3'>Confirm Password</label>
                    <input 
                        type="password" 
                        name={confirmpassword}
                        className='p-3 rounded bg-grey mb-8 outline-none' 
                        onChange={(e) => setConfirmedPassword(e.target.value) }
                        />
                        <p className='font-krona font-medium mb-6 text-error'>{error}</p>
                    <button  onClick={handleSubmit} className='bg-yellow px-3 rounded align-center font-krona py-3 mb-8'>Create account</button>
                </form>
            </div>
            <div className='sm:w-1/2 w-full align-center '>
                <img src={signUpImage}  className='rounded w-full'/>
            </div>
        </section>
        <ToastContainer/>
        </>
    )
}
export default SignUp