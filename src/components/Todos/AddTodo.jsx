import Card from "../UI/Card";
import Button from "../UI/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPlus } from "@fortawesome/free-solid-svg-icons";

const AddTodo = ({ setTodos, todos, todo, setTodo, setError }) => {
  //! İnput valuesu her degiştiğinde todo state i güncellenir.
  const todoChanceHandler = (e) => {
    setTodo(e.target.value);
  };
  //! Todo yu ekleyen fonksiyon
  const handleAddTodo = () => {
    //! Eğer input boşsa error state i güncellenir ve hata modalı karsımıza çıkar.
    if (todo.trim() === "") {
      setError({
        header: "Boş girilemez",
        description: "Lütfen bir yapılacak şey girin",
      });
      return;
    }
    //! İnput boş değilse her todo için bir unique id seçilir.Burda rastgele bir sayı seçilir.
    //! Eğer todo dizisinin bir id siyle eşleşirse başka bir id seçer.
    //! Todo ekleme sınırına denk gelirse todo eklemez error state i çalışır.
    let randomNumber = 0;
    if(todos.length === 9 ){
      setError({
        header: "Maksimum todo sayısına erişildi",
        description: "Maksimum todo sayısına erişildi.Lütfen todolarınızda eksilmeye gidin.",
      });
      return;
    }
    do {
      randomNumber = Math.floor(Math.random() * 9) + 1;
    } while (todos.some((item) => item.id === randomNumber));
    //! İd seçiminden sonra ilgili state i günceller.
    setTodos((prevState) => [
      ...prevState,
      {
        id: randomNumber,
        todo: todo,
        isComplete: false,
      },
    ]);
    //! İnputu sıfırlar.
    setTodo("");
  };
  return (
    <Card className="flex flex-col gap-6 ">
      <h1 className="text-5xl font-bold">To Do List</h1>
      <div className="flex flex-col gap-2 sm:gap-0 sm:flex-row  sm:shadow-lg w-full sm:w-[90%] md:w-[85%] lg:w-3/4   mx-auto rounded-lg    ">
        <input
          name="todo"
          value={todo}
          onChange={todoChanceHandler}
          placeholder="Lütfen bir yapılacak girin"
          type="text"
          className="  w-full sm:w-3/4    py-2 px-2 rounded-lg sm:rounded-none sm:rounded-s-lg outline-none border-2 sm:border-0 sm:border-y-2  sm:border-l-2 border-slate-400   "
        />
        <Button
          onClick={handleAddTodo}
          className="bg-green-400 rounded-lg sm:rounded-none sm:rounded-r-lg  hover:bg-green-600 border-2 sm:border-0 sm:border-y-2 sm:border-r-2 w-full sm:w-1/4  border-green-500   "
        >
          <FontAwesomeIcon icon={faPlus} />
          Add To Do
        </Button>
      </div>
      <Button
        onClick={() => {
          setTodos([]);
        }}
        className="bg-red-600 hover:bg-red-800    rounded-lg ms-auto sm:me-[5%] md:me-[7.5%] lg:me-[12.5%] "
      >
        <FontAwesomeIcon icon={faTrash} />
        Temizle
      </Button>
    </Card>
  );
};

export default AddTodo;
