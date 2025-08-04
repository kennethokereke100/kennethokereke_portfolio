import CoverProfiles from "./cover/CoverProfiles";

export default function Home() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-8">
      <div className="text-center">
        <h1 className="text-white text-4xl md:text-5xl font-bold mb-12">
          Who's watching?
        </h1>
        <CoverProfiles />
      </div>
    </div>
  );
}
