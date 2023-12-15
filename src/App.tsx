import { useEffect, useState } from "react";
import { onMessageListener } from "./firebase";
import Swal from "sweetalert2";

type NotificationType = {
  title: string;
  body: string;
};

function App() {
  const [notification, setNotification] = useState<NotificationType | null>();
  onMessageListener()
    .then((payload: any) => {
      console.log(payload);

      setNotification({
        title: payload.notification.title,
        body: payload.notification.body,
      });
    })
    .catch((err) => console.log("failed: ", err));

  useEffect(() => {
    if (notification?.title && notification.body) {
      Swal.fire({
        title: notification?.title,
        text: notification?.body,
        icon: "success",
      });
    }
  }, [notification]);
  return (
    <div className="flex justify-center items-center w-1/2 mx-auto h-screen"></div>
  );
}

export default App;
