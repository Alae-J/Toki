import dayjs from "dayjs";
import { Task } from "../types/task";

interface Props {
    task: Task;
    workDuration: number; // in minutes
}

export const getInspirationMessage = ({ task, workDuration }: Props): string => {
    const now = dayjs();
    const due = dayjs(task.dueDate);
    const daysRemaining = due.diff(now, "day") + 1;

    const estimatedSeconds = task.estimatedTime * 3600;
    const timeSpent = task.sessionsCount * workDuration * 60;

    const percentDone = (timeSpent / estimatedSeconds) * 100;

    // ------------------- CORE LOGIC -------------------

    // Overdue
    if (daysRemaining <= 0) {
        if (percentDone === 0) return "⏳ Missed the mark — but the next round is yours.";
        if (percentDone >= 85) return "⚠️ So close — deliver the final blow!";
        return "🛠️ Time’s up — tie it off, learn, and improve.";
    }

    // Nearly done
    if (percentDone >= 90) {
        return "🔥 Final stretch — you're nearly there!";
    }

    // ⏱Closing in
    if (daysRemaining <= 2) {
        if (percentDone >= 60) return "🚀 Good pace — now finish strong.";
        return "⏱️ Time’s tight — now or never.";
    }

    // Mid-range
    if (daysRemaining <= 5) {
        if (percentDone >= 75) return "🔧 Well on track — wrap it up clean.";
        if (percentDone >= 40) return "📍 Steady grind — keep showing up.";
        return "🧱 Build your base — every session compounds.";
    }

    // Long runway
    if (daysRemaining > 5) {
        if (percentDone >= 60) return "📈 Strong lead — you're ahead!";
        if (percentDone >= 30) return "🧭 Balanced pace — you're cruising.";
        return "🌱 Start now, grow fast — you've got the time.";
    }

    // Fallback messages
    const fallback = [
        "💡 One step at a time builds momentum.",
        "🌄 Discipline now, freedom later.",
        "🎵 Focus, flow, finish — repeat.",
        "🔥 Energy + strategy = unstoppable.",
        "⏳ It's not late — it's time to commit.",
    ];

    return fallback[Math.floor(Math.random() * fallback.length)];
};
