// --- Video Library (Centralized for consistency) ---
// Curated for short, form-only clips (30-90s)
const YOUTUBE_BACKUP = {
    squat: "https://www.youtube.com/watch?v=rMvwVtlqjTE", // StrongLifts (Barbell)
    benchPress: "https://www.youtube.com/watch?v=rT7DgCr-3pg", // Scott Herman
    bentOverRow: "https://www.youtube.com/watch?v=6tsk1dXp2SI",
    overheadPress: "https://www.youtube.com/watch?v=_RlRDWO2jfg",
    lunge: "https://www.youtube.com/watch?v=D7KaRcUTQeE",
    plank: "https://www.youtube.com/watch?v=ASdvN_XEl_c",
    inclineSmith: "https://www.youtube.com/watch?v=8lzJTCe-N0g",
    peckDeck: "https://www.youtube.com/watch?v=O-OnSnCb0ko",
    pullup: "https://www.youtube.com/watch?v=eGo4IYlbE5g",
    seatedCableRow: "https://www.youtube.com/watch?v=GZbfZ033f74",
    cableLateral: "https://www.youtube.com/watch?v=PZmPFxL3K_0",
    preacherCurl: "https://www.youtube.com/watch?v=fIWP-FRFNU0",
    tricepOverhead: "https://www.youtube.com/watch?v=_gsUck-7M74",
    legPress: "https://www.youtube.com/watch?v=IZxyjW7MPJQ",
    rdl: "https://www.youtube.com/watch?v=jcYJIQ46DDs", // Romanian Deadlift
    splitSquat: "https://www.youtube.com/watch?v=2C-uNgKwPLE",
    calfRaise: "https://www.youtube.com/watch?v=-M4-G8p8fmc",
    inclineBench: "https://www.youtube.com/watch?v=SrqOu55lrYU",
    tricepPushdown: "https://www.youtube.com/watch?v=2-LAMcpzODU",
    uprightRow: "https://www.youtube.com/watch?v=amCU-ziC5YE",
    latPulldown: "https://www.youtube.com/watch?v=CAwfIEnpH6E",
    bicepCurl: "https://www.youtube.com/watch?v=ykJmrZ5v0Oo",
    hammerCurl: "https://www.youtube.com/watch?v=zC3nLlEvin4",
    facepull: "https://www.youtube.com/watch?v=V8dZ3pyiCBo",
    legCurl: "https://www.youtube.com/watch?v=ELOCsoDSmrg",
    shoulderPress: "https://www.youtube.com/watch?v=qEwK6ri776E",
    shrugs: "https://www.youtube.com/watch?v=cJRVVxmytaM",
    crunches: "https://www.youtube.com/watch?v=5ER5Of4MOtz",
    legRaise: "https://www.youtube.com/watch?v=JB2oyawG9KI",
    cableFly: "https://www.youtube.com/watch?v=Iwe6AmxVf7o", // Lower chest focus
    closeGripPress: "https://www.youtube.com/watch?v=wxVRe9JQbqe",
    dips: "https://www.youtube.com/watch?v=2z8JmcrW-As",
    deadlift: "https://www.youtube.com/watch?v=op9kVnSso6Q",
    wristCurl: "https://www.youtube.com/watch?v=fwQWjY2y7V4",
    frontRaise: "https://www.youtube.com/watch?v=-t7fuZ0KhDA"
};

const VIDEO_DB = {
    squat: "gif/barbell-full-squat.gif",
    benchPress: "gif/benchPress.gif",
    bentOverRow: "gif/bentOverRow.gif",
    overheadPress: "gif/overheadPress.gif",
    lunge: "gif/lunge.gif",
    plank: "gif/plank.gif",
    inclineSmith: "gif/inclineSmith.gif",
    peckDeck: "gif/peckDeck.gif",
    pullup: "gif/pullup.gif",
    seatedCableRow: "gif/seatedCableRow.gif",
    cableLateral: "gif/cableLateral.gif",
    preacherCurl: "gif/preacherCurl.gif",
    tricepOverhead: "gif/tricepOverhead.gif",
    legPress: "gif/legPress.gif",
    rdl: "gif/rdl.gif",
    splitSquat: "gif/splitSquat.gif",
    calfRaise: "gif/calfRaise.gif",
    inclineBench: "gif/inclineBench.gif",
    tricepPushdown: "gif/tricepPushdown.gif",
    uprightRow: "gif/uprightRow.gif",
    latPulldown: "gif/latPulldown.gif",
    bicepCurl: "gif/bicepCurl.gif",
    hammerCurl: "gif/hammerCurl.gif",
    facepull: "gif/facepull.gif",
    legCurl: "gif/legCurl.gif",
    shoulderPress: "gif/shoulderPress.gif",
    shrugs: "gif/shrugs.gif",
    crunches: "gif/crunches.gif",
    legRaise: "gif/legRaise.gif",
    cableFly: "gif/cableFly.gif",
    closeGripPress: "gif/closeGripPress.gif",
    dips: "gif/dips.gif",
    deadlift: "gif/deadlift.gif",
    wristCurl: "gif/wristCurl.gif",
    frontRaise: "gif/frontRaise.gif"
};

// --- RagaPower Data Structure ---
// Full workout routines for all splits

const ragaWorkouts = {
    1: {
        title: "1-Day Split",
        meta: { icon: "fa-bolt", difficulty: "Beginner", time: "45-60m", video: "" },
        days: {
            "Full Body": [
                { name: "Squats", sets: "3 sets", reps: "8-12 reps", video: VIDEO_DB.squat },
                { name: "Bench Press", sets: "3 sets", reps: "8-12 reps", video: VIDEO_DB.benchPress },
                { name: "Bent Over Rows", sets: "3 sets", reps: "8-12 reps", video: VIDEO_DB.bentOverRow },
                { name: "Overhead Press", sets: "3 sets", reps: "10-15 reps", video: VIDEO_DB.overheadPress },
                { name: "Dumbbell Lunges", sets: "3 sets", reps: "10-15 reps", video: VIDEO_DB.lunge },
                { name: "Plank", sets: "3 sets", reps: "60s", video: VIDEO_DB.plank }
            ]
        }
    },
    2: {
        title: "2-Day Split",
        meta: { icon: "fa-layer-group", difficulty: "Beginner", time: "60m", video: "" },
        days: {
            "Upper Body": [
                { name: "Incline Smith Bench Press", sets: "2 sets", reps: "10 reps", video: VIDEO_DB.inclineSmith },
                { name: "Peck Deck Fly", sets: "2 sets", reps: "10 reps", video: VIDEO_DB.peckDeck },
                { name: "Wide Grip Pullups (Weighted)", sets: "3 sets", reps: "5 reps", video: VIDEO_DB.pullup },
                { name: "Seated Cable Row", sets: "2 sets", reps: "10 reps", video: VIDEO_DB.seatedCableRow },
                { name: "Cable Lateral Raise", sets: "2 sets", reps: "10 reps", video: VIDEO_DB.cableLateral },
                { name: "Preacher Bicep Curl", sets: "2 sets", reps: "10 reps", video: VIDEO_DB.preacherCurl },
                { name: "Tricep Overhead Extension", sets: "2 sets", reps: "10 reps", video: VIDEO_DB.tricepOverhead }
            ],
            "Lower Body": [
                { name: "Back Squat", sets: "4 sets", reps: "10 reps", video: VIDEO_DB.squat },
                { name: "Leg Press", sets: "4 sets", reps: "12 reps", video: VIDEO_DB.legPress },
                { name: "Romanian Deadlift", sets: "4 sets", reps: "10 reps", video: VIDEO_DB.rdl },
                { name: "Bulgarian Split Squat", sets: "3 sets", reps: "10 reps per leg", video: VIDEO_DB.splitSquat },
                { name: "Calf Raise", sets: "3 sets", reps: "15 reps", video: VIDEO_DB.calfRaise }
            ]
        }
    },
    3: {
        title: "3-Day Split",
        meta: { icon: "fa-fire", difficulty: "Intermediate", time: "60-75m", video: "" },
        days: {
            "Day 1: Chest, Shoulders, Triceps": [
                { name: "Incline Bench Press (or Dumbbell Press)", sets: "3 sets", reps: "10 reps", video: VIDEO_DB.inclineBench },
                { name: "Flat Bench Press", sets: "3 sets", reps: "10 reps", video: VIDEO_DB.benchPress },
                { name: "Tricep Pushdown (Straight Bar)", sets: "3 sets", reps: "10 reps", video: VIDEO_DB.tricepPushdown },
                { name: "Tricep Overhead Extension", sets: "3 sets", reps: "10 reps", video: VIDEO_DB.tricepOverhead },
                { name: "SUPERSET: Cable Upright Row + Lateral Raises", sets: "3 sets", reps: "10 reps each", video: VIDEO_DB.uprightRow }
            ],
            "Day 2: Back, Biceps, Rear Delts": [
                { name: "Lat Pulldown", sets: "3 sets", reps: "10 reps", video: VIDEO_DB.latPulldown },
                { name: "Seated Row", sets: "3 sets", reps: "10 reps", video: VIDEO_DB.seatedCableRow },
                { name: "Bicep Dumbbell Curl (or Barbell Curl)", sets: "3 sets", reps: "10 reps", video: VIDEO_DB.bicepCurl },
                { name: "Dumbbell Hammer Curl", sets: "3 sets", reps: "10 reps", video: VIDEO_DB.hammerCurl },
                { name: "Facepull", sets: "3 sets", reps: "10 reps", video: VIDEO_DB.facepull }
            ],
            "Day 3: Leg & Shoulder": [
                { name: "Squat", sets: "3 sets", reps: "10 reps", video: VIDEO_DB.squat },
                { name: "Leg Curl", sets: "3 sets", reps: "10 reps", video: VIDEO_DB.legCurl },
                { name: "Calf Raise (Seated or Standing)", sets: "3 sets", reps: "10 reps", video: VIDEO_DB.calfRaise },
                { name: "Shoulder Press (Dumbbell, Machine, or Barbell)", sets: "3 sets", reps: "10 reps", video: VIDEO_DB.shoulderPress },
                { name: "Shrugs", sets: "3 sets", reps: "10 reps", video: VIDEO_DB.shrugs },
                { name: "Crunches", sets: "3 sets", reps: "30 reps", video: VIDEO_DB.crunches },
                { name: "Leg Raise", sets: "3 sets", reps: "30 reps", video: VIDEO_DB.legRaise }
            ]
        }
    },
    4: {
        title: "4-Day Split",
        meta: { icon: "fa-dumbbell", difficulty: "Intermediate", time: "60-75m", video: "" },
        days: {
            "Day 1: Chest, Shoulders, Triceps": [
                { name: "Incline Bench Press (or Dumbbell Press)", sets: "3 sets", reps: "10 reps", video: VIDEO_DB.inclineBench },
                { name: "Flat Bench Press", sets: "3 sets", reps: "10 reps", video: VIDEO_DB.benchPress },
                { name: "Tricep Pushdown (Straight Bar)", sets: "3 sets", reps: "10 reps", video: VIDEO_DB.tricepPushdown },
                { name: "Tricep Overhead Extension", sets: "3 sets", reps: "10 reps", video: VIDEO_DB.tricepOverhead },
                { name: "SUPERSET: Cable Upright Row + Lateral Raises", sets: "3 sets", reps: "10 reps each", video: VIDEO_DB.uprightRow }
            ],
            "Day 2: Back, Biceps, Rear Delts": [
                { name: "Lat Pulldown", sets: "3 sets", reps: "10 reps", video: VIDEO_DB.latPulldown },
                { name: "Seated Row", sets: "3 sets", reps: "10 reps", video: VIDEO_DB.seatedCableRow },
                { name: "Bicep Dumbbell Curl (or Barbell Curl)", sets: "3 sets", reps: "10 reps", video: VIDEO_DB.bicepCurl },
                { name: "Dumbbell Hammer Curl", sets: "3 sets", reps: "10 reps", video: VIDEO_DB.hammerCurl },
                { name: "Facepull", sets: "3 sets", reps: "10 reps", video: VIDEO_DB.facepull }
            ],
            "Day 3: Leg & Shoulder": [
                { name: "Squat", sets: "3 sets", reps: "10 reps", video: VIDEO_DB.squat },
                { name: "Leg Curl", sets: "3 sets", reps: "10 reps", video: VIDEO_DB.legCurl },
                { name: "Calf Raise (Seated or Standing)", sets: "3 sets", reps: "10 reps", video: VIDEO_DB.calfRaise },
                { name: "Shoulder Press (Dumbbell, Machine, or Barbell)", sets: "3 sets", reps: "10 reps", video: VIDEO_DB.shoulderPress },
                { name: "Shrugs", sets: "3 sets", reps: "10 reps", video: VIDEO_DB.shrugs },
                { name: "Crunches", sets: "3 sets", reps: "30 reps", video: VIDEO_DB.crunches },
                { name: "Leg Raise", sets: "3 sets", reps: "30 reps", video: VIDEO_DB.legRaise }
            ],
            "Day 4: Full Upper Body": [
                { name: "Incline Smith Bench Press", sets: "2 sets", reps: "10 reps", video: VIDEO_DB.inclineSmith },
                { name: "Peck Deck Fly", sets: "2 sets", reps: "10 reps", video: VIDEO_DB.peckDeck },
                { name: "Wide Grip Pullups (Weighted)", sets: "3 sets", reps: "5 reps", video: VIDEO_DB.pullup },
                { name: "Seated Cable Row", sets: "2 sets", reps: "10 reps", video: VIDEO_DB.seatedCableRow },
                { name: "Cable Lateral Raise", sets: "2 sets", reps: "10 reps", video: VIDEO_DB.cableLateral },
                { name: "Preacher Bicep Curl", sets: "2 sets", reps: "10 reps", video: VIDEO_DB.preacherCurl },
                { name: "Tricep Overhead Extension", sets: "2 sets", reps: "10 reps", video: VIDEO_DB.tricepOverhead }
            ]
        }
    },
    5: {
        title: "5-Day Split",
        meta: { icon: "fa-hand-fist", difficulty: "Advanced", time: "60m", video: "" },
        days: {
            "Day 1: Chest, Shoulders, Triceps": [
                { name: "Incline Bench Press (or Dumbbell Press)", sets: "3 sets", reps: "10 reps", video: VIDEO_DB.inclineBench },
                { name: "Flat Bench Press (or Dumbbell Press)", sets: "3 sets", reps: "10 reps", video: VIDEO_DB.benchPress },
                { name: "Tricep Pushdown (Straight Bar)", sets: "3 sets", reps: "10 reps", video: VIDEO_DB.tricepPushdown },
                { name: "Tricep Overhead Extension", sets: "3 sets", reps: "10 reps", video: VIDEO_DB.tricepOverhead },
                { name: "SUPERSET: Cable Upright Row + Lateral Raises", sets: "3 sets", reps: "10 reps each", video: VIDEO_DB.uprightRow }
            ],
            "Day 2: Back, Biceps, Rear Delts": [
                { name: "Lat Pulldown", sets: "3 sets", reps: "10 reps", video: VIDEO_DB.latPulldown },
                { name: "Seated Row", sets: "3 sets", reps: "10 reps", video: VIDEO_DB.seatedCableRow },
                { name: "Bicep Dumbbell Curl (or Barbell Curl)", sets: "3 sets", reps: "10 reps", video: VIDEO_DB.bicepCurl },
                { name: "Dumbbell Hammer Curl", sets: "3 sets", reps: "10 reps", video: VIDEO_DB.hammerCurl },
                { name: "Facepull", sets: "3 sets", reps: "10 reps", video: VIDEO_DB.facepull }
            ],
            "Day 3: Leg & Shoulder": [
                { name: "Squat", sets: "3 sets", reps: "10 reps", video: VIDEO_DB.squat },
                { name: "Leg Curl", sets: "3 sets", reps: "10 reps", video: VIDEO_DB.legCurl },
                { name: "Calf Raise (Seated or Standing)", sets: "3 sets", reps: "10 reps", video: VIDEO_DB.calfRaise },
                { name: "Shoulder Press (Dumbbell, Machine, or Barbell)", sets: "3 sets", reps: "10 reps", video: VIDEO_DB.shoulderPress },
                { name: "Shrugs", sets: "3 sets", reps: "10 reps", video: VIDEO_DB.shrugs },
                { name: "Crunches", sets: "3 sets", reps: "30 reps", video: VIDEO_DB.crunches },
                { name: "Leg Raise", sets: "3 sets", reps: "30 reps", video: VIDEO_DB.legRaise }
            ],
            "Day 4: Chest, Shoulders, Triceps": [
                { name: "Peck Deck Fly", sets: "3 sets", reps: "10 reps", video: VIDEO_DB.peckDeck },
                { name: "Cable Fly (for Lower Chest)", sets: "3 sets", reps: "10 reps", video: VIDEO_DB.cableFly },
                { name: "Close Grip Dumbbell Press", sets: "3 sets", reps: "10 reps", video: VIDEO_DB.closeGripPress },
                { name: "Dips (Add weight if needed)", sets: "3 sets", reps: "10 reps", video: VIDEO_DB.dips },
                { name: "Cable Lateral Raise", sets: "3 sets", reps: "10 reps", video: VIDEO_DB.cableLateral }
            ],
            "Day 5: Back, Biceps, Rear Delts": [
                { name: "Wide Grip Pull Ups (Weighted if needed)", sets: "5 sets", reps: "5 reps", video: VIDEO_DB.pullup },
                { name: "Deadlift", sets: "3 sets", reps: "10 reps", video: VIDEO_DB.deadlift },
                { name: "Preacher Curl", sets: "3 sets", reps: "10 reps", video: VIDEO_DB.preacherCurl },
                { name: "Facepull", sets: "3 sets", reps: "10 reps", video: VIDEO_DB.facepull },
                { name: "Wrist curls", sets: "4 sets", reps: "25 reps", video: VIDEO_DB.wristCurl }
            ]
        }
    },
    6: {
        title: "6-Day Split",
        meta: { icon: "fa-skull", difficulty: "Elite", time: "75-90m", video: "" },
        days: {
            "Day 1: Chest, Shoulders, Triceps": [
                { name: "Incline Bench Press (or Dumbbell Press)", sets: "3 sets", reps: "10 reps", video: VIDEO_DB.inclineBench },
                { name: "Flat Bench Press (or Dumbbell Press)", sets: "3 sets", reps: "10 reps", video: VIDEO_DB.benchPress },
                { name: "Tricep Pushdown (Straight Bar)", sets: "3 sets", reps: "10 reps", video: VIDEO_DB.tricepPushdown },
                { name: "Tricep Overhead Extension", sets: "3 sets", reps: "10 reps", video: VIDEO_DB.tricepOverhead },
                { name: "SUPERSET: Cable Upright Row + Lateral Raises", sets: "3 sets", reps: "10 reps each", video: VIDEO_DB.uprightRow }
            ],
            "Day 2: Back, Biceps, Rear Delts": [
                { name: "Lat Pulldown", sets: "3 sets", reps: "10 reps", video: VIDEO_DB.latPulldown },
                { name: "Seated Row", sets: "3 sets", reps: "10 reps", video: VIDEO_DB.seatedCableRow },
                { name: "Bicep Dumbbell Curl (or Barbell Curl)", sets: "3 sets", reps: "10 reps", video: VIDEO_DB.bicepCurl },
                { name: "Dumbbell Hammer Curl", sets: "3 sets", reps: "10 reps", video: VIDEO_DB.hammerCurl },
                { name: "Facepull", sets: "3 sets", reps: "10 reps", video: VIDEO_DB.facepull }
            ],
            "Day 3: Leg & Shoulder": [
                { name: "Squat", sets: "3 sets", reps: "10 reps", video: VIDEO_DB.squat },
                { name: "Leg Curl", sets: "3 sets", reps: "10 reps", video: VIDEO_DB.legCurl },
                { name: "Calf Raise (Seated or Standing)", sets: "3 sets", reps: "10 reps", video: VIDEO_DB.calfRaise },
                { name: "Shoulder Press (Dumbbell, Machine, or Barbell)", sets: "3 sets", reps: "10 reps", video: VIDEO_DB.shoulderPress },
                { name: "Shrugs", sets: "3 sets", reps: "10 reps", video: VIDEO_DB.shrugs },
                { name: "Crunches", sets: "3 sets", reps: "30 reps", video: VIDEO_DB.crunches },
                { name: "Leg Raise", sets: "3 sets", reps: "30 reps", video: VIDEO_DB.legRaise }
            ],
            "Day 4: Chest, Shoulders, Triceps": [
                { name: "Peck Deck Fly", sets: "3 sets", reps: "10 reps", video: VIDEO_DB.peckDeck },
                { name: "Cable Fly (for Lower Chest)", sets: "3 sets", reps: "10 reps", video: VIDEO_DB.cableFly },
                { name: "Close Grip Dumbbell Press", sets: "3 sets", reps: "10 reps", video: VIDEO_DB.closeGripPress },
                { name: "Dips (Add weight if needed)", sets: "3 sets", reps: "10 reps", video: VIDEO_DB.dips },
                { name: "Cable Lateral Raise", sets: "3 sets", reps: "10 reps", video: VIDEO_DB.cableLateral }
            ],
            "Day 5: Back, Biceps, Rear Delts": [
                { name: "Wide Grip Pull Ups (Weighted if needed)", sets: "5 sets", reps: "5 reps", video: VIDEO_DB.pullup },
                { name: "Deadlift", sets: "3 sets", reps: "10 reps", video: VIDEO_DB.deadlift },
                { name: "Preacher Curl", sets: "3 sets", reps: "10 reps", video: VIDEO_DB.preacherCurl },
                { name: "Facepull", sets: "3 sets", reps: "10 reps", video: VIDEO_DB.facepull },
                { name: "Wrist curls", sets: "4 sets", reps: "25 reps", video: VIDEO_DB.wristCurl }
            ],
            "Day 6: Legs & Shoulders": [
                { name: "Leg Press", sets: "3 sets", reps: "10 reps", video: VIDEO_DB.legPress },
                { name: "Bulgarian Split Squat", sets: "3 sets", reps: "10 reps", video: VIDEO_DB.splitSquat },
                { name: "Calf Raise (Seated or Standing)", sets: "3 sets", reps: "10 reps", video: VIDEO_DB.calfRaise },
                { name: "Shrugs", sets: "3 sets", reps: "10 reps", video: VIDEO_DB.shrugs },
                { name: "Front Dumbbell Raise", sets: "3 sets", reps: "10 reps", video: VIDEO_DB.frontRaise },
                { name: "Crunches", sets: "3 sets", reps: "30 reps", video: VIDEO_DB.crunches },
                { name: "Leg Raise", sets: "3 sets", reps: "30 reps", video: VIDEO_DB.legRaise }
            ]
        }
    }
};

// --- DOM Elements ---
const splitView = document.getElementById('split-view');
const dayView = document.getElementById('day-view');
const workoutView = document.getElementById('workout-view');
const splitContainer = document.getElementById('split-buttons-container');
const dayContainer = document.getElementById('day-buttons-container');
const workoutList = document.getElementById('workout-list');

// --- Initialization ---
function init() {
    renderSplitButtons();
    // Initialize History State
    history.replaceState({ view: 'split-view' }, '', '');

    // Handle Browser Back Button
    window.addEventListener('popstate', (event) => {
        // Close modal if open
        const modal = document.getElementById('completion-modal');
        if (modal && modal.classList.contains('active')) {
            modal.classList.remove('active');
            setTimeout(() => modal.classList.add('hidden'), 300);
        }

        if (event.state && event.state.view) {
            const targetView = document.getElementById(event.state.view);
            const currentView = document.querySelector('.view.active');

            if (currentView && targetView && currentView !== targetView) {
                switchView(currentView, targetView);
                if (event.state.view === 'day-view' && event.state.splitId) {
                    currentSplitId = event.state.splitId;
                    const splitData = ragaWorkouts[currentSplitId];
                    document.getElementById('selected-split-title').textContent = splitData.title;
                }
            }
        } else {
            // Fallback to split view
            const currentView = document.querySelector('.view.active');
            const splitView = document.getElementById('split-view');
            if (currentView !== splitView) {
                switchView(currentView, splitView);
            }
        }
    });
}

// 1. Render Split Buttons (Detailed Cards)
function renderSplitButtons() {
    splitContainer.innerHTML = '';
    for (let i = 1; i <= 6; i++) {
        const split = ragaWorkouts[i];
        const card = document.createElement('div');
        card.className = 'program-card';
        card.onclick = () => openDaySelection(i);

        card.innerHTML = `
            <div class="program-icon">
                <i class="fa-solid ${split.meta.icon}"></i>
            </div>
            <div class="program-info">
                <h3 class="program-title">${split.title}</h3>
                <div class="program-meta">
                    <span class="meta-tag"><i class="fa-solid fa-chart-simple"></i> ${split.meta.difficulty}</span>
                    <span class="meta-tag"><i class="fa-solid fa-clock"></i> ${split.meta.time}</span>
                </div>
            </div>
            <div class="program-arrow">
                <i class="fa-solid fa-chevron-right"></i>
            </div>
        `;
        splitContainer.appendChild(card);
    }
}

// 2. Open Day Selection View
let currentSplitId = null;
let isTransitioning = false; // Prevent rapid clicks

function openDaySelection(splitId) {
    if (isTransitioning) return;
    currentSplitId = splitId;
    const splitData = ragaWorkouts[splitId];

    document.getElementById('selected-split-title').textContent = splitData.title;

    // Generate Day Buttons
    dayContainer.innerHTML = '';
    const days = Object.keys(splitData.days);

    days.forEach(dayKey => {
        const btn = document.createElement('button');
        btn.className = 'btn-day';
        btn.innerHTML = `${dayKey} <i class="fa-solid fa-chevron-right" style="float:right; font-size:0.9rem; margin-top:4px;"></i>`;
        btn.onclick = () => openWorkoutRoutine(dayKey);
        dayContainer.appendChild(btn);
    });

    switchView(splitView, dayView);
    history.pushState({ view: 'day-view', splitId: splitId }, '', '');
}

// 3. Open Workout Routine View
function openWorkoutRoutine(dayKey) {
    if (isTransitioning) return;
    document.getElementById('workout-day-title').textContent = dayKey;
    const exercises = ragaWorkouts[currentSplitId].days[dayKey];

    // Generate Exercise Cards
    workoutList.innerHTML = '';
    exercises.forEach(ex => {
        const card = document.createElement('div');
        card.className = 'workout-card';
        // Pass video URL if available
        card.onclick = () => openVideo(ex.name, ex.video);
        card.innerHTML = `
            <div class="workout-name">
                ${ex.name}
                <i class="fa-solid fa-play-circle"></i>
            </div>
            <div class="workout-details">
                ${ex.sets} x ${ex.reps}
            </div>
        `;
        workoutList.appendChild(card);
    });

    switchView(dayView, workoutView);
    history.pushState({ view: 'workout-view', dayKey: dayKey }, '', '');
}

// --- Navigation Logic ---

function switchView(fromView, toView) {
    isTransitioning = true;
    fromView.classList.remove('active');
    fromView.classList.add('hidden');

    toView.classList.remove('hidden');
    toView.classList.add('active');

    // Scroll to top of page (Keep Hero Visible)
    window.scrollTo({ top: 0, behavior: 'smooth' });

    setTimeout(() => {
        isTransitioning = false;
    }, 300);
}

function goBack(targetViewId) {
    // Deprecated argument, using history API
    history.back();
}

// --- Helper ---
window.scrollToSplits = () => {
    const splitSection = document.getElementById('split-view');
    splitSection.scrollIntoView({ behavior: 'smooth' });
};

// --- Fun Interactivity ---
function finishWorkout() {
    const mascot = document.getElementById('ragaMascot');
    const modal = document.getElementById('completion-modal');

    // Visual feedback
    mascot.style.transform = "scale(1.1) rotate(5deg)";

    // Show Modal
    modal.classList.remove('hidden');
    // Small delay to allow display:block to apply before opacity transition
    setTimeout(() => {
        modal.classList.add('active');
    }, 10);

    // Reset mascot
    setTimeout(() => {
        mascot.style.transform = "scale(1)";
    }, 500);
}

window.closeCompletionModal = () => {
    const modal = document.getElementById('completion-modal');
    modal.classList.remove('active');

    setTimeout(() => {
        modal.classList.add('hidden');
        // Return to home/day view via history
        history.back();
    }, 300);
};

// --- Video Modal Logic ---
function openVideo(exerciseName, videoUrl) {
    const modal = document.getElementById('video-modal');
    const title = document.getElementById('video-title');
    const videoContainer = document.querySelector('.video-container');

    title.textContent = exerciseName;

    // Reset container content
    videoContainer.innerHTML = '<iframe id="video-frame" width="100%" height="315" src="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    const newIframe = document.getElementById('video-frame');

    if (videoUrl && videoUrl.trim() !== "") {
        // Manual Link Provided
        if (videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be')) {
            // Handle YouTube Link
            let embedUrl = videoUrl;
            if (videoUrl.includes('watch?v=')) {
                const videoId = videoUrl.split('v=')[1].split('&')[0];
                embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
            } else if (videoUrl.includes('youtu.be/')) {
                const videoId = videoUrl.split('youtu.be/')[1];
                embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
            }
            newIframe.src = embedUrl;
        } else if (videoUrl.match(/\.(jpeg|jpg|gif|png)$/) != null) {
            // Handle Image/GIF with Fallback
            videoContainer.innerHTML = `<img src="${videoUrl}" style="position:absolute; top:0; left:0; width:100%; height:100%; object-fit:contain;" onerror="this.onerror=null; openVideo('${exerciseName}', null);">`;
        } else {
            // Assume generic video embed or direct link
            newIframe.src = videoUrl;
        }
    } else {
        // Fallback: Use YouTube Search Embed
        newIframe.src = `https://www.youtube.com/embed?listType=search&list=how+to+do+${exerciseName}+exercise`;
    }

    modal.classList.remove('hidden');
    setTimeout(() => {
        modal.classList.add('active');
    }, 10);
}

function closeVideo() {
    const modal = document.getElementById('video-modal');
    const iframe = document.getElementById('video-frame');

    modal.classList.remove('active');
    setTimeout(() => {
        modal.classList.add('hidden');
        // Stop video playback by resetting src
        if (iframe) iframe.src = "";
    }, 300);
}

// Run app
init();