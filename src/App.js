/** 
 * @author: alexandercds
 * @description:  
 * @date 10/septiembre/2021
**/
import React, { useState } from 'react';  
import { useForm } from 'react-hook-form';
import './assets/sass/App.scss';
import Card from './components/Card';
import Title from './components/Title';
import Paragraph from './components/Paragraph';
import Form from './components/Form';
import InputButton from './components/InputButton';
import InputText from './components/InputText';
import InputEmail from './components/InputEmail';
import InputPassword from './components/InputPassword';

const App = (props) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        alert(`${JSON.stringify(data)}`);   
    }
    const handleTerms = (event) => {

    }
    return (
        <section className="container">
            <div className="content">
                <div className="col">
                    <Title>
                        Learn to code by
                        watching others
                    </Title>
                    <Paragraph>
                        See how experienced developers solve problems in real-time
                        Watchinmg scripted tutorials is great, but understanding how
                        developers think is invaluable.
                    </Paragraph>
                </div>
                <div className="col">
                    <Card></Card>
                    <Card>
                        <div className="btn"> 
                            Try it free 7 days <span>the $20/mo. thereafter</span>
                        </div>
                        <Form 
                        register={register}
                        handleSubmit={handleSubmit}
                        onSubmit={onSubmit}>
                            <InputText
                            placeholder="First Name"
                            name="firstName"
                            errors={errors} 
                            required={true}
                            register={register} /> 
                            <InputText
                            placeholder="Last Name"
                            name="lastName"
                            errors={errors} 
                            required={true}
                            register={register} /> 
                            <InputEmail
                            placeholder="Email Address"
                            name="email"
                            errors={errors} 
                            required={true}
                            register={register} /> 
                            <InputPassword
                            placeholder="Password"
                            name="lastName"
                            errors={errors} 
                            required={true}
                            register={register} />
                            <InputButton 
                            value="Claim your free trial"/>
                            <div className="footer">
                                <span className="text">
                                    By clickthe button, you are agreeing to our 
                                    <a href="#" onClick={handleTerms}>Terms and Service</a>
                                </span>
                            </div>
                        </Form>
                    </Card> 
                </div>
            </div>
        </section>
    );
}

export default App;
