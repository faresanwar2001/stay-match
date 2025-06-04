import { Link } from "react-router-dom";
export default function OwnerInformation() {
  // Variables
  const detailsOwner = [
    {
      useName: "lorine.hischke",
      email: "vafgot@vultukir.org",
      status: "Active",
      contact: "(123) 456-7890",
      country: "USA",
    },
  ];

  return (
    <div>
      <div className="flex gap-4 items-center">
        {/* Profile */}
        <img src="/images/profile.png" alt="profile image" />

        {/* Details */}
        <div>
          {/* Name */}
          <h3 className="font-medium">Lorine Hischke</h3>

          {/* Owner id*/}
          <p className="text-[#6D6777] font-light">Owner ID #634759</p>
        </div>
      </div>

      <div className="mt-9">
        {/* Heading */}
        <h3 className="border-b font-medium text-base mb-2">Details</h3>

        {/* Details owner */}
        {detailsOwner.map((item) => (
          <div className="flex flex-col gap-2">
            {/* User name */}
            <h4 className="font-medium">
              User Name:{" "}
              <span className="text-[#6D6777] font-light">{item.useName}</span>
            </h4>

            {/* Email */}
            <p className="font-medium">
              Email:{" "}
              <span className="text-[#6D6777] font-light">{item.email}</span>
            </p>

            {/* Status */}
            <h5 className="font-medium">
              Status:{" "}
              <span className="text-[#56CA00] bg-[#E4F7D6] py-1 px-3 rounded-full font-light">
                {item.status}
              </span>
            </h5>

            {/* Contact */}
            <h5 className="font-medium">
              Contact:{" "}
              <span className="text-[#6D6777] font-light">{item.contact}</span>
            </h5>

            {/* Country */}
            <h5 className="font-medium">
              Country:{" "}
              <span className="text-[#6D6777] font-light">{item.country}</span>
            </h5>

            {/* Edit Button */}
            <Link
              to={"ownerDetails/editOwner"}
              className="w-full mt-2 bg-[#6D6777] py-2 rounded-md text-white text-center font-medium"
            >
              Edit Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
