import Link from 'next/link';
import styles from './ProgramsSection.module.css';

const ProgramsSection = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <header className={styles.header}>
                    <h2 className={styles.title}>Our Programs</h2>
                    <p className={styles.subtitle}>
                        Choose the path that suits your lifestyle. Whether you prefer the energy of a group or personalized attention, we have a program for you.
                    </p>
                    <div className={styles.earlySeekersBanner}>
                        <span className={styles.bannerIcon}>✨</span>
                        For limited time, Early seeker's privilege is available. <Link href="/contact" className={styles.bannerLink}>Contact Us</Link> for more details.
                    </div>
                </header>

                <div className={styles.compactGrid}>
                    {/* Morning Daily Sessions */}
                    <Link href="/programs-events#morning-daily" className={`${styles.compactCard} ${styles.morningCard}`}>
                        <div className={styles.cardIcon}>🌅</div>
                        <h3 className={styles.compactTitle}>Morning Group - Daily</h3>
                        <p className={styles.compactTiming}>5:30 AM - 7:00 AM</p>
                        <p className={styles.compactDetail}>4-5 days/week</p>
                        <div className={styles.learnMore}>Learn More →</div>
                    </Link>

                    {/* Morning Alternate Days */}
                    <Link href="/programs-events#morning-alternate" className={`${styles.compactCard} ${styles.morningCard}`}>
                        <div className={styles.cardIcon}>🌄</div>
                        <h3 className={styles.compactTitle}>Morning Group - Alternate Days</h3>
                        <p className={styles.compactTiming}>5:30 AM - 7:00 AM</p>
                        <p className={styles.compactDetail}>3 days/week</p>
                        <div className={styles.learnMore}>Learn More →</div>
                    </Link>

                    {/* Evening Sessions */}
                    <Link href="/programs-events#evening-group" className={`${styles.compactCard} ${styles.eveningCard}`}>
                        <div className={styles.cardIcon}>🌆</div>
                        <h3 className={styles.compactTitle}>Evening Group - 3 Days/Week</h3>
                        <p className={styles.compactTiming}>5:00 PM - 6:30 PM</p>
                        <p className={styles.compactDetail}>3 days/week</p>
                        <div className={styles.learnMore}>Learn More →</div>
                    </Link>

                    {/* Personal Consultation */}
                    <Link href="/programs-events#personal-consultation" className={`${styles.compactCard} ${styles.personalCard}`}>
                        <div className={styles.cardIcon}>🤝</div>
                        <h3 className={styles.compactTitle}>Personal Consultation</h3>
                        <p className={styles.compactTiming}>On Prior Appointment</p>
                        <p className={styles.compactDetail}>One-on-one sessions</p>
                        <div className={styles.learnMore}>Learn More →</div>
                    </Link>
                </div>

                <div className={styles.ctaSection}>
                    <div className={styles.buttonGroup}>
                        <Link href="/enrollment-payment" className={styles.ctaButton}>
                            Enroll Now
                        </Link>
                        <Link href="/testimonials#interest" className={styles.secondaryButton}>
                            Register Interest
                        </Link>
                        <Link href="/payment" className={styles.payButton}>
                            Pay Now
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProgramsSection;
