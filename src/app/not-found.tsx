export const runtime = 'edge';

export default function NotFound() {
  return (
    <>
      <title>404: This page could not be found.</title>
      <div className="flex flex-col items-center justify-center h-screen text-center font-sans">
        <h1 className="inline-block mb-0 mr-5 text-2xl font-semibold border-r border-gray-300 dark:border-neutral-700">
          404
        </h1>
        <div className="inline-block">
          <h2 className="m-0 text-sm font-normal leading-[49px]">This page could not be found.</h2>
        </div>
      </div>
    </>
  );
}
