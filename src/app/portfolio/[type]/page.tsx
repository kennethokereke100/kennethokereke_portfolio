import { redirect } from "next/navigation";

interface PageProps {
  params: Promise<{ type: string }>;
}

export default async function PortfolioTypePage({ params }: PageProps) {
  const { type } = await params;
  
  // Redirect to the new home route structure
  redirect(`/${type}/home`);
} 