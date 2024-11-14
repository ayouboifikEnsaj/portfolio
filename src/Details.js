// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.svg";
import logo from "./assets/logo2.svg";
// Profile Image
import profile from "./assets/ayoub.jpg";
// Tech stack images
import html from "./assets/techstack/html.png";
import springboot from "./assets/techstack/springboot.png";import flask from "./assets/techstack/flask.png";
import javaee from "./assets/techstack/javaee.png";
import css from "./assets/techstack/css.png";
import sass from "./assets/techstack/sass.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
// Porject Images
import projectImage1 from "./assets/projects/locapharma.png";
import projectImage2 from "./assets/projects/digitalisation.jpg";
import projectImage3 from "./assets/projects/dents.png";
import projectImage4 from "./assets/projects/salle.jpg";
import projectImage5 from "./assets/projects/client.png";
import projectImage6 from "./assets/projects/gestion des service.png";
import projectImage7 from "./assets/projects/SIGL.png";
// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Ayoub Oifik",
  tagline: "Ingénieur en JAVA EE",
  img: profile,
  about: `Ingénieur en JAVA EE avec une solide expertise dans le développement d'applications Java, le design de systèmes back-end et l'intégration de technologies modernes pour créer des solutions efficaces et scalables. Passionné par les architectures microservices et les bonnes pratiques de programmation.`,
};
// Personal Details
export const personalDetails1 = {
  name: "Ayoub Oifik", // Your name
  tagline: "Full Stack Developer passionate about tech", // Your tagline
  img: profile, // Path to your profile image
  about: `I am a full-stack developer with experience in web technologies like ReactJS, Spring Boot, and Django. I am driven by problem-solving and building scalable applications.`, // About me section
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/ayouboifik/",
  github: "https://github.com/ayouboifikEnsaj",
  // twitter: "https://twitter.com/",
  // instagram: "https://www.instagram.com/",
};

// Enter your Work Experience here
// Entrer vos détails d'expérience professionnelle ici
export const workDetails = [
  {
    Position: "Stagiaire",
    Company: "Lesieur Cristal",
    Location: "Casablanca",
    Type: "Stage",
    Duration: "Juillet 2023 - Août 2023",
    Description: `Mission : Développement d’une application de gestion des ventes et des achats basée sur une architecture microservices :
    - Automatisation complète du cycle des demandes d’achat, avec amélioration de la traçabilité, de la transparence et de la sécurité.
    - Conception et réalisation du back-end en utilisant Spring Boot, en suivant une architecture microservices.
    - Développement du front-end avec ReactJS pour une interface utilisateur moderne et responsive.`
  },
  {
    Position: "Stagiaire",
    Company: "3DSmart Factory",
    Location: "Mohammedia",
    Type: "Stage en ligne",
    Duration: "Juillet 2024 - Septembre 2024",
    Description: `Mission : Détection de malwares sur les applications Android à l’aide de techniques d’apprentissage automatique :
    - Développement d’un système d’apprentissage automatique pour détecter et classifier les malwares dans les applications Android.
    - Entraînement du modèle avec un dataset des permissions.
    - Analyse des caractéristiques des fichiers APK et du comportement des applications en temps réel.`
  },
  {
    Position: "Stagiaire",
    Company: "Lesieur Cristal",
    Location: "Casablanca",
    Type: "Stage",
    Duration: "Juillet 2024 - Août 2024",
    Description: `Mission : Mise en place d’un système de surveillance et de gestion des incidents de sécurité réseau (solution SIEM avec ELK Stack) :
    - Configuration de pare-feu et IDS/IPS (pfSense, Snort).
    - Gestion des logs avec Beats, Logstash et Elasticsearch.
    - Visualisation des données de sécurité avec Kibana.
    - Intégration d’une plateforme de threat intelligence (MISP).
    - Gestion des incidents de sécurité avec TheHive et Cortex.`
  }
];





// Enter your Education Details here
export const eduDetails = [
  {
    Degree: "Cycle Ingénieur",
    School: "Ecole Nationale des Sciences Appliquées",
    Location: "Eljadida, Maroc",
    Duration: "2022 – 2025",
    Field: "Ingénierie des systèmes d’information et de communication"
  },
  {
    Degree: "Classes préparatoires",
    School: "Ecole Nationale des Sciences Appliquées",
    Location: "Eljadida, Maroc",
    Duration: "2020 – 2022",
    Field: "Généraliste"
  },
  {
    Degree: "Baccalauréat",
    School: "Lycée Ain Harrouda",
    Location: "Ain Harrouda, Maroc",
    Duration: "2020",
    Field: "Sciences Physiques - Mention Très bien"
  }
];


// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  springboot: springboot,
  javaee: javaee,
  css: css,
  flask: flask,
  js: js,
  react: react,
  redux: redux,
  sass: sass,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Gestion et localisation des pharmacies",
    image: projectImage1,
    description: `Développement d'une application web pour la gestion et la localisation des pharmacies, y compris les pharmacies de garde. Cette application permet aux administrateurs de gérer les informations des pharmacies (horaires, services) et aux utilisateurs de localiser les pharmacies ouvertes à proximité via l'intégration de l'API Google Maps. Les utilisateurs peuvent également consulter les horaires et les services des pharmacies de garde.`,
    technologies_utilisées: "Backend : Spring Boot, Frontend : Thymeleaf, HTML, CSS, JavaScript, AJAX, Tailwind CSS, Base de données : MySQL",
    lien_aperçu: "https://youtu.be/FyVnBFGFZKo?si=63mRcDrb-09DNb88",
    lien_github: "https://github.com/ayouboifikEnsaj/projet-de-localisation-des-pharmacies.git",
  },
  {
    title: "Digitalisation des demandes d'achat",
    image: projectImage2,
    description: `Ce projet vise à automatiser et optimiser le processus de gestion des demandes d'achat, en transformant un processus manuel en une solution numérique complète. Il a pour objectifs de réduire les délais de traitement, améliorer la transparence, minimiser les erreurs humaines et optimiser l'efficacité opérationnelle. L'architecture microservices est utilisée pour assurer une solution modulaire et scalable.`,
    technologies_utilisées: "Backend : Spring Boot, Microservices, Frontend : React, CSS : Tailwind CSS, API : Swagger, Base de données : MySQL",
    lien_aperçu: "https://youtu.be/ax1SaqSR3sU",  // Lien vers le Live Demo
    lien_github: "https://github.com/ayouboifikEnsaj/gestion-d-achats-architecture-microservices",  // Lien vers le code GitHub
  },

  {
    title: "Projet de Gestion des Professeurs, Groupes d’Étudiants et TP pour un Centre Dentaire \n " +
        " (Projet collaboratif entre Ayoub Oifik et Mohja Moutawadii)",
    image: projectImage3,
    description: `Ce projet vise à optimiser la gestion des travaux pratiques (TP) pour un centre de formation dentaire grâce à une plateforme intégrée. Il permet aux administrateurs de planifier efficacement les sessions de TP, d'attribuer les professeurs et de gérer les groupes d’étudiants selon leur niveau et spécialisation. L’application mobile, dédiée aux étudiants, facilite la consultation en temps réel de leur emploi du temps, des notifications pour les sessions de TP, et améliore l'interaction avec les professeurs. Cette solution numérique contribue à une organisation fluide et une meilleure expérience d’apprentissage en dentisterie.`,
    technologies_utilisées: "Backend : Spring Boot , Kotlin(pour l'application mobile), , Frontend : thymleaf, CSS : Tailwind CSS, API : Swagger, Base de données : MySQL",
    lien_aperçu: "https://votresite.com/demo",  // Lien vers le Live Demo
    lien_github: "https://github.com/ayouboifikEnsaj/projet-compl-te-mobile-web",  // Lien vers le code GitHub
  },
  {
    title: "Réalisation d’un système en ligne basé sur Google Apps pour améliorer la productivité scolaire ",
    image: projectImage7,
    description: `Réalisation d’un système en ligne basé sur Google Apps pour améliorer
 la productivité scolaire :
 • Gestion de l’emploi du temps et réservation des salles.
 • Mise en place d’un système de marquage électronique des absences.
 • Développement d’un mécanisme de notifications pour les étudiants et
 utilisateurs.`,
    technologies_utilisées: "Javascript ,outils google , HTML , CSS",
    lien_aperçu: "https://youtu.be/wxvWd6mTzno",
    lien_github: "https://github.com",
  },
  {
    title: "Projet de Gestion des Clients et des Services pour une École de Soutien",
    image: projectImage5,
    description: `Ce projet permet à une école de soutien scolaire de gérer efficacement ses clients et ses services. L'application comprend une page de connexion sécurisée pour l'accès administrateur, une page d'accueil centralisant les principales fonctionnalités, une section dédiée à la gestion des informations clients, et un module pour organiser les services proposés. Une fonction de recherche avancée facilite la recherche par client et par service, optimisant ainsi l’expérience utilisateur et le suivi des prestations.`,
    technologies_utilisées: "Hibernate , html , CSS ,java , JavaScript, ajax , GUI swing",
    lien_aperçu: "https://github.com/ayouboifikEnsaj/projet-gestion-des-clients-d-une--ecole-.git",
    lien_github: "https://github.com/ayouboifikEnsaj/projet-gestion-des-clients-d-une--ecole-.git",
  },
  {
    title: "Projet JSF de Gestion des Employés d'une Entreprise",
    image: projectImage6,
    description: `avec JSF et Hibernate, conçue pour gérer les employés et les services au sein d'une entreprise. L'objectif principal de cette application est de fournir une interface intuitive permettant aux administrateurs de gérer facilement les employés, leurs services respectifs et d'obtenir des statistiques pertinentes pour une gestion optimisée des ressources humaines.

Parmi les fonctionnalités implémentées, on retrouve les opérations CRUD (Créer, Lire, Mettre à jour, Supprimer) pour les employés, permettant de gérer les informations des employés de manière efficace. De même, des opérations CRUD ont été mises en place pour gérer les services de l'entreprise. L'application permet également de rechercher les employés par service, facilitant ainsi l'accès aux informations par département. En outre, une fonctionnalité de recherche des employés entre deux dates est disponible pour générer des rapports sur les recrues d'une période spécifique.

Des graphiques sont également inclus dans l'application, permettant de visualiser le nombre d'employés par service ainsi que le nombre d'employés sous chaque responsable ou chef de service, fournissant ainsi une vision claire de la répartition des ressources humaines au sein de l'entreprise.`,
    technologies_utilisées: "Hibernate , JSF",
    lien_aperçu: "https://youtu.be/EaVZqnJim0M",
    lien_github: "https://github.com/ayouboifikEnsaj/gestion-des-employ-e-d-une-entreprise.git",
  },
  {
    title: "Gestion de Salles et de Machines",
    image: projectImage4,
    description: `un projet Java axé sur la gestion de salles et de machines via une interface web conçue avec JavaServer Pages (JSP). L'objectif principal du projet est d'offrir un moyen efficace de gérer les salles et les machines au sein d'une organisation. `,
    technologies_utilisées: "hibernate ,JSP, html , css , javascript, Base de données : MySQL",
    lien_aperçu: "https://github.com/ayouboifikEnsaj/gestion-des-machines-et-des-salle-Java-et-JSP.git",  // Lien vers le Live Demo
    lien_github: "https://github.com/ayouboifikEnsaj/gestion-des-machines-et-des-salle-Java-et-JSP.git",  // Lien vers le code GitHub
  }
];

// Enter your Contact Details here
export const contactDetails = {
  email: "hi@example.com",
  phone: "+91 12345 67890",
};