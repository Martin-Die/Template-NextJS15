'use client'

import Header from "@/components/content/header";
import Footer from "@/components/content/footer";

const Contact = () => {
    return (
        <>
            <Header />
            <main className="container">
                <h1>Contactez-moi</h1>
                <form className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Nom</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Votre nom"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Votre email"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Votre message..."
                            required
                        ></textarea>
                    </div>

                    <button type="submit">Envoyer</button>
                </form>
            </main>
            <Footer />
        </>
    );
};


export default Contact;
