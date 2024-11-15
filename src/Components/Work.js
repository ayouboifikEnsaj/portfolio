import React from "react";

function Work({ position, company, location, type, duration, description, degree, school, field }) {
    return (
        <article className="pt-8 border-b-2 border-dark-content pb-5 dark:border-light-content border-opacity-20 dark:border-opacity-20">
            <div className="flex justify-between items-center mb-3">
                <h1 className="text-content md:text-lg lg:text-xl font-semibold">
                    {position || degree} {/* Affiche le poste pour le travail ou le diplôme pour l'éducation */}
                </h1>
                <div className="btn bg-greenbg text-green-text text-xs inline-block rounded-3xl px-3 py-1">
                    {type || field} {/* Affiche le type pour le travail ou le domaine pour l'éducation */}
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <div className="flex items-center pr-5 mb-2 md:mb-0">
                    <svg
                        className="dark:fill-light-heading fill-dark-heading min-w-fit"
                        width="16"
                        height="12"
                        viewBox="0 0 16 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M3.33331 1.5V10.5H7.33331V8.75H8.66665V10.5H12.6666V1.5H3.33331ZM4.66665 2.5H5.99998V3.5H4.66665V2.5ZM7.33331 2.5H8.66665V3.5H7.33331V2.5ZM9.99998 2.5H11.3333V3.5H9.99998V2.5ZM4.66665 4.5H5.99998V5.5H4.66665V4.5ZM7.33331 4.5H8.66665V5.5H7.33331V4.5ZM9.99998 4.5H11.3333V5.5H9.99998V4.5ZM4.66665 6.5H5.99998V7.5H4.66665V6.5ZM7.33331 6.5H8.66665V7.5H7.33331V6.5ZM9.99998 6.5H11.3333V7.5H9.99998V6.5ZM4.66665 8.5H5.99998V9.5H4.66665V8.5ZM9.99998 8.5H11.3333V9.5H9.99998V8.5Z" />
                    </svg>
                    <p className="text-content text-xs md:text-sm font-light pl-1">
                        {company || school} {/* Affiche l'entreprise pour le travail ou l'école pour l'éducation */}
                    </p>
                </div>

                <div className="flex items-center">
                    <svg
                        className="dark:fill-light-heading fill-dark-heading min-w-fit"
                        width="16"
                        height="12"
                        viewBox="0 0 16 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M3.33331 1.5V10.5H7.33331V8.75H8.66665V10.5H12.6666V1.5H3.33331ZM4.66665 2.5H5.99998V3.5H4.66665V2.5ZM7.33331 2.5H8.66665V3.5H7.33331V2.5ZM9.99998 2.5H11.3333V3.5H9.99998V2.5ZM4.66665 4.5H5.99998V5.5H4.66665V4.5ZM7.33331 4.5H8.66665V5.5H7.33331V4.5ZM9.99998 4.5H11.3333V5.5H9.99998V4.5ZM4.66665 6.5H5.99998V7.5H4.66665V6.5ZM7.33331 6.5H8.66665V7.5H7.33331V6.5ZM9.99998 6.5H11.3333V7.5H9.99998V6.5ZM4.66665 8.5H5.99998V9.5H4.66665V8.5ZM9.99998 8.5H11.3333V9.5H9.99998V8.5Z" />
                    </svg>
                    <p className="text-content text-xs md:text-sm font-light pl-1">{location}</p>
                </div>
            </div>

            <p className="pt-4 text-content text-sm font-light leading-relaxed">{description}</p>
            <p className="text-xs font-light pt-2">{duration}</p>
        </article>
    );
}

export default Work;
