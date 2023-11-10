import Button from "./Button";

export default function ProjectsSidebar({ onStartAddProject }) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold md:text-xl text-stone-200">Your projects</h2>
      <div onClick={onStartAddProject}>
        <Button>+ Add project</Button>
      </div>
      <ul> {/* projects will go here */}</ul>
    </aside>
  );
}
