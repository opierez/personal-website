    import { IoArrowForwardCircleOutline, IoArrowBackCircleOutline } from "react-icons/io5";
    
    const arrowStyles = {
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        backgroundColor: '#fff',
        border: 'none',
        padding: '0',
        cursor: 'pointer',
        zIndex: 2,
      };

    export const CustomRightArrow = ({ onClick, ...rest }) => {
        return (
            <button 
                onClick={() => onClick()} 
                style={{ ...arrowStyles, position: 'absolute', right: 0, top: '60%', transform: 'translateY(-50%)' }}
            >
                <IoArrowForwardCircleOutline size={40}/>
            </button>
        );
    };
      
    export const CustomLeftArrow = ({ onClick, ...rest }) => {
        return (
            <button 
                onClick={() => onClick()} 
                style={{ ...arrowStyles, position: 'absolute', left: 0, top: '60%', transform: 'translateY(-50%)' }}
            >
                <IoArrowBackCircleOutline size={40}/>
            </button>
        );
    };