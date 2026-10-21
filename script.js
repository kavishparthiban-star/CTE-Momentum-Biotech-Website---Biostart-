/* ==========================================================================
   BIOSTART GLOBAL STATE & COMPREHENSIVE DATASET
   ========================================================================== */

const HIGH_SCHOOLS = [
    { id: 'hs1', name: 'Bergen County Academies', county: 'Bergen', url: 'https://www.bergen.org/site/Defaulta575.html?PageID=4583', notes: 'Top specialized high school in Hackensack; middle schoolers apply during 8th grade.' },
    { id: 'hs2', name: 'Burlington County Institute of Technology', county: 'Burlington', url: 'https://www.bcit.cc/o/bcit/page/biomedical-science', notes: 'Biomedical Science academy track.' },
    { id: 'hs3', name: 'Camden County Technical Schools', county: 'Camden', url: 'https://www.ccts.org/apps/pages/index.jsp?uREC_ID=260569&type=d&termREC_ID=&pREC_ID=1157907', notes: 'Career technical biological sciences.' },
    { id: 'hs4', name: 'Gloucester County Institute of Technology', county: 'Gloucester', url: 'https://www.gcit.org/admissions/career-programs/academy-of-biological-sciences', notes: 'Academy of Biological Sciences.' },
    { id: 'hs5', name: 'Hunterdon County Vocational School District', county: 'Hunterdon', url: 'https://bsa.hcvsd.org/apps/pages/index.jsp?uREC_ID=412789&type=d', notes: 'Biomedical Sciences Academy program.' },
    { id: 'hs6', name: 'Middlesex County Magnet Schools', county: 'Middlesex', url: 'https://www.mcmsnj.net/innovation-magnet-school/program-3-clone-clone', notes: 'Innovation Magnet School STEM program.' },
    { id: 'hs7', name: 'Biotechnology High School', county: 'Monmouth', url: 'https://www.bths.mcvsd.org/', notes: 'Full-time specialized biotechnology high school in Freehold.' },
    { id: 'hs8', name: 'Somerset County Vocational and Technical School', county: 'Somerset', url: 'https://www.scvths.org/programs/career-technical-programs/program-overviews-printable', notes: 'Career technical biological science programs.' },
    { id: 'hs9', name: 'MCST Biotech Academy', county: 'Morris', url: 'https://www.mcvts.org/mcvsd-programs/full-time-academies/biotechnology', notes: 'Academy for Biotechnology at Morris County School of Technology in Denville.' },
    { id: 'hs10', name: 'Passaic County Technical Institute', county: 'Passaic', url: 'https://pcti.pctvs.org/o/pcti/page/new-for-23-24-biotechnology-early-college-option', notes: 'Biotechnology early college option.' },
    { id: 'hs11', name: 'Union County Magnet High School', county: 'Union', url: 'https://mhs.ucvts.org/', notes: 'Magnet high school for science, math, and technology.' }
];

const COLLEGES = [
    { id: 'col1', name: 'Rutgers Biotechnology Program', location: 'New Brunswick, NJ', acceptance: '~50%+', cost: '$16,000/yr', notes: 'Large campus (46k+ students) with guaranteed 4-year housing and biotech track.', url: 'https://biotech.rutgers.edu/' },
    { id: 'col2', name: 'Middlesex College', location: 'Edison, NJ', acceptance: 'Open Enrollment', cost: '$4,500/yr', notes: 'Biotechnology A.S. degree; commuter campus.', url: 'https://middlesexcollege.edu/' },
    { id: 'col3', name: 'New Jersey Institute of Technology (NJIT)', location: 'Newark, NJ', acceptance: 'Selective', cost: '$18,000/yr', notes: 'Urban STEM institute with bioengineering and bioinformatics majors.', url: 'https://www.njit.edu/' },
    { id: 'col4', name: 'County College of Morris (CCM)', location: 'Randolph, NJ', acceptance: 'Open Enrollment', cost: '$5,000/yr', notes: 'Biology Pre-Professional Biotechnology A.S. Degree track.', url: 'https://www.ccm.edu/programs/biology/' },
    { id: 'col5', name: 'Kean University', location: 'Union, NJ', acceptance: 'Safety (50%+)', cost: '$12,500/yr', notes: '5-year B.S./M.S. STEM Biotechnology and Molecular Biology programs.', url: 'https://www.kean.edu/' },
    { id: 'col6', name: 'Rowan University', location: 'Glassboro, NJ', acceptance: 'Selective', cost: '$14,000/yr', notes: 'Offers Translational Biomedical Sciences, Molecular Cellular Biology, & BME.', url: 'https://admissions.rowan.edu/' },
    { id: 'col7', name: 'William Paterson University', location: 'Wayne, NJ', acceptance: 'Safety (50%+)', cost: '$13,800/yr', notes: 'BS in Biotechnology with modern laboratory research facilities.', url: 'https://www.wpunj.edu/' },
    { id: 'col8', name: 'Saint Peter\'s University', location: 'Jersey City, NJ', acceptance: 'Safety (50%+)', cost: '$38,000/yr', notes: 'Applied Biotechnology & Biochemistry options.', url: 'https://www.saintpeters.edu/' },
    { id: 'col9', name: 'Princeton University', location: 'Princeton, NJ', acceptance: '~4.0%', cost: '~$80,000 before aid', notes: 'World-renowned Molecular Biology research program.', url: 'https://molbio.princeton.edu/' },
    { id: 'col10', name: 'Massachusetts Institute of Technology (MIT)', location: 'Cambridge, MA', acceptance: '~4.6%', cost: '$92,760 before aid', notes: 'Premier Biological Engineering degree program.', url: 'https://www.mit.edu/' },
    { id: 'col11', name: 'Stanford University', location: 'Silicon Valley, CA', acceptance: '~3.6%', cost: '$97,545 before aid', notes: 'Top bioengineering research university.', url: 'https://www.stanford.edu/' },
    { id: 'col12', name: 'Johns Hopkins University', location: 'Baltimore, MD', acceptance: '~7-8%', cost: '~$95,000 before aid', notes: 'Premier medical and biomedical research university.', url: 'https://www.jhu.edu/' }
];

const JOBS = [
    { id: 'job1', name: 'Bayer Student Internship Program', cat: 'internship', url: 'https://www.bayer.com/en/us/career/studentsandgraduates', email: 'accommodations_US@bayer.com', notes: 'Pharmaceutical & agricultural biotech roles for students 18+.' },
    { id: 'job2', name: 'U.S. Food & Drug Administration (FDA) Pathways', cat: 'job', url: 'https://www.fda.gov/about-fda/jobs-fda/pathways-students-and-recent-graduates-fda', email: 'ORARecruitment@fda.hhs.gov', notes: 'Paid student internships ($) and federal career pathways.' },
    { id: 'job3', name: 'Atlantic Health System Administrative Fellowship', cat: 'internship', url: 'https://www.atlantichealth.org/professionals/internship-programs', email: 'adminfellow@atlantichealth.org', notes: 'Healthcare administration internships across NJ hospitals.' },
    { id: 'job4', name: 'Raincross Pharmacy Technician & Intern', cat: 'job', url: 'https://raincrosspharmacy.com/', email: 'raincrosspharmacy@gmail.com', notes: 'Part-time pharmacy assistant position for high school/college students.' },
    { id: 'job5', name: 'Fidia Pharma Scientific Intern', cat: 'internship', url: 'https://fidiapharma.us/', email: 'jobs@fidiapharma.us', notes: 'Biomedical device and pharmaceutical intern program.' },
    { id: 'job6', name: 'Wharton Pharmacy Assistant', cat: 'job', url: 'https://www.whartonpharmacy.com/', email: 'whartonpharmacyllc@gmail.com', notes: 'Age 16+ position in retail/clinical pharmacy operations.' },
    { id: 'job7', name: 'ZebraSci Biotech Lab Technician', cat: 'job', url: 'https://zebrasci.com/', email: 'sales@zebrasci.com', notes: 'Combination drug-device testing and quality assurance role.' }
];

const OPPORTUNITIES = [
    { id: 'opp1', name: 'Regeneron International Science & Engineering Fair (ISEF)', cat: 'competition', url: 'https://www.societyforscience.org/jic/', notes: 'International STEM competition for middle and high school researchers.' },
    { id: 'opp2', name: 'BioGENEius Challenges', cat: 'competition', url: 'https://biotechinstitute.org/biogeneius/', notes: 'High school research in global healthcare, sustainability, and environment.' },
    { id: 'opp3', name: 'Davidson Fellows Scholarship', cat: 'scholarship', url: 'https://www.davidsongifted.org/gifted-programs/fellows-scholarship/', notes: 'Scholarship awards up to $50,000 for extraordinary scientific achievements.' },
    { id: 'opp4', name: 'Rutgers Aresty High School Research Program', cat: 'program', url: 'https://aresty.rutgers.edu/resources/research-opportunities-high-school-students', notes: 'Summer laboratory research opportunities at Rutgers New Brunswick.' },
    { id: 'opp5', name: 'HOSA Future Health Professionals', cat: 'competition', url: 'https://hosa.org/competition/', notes: 'State and national healthcare & biotech competitive events.' },
    { id: 'opp6', name: 'TSA Biotechnology Design Competition', cat: 'competition', url: 'https://tsaweb.org/students#competitions', notes: 'Technology Student Association national biotechnology challenges.' }
];

// Persistent State loaded from LocalStorage
let userProfile = JSON.parse(localStorage.getItem('biostart_userProfile')) || {
    name: "",
    email: "",
    county: "Morris",
    town: "Denville",
    level: "High School",
    avatarIdx: 0,
    savedIds: [],
    progress: {}
};

let selectedCountyFilter = "ALL";
let activeCollegeMode = "foryou";
let activeJobMode = "foryou";
const AVATARS = ['🔬', '🧬', '🧪', '🧫', '💻', '🎓', '💼'];

function saveState() {
    localStorage.setItem('biostart_userProfile', JSON.stringify(userProfile));
}

// Global Initialization
window.addEventListener('DOMContentLoaded', () => {
    updateUserHeaderDisplay();
    
    if (document.getElementById('grid-hs')) renderHighSchools();
    if (document.getElementById('grid-col')) renderColleges();
    if (document.getElementById('grid-jobs')) renderJobs();
    if (document.getElementById('grid-opp')) renderOpportunities();
    if (document.getElementById('printable-resume')) {
        loadSampleResumeData();
    }
    if (document.getElementById('saved-grid')) renderSaved();
    if (document.getElementById('prof-fname')) loadProfileFormData();
});

function updateUserHeaderDisplay() {
    const greetingEl = document.getElementById('user-greeting');
    if (greetingEl) {
        greetingEl.innerText = userProfile.name ? `${userProfile.name} (${userProfile.county} County)` : 'Guest Account';
    }
}

function toggleLike(id) {
    const idx = userProfile.savedIds.indexOf(id);
    if (idx === -1) {
        userProfile.savedIds.push(id);
        userProfile.progress[id] = "Interested";
    } else {
        userProfile.savedIds.splice(idx, 1);
        delete userProfile.progress[id];
    }
    saveState();
    
    if (document.getElementById('grid-hs')) renderHighSchools();
    if (document.getElementById('grid-col')) renderColleges();
    if (document.getElementById('grid-jobs')) renderJobs();
    if (document.getElementById('grid-opp')) renderOpportunities();
    if (document.getElementById('saved-grid')) renderSaved();
}

/* --- HIGH SCHOOL RENDER --- */
function filterCounty(county, el) {
    selectedCountyFilter = county;
    document.querySelectorAll('.county-list li').forEach(li => li.classList.remove('active'));
    if (el) el.classList.add('active');
    renderHighSchools();
}

function renderHighSchools() {
    const container = document.getElementById('grid-hs');
    if (!container) return;
    container.innerHTML = '';
    let list = HIGH_SCHOOLS.filter(hs => selectedCountyFilter === 'ALL' || hs.county === selectedCountyFilter);
    
    if (list.length === 0) {
        container.innerHTML = `<p style="grid-column: 1/-1; padding:20px; font-weight:bold;">No high schools found for ${selectedCountyFilter} County.</p>`;
        return;
    }

    list.forEach(hs => {
        const isLiked = userProfile.savedIds.includes(hs.id);
        container.innerHTML += `
            <div class="card">
                <span class="card-tag">${hs.county} County</span>
                <div class="card-title">${hs.name}</div>
                <div class="card-body">${hs.notes}</div>
                <div class="card-actions">
                    <button class="btn-action" onclick="openModal('${hs.name}', '${hs.notes}', '${hs.url}')">View Details</button>
                    <span class="like-heart ${isLiked ? 'liked' : ''}" onclick="toggleLike('${hs.id}')">♥</span>
                </div>
            </div>`;
    });
}

/* --- COLLEGE RENDER --- */
function selectCollegeTab(mode) {
    activeCollegeMode = mode;
    const forYouBtn = document.getElementById('col-card-foryou');
    const allBtn = document.getElementById('col-card-all');
    if (forYouBtn) forYouBtn.classList.toggle('selected', mode === 'foryou');
    if (allBtn) allBtn.classList.toggle('selected', mode === 'all');
    renderColleges();
}

function renderColleges() {
    const container = document.getElementById('grid-col');
    if (!container) return;
    container.innerHTML = '';
    let list = activeCollegeMode === 'foryou' ? COLLEGES.filter(c => c.name.includes('Rutgers') || c.name.includes('Morris') || c.name.includes('NJIT') || c.name.includes('Kean')) : COLLEGES;

    list.forEach(col => {
        const isLiked = userProfile.savedIds.includes(col.id);
        container.innerHTML += `
            <div class="card">
                <span class="card-tag">${col.location}</span>
                <div class="card-title">${col.name}</div>
                <div class="card-body"><strong>Cost:</strong> ${col.cost}<br><strong>Acceptance:</strong> ${col.acceptance}<br>${col.notes}</div>
                <div class="card-actions">
                    <button class="btn-action" onclick="openModal('${col.name}', '${col.notes}', '${col.url}')">View Details</button>
                    <span class="like-heart ${isLiked ? 'liked' : ''}" onclick="toggleLike('${col.id}')">♥</span>
                </div>
            </div>`;
    });
}

/* --- JOBS RENDER --- */
function selectJobTab(mode) {
    activeJobMode = mode;
    const forYouBtn = document.getElementById('job-card-foryou');
    const allBtn = document.getElementById('job-card-all');
    if (forYouBtn) forYouBtn.classList.toggle('selected', mode === 'foryou');
    if (allBtn) allBtn.classList.toggle('selected', mode === 'all');
    renderJobs();
}

function renderJobs() {
    const container = document.getElementById('grid-jobs');
    if (!container) return;
    container.innerHTML = '';
    let list = activeJobMode === 'foryou' ? JOBS.slice(0, 4) : JOBS;

    list.forEach(j => {
        const isLiked = userProfile.savedIds.includes(j.id);
        container.innerHTML += `
            <div class="card">
                <span class="card-tag">${j.cat.toUpperCase()}</span>
                <div class="card-title">${j.name}</div>
                <div class="card-body"><strong>Contact Email:</strong> ${j.email}<br>${j.notes}</div>
                <div class="card-actions">
                    <button class="btn-action" onclick="openModal('${j.name}', '${j.notes}', '${j.url}')">Apply Now</button>
                    <span class="like-heart ${isLiked ? 'liked' : ''}" onclick="toggleLike('${j.id}')">♥</span>
                </div>
            </div>`;
    });
}

/* --- OPPORTUNITIES RENDER --- */
function renderOpportunities() {
    const container = document.getElementById('grid-opp');
    if (!container) return;
    container.innerHTML = '';
    OPPORTUNITIES.forEach(o => {
        const isLiked = userProfile.savedIds.includes(o.id);
        container.innerHTML += `
            <div class="card">
                <span class="card-tag">${o.cat.toUpperCase()}</span>
                <div class="card-title">${o.name}</div>
                <div class="card-body">${o.notes}</div>
                <div class="card-actions">
                    <button class="btn-action" onclick="openModal('${o.name}', '${o.notes}', '${o.url}')">View Details</button>
                    <span class="like-heart ${isLiked ? 'liked' : ''}" onclick="toggleLike('${o.id}')">♥</span>
                </div>
            </div>`;
    });
}

/* --- SURVEY HANDLER --- */
function handleSurveySubmit(e) {
    e.preventDefault();
    userProfile.county = document.getElementById('survey-county').value;
    userProfile.town = document.getElementById('survey-town').value;
    userProfile.level = document.getElementById('survey-level').value;
    saveState();
    updateUserHeaderDisplay();

    alert("Survey Saved! Your personalized recommendations have been updated.");
    window.location.href = 'highschools.html';
}

/* ==========================================================================
   UPDATED MULTI-TEMPLATE & PROFESSIONAL RESUME BUILDER
   ========================================================================== */
let currentResumeTemplate = 'modern';

function selectTemplate(templateKey) {
    currentResumeTemplate = templateKey;
    document.querySelectorAll('.template-card').forEach(card => card.classList.remove('selected'));
    const selectedCard = document.getElementById(`tpl-card-${templateKey}`);
    if (selectedCard) selectedCard.classList.add('selected');
    
    const labelMap = {
        'modern': 'Modern Biotech',
        'academic': 'Academic & Research',
        'corporate': 'Industry Corporate',
        'compact': 'Compact Lab Specialist'
    };
    const labelEl = document.getElementById('active-template-label');
    if (labelEl) labelEl.innerText = labelMap[templateKey] || 'Modern Biotech';

    updateResume();
}

function loadSampleResumeData() {
    if (document.getElementById('res-name')) document.getElementById('res-name').value = "Alex M. Smith";
    if (document.getElementById('res-title')) document.getElementById('res-title').value = "Biotechnology Student & Research Assistant";
    if (document.getElementById('res-email')) document.getElementById('res-email').value = "alex.smith@mcvts.org";
    if (document.getElementById('res-phone')) document.getElementById('res-phone').value = "(973) 555-0199";
    if (document.getElementById('res-location')) document.getElementById('res-location').value = "Denville, NJ 07834";
    if (document.getElementById('res-linkedin')) document.getElementById('res-linkedin').value = "linkedin.com/in/alexsmith-biotech";
    if (document.getElementById('res-summary')) document.getElementById('res-summary').value = "Motivated Biotechnology Academy student with 2+ years of hands-on laboratory experience in molecular biology, PCR analysis, and bioinformatics. Passionate about pursuing undergraduate research in bioengineering and pharmaceutical sciences.";
    if (document.getElementById('res-school')) document.getElementById('res-school').value = "Morris County School of Technology";
    if (document.getElementById('res-grad')) document.getElementById('res-grad').value = "Expected Grad: June 2027";
    if (document.getElementById('res-degree')) document.getElementById('res-degree').value = "Academy for Biotechnology Track";
    if (document.getElementById('res-gpa')) document.getElementById('res-gpa').value = "GPA: 3.92 / 4.0 | High Honor Roll";
    if (document.getElementById('res-courses')) document.getElementById('res-courses').value = "Biotechnology I & II, Organic Chemistry, Molecular Genetics, AP Biology, Cell Culture, Bioinformatics";
    if (document.getElementById('res-labskills')) document.getElementById('res-labskills').value = "Micropipetting, PCR Amplification, Gel Electrophoresis, Aseptic Cell Culture, DNA Extraction, Spectrophotometry";
    if (document.getElementById('res-softskills')) document.getElementById('res-softskills').value = "Python, R, BLAST Database, PyMOL, Microsoft Excel (Data Analysis & Charting)";
    if (document.getElementById('res-certs')) document.getElementById('res-certs').value = "Biotechnician Assistant Credential (BTEC), OSHA 10-Hour General Industry, CPR/AED Certified";
    if (document.getElementById('res-job-title')) document.getElementById('res-job-title').value = "Student Research Assistant";
    if (document.getElementById('res-job-org')) document.getElementById('res-job-org').value = "Rutgers Waksman Student Scholars Program";
    if (document.getElementById('res-job-dates')) document.getElementById('res-job-dates').value = "Sep 2025 – Present";
    if (document.getElementById('res-job-loc')) document.getElementById('res-job-loc').value = "Piscataway, NJ";
    if (document.getElementById('res-job-desc')) document.getElementById('res-job-desc').value = "• Conducted DNA isolation and restriction enzyme digestion on bacterial plasmid samples.\n• Utilized BLAST bioinformatics tools to analyze cDNA sequencing results and submitted confirmed sequences to NCBI database.\n• Maintained meticulous digital laboratory notebooks adhering to GLP (Good Laboratory Practice) guidelines.";
    if (document.getElementById('res-proj-title')) document.getElementById('res-proj-title').value = "HOSA Biotechnology Competition & Science Olympiad";
    if (document.getElementById('res-proj-role')) document.getElementById('res-proj-role').value = "Team Lead | Oct 2024 – Present";
    if (document.getElementById('res-proj-desc')) document.getElementById('res-proj-desc').value = "• Led a 4-student research team designing a microplastic bioremediation protocol using recombinant bacterial strains.\n• Authored research poster and presented at NJ State HOSA Leadership Conference, earning 2nd Place overall.";
    if (document.getElementById('res-honors')) document.getElementById('res-honors').value = "• 2nd Place - NJ State HOSA Biotechnology Competition (2025)\n• National Honor Society Inductee (2024)\n• Morris County Scholar Athlete Award (2024)";

    updateResume();
}

function clearResumeForm() {
    const ids = ['res-name', 'res-title', 'res-email', 'res-phone', 'res-location', 'res-linkedin', 'res-summary', 'res-school', 'res-grad', 'res-degree', 'res-gpa', 'res-courses', 'res-labskills', 'res-softskills', 'res-certs', 'res-job-title', 'res-job-org', 'res-job-dates', 'res-job-loc', 'res-job-desc', 'res-proj-title', 'res-proj-role', 'res-proj-desc', 'res-honors'];
    ids.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = '';
    });
    updateResume();
}

function formatBulletList(text) {
    if (!text || !text.trim()) return '';
    const lines = text.split('\n').filter(l => l.trim().length > 0);
    const items = lines.map(line => {
        let clean = line.replace(/^[•\-\*\s]+/, '').trim();
        return `<li>${clean}</li>`;
    }).join('');
    return `<ul class="resume-bullet-list">${items}</ul>`;
}

function copyResumeText() {
    const text = document.getElementById('printable-resume')?.innerText || '';
    if (!text) return;
    navigator.clipboard.writeText(text).then(() => {
        alert("Resume plain text copied to clipboard!");
    }).catch(err => {
        alert("Failed to copy text: " + err);
    });
}

function printResumeOnly() {
    window.print();
}

function updateResume() {
    const resumeBox = document.getElementById('printable-resume');
    if (!resumeBox) return;

    // Retrieve values
    const name = document.getElementById('res-name')?.value.trim() || 'Alex M. Smith';
    const title = document.getElementById('res-title')?.value.trim() || '';
    const email = document.getElementById('res-email')?.value.trim() || 'alex.smith@mcvts.org';
    const phone = document.getElementById('res-phone')?.value.trim() || '(973) 555-0199';
    const location = document.getElementById('res-location')?.value.trim() || 'Denville, NJ';
    const linkedin = document.getElementById('res-linkedin')?.value.trim() || '';

    const summary = document.getElementById('res-summary')?.value.trim() || '';
    const school = document.getElementById('res-school')?.value.trim() || '';
    const grad = document.getElementById('res-grad')?.value.trim() || '';
    const degree = document.getElementById('res-degree')?.value.trim() || '';
    const gpa = document.getElementById('res-gpa')?.value.trim() || '';
    const courses = document.getElementById('res-courses')?.value.trim() || '';

    const labskills = document.getElementById('res-labskills')?.value.trim() || '';
    const softskills = document.getElementById('res-softskills')?.value.trim() || '';
    const certs = document.getElementById('res-certs')?.value.trim() || '';

    const jobTitle = document.getElementById('res-job-title')?.value.trim() || '';
    const jobOrg = document.getElementById('res-job-org')?.value.trim() || '';
    const jobDates = document.getElementById('res-job-dates')?.value.trim() || '';
    const jobLoc = document.getElementById('res-job-loc')?.value.trim() || '';
    const jobDesc = document.getElementById('res-job-desc')?.value.trim() || '';

    const projTitle = document.getElementById('res-proj-title')?.value.trim() || '';
    const projRole = document.getElementById('res-proj-role')?.value.trim() || '';
    const projDesc = document.getElementById('res-proj-desc')?.value.trim() || '';
    const honors = document.getElementById('res-honors')?.value.trim() || '';

    const contactParts = [email, phone, location, linkedin].filter(Boolean);

    // 1. MODERN BIOTECH TEMPLATE
    if (currentResumeTemplate === 'modern') {
        resumeBox.innerHTML = `
            <div class="tpl-modern">
                <div class="tpl-modern-header">
                    <div>
                        <h1 class="tpl-name">${name}</h1>
                        ${title ? `<div class="tpl-modern-title">${title}</div>` : ''}
                    </div>
                    <div class="tpl-dna-icon">🧬</div>
                </div>
                <div class="tpl-modern-contact">
                    ${contactParts.join(' &nbsp;•&nbsp; ')}
                </div>

                ${summary ? `
                <div class="tpl-sec">
                    <h3 class="tpl-modern-head">Professional Summary</h3>
                    <p class="tpl-p">${summary}</p>
                </div>` : ''}

                ${(school || degree) ? `
                <div class="tpl-sec">
                    <h3 class="tpl-modern-head">Education</h3>
                    <div class="tpl-flex"><strong>${school}</strong><span>${grad}</span></div>
                    <div><em>${degree}</em> ${gpa ? ` | ${gpa}` : ''}</div>
                    ${courses ? `<div style="font-size:9.5pt; margin-top:4px;"><strong>Coursework:</strong> ${courses}</div>` : ''}
                </div>` : ''}

                ${(labskills || softskills || certs) ? `
                <div class="tpl-sec">
                    <h3 class="tpl-modern-head">Technical & Laboratory Skills</h3>
                    ${labskills ? `<div style="margin-bottom:6px;"><strong>Wet Lab:</strong> ${labskills.split(',').map(s=>`<span class="skill-pill">${s.trim()}</span>`).join('')}</div>` : ''}
                    ${softskills ? `<div style="margin-bottom:4px; font-size:9.5pt;"><strong>Software & Bioinformatics:</strong> ${softskills}</div>` : ''}
                    ${certs ? `<div style="font-size:9.5pt;"><strong>Certifications:</strong> ${certs}</div>` : ''}
                </div>` : ''}

                ${(jobTitle || jobOrg) ? `
                <div class="tpl-sec">
                    <h3 class="tpl-modern-head">Research & Experience</h3>
                    <div class="tpl-flex"><strong>${jobTitle}${jobOrg ? ` — ${jobOrg}` : ''}</strong><span>${jobDates}</span></div>
                    ${jobLoc ? `<div style="font-size:9pt; color:#666;">${jobLoc}</div>` : ''}
                    ${formatBulletList(jobDesc)}
                </div>` : ''}

                ${(projTitle || projRole) ? `
                <div class="tpl-sec">
                    <h3 class="tpl-modern-head">Projects & Leadership</h3>
                    <div class="tpl-flex"><strong>${projTitle}</strong><span>${projRole}</span></div>
                    ${formatBulletList(projDesc)}
                </div>` : ''}

                ${honors ? `
                <div class="tpl-sec">
                    <h3 class="tpl-modern-head">Honors & Achievements</h3>
                    ${formatBulletList(honors)}
                </div>` : ''}
            </div>`;
    }
    // 2. ACADEMIC & RESEARCH TEMPLATE
    else if (currentResumeTemplate === 'academic') {
        resumeBox.innerHTML = `
            <div class="tpl-academic">
                <div style="text-align:center; border-bottom: 2px solid #000; padding-bottom: 10px; margin-bottom: 14px;">
                    <h1 class="tpl-academic-name">${name.toUpperCase()}</h1>
                    ${title ? `<div style="font-style:italic; font-size:11pt; margin-bottom:4px;">${title}</div>` : ''}
                    <div style="font-size:9.5pt;">${contactParts.join(' | ')}</div>
                </div>

                ${summary ? `
                <div class="tpl-sec">
                    <h3 class="tpl-acad-head">RESEARCH STATEMENT</h3>
                    <p class="tpl-p">${summary}</p>
                </div>` : ''}

                ${(school || degree) ? `
                <div class="tpl-sec">
                    <h3 class="tpl-acad-head">EDUCATION</h3>
                    <div class="tpl-flex"><strong>${school}</strong><span>${grad}</span></div>
                    <div><em>${degree}</em> ${gpa ? `— ${gpa}` : ''}</div>
                    ${courses ? `<div style="font-size:9.5pt; margin-top:3px;"><em>Relevant Coursework:</em> ${courses}</div>` : ''}
                </div>` : ''}

                ${(labskills || softskills || certs) ? `
                <div class="tpl-sec">
                    <h3 class="tpl-acad-head">LABORATORY METHODOLOGY & SKILLS</h3>
                    ${labskills ? `<div><strong>Laboratory Techniques:</strong> ${labskills}</div>` : ''}
                    ${softskills ? `<div><strong>Computational & Data Analysis:</strong> ${softskills}</div>` : ''}
                    ${certs ? `<div><strong>Certifications:</strong> ${certs}</div>` : ''}
                </div>` : ''}

                ${(jobTitle || jobOrg) ? `
                <div class="tpl-sec">
                    <h3 class="tpl-acad-head">RESEARCH & LABORATORY EXPERIENCE</h3>
                    <div class="tpl-flex"><strong>${jobTitle}</strong><span>${jobDates}</span></div>
                    <div><em>${jobOrg}${jobLoc ? `, ${jobLoc}` : ''}</em></div>
                    ${formatBulletList(jobDesc)}
                </div>` : ''}

                ${(projTitle || projRole) ? `
                <div class="tpl-sec">
                    <h3 class="tpl-acad-head">ACADEMIC PROJECTS & LEADERSHIP</h3>
                    <div class="tpl-flex"><strong>${projTitle}</strong><span>${projRole}</span></div>
                    ${formatBulletList(projDesc)}
                </div>` : ''}

                ${honors ? `
                <div class="tpl-sec">
                    <h3 class="tpl-acad-head">HONORS & ACADEMIC AWARDS</h3>
                    ${formatBulletList(honors)}
                </div>` : ''}
            </div>`;
    }
    // 3. INDUSTRY CORPORATE TEMPLATE
    else if (currentResumeTemplate === 'corporate') {
        resumeBox.innerHTML = `
            <div class="tpl-corporate">
                <div style="border-left: 5px solid var(--biostart-black); padding-left: 14px; margin-bottom: 16px;">
                    <h1 class="tpl-corp-name">${name}</h1>
                    ${title ? `<div style="font-size:12pt; font-weight:bold; color:var(--biostart-red);">${title}</div>` : ''}
                    <div style="font-size:9.5pt; color:#444; margin-top:4px;">${contactParts.join('  •  ')}</div>
                </div>

                ${summary ? `
                <div class="tpl-sec">
                    <h3 class="tpl-corp-head">EXECUTIVE SUMMARY</h3>
                    <p class="tpl-p">${summary}</p>
                </div>` : ''}

                ${(school || degree) ? `
                <div class="tpl-sec">
                    <h3 class="tpl-corp-head">EDUCATION</h3>
                    <div class="tpl-flex"><strong>${school}</strong><span>${grad}</span></div>
                    <div>${degree}${gpa ? ` (${gpa})` : ''}</div>
                    ${courses ? `<div style="font-size:9.5pt; margin-top:2px;">Coursework: ${courses}</div>` : ''}
                </div>` : ''}

                ${(labskills || softskills || certs) ? `
                <div class="tpl-sec">
                    <h3 class="tpl-corp-head">CORE COMPETENCIES & CERTIFICATIONS</h3>
                    ${labskills ? `<div>• <strong>Lab Techniques:</strong> ${labskills}</div>` : ''}
                    ${softskills ? `<div>• <strong>Software & Tools:</strong> ${softskills}</div>` : ''}
                    ${certs ? `<div>• <strong>Certifications:</strong> ${certs}</div>` : ''}
                </div>` : ''}

                ${(jobTitle || jobOrg) ? `
                <div class="tpl-sec">
                    <h3 class="tpl-corp-head">PROFESSIONAL EXPERIENCE</h3>
                    <div class="tpl-flex"><strong>${jobTitle} | ${jobOrg}</strong><span>${jobDates}</span></div>
                    ${formatBulletList(jobDesc)}
                </div>` : ''}

                ${(projTitle || projRole) ? `
                <div class="tpl-sec">
                    <h3 class="tpl-corp-head">PROJECTS & ACTIVITIES</h3>
                    <div class="tpl-flex"><strong>${projTitle}</strong><span>${projRole}</span></div>
                    ${formatBulletList(projDesc)}
                </div>` : ''}

                ${honors ? `
                <div class="tpl-sec">
                    <h3 class="tpl-corp-head">HONORS & RECOGNITIONS</h3>
                    ${formatBulletList(honors)}
                </div>` : ''}
            </div>`;
    }
    // 4. COMPACT LAB SPECIALIST TEMPLATE (2-COLUMN)
    else if (currentResumeTemplate === 'compact') {
        resumeBox.innerHTML = `
            <div class="tpl-compact">
                <div style="border-bottom: 2px solid #000; padding-bottom: 8px; margin-bottom: 14px;">
                    <h1 class="tpl-name" style="margin:0;">${name}</h1>
                    ${title ? `<div style="font-size:11pt; font-weight:bold; color:var(--biostart-red);">${title}</div>` : ''}
                </div>
                <div class="tpl-compact-grid">
                    <div class="tpl-compact-left">
                        <div class="tpl-compact-box">
                            <h4 class="tpl-compact-head">CONTACT</h4>
                            <div style="font-size:9pt; line-height:1.5;">
                                ${email ? `<div>📧 ${email}</div>` : ''}
                                ${phone ? `<div>📞 ${phone}</div>` : ''}
                                ${location ? `<div>📍 ${location}</div>` : ''}
                                ${linkedin ? `<div>🔗 ${linkedin}</div>` : ''}
                            </div>
                        </div>

                        ${(labskills || softskills || certs) ? `
                        <div class="tpl-compact-box">
                            <h4 class="tpl-compact-head">TECHNICAL SKILLS</h4>
                            ${labskills ? `<div style="font-weight:bold; margin-bottom:2px;">Lab Techniques:</div><div style="margin-bottom:8px;">${labskills}</div>` : ''}
                            ${softskills ? `<div style="font-weight:bold; margin-bottom:2px;">Software:</div><div style="margin-bottom:8px;">${softskills}</div>` : ''}
                            ${certs ? `<div style="font-weight:bold; margin-bottom:2px;">Certifications:</div><div>${certs}</div>` : ''}
                        </div>` : ''}

                        ${courses ? `
                        <div class="tpl-compact-box">
                            <h4 class="tpl-compact-head">COURSEWORK</h4>
                            <div style="font-size:9pt;">${courses}</div>
                        </div>` : ''}

                        ${honors ? `
                        <div class="tpl-compact-box">
                            <h4 class="tpl-compact-head">HONORS</h4>
                            <div style="font-size:9pt;">${formatBulletList(honors)}</div>
                        </div>` : ''}
                    </div>

                    <div class="tpl-compact-right">
                        ${summary ? `
                        <div class="tpl-sec">
                            <h3 class="tpl-modern-head">PROFILE</h3>
                            <p class="tpl-p">${summary}</p>
                        </div>` : ''}

                        ${(school || degree) ? `
                        <div class="tpl-sec">
                            <h3 class="tpl-modern-head">EDUCATION</h3>
                            <div class="tpl-flex"><strong>${school}</strong><span>${grad}</span></div>
                            <div><em>${degree}</em> ${gpa ? `(${gpa})` : ''}</div>
                        </div>` : ''}

                        ${(jobTitle || jobOrg) ? `
                        <div class="tpl-sec">
                            <h3 class="tpl-modern-head">LAB & WORK EXPERIENCE</h3>
                            <div class="tpl-flex"><strong>${jobTitle}</strong><span>${jobDates}</span></div>
                            <div><em>${jobOrg}</em></div>
                            ${formatBulletList(jobDesc)}
                        </div>` : ''}

                        ${(projTitle || projRole) ? `
                        <div class="tpl-sec">
                            <h3 class="tpl-modern-head">PROJECTS & LEADERSHIP</h3>
                            <div class="tpl-flex"><strong>${projTitle}</strong><span>${projRole}</span></div>
                            ${formatBulletList(projDesc)}
                        </div>` : ''}
                    </div>
                </div>
            </div>`;
    }
}

/* --- ACCOUNT PROFILE & SAVED LISTINGS --- */
function loadProfileFormData() {
    if (userProfile.name) document.getElementById('prof-fname').value = userProfile.name;
    if (userProfile.email) document.getElementById('prof-email').value = userProfile.email;
    if (userProfile.county) document.getElementById('prof-county').value = userProfile.county;
    if (userProfile.town) document.getElementById('prof-town').value = userProfile.town;
    if (userProfile.level) document.getElementById('prof-level').value = userProfile.level;

    document.getElementById('avatar-display').innerText = AVATARS[userProfile.avatarIdx || 0];

    const nameDisp = document.getElementById('profile-name-display');
    const emailDisp = document.getElementById('profile-email-display');
    const locDisp = document.getElementById('profile-location-display');

    if (nameDisp) nameDisp.innerText = userProfile.name || 'Profile Unsaved';
    if (emailDisp) emailDisp.innerText = userProfile.email || 'Please complete the form to save profile';
    if (locDisp) locDisp.innerText = `Location: ${userProfile.town || 'Unspecified'}, ${userProfile.county || 'Unspecified'} County (${userProfile.level || 'Unspecified'})`;
}

function saveAccountProfile(e) {
    e.preventDefault();
    userProfile.name = document.getElementById('prof-fname').value.trim();
    userProfile.email = document.getElementById('prof-email').value.trim();
    userProfile.county = document.getElementById('prof-county').value;
    userProfile.town = document.getElementById('prof-town').value.trim();
    userProfile.level = document.getElementById('prof-level').value;

    saveState();
    updateUserHeaderDisplay();
    loadProfileFormData();

    alert("Account profile saved successfully!");
}

function cycleAvatar(dir) {
    userProfile.avatarIdx = (userProfile.avatarIdx + dir + AVATARS.length) % AVATARS.length;
    document.getElementById('avatar-display').innerText = AVATARS[userProfile.avatarIdx];
    saveState();
}

function renderSaved() {
    const container = document.getElementById('saved-grid');
    const countEl = document.getElementById('saved-count');
    if (!container) return;

    if (countEl) countEl.innerText = userProfile.savedIds.length;
    container.innerHTML = '';
    
    if (userProfile.savedIds.length === 0) {
        container.innerHTML = '<p style="background: white; padding: 20px; border: 2px solid black;">No saved items yet. Click the heart icon (♥) on any card to bookmark items here!</p>';
        return;
    }

    const ALL = [...HIGH_SCHOOLS, ...COLLEGES, ...JOBS, ...OPPORTUNITIES];
    userProfile.savedIds.forEach(id => {
        const item = ALL.find(x => x.id === id);
        if (!item) return;
        container.innerHTML += `
            <div class="card">
                <div class="card-title">${item.name}</div>
                <div class="card-body">${item.notes || ''}</div>
                <div style="margin-top:10px;">
                    <label style="font-size:10px; font-weight:800; text-transform:uppercase;">Application Tracker Status:</label><br>
                    <select style="padding:6px; font-weight:bold; border:2px solid #000; width:100%; margin-top:4px;" onchange="userProfile.progress['${id}']=this.value; saveState();">
                        <option value="Interested" ${userProfile.progress[id]==='Interested'?'selected':''}>Interested</option>
                        <option value="Applied" ${userProfile.progress[id]==='Applied'?'selected':''}>Applied</option>
                        <option value="Accepted" ${userProfile.progress[id]==='Accepted'?'selected':''}>Accepted 🎉</option>
                    </select>
                </div>
            </div>`;
    });
}

/* --- MODAL DIALOG --- */
function openModal(title, text, url) {
    const content = document.getElementById('modal-content');
    if (!content) return;
    content.innerHTML = `
        <h3 style="font-size:20px; text-transform:uppercase; margin-bottom:12px;">${title}</h3>
        <p style="margin: 15px 0; font-size: 14px; line-height:1.5;">${text}</p>
        <a href="${url}" target="_blank" class="btn-action" style="display:inline-block; text-decoration:none;">Visit Official Website 🔗</a>`;
    document.getElementById('modal-overlay').style.display = 'flex';
}

function closeModal(e) { if (e.target.id === 'modal-overlay') closeModalDirect(); }
function closeModalDirect() { document.getElementById('modal-overlay').style.display = 'none'; }

/* --- WIDGETS --- */
function toggleWidget(id) { document.getElementById(id).classList.toggle('open'); }

function sendChatMessage() {
    const input = document.getElementById('chat-input');
    const txt = input.value.trim();
    if (!txt) return;
    const msgs = document.getElementById('chat-messages');
    msgs.innerHTML += `<div class="chat-msg chat-user">${txt}</div>`;
    input.value = '';
    setTimeout(() => {
        msgs.innerHTML += `<div class="chat-msg chat-bot">Thanks for your question! You can explore the High Schools, Colleges, or Jobs tabs above for program details.</div>`;
    }, 500);
}
