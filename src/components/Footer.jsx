import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Footer = () => {
  return (
    <footer className="bg-black text-white py-3 flex flex-col sm:flex-row sm:justify-between px-20">
        <p className="font-normal font-inter text-sm mt-3"><a href="https://obinnejichibuzor.vercel.app" target='_blank' rel='noopener noreferrer'>Obinneji Chibuzor</a></p>
        <p className="font-normal font-inter text-sm  mt-3">Hashnode Appwrite hackaton </p>
        <p className="font-normal font-inter text-sm  mt-3"><a href="mailto:obinnejic@gmail.com" target='_blank' rel='noopener noreferrer'>Obinnejic@gmail.com</a></p>
        <p className="font-normal font-inter text-sm  mt-3"><a href="https://twitter.com/francisobinneji" target='_blank' rel='noopener noreferrer'><TwitterIcon />Obinneji Chibuzor Francis</a></p>
        <p className="font-normal font-inter text-sm  mt-3"><a href="https://www.linkedin.com/in/obinneji/" target='_blank' rel='noopener noreferrer'><LinkedInIcon />Obinneji Chibuzor Francis</a></p>
    
    
    </footer>
  )
}
export default Footer