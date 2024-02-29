import Card from "../UI/Card";
import TodoItem from "../UI/TodoItem";
const TodosList = ({ todos, setTodos, todo, setTodo, setError }) => {
  //! Her bir todo da ilgili yerlere tıklandığında parametrelere şartlara göre... 
  //! Yapacağı işlevi ayarlayan fonksiyon
  const handleTodoObject = (id, event) => {
    //! Tıklanan element varsayılan olarak seçilir
    let element = event.target;
    //! Eğer tıklanan yer ikon ise bunun parenti alınır
    if (!event.target.matches("button")) element = event.target.parentElement;
    //! Eğer delete butonuna tıklanırsa ilgili todo silinir.
    if (event.target.classList.contains("delete")) {
      setTodos(todos.filter((todo) => todo.id !== id));
      return;
    }
    //! Eğer düzenleme butonu güncelleme modunda ise bir daha basıldığında ...
    //! ilgili todo inputta yazan değer ile güncellenir.
    if (element.childNodes[1].textContent === "Güncelle") {
      //! Eğer input boşsa güncelleme işlemi yapılmaz error state i çalışır.
      if (todo.trim() === "") {
        setError({
          header: "Boş girilemez",
          description: "Lütfen yapacağınız todo yu yazınız.",
        });
        return;
      }
      //! İlgili todo state güncellenmesi
      setTodos(
        todos.map((todoItem) => {
          if (todoItem.id === id) {
            return { ...todoItem, todo: todo };
          }
          return todoItem;
        })
      );
      element.childNodes[1].textContent = "Düzenle";
      setTodo("");
      return;
    }
    //! Eğer Düzenle butonuna tıklanılırsa ilgili todo  value sı inputa eklenir .
    //! Ve güncelleme moduna alınır ilgili todo butonu.
    if (event.target.classList.contains("update")) {
      setTodo(todos.find((item) => item.id === id).todo);
      element.childNodes[1].textContent = "Güncelle";
      return;
    }
    //! Eğer buton değilde todo uzerine tıklanırsa bu todo tamamlandı olarak işaretlenir.
    //! Üzeri çizilir ve state de tamamlanma durumu güncellenir.
    if (event.target.classList.contains("line-through")) {
      setTodos(
        todos.map((todoItem) => {
          if (todoItem.id === id) {
            return { ...todoItem, isComplete: false };
          }
          return todoItem;
        })
      );
      event.target.classList.remove("line-through");
    } else {
      event.target.classList.add("line-through");
      setTodos(
        todos.map((todoItem) => {
          if (todoItem.id === id) {
            return { ...todoItem, isComplete: true };
          }
          return todoItem;
        })
      );
    }
  };
  return (
    <Card>
      <div className="w-full max-w-full overflow-x-auto">
        <ul className="min-w-full w-max min-[400px]:w-auto">
          <div className=" font-semibold text-left  grid grid-cols-12 md:grid-cols-6 gap-1 sm:gap-6 border-b-2 border-slate-400 py-3 px-3  ">
            <li className=" col-span-4 min-[468px]:col-span-6 md:col-span-4">
              Yapılacak İş
            </li>
            <li className=" col-span-4 min-[468px]:col-span-3 md:col-span-1 text-center">
              Güncelle
            </li>
            <li className=" col-span-4 min-[468px]:col-span-3 md:col-span-1 text-center">
              Sil
            </li>
          </div>
          <div className="flex flex-col overflow-y-auto max-h-[40vh]">
            {todos.length === 0 ? (
              <p className="font-medium my-6 text-lg">Liste Boş</p>
            ) : (
              todos.map((todo) => {
                return (
                  <TodoItem
                    key={todo.id}
                    onClick={(e) => handleTodoObject(todo.id, e)}
                    todo={todo}
                  />
                );
              })
            )}
          </div>
        </ul>
      </div>
    </Card>
  );
};

export default TodosList;
