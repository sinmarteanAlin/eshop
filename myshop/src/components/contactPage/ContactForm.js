import React from 'react';
import Input from '../common/widgets/input/Input';
import Textarea from '../common/widgets/textarea/Textarea';
import Label from '../common/widgets/label/Label';
import PinkButton from '../common/widgets/pinkButton/PinkButton';
import './css/style.css';

const ContactForm = () => {
    return (
        <div className="container-fluid contact-form-wrapper">
            <div className="row">
                <div className="col-lg-11 offset-lg-1">
                    <div>
                        <h2>Contact Us</h2>
                    </div>
                    <div>
                        <form>
                            <div className="form-element">
                                <Label
                                    labelText="Your Name (required)"
                                />
                                <Input 
                                    type="text"
                                    value=""
                                    placeholder=""
                                />
                            </div>

                            <div className="form-element">
                                <Label
                                    labelText="Your Email (required)"
                                />
                                <Input 
                                    type="email"
                                    value=""
                                    placeholder=""
                                />
                            </div>

                            <div className="form-element">
                                <Label
                                    labelText="Subject"
                                />
                                <Input 
                                    type="text"
                                    value=""
                                    placeholder=""
                                />
                            </div>

                            <div className="form-element">
                                <Label
                                    labelText="Your Message"
                                />
                                <Textarea 
                                    rows={4}
                                    cols={20}
                                />
                            </div>
                            <div className="form-element">
                                <PinkButton
                                    text="SEND"
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ContactForm;