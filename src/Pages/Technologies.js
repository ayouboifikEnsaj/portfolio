import React from "react";

function Technologies() {
    const techCategories = [
        {
            title: "Développement Web (Backend)",
            items: [
                "Spring Boot", "Flask", "JEE", "Microservices", "Spring Security",
                "Python", "Java", "Spring Cloud", "Spring IA"
            ],
        },
        {
            title: "Développement Web (Frontend)",
            items: ["HTML", "CSS", "React", "Angular", "Thymeleaf"],
        },
        {
            title: "Automatisation / Scripting",
            items: ["PowerShell"],
        },
        {
            title: "Base de données",
            items: ["MySQL", "Firebase", "Oracle", "MongoDB"],
        },
        {
            title: "Réseau",
            items: [
                "TCP/IP", "LAN/WLAN", "Routing", "Switching", "MPLS",
                "IPv4/IPv6", "Virtualisation", "VMware", "Hyper-V",
                "Windows Server", "SD-WAN"
            ],
        },
        {
            title: "Normes et Frameworks",
            items: ["ISO 27001", "ISO 27002", "MITRE ATT&CK"],
        },
        {
            title: "Mesures de sécurité",
            items: ["Firewall", "IDS/IPS", "VPN", "IPsec", "NAT/PAT", "ACLs"],
        },
        {
            title: "Outils de simulation | IDE",
            items: [
                "Eclipse", "Packet Tracer", "GNS3", "WireShark",
                "Putty", "Android Studio", "IntelliJ", "VirtualBox", "VMware Tools"
            ],
        },
    ];

    return (
        <main className="container mx-auto max-w-7xl pt-10 pb-20 px-6">
            {techCategories.map((category, index) => (
                <section key={index} className="mb-12">
                    <h2 className="text-2xl font-extrabold text-gray-800 dark:text-gray-200 mb-4 border-b-4 border-primary inline-block pb-2">
                        {category.title}
                    </h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
                        {category.items.map((tech, idx) => (
                            <div
                                key={idx}
                                className="p-4 bg-gray-200 dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center"
                            >
                                <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                                    {tech}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>
            ))}
        </main>
    );
}

export default Technologies;
