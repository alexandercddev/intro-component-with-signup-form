/** 
 * @author: alexandercds
 * @description: 
 * @date: 10/septiembre/2021
**/ 
import Error from './Error';

const InputEmail = (props) => {
    const { placeholder, register, name, required, errors} = props;
    return (
        <div className="input-text">  
            <input 
            placeholder={placeholder} 
            className="input" 
            type="text" 
            {...register(name, { 
                required: {
                    value: required, 
                    message: `${placeholder} cannot be empty`
                }, 
                pattern: {
                    value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i, 
                    message: `Looks like this is not an email`
                }
            })}/> 
            {required && (
                <Error  
                errors={errors}
                validate="required"
                name={name} />
            )}  
            <Error  
            errors={errors}
            validate="pattern"
            name={name} />
        </div>
    );
}
  
export default InputEmail;