import { Coffee, ShoppingBasket, Music2 } from "lucide-react";

const spending = [
  { label: "Coffee", amount: "−$6.50", icon: Coffee },
  { label: "Groceries", amount: "−$82.40", icon: ShoppingBasket },
  { label: "Music", amount: "−$10.99", icon: Music2 },
];
const budget = [
  { label: "Essentials", amount: 1240 },
  { label: "Lifestyle", amount: 680 },
  { label: "Extras", amount: 260 },
];
const total = budget.reduce((sum, category) => sum + category.amount, 0);

export function ProcessCardDetail({ step }: { step: string }) {
  if (step === "01") return (
    <>
      <h4>Recent spending</h4>
      <ul className="rail-ledger">
        {spending.map(({ label, amount, icon: Icon }) => (
          <li key={label}><Icon aria-hidden="true" size={16} /><span>{label}</span><strong>{amount}</strong></li>
        ))}
      </ul>
    </>
  );
  if (step === "02") return (
    <>
      <h4>Monthly budget</h4>
      <strong className="rail-value">${total.toLocaleString("en-US")}</strong>
      <div className="rail-split" aria-hidden="true">
        {budget.map(item => <i key={item.label} style={{ flexGrow: item.amount }} />)}
      </div>
      <ul className="rail-allocation">
        {budget.map(item => <li key={item.label}><span>{item.label}</span><strong>${item.amount.toLocaleString("en-US")}</strong></li>)}
      </ul>
    </>
  );
  return (
    <>
      <h4>Travel fund</h4>
      <strong className="rail-value">$2,450</strong>
      <div className="rail-goal-detail"><span>of $3,500 goal</span><strong>70%</strong></div>
      <progress value={2450} max={3500} aria-label="Travel savings goal">70%</progress>
    </>
  );
}
