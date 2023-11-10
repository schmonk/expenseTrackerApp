import { useRef } from "react";

import Input from "./Input";
export default function NewProject({ onAdd }) {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();

  function handleSave() {
    const enteredTitle = titleRef.current.value;
    const enteredDescription = titleRef.current.value;
    const enteredDueDate = dueDateRef.current.value;

    /* validate here */

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-stone-800 hover:text-stone-950">Cancel</button>
        </li>
        <li>
          <button
            onClick={handleSave}
            className="bg-stone-800 text-stone-50 hover:bg-stone-950 px-6 py-2 rounded-md"
          >
            Save
          </button>
        </li>
      </menu>
      <Input type="text" ref={titleRef} label="Title" />
      <Input ref={descriptionRef} label="Description" textarea />
      <Input type="date" ref={dueDateRef} label="Duedate" />
    </div>
  );
}
