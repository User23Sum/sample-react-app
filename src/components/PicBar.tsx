import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import image4 from "../images/image4.jpg";
import image5 from "../images/image5.jpg";
import image6 from "../images/image6.jpg";

const PicBar = () => {
    // Define your gallery images here
    const images = [
      image1,
      image2,
      image3,
      image4,
      image5,
      image6,
    ];

    return (
        <div className="flex justify-center items-center"
        style={{
            backgroundColor: "#1D1E2C",
          }}
        >
          <div className="grid grid-cols-6 gap-4 p-4">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Image ${index + 1}`}
                className="w-full h-40 object-cover"
              />
            ))}
          </div>
        </div>
      );
    };

export default PicBar;