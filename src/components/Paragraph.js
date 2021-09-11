/** 
 * @author: alexandercds
 * @description: 
 * @date: 10/septiembre/2021
**/ 

const Paragraph = (props) => {
    const { children } = props
    return (
        <div className="paragraph">
            <p>
                { children }
            </p>
        </div>
    );
}
  
export default Paragraph;