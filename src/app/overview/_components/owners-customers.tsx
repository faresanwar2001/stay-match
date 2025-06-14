import { useParams } from "react-router-dom";
import { useTranslations } from "use-intl";

export default function OwnersCustomers() {
  // Navigation
  const {lang} = useParams()

  // Translation
  const t = useTranslations();

  // Variables
  const dataOwners = [
    { title: "No. owners", quantity: "13k" },
    { title: "No. properties", quantity: "13k" },
    { title: "No. Revenues", quantity: "13k" },
  ];

  const dataCustomers = [
    { title: "No. users", quantity: "13k" },
    { title: "No. Rent Act", quantity: "13k" },
    { title: "Total paid", quantity: "13k" },
  ];

  return (
    <section className="flex lg:flex-row flex-col justify-between gap-5">
      {/* Owners */}
      <div className="lg:w-1/2 w-full relative">
        {/* Heading */}
        <h2 className="text-xl font-medium text-gray-800 mb-4">
          {t("owners")}
        </h2>
        <div className="bg-white shadow-md rounded-md p-5 w-full flex">
          <div>
            {dataOwners.map(({ title, quantity }) => (
              <div key={title} className="flex justify-between lg:gap-40 gap-20 py-2">
                {/* Title */}
                <p className="text-gray-600">{title}</p>

                {/* Quantity */}
                <p className="ms-auto font-semibold text-xl text-gray-800 pe-10">
                  {quantity}
                </p>
              </div>
            ))}
          </div>
          {/* Building image */}
          <img
            src="/images/illustration-1.png.png"
            alt="illustration"
            className={`absolute ${lang === "en" ? "lg:right-20 right-0":"lg:left-20 left-0"}  bottom-0`}
          />
        </div>
      </div>

      {/* Customers */}
      <div className="lg:w-1/2 w-full">
        {/* Heading */}
        <h2 className="text-xl font-medium text-gray-800 mb-4">
          {t("customers")}
        </h2>
        <div className="bg-white shadow-md rounded-md p-5 w-full flex items-start relative">
          <div>
            {dataCustomers.map(({ title, quantity }) => (
              <p key={title} className="flex justify-between py-2 lg:gap-40 gap-20">
                {/* Title */}
                <span className="text-gray-600">{title}</span>

                {/* Quantity */}
                <span className="ms-auto font-semibold text-xl text-gray-800">
                  {quantity}
                </span>
              </p>
            ))}
          </div>
          <img
            src="/images/illustration-2.png.png"
            alt="illustration"
            className={`absolute ${lang === "en" ? "lg:right-20 right-0":"lg:left-20 left-0"}  bottom-0`}
          />
        </div>
      </div>
    </section>
  );
}
