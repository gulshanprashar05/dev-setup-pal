const ProjectDetailsSection = () => {
  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Project Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                <span className="text-blue-400 font-bold text-lg">R</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">ReuniFi</h3>
                <p className="text-sm text-slate-300">Alumni Management Platform</p>
              </div>
            </div>
            <p className="text-slate-300">
              Smart India Hackathon 2025 solution for centralized alumni data management and engagement.
            </p>
          </div>

          {/* Project Details */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Project Details</h4>
            <div className="space-y-3">
              <div>
                <span className="text-sm font-medium text-white">Problem Statement ID:</span>
                <p className="text-slate-300">25017</p>
              </div>
              <div>
                <span className="text-sm font-medium text-white">Theme:</span>
                <p className="text-slate-300">Smart Education</p>
              </div>
              <div>
                <span className="text-sm font-medium text-white">Category:</span>
                <p className="text-slate-300">Software</p>
              </div>
              <div>
                <span className="text-sm font-medium text-white">Team:</span>
                <p className="text-slate-300">AlumNexus</p>
              </div>
            </div>
          </div>

          {/* Features */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Features</h4>
            <div className="space-y-2">
              <p className="text-slate-300">Alumni Onboarding</p>
              <p className="text-slate-300">Event Management</p>
              <p className="text-slate-300">Mentorship Matching</p>
              <p className="text-slate-300">Job Board</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12 pt-8 border-t border-slate-700">
          <p className="text-sm text-slate-300">
            © 2025 ReuniFi - Smart India Hackathon 2025. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetailsSection;