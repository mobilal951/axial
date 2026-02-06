export interface ServiceFocusArea {
  title: string;
  description: string;
}

export interface Service {
  slug: string;
  name: string;
  shortDescription: string;
  headline: string;
  opening: string[];
  focusAreas: ServiceFocusArea[];
  callout: string;
}

export const services: Service[] = [
  {
    slug: "advisory",
    name: "Strategic Advisory & CFO Services",
    shortDescription:
      "Ongoing counsel for businesses navigating growth, complexity, and transition.",
    headline: "Financial leadership, structured for your business.",
    opening: [
      "Most owner-managed businesses reach a point where financial decisions outpace the capacity of annual accounting alone. Growth introduces complexity. Complexity demands ongoing interpretation. And interpretation — done well — requires someone who understands both the numbers and the business behind them.",
      "Axial's advisory practice provides that ongoing financial leadership. As a fractional CFO engagement, it delivers the strategic, analytical, and structural capacity of a senior financial executive — calibrated to the size, pace, and needs of your business.",
    ],
    focusAreas: [
      {
        title: "Fractional CFO Engagement",
        description:
          "Direct, ongoing access to the Managing Partner as your firm's financial strategist. This is not a monthly reporting service — it is an embedded advisory relationship designed to inform the decisions that shape your business quarter by quarter.",
      },
      {
        title: "Financial Forecasting & Modelling",
        description:
          "Forward-looking financial models that clarify what your business can sustain, what it requires, and where its boundaries lie. Built on your actual data, tested against reasonable scenarios, and updated as conditions evolve.",
      },
      {
        title: "Cash Flow Structure & Working Capital",
        description:
          "Revenue is not liquidity. Axial designs cash flow structures that ensure operational continuity, service debt obligations, fund growth, and maintain the reserves that protect against disruption.",
      },
      {
        title: "Strategic Planning & Decision Support",
        description:
          "Major business decisions — expansion, acquisition, partnership, divestiture — deserve analysis, not instinct alone. Axial provides the financial framework within which those decisions can be evaluated with clarity.",
      },
    ],
    callout:
      "Advisory is not an upgrade from accounting. It is accounting practised at the level your business actually requires.",
  },
  {
    slug: "tax",
    name: "Tax Planning & Compliance",
    shortDescription:
      "Proactive tax architecture for individuals and corporations across Canadian jurisdictions.",
    headline: "Tax architecture. Not tax preparation.",
    opening: [
      "The distinction between tax preparation and tax planning is the distinction between reporting a position and designing one. Preparation documents what has already occurred. Planning constructs the framework within which the most favourable outcomes become available — before the year closes, not after.",
      "Axial approaches tax as a structural discipline. Personal income, corporate income, dividends, trust distributions, capital gains — each element is positioned within an integrated architecture that accounts for current obligations, future transitions, and the interplay between entities.",
    ],
    focusAreas: [
      {
        title: "Personal & Corporate Tax Planning",
        description:
          "For individuals and corporations whose tax positions are complex enough to warrant structural attention. This includes income splitting strategies where permissible, RRSP and investment portfolio tax coordination, and integration of personal and corporate positions to minimise combined tax burden across years — not just the current one.",
      },
      {
        title: "Multi-Entity Tax Coordination",
        description:
          "Owner-managers with holding companies, operating companies, investment entities, and family trusts require coordination across all entities. Axial ensures that the tax position of each entity is optimised not in isolation, but as a system.",
      },
      {
        title: "Trust & Estate Tax Strategy",
        description:
          "Trusts and estates carry specific obligations and planning opportunities under the Income Tax Act. Axial provides the structural analysis required for trust establishment, the 21-year deemed disposition, estate freezes, and post-mortem tax planning.",
      },
      {
        title: "Cross-Provincial Compliance",
        description:
          "Businesses and individuals with obligations in multiple Canadian provinces face overlapping and sometimes conflicting requirements. Axial manages multi-jurisdictional filing and ensures consistent positioning across provinces.",
      },
      {
        title: "Annual Filing & Regulatory Obligations",
        description:
          "Compliance is the baseline — and it is never treated as an afterthought. All personal (T1), corporate (T2), and trust (T3) returns are prepared with the same structural attention applied to the planning that informs them.",
      },
    ],
    callout:
      "A tax position designed in January is worth more than a tax return filed in April.",
  },
  {
    slug: "assurance",
    name: "Assurance & Review Engagements",
    shortDescription:
      "Independent financial examination that satisfies stakeholders and strengthens governance.",
    headline: "Independent verification. Unqualified confidence.",
    opening: [
      "Assurance exists to answer a fundamental question: can stakeholders rely on these financial statements? The answer must come from an independent practitioner whose opinion is grounded in evidence, professional standards, and the disciplined application of audit methodology.",
      "Axial performs assurance and review engagements with a commitment to rigour that reflects the seriousness of the opinion being issued. Every engagement — whether an audit, a review, or a compilation — is executed in full accordance with Canadian professional standards.",
    ],
    focusAreas: [
      {
        title: "Audit Engagements",
        description:
          "Full-scope audit engagements performed under Canadian Auditing Standards (CAS), providing reasonable assurance that financial statements are free from material misstatement. Designed for organisations whose stakeholders — lenders, investors, regulators, or boards — require the highest level of independent verification.",
      },
      {
        title: "Review Engagements",
        description:
          "Review engagements performed under Canadian Standards on Review Engagements (CSRE 2400), providing limited assurance through inquiry and analytical procedures. Appropriate where stakeholders require independent scrutiny without the full scope of an audit.",
      },
      {
        title: "Compilation Engagements",
        description:
          "Compilation of financial statements from client-provided records, prepared in accordance with the applicable financial reporting framework. No assurance is expressed, but the statements benefit from the rigour and accuracy of professional preparation.",
      },
      {
        title: "Not-for-Profit & Regulatory Assurance",
        description:
          "Assurance engagements for not-for-profit organisations, charities, and entities with regulatory reporting obligations. Axial understands the specific standards, disclosures, and governance requirements these organisations face.",
      },
    ],
    callout:
      "The value of an audit is not the report. It is the discipline applied in reaching the opinion.",
  },
  {
    slug: "business",
    name: "Business Structure & Transitions",
    shortDescription:
      "Entity formation, reorganisation, succession, and the critical decisions that shape them.",
    headline:
      "The architecture of ownership, compensation, and succession.",
    opening: [
      "A business is a structure. How it is incorporated, how ownership is distributed, how principals are compensated, and how the enterprise will eventually transition — these are architectural decisions with consequences that compound across decades. They deserve the same rigour applied to any load-bearing structure: precise engineering, full visibility, and the foresight to anticipate what comes next.",
      "Axial provides the structural, tax, and advisory analysis that informs these decisions — from initial incorporation through to eventual succession or sale.",
    ],
    focusAreas: [
      {
        title: "Incorporation & Entity Selection",
        description:
          "Choosing the right entity structure — sole proprietorship, partnership, or corporation — is the first consequential decision a business owner makes. Axial evaluates the tax implications, liability considerations, and long-term flexibility of each option, ensuring the choice supports not just current operations but anticipated growth and transition.",
      },
      {
        title: "Corporate Reorganisation",
        description:
          "As businesses evolve, their structures must evolve with them. Reorganisations — including estate freezes, holding company establishment, and share restructuring — are designed to align corporate architecture with the current needs, tax positions, and succession intentions of the principals.",
      },
      {
        title: "Shareholder Agreements & Ownership Design",
        description:
          "Multi-owner businesses require clear structural agreements governing decision authority, profit distribution, dispute resolution, and exit mechanisms. Axial provides the financial and tax analysis that informs these agreements — working alongside legal counsel to ensure the structure is sound from every angle.",
      },
      {
        title: "Succession & Transition Planning",
        description:
          "Transitioning a business — whether to family, partners, management, or a third-party acquirer — is among the most complex undertakings an owner will face. Axial builds transition plans that address valuation, tax exposure, timing, and the structural mechanics of transferring ownership with minimal erosion.",
      },
      {
        title: "Owner-Manager Compensation Architecture",
        description:
          "Salary, dividends, shareholder loans, and benefit structures must be designed as an integrated system. Axial models the tax-optimal compensation mix based on the owner's personal income position, corporate retained earnings, and long-term wealth accumulation objectives.",
      },
    ],
    callout:
      "Structure is not paperwork. It is the framework within which every subsequent decision is either enabled or constrained.",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map((s) => s.slug);
}
