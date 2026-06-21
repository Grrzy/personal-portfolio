// ==========================================================================
// DICIONÁRIO DE TRADUÇÃO COMPLETO
// ==========================================================================
const translations = {
    pt: {
        // Navegação
        nav_inicio: "Início",
        nav_sobre: "Sobre Mim",
        nav_projetos: "Projetos",
        nav_contato: "Contato",
        
        // Hero Section
        hero_titulo: "Olá, eu sou Lucas Grzybowski",
        hero_subtitulo: "Desenvolvedor & Especialista em Suporte Técnico",
        hero_descricao: "Construindo soluções robustas de software, gerenciando infraestruturas de hardware estáveis e dominando as ferramentas que moldam o futuro da tecnologia.",
        hero_botao: "Ver Projetos",
        hero_botao_curriculo: "Ver Currículo",
        
        // Sobre Mim
        sobre_titulo: "Sobre Mim",
        sobre_faculdade: "Estudante de Ciência da Computação no Centro Universitário Ritter dos Reis (UNIRITTER).",
        sobre_objetivo: "Busco atuar de forma efetiva como desenvolvedor de software ou técnico de suporte em empresas de grande porte, aplicando rigor teórico e capacidade analítica para resolver problemas complexos de tecnologia.",
        sobre_experiencia: "Minha trajetória une a ciência teórica com a vivência prática. Possuo um ano de experiência consolidada em Suporte Técnico, onde atuei diretamente com troubleshooting avançado, gerenciamento de infraestrutura e otimização de sistemas operacionais. Essa bagagem me deu uma base sólida para entender o comportamento dos sistemas sob estresse, o que hoje acelera e qualifica minha atuação no desenvolvimento de software.",
        
        // Cards Sobre Mim
        card_academico_titulo: "Acadêmico",
        card_expandir: "Clique para expandir",
        card_fechar: "Clique para fechar",
        card_instituicao: "Instituição:",
        card_instituicao_valor: "UNIRITTER",
        card_curso: "Curso:",
        card_curso_valor: "Bacharelado em Ciência da Computação",
        card_academico_detalhe: "Foco em algoritmos, estrutura de dados e engenharia de sistemas.",
        card_suporte_titulo: "Suporte Técnico",
        card_experiencia_tempo: "Experiência:",
        card_experiencia_valor: "1 Ano",
        card_especialidades: "Especialidades:",
        card_especialidades_valor: "Troubleshooting, infraestrutura de rede, montagem/manutenção/instalação de computadores, suporte ao cliente via telefone e TeamViewer.",
        
        // Projetos
        projetos_titulo: "Projetos em Destaque",
        projetos_subtitulo: "Clique nos cards abaixo para visualizar os detalhes técnicos de cada solução.",
        proj_tech_label: "Tecnologias:",
        proj_link_acessar: "Acessar Projeto", // <-- NOVA LINHA

        
        proj1_titulo: "Dados com Python",
        proj1_desc: "Exploração e análise de dados utilizando linguagem Python.",
        proj1_tech_list: "Python, Pandas, Plotly, Streamlit.",
        proj1_detalhe: "Foi realizada uma análise exploratória e estatística de um conjunto de dados utilizando técnicas de machine learning. Projeto desenvolvido para fins educacionais e de prática profissional.",
        
        proj2_titulo: "Sistema de Gerenciamento",
        proj2_desc: "Sistema de gerenciamento para uma empresa fictícia.",
        proj2_tech_list: "C++, Programação Orientada a Objetos.",
        proj2_detalhe: "Sistema desenvolvido em C++ com foco em programação orientada a objetos, utilizando padrões de design para garantir manutenibilidade e escalabilidade. Projeto ainda em desenvolvimento. No exemplo, um sistema para locação de quadras esportivas.",

        // Contato & Footer
        contato_titulo: "Vamos nos conectar?",
        contato_desc: "Se você é um Tech Recruiter ou deseja discutir projetos e oportunidades, sinta-se à vontade para entrar em contato através das redes abaixo:",
        footer_texto: "© 2026 - Desenvolvido por Lucas Grzybowski. Todos os direitos reservados."
    },
    en: {
        // Navigation
        nav_inicio: "Home",
        nav_sobre: "About Me",
        nav_projetos: "Projects",
        nav_contato: "Contact",
        
        // Hero Section
        hero_titulo: "Hi, I am Lucas Grzybowski",
        hero_subtitulo: "Developer & Technical Support Specialist",
        hero_descricao: "Building robust software solutions, managing stable hardware infrastructures, and mastering the tools shaping the future of technology.",
        hero_botao: "View Projects",
        hero_botao_curriculo: "View Resume",
        
        // About Me
        sobre_titulo: "About Me",
        sobre_faculdade: "Computer Science student at Ritter dos Reis University Center (UNIRITTER).",
        sobre_objetivo: "I aim to work effectively as a software developer or IT support technician in a large-scale enterprise, applying theoretical rigor and analytical capability to solve complex technology problems.",
        sobre_experiencia: "My journey bridges theoretical science with hands-on practice. I have one year of consolidated experience in Technical Support, directly dealing with advanced troubleshooting, infrastructure management, and operating system optimization. This background provided me with a solid framework for understanding how systems behave under stress, accelerating and refining my software development skills.",
        
        // About Cards
        card_academico_titulo: "Academic",
        card_expandir: "Click to expand",
        card_fechar: "Click to close",
        card_instituicao: "Institution:",
        card_instituicao_valor: "UNIRITTER",
        card_curso: "Degree:",
        card_curso_valor: "Bachelor's in Computer Science",
        card_academico_detalhe: "Focus on algorithms, data structures, and systems engineering.",
        card_suporte_titulo: "Technical Support",
        card_experiencia_tempo: "Experience:",
        card_experiencia_valor: "1 Year",
        card_especialidades: "Specialties:",
        card_especialidades_valor: "Troubleshooting, network infrastructure, computer assembly/maintenance/installation, customer support via phone and TeamViewer.",
        
        // Projects
        projetos_titulo: "Featured Projects",
        projetos_subtitulo: "Click on the cards below to view the technical details of each solution.",
        proj_tech_label: "Technologies:",
        proj_link_acessar: "View Project", // <-- NOVA LINHA
        
        proj1_titulo: "Data with Python",
        proj1_desc: "Data exploration and analysis using Python language.",
        proj1_tech_list: "Python, Pandas, Plotly, Streamlit.",
        proj1_detalhe: "An exploratory and statistical analysis of a dataset was performed using machine learning techniques. Project developed for educational purposes and professional practice.",
        
        proj2_titulo: "Management System",
        proj2_desc: "Task and resource management system for business environments.",
        proj2_tech_list: "C++, Object-Oriented Programming.",
        proj2_detalhe: "System developed in C++ with a focus on object-oriented programming, utilizing design patterns to ensure maintainability and scalability. Project still in development. As an example, a system for sports court rental.",

        // Contact & Footer
        contato_titulo: "Let's connect?",
        contato_desc: "If you are a Tech Recruiter or wish to discuss projects and opportunities, feel free to get in touch through the networks below:",
        footer_texto: "© 2026 - Developed by Lucas Grzybowski. All rights reserved."
    }
};

let currentLanguage = 'pt';

document.addEventListener("DOMContentLoaded", () => {
    const langToggleBtn = document.getElementById("lang-toggle");

    langToggleBtn.addEventListener("click", () => {
        currentLanguage = currentLanguage === 'pt' ? 'en' : 'pt';
        langToggleBtn.textContent = currentLanguage === 'pt' ? 'EN' : 'PT';
        updateLanguage();
    });
});

function updateLanguage() {
    const elementsToTranslate = document.querySelectorAll("[data-i18n]");
    
    elementsToTranslate.forEach(element => {
        const translationKey = element.getAttribute("data-i18n");
        
        if (translations[currentLanguage][translationKey]) {
            if (element.tagName === "H3") {
                const iconHtml = element.querySelector("i") ? element.querySelector("i").outerHTML + " " : "";
                element.innerHTML = iconHtml + translations[currentLanguage][translationKey];
            } else {
                element.textContent = translations[currentLanguage][translationKey];
            }
        }
    });
    // ==========================================================================
    // NOVA PARTE: Troca o arquivo do currículo com base no idioma atual
    // ==========================================================================
    const linkCurriculo = document.getElementById("link-curriculo");
    if (linkCurriculo) {
        if (currentLanguage === 'pt') {
            linkCurriculo.href = "img/curriculo-pt.pdf";
        } else {
            linkCurriculo.href = "img/resume-en.pdf";
        }
    }
}

function toggleCard(cardElement) {
    cardElement.classList.toggle('active');
    const hint = cardElement.querySelector('.click-hint');
    
    if(cardElement.classList.contains('active')) {
        hint.setAttribute("data-i18n", "card_fechar");
        hint.textContent = translations[currentLanguage]["card_fechar"];
    } else {
        hint.setAttribute("data-i18n", "card_expandir");
        hint.textContent = translations[currentLanguage]["card_expandir"];
    }
}

function toggleProject(projectElement) {
    projectElement.classList.toggle('open');
}