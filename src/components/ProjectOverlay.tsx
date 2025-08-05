"use client";

import { X, Play, Plus } from "lucide-react";
import { useEffect, useState } from "react";

interface ProjectOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    tag: { text: string; color: string } | null;
    year: string;
    category: string;
    description: string;
    cast: string;
    location: string;
    challenge: string;
    details?: {
      expertise: string;
      role: string;
      timeline: string;
      team: string;
      tools: string;
    };
  } | null;
}

export default function ProjectOverlay({ isOpen, onClose, project }: ProjectOverlayProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState<'ux-research' | 'ui-design'>('ux-research');

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      const timer = setTimeout(() => setIsVisible(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const renderActionButtons = () => {
    if (project?.title === "Walmart/Sams Club Pays and Benefit Application") {
      return (
        <div className="flex gap-3 mb-6">
          <button className="flex items-center space-x-2 bg-white text-black px-4 py-2 rounded-md font-semibold hover:bg-gray-200 transition-colors">
            <Play size={16} />
            <span>Figma Prototype</span>
          </button>
        </div>
      );
    }

    if (project?.title === "Walmart Manager hub") {
      return (
        <div className="flex gap-3 mb-6">
          <button className="flex items-center space-x-2 bg-white text-black px-4 py-2 rounded-md font-semibold hover:bg-gray-200 transition-colors">
            <Play size={16} />
            <span>Figma Prototype</span>
          </button>
        </div>
      );
    }

    if (project?.title === "Redefining CVS Digital Design System") {
      return (
        <div className="flex gap-3 mb-6">
          <button className="flex items-center space-x-2 bg-white text-black px-4 py-2 rounded-md font-semibold hover:bg-gray-200 transition-colors">
            <Play size={16} />
            <span>Figma Prototype</span>
          </button>
        </div>
      );
    }

    if (project?.title === "Prudentials Design System - Evolution") {
      return null; // No buttons for this project
    }

    if (project?.title === "Prudential Homepage Redesign") {
      return (
        <div className="flex gap-3 mb-6">
          <button className="flex items-center space-x-2 bg-white text-black px-4 py-2 rounded-md font-semibold hover:bg-gray-200 transition-colors">
            <Play size={16} />
            <span>Figma prototype</span>
          </button>
        </div>
      );
    }

    if (project?.title === "Prudential Financial Wellness Assessment") {
      return (
        <div className="flex gap-3 mb-6">
          <button className="flex items-center space-x-2 bg-white text-black px-4 py-2 rounded-md font-semibold hover:bg-gray-200 transition-colors">
            <Play size={16} />
            <span>Figma Prototype</span>
          </button>
        </div>
      );
    }

    if (project?.title === "NCR Marketplace") {
      return (
        <div className="flex gap-3 mb-6">
          <button className="flex items-center space-x-2 bg-white text-black px-4 py-2 rounded-md font-semibold hover:bg-gray-200 transition-colors">
            <Play size={16} />
            <span>Figma prototype</span>
          </button>
        </div>
      );
    }

    if (project?.title === "Creating a design system for Sweepr") {
      return (
        <div className="flex gap-3 mb-6">
          <button className="flex items-center space-x-2 bg-white text-black px-4 py-2 rounded-md font-semibold hover:bg-gray-200 transition-colors">
            <Play size={16} />
            <span>Figma prototype</span>
          </button>
        </div>
      );
    }

    if (project?.title === "Creating a Fitness App (Coachme)") {
      return (
        <div className="flex gap-3 mb-6">
          <button className="flex items-center space-x-2 bg-white text-black px-4 py-2 rounded-md font-semibold hover:bg-gray-200 transition-colors">
            <Play size={16} />
            <span>Figma prototype</span>
          </button>
        </div>
      );
    }

    // Default action buttons for all other projects
    return (
      <div className="flex gap-3 mb-6">
        <button className="flex items-center space-x-2 bg-white text-black px-4 py-2 rounded-md font-semibold hover:bg-gray-200 transition-colors">
          <Play size={16} />
          <span>Restart Video</span>
        </button>
        <button className="flex items-center space-x-2 bg-black/50 border border-white text-white px-4 py-2 rounded-md font-semibold hover:bg-black/70 transition-colors">
          <Plus size={16} />
          <span>Add to List</span>
        </button>
      </div>
    );
  };

  const renderStatusRow = () => {
    if (project?.title === "Walmart/Sams Club Pays and Benefit Application" || 
        project?.title === "Walmart Manager hub" || 
        project?.title === "Redefining CVS Digital Design System" ||
        project?.title === "Prudentials Design System - Evolution" ||
        project?.title === "Prudential Homepage Redesign" ||
        project?.title === "Prudential Financial Wellness Assessment" ||
        project?.title === "NCR Marketplace" ||
        project?.title === "Creating a design system for Sweepr" ||
        project?.title === "Creating a Fitness App (Coachme)") {
      return null; // Don't render status row for these projects
    }

    // Default status row for all other projects
    return (
      <div className="flex items-center gap-4 mb-6">
        <span className="text-green-500 font-semibold">Live in Production</span>
        <span className="text-white">{project?.year}</span>
        <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm">
          {project?.category}
        </span>
      </div>
    );
  };

  const renderNCRMarketplaceUXResearchTab = () => {
    return (
      <div className="space-y-6">
        <div>
          <p className="text-sm text-gray-400 mb-2">Discover</p>
          <h3 className="text-xl font-bold text-white mb-3">Quantitative Analysis</h3>
          <p className="text-gray-300 leading-relaxed">
            I interviewed both Restaurant IT Managers and restaurant owners to understand the challenges they face in integrating multiple platforms. IT managers emphasized the lack of centralized tools, while owners highlighted how operational complexity affected staff training and customer satisfaction.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-white mb-3">Personas</h3>
          <div className="bg-gray-900 p-4 rounded-lg">
            <p className="text-gray-400 text-sm italic">(images below)</p>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold text-white mb-3">Competitive Analysis</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            After mapping out the sitemap for the NCR Restaurant Marketplace, we turned our focus to competitive analysis to draw inspiration for our platform. By examining established marketplaces like Shopify and ADP, we gathered insights to refine our landing page and enhance the functionality of our catalog, ensuring it serves as a one-stop hub for third-party integrations and product discovery tailored to our users&apos; needs.
          </p>
          <div className="bg-gray-900 p-4 rounded-lg">
            <p className="text-gray-400 text-sm italic">(image here)</p>
          </div>
        </div>

        <div>
          <p className="text-sm text-gray-400 mb-2">Define</p>
          <h3 className="text-xl font-bold text-white mb-3">How Might We (HMW)</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>How might we streamline restaurant operations by consolidating third-party platforms into a unified system?</li>
            <li>How might we improve onboarding experiences for vendors with varying technical capabilities?</li>
          </ul>
        </div>

        <div>
          <p className="text-sm text-gray-400 mb-2">Ideate</p>
          <h3 className="text-xl font-bold text-white mb-3">Sitemap</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            With a deep understanding of user challenges and persona-driven insights in hand, we transition into the ideation phase where we structure our solution. A meticulously crafted sitemap is the next step, laying the foundation for a user-centric NCR Marketplace that streamlines and simplifies the digital experience for restaurant owners and IT managers.
          </p>
          <div className="bg-gray-900 p-4 rounded-lg">
            <p className="text-gray-400 text-sm italic">(image below)</p>
          </div>
        </div>
      </div>
    );
  };

  const renderNCRMarketplaceUIDesignTab = () => {
    return (
      <div className="space-y-6">
        <div>
          <p className="text-sm text-gray-400 mb-2">Wireframe / Prototype</p>
          <h3 className="text-xl font-bold text-white mb-3">Style Guide / Design System</h3>
          <p className="text-gray-300 leading-relaxed">
            Showcase all of the reusable components and color palette used in the NCR Marketplace.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-white mb-3">Low Fidelity</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            Moving into the low-fidelity prototyping stage of the NCR Restaurant Marketplace case study, we leverage the insights garnered from our competitive analysis to create a foundational blueprint for our platform.
          </p>
          <div className="bg-gray-900 p-4 rounded-lg">
            <p className="text-gray-400 text-sm italic">(image here)</p>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold text-white mb-3">High Fidelity</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            In the progression from low-fidelity to high-fidelity wireframes for the NCR marketplace, we incorporated stakeholder feedback to refine and finalize our designs. The high-fidelity wireframes now offer a detailed and polished visual blueprint, ready to guide the development of a seamless and functional marketplace interface.
          </p>
          <div className="bg-gray-900 p-4 rounded-lg">
            <p className="text-gray-400 text-sm italic">(images)</p>
          </div>
        </div>
      </div>
    );
  };

  const renderNCRMarketplaceContent = () => {
    return (
      <div className="lg:col-span-2 space-y-6">
        <div>
          <h3 className="text-xl font-bold text-white mb-3">Intro</h3>
          <p className="text-gray-300 leading-relaxed">
            As the Design Lead, my responsibility was to conceptualize and design the NCR Marketplace, a comprehensive platform tailored for restaurant vendors. The core objective of the NCR Marketplace was to streamline the integration of various third-party applications, such as Uber Eats, DoorDash, Postmates, and many others, into a single, cohesive platform.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-white mb-3">Problem</h3>
          <p className="text-gray-300 leading-relaxed">
            As the Design Lead for the NCR Marketplace project, I identified a set of critical challenges faced by restaurant vendors in managing multiple third-party applications:
          </p>
          <div className="mt-4 space-y-4">
            <div>
              <h4 className="font-bold text-white mb-2">Fragmented Digital Operations</h4>
              <p className="text-gray-300 leading-relaxed">
                Restaurant vendors struggled with the complexity of using various independent digital services, such as Uber Eats, DoorDash, and Postmates. This fragmentation led to operational inefficiencies and increased management overhead.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-2">User Experience Consistency</h4>
              <p className="text-gray-300 leading-relaxed">
                The disparate nature of these third-party applications often resulted in an inconsistent user experience for both the restaurant staff and customers, potentially impacting service quality.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-2">Integration Complexities</h4>
              <p className="text-gray-300 leading-relaxed">
                The technical challenge of integrating multiple applications into a restaurant&apos;s existing system posed significant hurdles, often requiring extensive time and resources.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold text-white mb-3">Solution</h3>
          <p className="text-gray-300 leading-relaxed">
            As the Design Lead for the NCR Marketplace project, I proposed a centralized platform to unify fragmented third-party services like Uber Eats, DoorDash, and Postmates into a single operational system. This solution aimed to reduce cognitive load and streamline workflows for restaurant vendors. I introduced a consistent UI framework to improve usability across vendor touchpoints and focused on creating a modular design system that would accommodate future integrations with minimal complexity. Collaborating closely with engineering, I helped define a scalable integration model to ensure smoother onboarding and adaptability to different restaurant setups.
          </p>
        </div>
        
        {/* Tab Navigation */}
        <div className="border-b border-gray-700">
          <div className="flex space-x-8">
            <button
              onClick={() => setActiveTab('ux-research')}
              className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors cursor-pointer ${
                activeTab === 'ux-research'
                  ? 'border-white text-white'
                  : 'border-transparent text-gray-400 hover:text-gray-300'
              }`}
            >
              UX Research
            </button>
            <button
              onClick={() => setActiveTab('ui-design')}
              className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors cursor-pointer ${
                activeTab === 'ui-design'
                  ? 'border-white text-white'
                  : 'border-transparent text-gray-400 hover:text-gray-300'
              }`}
            >
              UI Design
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="pt-4">
          {activeTab === 'ux-research' ? renderNCRMarketplaceUXResearchTab() : renderNCRMarketplaceUIDesignTab()}
        </div>

        {/* Universal Testing Section */}
        <div>
          <h3 className="text-xl font-bold text-white mb-3">Testing</h3>
          <h4 className="font-bold text-white mb-2">User Testing</h4>
          <p className="text-gray-300 leading-relaxed">
            I conducted testing sessions using UserZoom in collaboration with our internal UX researcher. We tested the prototype with 12 restaurant operators and IT personnel. Key insights revealed strong demand for a unified dashboard, preference for minimal training requirements, and high satisfaction with real-time order syncing between platforms.
          </p>
        </div>

        {/* Universal Results Section */}
        <div>
          <h3 className="text-xl font-bold text-white mb-3">Results</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>30% reduction in time spent toggling between third-party tools</li>
            <li>2x faster onboarding for new vendors</li>
            <li>15% increase in vendor satisfaction scores post-implementation</li>
          </ul>
        </div>
      </div>
    );
  };

  const renderMetadata = () => {
    if (project?.title === "Walmart/Sams Club Pays and Benefit Application" && project?.details) {
      return (
        <div className="space-y-4">
          <div>
            <h4 className="font-bold text-white mb-1">Expertise</h4>
            <p className="text-gray-300 text-sm">{project.details.expertise}</p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-1">Role</h4>
            <p className="text-gray-300 text-sm">{project.details.role}</p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-1">Timeline</h4>
            <p className="text-gray-300 text-sm">{project.details.timeline}</p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-1">Team</h4>
            <p className="text-gray-300 text-sm">{project.details.team}</p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-1">Tools</h4>
            <p className="text-gray-300 text-sm">{project.details.tools}</p>
          </div>
        </div>
      );
    }

    if (project?.title === "Walmart Manager hub") {
      return (
        <div className="space-y-4">
          <div>
            <h4 className="font-bold text-white mb-1">Expertise</h4>
            <p className="text-gray-300 text-sm">Designing wireframe, conducting UX Research</p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-1">Role</h4>
            <p className="text-gray-300 text-sm">Senior UX Designer</p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-1">Timeline</h4>
            <p className="text-gray-300 text-sm">April 2024 – January 2025</p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-1">Team</h4>
            <p className="text-gray-300 text-sm">1 Designer, 3 Developers</p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-1">Tools</h4>
            <p className="text-gray-300 text-sm">Figma, Miro, UserTesting.com, Adobe After Effects</p>
          </div>
        </div>
      );
    }

    if (project?.title === "Redefining CVS Digital Design System") {
      return (
        <div className="space-y-4">
          <div>
            <h4 className="font-bold text-white mb-1">Role</h4>
            <p className="text-gray-300 text-sm">Senior Product Designer</p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-1">Team</h4>
            <p className="text-gray-300 text-sm">3 Design systems engineers, 1 Product Designer, 1 Product Manager</p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-1">Tools</h4>
            <p className="text-gray-300 text-sm">Zeroheight, UserZoom, Miro, Figma, Storybook, Adobe Illustrator</p>
          </div>
        </div>
      );
    }

    if (project?.title === "Prudentials Design System - Evolution") {
      return (
        <div className="space-y-4">
          <div>
            <h4 className="font-bold text-white mb-1">Role</h4>
            <p className="text-gray-300 text-sm">Senior UX Designer, Design and Content Lead</p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-1">Team</h4>
            <p className="text-gray-300 text-sm">1 Designer, 3 Developers</p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-1">Timeline</h4>
            <p className="text-gray-300 text-sm">May 2019 – February 2023</p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-1">Tools</h4>
            <p className="text-gray-300 text-sm">Figma, Airtable, Zeroheight, Miro</p>
          </div>
        </div>
      );
    }

    if (project?.title === "Prudential Homepage Redesign") {
      return (
        <div className="space-y-4">
          <div>
            <h4 className="font-bold text-white mb-1">Expertise</h4>
            <p className="text-gray-300 text-sm">Designing wireframes, Conducting UX Research</p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-1">Role</h4>
            <p className="text-gray-300 text-sm">Senior UX Designer</p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-1">Timeline</h4>
            <p className="text-gray-300 text-sm">Nov 2019 – May 2020</p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-1">Team</h4>
            <p className="text-gray-300 text-sm">1 Designers, 3 Developers, product manager</p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-1">Tools</h4>
            <p className="text-gray-300 text-sm">Figma, Miro, UserTesting</p>
          </div>
        </div>
      );
    }

    if (project?.title === "Prudential Financial Wellness Assessment") {
      return (
        <div className="space-y-4">
          <div>
            <h4 className="font-bold text-white mb-1">Role</h4>
            <p className="text-gray-300 text-sm">Design Lead</p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-1">Team</h4>
            <p className="text-gray-300 text-sm">1 Designer, 3 Developers</p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-1">Timeline</h4>
            <p className="text-gray-300 text-sm">2022</p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-1">Tools</h4>
            <p className="text-gray-300 text-sm">Figma, UserZoom, Evolution Design System</p>
          </div>
        </div>
      );
    }

    if (project?.title === "NCR Marketplace") {
      return (
        <div className="space-y-4">
          <div>
            <h4 className="font-bold text-white mb-1">Role</h4>
            <p className="text-gray-300 text-sm">Design Lead</p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-1">Team</h4>
            <p className="text-gray-300 text-sm">1 Designer, 3 Developers</p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-1">Timeline</h4>
            <p className="text-gray-300 text-sm">2021</p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-1">Tools</h4>
            <p className="text-gray-300 text-sm">Figma, UserZoom, Design System</p>
          </div>
        </div>
      );
    }

    if (project?.title === "Creating a design system for Sweepr") {
      return (
        <div className="space-y-4">
          <div>
            <h4 className="font-bold text-white mb-1">Expertise</h4>
            <p className="text-gray-300 text-sm">Design system, UX</p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-1">Platform</h4>
            <p className="text-gray-300 text-sm">Web</p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-1">Role</h4>
            <p className="text-gray-300 text-sm">Product Designer</p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-1">Year</h4>
            <p className="text-gray-300 text-sm">2017 – 2018</p>
          </div>
        </div>
      );
    }

    if (project?.title === "Creating a Fitness App (Coachme)") {
      return (
        <div className="space-y-4">
          <div>
            <h4 className="font-bold text-white mb-1">Expertise</h4>
            <p className="text-gray-300 text-sm">Designing Wireframes,<br />Conducted Research, Usability testing</p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-1">Role</h4>
            <p className="text-gray-300 text-sm">UX Designer</p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-1">Timeline</h4>
            <p className="text-gray-300 text-sm">Sep 2016 – March 2017</p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-1">Team</h4>
            <p className="text-gray-300 text-sm">1 Designer, 2 Developers</p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-1">Tools</h4>
            <p className="text-gray-300 text-sm">Figma, Usertesting</p>
          </div>
        </div>
      );
    }

    // Default metadata layout for all other projects
    return (
      <div className="space-y-4">
        <div>
          <h4 className="font-bold text-white mb-1">Cast</h4>
          <p className="text-gray-300">{project?.cast}</p>
        </div>
        <div>
          <h4 className="font-bold text-white mb-1">Location</h4>
          <p className="text-gray-300">{project?.location}</p>
        </div>
        <div>
          <h4 className="font-bold text-white mb-1">The Challenge</h4>
          <p className="text-gray-300">{project?.challenge}</p>
        </div>
      </div>
    );
  };

  const renderUXResearchTab = () => {
    return (
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-bold text-white mb-3">UX Research Content</h3>
          <p className="text-gray-300 leading-relaxed">
            UX Research content for default projects.
          </p>
        </div>
      </div>
    );
  };

  const renderUIDesignTab = () => {
    return (
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-bold text-white mb-3">UI Design Content</h3>
          <p className="text-gray-300 leading-relaxed">
            UI Design content for default projects.
          </p>
        </div>
      </div>
    );
  };

  const renderWalmartManagerContent = () => {
    return (
      <div className="lg:col-span-2 space-y-6">
        <div>
          <h3 className="text-xl font-bold text-white mb-3">Walmart Manager Hub Content</h3>
          <p className="text-gray-300 leading-relaxed">
            Content for Walmart Manager Hub project.
          </p>
        </div>
      </div>
    );
  };

  const renderCVSContent = () => {
    return (
      <div className="lg:col-span-2 space-y-6">
        <div>
          <h3 className="text-xl font-bold text-white mb-3">CVS Design System Content</h3>
          <p className="text-gray-300 leading-relaxed">
            Content for CVS Design System project.
          </p>
        </div>
      </div>
    );
  };

  const renderPrudentialsContent = () => {
    return (
      <div className="lg:col-span-2 space-y-6">
        <div>
          <h3 className="text-xl font-bold text-white mb-3">Prudentials Design System Content</h3>
          <p className="text-gray-300 leading-relaxed">
            Content for Prudentials Design System project.
          </p>
        </div>
      </div>
    );
  };

  const renderPrudentialHomepageContent = () => {
    return (
      <div className="lg:col-span-2 space-y-6">
        <div>
          <h3 className="text-xl font-bold text-white mb-3">Prudential Homepage Content</h3>
          <p className="text-gray-300 leading-relaxed">
            Content for Prudential Homepage project.
          </p>
        </div>
      </div>
    );
  };

  const renderPrudentialWellnessContent = () => {
    return (
      <div className="lg:col-span-2 space-y-6">
        <div>
          <h3 className="text-xl font-bold text-white mb-3">Prudential Wellness Content</h3>
          <p className="text-gray-300 leading-relaxed">
            Content for Prudential Wellness project.
          </p>
        </div>
      </div>
    );
  };

  const renderSweeprContent = () => {
    return (
      <div className="lg:col-span-2 space-y-6">
        <div>
          <h3 className="text-xl font-bold text-white mb-3">Intro</h3>
          <p className="text-gray-300 leading-relaxed">
            Had the opportunity to work at Sweepr and help to create a design system to align their suite of web apps.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-white mb-3">Problem</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            When I first joined, Sweepr had invested in four web apps:
          </p>
          <div className="bg-gray-900 p-4 rounded-lg">
            <p className="text-gray-400 text-sm italic">(images here)</p>
          </div>
          <p className="text-gray-300 leading-relaxed mt-4">
            The problems here were the classic case of designing multiple products without a centralized design system:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-300 mt-4">
            <li>Inconsistent styling, design language & patterns across the different products</li>
            <li>More time spent on designing new components and patterns, and less time spent solving actual product problems</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold text-white mb-3">Design Audit</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            We carried out a design audit on all of the existing products to get a sense of the polarity and inconsistencies between each of them.
          </p>
          <div className="bg-gray-900 p-4 rounded-lg">
            <p className="text-gray-400 text-sm italic">(images here)</p>
          </div>
          <p className="text-gray-300 leading-relaxed mt-4">
            It also provided us with data on which components were used most frequently, allowing us to determine the elements that should be focused on first.
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-400 mb-2">Foundations</p>
          <h3 className="text-xl font-bold text-white mb-3">Font Family</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            Typography is critical. We researched and trialed several super families and settled on Inter for its readability, versatility, and OpenType features.
          </p>
          <div className="bg-gray-900 p-4 rounded-lg">
            <p className="text-gray-400 text-sm italic">(image)</p>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold text-white mb-3">Building a Colour Palette</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            We defined the palette by classifying:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-300 mb-4">
            <li>Primary or accent colors</li>
            <li>State colors (success, info, error, warning)</li>
            <li>Secondary colors</li>
          </ul>
          <div className="bg-gray-900 p-4 rounded-lg">
            <p className="text-gray-400 text-sm italic">(images)</p>
          </div>
          <p className="text-gray-300 leading-relaxed mt-4">
            Each base color was extended into 9 accents (e.g., green-100 to green-1000), and WCAG compliance was marked under each (e.g., AA, AAA).
          </p>
          <p className="text-gray-300 leading-relaxed mt-2 text-sm text-gray-400">
            (below image)
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-400 mb-2">Components</p>
          <h3 className="text-xl font-bold text-white mb-3">Creating Components</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            The audit gave us a list of needed redesigns. I also reviewed other major design systems to add missing but essential components.
          </p>
          <div className="bg-gray-900 p-4 rounded-lg">
            <p className="text-gray-400 text-sm italic">(images)</p>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold text-white mb-3">Adding Documentation for Developers</h3>
          <p className="text-gray-300 leading-relaxed">
            Figma is great for designers but inaccessible to devs in practice. We created internal docs with best practices, code snippets, and linked assets to improve implementation efficiency.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-white mb-3">Results</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            This system helped Sweepr significantly:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>40% faster component development</li>
            <li>60% reduction in duplicated design work</li>
            <li>Improved cross-team consistency and delivery timelines</li>
          </ul>
        </div>
      </div>
    );
  };

  const renderCoachmeUXResearchTab = () => {
    return (
      <div className="space-y-6">
        <div>
          <p className="text-sm text-gray-400 mb-2">Discover</p>
          <h3 className="text-xl font-bold text-white mb-3">Qualitative Analysis</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            I interviewed personal trainers to understand their struggles. Sample feedback quotes:
          </p>
          <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-orange-500">
            <p className="text-gray-300 italic">&ldquo;I know how to train people, but I don&apos;t know how to market myself.&rdquo;</p>
            <p className="text-gray-300 italic mt-2">&ldquo;I&apos;m tired of competing with influencers. I need a way to stand out.&rdquo;</p>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold text-white mb-3">Persona</h3>
          <div className="bg-gray-900 p-4 rounded-lg">
            <p className="text-gray-400 text-sm italic">(images will be added here)</p>
          </div>
        </div>

        <div>
          <p className="text-sm text-gray-400 mb-2">Define</p>
          <h3 className="text-xl font-bold text-white mb-3">How Might We (HMW)</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>How might we help trainers grow their online presence without needing marketing experience?</li>
            <li>How might we simplify client acquisition using social content and engagement tools?</li>
          </ul>
        </div>

        <div>
          <p className="text-sm text-gray-400 mb-2">Ideate</p>
          <h3 className="text-xl font-bold text-white mb-3">Sitemap</h3>
          <div className="bg-gray-900 p-4 rounded-lg">
            <p className="text-gray-400 text-sm italic">(image here)</p>
          </div>
          <p className="text-gray-300 leading-relaxed mt-4">
            A clear structure outlining onboarding, course library, trainer profile setup, and booking/payment flows was crafted to streamline the user journey.
          </p>
        </div>
      </div>
    );
  };

  const renderCoachmeUIDesignTab = () => {
    return (
      <div className="space-y-6">
        <div>
          <p className="text-sm text-gray-400 mb-2">Wireframes & Prototype</p>
          <h3 className="text-xl font-bold text-white mb-3">Scoping Out the MVP</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            Once I was done with the personas and had the idea of the problem that I wanted to solve, I discussed with the client to define our MVP. We decided to have the following features in our MVP:
          </p>
          <div className="bg-gray-900 p-4 rounded-lg">
            <p className="text-gray-400 text-sm italic">(image here)</p>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold text-white mb-3">Sketches</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            Early sketches allowed me to iterate rapidly on layout, user flow, and prioritization of features.
          </p>
          <div className="bg-gray-900 p-4 rounded-lg">
            <p className="text-gray-400 text-sm italic">(images here)</p>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold text-white mb-3">High Fidelity</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            Sketching provided me with a clear idea of the features and direction that we needed to go to. So, I started prototyping in Figma and came up with these designs. We decided on a dark theme with orange as our primary color as these were the existing brand colors.
          </p>
          <div className="bg-gray-900 p-4 rounded-lg">
            <p className="text-gray-400 text-sm italic">(images go here)</p>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold text-white mb-3">Prototype</h3>
          <div className="flex gap-3">
            <button className="flex items-center space-x-2 bg-orange-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-orange-700 transition-colors">
              <span>Figma web prototype</span>
            </button>
            <button className="flex items-center space-x-2 bg-orange-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-orange-700 transition-colors">
              <span>Figma mobile prototype</span>
            </button>
          </div>
        </div>
      </div>
    );
  };

  const renderCoachmeContent = () => {
    return (
      <div className="lg:col-span-2 space-y-6">
        <div>
          <h3 className="text-xl font-bold text-white mb-3">Intro</h3>
          <p className="text-gray-300 leading-relaxed">
            In my role as Design Lead, I focused on creating a user-friendly and visually appealing Coachme mobile app, geared specifically towards empowering personal trainers. The design emphasizes easy navigation and interactive elements that facilitate trainers in leveraging social media to attract high-value clients. By incorporating comprehensive courses within the app, we enable trainers to master self-promotion and client-acquisition skills, essential in today&apos;s competitive fitness market.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-white mb-3">Problem Statement</h3>
          <p className="text-gray-300 leading-relaxed">
            Personal trainers often struggle to attract high-ticket clients, primarily due to gaps in self-promotion and effective marketing skills. Coachme, a mobile application designed to bridge this gap, offers an innovative solution. It provides trainers with the tools and knowledge to effectively market themselves on social media and sell their services, transforming the way they connect with and secure high-value clients. Coachme stands as a game-changer in the fitness industry, equipping trainers with the strategies needed to elevate their business in a digital-first world.
          </p>
        </div>
        
        {/* Tab Navigation */}
        <div className="border-b border-gray-700">
          <div className="flex space-x-8">
            <button
              onClick={() => setActiveTab('ux-research')}
              className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors cursor-pointer ${
                activeTab === 'ux-research'
                  ? 'border-white text-white'
                  : 'border-transparent text-gray-400 hover:text-gray-300'
              }`}
            >
              UX Research
            </button>
            <button
              onClick={() => setActiveTab('ui-design')}
              className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors cursor-pointer ${
                activeTab === 'ui-design'
                  ? 'border-white text-white'
                  : 'border-transparent text-gray-400 hover:text-gray-300'
              }`}
            >
              UI Design
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="pt-4">
          {activeTab === 'ux-research' ? renderCoachmeUXResearchTab() : renderCoachmeUIDesignTab()}
        </div>

        {/* Universal Testing Section */}
        <div>
          <h3 className="text-xl font-bold text-white mb-3">Testing</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            We conducted usability testing using UserTesting.com. Participants included 8 personal trainers across the US and Canada.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">Sample quotes:</p>
          <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-orange-500">
            <p className="text-gray-300 italic">&ldquo;This is the first app that actually gets how we work.&rdquo;</p>
            <p className="text-gray-300 italic mt-2">&ldquo;The dark theme looks awesome and feels premium.&rdquo;</p>
          </div>
        </div>

        {/* Universal Results Section */}
        <div>
          <h3 className="text-xl font-bold text-white mb-3">Result</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>40% increase in engagement during onboarding phase</li>
            <li>Reduced trainer drop-off rate by 25%</li>
            <li>Helped 20+ trainers sign their first high-ticket client within 3 weeks</li>
          </ul>
        </div>
      </div>
    );
  };

  const renderDescription = () => {
    if (project?.title === "Walmart/Sams Club Pays and Benefit Application") {
      return (
        <div className="lg:col-span-2 space-y-6">
          <div>
            <h3 className="text-xl font-bold text-white mb-3">Intro</h3>
            <p className="text-gray-300 leading-relaxed">
              As a Senior UX Designer, I led the redesign of the Walmart Pay & Benefits application, ensuring a seamless and intuitive experience for associates. My primary focus was to enhance benefit awareness, streamline access to compensation details, and improve engagement through a user-friendly and scalable design system.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-3">Problem</h3>
            <p className="text-gray-300 leading-relaxed">
              Walmart and Sam&apos;s Club associates currently use Workday to access their pay and benefits, but the experience is fragmented, generic, and difficult to navigate. Associates often don&apos;t understand the full value of their compensation packages due to poor UI, technical language, and a lack of role-specific personalization. This contributes to missed benefits, frustration, and turnover.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-3">Solution</h3>
            <p className="text-gray-300 leading-relaxed">
              Creating a modern, mobile-first experience within the Me@ app that personalizes compensation and benefits based on associate role, employment type, and activity. This experience should integrate pay + benefits into a unified, intuitive view, improving transparency, usage, and employee satisfaction across iOS and Android devices.
            </p>
          </div>
          
          {/* Tab Navigation */}
          <div className="border-b border-gray-700">
            <div className="flex space-x-8">
              <button
                onClick={() => setActiveTab('ux-research')}
                className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors cursor-pointer ${
                  activeTab === 'ux-research'
                    ? 'border-white text-white'
                    : 'border-transparent text-gray-400 hover:text-gray-300'
                }`}
              >
                UX Research
              </button>
              <button
                onClick={() => setActiveTab('ui-design')}
                className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors cursor-pointer ${
                  activeTab === 'ui-design'
                    ? 'border-white text-white'
                    : 'border-transparent text-gray-400 hover:text-gray-300'
                }`}
              >
                UI Design
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="pt-4">
            {activeTab === 'ux-research' ? renderUXResearchTab() : renderUIDesignTab()}
          </div>

          {/* Universal Results Section */}
          <div>
            <h3 className="text-xl font-bold text-white mb-3">Results</h3>
            <p className="text-gray-300 leading-relaxed">
              The redesigned Walmart Pay & Benefits application successfully improved user engagement and satisfaction through personalized experiences and intuitive navigation.
            </p>
          </div>
        </div>
      );
    }

    if (project?.title === "Walmart Manager hub") {
      return renderWalmartManagerContent();
    }

    if (project?.title === "Redefining CVS Digital Design System") {
      return renderCVSContent();
    }

    if (project?.title === "Prudentials Design System - Evolution") {
      return renderPrudentialsContent();
    }

    if (project?.title === "Prudential Homepage Redesign") {
      return renderPrudentialHomepageContent();
    }

    if (project?.title === "Prudential Financial Wellness Assessment") {
      return renderPrudentialWellnessContent();
    }

    if (project?.title === "NCR Marketplace") {
      return renderNCRMarketplaceContent();
    }

    if (project?.title === "Creating a design system for Sweepr") {
      return renderSweeprContent();
    }

    if (project?.title === "Creating a Fitness App (Coachme)") {
      return renderCoachmeContent();
    }

    // Default description for all other projects
    return (
      <div className="lg:col-span-2">
        <h3 className="text-xl font-bold text-white mb-3">
          {project?.description.split('.')[0]}.
        </h3>
        <p className="text-gray-300 leading-relaxed">
          {project?.description}
        </p>
      </div>
    );
  };

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 cursor-pointer ${
        isOpen ? "opacity-100" : "opacity-0"
      }`}
      style={{ backgroundColor: 'rgba(0,0,0,0.8)' }}
      onClick={handleBackdropClick}
    >
      {/* Centered panel */}
      <div
        className={`relative w-full max-w-5xl mx-4 max-h-[90vh] bg-black rounded-lg overflow-hidden transition-all duration-300 ${
          isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors cursor-pointer"
        >
          <X size={20} />
        </button>

        {/* Scrollable content container */}
        <div className="max-h-[90vh] overflow-y-auto">
          {/* Content */}
          <div className="relative">
            {/* Visual header */}
            <div className="relative h-64 bg-gradient-to-br from-purple-900 to-blue-900">
              {/* Project tag */}
              {project?.tag && (
                <div className={`absolute top-4 left-4 ${project.tag.color} text-white text-xs font-bold px-2 py-1 rounded-md`}>
                  {project.tag.text}
                </div>
              )}
            </div>

            {/* Content area */}
            <div className="p-6">
              {/* Title */}
              <h2 className="text-3xl font-bold text-white mb-4">{project?.title}</h2>

              {/* Action buttons - Dynamic rendering */}
              {renderActionButtons()}

              {/* Status row - Dynamic rendering */}
              {renderStatusRow()}

              {/* Description and details */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Description - Dynamic rendering */}
                {renderDescription()}

                {/* Right column details - Dynamic metadata */}
                <div>
                  {renderMetadata()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 