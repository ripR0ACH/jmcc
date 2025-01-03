import Image from 'next/image';

export default function Media(props) {
    return (
        <section>
            <div className='row'>
                <div className='col-6 d-flex flex-column align-items-center justify-content-center'>
                    <h1><span className='pr-3'>Media</span><Image src='/jmccbeatswhat56.png' width='56' height='56' className='img-responsive' alt='media icon'/></h1>
                    <p className='text-center pt-4'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et ligula ullamcorper malesuada proin libero nunc.
                    </p>
                </div>
            </div>
        </section>
    );
}