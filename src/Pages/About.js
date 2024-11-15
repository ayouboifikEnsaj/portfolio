import React from "react";
import Work from "../Components/Work";
import { personalDetails, workDetails, eduDetails, certifications } from "../Details";

function About() {
    return (
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 pt-10 pb-20">
            {/* Section - Personal Details */}
            <section className="mb-12">
                <h1 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 md:text-4xl xl:text-5xl xl:leading-tight">
                    À propos de moi
                </h1>
                <p className="text-lg text-gray-700 dark:text-gray-300 mt-4 lg:max-w-3xl leading-relaxed">
                    {personalDetails.about}
                </p>
            </section>

            {/* Section - Work Experience */}
            <section className="mb-12">
                <h1 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 md:text-4xl xl:text-5xl xl:leading-tight mb-4">
                    Expérience professionnelle
                </h1>
                <div className="space-y-6">
                    {React.Children.toArray(
                        workDetails.map(({ Position, Company, Location, Type, Duration, Description }) => (
                            <Work
                                position={Position}
                                company={Company}
                                location={Location}
                                type={Type}
                                duration={Duration}
                                description={Description} // Passing work experience description
                            />
                        ))
                    )}
                </div>
            </section>

            {/* Section - Education */}
            <section className="mb-12">
                <h1 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 md:text-4xl xl:text-5xl xl:leading-tight mb-4">
                    Formation
                </h1>
                <div className="space-y-6">
                    {React.Children.toArray(
                        eduDetails.map(({ Degree, School, Location, Duration, Field }) => (
                            <Work
                                degree={Degree}
                                school={School}
                                location={Location}
                                duration={Duration}
                                field={Field} // Passing educational details
                            />
                        ))
                    )}
                </div>
            </section>

            {/* Section - Certifications */}
            <section>
                <h1 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 md:text-4xl xl:text-5xl xl:leading-tight mb-4">
                    Certifications
                </h1>
                <div className="space-y-8">
                    {certifications.map(({ title, issuer, badgeLink, description }) => (
                        <div key={title} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mb-6 transition-transform transform hover:scale-105 hover:shadow-xl">
                            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                                {title}
                            </h2>
                            <p className="text-lg mt-2 text-gray-600 dark:text-gray-300">
                                {description}
                            </p>
                            <p className="text-md mt-2 text-gray-500 dark:text-gray-400">
                                Émis par: <strong>{issuer}</strong>
                            </p>
                            <a
                                href={badgeLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:text-blue-800 mt-2 inline-block transition-colors"
                            >
                                Voir le badge
                            </a>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}

export default About;
