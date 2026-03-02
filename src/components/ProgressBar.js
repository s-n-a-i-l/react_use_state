import './ProgressBar.css';

function ProgressBar({precentage})
{
    const getColor =()=>
        {
            if(precentage < 40) return '#ff0000';
            else if(precentage < 70) return '#ffa500';
            else return "#2ecc71";
        }

        return(
            <div className='progress-bar'>
                <div className='progress-bar-fill'
                     style={{width: `${precentage}%`, background:getColor()}}>

                </div>
            </div>
        )
}
export default ProgressBar;