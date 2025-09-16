import { Button } from "@/components/ui/enhanced-button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { DollarSign, Target, Users, Calendar, Heart, Award, TrendingUp } from "lucide-react";

const FundraisingSection = () => {
  const campaigns = [
    {
      id: 1,
      title: "New Engineering Building Fund",
      description: "Help us build a state-of-the-art engineering facility with cutting-edge labs and collaborative spaces.",
      goal: 5000000,
      raised: 3250000,
      donors: 1247,
      daysLeft: 45,
      category: "Infrastructure",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=200&fit=crop",
      featured: true,
      urgency: "high",
    },
    {
      id: 2,
      title: "Student Scholarship Fund",
      description: "Provide financial assistance to deserving students from underrepresented communities.",
      goal: 250000,
      raised: 187500,
      donors: 423,
      daysLeft: 22,
      category: "Scholarships",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=200&fit=crop",
      featured: false,
      urgency: "medium",
    },
    {
      id: 3,
      title: "Research Excellence Grant",
      description: "Fund groundbreaking research projects in AI, sustainability, and healthcare innovation.",
      goal: 750000,
      raised: 425000,
      donors: 287,
      daysLeft: 67,
      category: "Research",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=200&fit=crop",
      featured: false,
      urgency: "low",
    },
  ];

  const impactStats = [
    { icon: DollarSign, label: "Total Raised", value: "$12.5M", growth: "+23%" },
    { icon: Users, label: "Active Donors", value: "2,847", growth: "+15%" },
    { icon: Target, label: "Goals Achieved", value: "47", growth: "+8%" },
    { icon: Award, label: "Impact Projects", value: "156", growth: "+31%" },
  ];

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const getProgressPercentage = (raised: number, goal: number) => {
    return Math.round((raised / goal) * 100);
  };

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'high': return 'bg-destructive';
      case 'medium': return 'bg-secondary';
      default: return 'bg-accent';
    }
  };

  return (
    <section id="fundraising" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Alumni Fundraising Campaigns
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Support your alma mater's growth and help create opportunities for future generations.
          </p>
        </div>

        {/* Impact Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {impactStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card
                key={stat.label}
                className="p-6 text-center bg-gradient-card hover:shadow-glow transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm mb-2">
                  {stat.label}
                </div>
                <div className="flex items-center justify-center gap-1 text-xs text-accent">
                  <TrendingUp size={12} />
                  {stat.growth} this year
                </div>
              </Card>
            );
          })}
        </div>

        {/* Featured Campaign */}
        {campaigns.filter(c => c.featured).map((campaign) => (
          <Card key={campaign.id} className="mb-12 overflow-hidden bg-gradient-card shadow-glow">
            <div className="md:flex">
              <div className="md:w-1/3 relative">
                <img
                  src={campaign.image}
                  alt={campaign.title}
                  className="w-full h-48 md:h-full object-cover"
                />
                <Badge className="absolute top-3 left-3 bg-secondary text-secondary-foreground">
                  <Heart size={12} className="mr-1" />
                  Featured Campaign
                </Badge>
              </div>
              <div className="md:w-2/3 p-8">
                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="outline">{campaign.category}</Badge>
                  <Badge className={getUrgencyColor(campaign.urgency)}>
                    {campaign.daysLeft} days left
                  </Badge>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{campaign.title}</h3>
                <p className="text-muted-foreground mb-6 text-lg">{campaign.description}</p>
                
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-muted-foreground">Progress</span>
                    <span className="font-semibold">
                      {getProgressPercentage(campaign.raised, campaign.goal)}% Complete
                    </span>
                  </div>
                  <Progress 
                    value={getProgressPercentage(campaign.raised, campaign.goal)} 
                    className="h-3 mb-4"
                  />
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center md:text-left">
                    <div>
                      <div className="text-2xl font-bold text-primary">
                        {formatCurrency(campaign.raised)}
                      </div>
                      <div className="text-sm text-muted-foreground">Raised</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">
                        {formatCurrency(campaign.goal)}
                      </div>
                      <div className="text-sm text-muted-foreground">Goal</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-accent">
                        {campaign.donors}
                      </div>
                      <div className="text-sm text-muted-foreground">Donors</div>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <Button variant="gradient" size="lg">
                    Donate Now
                  </Button>
                  <Button variant="outline" size="lg">
                    Share Campaign
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        ))}

        {/* Other Campaigns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {campaigns.filter(c => !c.featured).map((campaign, index) => (
            <Card
              key={campaign.id}
              className="overflow-hidden bg-gradient-card hover:shadow-glow transition-all duration-300 hover:scale-[1.02] animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative">
                <img
                  src={campaign.image}
                  alt={campaign.title}
                  className="w-full h-48 object-cover"
                />
                <Badge className="absolute top-3 left-3" variant="secondary">
                  {campaign.category}
                </Badge>
                <Badge className={`absolute top-3 right-3 ${getUrgencyColor(campaign.urgency)} text-white`}>
                  {campaign.daysLeft} days
                </Badge>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{campaign.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {campaign.description}
                </p>
                
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-muted-foreground">
                      {getProgressPercentage(campaign.raised, campaign.goal)}% funded
                    </span>
                    <span className="text-sm font-medium">
                      {formatCurrency(campaign.raised)} raised
                    </span>
                  </div>
                  <Progress 
                    value={getProgressPercentage(campaign.raised, campaign.goal)} 
                    className="h-2"
                  />
                </div>
                
                <div className="flex justify-between items-center text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Target size={14} />
                    <span>{formatCurrency(campaign.goal)} goal</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users size={14} />
                    <span>{campaign.donors} donors</span>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button variant="hero" size="sm" className="flex-1">
                    Donate
                  </Button>
                  <Button variant="outline" size="sm">
                    Details
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <Card className="p-8 text-center bg-gradient-hero text-white">
          <h3 className="text-2xl font-bold mb-4">Start Your Own Campaign</h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Have a project that could benefit from alumni support? Create your own fundraising campaign and rally the community around your cause.
          </p>
          <Button variant="secondary" size="lg">
            Create Campaign
          </Button>
        </Card>
      </div>
    </section>
  );
};

export default FundraisingSection;
