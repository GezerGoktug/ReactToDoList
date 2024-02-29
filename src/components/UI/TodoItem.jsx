import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPen } from "@fortawesome/free-solid-svg-icons";
const TodoItem = ({ todo, onClick }) => {
  return (
    <div className="   text-left  grid grid-cols-12 md:grid-cols-6 border-b-2 gap-1 sm:gap-6 items-center border-slate-400 py-3 px-3  ">
      <li
        onClick={onClick}
        className={`col-span-4 min-[468px]:col-span-6 md:col-span-4 cursor-pointer ${
          todo.isComplete ? "line-through" : ""
        }`}
      >
        {todo.todo}
      </li>
      <li className="col-span-4 min-[468px]:col-span-3 md:col-span-1 ">
        <Button
          onClick={onClick}
          className=" update bg-green-400 w-full md:w-auto rounded-lg  hover:bg-green-600  border-green-500   "
        >
          <FontAwesomeIcon className="update" icon={faPen} />
          Düzenle
        </Button>
      </li>
      <li className="col-span-4 min-[468px]:col-span-3 md:col-span-1 ">
        <Button
          onClick={onClick}
          className="  delete bg-red-600 w-full hover:bg-red-800  rounded-lg"
        >
          <FontAwesomeIcon className="delete" icon={faTrash} />
          Sil
        </Button>
      </li>
    </div>
  );
};

export default TodoItem;
