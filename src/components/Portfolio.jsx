import { useEffect, useState } from "react";

export const Portfolio = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://2c42987622e6348c.mokky.dev/portfolio"
        );
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Something went wrong");
        }

        setData(data);
      } catch (error) {
        console.error("Error fetching:", error.message);
      }
    };

    fetchData();
  }, []);
  return (
    <div className=" text-white px-4 py-8">
      <h1 className="text-3xl md:text-5xl font-bold mb-10 text-center">
        Портфолио
      </h1>

      <div className="md:hidden space-y-4">
        {data.map((item, index) => (
          <div key={index} className="bg-gray-800 rounded-xl p-4 shadow-md ">
            <a href={item.url} className="flex justify-between">
              <div>
                <h2 className="text-xl font-bold">{item.name}</h2>
                <p className="text-gray-400 mt-2">{item.description}</p>
              </div>
              <div
                rel="noopener noreferrer"
                className="text-blue-400 inline-block mt-3"
              >
                ⟶
              </div>
            </a>
          </div>
        ))}
      </div>

      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full table-auto border-collapse">
          <tbody>
            {data.map((item, index) => (
              <tr
                key={index}
                className="border-t border-gray-700 hover:bg-gray-900 transition"
              >
                <td className="px-6 py-4 font-bold font text-3xl">
                  {item.name}
                </td>
                <td className="px-6 py-4 text-gray-400">{item.description}</td>
                <td className="px-6 py-4">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400"
                  >
                    ⟶
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
