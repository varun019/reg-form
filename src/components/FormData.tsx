import React from "react";
import { useForm } from 'react-hook-form';

type Formdata = {
    name: string,
    email: string,
    password: string
}

const FormData: React.FC = () => {
    const { register, handleSubmit, formState: { errors } , reset} = useForm<Formdata>();

    const onSubmit = (data: Formdata) => {
        console.log(data);
        reset();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="container mt-5 box">
                <div className="input-group mb-3">
                    <label htmlFor="fname" className="fw-bold fs-5">Name:</label>
                    <input {...register('name', { required: 'Name is Required' ,minLength:5,maxLength:15})} type="text" name='name' className="name" placeholder="Enter your Name" aria-label="Username" aria-describedby="basic-addon1" /><br />
                    {errors.name && <span>{errors.name.message}</span>}
                </div>

                <label htmlFor="email" className="fw-bold fs-5">Email:</label>
                <input type="email" id='email' {...register('email', { required: 'Email is Required' })} onChange={(e) => e.target.value} placeholder="Enter your Email" className="" /><br />
                {errors.email && <span>{errors.email.message}</span>}<br/>

                <label htmlFor="password" className="fw-bold fs-5 mt-2">Password:</label>
                <input type="password" id='password' {...register('password', { required: 'Password is Required' })} onChange={(e) => e.target.value} placeholder="Enter your Password" className="mb-4" />
                {errors.password && <span>{errors.password.message}</span>}

                <div className="d-flex text-start">
                    <button className="btn btn-primary fs-5 w-100 mt-4">Register</button>
                </div>
            </div>
        </form>
    )
}

export default FormData;
