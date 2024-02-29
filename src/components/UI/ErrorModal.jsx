import Card from "./Card";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
export const ErrorModal = ({ setError, error }) => {
  //! Eğer modal dışında bir yer,tamam butonu ve kapatma ikonuna tıklanırsa modalı kapatır.
  const handleModal = (e) => {
    if (e.target.classList.contains("error-modal")) {
      setError(null);
    } else {
      if (e.target.classList.contains("close")) {
        setError(null);
      }
    }
  };
  return (
    <div
      onClick={handleModal}
      className="error-modal z-50 fixed flex justify-center items-center  top-0 left-0 w-screen h-screen bg-black/50  backdrop-blur-[5px]"
    >
      <Card className="  w-[90%] sm:w-3/4 md:w-1/2 flex flex-col relative">
        <FontAwesomeIcon
          onClick={handleModal}
          className="text-white close text-xl sm:text-3xl absolute cursor-pointer top-3 left-4"
          icon={faXmark}
        />
        <div className="h-[60px] bg-red-600 -mt-6 -mx-2 sm:-mx-6 rounded-t-2xl  flex items-center justify-center">
          <h3 className="text-white font-semibold text-xl sm:text-3xl">
            {error.header}
          </h3>
        </div>
        <p className="text-black text-md sm:text-normal my-5 font-bold">
          {error.description}
        </p>
        <Button className="bg-gray-600 rounded-xl close w-[30%] sm:w-[20%] ms-auto hover:bg-gray-700">
          Tamam
        </Button>
      </Card>
    </div>
  );
};
