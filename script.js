

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

// --- Performance: GIF Cache ---
const gifCache = new Map();

// Preload a GIF into cache
function preloadGif(url) {
    if (!url || gifCache.has(url)) return Promise.resolve();
    
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
            gifCache.set(url, img.src);
            resolve();
        };
        img.onerror = reject;
        img.src = url;
    });
}

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
                { name: "Lunges", sets: "3 sets", reps: "10-15 reps", video: VIDEO_DB.lunge },
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
                { name: "Lateral Raises", sets: "3 sets", reps: "10 reps", video: VIDEO_DB.uprightRow }
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
                { name: "Lateral Raises", sets: "3 sets", reps: "10 reps", video: VIDEO_DB.uprightRow }
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
                { name: "Lateral Raises", sets: "3 sets", reps: "10 reps", video: VIDEO_DB.uprightRow }
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
                { name: "Close Grip Barbell Press", sets: "3 sets", reps: "10 reps", video: VIDEO_DB.closeGripPress },
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
                { name: "Lateral Raises", sets: "3 sets", reps: "10 reps", video: VIDEO_DB.uprightRow }
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
                { name: "Close Grip Barbell Press", sets: "3 sets", reps: "10 reps", video: VIDEO_DB.closeGripPress },
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

// --- Video Modal Logic (Optimized) ---
function openVideo(exerciseName, videoUrl) {
    const modal = document.getElementById('video-modal');
    const title = document.getElementById('video-title');
    const videoContainer = document.querySelector('.video-container');

    title.textContent = exerciseName;

    // Reset container content with loading state
    videoContainer.innerHTML = `
        <div style="display: flex; align-items: center; justify-content: center; min-height: 315px; background: rgba(0,0,0,0.3); border-radius: 12px;">
            <div style="text-align: center; color: var(--text-muted);">
                <i class="fa-solid fa-spinner fa-spin" style="font-size: 2rem; margin-bottom: 10px; color: var(--primary);"></i>
                <p>Loading...</p>
            </div>
        </div>
    `;

    // Show modal immediately with loading state
    modal.classList.remove('hidden');
    setTimeout(() => {
        modal.classList.add('active');
    }, 10);

    if (videoUrl && videoUrl.trim() !== "") {
        // Manual Link Provided
        if (videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be')) {
            // Handle YouTube Link
            videoContainer.classList.remove('dynamic-height');
            let embedUrl = videoUrl;
            if (videoUrl.includes('watch?v=')) {
                const videoId = videoUrl.split('v=')[1].split('&')[0];
                embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
            } else if (videoUrl.includes('youtu.be/')) {
                const videoId = videoUrl.split('youtu.be/')[1];
                embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
            }
            videoContainer.innerHTML = `<iframe id="video-frame" width="100%" height="315" src="${embedUrl}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
        } else if (videoUrl.match(/\.(jpeg|jpg|gif|png)$/) != null) {
            // Handle Image/GIF with Lazy Loading and Cache
            videoContainer.classList.add('dynamic-height');
            
            // Check if already cached
            if (gifCache.has(videoUrl)) {
                // Load from cache instantly
                videoContainer.innerHTML = `<img src="${videoUrl}" alt="${exerciseName}" loading="lazy" style="width: 100%; height: auto; display: block;">`;
            } else {
                // Preload and cache the GIF
                preloadGif(videoUrl)
                    .then(() => {
                        videoContainer.innerHTML = `<img src="${videoUrl}" alt="${exerciseName}" loading="lazy" style="width: 100%; height: auto; display: block;">`;
                    })
                    .catch(() => {
                        // Fallback to YouTube search on error
                        videoContainer.classList.remove('dynamic-height');
                        videoContainer.innerHTML = `<iframe id="video-frame" width="100%" height="315" src="https://www.youtube.com/embed?listType=search&list=how+to+do+${exerciseName}+exercise" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
                    });
            }
        } else {
            // Assume generic video embed or direct link
            videoContainer.classList.remove('dynamic-height');
            videoContainer.innerHTML = `<iframe id="video-frame" width="100%" height="315" src="${videoUrl}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
        }
    } else {
        // Fallback: Use YouTube Search Embed
        videoContainer.classList.remove('dynamic-height');
        videoContainer.innerHTML = `<iframe id="video-frame" width="100%" height="315" src="https://www.youtube.com/embed?listType=search&list=how+to+do+${exerciseName}+exercise" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    }
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