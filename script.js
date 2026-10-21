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
    if (document.getElementById('printable-resume')) updateResume();
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

/* --- RESUME BUILDER --- */
function updateResume() {
    const name = document.getElementById('res-name')?.value || 'Alex Smith';
    const contact = document.getElementById('res-contact')?.value || 'Denville, NJ | (973) 555-0199 | alex.smith@mcvts.org';
    const school = document.getElementById('res-school')?.value || 'Morris County School of Technology - Expected Grad: June 2027';
    const courses = document.getElementById('res-courses')?.value || 'Biotechnology I, Organic Chemistry, AP Biology, Bioinformatics';
    const skills = document.getElementById('res-skills')?.value || 'Micropipetting, Gel Electrophoresis, PCR Amplification, Python, Excel';

    const resumeBox = document.getElementById('printable-resume');
    if (resumeBox) {
        resumeBox.innerHTML = `
            <div class="dna-accent-header">
                <div>
                    <h1 style="font-size:22pt; margin:0; text-transform:uppercase; font-weight:bold; letter-spacing:1px;">${name}</h1>
                    <p style="font-size:10pt; margin-top:3px; color:#333;">${contact}</p>
                </div>
                <div style="font-size:24pt;">🧬</div>
            </div>
            <div style="margin-bottom:16px;">
                <h3 style="font-size:11pt; text-transform:uppercase; border-bottom:1px solid #000; padding-bottom:3px; margin-bottom:8px; font-weight:bold;">EDUCATION</h3>
                <div style="font-size:10.5pt; font-weight:bold;">${school}</div>
                <div style="font-size:10pt; margin-top:3px;"><em>Relevant Coursework:</em> ${courses}</div>
            </div>
            <div>
                <h3 style="font-size:11pt; text-transform:uppercase; border-bottom:1px solid #000; padding-bottom:3px; margin-bottom:8px; font-weight:bold;">TECHNICAL SKILLS & CERTIFICATIONS</h3>
                <div style="font-size:10pt;">${skills}</div>
            </div>`;
    }
}

function printResumeOnly() {
    window.print();
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