import React, { useState } from "react";
import ModalVideo from "react-modal-video";  // Import de ModalVideo
import 'react-modal-video/scss/modal-video.scss'; // Import des styles SCSS pour le modal
import { FaGithub, FaYoutube } from "react-icons/fa"; // Import des icônes Font Awesome

function Project({ titre, image, description, technologies_utilisées, lien_aperçu, lien_github }) {
    const [isOpen, setIsOpen] = useState(false); // Gestion de l'état du modal

    // Fonction pour extraire l'ID de la vidéo depuis l'URL YouTube
    const getYouTubeVideoId = (url) => {
        const regex = /(?:https?:\/\/(?:www\.)?youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
        const match = url?.match(regex);
        return match ? match[1] : null; // Retourne l'ID si trouvé, sinon null
    };

    const videoId = getYouTubeVideoId(lien_aperçu); // Extraire l'ID de la vidéo YouTube à partir du lien d'aperçu

    // Ouvrir le modal
    const openModal = () => {
        setIsOpen(true);
    };

    // Fermer le modal
    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <article className="rounded-xl mt-10 overflow-hidden shadow-xl shadow-slate-300 dark:shadow-slate-900">
            <img src={image} alt={titre} loading="lazy" />
            <div className="dark:bg-dark-card p-4">
                <h1 className="dark:text-light-heading font-semibold text-lg pt-1">{titre}</h1>
                <p className="text-content pt-4 font-light">{description}</p>
                <h3 className="text-dark-heading dark:text-light-heading font-medium pt-4">
                    Technologies Utilisées : <span className="font-light">{technologies_utilisées}</span>
                </h3>
                <div className="flex justify-between items-center mt-5">
                    <div className="flex items-center">
                        {videoId && (
                            <button
                                onClick={openModal}
                                className="flex items-center text-blue-500 hover:underline"
                            >
                                <FaYoutube className="mr-1" /> Aperçu
                            </button>
                        )}
                        <a href={lien_github} target="_blank" rel="noopener noreferrer" className="flex items-center ml-4 text-blue-500 hover:underline">
                            <FaGithub className="mr-1" /> GitHub
                        </a>
                    </div>
                </div>
            </div>

            {/* Modal vidéo YouTube */}
            {videoId && (
                <ModalVideo
                    channel="youtube"
                    isOpen={isOpen}
                    videoId={videoId}  // Utilisation de l'ID extrait
                    onClose={closeModal}
                />
            )}
        </article>
    );
}

export default Project;


// import React from "react";
//
// function Project({ titre, image, description, technologies_utilisées, lien_aperçu, lien_github }) {
//   return (
//       <article className="rounded-xl mt-10 overflow-hidden shadow-xl shadow-slate-300 dark:shadow-slate-900">
//         <img src={image} alt={titre} loading="lazy" />
//         <div className="dark:bg-dark-card p-4">
//           <h1 className="dark:text-light-heading font-semibold text-lg pt-1">{titre}</h1>
//           <p className="text-content pt-4 font-light">{description}</p>
//           <h3 className="text-dark-heading dark:text-light-heading font-medium pt-4">
//             Technologies Utilisées : <span className="font-light">{technologies_utilisées}</span>
//           </h3>
//           <div className="flex justify-between items-center mt-5">
//             <div className="flex items-center">
//               <a href={lien_aperçu} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Aperçu</a>
//               <a href={lien_github} target="_blank" rel="noopener noreferrer" className="ml-2 text-blue-500 hover:underline">Github</a>
//             </div>
//           </div>
//         </div>
//       </article>
//   );
// }
//
// export default Project;
