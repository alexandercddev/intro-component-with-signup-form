/** 
 * @author: alexandercds
 * @description: 
 * @date: 10/septiembre/2021
**/ 

export const setErrorClass = ({name, errors, validated = "required"}) => {
    return errors?.[name] && errors?.[name].type ===  validated
    ? 'error'
    : '';
}

export default setErrorClass;