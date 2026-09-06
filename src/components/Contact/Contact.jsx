import "../../styles/Contact.css";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
    const [state, handleSubmit] = useForm("mqpkdnba");

    return (
        <section className="contact-section" id="contact">

            <div className="contact-container">

                <div className="contact-heading">
                    <h4>CONTACT</h4>

                    <h2>
                        Let’s make something worth using.
                    </h2>

                    <p>
                        Got an idea, a project, or just want to talk frontend?
                        I’m always open to interesting conversations and opportunities.
                    </p>
                </div>


                <div className="contact-content">

                    <div className="contact-form-wrapper">

                        <h3>Get In Touch</h3>

                        {state.succeeded ? (

                            <div className="contact-success">
                                <h3>Message sent.</h3>

                                <p>
                                    Thanks for reaching out. I’ll get back to you
                                    as soon as I can.
                                </p>
                            </div>

                        ) : (

                            <form
                                className="contact-form"
                                onSubmit={handleSubmit}
                            >

                                <div className="contact-field">

                                    <label htmlFor="name">
                                        Name
                                    </label>

                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                    />

                                </div>


                                <div className="contact-field">

                                    <label htmlFor="email">
                                        Email
                                    </label>

                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                    />

                                    <ValidationError
                                        prefix="Email"
                                        field="email"
                                        errors={state.errors}
                                    />

                                </div>


                                <div className="contact-field">

                                    <label htmlFor="message">
                                        Message
                                    </label>

                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="5"
                                        required
                                    />

                                    <ValidationError
                                        prefix="Message"
                                        field="message"
                                        errors={state.errors}
                                    />

                                </div>


                                <button
                                    type="submit"
                                    disabled={state.submitting}
                                >
                                    {state.submitting
                                        ? "Sending..."
                                        : "Send Message"}
                                </button>

                            </form>

                        )}

                    </div>


                    <div className="contact-info">

                        <h3>Contact Info</h3>

                        <div className="contact-info-item">
                            <h4>Email</h4>

                            <a href="mailto:osazuwakelvin24@gmail.com">
                                osazuwakelvin24@gmail.com ↗
                            </a>
                        </div>


                        <div className="contact-info-item">
                            <h4>LinkedIn</h4>

                            <a
                                href="https://www.linkedin.com/in/osazuwa-kelvin-9685301b2/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Connect with me ↗
                            </a>
                        </div>


                        <div className="contact-info-item">
                            <h4>GitHub</h4>

                            <a
                                href="https://github.com/TheREBZ"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                See what I’m building ↗
                            </a>
                        </div>

                        <div className="contact-info-item">
                            <h4>X / Twitter</h4>

                            <a
                                href="https://x.com/Rebzisastar"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Connect with me ↗
                            </a>
                        </div>


                        <div className="contact-status">
                            <p>Always open to new opportunities.</p>
                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default Contact;