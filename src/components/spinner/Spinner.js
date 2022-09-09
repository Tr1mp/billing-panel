import MoonLoader from "react-spinners/MoonLoader";

import './spinner.scss';

const Spinner = () => {
    return(
        <div className="spinner">
            <div className="inner">
                <MoonLoader
                    color="#eeeeee"
                    loading
                    size={50}
                    speedMultiplier={0.5}
                />
            </div>
            
        </div>
        
    )
}

export default Spinner;