import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import "./HistoryList.css";

type Props = {
  showHistoryList: boolean;
  setShowHistoryList: any;
  setSearchQuery: any;
  historyList: string[];
};

export const HistoryList = ({
  showHistoryList,
  setShowHistoryList,
  historyList,
  setSearchQuery,
}: Props) => {
  return (
    <>
      {showHistoryList && (
        <div
          className="list-popup-bg"
          onClick={() => setShowHistoryList(false)}
        >
          <div className="list-popup-card">
            <div className="popup-heading">History</div>
            <div className="popup-list-items">
              {historyList.map((historyItem) => (
                <li
                  className="popup-list-item"
                  onClick={() => {
                    localStorage.setItem("selected", "true");
                    setSearchQuery(historyItem);
                    setShowHistoryList(false);
                  }}
                >
                  {historyItem}{" "}
                  <div
                    className="link-share-button"
                    onClick={() => {
                      navigator.clipboard.writeText(
                        `${window.location.host}?search=${historyItem}`
                      );
                      toast("Link Copied to Clipboard", {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                      });
                    }}
                  >
                    Share
                  </div>
                </li>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
