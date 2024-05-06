import './style.scss';

export function PlayingIndicator() {
  return (
    <div className="playing-indicator">
      <div className="block"></div>
      <div className="block"></div>
      <div className="block"></div>
      <div className="block"></div>
    </div>
  );
}

export function LoadingIndicator() {
  return <div class="loading-indicator"></div>;
}
