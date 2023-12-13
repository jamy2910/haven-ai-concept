
import { useEffect, useState } from 'react';
import styles from './styles/Navbar.module.css';
import { SlClose, SlMenu} from 'react-icons/sl'
import { SlideFromLeft } from 'react-janimation';

const Navbar = () => {  

    const [menu, setMenu] = useState(false)

    const [yPos, setYPos] = useState(0);
    const [show, setShow] = useState(true);

    const controlNavbar = () => {
        const currentScroll = window.scrollY;


        if (currentScroll < yPos) {
            setShow(true);
        } else {
            setShow(false)
        }

        setYPos(currentScroll);
    }

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar);


        return () => {
            window.removeEventListener('scroll', controlNavbar);
        }
    }, [yPos])

    return (
        <nav className={show ? `${styles.navContainer} ${styles.showNav}` : styles.navContainer}>

            <div className={styles.navSpacer}>
                <h2 className={styles.logo}>Haven AI</h2>

                <div className={styles.linkContainer}>
                    <a className={styles.link}>Home</a>
                    <a className={styles.link}>Research</a>
                    <a className={styles.link}>Projects</a>
                    <a className={styles.link}>Products</a>
                </div>
            </div>

            <button onClick={() => {setMenu(true)}} className={styles.menuButton}><SlMenu className={styles.icon} /></button>

            {menu && <div className={styles.menuOverlay}>
                <SlideFromLeft>
                    <div className={styles.menuContent}>
                        <a className={styles.mobileMenuLink}>Home</a>
                        <a className={styles.mobileMenuLink}>Research</a>
                        <a className={styles.mobileMenuLink}>Projects</a>
                        <a className={styles.mobileMenuLink}>Products</a>
                        <button onClick={() => {setMenu(false)}} className={styles.closeMenuButton}><SlClose /></button>
                    </div>
                </SlideFromLeft>
                
            </div>}

        </nav>
    )
}

export default Navbar