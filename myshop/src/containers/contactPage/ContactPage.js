import React from 'react';
import PageSectionBanner from '../../components/common/widgets/page-section-banner/PageSectionBanner';
import ContactForm from '../../components/contactPage/ContactForm';

const Home = () => {
    return (
        <div className="contact-page">
            <PageSectionBanner 
                pageTitle='Home / Contact Us'
            />
            <ContactForm />
        </div>
    );
}

export default Home;