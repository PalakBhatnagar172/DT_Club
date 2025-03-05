import React, { useState } from 'react';

const PrivacyAndTermsPage = () => {
    const [activeSection, setActiveSection] = useState(null);

    const toggleSection = (section) => {
        setActiveSection(activeSection === section ? null : section);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Privacy Policy and Terms of Service</h1>

            <div className="mb-4">
                <button
                    className="w-full text-left p-4 bg-gray-100 hover:bg-gray-200 transition-colors"
                    onClick={() => toggleSection('privacy')}
                >
                    Privacy Policy
                </button>
                {activeSection === 'privacy' && (
                    <div className="p-4 border border-gray-200">
                        <p className="mb-4">
                            Your privacy is important to us. It is our policy to respect your privacy regarding any information we may collect from you across our website.
                        </p>
                        <p className="mb-4">
                            We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we're collecting it and how it will be used.
                        </p>
                        <p>
                            We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we'll protect within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use or modification.
                        </p>
                    </div>
                )}
            </div>

            <div>
                <button
                    className="w-full text-left p-4 bg-gray-100 hover:bg-gray-200 transition-colors"
                    onClick={() => toggleSection('terms')}
                >
                    Terms of Service
                </button>
                {activeSection === 'terms' && (
                    <div className="p-4 border border-gray-200">
                        <p className="mb-4">
                            By accessing our website, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.
                        </p>
                        <p className="mb-4">
                            If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law.
                        </p>
                        <p>
                            We reserve the right to modify these terms at any time. By using this website you are agreeing to be bound by the then current version of these Terms and Conditions of Use.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PrivacyAndTermsPage;