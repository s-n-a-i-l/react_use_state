import './Restart.css';

function Restart({onRestart})
{
    return(
        <div className='restart'>
            <button className='restart-button' onClick={onRestart}>
                Начать заново
            </button>
        </div>
    )
}
export default Restart;