// Analytics tracking engine for Magnolia Caffee & Gallery

export interface AnalyticsEvent {
  id: string;
  type: "visit" | "instagram_click" | "directions_click";
  label: string;
  timestamp: number;
}

export interface DayMetric {
  date: string;
  visits: number;
  instagram: number;
  directions: number;
}

export interface AnalyticsState {
  totalVisits: number;
  instagramClicks: number;
  directionsClicks: number;
  recentEvents: AnalyticsEvent[];
  history: DayMetric[];
}

const STORAGE_KEY = "magnolia_analytics_data_v2";

// Returns clean zeroed analytics data
export function getEmptyAnalyticsData(): AnalyticsState {
  const days: DayMetric[] = [];
  const now = new Date();

  // 7 days timeline initialized to 0
  for (let i = 6; i >= 0; i--) {
    const d = new Date(now);
    d.setDate(d.getDate() - i);
    const dateStr = d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
    days.push({
      date: dateStr,
      visits: 0,
      instagram: 0,
      directions: 0,
    });
  }

  return {
    totalVisits: 0,
    instagramClicks: 0,
    directionsClicks: 0,
    recentEvents: [],
    history: days,
  };
}

export function getAnalyticsData(): AnalyticsState {
  if (typeof window === "undefined") {
    return getEmptyAnalyticsData();
  }

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      const clean = getEmptyAnalyticsData();
      localStorage.setItem(STORAGE_KEY, JSON.stringify(clean));
      return clean;
    }
    return JSON.parse(raw);
  } catch {
    return getEmptyAnalyticsData();
  }
}

function saveAnalyticsData(data: AnalyticsState) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    window.dispatchEvent(new Event("magnolia_analytics_updated"));
  } catch (err) {
    console.error("Failed to save analytics", err);
  }
}

function ensureTodayEntry(data: AnalyticsState): DayMetric {
  const todayStr = new Date().toLocaleDateString("en-US", { month: "short", day: "numeric" });
  let entry = data.history.find((h) => h.date === todayStr);
  if (!entry) {
    entry = { date: todayStr, visits: 0, instagram: 0, directions: 0 };
    data.history.push(entry);
    if (data.history.length > 7) {
      data.history.shift();
    }
  }
  return entry;
}

export function trackVisit(path: string = "/") {
  if (typeof window === "undefined") return;
  
  // Guard against tracking admin page as visitor traffic
  if (path.startsWith("/admin")) return;

  const data = getAnalyticsData();
  data.totalVisits += 1;

  const today = ensureTodayEntry(data);
  today.visits += 1;

  data.recentEvents.unshift({
    id: `ev-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
    type: "visit",
    label: `Visitor loaded ${path === "/" ? "Home page" : path}`,
    timestamp: Date.now(),
  });

  data.recentEvents = data.recentEvents.slice(0, 25);
  saveAnalyticsData(data);
}

export function trackInstagramClick() {
  if (typeof window === "undefined") return;

  const data = getAnalyticsData();
  data.instagramClicks += 1;

  const today = ensureTodayEntry(data);
  today.instagram += 1;

  data.recentEvents.unshift({
    id: `ev-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
    type: "instagram_click",
    label: "Visitor clicked Instagram profile (@magnolia_caffee_gallery)",
    timestamp: Date.now(),
  });

  data.recentEvents = data.recentEvents.slice(0, 25);
  saveAnalyticsData(data);
}

export function trackDirectionsClick() {
  if (typeof window === "undefined") return;

  const data = getAnalyticsData();
  data.directionsClicks += 1;

  const today = ensureTodayEntry(data);
  today.directions += 1;

  data.recentEvents.unshift({
    id: `ev-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
    type: "directions_click",
    label: "Visitor clicked 'Get Directions' to 1218 NE 4th Ave",
    timestamp: Date.now(),
  });

  data.recentEvents = data.recentEvents.slice(0, 25);
  saveAnalyticsData(data);
}

// Clears all data to zero and wipes storage
export function clearAllAnalyticsData(): AnalyticsState {
  if (typeof window === "undefined") return getEmptyAnalyticsData();
  
  // Clear both current and previous versions
  localStorage.removeItem("magnolia_analytics_data_v1");
  localStorage.removeItem(STORAGE_KEY);
  
  const clean = getEmptyAnalyticsData();
  saveAnalyticsData(clean);
  return clean;
}

export function resetAnalyticsData() {
  return clearAllAnalyticsData();
}
