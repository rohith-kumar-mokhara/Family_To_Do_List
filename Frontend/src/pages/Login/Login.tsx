import React, { useState } from 'react';
import { SubmitHandler, useForm } from "react-hook-form"
import "./Login.scss"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8)
})

//infer from zod schema
type LoginProps = z.infer<typeof schema>

export default function Login(props: LoginProps) {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<LoginProps>(
    {
      defaultValues: {
        email: "mrohith7799@gmail.com",
      },
      resolver: zodResolver(schema)
    }
  );

  const onSubmit: SubmitHandler<LoginProps> = (data) => {
    console.log(data);
  }

  const [status,setStatus] = useState("login-active");

  function handleRegisterClick(){
    if((status == "login-active" || status == "")){
      setStatus("register-active")
    }
    else{
      setStatus("login-active")
    }
  }

  return (
    <div className= {`login-page ${status}`}>
      <div className="login-container">
        <div className="login-heading">
          <h1 className='login-heading-h1'>Login</h1>
        </div>
        <form className='login-form' onSubmit={handleSubmit(onSubmit)}>
          <input className='login-input' {...register("email")} type="email" placeholder='Enter your email' />
          {errors.email && <div>{errors.email.message}</div>}
          <input className='login-input' {...register("password")} type="password" placeholder='Enter your password' />
          {errors.password && <div>{errors.password.message}</div>}
          <div className="submit-login-wrapper">
            <button disabled={isSubmitting} className='submit-login'>{isSubmitting ? "Loading..." : "Submit"}</button>
          </div>
        </form>
      </div>
      <div className="info-container" >
        <h1 className='info-container-h1' >What are you waiting for? Click here to Signup!</h1>
        <button className='register-button' onClick={handleRegisterClick}>{status == "register-active"?"Login":"Register"}</button>
      </div>
    </div>
  );
}
