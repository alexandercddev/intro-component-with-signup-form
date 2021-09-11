/** 
 * @author: alexandercds
 * @description: 
 * @date: 10/septiembre/2021
**/ 

const Card = (props) => {
    const { children } = props;
    return (
        <div className="card"> 
            <div className="card-body">
                { children }
            </div>
        </div>
    );
}

export default Card;
