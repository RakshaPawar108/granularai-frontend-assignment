import "./HistoryButton.css";

type Props = {
  historyClickHandler: () => void;
};

export const HistoryButton = ({ historyClickHandler }: Props) => {
  return (
    <div className="history-button" onClick={historyClickHandler}>
      History
    </div>
  );
};
