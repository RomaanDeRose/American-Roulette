import './SpinButton.scss';
function SpinButton({spin}) {
  return ( 
    <button className="spin-button" onClick={spin}>
      SPIN
    </button>
   );
}

export default SpinButton;