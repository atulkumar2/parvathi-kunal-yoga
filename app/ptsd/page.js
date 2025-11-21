import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './ptsd.module.css';

export const metadata = {
    title: "PTSD Information | Healing Yoga Sadhana",
    description: "Understanding Post-Traumatic Stress Disorder in the Indian context - causes, symptoms, and healing approaches.",
};

export default function PTSD() {
    return (
        <main>
            <Navbar />

            <div className={styles.container}>
                <header className={styles.header}>
                    <h1 className={styles.title}>Understanding PTSD</h1>
                    <p className={styles.subtitle}>
                        Post-Traumatic Stress Disorder in the Indian Context
                    </p>
                </header>

                {/* English Version */}
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>What is PTSD?</h2>
                    <p className={styles.text}>
                        PTSD is a mental health condition that can develop after a person goes through a deeply stressful, frightening, or disturbing event. While widely discussed globally, many Indians experience PTSD quietly due to stigma, lack of awareness, or cultural pressure to "stay strong" and "move on."
                    </p>

                    <h3 className={styles.subheading}>Common Causes in India</h3>
                    <ul className={styles.list}>
                        <li>Childhood trauma (violence, neglect, physical punishment)</li>
                        <li>Road accidents</li>
                        <li>Medical trauma (ICU stays, surgeries, childbirth complications)</li>
                        <li>Domestic violence or toxic family environments</li>
                        <li>Sudden loss of a family member</li>
                        <li>Natural disasters (floods, earthquakes, cyclones)</li>
                        <li>Workplace harassment or extreme stress</li>
                        <li>Community violence or witnessing traumatic events</li>
                        <li>Relationship betrayal or emotional abuse</li>
                    </ul>

                    <h3 className={styles.subheading}>Symptoms</h3>
                    <ul className={styles.list}>
                        <li>Flashbacks, nightmares</li>
                        <li>Feeling constantly alert or fearful</li>
                        <li>Irritability, anger</li>
                        <li>Emotional numbness or withdrawal</li>
                        <li>Sleep disturbances</li>
                        <li>Difficulty concentrating</li>
                        <li>Avoidance of people/places related to trauma</li>
                        <li>Physical symptoms: chest tightness, headaches, body pain, digestive issues</li>
                    </ul>

                    <h3 className={styles.subheading}>Cultural Patterns in India</h3>
                    <ul className={styles.list}>
                        <li>Normalization of trauma with phrases like "move on," "sab theek ho jayega"</li>
                        <li>Families discourage discussing emotional pain</li>
                        <li>Symptoms misunderstood as weakness or overthinking</li>
                        <li>Emotional suppression in men</li>
                        <li>Women often silenced around trauma</li>
                    </ul>

                    <h3 className={styles.subheading}>Healing Approaches</h3>
                    <ul className={styles.list}>
                        <li>Trauma-informed therapy or counselling</li>
                        <li>Yogic practices like pranayama, grounding, slow mindful movement</li>
                        <li>Supportive family environments</li>
                        <li>Emotional resilience-building</li>
                        <li>Lifestyle changes: sleep hygiene, routine, mindful breathing</li>
                        <li>Medical guidance when needed</li>
                    </ul>

                    <p className={styles.highlight}>
                        PTSD recovery is possible with the right support and compassion.
                    </p>
                </section>

                {/* Hindi Version */}
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>PTSD क्या है?</h2>
                    <p className={styles.text}>
                        PTSD एक मानसिक स्वास्थ्य स्थिति है जो किसी व्यक्ति के अत्यधिक तनावपूर्ण, डरावनी या दर्दनाक घटना के बाद विकसित हो सकती है। भारत में बहुत से लोग PTSD का अनुभव करते हैं, लेकिन इसे अक्सर नज़रअंदाज़ कर दिया जाता है क्योंकि समाज में मानसिक स्वास्थ्य को लेकर शर्म, डर या चुप रहने की आदत है।
                    </p>

                    <h3 className={styles.subheading}>भारत में PTSD के सामान्य कारण</h3>
                    <ul className={styles.list}>
                        <li>बचपन का ट्रॉमा (हिंसा, उपेक्षा, शारीरिक दंड)</li>
                        <li>सड़क दुर्घटनाएँ</li>
                        <li>मेडिकल ट्रॉमा (ICU, ऑपरेशन, प्रसव की जटिलताएँ)</li>
                        <li>घरेलू हिंसा या विषाक्त पारिवारिक वातावरण</li>
                        <li>किसी प्रियजन की अचानक मृत्यु</li>
                        <li>प्राकृतिक आपदाएँ</li>
                        <li>वर्कप्लेस में उत्पीड़न या तनाव</li>
                        <li>सामुदायिक हिंसा</li>
                        <li>रिश्तों में धोखा या भावनात्मक अत्याचार</li>
                    </ul>

                    <h3 className={styles.subheading}>लक्षण</h3>
                    <ul className={styles.list}>
                        <li>फ्लैशबैक, डरावने सपने</li>
                        <li>हमेशा चौकन्ना या डर महसूस होना</li>
                        <li>गुस्सा या चिड़चिड़ापन</li>
                        <li>भावनात्मक सुन्नता</li>
                        <li>नींद में दिक्कत</li>
                        <li>ध्यान न लगना</li>
                        <li>घटना से जुड़ी चीज़ों से बचना</li>
                        <li>शारीरिक लक्षण: सीने में जकड़न, सिरदर्द, बदन दर्द, पाचन समस्याएँ</li>
                    </ul>

                    <h3 className={styles.subheading}>भारतीय सांस्कृतिक प्रभाव</h3>
                    <ul className={styles.list}>
                        <li>"भूल जाओ," "इतना मत सोचो," जैसी बातें</li>
                        <li>परिवारों में ट्रॉमा पर बात करने की मनाही</li>
                        <li>लक्षणों को कमज़ोरी समझना</li>
                        <li>पुरुषों को भावनाएँ दबाने की आदत</li>
                        <li>महिलाओं को बोलने से रोकना</li>
                    </ul>

                    <h3 className={styles.subheading}>उपचार के तरीके</h3>
                    <ul className={styles.list}>
                        <li>ट्रॉमा-इन्फॉर्म्ड थेरेपी</li>
                        <li>योग, प्राणायाम, ग्राउंडिंग अभ्यास</li>
                        <li>सुरक्षित और सहयोगी वातावरण</li>
                        <li>धीरे-धीरे भावनात्मक लचीलापन बढ़ाना</li>
                        <li>जीवनशैली सुधार</li>
                        <li>ज़रूरत पड़ने पर मेडिकल सलाह</li>
                    </ul>

                    <p className={styles.highlight}>
                        PTSD से उबरना पूरी तरह संभव है।
                    </p>
                </section>

                {/* Resources Section */}
                <section className={styles.resourcesSection}>
                    <h2 className={styles.sectionTitle}>Medical & Scientific Resources</h2>
                    <p className={styles.text}>
                        For more detailed information, please refer to these trusted medical and scientific publications:
                    </p>

                    <div className={styles.resourceGrid}>
                        <a href="https://www.psychiatry.org/patients-families/ptsd" target="_blank" rel="noopener noreferrer" className={styles.resourceCard}>
                            <h4>American Psychiatric Association</h4>
                            <p>Official diagnostic criteria (DSM-5)</p>
                        </a>

                        <a href="https://www.nimh.nih.gov/health/topics/post-traumatic-stress-disorder-ptsd" target="_blank" rel="noopener noreferrer" className={styles.resourceCard}>
                            <h4>National Institute of Mental Health</h4>
                            <p>PTSD Fact Sheet and Research</p>
                        </a>

                        <a href="https://www.mayoclinic.org/diseases-conditions/post-traumatic-stress-disorder/symptoms-causes/syc-20355967" target="_blank" rel="noopener noreferrer" className={styles.resourceCard}>
                            <h4>Mayo Clinic</h4>
                            <p>Symptoms, Causes, and Treatment</p>
                        </a>

                        <a href="https://www.health.harvard.edu/a_to_z/post-traumatic-stress-disorder-ptsd-a-to-z" target="_blank" rel="noopener noreferrer" className={styles.resourceCard}>
                            <h4>Harvard Health Publishing</h4>
                            <p>Trauma and PTSD Insights</p>
                        </a>

                        <a href="https://www.who.int/news-room/fact-sheets/detail/post-traumatic-stress-disorder" target="_blank" rel="noopener noreferrer" className={styles.resourceCard}>
                            <h4>World Health Organization</h4>
                            <p>ICD-11 Classification of PTSD</p>
                        </a>

                        <a href="https://www.ptsd.va.gov/" target="_blank" rel="noopener noreferrer" className={styles.resourceCard}>
                            <h4>National Center for PTSD</h4>
                            <p>Comprehensive Trauma Resource Library</p>
                        </a>

                        <a href="https://en.wikipedia.org/wiki/Post-traumatic_stress_disorder" target="_blank" rel="noopener noreferrer" className={styles.resourceCard}>
                            <h4>Wikipedia - PTSD</h4>
                            <p>General Overview and Information</p>
                        </a>

                        <a href="https://indianjpsychiatry.org/" target="_blank" rel="noopener noreferrer" className={styles.resourceCard}>
                            <h4>Indian Journal of Psychiatry</h4>
                            <p>India-specific PTSD Studies</p>
                        </a>
                    </div>
                </section>
            </div>

            <Footer />
        </main>
    );
}
