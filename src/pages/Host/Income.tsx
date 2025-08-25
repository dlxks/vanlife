import charImg from "../../assets/chart.png";

const Income = () => {
  const transactions = [
    { id: "1", amount: 720, date: "Jan 3, '23" },
    { id: "2", amount: 560, date: "Dec 12, '22" },
    { id: "3", amount: 980, date: "Dec 3, '22" },
  ];

  const total = transactions.reduce((acc, t) => acc + t.amount, 0);

  return (
    <section className="container mx-auto py-8 px-4 text-zinc-900 min-h-screen">
      <h1 className="text-3xl font-semibold mb-4">Income</h1>
      <p className="mb-4">
        Last <span className="underline font-semibold">30 days</span>
      </p>
      <h2 className="text-3xl font-black">${total.toLocaleString()}</h2>

      <img
        src={charImg}
        alt="Chart"
        className="my-6 p-6 bg-white place-self-center w-full"
      />

      <div className="py-8">
        <h3 className="text-2xl font-bold mb-4">
          Your transactions ({transactions.length})
        </h3>
        <p>
          Last <span className="underline font-semibold">30 days</span>
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {transactions.map((t) => (
          <div
            key={t.id}
            className="flex justify-between items-center p-8 bg-white rounded-md"
          >
            <h3 className="text-2xl font-bold">${t.amount}</h3>
            <p>{t.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Income;
