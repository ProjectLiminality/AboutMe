document.addEventListener('DOMContentLoaded', () => {
    // Experience Data
    const experience = [
        {
            title: 'Visual Storytelling & Systems Change Consultant',
            company: 'Liminal Consulting',
            period: '2022-Present',
            details: 'Created animated videos and educational materials explaining complex systemic change concepts. Developed Python library for 3D animations.'
        },
        {
            title: 'Educational Content Creator',
            company: 'Civilization Research Institute',
            period: '2021-2022',
            details: 'Designed and produced visual content to simplify complex topics in systemic change. Collaborated with Daniel Schmachtenberger and Zach Stein's team.'
        },
        {
            title: 'Project Liminality | Founder',
            company: '',
            period: '2019-Present',
            details: 'Developing collective intelligence communication protocol. Built prototype using React Three Fiber and Electron.'
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
            items: ['Python', 'React Three Fiber', 'Electron', 'PyTorch']
        },
        {
            category: 'Visualization',
            items: ['3D animation', 'Visual metaphor design']
        },
        {
            category: 'Communication',
            items: ['Educational content design', 'Technical writing']
        }
    ];

    // Languages Data
    const languages = [
        { language: 'German', level: 'Native' },
        { language: 'English', level: 'Advanced' },
        { language: 'French', level: 'Basic' }
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

    // Render Languages
    const languagesContainer = document.querySelector('.language-items');
    languages.forEach(item => {
        languagesContainer.innerHTML += `
            <div class="language-item">
                <span class="language">${item.language}</span>
                <span class="level">(${item.level})</span>
            </div>
        `;
    });
});
