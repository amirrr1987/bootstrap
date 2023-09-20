import { Icon } from '@iconify/react/dist/iconify.js';
import './Intro.scss';
import illustration from '@/assets/images/arts/intro-section-illustration.png'
const Intro = ()=>{
    return <header id="intro" className="intro">
        <div className="intro__container">
            <div className="intro__row">
                <div className="col-12 col-md-6">
                    <h1 className='intro__title text-white'>Hey!, I'm Patrick</h1>
                    <p className='intro__caption text-white'>this is a multi-purpose responsive layout created with bootstrap v5. (here your can place your description text)</p>
                    <a href="">Get in Touch</a>
                </div>
                <div className="col-12 col-md-6">
                    <div className="intro__box">
                    <img className='intro__image' src={illustration} title='illustration' alt="illustration" />
                    <button className='intro__btn'>
                        <Icon className='intro__icon' icon='tabler:play' width={40} />
                    </button>
                    </div>
                </div>
            </div>
        </div>
    </header>
}
export default Intro