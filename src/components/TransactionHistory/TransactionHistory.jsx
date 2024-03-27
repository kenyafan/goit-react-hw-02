import c from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <table className={c.table}>
      <thead>
        <tr className={c.wrapper}>
          <th className={c.theadItem}>Type</th>
          <th className={c.theadItem}>Amount</th>
          <th className={c.theadItem}>Currency</th>
        </tr>
      </thead>

      <tbody className={c.tbody}>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td className={c.bodyItem}>{type}</td>
            <td className={c.bodyItem}>{amount}</td>
            <td className={c.bodyItem}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
