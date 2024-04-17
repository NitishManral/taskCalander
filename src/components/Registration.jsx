import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setUserFirstForm } from '../feature/userSlice';
import { StatusCodes } from 'http-status-codes';
const Registration = () => {
    const [name, setName] = useState('');
    const [isNameValid, setIsNameValid] = useState(false);
    const [username, setUsername] = useState('');
    const [isUsernameValid, setIsUsernameValid] = useState(false);
    const [email, setEmail] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [password, setPassword] = useState('');
    const [isPasswordValid, setIsPasswordValid] = useState(false);
    const [isChecked,setIsChecked] =useState(false);
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const [warning, setWarning] = useState('');
    const [isWarningVisible, setIsWarningVisible] = useState(false);
    const dispatch = useDispatch();
    const handleSignUp = (e) => {
        e.preventDefault();
        const firstFormData = {
            id: Math.floor(Math.random() * 1000),
            name: name,
            email: email,
            username: username,
            password: password,
        };
        dispatch(setUserFirstForm(firstFormData));

        
    };
    useEffect(() => {
        //validate name , atleast have size 4 no symbol other than alphabates
        if (name === '') {
            setWarning("");
            setIsWarningVisible(false);
            setIsNameValid(true);
            return;
        }
        if(name.length>=4){
            console.log('Name:', name);
            setWarning("");
            setIsWarningVisible(false);
            setIsNameValid(true);
        }else{
            setWarning('• Name must be atleast 4 characters long');
            setIsWarningVisible(true);
            setIsNameValid(false);
        }

    },[name]);
    useEffect(() => {
        if(username === ''){
            setWarning('');
            setIsWarningVisible(false);
        }
        if(username.length > 6){
            // console.log('Username:', username);
            axios.post('http://localhost:3000/api/users/validateusename', { username })
                .then(res => {
                    if(res.status === StatusCodes.OK) {
                        console.log('Username:', username);
                        setWarning('');
                        setIsWarningVisible(false);
                        setIsUsernameValid(true);
                    } else {
                        setIsUsernameValid(false);
                        setWarning('Username already exists');
                    }
                })
                .catch(err => {
                    console.error(err);
                    setIsUsernameValid(false);
                });
        }
        else{
            setIsUsernameValid(false);
        }
    }, [username]);
    useEffect(() => {
        // validate password, must be size 6 , must have a symbol ,a lowercase , a uppercase , a number
        const hasNumber = /\d/.test(password);
        const hasSymbol = /\W/.test(password);
        const hasLowercase = /[a-z]/.test(password);
        const hasUppercase = /[A-Z]/.test(password);
    
        if (password.length >= 6 && hasNumber && hasSymbol && hasLowercase && hasUppercase) {
            console.log("password:", password);
            setIsPasswordValid(true);
        } else {
            setIsPasswordValid(false);
        }
    }, [password]);
    useEffect(() => {
        // validate email, must be a valid email
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        const isValid = emailPattern.test(email);
    
        // if(isValid){
        //     const validateEmail = async () => {
        //         const options = {
        //             method: 'GET',
        //             url: 'https://bouncer-email-verification.p.rapidapi.com/v1/email/verify',
        //             params: {
        //               email: email,
        //               timeout: '10'
        //             },
        //             headers: {
        //               'X-RapidAPI-Key': '',
        //               'X-RapidAPI-Host': 'bouncer-email-verification.p.rapidapi.com'
        //             }
        //           };
        //           console.log('options:', options);
                
        //         try {
        //             const response = await axios.request(options);
        //             console.log(response.body.valid);
        //             if(response.body.valid){
        //                 setIsEmailValid(true);
        //             }
        //         } catch (error) {
        //             console.log("error found");
        //             console.error(error);
        //         }
        //     };
    
        //     validateEmail();
        // }
        if(isValid){
            console.log('Email:', email);
            setIsEmailValid(true);
        }else{
            setIsEmailValid(false);
        }
    }, [email]);
    useEffect(() => {
        console.log('isChecked:', isChecked);
        if (isNameValid && isUsernameValid && isEmailValid && isPasswordValid && isChecked) {
            // $('#signUpButton').css('background-color', '#E55C8B');
            console.log('Button enabled')
            document.getElementById('signUpButton').style.backgroundColor = '#E55C8B';
            setIsButtonDisabled(false); // make button clickable
        } else {
            // $('#signUpButton').css('background-color', '#da779a');
            console.log('Button disabled')
            document.getElementById('signUpButton').style.backgroundColor = '#da779a';
            setIsButtonDisabled(true); // make button unclickable
        }
      }, [isEmailValid, isNameValid, isUsernameValid, isPasswordValid, isChecked]);
    
    return(
        <div className='Registraion  w-full h-full flex flex-col lg:flex-row'>
            <div className="poster h-1/4 w-full flex justify-evenly lg:flex-wrap  lg:h-full lg:w-4/12 bg-[#F2D184]">
                <div className='w-3/4 h-3/4 m-5 lg:h-1/3 lg:m-9'>
                    <h2 className='dribble text-[#A9853C]  text-lg lg:text-2xl lg:pb-6'>dribbble</h2>
                    <h1 className='text-[#846014] mt-2 text-sm font-bold lg:text-3xl'> Discover the world's top Designer & Creatives.</h1>
                </div>
                <img src='/assets/images/girl-is-drawing-digitally.svg' alt="poster" className=' w-1/2 lg:w-full lg:h-1/2'/>
            </div>
            
            <div className='flex flex-1 flex-col m-4 '>
            <p className='text-right h-1/12 w-full   text-sm pt-3 col-span-2 block lg:mr-14  text-slate-700 lg:text-lg'> Already a member? <a href='#somthing' className='text-blue-800 underline'>Sign in</a></p>
            <form className=" grid grid-cols-2 p-9 gap-2 h-full lg:w-3/6 md:w-5/6 m-auto lg:gap-3">
                <h2 className='col-span-2 text-black font-semibold	 text-xl lg:text-4xl flex align-center mt-auto mb-auto'>Sign up to Dribbble</h2>
                <h3 className='col-span-2 text-red-500 w-full h-[20px]'>
                    <span className="warnning " hidden={!isWarningVisible}>  {warning} </span>
                </h3>
                <div className='col-span-2 flex flex-col  lg:col-span-1 '> 
                    <label className='font-semibold md:text-xl'>Name</label>
                    <input type="text" className='bg-[#F3F3F3] hover:bg-[#cecaca] h-10 md:h-14 rounded-md md:mt-3' onChange={ e=>setName(e.target.value)} required/>
                </div>
                <div className='col-span-2 flex flex-col lg:col-span-1'>
                    <label className='font-semibold md:text-xl'>Username</label>       
                    <input type="text" className='bg-[#F3F3F3]  hover:bg-[#cecaca] h-10 md:h-14 rounded-md md:mt-3 ' onChange={e=>setUsername(e.target.value)}/> 
                </div>
                <div className='col-span-2 flex flex-col'>
                    <label className='font-semibold md:text-xl'>Email</label>  
                    <input type="email" className='bg-[#F3F3F3] hover:bg-[#cecaca] h-10 md:h-14 rounded-md md:mt-3' onChange={e=>setEmail(e.target.value)}/>
                </div>
                <div className='col-span-2 flex flex-col'>
                    <label className='font-semibold md:text-xl'>Password</label>
                    <input type="password" className='bg-[#F3F3F3]  hover:bg-[#cecaca] h-10 md:h-14 rounded-md md:mt-3' onChange={e=>setPassword(e.target.value)}/>
                </div>
                    <p className='text-sm col-span-2 text-slate-700 lg:text-lg'>
                        <input type='checkbox' className=' mr-2 h-4 lg:h-6 w-6' onChange={e=>setIsChecked(!isChecked)}/> 
                        Create an account means you're okay with our <a href='#' className='text-blue-800 underline'>Terms of Service</a>, <a href='#' className='text-blue-800 underline'>Privacy Policy</a>, and our default <a href='#' className='text-blue-800 underline'>Notification Settings</a>.
                    </p> 
                <button id='signUpButton' className='col-span-2 bg-[#da779a] text-[#ffff] font-semibold w-3/6 p-1 pflex justify-center  rounded-md text-sm  ' onClick={handleSignUp} disabled={isButtonDisabled}>Create Account</button>
                <p className='col-span-2 text-xs'>
                    site is protected by reCAPTCHA and the Google <a href='#' className='text-blue-800 underline'>Privacy Policy</a> and <a href='#' className='text-blue-800 underline'>Terms of Service</a> apply.
                </p>
            </form>
            </div>
        </div>
    );
};
export default Registration;