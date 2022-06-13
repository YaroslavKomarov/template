import ReactLoading from 'react-loading';

export default function LoadingPage() {
    return (
        <div className="loading-wrap">
            <ReactLoading type='bars' color='#1db954' width='3vw' height='3vh' />
        </div>
    );
}