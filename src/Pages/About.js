import React from "react";
import Work from "../Components/Work";
import { personalDetails, workDetails, eduDetails } from "../Details";

function About() {
    return (
        <main className="container mx-auto max-width pt-10 pb-20">
            {/* Section - Personal Details */}
            <section className="mb-10">
                <h1 className="text-3xl font-bold text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight">
                    About Me
                </h1>
                <p className="text-content mt-4 lg:max-w-3xl">
                    {personalDetails.about}
                </p>
            </section>

            {/* Section - Work Experience */}
            <section className="mb-10">
                <h1 className="text-3xl font-bold text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight">
                    Work Experience
                </h1>
                <div className="mt-4">
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
            <section>
                <h1 className="text-3xl font-bold text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight">
                    Education
                </h1>
                <div className="mt-4">
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
        </main>
    );
}

export default About;
