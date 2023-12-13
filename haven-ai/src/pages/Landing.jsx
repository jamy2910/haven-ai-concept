import React from 'react'
import styles from './page-styles/Landing.module.css';
import Navbar from '../components/Navbar';
import medResearch from '/med-research.jpg'
import space from '/space.jpg';
import brain from '/brain.jpg';
import space2 from '/space2.jpg'
import solar from '/solar.jpg'

import {FadeFromBottom, BoxSlide, SlideFromLeft, SlideFromRight} from 'react-janimation';

const Landing = () => {
    return (
        <main className={styles.pageContainer}>
            <Navbar />

            <div className={styles.mainHeaderContainer}>
                <FadeFromBottom>
                    <h2 className={styles.mainHeader}>Haven AI</h2>
                </FadeFromBottom>
                <BoxSlide backgroundColor={'white'}>
                    <h4 className={styles.subHeading}>Leading AI research</h4>
                </BoxSlide>
            </div>

            <section className={styles.halfContainer}>
                <div>
                    <BoxSlide backgroundColor={'white'}>
                        <h3 className={styles.sectionHeading}>From Medical Research</h3>
                    </BoxSlide>
                    <p className={styles.demoText}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A asperiores minima quibusdam sed aperiam maiores delectus, ad qui quos necessitatibus!
                        Modi reiciendis id veritatis rerum nihil possimus a illo vero.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. A asperiores minima quibusdam sed aperiam maiores delectus, ad qui quos necessitatibus!
                        Modi reiciendis id veritatis rerum nihil possimus a illo vero.</p>
                </div>

                <div style={{ textAlign: 'right' }}>
                    <FadeFromBottom>
                        <img src={medResearch} className={styles.landingImage} />
                    </FadeFromBottom>
                </div>
            </section>

            <section className={styles.halfContainer}>

                <div style={{ textAlign: 'left' }}>
                    <FadeFromBottom>
                        <img src={space} className={styles.landingImage} />
                    </FadeFromBottom>
                </div>
                <div>
                    <BoxSlide backgroundColor={'white'}>
                        <h3 className={styles.sectionHeading}>To Space Exploration</h3>
                    </BoxSlide>
                    <p className={styles.demoText}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A asperiores minima quibusdam sed aperiam maiores delectus, ad qui quos necessitatibus!
                        Modi reiciendis id veritatis rerum nihil possimus a illo vero.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. A asperiores minima quibusdam sed aperiam maiores delectus, ad qui quos necessitatibus!
                        Modi reiciendis id veritatis rerum nihil possimus a illo vero.</p>
                </div>
            </section>

            <section className={styles.cardSection}>
                <div style={{ textAlign: 'center' }}>
                    <BoxSlide backgroundColor={'white'}>
                        <h3 className={styles.subHeading}>Projects</h3>
                    </BoxSlide>
                </div>
                <div className={styles.cardContainer}>
                    <SlideFromLeft>
                        <div className={styles.projectCard}>

                            <img src={brain} />
                            <div>
                                <h5>Lorem Ipsum Title</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga assumenda laudantium neque, in voluptas non asperiores ducimus, sed labore eveniet commodi,
                                    modi repellendus ipsum error sequi id cum ad nostrum.</p>
                                <button className={styles.cardShowMore}>Learn More</button>
                            </div>

                        </div>
                    </SlideFromLeft>

                    <FadeFromBottom hideOverflow={false}>
                        <div className={styles.projectCard}>

                            <img src={space2} />
                            <div>
                                <h5>Lorem Ipsum Title</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga assumenda laudantium neque, in voluptas non asperiores ducimus, sed labore eveniet commodi,
                                    modi repellendus ipsum error sequi id cum ad nostrum.</p>
                                <button className={styles.cardShowMore}>Learn More</button>
                            </div>
                        </div>
                    </FadeFromBottom>

                    <SlideFromRight>
                        <div className={styles.projectCard}>
                            <img src={solar} />
                            <div>
                                <h5>Lorem Ipsum Title</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga assumenda laudantium neque, in voluptas non asperiores ducimus, sed labore eveniet commodi,
                                    modi repellendus ipsum error sequi id cum ad nostrum.</p>
                                <button className={styles.cardShowMore}>Learn More</button>
                            </div>
                        </div>
                    </SlideFromRight>
                </div>
            </section>

            <footer className={styles.footer}>

                <div className={styles.footerContent}>
                    <div className={styles.footerSection}>
                        <h6>Quick Links</h6>
                        <div className={styles.footerQuickLinks}>
                            <a className={styles.footerLink}>Home</a>
                            <a className={styles.footerLink}>Research</a>
                            <a className={styles.footerLink}>Projects</a>
                            <a className={styles.footerLink}>Products</a>
                        </div>
                    </div>

                    <div className={styles.footerSection}>
                        <h6>Research</h6>
                        <div className={styles.footerQuickLinks}>
                            <a className={styles.footerLink}>API</a>
                            <a className={styles.footerLink}>Patents</a>
                            <a className={styles.footerLink}>Use cases</a>
                            <a className={styles.footerLink}>Study</a>
                        </div>
                    </div>

                    <div className={styles.footerSection}>
                        <h6>Contact</h6>
                        <div className={styles.footerQuickLinks}>
                            <a className={styles.footerLink}>Careers</a>
                            <a className={styles.footerLink}>Products</a>
                        </div>
                    </div>
                </div>

                


            </footer>

        </main>
    )
}

export default Landing