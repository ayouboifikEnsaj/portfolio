import React, {useState} from "react";
import './ContactForm.css'

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Envoyez les données du formulaire ici
        console.log('Form submitted:', formData);
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };
    return (
        <div className="contact-container">
            <h1>Contactez-nous</h1>
            <p>Vous avez une question ? Nous aimerions avoir de vos nouvelles. Envoyez-nous un message et nous vous
                répondrons dans les plus brefs délais.</p>
            <form onSubmit={handleSubmit}>
                <label>Nom*</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />

                <label>address Email *</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <label>Message</label>
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                ></textarea>

                <button type="submit">Envoyer Message</button>
            </form>
        </div>

    );
}

export default Contact;
