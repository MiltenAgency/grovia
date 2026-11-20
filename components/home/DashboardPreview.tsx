import { ArrowDownLeft, ArrowUpRight, Coffee, Landmark, ShoppingBasket } from "lucide-react";
import { heroChart, heroCustomers } from "@/lib/content/home";
import { site } from "@/lib/content/site";
import "./dashboard-preview.css";

const cashFlow = [
  { month: "Jun", income: 4450, spending: 2850 },
  { month: "Jul", income: 4600, spending: 2510 },
  { month: "Aug", income: 4900, spending: 2760 },
  { month: "Sep", income: 4720, spending: 2350 },
  { month: "Oct", income: 5120, spending: 2480 },
  { month: "Nov", income: 5250, spending: 2180 },
];

const activity = [
  { title: "Salary deposit", date: "Nov 18", amount: "+$5,250.00", icon: Landmark, credit: true },
  { title: "Fresh Market", date: "Nov 17", amount: "−$68.40", icon: ShoppingBasket, credit: false },
  { title: "Corner Coffee", date: "Nov 16", amount: "−$5.75", icon: Coffee, credit: false },
];

export function DashboardPreview() {
  return (
    <section className="money-preview" aria-label="Illustrative Moneta dashboard" data-ui>
      <header className="money-preview-bar">
        <img src={site.wordmark} width={100} height={25} alt="Moneta" />
        <span>Sample account</span>
      </header>
      <div className="money-preview-heading">
        <h2>Financial overview</h2>
        <time dateTime="2026-11">November 2026</time>
      </div>
      <div className="money-preview-grid">
        <section className="money-panel money-balance">
          <h3>Total balance <small>USD</small></h3>
          <p className="money-amount">{heroCustomers.rows[0].name}</p>
          <dl className="money-totals">
            <div><dt><ArrowDownLeft size={16} /> Income</dt><dd>{heroCustomers.rows[1].amount}</dd></div>
            <div><dt><ArrowUpRight size={16} /> Spending</dt><dd>{heroCustomers.rows[2].amount}</dd></div>
          </dl>
        </section>
        <section className="money-panel money-goal">
          <h3>Savings goal</h3>
          <p className="money-amount">{heroChart.value}</p>
          <div className="money-goal-detail"><span>of $15,000</span><strong>83%</strong></div>
          <progress value={12450} max={15000} aria-label="Savings goal progress">83%</progress>
        </section>
        <section className="money-panel money-flow">
          <h3>Cash flow</h3>
          <div className="money-legend"><span>Income</span><span>Spending</span></div>
          <div className="money-bars" role="list" aria-label="Monthly cash flow in US dollars">
            {cashFlow.map(({ month, income, spending }) => (
              <div role="listitem" key={month}>
                <span className="sr-only">{month}: income ${income}, spending ${spending}</span>
                <div className="money-bar-pair" aria-hidden="true">
                  <i style={{ height: `${income / 60}%` }} /><i style={{ height: `${spending / 60}%` }} />
                </div>
                <span aria-hidden="true">{month}</span>
              </div>
            ))}
          </div>
        </section>
        <section className="money-panel">
          <h3>Recent activity</h3>
          <ul className="money-activity">
            {activity.map(({ title, date, amount, icon: Icon, credit }) => (
              <li key={title}>
                <span className="money-activity-icon" aria-hidden="true"><Icon size={16} /></span>
                <span>{title}<small>{date}</small></span>
                <strong className={credit ? "money-credit" : undefined}>{amount}</strong>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </section>
  );
}
