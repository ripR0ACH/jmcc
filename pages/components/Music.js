import React, {Component} from 'react';
import Image from 'next/image';
import styles from './styles/Music.module.css'

class Music extends Component {
    constructor(props) {
        super(props);
        this.state = {
            albums: [
                { id: 1, title: "dis for the homies", cover: "/jmcc_dis_for_the_homies.png"},
                { id: 2, title: "drive", cover: "/jmcc_drive.png" },
            ]
        };
    }
    render() {
        return (
            <section>
                <div className='album-stack row flex-row-reverse'>
                    <div className='my-3 col-sm-6 d-flex align-items-center justify-content-center'>
                        {/* this is where I need to add a vinyl stack, or maybe a music carousel */}
                        {this.state.albums.map(album => (
                            <div key={album.id} className={styles.album} style={{ zIndex: (-1) * album.id, }}>
                                <Image src={album.cover} width='200' height='200' alt={album.title} />
                            </div>
                        ))}
                    </div>
                    <div className='my-3 col-sm-6 d-flex flex-column align-items-center justify-content-center'>
                        <h1><span className='pr-3'>Music</span><Image src='/jmccbeatsglasses56.png' width='56' height='56' className='img-responsive' alt='music icon' /></h1>
                        <p className='text-center pt-4'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et ligula ullamcorper malesuada proin libero nunc.
                        </p>
                    </div>
                </div>
            </section>
        )
    }
}
export default Music;