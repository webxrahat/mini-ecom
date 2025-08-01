import star from "/img/star.svg";

export default function Rating({ value }) {
 const stars = Array(value).fill(star);

 //  console.log("stars", stars);

 return (
  <div className="flex items-center space-x-1">
   {stars.map((star, idx) => (
    <img key={idx} src={star} alt={"Image.name"} className="w-3" />
   ))}
  </div>
 );
}
