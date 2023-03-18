import styles from './About.module.scss';
import PageTitle from '../PageTitle/PageTitle';

const About = () => {

    return(
        <div className={styles.page_about}>
            <PageTitle>About</PageTitle>
            <p>Lorem Ipsum.</p>
        </div>
    )


    

};

export default About;