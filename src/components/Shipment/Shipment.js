import React from 'react';
import './Shipment.css';
import { useForm } from 'react-hook-form';

const Shipment = () => {
const { register, handleSubmit, watch, errors } = useForm();
const onSubmit = data => console.log(data);
    return (
        <div> 
          <form className = 'ship-form' onSubmit={handleSubmit(onSubmit)}>
          <input name="example" defaultValue="test" ref={register} />
         
          <input name="name" ref={register({ required: true })} placeholder='Your name' />
          {errors.name&& <span className='error'>This name field is required</span>}

          <input name="email" ref={register({ required: true })} placeholder = 'Your email' />
          {errors.email && <span className='error'>This email field is required</span>}
         
         
          <input type="submit" />
        </form>
        </div>
    );
};

export default Shipment;