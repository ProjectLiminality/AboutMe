document.addEventListener('DOMContentLoaded', () => {
    // Experience Data
    const experience = [
        {
            title: 'Visual Storytelling & Systems Change Consultant',
            company: 'Liminal Consulting',
            period: '2022-Present',
            details: 'Created animated videos and educational materials explaining complex systemic change concepts. Developed Python library for 3D animations. Provided consulting services focused on visual metaphors for high-profile organizations.'
        },
        {
            title: 'Educational Content Creator',
            company: 'Civilization Research Institute',
            period: '2021-2024',
            details: 'Designed and produced visual content to simplify complex topics in systemic change. Collaborated with Daniel Schmachtenberger and Zach Stein\'s team. Created educational materials through visual metaphors. Received strong testimonials for visualization work.'
        },
        {
            title: 'Project Liminality | Founder',
            company: '',
            period: '2021-Present',
            details: 'Developing collective intelligence communication protocol. Built prototype using React Three Fiber and Electron. Created YouTube channel showcasing animated explanations of complex concepts. Managing open-source repositories for visualization tools and educational content.'
        },
        {
            title: 'Bachelor Research Project',
            company: 'Leiden University',
            period: 'February 2020 - June 2020',
            details: 'Worked in research group in quantum optics department. Developed novel approach employing neural networks for quantum state tomography.'
        }
    ];

    // Education Data
    const education = [
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
                <h3>${item.title}${item.company ? ` | ${item.company}` : ''}</h3>
                <div class="date">${item.period}</div>
                <p>${item.details}</p>
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
