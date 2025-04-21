export function WipBanner() {
  return (
    <div className="fixed bottom-0 z-10 w-screen text-white">
      <div className="mx-auto w-fit rounded-t-md bg-pink-800 px-2 pt-1 text-sm md:ml-auto md:mr-10">
        🚧 This website is still a work in progress
      </div>
      <div className="h-2 w-full bg-pink-800" />
    </div>
  );
}
