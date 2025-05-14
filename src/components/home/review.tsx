import RatingIcon from "../icons/rating";

type GoogleReviewProps = {
  user: string;
  rating: number;
  profilePicture: string;
  review: string;
};

export default function GoogleReview({
  user,
  rating,
  profilePicture,
  review,
}: Readonly<GoogleReviewProps>) {
  return (
    <div className="flex flex-col gap-5">
      {/* Top row */}
      <div className="flex gap-4 place-items-center flex-col md:flex-row">
        <div className="flex gap-4 place-items-center">
          <img
            src={profilePicture}
            alt={`${user} profile`}
            className="w-10 h-10 rounded-full"
          />
          <p className="font-bold">{user}</p>
        </div>
        <div className="flex gap-1">
          {Array.from({ length: rating }, (_, index) => (
            <RatingIcon
              className="w-4 h-4 fill-amber-400 stroke-transparent"
              key={index}
            />
          ))}
        </div>
      </div>

      <p className="leading-10">{review}</p>
    </div>
  );
}
