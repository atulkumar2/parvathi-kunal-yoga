import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './instructors.module.css';

export const metadata = {
    title: "Our Instructors | Nirog Yoga",
    description: "Meet our experienced yoga instructors at Nirog Yoga.",
};

export default function Instructors() {
    return (
        <main>
            <Navbar />

            <div className={styles.container}>
                <header className={styles.header}>
                    <h1 className={styles.title}>Our Instructors</h1>
                    <p className={styles.subtitle}>
                        Meet the experienced practitioners guiding your healing journey
                    </p>
                </header>

                <section className={styles.comingSoon}>
                    <div className={styles.icon}>🧘</div>
                    <h2 className={styles.comingSoonTitle}>Coming Soon</h2>
                    <p className={styles.comingSoonText}>
                        We're preparing detailed profiles of our instructors. Check back soon to learn more about the dedicated practitioners who will guide you on your healing journey.
                    </p>
                    <p className={styles.contactText}>
                        For immediate inquiries, please contact us at{' '}
                        <a href="mailto:drkunal10@gmail.com" className={styles.emailLink}>
                            drkunal10@gmail.com
                        </a>
                        {' '}or call{' '}
                        <a href="tel:8792873242" className={styles.phoneLink}>
                            8792873242
                        </a>
                    </p>
                </section>
            </div>

            <Footer />
        </main>
    );
}
