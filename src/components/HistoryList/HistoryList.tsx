import "./HistoryList.css";

export const HistoryList = () => {
  return (
    <div className="list-popup-bg">
      <div className="list-popup-card">
        <div className="popup-heading">History</div>
        <div className="popup-list-items">
          <li className="popup-list-item">
            Item One <div className="link-share-button">Share</div>
          </li>
          <li className="popup-list-item">
            Item Two <div className="link-share-button">Share</div>
          </li>
          <li className="popup-list-item">
            Item Three <div className="link-share-button">Share</div>
          </li>
          <li className="popup-list-item">
            Item Four <div className="link-share-button">Share</div>
          </li>
        </div>
      </div>
    </div>
  );
};
