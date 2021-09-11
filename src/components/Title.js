/** 
 * @author: alexandercds
 * @description: 
 * @date: 10/septiembre/2021
**/ 

const Title = (props) => {
    const { children } = props
    return (
        <div className="title">
            <h2>
                { children }
            </h2>
        </div>
    );
}
  
export default Title;