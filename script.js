// --- RagaPower Data Structure ---
// Full workout routines for all splits

const ragaWorkouts = {
    1: {
        title: "1-Day Split",
        meta: { icon: "fa-bolt", difficulty: "Beginner", time: "45-60m" },
        days: {
            "Full Body": [
                { name: "Squats", sets: "3 sets", reps: "8-12 reps" },
                { name: "Bench Press", sets: "3 sets", reps: "8-12 reps" },
                { name: "Bent Over Rows", sets: "3 sets", reps: "8-12 reps" },
                { name: "Overhead Press", sets: "3 sets", reps: "10-15 reps" },
                { name: "Dumbbell Lunges", sets: "3 sets", reps: "10-15 reps" },
                { name: "Plank", sets: "3 sets", reps: "60s" }
            ]
        }
    },
    2: {
        title: "2-Day Split",
        meta: { icon: "fa-layer-group", difficulty: "Beginner", time: "60m" },
        days: {
            "Upper Body": [
                { name: "Incline Smith Bench Press", sets: "2 sets", reps: "10 reps" },
                { name: "Peck Deck Fly", sets: "2 sets", reps: "10 reps" },
                { name: "Wide Grip Pullups (Weighted)", sets: "3 sets", reps: "5 reps" },
                { name: "Seated Cable Row", sets: "2 sets", reps: "10 reps" },
                { name: "Cable Lateral Raise", sets: "2 sets", reps: "10 reps" },
                { name: "Preacher Bicep Curl", sets: "2 sets", reps: "10 reps" },
                { name: "Tricep Overhead Extension", sets: "2 sets", reps: "10 reps" }
            ],
            "Lower Body": [
                { name: "Back Squat", sets: "4 sets", reps: "10 reps" },
                { name: "Leg Press", sets: "4 sets", reps: "12 reps" },
                { name: "Romanian Deadlift", sets: "4 sets", reps: "10 reps" },
                { name: "Bulgarian Split Squat", sets: "3 sets", reps: "10 reps per leg" },
                { name: "Calf Raise", sets: "3 sets", reps: "15 reps" }
            ]
        }
    },
    3: {
        title: "3-Day Split",
        meta: { icon: "fa-fire", difficulty: "Intermediate", time: "60-75m" },
        days: {
            "Day 1: Chest, Shoulders, Triceps": [
                { name: "Incline Bench Press (or Dumbbell Press)", sets: "3 sets", reps: "10 reps" },
                { name: "Flat Bench Press", sets: "3 sets", reps: "10 reps" },
                { name: "Tricep Pushdown (Straight Bar)", sets: "3 sets", reps: "10 reps" },
                { name: "Tricep Overhead Extension", sets: "3 sets", reps: "10 reps" },
                { name: "SUPERSET: Cable Upright Row + Lateral Raises", sets: "3 sets", reps: "10 reps each" }
            ],
            "Day 2: Back, Biceps, Rear Delts": [
                { name: "Lat Pulldown", sets: "3 sets", reps: "10 reps" },
                { name: "Seated Row", sets: "3 sets", reps: "10 reps" },
                { name: "Bicep Dumbbell Curl (or Barbell Curl)", sets: "3 sets", reps: "10 reps" },
                { name: "Dumbbell Hammer Curl", sets: "3 sets", reps: "10 reps" },
                { name: "Facepull", sets: "3 sets", reps: "10 reps" }
            ],
            "Day 3: Leg & Shoulder": [
                { name: "Squat", sets: "3 sets", reps: "10 reps" },
                { name: "Leg Curl", sets: "3 sets", reps: "10 reps" },
                { name: "Calf Raise (Seated or Standing)", sets: "3 sets", reps: "10 reps" },
                { name: "Shoulder Press (Dumbbell, Machine, or Barbell)", sets: "3 sets", reps: "10 reps" },
                { name: "Shrugs", sets: "3 sets", reps: "10 reps" },
                { name: "Crunches", sets: "3 sets", reps: "30 reps" },
                { name: "Leg Raise", sets: "3 sets", reps: "30 reps" }
            ]
        }
    },
    4: {
        title: "4-Day Split",
        meta: { icon: "fa-dumbbell", difficulty: "Intermediate", time: "60-75m" },
        days: {
            "Day 1: Chest, Shoulders, Triceps": [
                { name: "Incline Bench Press (or Dumbbell Press)", sets: "3 sets", reps: "10 reps" },
                { name: "Flat Bench Press", sets: "3 sets", reps: "10 reps" },
                { name: "Tricep Pushdown (Straight Bar)", sets: "3 sets", reps: "10 reps" },
                { name: "Tricep Overhead Extension", sets: "3 sets", reps: "10 reps" },
                { name: "SUPERSET: Cable Upright Row + Lateral Raises", sets: "3 sets", reps: "10 reps each" }
            ],
            "Day 2: Back, Biceps, Rear Delts": [
                { name: "Lat Pulldown", sets: "3 sets", reps: "10 reps" },
                { name: "Seated Row", sets: "3 sets", reps: "10 reps" },
                { name: "Bicep Dumbbell Curl (or Barbell Curl)", sets: "3 sets", reps: "10 reps" },
                { name: "Dumbbell Hammer Curl", sets: "3 sets", reps: "10 reps" },
                { name: "Facepull", sets: "3 sets", reps: "10 reps" }
            ],
            "Day 3: Leg & Shoulder": [
                { name: "Squat", sets: "3 sets", reps: "10 reps" },
                { name: "Leg Curl", sets: "3 sets", reps: "10 reps" },
                { name: "Calf Raise (Seated or Standing)", sets: "3 sets", reps: "10 reps" },
                { name: "Shoulder Press (Dumbbell, Machine, or Barbell)", sets: "3 sets", reps: "10 reps" },
                { name: "Shrugs", sets: "3 sets", reps: "10 reps" },
                { name: "Crunches", sets: "3 sets", reps: "30 reps" },
                { name: "Leg Raise", sets: "3 sets", reps: "30 reps" }
            ],
            "Day 4: Full Upper Body": [
                { name: "Incline Smith Bench Press", sets: "2 sets", reps: "10 reps" },
                { name: "Peck Deck Fly", sets: "2 sets", reps: "10 reps" },
                { name: "Wide Grip Pullups (Weighted)", sets: "3 sets", reps: "5 reps" },
                { name: "Seated Cable Row", sets: "2 sets", reps: "10 reps" },
                { name: "Cable Lateral Raise", sets: "2 sets", reps: "10 reps" },
                { name: "Preacher Bicep Curl", sets: "2 sets", reps: "10 reps" },
                { name: "Tricep Overhead Extension", sets: "2 sets", reps: "10 reps" }
            ]
        }
    },
    5: {
        title: "5-Day Split",
        meta: { icon: "fa-hand-fist", difficulty: "Advanced", time: "60m" },
        days: {
            "Day 1: Chest, Shoulders, Triceps": [
                { name: "Incline Bench Press (or Dumbbell Press)", sets: "3 sets", reps: "10 reps" },
                { name: "Flat Bench Press (or Dumbbell Press)", sets: "3 sets", reps: "10 reps" },
                { name: "Tricep Pushdown (Straight Bar)", sets: "3 sets", reps: "10 reps" },
                { name: "Tricep Overhead Extension", sets: "3 sets", reps: "10 reps" },
                { name: "SUPERSET: Cable Upright Row + Lateral Raises", sets: "3 sets", reps: "10 reps each" }
            ],
            "Day 2: Back, Biceps, Rear Delts": [
                { name: "Lat Pulldown", sets: "3 sets", reps: "10 reps" },
                { name: "Seated Row", sets: "3 sets", reps: "10 reps" },
                { name: "Bicep Dumbbell Curl (or Barbell Curl)", sets: "3 sets", reps: "10 reps" },
                { name: "Dumbbell Hammer Curl", sets: "3 sets", reps: "10 reps" },
                { name: "Facepull", sets: "3 sets", reps: "10 reps" }
            ],
            "Day 3: Leg & Shoulder": [
                { name: "Squat", sets: "3 sets", reps: "10 reps" },
                { name: "Leg Curl", sets: "3 sets", reps: "10 reps" },
                { name: "Calf Raise (Seated or Standing)", sets: "3 sets", reps: "10 reps" },
                { name: "Shoulder Press (Dumbbell, Machine, or Barbell)", sets: "3 sets", reps: "10 reps" },
                { name: "Shrugs", sets: "3 sets", reps: "10 reps" },
                { name: "Crunches", sets: "3 sets", reps: "30 reps" },
                { name: "Leg Raise", sets: "3 sets", reps: "30 reps" }
            ],
            "Day 4: Chest, Shoulders, Triceps": [
                { name: "Peck Deck Fly", sets: "3 sets", reps: "10 reps" },
                { name: "Cable Fly (for Lower Chest)", sets: "3 sets", reps: "10 reps" },
                { name: "Close Grip Dumbbell Press", sets: "3 sets", reps: "10 reps" },
                { name: "Dips (Add weight if needed)", sets: "3 sets", reps: "10 reps" },
                { name: "Cable Lateral Raise", sets: "3 sets", reps: "10 reps" }
            ],
            "Day 5: Back, Biceps, Rear Delts": [
                { name: "Wide Grip Pull Ups (Weighted if needed)", sets: "5 sets", reps: "5 reps" },
                { name: "Deadlift", sets: "3 sets", reps: "10 reps" },
                { name: "Preacher Curl", sets: "3 sets", reps: "10 reps" },
                { name: "Facepull", sets: "3 sets", reps: "10 reps" },
                { name: "Wrist curls", sets: "4 sets", reps: "25 reps" }
            ]
        }
    },
    6: {
        title: "6-Day Split",
        meta: { icon: "fa-skull", difficulty: "Elite", time: "75-90m" },
        days: {
            "Day 1: Chest, Shoulders, Triceps": [
                { name: "Incline Bench Press (or Dumbbell Press)", sets: "3 sets", reps: "10 reps" },
                { name: "Flat Bench Press (or Dumbbell Press)", sets: "3 sets", reps: "10 reps" },
                { name: "Tricep Pushdown (Straight Bar)", sets: "3 sets", reps: "10 reps" },
                { name: "Tricep Overhead Extension", sets: "3 sets", reps: "10 reps" },
                { name: "SUPERSET: Cable Upright Row + Lateral Raises", sets: "3 sets", reps: "10 reps each" }
            ],
            "Day 2: Back, Biceps, Rear Delts": [
                { name: "Lat Pulldown", sets: "3 sets", reps: "10 reps" },
                { name: "Seated Row", sets: "3 sets", reps: "10 reps" },
                { name: "Bicep Dumbbell Curl (or Barbell Curl)", sets: "3 sets", reps: "10 reps" },
                { name: "Dumbbell Hammer Curl", sets: "3 sets", reps: "10 reps" },
                { name: "Facepull", sets: "3 sets", reps: "10 reps" }
            ],
            "Day 3: Leg & Shoulder": [
                { name: "Squat", sets: "3 sets", reps: "10 reps" },
                { name: "Leg Curl", sets: "3 sets", reps: "10 reps" },
                { name: "Calf Raise (Seated or Standing)", sets: "3 sets", reps: "10 reps" },
                { name: "Shoulder Press (Dumbbell, Machine, or Barbell)", sets: "3 sets", reps: "10 reps" },
                { name: "Shrugs", sets: "3 sets", reps: "10 reps" },
                { name: "Crunches", sets: "3 sets", reps: "30 reps" },
                { name: "Leg Raise", sets: "3 sets", reps: "30 reps" }
            ],
            "Day 4: Chest, Shoulders, Triceps": [
                { name: "Peck Deck Fly", sets: "3 sets", reps: "10 reps" },
                { name: "Cable Fly (for Lower Chest)", sets: "3 sets", reps: "10 reps" },
                { name: "Close Grip Dumbbell Press", sets: "3 sets", reps: "10 reps" },
                { name: "Dips (Add weight if needed)", sets: "3 sets", reps: "10 reps" },
                { name: "Cable Lateral Raise", sets: "3 sets", reps: "10 reps" }
            ],
            "Day 5: Back, Biceps, Rear Delts": [
                { name: "Wide Grip Pull Ups (Weighted if needed)", sets: "5 sets", reps: "5 reps" },
                { name: "Deadlift", sets: "3 sets", reps: "10 reps" },
                { name: "Preacher Curl", sets: "3 sets", reps: "10 reps" },
                { name: "Facepull", sets: "3 sets", reps: "10 reps" },
                { name: "Wrist curls", sets: "4 sets", reps: "25 reps" }
            ],
            "Day 6: Legs & Shoulders": [
                { name: "Leg Press", sets: "3 sets", reps: "10 reps" },
                { name: "Bulgarian Split Squat", sets: "3 sets", reps: "10 reps" },
                { name: "Calf Raise (Seated or Standing)", sets: "3 sets", reps: "10 reps" },
                { name: "Shrugs", sets: "3 sets", reps: "10 reps" },
                { name: "Front Dumbbell Raise", sets: "3 sets", reps: "10 reps" },
                { name: "Crunches", sets: "3 sets", reps: "30 reps" },
                { name: "Leg Raise", sets: "3 sets", reps: "30 reps" }
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
                // Determine direction (simple heuristic: split < day < workout)
                // For now, we just assume popstate is always "going back" visually or just switching
                // We can reuse switchView but maybe with a "back" animation if we wanted.
                // For simplicity, reusing switchView logic but we might want to ensure correct "back" transition.

                // If we are going back, we might want to reverse the animation?
                // For now, let's just switch.
                switchView(currentView, targetView);

                // Restore state if needed (e.g. title)
                if (event.state.view === 'day-view' && event.state.splitId) {
                    currentSplitId = event.state.splitId;
                    const splitData = ragaWorkouts[currentSplitId];
                    document.getElementById('selected-split-title').textContent = splitData.title;
                    // Re-render days if needed? They should be there unless we cleared them.
                    // We might need to re-render if the user refreshed. 
                    // But for simple back nav, DOM is preserved.
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
        card.innerHTML = `
            <div class="workout-name">
                ${ex.name}
                <i class="fa-solid fa-dumbbell" style="color:var(--primary)"></i>
            </div>
            <div class="workout-details">
                ${ex.sets} | ${ex.reps}
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

    // Scroll to top of views
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

// Run app
init();