import { motion } from "framer-motion";
import { Upload, FileText, Sparkles, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function ATSChecker() {
  const [loading, setLoading] = useState(false);
  const [score, setScore] = useState(null);

  const analyze = () => {
    setLoading(true);
    setTimeout(() => {
      setScore({
        overall: 86,
        keyword: 90,
        skills: 84,
        formatting: 88,
        readability: 82,
        sections: 87,
        missing: ["Docker", "AWS", "CI/CD", "Kubernetes"],
      });
      setLoading(false);
    }, 2200);
  };

  const Bar = ({ label, value }) => (
    <div className="space-y-1">
      <div className="flex justify-between text-sm">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="h-2 rounded-full bg-slate-700">
        <div className="h-2 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500"
             style={{ width: `${value}%` }} />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#312e81,transparent_40%),radial-gradient(circle_at_bottom,#0f766e,transparent_35%)] opacity-40" />

      <div className="relative mx-auto max-w-7xl px-6 py-12">
        <motion.h1
          initial={{opacity:0,y:20}}
          animate={{opacity:1,y:0}}
          className="text-center text-5xl font-black bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
          ATS Resume Checker
        </motion.h1>

        <p className="mt-4 text-center text-slate-300 max-w-3xl mx-auto">
          Upload your resume and compare it with a job description.
          <span className="font-semibold text-yellow-300"> AI analysis and backend integration are currently under development.</span>
        </p>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">

          <motion.div whileHover={{scale:1.02}}
            className="rounded-3xl border border-slate-700 bg-white/5 backdrop-blur-xl p-8">

            <h2 className="flex items-center gap-2 text-2xl font-bold">
              <Upload /> Upload Resume
            </h2>

            <label className="mt-6 flex h-60 cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-cyan-500 hover:bg-cyan-500/10 transition">
              <Upload size={42}/>
              <p className="mt-4 text-lg">Drag & Drop Resume</p>
              <p className="text-slate-400">PDF / DOCX</p>
              <input className="hidden" type="file"/>
            </label>

            <textarea
              rows="8"
              placeholder="Paste Job Description..."
              className="mt-6 w-full rounded-xl border border-slate-700 bg-slate-900 p-4 outline-none focus:border-cyan-500"/>

            <button
              onClick={analyze}
              className="mt-6 w-full rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 py-4 font-bold transition hover:scale-[1.02]">
              {loading ? "Analyzing Resume..." : "Analyze Resume"}
            </button>
          </motion.div>

          <motion.div
            initial={{opacity:0,x:30}}
            animate={{opacity:1,x:0}}
            className="rounded-3xl border border-slate-700 bg-white/5 backdrop-blur-xl p-8">

            {!score ? (
              <div className="flex h-full flex-col items-center justify-center text-center">
                <Sparkles size={70} className="text-cyan-400"/>
                <h3 className="mt-4 text-3xl font-bold">Ready for Analysis</h3>
                <p className="mt-3 text-slate-400">
                  Upload your resume and click Analyze.
                </p>
              </div>
            ) : (
              <>
                <div className="text-center">
                  <div className="mx-auto flex h-44 w-44 items-center justify-center rounded-full border-8 border-cyan-500 text-6xl font-black">
                    {score.overall}
                  </div>
                  <h2 className="mt-5 text-3xl font-bold">ATS Score</h2>
                  <p className="text-green-400">Excellent Match</p>
                </div>

                <div className="mt-8 space-y-4">
                  <Bar label="Keyword Match" value={score.keyword}/>
                  <Bar label="Skills" value={score.skills}/>
                  <Bar label="Formatting" value={score.formatting}/>
                  <Bar label="Readability" value={score.readability}/>
                  <Bar label="Resume Sections" value={score.sections}/>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-bold">Missing Keywords</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {score.missing.map((k)=>(
                      <span key={k}
                        className="rounded-full bg-red-500/20 px-4 py-2 text-red-300">
                        {k}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 rounded-xl bg-emerald-500/10 p-5">
                  <h3 className="mb-3 flex items-center gap-2 text-lg font-bold">
                    <CheckCircle2/> Suggestions
                  </h3>
                  <ul className="list-disc space-y-2 pl-6 text-slate-300">
                    <li>Add quantified achievements.</li>
                    <li>Include Docker & AWS skills.</li>
                    <li>Add Certifications section.</li>
                    <li>Improve professional summary.</li>
                    <li>Use more action verbs.</li>
                  </ul>
                </div>
              </>
            )}
          </motion.div>

        </div>

        <div className="mt-10 rounded-2xl border border-yellow-500/30 bg-yellow-500/10 p-6">
          <h3 className="font-bold text-yellow-300">🚧 Feature In Progress</h3>
          <p className="mt-2 text-slate-300">
            This frontend currently shows a demo ATS analysis. In the next phase,
            it will connect to a FastAPI backend for real PDF/DOCX parsing,
            AI-powered resume feedback, semantic job matching, and accurate ATS scoring.
          </p>
        </div>
      </div>
    </div>
  );
}
