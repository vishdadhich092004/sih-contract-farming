import { Link, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getCropDemandByIdForFarmer } from "../../farmer-api-clients";
import { CropDemandType } from "../../../../backend/src/shared/company/types";
import { useAuthContext } from "../../contexts/AuthContext";

const CropDemandDetails = () => {
  const { user } = useAuthContext();
  const { demandId } = useParams<{ demandId: string }>();
  const { data, isLoading, error } = useQuery<CropDemandType>(
    ["crop-demand", demandId],
    () => getCropDemandByIdForFarmer(demandId!)
  );

  const hasAlreadyBid = data?.bids.some((bid) => {
    return bid.farmerId.toString() === user?._id.toString(); // Compare as strings
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading crop demand details</div>;

  return (
    <div className="min-h-screen bg-[#AED065] flex flex-col items-center py-8">
      <div className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-lg">
        {data && (
          <>
            <h1 className="text-3xl font-bold mb-6">{data.cropType}</h1>
            <p className="text-lg mb-4">
              Quantity Required: {data.quantity} kg
            </p>
            <p className="text-lg mb-4">Details: ${data.details}</p>
            <p className="text-lg mb-4">Location: {data.location}</p>
            <p className="text-lg mb-4">Status: {data.status}</p>
            {/* <p className="text-lg mb-4">
              Deadline: {new Date(data.deadline).toLocaleDateString()}
            </p> */}
            {/* <Link
              to={`/crop-demands/f/${demandId}/bid`}
              className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700"
            >
              Bid Now
            </Link> */}
            {!hasAlreadyBid ? (
              <Link
                to={`/farmers/${demandId}/bids/new`}
                className="bg-yellow-600 text-white font-bold"
              >
                Create a bid
              </Link>
            ) : (
              <h2>Already Bidded</h2>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default CropDemandDetails;
