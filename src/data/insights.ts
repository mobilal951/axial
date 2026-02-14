export interface Insight {
  slug: string;
  title: string;
  excerpt: string;
  category: "Tax" | "Advisory" | "Business" | "Regulatory";
  date: string;
  content: string[];
}

export const insights: Insight[] = [
  {
    slug: "owner-manager-compensation",
    title:
      "The Owner-Manager Compensation Decision: Salary, Dividends, and the Third Option",
    excerpt:
      "The annual salary-versus-dividend question is a fixture of Canadian private company planning. But framing it as a binary choice overlooks the structural opportunities that emerge when both are designed together.",
    category: "Tax",
    date: "2026-01-15",
    content: [
      "Every year, owner-managers of Canadian private corporations face the same question: how should they extract income from their company? The conventional framing presents two options — salary or dividends — and invites a comparison based on the current year's marginal tax rates.",
      "This framing is incomplete. It treats the compensation decision as an annual event rather than what it actually is: a structural position that compounds across years and interacts with every other element of the owner's financial architecture.",
      "The salary path creates RRSP contribution room, triggers CPP contributions (both the employee and employer portions), and produces a deductible expense for the corporation. The dividend path avoids payroll obligations, accesses the dividend tax credit, and leaves corporate retained earnings available for investment or future distribution.",
      "But the third option — the one most often overlooked — is the deliberate combination of both, designed as an integrated system. A base salary sufficient to maximise RRSP room, combined with dividends calibrated to the owner's marginal rate, combined with retained corporate earnings invested through the corporation. Each element serving a distinct purpose within a unified structure.",
      "The optimal mix depends on variables that extend well beyond the current tax year: the owner's age, retirement timeline, existing RRSP room, the corporation's small business deduction limit, passive income thresholds, and the intended succession or transition strategy for the business itself.",
      "This is why the compensation decision cannot be made in isolation. It is a load-bearing element of the owner's entire financial architecture — and it deserves to be engineered with that understanding.",
    ],
  },
  {
    slug: "holding-company-necessity",
    title:
      "When a Holding Company Becomes Necessary — and When It Doesn't",
    excerpt:
      "The holding company is one of the most discussed structures in Canadian private enterprise. Its benefits are real — but so are its costs. The question is not whether to establish one, but whether your circumstances warrant it.",
    category: "Business",
    date: "2025-11-28",
    content: [
      "The holding company occupies an almost mythical position in Canadian private business planning. It is frequently recommended, widely established, and — in a surprising number of cases — unnecessary for the owner's actual circumstances.",
      "This is not to suggest that holding companies lack value. When properly structured, a holding company provides asset protection (separating investment assets from operating risk), facilitates estate planning (enabling estate freezes and income splitting where permissible), and creates flexibility for future corporate reorganisations.",
      "The question is whether these benefits justify the costs: a second set of financial statements, additional tax filings, annual maintenance, and the complexity of managing inter-company transactions, shareholder loan accounts, and surplus stripping rules under Section 84.1 of the Income Tax Act.",
      "For an owner-manager with significant retained earnings in their operating company, a genuine need for asset protection, and a succession plan that involves an estate freeze — a holding company is almost certainly warranted. The structure pays for itself in risk reduction and planning flexibility.",
      "For an owner-manager in the early stages of business growth, with modest retained earnings and no immediate succession considerations — the holding company adds cost and complexity without proportionate benefit. The structure can always be established later, when the circumstances actually require it.",
      "The decision should be driven by the owner's specific financial architecture, not by general advice. A holding company is a tool. Like any tool, its value depends entirely on whether the situation calls for it.",
    ],
  },
  {
    slug: "21-year-rule-trusts",
    title: "The 21-Year Rule: What Trust Holders Need to Know Before 2026",
    excerpt:
      "Family trusts established in the early 2000s are approaching their 21-year deemed disposition. The tax consequences of inaction are significant, and the planning window is narrower than most trust holders realize.",
    category: "Tax",
    date: "2025-10-12",
    content: [
      "Under the Income Tax Act, every trust is deemed to have disposed of all its capital property at fair market value on the 21st anniversary of its creation. This deemed disposition triggers any unrealised capital gains that have accumulated within the trust — regardless of whether any actual sale or transfer has occurred.",
      "For family trusts established in the early 2000s, these 21-year anniversaries are approaching. And for many trust holders, the tax consequences have not been adequately planned for.",
      "The deemed disposition rule exists to prevent trusts from being used as indefinite deferral vehicles. Without it, capital gains on appreciated property could remain unrealised — and untaxed — across generations. The 21-year rule ensures that, at minimum, each generation of trust property faces a tax reckoning.",
      "The planning opportunities, however, are substantial — provided they are executed before the anniversary date. These include distributing trust property to capital beneficiaries (which can be done on a tax-deferred basis under subsection 107(2)), triggering selective dispositions to crystallise gains at lower current values, and restructuring the trust's holdings to minimise the impact of the deemed disposition.",
      "The critical constraint is timing. Distributions and restructurings must be completed before the 21-year anniversary. Retroactive planning is not available. Once the deemed disposition occurs, the tax liability is established.",
      "Trust holders should review their trust's establishment date, current fair market value of trust property, and the tax cost base of those assets. Where a significant gap exists between cost base and current value, proactive planning is not optional — it is essential.",
    ],
  },
];

export function getInsightBySlug(slug: string): Insight | undefined {
  return insights.find((i) => i.slug === slug);
}

export function getAllInsightSlugs(): string[] {
  return insights.map((i) => i.slug);
}

export const categories = ["All", "Tax", "Advisory", "Business"] as const;
