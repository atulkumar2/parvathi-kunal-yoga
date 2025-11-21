import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './dr-kunal.module.css';
import Image from 'next/image';

export const metadata = {
    title: "Dr. Kunal | Nirog Yoga",
    description: "Dr. Kunal, Professor of Medical Physiology and Yoga Therapy Expert.",
};

export default function DrKunal() {
    return (
        <main>
            <Navbar />

            <div className={styles.container}>
                <div className={styles.profileHeader}>
                    <div className={styles.imageContainer}>
                        <Image
                            src="/dr-kunal.jpg"
                            alt="Dr. Kunal"
                            width={300}
                            height={300}
                            className={styles.profileImage}
                            priority
                        />
                    </div>
                    <div className={styles.headerContent}>
                        <h1 className={styles.name}>Dr. Kunal</h1>
                        <h2 className={styles.title}>Professor of Medical Physiology & Yoga Therapy Expert</h2>
                        <p className={styles.intro}>
                            A distinguished Professor of Medical Physiology with over two decades of experience in integrating modern medicine with traditional yogic science.
                        </p>
                    </div>
                </div>

                <section className={styles.section}>
                    <h3 className={styles.sectionTitle}>Professional Background</h3>
                    <p className={styles.text}>
                        Dr. Kunal has served as a faculty member in various medical colleges across India and Nepal. He has been passionately involved in the study and teaching of Medical Physiology for over 20 years. His unique approach combines the scientific understanding of human physiology with the ancient wisdom of Yoga.
                    </p>
                </section>

                <section className={styles.section}>
                    <h3 className={styles.sectionTitle}>Yoga & Research</h3>
                    <p className={styles.text}>
                        Dr. Kunal's association with Yoga began in 1995. He has spearheaded numerous research projects investigating the effects of Yoga on various physiological parameters.
                    </p>
                    <ul className={styles.list}>
                        <li><strong>Research Focus:</strong> Impact of Pranayama and Meditation on cognitive and cardio-respiratory functions.</li>
                        <li><strong>Publications:</strong> Author of multiple research papers in reputed medical journals.</li>
                        <li><strong>Expertise:</strong> Scientific basis of Yoga therapy for chronic conditions.</li>
                    </ul>
                </section>

                <section className={styles.section}>
                    <h3 className={styles.sectionTitle}>Education & Qualifications</h3>
                    <ul className={styles.list}>
                        <li><strong>MD (Physiology):</strong> Kasturba Medical College, Mangalore (Manipal University)</li>
                        <li><strong>MBBS:</strong> J.J.M. Medical College, Davangere (RGUHS)</li>
                        <li><strong>Yoga Instructor Course:</strong> SVYASA, Bangalore</li>
                        <li><strong>Advanced Yoga Training:</strong> Adhyatma Yoga Institute, Bangalore</li>
                    </ul>
                </section>

                <section className={styles.section}>
                    <h3 className={styles.sectionTitle}>Key Achievements</h3>
                    <ul className={styles.list}>
                        <li>Conducted workshops on "Stress Management" for medical students and professionals.</li>
                        <li>Delivered guest lectures on "Physiological Effects of Yoga" at various institutions.</li>
                        <li>Guided postgraduate students in research related to Yoga and Physiology.</li>
                    </ul>
                </section>
            </div>

            <Footer />
        </main>
    );
}
