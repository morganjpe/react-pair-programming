export default function Home() {
  return (
    <main className="flex  min-h-screen  flex-col  items-center  justify-between  p-24">
      <div className="mb-32 lg:max-w-5xl  lg:w-full lg:mb-0  lg:text-left">
        <h1 className="mb-3  text-2xl  font-semibold">
          React Pair Programming Task
        </h1>
        <p className="mb-5">
          Using the{" "}
          <a href="/api/table" target="_blank">
            http://localhost:3000/api/table
          </a>{" "}
          endpoint, we’d like you to fetch the league standings and display them
          in a table.
        </p>
        <h2 className="mb-3 text-2xl font-semibold">Requirements</h2>
        <p className="mb-5">Display the following for each team:</p>
        <ul className="list-disc  pl-4  pb-3">
          <li>Team name</li>
          <li>Goals for</li>
          <li>Goals against</li>
          <li>Points</li>
        </ul>
        <p className="mb-5">
          Build the ability to sort the table by points, goals for, goals
          against and alphabetically by name.
        </p>
        <p>
          <strong>Bonus</strong> - If we have time, paginate the table by groups
          of five.
        </p>
      </div>
    </main>
  );
}
