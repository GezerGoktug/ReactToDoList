import AddTodo from "./components/Todos/AddTodo";
import TodosList from "./components/Todos/TodosList";
import { useEffect, useState } from "react";
import { ErrorModal } from "./components/UI/ErrorModal";
function App() {
  //! Başlangıçta bir todos dizisi varsa localstoragede bu todos olarak ayarlanır.
  //! Eğer yoksa todos boş dizi ayarlanır.
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );
  //! her todo stateimiz.İçinde bu todonun unique id si value ve tamamlanma durumu özellikleri var.
  const [todo, setTodo] = useState("");
  //! Error state i. içinde error başlığı ve açıklaması tutulur.Bu modal a props gonderilir boylece...
  //! dinamik bir hata mesajı modalı yapılır.
  const [error, setError] = useState();
  //! todos dizisi her değiştiğinde localstorage e güncel todos dizisi gönderilir.
  //! useEffect Hookunda dependencies dizisi todos ayarlandı boylelikle her todos dizisi...
  //! değişiminde değişikler localstoragede saklanabilenecek.
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    //! FRAGMENT START
    <>
      {/* ERROR MODAL START */}
      {error && <ErrorModal error={error} setError={setError} />}
      {/* ERROR MODAL STOP */}
      {/* MAİN  START */}
      <main className=" mx-2 z-10 sm:mx-4 md:mx-8 lg:mx-20 xl:mx-48     h-screen flex flex-col gap-6   items-center pt-16   ">
        {/* ADD TODO SECTİON START */}
        <section className="w-full sm:w-[95%] md:w-[90%] lg:w-3/4">
          <AddTodo
            setTodos={setTodos}
            todos={todos}
            todo={todo}
            setTodo={setTodo}
            setError={setError}
          />
        </section>
        {/* ADD TODO SECTİON STOP */}
        {/* TODOLİST SECTİON START */}
        <section className="w-full sm:w-[95%] md:w-[90%] lg:w-3/4 ">
          <TodosList
            todo={todo}
            setTodo={setTodo}
            todos={todos}
            setTodos={setTodos}
            setError={setError}
          ></TodosList>
        </section>
        {/* TODOLİST SECTİON STOP */}
      </main>
      {/* MAİN  STOP */}      
    </>
    //! FRAGMENT STOP
  );
}

export default App;
