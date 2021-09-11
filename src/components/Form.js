/** 
 * @author: alexandercds
 * @description: 
 * @date: 10/septiembre/2021
**/ 
import { useForm } from 'react-hook-form';

const Form = (props) => {
    const { children, onSubmit, handleSubmit, register } = props
    
    return (
        <div className="form"> 
            <form onSubmit={handleSubmit(onSubmit)}>
                { children }
            </form>
        </div>
    );
}
  
export default Form;
  