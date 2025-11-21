import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './chronic-pain.module.css';

export const metadata = {
    title: "Chronic Pain Management | Nirog Yoga",
    description: "Understanding chronic low back pain and how yoga therapy provides relief through gentle movement and strengthening.",
};

export default function ChronicPain() {
    return (
        <main>
            <Navbar />

            <div className={styles.container}>
                <header className={styles.header}>
                    <h1 className={styles.title}>Understanding Chronic Pain</h1>
                    <p className={styles.subtitle}>
                        Managing Chronic Low Back Pain Through Yoga
                    </p>
                </header>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>What is Chronic Low Back Pain?</h2>
                    <p className={styles.text}>
                        Chronic low back pain is pain that persists for 12 weeks or longer, even after an initial injury or underlying cause has been treated. It affects millions of Indians, particularly those with sedentary jobs or poor posture.
                    </p>

                    <h3 className={styles.subheading}>Common Causes</h3>
                    <ul className={styles.list}>
                        <li>Prolonged sitting and sedentary lifestyle</li>
                        <li>Poor posture and ergonomics</li>
                        <li>Muscle weakness and imbalances</li>
                        <li>Degenerative disc disease</li>
                        <li>Stress and muscle tension</li>
                        <li>Previous injuries or trauma</li>
                        <li>Obesity and excess weight</li>
                    </ul>

                    <h3 className={styles.subheading}>How Yoga Helps</h3>
                    <ul className={styles.list}>
                        <li><strong>Strengthening:</strong> Builds core and back muscles for better support</li>
                        <li><strong>Flexibility:</strong> Improves range of motion and reduces stiffness</li>
                        <li><strong>Posture Correction:</strong> Develops body awareness and alignment</li>
                        <li><strong>Pain Relief:</strong> Releases endorphins and reduces inflammation</li>
                        <li><strong>Stress Reduction:</strong> Decreases muscle tension from psychological stress</li>
                        <li><strong>Mind-Body Connection:</strong> Helps understand pain patterns and triggers</li>
                    </ul>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>पुराना दर्द क्या है?</h2>
                    <p className={styles.text}>
                        पुराना कमर दर्द वह दर्द है जो 12 सप्ताह या उससे अधिक समय तक बना रहता है। यह लाखों भारतीयों को प्रभावित करता है, विशेष रूप से उन लोगों को जो बैठे रहने वाली नौकरी करते हैं।
                    </p>
                    <p className={styles.highlight}>
                        योग पीठ दर्द के लिए एक सुरक्षित और प्रभावी उपचार है जो मांसपेशियों को मजबूत करता है और लचीलापन बढ़ाता है।
                    </p>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Scientific Evidence</h2>

                    <div className={styles.researchCard}>
                        <h4 className={styles.researchTitle}>Yoga for Chronic Low Back Pain</h4>
                        <p className={styles.researchJournal}>Annals of Internal Medicine, 2017</p>
                        <p className={styles.text}>
                            Systematic review showing yoga is as effective as physical therapy for chronic low back pain.
                        </p>
                        <a
                            href="https://pubmed.ncbi.nlm.nih.gov/28631003/"
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
                        <a href="https://www.ninds.nih.gov/low-back-pain-fact-sheet" target="_blank" rel="noopener noreferrer" className={styles.resourceCard}>
                            <h4>NINDS</h4>
                            <p>Low Back Pain Information</p>
                        </a>
                        <a href="https://www.mayoclinic.org/diseases-conditions/back-pain" target="_blank" rel="noopener noreferrer" className={styles.resourceCard}>
                            <h4>Mayo Clinic</h4>
                            <p>Back Pain Guide</p>
                        </a>
                    </div>
                </section>
            </div>

            <Footer />
        </main>
    );
}
