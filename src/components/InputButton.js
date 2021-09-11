/** 
 * @author: alexandercds
 * @description: 
 * @date: 10/septiembre/2021
**/ 
import { useForm } from 'react-hook-form';

const InputButton = (props) => {
    const { className, value, type = "submit", handleClick } = props 
    return (
        <div className="button">  
            <input 
                className={`btn ${className}`} 
                onClick={handleClick}
                type={type} value={value}/> 
        </div>
    );
}
  
export default InputButton;
  