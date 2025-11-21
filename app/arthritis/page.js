import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './arthritis.module.css';

export const metadata = {
    title: "Arthritis Management | Nirog Yoga",
    description: "Understanding arthritis and how yoga therapy improves joint health through gentle movement and flexibility exercises.",
};

export default function Arthritis() {
    return (
        <main>
            <Navbar />

            <div className={styles.container}>
                <header className={styles.header}>
                    <h1 className={styles.title}>Understanding Arthritis</h1>
                    <p className={styles.subtitle}>
                        Managing Joint Health Through Yoga
                    </p>
                </header>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>What is Arthritis?</h2>
                    <p className={styles.text}>
                        Arthritis is inflammation of one or more joints, causing pain and stiffness. The most common types are osteoarthritis (wear-and-tear) and rheumatoid arthritis (autoimmune).
                    </p>

                    <h3 className={styles.subheading}>Common Causes & Risk Factors</h3>
                    <ul className={styles.list}>
                        <li>Age-related wear and tear</li>
                        <li>Previous joint injuries</li>
                        <li>Obesity and excess weight on joints</li>
                        <li>Genetic predisposition</li>
                        <li>Autoimmune conditions</li>
                        <li>Repetitive stress on joints</li>
                        <li>Sedentary lifestyle</li>
                    </ul>

                    <h3 className={styles.subheading}>How Yoga Helps</h3>
                    <ul className={styles.list}>
                        <li><strong>Gentle Movement:</strong> Maintains joint flexibility without stress</li>
                        <li><strong>Strength Building:</strong> Supports joints with stronger muscles</li>
                        <li><strong>Pain Relief:</strong> Reduces inflammation and pain perception</li>
                        <li><strong>Range of Motion:</strong> Improves joint mobility gradually</li>
                        <li><strong>Weight Management:</strong> Reduces stress on weight-bearing joints</li>
                        <li><strong>Mind-Body Awareness:</strong> Helps understand pain patterns</li>
                    </ul>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>गठिया क्या है?</h2>
                    <p className={styles.text}>
                        गठिया एक या अधिक जोड़ों की सूजन है, जिससे दर्द और कठोरता होती है। सबसे आम प्रकार ऑस्टियोआर्थराइटिस और रुमेटीइड गठिया हैं।
                    </p>
                    <p className={styles.highlight}>
                        योग जोड़ों के लचीलेपन में सुधार, दर्द कम करने और गतिशीलता बढ़ाने में मदद करता है।
                    </p>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Scientific Evidence</h2>

                    <div className={styles.researchCard}>
                        <h4 className={styles.researchTitle}>Yoga for Arthritis</h4>
                        <p className={styles.researchJournal}>Journal of Rheumatology, 2015</p>
                        <p className={styles.text}>
                            Study showing yoga improves physical and mental well-being in people with arthritis.
                        </p>
                        <a
                            href="https://pubmed.ncbi.nlm.nih.gov/26472413/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.pubmedLink}
                        >
                            View on PubMed →
                        </a>
                    </div>
                </section>

                <section className={styles.resourcesSection}>
                    <h2 className={styles.sectionTitle}>Resources</h2>
                    <div className={styles.resourceGrid}>
                        <a href="https://www.arthritis.org/" target="_blank" rel="noopener noreferrer" className={styles.resourceCard}>
                            <h4>Arthritis Foundation</h4>
                            <p>Comprehensive Arthritis Information</p>
                        </a>
                        <a href="https://www.niams.nih.gov/health-topics/arthritis" target="_blank" rel="noopener noreferrer" className={styles.resourceCard}>
                            <h4>NIAMS</h4>
                            <p>Arthritis Resources</p>
                        </a>
                    </div>
                </section>
            </div>

            <Footer />
        </main>
    );
}
