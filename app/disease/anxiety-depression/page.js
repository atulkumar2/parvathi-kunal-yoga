import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './anxiety-depression.module.css';

export const metadata = {
    title: "Anxiety & Depression | Nirog Yoga",
    description: "Understanding anxiety and depression - causes, symptoms, and how yoga therapy can help manage these mental health conditions.",
};

export default function AnxietyDepression() {
    return (
        <main>
            <Navbar />

            <div className={styles.container}>
                <header className={styles.header}>
                    <h1 className={styles.title}>Understanding Anxiety & Depression</h1>
                    <p className={styles.subtitle}>
                        Mental Health Conditions and Yoga Therapy
                    </p>
                </header>

                {/* English Version */}
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>What are Anxiety & Depression?</h2>
                    <p className={styles.text}>
                        Anxiety disorders and depression are among the most common mental health conditions worldwide. Anxiety involves persistent worry, fear, and physical symptoms like rapid heartbeat, while depression is characterized by persistent sadness, loss of interest, and low energy.
                    </p>

                    <h3 className={styles.subheading}>Common Causes in India</h3>
                    <ul className={styles.list}>
                        <li>Work-related stress and job insecurity</li>
                        <li>Academic pressure and competitive environments</li>
                        <li>Family and relationship conflicts</li>
                        <li>Financial difficulties and economic uncertainty</li>
                        <li>Social stigma around mental health</li>
                        <li>Rapid urbanization and lifestyle changes</li>
                        <li>Genetic predisposition and brain chemistry</li>
                    </ul>

                    <h3 className={styles.subheading}>Common Symptoms</h3>
                    <ul className={styles.list}>
                        <li><strong>Anxiety:</strong> Excessive worry, restlessness, difficulty concentrating, sleep problems, physical tension</li>
                        <li><strong>Depression:</strong> Persistent sadness, loss of interest in activities, fatigue, changes in appetite or sleep, feelings of worthlessness</li>
                        <li>Irritability and mood swings</li>
                        <li>Physical symptoms: headaches, digestive issues, muscle pain</li>
                        <li>Social withdrawal and isolation</li>
                    </ul>

                    <h3 className={styles.subheading}>How Yoga Helps</h3>
                    <p className={styles.text}>
                        Yoga offers a holistic approach to managing anxiety and depression through:
                    </p>
                    <ul className={styles.list}>
                        <li><strong>Stress Reduction:</strong> Pranayama (breathing exercises) activates the parasympathetic nervous system, reducing stress hormones</li>
                        <li><strong>Mood Enhancement:</strong> Physical practice increases serotonin and endorphin levels</li>
                        <li><strong>Mindfulness:</strong> Meditation cultivates present-moment awareness, reducing rumination</li>
                        <li><strong>Body-Mind Connection:</strong> Asanas help release physical tension associated with mental stress</li>
                        <li><strong>Sleep Improvement:</strong> Regular practice improves sleep quality, crucial for mental health</li>
                        <li><strong>Self-Compassion:</strong> Yoga philosophy promotes self-acceptance and reduces self-criticism</li>
                    </ul>
                </section>

                {/* Hindi Version */}
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>चिंता और अवसाद क्या हैं?</h2>
                    <p className={styles.text}>
                        चिंता विकार और अवसाद दुनिया भर में सबसे आम मानसिक स्वास्थ्य स्थितियों में से हैं। चिंता में लगातार चिंता, भय और तेज़ दिल की धड़कन जैसे शारीरिक लक्षण शामिल हैं, जबकि अवसाद लगातार उदासी, रुचि की कमी और कम ऊर्जा की विशेषता है।
                    </p>

                    <p className={styles.highlight}>
                        योग तनाव प्रबंधन, मूड सुधार और मानसिक स्वास्थ्य के लिए एक सिद्ध प्राकृतिक उपचार है।
                    </p>
                </section>

                {/* Scientific Evidence */}
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Scientific Evidence: Yoga for Mental Health</h2>
                    <p className={styles.text}>
                        Research demonstrates yoga's effectiveness in managing anxiety and depression.
                    </p>

                    <div className={styles.researchCard}>
                        <h4 className={styles.researchTitle}>Yoga for Anxiety and Depression</h4>
                        <p className={styles.researchJournal}>Harvard Mental Health Letter, 2009</p>
                        <p className={styles.text}>
                            Multiple studies show that yoga can reduce symptoms of anxiety and depression, with effects comparable to exercise and some medications.
                        </p>
                        <a
                            href="https://www.health.harvard.edu/mind-and-mood/yoga-for-anxiety-and-depression"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.pubmedLink}
                        >
                            Read More →
                        </a>
                    </div>

                    <div className={styles.researchCard}>
                        <h4 className={styles.researchTitle}>Effects of Yoga on Mental Health</h4>
                        <p className={styles.researchJournal}>Frontiers in Psychiatry, 2018</p>
                        <p className={styles.text}>
                            Systematic review showing yoga interventions significantly reduce symptoms of depression and anxiety across various populations.
                        </p>
                        <a
                            href="https://pubmed.ncbi.nlm.nih.gov/30279666/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.pubmedLink}
                        >
                            View on PubMed →
                        </a>
                    </div>
                </section>

                {/* Resources */}
                <section className={styles.resourcesSection}>
                    <h2 className={styles.sectionTitle}>Medical & Scientific Resources</h2>
                    <div className={styles.resourceGrid}>
                        <a href="https://www.nimhans.ac.in/" target="_blank" rel="noopener noreferrer" className={styles.resourceCard}>
                            <h4>NIMHANS</h4>
                            <p>National Institute of Mental Health and Neurosciences, Bangalore</p>
                        </a>
                        <a href="https://www.who.int/health-topics/mental-health" target="_blank" rel="noopener noreferrer" className={styles.resourceCard}>
                            <h4>WHO Mental Health</h4>
                            <p>World Health Organization resources</p>
                        </a>
                        <a href="https://www.apa.org/topics/anxiety" target="_blank" rel="noopener noreferrer" className={styles.resourceCard}>
                            <h4>APA - Anxiety</h4>
                            <p>American Psychological Association</p>
                        </a>
                        <a href="https://www.apa.org/topics/depression" target="_blank" rel="noopener noreferrer" className={styles.resourceCard}>
                            <h4>APA - Depression</h4>
                            <p>American Psychological Association</p>
                        </a>
                    </div>
                </section>
            </div>

            <Footer />
        </main>
    );
}
