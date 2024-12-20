import React from "react";
import Project from "../Components/Project";
import { projectDetails } from "../Details";

function Projects() {
    return (
        <main className="container mx-auto max-width pt-10 mb-20">
            <section>
                <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
                   projets
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10">
                    {React.Children.toArray(
                        projectDetails.map(
                            ({ title, image, description, technologies_utilisées, lien_aperçu, lien_github }) => (
                                <Project
                                    titre={title} // Pass the correct property here
                                    image={image}
                                    description={description.split('\n').map((line, index) => (
                                        <p key={index}>{line}</p>
                                    ))}
                                    technologies_utilisées={technologies_utilisées}
                                    lien_aperçu={lien_aperçu}
                                    lien_github={lien_github}
                                />
                            )
                        )
                    )}
                </div>
            </section>
        </main>
    );
}

export default Projects;
