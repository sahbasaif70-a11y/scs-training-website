import { useState, useEffect } from "react";
import {
  FilePdfOutlined,
  UserOutlined,
  PhoneOutlined,
  MailOutlined,
  SearchOutlined,
  ReloadOutlined,
  ClockCircleOutlined,
  EnvironmentOutlined,
  IdcardOutlined,
  LockOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { API_BASE_URL } from "../config/api";

interface AdmissionRecord {
  _id: string;
  firstName: string;
  lastName: string;
  mobile: string;
  email: string;
  city: string;
  cnic: string;
  gender: string;
  training: string;
  duration: string;
  message?: string;
  cvOriginalName?: string;
  cvFileName?: string;
  cvFilePath?: string;
  status: "pending" | "reviewed" | "contacted" | "enrolled";
  createdAt: string;
}

function Admin() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem("scs_admin_authenticated") === "true";
  });
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const [admissions, setAdmissions] = useState<AdmissionRecord[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      (loginEmail.toLowerCase() === "admin@scstrainings.com" || loginEmail.toLowerCase() === "admin") &&
      loginPassword === "scsadmin2025"
    ) {
      localStorage.setItem("scs_admin_authenticated", "true");
      setIsLoggedIn(true);
      setLoginError("");
    } else {
      setLoginError("Invalid Credentials! Try: admin@scstrainings.com / scsadmin2025");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("scs_admin_authenticated");
    setIsLoggedIn(false);
  };

  const fetchAdmissions = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE_URL}/api/admissions`);
      const result = await res.json();
      if (res.ok && result.success) {
        setAdmissions(result.data);
      }
    } catch (error) {
      console.error("Error fetching admissions:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      fetchAdmissions();
    }
  }, [isLoggedIn]);

  const filteredAdmissions = admissions.filter((item) => {
    const fullName = `${item.firstName} ${item.lastName}`.toLowerCase();
    const matchesSearch =
      fullName.includes(searchTerm.toLowerCase()) ||
      item.cnic.includes(searchTerm) ||
      item.training.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.mobile.includes(searchTerm);

    const matchesStatus =
      statusFilter === "all" || item.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  // If Admin is NOT logged in -> Show Login Screen
  if (!isLoggedIn) {
    return (
      <div className="flex min-h-[80vh] items-center justify-center bg-gray-100 px-4 py-12">
        <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl border border-gray-200">
          <div className="text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-theme text-3xl text-white shadow-md">
              <LockOutlined />
            </div>
            <h2 className="oswald-font mt-4 text-3xl font-bold text-gray-900 uppercase">
              Admin Login Portal
            </h2>
            <p className="mt-1 text-xs text-gray-500">
              Enter your credentials to access SCS Student Applications.
            </p>
          </div>

          {loginError && (
            <div className="mt-4 rounded-xl bg-red-50 p-3 text-center text-xs font-semibold text-red-600 border border-red-200">
              {loginError}
            </div>
          )}

          <form onSubmit={handleLogin} className="mt-6 space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                Admin Username / Email
              </label>
              <input
                type="text"
                required
                placeholder="admin@scstrainings.com"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                className="w-full rounded-xl border border-gray-300 p-3 text-sm text-gray-900 outline-none focus:ring-2 focus:ring-[var(--theme-primary)]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                required
                placeholder="••••••••"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                className="w-full rounded-xl border border-gray-300 p-3 text-sm text-gray-900 outline-none focus:ring-2 focus:ring-[var(--theme-primary)]"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-theme py-3.5 text-sm font-bold uppercase tracking-wider text-white hover:opacity-90 shadow-md cursor-pointer border-0 mt-2"
            >
              Access Dashboard
            </button>
          </form>

          <p className="mt-6 text-center text-[11px] text-gray-400 m-0">
            Default Credentials: <strong>admin@scstrainings.com</strong> / <strong>scsadmin2025</strong>
          </p>
        </div>
      </div>
    );
  }

  // Logged-in Admin Dashboard
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-slate-900 text-white p-6 rounded-2xl shadow-lg">
          <div>
            <h1 className="oswald-font text-3xl font-bold uppercase tracking-wider text-white m-0">
              SCS Admission Management Portal
            </h1>
            <p className="mt-1 text-xs text-gray-300 m-0">
              View student applications, download PDF CVs, and manage course enrollments.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={fetchAdmissions}
              className="flex items-center gap-2 rounded-xl bg-theme px-4 py-2.5 text-xs font-bold text-slate-900 hover:bg-amber-300 cursor-pointer border-0 shadow"
            >
              <ReloadOutlined spin={loading} />
              <span>Refresh</span>
            </button>

            <button
              onClick={handleLogout}
              className="flex items-center gap-1.5 rounded-xl bg-red-600 px-4 py-2.5 text-xs font-bold text-white hover:bg-red-700 cursor-pointer border-0 shadow"
            >
              <LogoutOutlined />
              <span>Logout</span>
            </button>
          </div>
        </div>

        {/* Filters & Search Bar */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-4 rounded-2xl shadow-sm border border-gray-200">
          <div className="relative w-full sm:w-80">
            <SearchOutlined className="absolute left-3.5 top-3.5 text-gray-400 text-sm" />
            <input
              type="text"
              placeholder="Search by Name, CNIC, Phone or Training..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-xl border border-gray-200 bg-gray-50 pl-10 pr-4 py-2.5 text-xs text-gray-900 outline-none focus:ring-2 focus:ring-[var(--theme-primary)]"
            />
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <span className="text-xs font-semibold text-gray-600 shrink-0">Filter Status:</span>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-xs font-semibold text-gray-800 outline-none cursor-pointer"
            >
              <option value="all">All Applications ({admissions.length})</option>
              <option value="pending">Pending</option>
              <option value="contacted">Contacted</option>
              <option value="enrolled">Enrolled</option>
            </select>
          </div>
        </div>

        {/* Admissions Table / List */}
        <div className="mt-6">
          {loading ? (
            <div className="flex items-center justify-center p-20 bg-white rounded-2xl shadow-sm border border-gray-200">
              <ClockCircleOutlined spin className="text-3xl text-theme" />
              <span className="ml-3 text-sm font-semibold text-gray-600">
                Loading student applications...
              </span>
            </div>
          ) : filteredAdmissions.length === 0 ? (
            <div className="p-16 text-center bg-white rounded-2xl shadow-sm border border-gray-200">
              <UserOutlined className="text-4xl text-gray-300" />
              <p className="mt-3 text-base font-bold text-gray-700 m-0">
                No admission applications found.
              </p>
              <p className="mt-1 text-xs text-gray-500 m-0">
                Ensure backend server is running on port 5000 or adjust your search filter.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredAdmissions.map((item) => (
                <div
                  key={item._id}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 transition-all hover:shadow-md"
                >
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-gray-100 pb-4">
                    <div>
                      <div className="flex items-center gap-3">
                        <h3 className="oswald-font text-2xl font-bold text-gray-900 m-0">
                          {item.firstName} {item.lastName}
                        </h3>
                        <span className="rounded-full bg-amber-50 px-3 py-0.5 text-xs font-bold text-theme border border-orange-100">
                          {item.gender}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 mt-1 m-0">
                        Applied on: {new Date(item.createdAt).toLocaleDateString("en-PK", { dateStyle: "medium" })}
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="rounded-xl bg-orange-100 px-4 py-1.5 text-xs font-bold text-theme border border-orange-200">
                        {item.training} ({item.duration})
                      </span>
                    </div>
                  </div>

                  {/* Student Specs Grid */}
                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs text-gray-700">
                    <div className="flex items-center gap-2">
                      <PhoneOutlined className="text-theme" />
                      <span><strong>Phone:</strong> {item.mobile}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <MailOutlined className="text-theme" />
                      <span><strong>Email:</strong> {item.email}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <IdcardOutlined className="text-theme" />
                      <span><strong>CNIC:</strong> {item.cnic}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <EnvironmentOutlined className="text-theme" />
                      <span><strong>City:</strong> {item.city}</span>
                    </div>
                  </div>

                  {/* PDF CV File Link Section */}
                  {item.cvFilePath ? (
                    <div className="mt-4 flex items-center justify-between rounded-xl bg-sky-50/80 p-3.5 border border-sky-100">
                      <div className="flex items-center gap-2.5">
                        <FilePdfOutlined className="text-xl text-red-500" />
                        <div>
                          <p className="text-xs font-bold text-slate-800 m-0">
                            Attached Resume / CV (PDF)
                          </p>
                          <p className="text-[11px] text-gray-500 m-0">
                            {item.cvOriginalName || item.cvFileName}
                          </p>
                        </div>
                      </div>

                      <a
                        href={`${API_BASE_URL}${item.cvFilePath}`}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-lg bg-theme px-4 py-1.5 text-xs font-bold text-white hover:opacity-90 no-underline shadow-sm"
                      >
                        View / Download PDF CV
                      </a>
                    </div>
                  ) : (
                    <div className="mt-4 text-xs text-gray-400 italic">
                      No CV file uploaded for this application.
                    </div>
                  )}

                  {/* Student Message if provided */}
                  {item.message && (
                    <div className="mt-3 text-xs bg-gray-50 p-3 rounded-lg border border-gray-100 text-gray-600">
                      <strong>Note / Message:</strong> "{item.message}"
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

export default Admin;
