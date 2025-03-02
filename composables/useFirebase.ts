import type { DocumentData } from "firebase/firestore";
import { set, ref, onValue } from "firebase/database";

export const useFirebase = () => {
  const { $db } = useNuxtApp();

  const messageList = useState<DocumentData>("messages", () => []);

  const retrieveMessage = async () => {
    const chat = ref($db, "chat");
    onValue(chat, snapshot => {
      const data = snapshot.val();
      messageList.value = Object.values(data);
    });
  };

  const sendText = (message: { user: string; text: string }) => {
    set(
      ref(
        $db,
        "chat/" + message.user + (Math.random() * 100).toString().slice(0, 2)
      ),
      {
        user: message.user,
        text: message.text,
      }
    );
  };

  return { messageList, retrieveMessage, sendText };
};
