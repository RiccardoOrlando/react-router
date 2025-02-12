import { useAlertContext } from "../contexts/AlertContexts";



export default function Alert() {


const { AlertData, setAlertData } = useAlertContext();

const { type, message } = AlertData;


const handleAlertClose = () => {
    setAlertData({
      type: "",
      message: "",
    });
  };

  const classes = {
    info: "bg-blue-200 p-6-p",
    error: "bg-red-200 p-6-p",
    success: "bg-green-200 p-6-p",
  };

  if (!message) {
    return null;
  }
  return <div className={classes[type]}>
    {message} <i class="fa-solid fa-x absolute right-4 top-7" onClick={handleAlertClose}></i>
    </div>;
}
