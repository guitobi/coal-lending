function Calculator() {
  return (
    <form className="bg-red-200">
      <h2>Calculate estimate price!</h2>
      <div className="flex flex-col space-x-96">
        <label htmlFor="">Your name</label>
        <input
          className="bg-stone-100 rounded-lg border border-stone-400"
          type="text"
        />
      </div>
    </form>
  );
}

export default Calculator;
