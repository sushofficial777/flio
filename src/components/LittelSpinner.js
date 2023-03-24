import   {CSSProperties} from 'react';
import PuffLoader from "react-spinners/PuffLoader";

const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

const LittleSpinner = () => {
    return (
        <div className='little-spinner'>
            <PuffLoader
        color='#000000'
        //  loading={true}
        cssOverride=''
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
        </div>
    );
}

export default LittleSpinner;