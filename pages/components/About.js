import Image from 'next/image';

export default function About(props) {
    return (
        <section>
            <h1 className='d-flex align-items-center justify-content-center'><span className='pr-3'>About</span><Image src='/jmccbeatssmile56.png' width='56' height='56' alt='about icon'/></h1>
            <p className='text-center pt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dignissim diam quis enim lobortis scelerisque fermentum dui.</p>
        </section>
    );
}