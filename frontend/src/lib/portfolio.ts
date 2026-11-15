export type CaseStudy = {
  title: string;
  slug: string;
  sector: string;
  summary: string;
  work_done: string;
  outcome: string;
  cover_image_url: string;
  project_url: string;
  is_featured: boolean;
};

const apiUrl = process.env.DATAWIZABLE_API_URL || "http://127.0.0.1:8000";

export async function loadCaseStudies(): Promise<CaseStudy[] | null> {
  try {
    const response = await fetch(`${apiUrl}/api/case-studies/`, { cache: "no-store" });
    if (!response.ok) return null;
    const data: unknown = await response.json();
    return Array.isArray(data) ? data as CaseStudy[] : null;
  } catch {
    return null;
  }
}

export async function loadCaseStudy(slug: string): Promise<CaseStudy | null> {
  try {
    const response = await fetch(`${apiUrl}/api/case-studies/${encodeURIComponent(slug)}/`, { cache: "no-store" });
    if (!response.ok) return null;
    return await response.json() as CaseStudy;
  } catch {
    return null;
  }
}
