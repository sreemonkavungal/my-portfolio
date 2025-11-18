import React from 'react';

const TermsOfService = () => {
    return (
        <div className="bg-white min-h-screen flex items-center justify-center">
            <div className="max-w-3xl mt-12 bg-gray-100 p-8 shadow-md rounded-md">
                <h1 className="text-3xl font-semibold mb-6">Terms of Service</h1>

                <p>
                    Last updated: [Date]
                </p>
                <br></br>
                <p>
                    Please read these Terms of Service carefully before using [your portfolio website URL] (the "Service") operated by [Your Name] ("us", "we", or "our").
                </p>

                <p>
                    By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.
                </p>

                <h2 className="text-xl font-semibold mt-4 mb-2">1. Use of the Service</h2>
                <p>
                    You are granted a non-exclusive, non-transferable, revocable license to access and use the Service solely for your personal, non-commercial purposes.
                </p>

                <h2 className="text-xl font-semibold mt-4 mb-2">2. Intellectual Property</h2>
                <p>
                    The Service and its original content, features, and functionality are and will remain the exclusive property of [Your Name] and its licensors.
                </p>

                <h2 className="text-xl font-semibold mt-4 mb-2">3. External Links</h2>
                <p>
                    The Service may contain links to external websites that are not provided or maintained by or in any way affiliated with [Your Name]. We do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.
                </p>

                <h2 className="text-xl font-semibold mt-4 mb-2">4. Modifications</h2>
                <p>
                    We reserve the right to modify or discontinue, temporarily or permanently, the Service with or without notice.
                </p>

                <h2 className="text-xl font-semibold mt-4 mb-2">5. Contact Us</h2>
                <p>
                    If you have any questions about these Terms, please <span><a href="/contact" className="text-indigo-600">contact us</a></span>.
                </p>
            </div>
        </div>
    );
};

export default TermsOfService;