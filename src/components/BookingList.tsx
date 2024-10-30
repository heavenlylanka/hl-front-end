import Image from 'next/image';
import { MdFlightLand ,MdFlightTakeoff } from "react-icons/md";
import tiger_face from '../../public/assets/tiger_face.png';


type StaticImageData = {
  src: string;
  height: number;
  width: number;
  blurDataURL?: string;
};

interface BookingItemProps {
  title: string;
  days: number;
  startDate: string;
  endDate: string;
  price: number;
  imageSrc: string | StaticImageData; // Allow both URL strings and imported images
}

const BookingItem: React.FC<BookingItemProps> = ({ title, days, startDate, endDate, price, imageSrc }) => (
  <div className='flex flex-col'>
    {/*Only for mobile view title to up */}
    <div className='p-4'>
      <h3 className="sm:hidden text-lg font-semibold">{title}</h3>
    </div>
    {/*main booking History List */}
    <div className="flex items-center justify-between p-4">
    <div className="flex items-center">
      <Image src={imageSrc} alt="Booking Image" width={50} height={50} className="rounded-xl" />
      <div className="ml-4">
        <h3 className="hidden sm:block text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-500">{days} Days</p>
      </div>
    </div>
    <div className="flex flex-col md:flex-row items-baseline md:items-center space-x-2 text-sm pl-6 pr-6">
      <div className='flex items-center gap-2 md:pr-4'>
        <MdFlightTakeoff />
        <span>{startDate}</span>
      </div>
      <div className='flex items-center gap-2'>
        <MdFlightLand />
        <span>{endDate}</span>
      </div>
    </div>
    <p className="text-lg font-semibold text-gray-800">{price}$</p>
  </div>
  </div>
  
);

const BookingList: React.FC = () => {
  const bookings = [
    { title: "Sri Lanka Wildlife - Ultimate", days: 14, startDate: "11/11/2023", endDate: "26/01/2024", price: 100, imageSrc: tiger_face },
    { title: "Sri Lanka Wildlife - Ultimate", days: 14, startDate: "11/11/2023", endDate: "26/01/2024", price: 100, imageSrc: tiger_face },
    { title: "Sri Lanka Wildlife - Ultimate", days: 14, startDate: "11/11/2023", endDate: "26/01/2024", price: 100, imageSrc: tiger_face },
    { title: "Sri Lanka Wildlife - Ultimate", days: 14, startDate: "11/11/2023", endDate: "26/01/2024", price: 100, imageSrc: tiger_face },
  ];

  return (
    <div className="bg-white border rounded-2xl lg:pr-[248px]">
      {bookings.map((booking, index) => (
        <BookingItem key={index} {...booking} />
      ))}
    </div>
  );
};

export default BookingList;
