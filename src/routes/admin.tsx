import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  getAnalyticsData,
  trackVisit,
  trackInstagramClick,
  trackDirectionsClick,
  clearAllAnalyticsData,
  type AnalyticsState,
} from "@/lib/analytics";
import { MagnoliaMark } from "@/components/site/MagnoliaMark";
import {
  Users,
  Instagram,
  MapPin,
  TrendingUp,
  Lock,
  LogOut,
  ArrowLeft,
  Sparkles,
  Trash2,
  Download,
  CheckCircle2,
  AlertCircle,
  Eye,
  EyeOff,
  Activity,
  Inbox,
} from "lucide-react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const AUTH_USERNAME = "magnolia_gallery22330099";
const AUTH_PASSWORD = "gallery99003322@magnolia";
const SESSION_KEY = "magnolia_admin_logged_in";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Admin Portal — Magnolia Caffee & Gallery" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: AdminPage,
});

function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [analytics, setAnalytics] = useState<AnalyticsState | null>(null);
  const [notification, setNotification] = useState<string | null>(null);

  // Check existing session
  useEffect(() => {
    if (typeof window !== "undefined") {
      const loggedIn = sessionStorage.getItem(SESSION_KEY) === "true";
      setIsAuthenticated(loggedIn);
      setAnalytics(getAnalyticsData());

      const handleUpdate = () => {
        setAnalytics(getAnalyticsData());
      };

      window.addEventListener("magnolia_analytics_updated", handleUpdate);
      return () => window.removeEventListener("magnolia_analytics_updated", handleUpdate);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (usernameInput.trim() === AUTH_USERNAME && passwordInput === AUTH_PASSWORD) {
      sessionStorage.setItem(SESSION_KEY, "true");
      setIsAuthenticated(true);
      setLoginError("");
    } else {
      setLoginError("Invalid username or password. Please re-enter credentials.");
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem(SESSION_KEY);
    setIsAuthenticated(false);
    setUsernameInput("");
    setPasswordInput("");
  };

  const handleClearAllData = () => {
    if (window.confirm("Are you sure you want to clear all data? This will reset all visits, clicks, and activity logs to 0.")) {
      const empty = clearAllAnalyticsData();
      setAnalytics(empty);
      setNotification("All analytics data has been cleared and reset to 0.");
      setTimeout(() => setNotification(null), 4000);
    }
  };

  const handleExportData = () => {
    if (!analytics) return;
    const blob = new Blob([JSON.stringify(analytics, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `magnolia-caffee-analytics-${new Date().toISOString().split("T")[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
    setNotification("Analytics report exported successfully.");
    setTimeout(() => setNotification(null), 3000);
  };

  // 1. LOGIN SCREEN
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#f7f2ea] to-background flex flex-col justify-center items-center px-6 py-12">
        <div className="w-full max-w-md">
          {/* Brand header */}
          <div className="text-center space-y-3 mb-8">
            <Link to="/" className="inline-flex items-center gap-2 group">
              <MagnoliaMark className="h-10 w-10 transition-transform group-hover:scale-105" />
            </Link>
            <h1 className="font-serif text-3xl text-gate-blue font-medium">
              Magnolia <span className="italic text-bougainvillea">Admin Portal</span>
            </h1>
            <p className="text-xs text-muted-foreground">
              Sign in to monitor site traffic, Instagram clicks &amp; directions.
            </p>
          </div>

          {/* Form card */}
          <div className="bg-card border border-border/80 rounded-2xl p-8 shadow-lg space-y-6">
            <div className="flex items-center gap-2 pb-3 border-b border-border/60 text-xs font-semibold uppercase tracking-wider text-gate-blue">
              <Lock className="h-4 w-4 text-bougainvillea" />
              <span>Restricted Access</span>
            </div>

            {loginError && (
              <div className="rounded-xl bg-red-50 border border-red-200 p-3.5 flex items-start gap-2.5 text-xs text-red-700">
                <AlertCircle className="h-4 w-4 shrink-0 text-red-600 mt-0.5" />
                <span>{loginError}</span>
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-foreground block">
                  Username
                </label>
                <input
                  type="text"
                  required
                  value={usernameInput}
                  onChange={(e) => setUsernameInput(e.target.value)}
                  placeholder="Enter admin username"
                  className="w-full rounded-xl border border-border px-3.5 py-2.5 text-sm bg-background/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gate-blue/30 focus:border-gate-blue transition"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium text-foreground block">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    value={passwordInput}
                    onChange={(e) => setPasswordInput(e.target.value)}
                    placeholder="Enter password"
                    className="w-full rounded-xl border border-border px-3.5 py-2.5 text-sm bg-background/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gate-blue/30 focus:border-gate-blue transition pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-2.5 text-muted-foreground hover:text-foreground"
                    title={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="btn-primary w-full py-3 text-xs tracking-wider uppercase font-semibold mt-2 shadow-md"
              >
                Sign In to Dashboard
              </button>
            </form>

            <div className="pt-2 text-center border-t border-border/40">
              <Link
                to="/"
                className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-gate-blue transition-colors"
              >
                <ArrowLeft className="h-3.5 w-3.5" /> Back to public website
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 2. AUTHENTICATED DASHBOARD
  const totalVisits = analytics?.totalVisits || 0;
  const instagramClicks = analytics?.instagramClicks || 0;
  const directionsClicks = analytics?.directionsClicks || 0;
  const totalActions = instagramClicks + directionsClicks;
  const conversionRate = totalVisits > 0 ? ((totalActions / totalVisits) * 100).toFixed(1) : "0.0";

  return (
    <div className="min-h-screen bg-[#faf8f4] text-foreground pb-24">
      {/* Admin Top Navigation */}
      <nav className="sticky top-0 z-40 bg-white/95 border-b border-border/70 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-2.5 group">
              <MagnoliaMark className="h-8 w-8" />
              <div className="flex flex-col">
                <span className="font-serif text-xl font-semibold leading-none text-gate-blue">
                  Magnolia <span className="font-serif italic font-normal text-bougainvillea">Admin</span>
                </span>
                <span className="text-[10px] text-muted-foreground uppercase tracking-widest mt-0.5">
                  Analytics &amp; Performance
                </span>
              </div>
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs text-emerald-700 border border-emerald-200">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Real-Time Tracking Active</span>
            </div>

            <div className="text-xs text-muted-foreground hidden md:block">
              Logged in as <strong className="text-gate-blue">{AUTH_USERNAME}</strong>
            </div>

            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-gate-blue hover:underline px-2 py-1"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> Live Site
            </Link>

            <button
              onClick={handleLogout}
              className="btn-outline text-xs py-1.5 px-4 hover:border-red-300 hover:text-red-600"
            >
              <LogOut className="h-3.5 w-3.5" /> Log Out
            </button>
          </div>
        </div>
      </nav>

      {/* Main Dashboard Body */}
      <main className="mx-auto max-w-7xl px-6 pt-10 space-y-10">
        
        {/* Welcome Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="font-serif text-3xl sm:text-4xl text-gate-blue font-medium">
              Magnolia Caffee &amp; Gallery Performance
            </h1>
            <p className="text-sm text-muted-foreground mt-1">
              Visitor analytics, Instagram conversions, and map direction requests.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleExportData}
              className="btn-outline text-xs py-2 px-4 shadow-xs"
            >
              <Download className="h-3.5 w-3.5" />
              <span>Export JSON</span>
            </button>
            <button
              onClick={handleClearAllData}
              className="btn-danger text-xs py-2 px-4"
              title="Clear all analytics to 0"
            >
              <Trash2 className="h-3.5 w-3.5" />
              <span>Clear All Data</span>
            </button>
          </div>
        </div>

        {notification && (
          <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-3.5 text-xs text-emerald-800 flex items-center gap-2.5 shadow-sm">
            <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
            <span>{notification}</span>
          </div>
        )}

        {/* 3 CORE REQUIRED METRICS + CONVERSION RATE */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          
          {/* 1. WEBSITE VISITS */}
          <div className="rounded-2xl border border-border/80 bg-white p-6 shadow-sm space-y-3 relative overflow-hidden group hover:border-sky-300 transition-all">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Website Visitors
              </span>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 text-gate-blue">
                <Users className="h-5 w-5" />
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-bold font-serif text-gate-blue tracking-tight">
                {totalVisits.toLocaleString()}
              </div>
              <p className="text-xs text-muted-foreground">
                Total unique page impressions
              </p>
            </div>
            <div className="pt-2 border-t border-border/40 flex items-center gap-1.5 text-[11px] text-emerald-600 font-medium">
              <TrendingUp className="h-3.5 w-3.5" />
              <span>Live tracking active</span>
            </div>
          </div>

          {/* 2. INSTAGRAM CLICKS */}
          <div className="rounded-2xl border border-border/80 bg-white p-6 shadow-sm space-y-3 relative overflow-hidden group hover:border-pink-300 transition-all">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Instagram Clicks
              </span>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-pink-50 text-bougainvillea">
                <Instagram className="h-5 w-5" />
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-bold font-serif text-bougainvillea tracking-tight">
                {instagramClicks.toLocaleString()}
              </div>
              <p className="text-xs text-muted-foreground">
                Clicks to @magnolia_caffee_gallery
              </p>
            </div>
            <div className="pt-2 border-t border-border/40 flex items-center justify-between text-[11px] text-muted-foreground">
              <span>Conversion:</span>
              <span className="font-semibold text-bougainvillea">
                {totalVisits > 0 ? ((instagramClicks / totalVisits) * 100).toFixed(1) : "0.0"}% of visitors
              </span>
            </div>
          </div>

          {/* 3. DIRECTIONS CLICKS */}
          <div className="rounded-2xl border border-border/80 bg-white p-6 shadow-sm space-y-3 relative overflow-hidden group hover:border-amber-300 transition-all">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Directions Views
              </span>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-sun-gold">
                <MapPin className="h-5 w-5" />
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-bold font-serif text-sun-gold tracking-tight">
                {directionsClicks.toLocaleString()}
              </div>
              <p className="text-xs text-muted-foreground">
                In-person map lookups to 1218 NE 4th Ave
              </p>
            </div>
            <div className="pt-2 border-t border-border/40 flex items-center justify-between text-[11px] text-muted-foreground">
              <span>In-person intent:</span>
              <span className="font-semibold text-sun-gold">
                {totalVisits > 0 ? ((directionsClicks / totalVisits) * 100).toFixed(1) : "0.0"}% of visitors
              </span>
            </div>
          </div>

          {/* 4. TOTAL ENGAGEMENT RATE */}
          <div className="rounded-2xl border border-border/80 bg-white p-6 shadow-sm space-y-3 relative overflow-hidden group hover:border-emerald-300 transition-all">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Total Action Rate
              </span>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                <Activity className="h-5 w-5" />
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-bold font-serif text-emerald-700 tracking-tight">
                {conversionRate}%
              </div>
              <p className="text-xs text-muted-foreground">
                Visitors who clicked Directions or Instagram
              </p>
            </div>
            <div className="pt-2 border-t border-border/40 flex items-center justify-between text-[11px] text-muted-foreground">
              <span>Total Actions:</span>
              <span className="font-semibold text-foreground">
                {totalActions.toLocaleString()} engagements
              </span>
            </div>
          </div>

        </div>

        {/* INTERACTIVE TRAFFIC & CONVERSION CHART */}
        <div className="rounded-2xl border border-border/80 bg-white p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="font-serif text-2xl text-gate-blue font-medium">Weekly Engagement Trends</h2>
              <p className="text-xs text-muted-foreground mt-0.5">
                Comparing pageviews, Instagram profile visits, and directions requests.
              </p>
            </div>
            <div className="flex items-center gap-5 text-xs font-medium">
              <span className="flex items-center gap-1.5 text-gate-blue">
                <span className="h-3 w-3 rounded-full bg-[#186bb0]" /> Visitors
              </span>
              <span className="flex items-center gap-1.5 text-bougainvillea">
                <span className="h-3 w-3 rounded-full bg-[#d92672]" /> Instagram
              </span>
              <span className="flex items-center gap-1.5 text-sun-gold">
                <span className="h-3 w-3 rounded-full bg-[#d97706]" /> Directions
              </span>
            </div>
          </div>

          <div className="h-72 w-full pt-4">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={analytics?.history || []} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="visitsGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#186bb0" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#186bb0" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="instaGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#d92672" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#d92672" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="dirGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#d97706" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#d97706" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1ece4" />
                <XAxis dataKey="date" stroke="#8c827a" fontSize={11} tickLine={false} />
                <YAxis stroke="#8c827a" fontSize={11} tickLine={false} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#ffffff",
                    borderRadius: "12px",
                    border: "1px solid #ece4d8",
                    fontSize: "12px",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                  }}
                />
                <Area type="monotone" dataKey="visits" name="Visits" stroke="#186bb0" strokeWidth={2.5} fillOpacity={1} fill="url(#visitsGrad)" />
                <Area type="monotone" dataKey="directions" name="Directions" stroke="#d97706" strokeWidth={2} fillOpacity={1} fill="url(#dirGrad)" />
                <Area type="monotone" dataKey="instagram" name="Instagram" stroke="#d92672" strokeWidth={2} fillOpacity={1} fill="url(#instaGrad)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* TWO-COLUMN LOWER SECTION: LIVE TESTING SIMULATOR & ACTIVITY LOG */}
        <div className="grid gap-8 lg:grid-cols-12">
          
          {/* Live Simulator for the Owner to test in real-time */}
          <div className="lg:col-span-5 rounded-2xl border border-border/80 bg-white p-6 sm:p-7 shadow-sm space-y-5">
            <div>
              <span className="eyebrow-pink text-[11px]">Real-Time Tester</span>
              <h3 className="font-serif text-2xl text-gate-blue font-medium mt-1">Live Click Simulator</h3>
              <p className="text-xs text-muted-foreground mt-1">
                Click these buttons to test the real-time counters and verify immediate updates.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <button
                onClick={() => trackVisit("/test")}
                className="group relative overflow-hidden w-full flex items-center justify-between p-3.5 rounded-xl border border-sky-300 bg-gradient-to-r from-sky-50/90 via-sky-50/40 to-white hover:border-sky-400 text-xs font-semibold text-gate-blue transition-all duration-300 hover:-translate-y-1 hover:shadow-md active:translate-y-0.5 active:scale-[0.99] cursor-pointer"
              >
                <span className="flex items-center gap-2">
                  <Users className="h-4 w-4 transition-transform group-hover:scale-115 text-gate-blue" /> Simulate Website Visit
                </span>
                <span className="rounded-full bg-white px-2.5 py-0.5 shadow-xs font-bold border border-sky-200 text-gate-blue transition-transform group-hover:scale-105">+1 Visit</span>
              </button>

              <button
                onClick={() => trackInstagramClick()}
                className="group relative overflow-hidden w-full flex items-center justify-between p-3.5 rounded-xl border border-pink-300 bg-gradient-to-r from-pink-50/90 via-pink-50/40 to-white hover:border-pink-400 text-xs font-semibold text-bougainvillea transition-all duration-300 hover:-translate-y-1 hover:shadow-md active:translate-y-0.5 active:scale-[0.99] cursor-pointer"
              >
                <span className="flex items-center gap-2">
                  <Instagram className="h-4 w-4 transition-transform group-hover:scale-120 group-hover:rotate-6 text-bougainvillea" /> Simulate Instagram Click
                </span>
                <span className="rounded-full bg-white px-2.5 py-0.5 shadow-xs font-bold border border-pink-200 text-bougainvillea transition-transform group-hover:scale-105">+1 Instagram</span>
              </button>

              <button
                onClick={() => trackDirectionsClick()}
                className="group relative overflow-hidden w-full flex items-center justify-between p-3.5 rounded-xl border border-amber-300 bg-gradient-to-r from-amber-50/90 via-amber-50/40 to-white hover:border-amber-400 text-xs font-semibold text-sun-gold transition-all duration-300 hover:-translate-y-1 hover:shadow-md active:translate-y-0.5 active:scale-[0.99] cursor-pointer"
              >
                <span className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 transition-transform group-hover:scale-120 group-hover:-translate-y-0.5 text-sun-gold" /> Simulate Directions Click
                </span>
                <span className="rounded-full bg-white px-2.5 py-0.5 shadow-xs font-bold border border-amber-200 text-sun-gold transition-transform group-hover:scale-105">+1 Directions</span>
              </button>
            </div>

            <div className="p-3.5 rounded-xl bg-cream/40 border border-border/60 text-[11px] text-muted-foreground flex items-start gap-2">
              <Sparkles className="h-4 w-4 text-bougainvillea shrink-0 mt-0.5" />
              <span>All clicks on the live site automatically increment these counters and record in the activity stream.</span>
            </div>
          </div>

          {/* Activity Log */}
          <div className="lg:col-span-7 rounded-2xl border border-border/80 bg-white p-6 sm:p-7 shadow-sm space-y-5">
            <div className="flex items-center justify-between">
              <div>
                <span className="eyebrow text-[11px]">Audit Trail</span>
                <h3 className="font-serif text-2xl text-gate-blue font-medium mt-1">Recent Visitor Stream</h3>
              </div>
              <span className="text-xs text-muted-foreground">
                {analytics?.recentEvents.length || 0} events recorded
              </span>
            </div>

            {(!analytics?.recentEvents || analytics.recentEvents.length === 0) ? (
              <div className="rounded-xl border border-dashed border-border p-8 text-center space-y-2">
                <div className="flex h-10 w-10 mx-auto items-center justify-center rounded-xl bg-cream/70 text-muted-foreground">
                  <Inbox className="h-5 w-5" />
                </div>
                <p className="text-xs font-medium text-foreground">No events recorded yet</p>
                <p className="text-[11px] text-muted-foreground max-w-sm mx-auto">
                  All counters are currently reset to 0. As visitors browse the site, click Instagram, or request directions, events will appear here in real time.
                </p>
              </div>
            ) : (
              <div className="space-y-2.5 max-h-[380px] overflow-y-auto pr-1">
                {analytics.recentEvents.map((ev) => {
                  const date = new Date(ev.timestamp);
                  const timeStr = date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" });

                  let icon = <Users className="h-3.5 w-3.5 text-gate-blue" />;
                  let badgeClass = "bg-sky-50 text-gate-blue";

                  if (ev.type === "instagram_click") {
                    icon = <Instagram className="h-3.5 w-3.5 text-bougainvillea" />;
                    badgeClass = "bg-pink-50 text-bougainvillea";
                  } else if (ev.type === "directions_click") {
                    icon = <MapPin className="h-3.5 w-3.5 text-sun-gold" />;
                    badgeClass = "bg-amber-50 text-sun-gold";
                  }

                  return (
                    <div
                      key={ev.id}
                      className="flex items-center justify-between p-3 rounded-xl border border-border/40 bg-background/40 hover:bg-background transition text-xs"
                    >
                      <div className="flex items-center gap-3">
                        <div className={`h-7 w-7 rounded-lg flex items-center justify-center shrink-0 ${badgeClass}`}>
                          {icon}
                        </div>
                        <span className="font-medium text-foreground">{ev.label}</span>
                      </div>
                      <span className="text-[11px] text-muted-foreground shrink-0 pl-2">{timeStr}</span>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

        </div>

      </main>
    </div>
  );
}
