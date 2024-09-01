import template1 from "../assets/1.png";
import template2 from "../assets/2.png";
import template3 from "../assets/3.png";
import template4 from "../assets/4.png";
import template5 from "../assets/5.png";

const TemplateSelection = ({ selectedTemplate }) => {
  const getTemplateImage = () => {
    switch (selectedTemplate) {
      case 1:
        return template1;
      case 2:
        return template2;
      case 3:
        return template3;
      case 4:
        return template4;
      case 5:
        return template5;
      default:
        return template1;
    }
  };

  return (
    <div className="">
      <div className="flex">
        <img src={getTemplateImage()} alt={`Template ${selectedTemplate}`} />
      </div>
    </div>
  );
};

export default TemplateSelection;
