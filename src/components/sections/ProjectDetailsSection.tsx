const ProjectDetailsSection = () => {
  return (
    <section className="py-20 bg-card/5">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Project Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-lg">R</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">ReuniFi</h3>
                <p className="text-sm text-muted-foreground">Alumni Management Platform</p>
              </div>
            </div>
            <p className="text-muted-foreground">
              Smart India Hackathon 2025 solution for centralized alumni data management and engagement.
            </p>
          </div>

          {/* Project Details */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Project Details</h4>
            <div className="space-y-3">
              <div>
                <span className="text-sm font-medium text-foreground">Problem Statement ID:</span>
                <p className="text-muted-foreground">25017</p>
              </div>
              <div>
                <span className="text-sm font-medium text-foreground">Theme:</span>
                <p className="text-muted-foreground">Smart Education</p>
              </div>
              <div>
                <span className="text-sm font-medium text-foreground">Category:</span>
                <p className="text-muted-foreground">Software</p>
              </div>
              <div>
                <span className="text-sm font-medium text-foreground">Team:</span>
                <p className="text-muted-foreground">Gulshan Prashar</p>
              </div>
            </div>
          </div>

          {/* Features */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Features</h4>
            <div className="space-y-2">
              <p className="text-muted-foreground">Alumni Onboarding</p>
              <p className="text-muted-foreground">Event Management</p>
              <p className="text-muted-foreground">Mentorship Matching</p>
              <p className="text-muted-foreground">Job Board</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            © 2025 ReuniFi - Smart India Hackathon 2025. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetailsSection;