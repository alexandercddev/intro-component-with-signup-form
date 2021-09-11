/** 
 * @author: alexandercds
 * @description: 
 * @date: 10/septiembre/2021
**/ 

const Error = (props) => {
    const { errors, validate, name } = props;
    return (
        errors?.[name] && errors?.[name].type === validate ? ( 
            <>
                <i className="error-icon" />
                <span className="error">{errors?.[name].message}</span>
                </>
        ) : (
            null
        )
    )
}
  
export default Error;
  