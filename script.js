document.addEventListener('DOMContentLoaded', () => {
    // Experience Data
    const experience = [
        {
            title: 'Educational Content Creator',
            company: 'Civilization Research Institute',
            period: 'April 2024 - November 2024',
            details: `• Designed and produced visual content to simplify complex topics in systemic change
• Adviced on communication strategies`,
            testimonial: {
                text: "David's work is remarkable for its clarity and evocativeness. He is able to work with extremely abstract and complex ideas and then bring them into explanatory and aesthetic forms that greatly help with intuitive understanding. As a visual storyteller his skills are world class",
                author: "Zak Stein",
                title: "Co-founder, Civilization Research Institute, Consilience Project"
            }
        },
        {
            title: 'Visual Storytelling & Systems Change Consultant',
            company: 'Liminal Consulting',
            period: '2022-Present',
            details: `• Created animated videos and educational materials explaining complex systemic change concepts
• Developed Python library for 3D animations
• Provided consulting services focused on visual metaphors for high-profile organizations`,
            testimonial: {
                text: "David's capability to explain modern age concepts with visual clarity is unparalleled. His clear narrative style and eye-pleasing graphic animations are a powerful tool for the communication of your world-changing ideas.",
                author: "Jeff Emmett",
                title: "Mycopunk"
            }
        },
        {
            title: 'Project Liminality | Founder',
            company: '',
            period: '2021-Present',
            details: `• Developing collective intelligence communication protocol
• Built prototype using React Three Fiber and Electron
• Created YouTube channel showcasing animated explanations of complex concepts
• Managing open-source repositories for visualization tools and educational content`,
            testimonial: {
                text: "Our civilization, and its democratic deliberation potential, is facing a paradox: the power of centralized institutions is weakening, but its potential peer to peer replacements are as yet too fragmented and disorienting to carry public debate. Project Liminality is working on potentially important solutions: the use of visual metaphors to catalize broader conversations. Check it out.",
                author: "Michel Bauwens",
                title: "P2P Foundation"
            }
        },
    ];

    // Education Data
    const education = [
        {
            degree: 'Bachelor Research Project in Quantum Optics',
            institution: 'Leiden University',
            period: 'February 2020 - June 2020',
            details: 'Developed novel approach to quantum state tomography using deep learning and neural networks (PyTorch)'
        },
        {
            degree: 'B.Sc. in Physics',
            institution: 'Heidelberg University',
            period: 'Sept 2017 - June 2020'
        },
        {
            degree: 'Erasmus Exchange',
            institution: 'Leiden University',
            period: 'Sept 2019 - June 2020'
        }
    ];

    // Skills Data
    const skills = [
        {
            category: 'Programming',
            items: ['Python (3D animation libraries)', 'React Three Fiber', 'Electron', 'Neural Networks (PyTorch)']
        },
        {
            category: 'Visualization',
            items: ['3D animation', 'Visual metaphor design']
        },
        {
            category: 'Core Competencies',
            items: ['Visual Storytelling', 'Complex Systems Communication', 'First Principles Thinking']
        },
        {
            category: 'Physics',
            items: ['Quantum optics', 'State tomography']
        }
    ];


    // Render Experience
    const experienceContainer = document.querySelector('.experience-items');
    experience.forEach(item => {
        experienceContainer.innerHTML += `
            <div class="experience-item">
                <div class="experience-content">
                    <h3>${item.title}${item.company ? ` | ${item.company}` : ''}</h3>
                    <div class="date">${item.period}</div>
                    <p>${item.details}</p>
                </div>
                ${item.testimonial ? `
                    <div class="testimonial">
                        "${item.testimonial.text}"
                        <div class="testimonial-author">${item.testimonial.author}</div>
                        <div class="testimonial-title">${item.testimonial.title}</div>
                    </div>
                ` : ''}
            </div>
        `;
    });

    // Render Education
    const educationContainer = document.querySelector('.education-items');
    education.forEach(item => {
        educationContainer.innerHTML += `
            <div class="education-item">
                <h3>${item.degree} | ${item.institution}</h3>
                <div class="date">${item.period}</div>
                ${item.details ? `<p>${item.details}</p>` : ''}
            </div>
        `;
    });

    // Render Skills
    const skillsContainer = document.querySelector('.skills-grid');
    skills.forEach(category => {
        skillsContainer.innerHTML += `
            <div class="skill-category">
                <h3>${category.category}</h3>
                <ul>
                    ${category.items.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
        `;
    });

});
