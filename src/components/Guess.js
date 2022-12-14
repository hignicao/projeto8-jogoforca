export default function Guess({ start, won, lost, guessWord, changedInput }) {
	const cond = !start || won || lost;
	return (
		<div className="guess">
			<label htmlFor="guess">{!start ? "Sorteie a palavra para começar!" : "Já sei a palavra!"}</label>
			<input data-identifier="type-guess" disabled={cond} type="text" id="guess" onChange={changedInput} />
			<button data-identifier="guess-button"  disabled={cond} onClick={guessWord} className={cond ? "guess-btn disabled" : "guess-btn"}>
				Chutar
			</button>
		</div>
	);
}
