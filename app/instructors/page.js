import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import InstructorProfile from '@/components/InstructorProfile';
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
                <InstructorProfile />
            </div>

            <Footer />
        </main>
    );
}
