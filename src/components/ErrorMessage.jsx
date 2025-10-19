const ErrorMessage = ({ food }) => {
   
    return (
        food.length === 0 && <h4>I am Hungry</h4>
    );
}

export default ErrorMessage;