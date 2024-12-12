export const templates = [
    {
        id: "blank",
        label: "Blank Document",
        imageUrl: '/blank-document.svg',
        initialContent: `
        <div style="
            font-family: 'Poppins', sans-serif; 
            padding: 30px; 
            background: linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%); 
            color: #333; 
            border-radius: 12px; 
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);">
            <h1 style="font-size: 2.5rem; font-weight: bold; color: #444; text-align: center;">Untitled</h1>
            <p style="font-size: 1rem; color: #777; text-align: center; margin-top: 10px;">
                Start crafting your document here. This template is a clean slate for your creativity.
            </p>
        </div>`
    },
    {
        id: "software-proposal",
        label: "Software Development Proposal",
        imageUrl: '/software-proposal.svg',
        initialContent: `
        <div style="
            font-family: 'Poppins', sans-serif; 
            padding: 40px; 
            background: linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%); 
            color: #333; 
            border-radius: 12px; 
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);">
            <h1 style="font-size: 2.5rem; font-weight: bold; color: #2a2a72;">Software Development Proposal</h1>
            <h2 style="font-size: 1.5rem; margin-top: 20px; color: #333;">Project Overview</h2>
            <p style="font-size: 1rem; line-height: 1.8; color: #444;">Provide a detailed overview of the project objectives, timeline, and deliverables.</p>
            <button style="
                background-color: #6a4bc9; 
                color: #fff; 
                padding: 10px 20px; 
                margin-top: 20px; 
                border: none; 
                border-radius: 6px; 
                cursor: pointer;">
                Learn More
            </button>
        </div>`
    },
    {
        id: "project-proposal",
        label: "Project Proposal",
        imageUrl: '/project-proposal.svg',
        initialContent: `
        <div style="
            font-family: 'Poppins', sans-serif; 
            padding: 40px; 
            background: linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%); 
            color: #333; 
            border-radius: 12px; 
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);">
            <h1 style="font-size: 2.5rem; font-weight: bold; color: #4c4c4c;">Project Proposal</h1>
            <h2 style="font-size: 1.5rem; margin-top: 20px; color: #444;">Introduction</h2>
            <p style="font-size: 1rem; line-height: 1.8; color: #555;">Outline the purpose and goals of the project.</p>
            <button style="
                background-color: #ff6584; 
                color: #fff; 
                padding: 10px 20px; 
                margin-top: 20px; 
                border: none; 
                border-radius: 6px; 
                cursor: pointer;">
                Download Proposal
            </button>
        </div>`
    },
    {
        id: "business-letter",
        label: "Business Letter",
        imageUrl: '/business-letter.svg',
        initialContent: `
        <div style="
            font-family: 'Poppins', sans-serif; 
            padding: 30px; 
            background: #ffffff; 
            color: #333; 
            border-left: 5px solid #6a4bc9; 
            border-radius: 8px; 
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);">
            <p style="font-size: 1rem; margin-bottom: 10px;">[Your Name]</p>
            <p style="font-size: 1rem; margin-bottom: 10px;">[Your Address]</p>
            <p style="font-size: 1rem; margin-bottom: 10px;">[Date]</p>
            <p style="font-size: 1rem; margin-bottom: 10px;">[Recipient Name]</p>
            <p style="font-size: 1rem; margin-bottom: 10px;">[Recipient Address]</p>
            <p style="font-size: 1rem; margin-top: 20px; color: #777;">Dear [Recipient Name],</p>
            <p style="font-size: 1rem; line-height: 1.8; color: #444;">Write your business letter content here.</p>
            <p style="font-size: 1rem; margin-top: 20px;">Sincerely,</p>
            <p style="font-size: 1rem; margin-top: 10px;">[Your Name]</p>
        </div>`
    },
    {
        id: "resume",
        label: "Resume",
        imageUrl: '/resume.svg',
        initialContent: `
        <div style="
            font-family: 'Poppins', sans-serif; 
            padding: 40px; 
            background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%); 
            color: #333; 
            border-radius: 12px;">
            <h1 style="font-size: 2.5rem; text-align: center; color: #333;">[Your Name]</h1>
            <h2 style="font-size: 1.5rem; margin-top: 20px; color: #555;">Experience</h2>
            <ul style="line-height: 1.8; color: #444;">
                <li>Job Title, Company Name</li>
                <li>Key Achievements</li>
            </ul>
        </div>`
    },
];
