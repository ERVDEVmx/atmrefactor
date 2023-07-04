const { useState } = React;

function App() {
  const [balance, setBalance] = useState(0);
  const [transactionType, setTransactionType] = useState('');
  const [transactionAmount, setTransactionAmount] = useState('');

  const handleTransactionTypeChange = (e) => {
    setTransactionType(e.target.value);
  };

  const handleAmountChange = (e) => {
    setTransactionAmount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (transactionType === 'deposit') {
      setBalance(balance + parseFloat(transactionAmount));
    } else if (transactionType === 'withdraw') {
      if (parseFloat(transactionAmount) <= balance) {
        setBalance(balance - parseFloat(transactionAmount));
      } else {
        alert('Insufficient funds');
      }
    }

    setTransactionType('');
    setTransactionAmount('');
  };

  return (
    <div className="container">
      <h1>ATM App</h1>
      <div className="balance">Account Balance: ${balance.toFixed(2)}</div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="transaction-type">Transaction Type:</label>
          <select id="transaction-type" value={transactionType} onChange={handleTransactionTypeChange}>
            <option value="">Select a transaction type</option>
            <option value="deposit">Deposit</option>
            <option value="withdraw">Withdraw</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="amount">Amount:</label>
          <input type="number" id="amount" value={transactionAmount} onChange={handleAmountChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
