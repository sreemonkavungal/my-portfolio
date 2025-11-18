import React from 'react';

const PrivacySection = () => {
    return (
        <div className="bg-white min-h-screen flex items-center justify-center mt-9">
            <div className="max-w-3xl bg-gray-100 p-10 shadow-md rounded-md">
                <h1 className="text-3xl font-semibold mb-6">Privacy Policy</h1>

                <p>
                    Last updated : 23 November 2025
                </p>
                <br></br>
                <p>
                    [Your Name] ("us", "we", or "our") operates [your portfolio website URL] (the "Site"). This page informs you of our policies regarding the collection, use, and disclosure of Personal Information we receive from users of the Site.
                </p>

                <h2 className="text-xl font-semibold mt-4 mb-2">Changes to This Privacy Policy</h2>

                <p>
                    This Privacy Policy is effective as of [Date] and will remain in effect except with respect to any changes in its provisions in the future, which will be in effect immediately after being posted on this page.
                    We reserve the right to update or change our Privacy Policy at any time, and you should check this Privacy Policy periodically. Your continued use of the Service after we post any modifications to the Privacy Policy on this page will constitute your acknowledgment of the modifications and your consent to abide and be bound by the modified Privacy Policy.

                </p>

                {/* ... (continue with the rest of the content) */}

                <h2 className="text-xl font-semibold mt-4 mb-2">Contact Us</h2>

                <p>
                    If you have any questions about this Privacy Policy, please <span><a href="/contact" className="text-indigo-600">contact us</a></span>.
                </p>
            </div>
        </div>
    );
};

export default PrivacySection;